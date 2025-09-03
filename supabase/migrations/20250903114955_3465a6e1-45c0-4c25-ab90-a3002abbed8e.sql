-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  read_time TEXT NOT NULL DEFAULT '5分钟',
  views INTEGER NOT NULL DEFAULT 0,
  likes INTEGER NOT NULL DEFAULT 0
);

-- Create post views tracking table
CREATE TABLE public.post_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  ip_address TEXT,
  user_agent TEXT,
  viewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create post likes table
CREATE TABLE public.post_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  ip_address TEXT NOT NULL,
  liked_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(post_id, ip_address)
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_likes ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_posts (public read access)
CREATE POLICY "Blog posts are publicly readable" 
ON public.blog_posts 
FOR SELECT 
USING (true);

-- Create policies for post_views (anyone can insert views)
CREATE POLICY "Anyone can record post views" 
ON public.post_views 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Post views are publicly readable" 
ON public.post_views 
FOR SELECT 
USING (true);

-- Create policies for post_likes (anyone can like/unlike)
CREATE POLICY "Anyone can like posts" 
ON public.post_likes 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view likes" 
ON public.post_likes 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can remove their likes" 
ON public.post_likes 
FOR DELETE 
USING (true);

-- Create function to update blog post stats
CREATE OR REPLACE FUNCTION public.update_post_stats()
RETURNS TRIGGER AS $$
BEGIN
  -- Update views count
  IF TG_TABLE_NAME = 'post_views' THEN
    UPDATE public.blog_posts 
    SET views = (
      SELECT COUNT(*) 
      FROM public.post_views 
      WHERE post_id = NEW.post_id
    )
    WHERE id = NEW.post_id;
  END IF;
  
  -- Update likes count
  IF TG_TABLE_NAME = 'post_likes' THEN
    UPDATE public.blog_posts 
    SET likes = (
      SELECT COUNT(*) 
      FROM public.post_likes 
      WHERE post_id = COALESCE(NEW.post_id, OLD.post_id)
    )
    WHERE id = COALESCE(NEW.post_id, OLD.post_id);
  END IF;
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Create triggers to update stats
CREATE TRIGGER update_views_count
  AFTER INSERT ON public.post_views
  FOR EACH ROW
  EXECUTE FUNCTION public.update_post_stats();

CREATE TRIGGER update_likes_count_on_insert
  AFTER INSERT ON public.post_likes
  FOR EACH ROW
  EXECUTE FUNCTION public.update_post_stats();

CREATE TRIGGER update_likes_count_on_delete
  AFTER DELETE ON public.post_likes
  FOR EACH ROW
  EXECUTE FUNCTION public.update_post_stats();

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, excerpt, content, category, tags, read_time) VALUES
('在代码与诗歌之间', '探讨程序员的文学修养对代码质量的影响，以及如何在技术工作中保持人文情怀', '技术与人文并不对立，优雅的代码如同优美的诗歌，都追求简洁、明确、富有韵律。作为程序员，我们不应该只是代码的搬运工，更应该是数字世界的诗人。每一行代码都承载着我们的思考，每一个函数都体现着我们的美学追求。\n\n在日常的编程工作中，我经常思考如何让代码变得更加优雅。这不仅仅是为了提高可读性和维护性，更是一种对美的追求。就像诗人会反复推敲每一个字词，程序员也应该精心雕琢每一行代码。\n\n文学修养对程序员的帮助是多方面的。首先，良好的文学素养能够提升我们的表达能力，让我们写出更清晰的注释和文档。其次，文学中的逻辑思维训练能够帮助我们更好地组织代码结构。最重要的是，文学给予我们一种审美的眼光，让我们能够识别和创造美的代码。', '技术思考', ARRAY['编程哲学', '代码美学', '人文'], '8分钟'),

('晨跑中的思考：关于坚持的意义', '每天清晨5点的跑步中，我开始理解什么是真正的坚持，以及它如何改变我们的生活', '坚持不是一种痛苦的义务，而是一种生活的选择。在每个清晨的奔跑中，我逐渐明白了这个道理。\n\n五点的城市还在沉睡，街道上只有稀疏的车辆和偶尔经过的清洁工。这个时候的世界属于那些愿意早起的人，属于那些选择与自己对话的人。脚步声在空旷的街道上回响，每一步都是对惰性的反抗，每一次呼吸都是对生命的致敬。\n\n跑步教会我的不仅仅是体能的提升，更重要的是意志力的锻炼。当身体想要停下来的时候，内心的声音告诉我继续前进。这种内在的对话在生活的其他方面同样重要——工作中遇到困难时，学习新技能遇到瓶颈时，都需要这种坚持下去的勇气。', '生活感悟', ARRAY['跑步', '坚持', '自律'], '6分钟'),

('React Hooks的设计哲学', '深入分析React Hooks的设计理念，以及它如何改变我们编写组件的思维方式', 'Hooks不仅仅是一个新的API，它代表了React团队对函数式编程和组件复用的深度思考。让我们深入探讨Hooks背后的设计哲学。\n\n在Hooks出现之前，React组件的状态管理主要依赖于类组件。虽然类组件功能强大，但它们也带来了一些问题：this绑定的困惑、生命周期方法的复杂性、以及代码复用的困难。Hooks的出现优雅地解决了这些问题。\n\n函数式编程的核心思想是通过函数的组合来构建复杂的程序。Hooks正是这一思想在React中的体现。每个Hook都是一个纯函数，它们可以被组合、嵌套、甚至抽象成自定义Hook。这种设计让代码变得更加模块化和可复用。\n\n从useState到useEffect，从useMemo到useCallback，每个Hook都有其特定的用途和最佳实践。理解这些Hook的设计初衷，能够帮助我们写出更高效、更易维护的React代码。', '技术分享', ARRAY['React', 'Hooks', '函数式编程'], '12分钟'),

('咖啡店里的观察：都市生活的诗意瞬间', '在熙熙攘攘的咖啡店里，每个人都是一个故事，每个瞬间都值得记录', '午后的咖啡店总是充满故事。阳光透过玻璃窗洒在木桌上，蒸汽从咖啡杯中袅袅升起，空气中弥漫着咖啡豆的香气和轻柔的背景音乐。\n\n角落里的女孩专注地在笔记本上写着什么，偶尔停下来思考，然后继续埋头书写。她的眉头时而紧锁，时而舒展，仿佛在和文字进行着一场无声的对话。不远处，一位中年男士正在用平板电脑处理工作邮件，他的手指在屏幕上快速滑动，眼神专注而认真。\n\n咖啡师熟练地操作着咖啡机，每一个动作都充满了仪式感。他们不仅是在制作饮品，更像是在进行一场关于味觉的艺术创作。客人们排队等待，有的在刷手机，有的在和朋友聊天，有的只是静静地等待，享受这片刻的宁静。\n\n这些看似平凡的瞬间，构成了都市生活的诗意。每个人都在自己的世界里忙碌着，却又在这个共同的空间里分享着时光。', '生活观察', ARRAY['都市生活', '观察', '咖啡文化'], '5分钟'),

('TypeScript进阶：类型体操的艺术', '探索TypeScript类型系统的高级用法，如何通过类型编程提升代码的安全性和表达力', 'TypeScript的类型系统远比表面看起来强大。通过巧妙地运用条件类型、映射类型、模板字面量类型等高级特性，我们可以在编译时完成许多复杂的类型推导和约束。\n\n条件类型是TypeScript中最强大的特性之一。它允许我们根据类型条件来选择不同的类型分支，就像编程中的if-else语句一样。结合映射类型，我们可以对对象类型进行变换，创建出更加灵活和精确的类型定义。\n\n模板字面量类型的引入让TypeScript在处理字符串类型时变得更加强大。我们可以利用它来创建类型安全的API路径、CSS类名，甚至是SQL查询语句的类型检查。\n\n这些高级特性的掌握需要大量的练习和思考。就像学习任何技艺一样，类型编程也是一门需要不断精进的艺术。当我们能够熟练运用这些技巧时，就能写出既安全又优雅的TypeScript代码。', '技术深入', ARRAY['TypeScript', '类型系统', '进阶技巧'], '15分钟'),

('摄影教会我的事：如何用不同的视角看世界', '摄影不仅改变了我记录生活的方式，更重要的是改变了我观察世界的角度', '拿起相机的那一刻，世界变得不同了。光线、阴影、色彩、构图，这些以前从未注意的细节突然变得重要起来。摄影教会我用不同的角度去观察同一个事物，寻找平凡中的不平凡。\n\n摄影最初吸引我的是技术层面——光圈、快门、感光度的组合如何影响最终的成像效果。但随着拍摄经验的积累，我发现技术只是基础，真正重要的是眼睛和心灵的配合。一张好照片不在于使用了多么昂贵的设备，而在于摄影师对生活的理解和感悟。\n\n街拍让我学会了观察人性的细节，风光摄影让我感受到自然的壮美，人像摄影让我理解了情感的表达。每一次按下快门，都是对那个瞬间的确认和记录。这些瞬间串联起来，就构成了我们对世界的认知。\n\n摄影也改变了我的生活方式。我开始更加注意周围的环境，更加珍惜每一个值得记录的时刻。这种观察力的提升不仅让我拍出更好的照片，也让我的生活变得更加丰富多彩。', '摄影心得', ARRAY['摄影', '视角', '观察力'], '7分钟');