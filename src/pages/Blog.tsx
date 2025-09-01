import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Tag, Eye, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "在代码与诗歌之间",
      excerpt: "探讨程序员的文学修养对代码质量的影响，以及如何在技术工作中保持人文情怀",
      content: "技术与人文并不对立，优雅的代码如同优美的诗歌，都追求简洁、明确、富有韵律...",
      date: "2024-01-15",
      readTime: "8分钟",
      category: "技术思考",
      tags: ["编程哲学", "代码美学", "人文"],
      views: 1247,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: "晨跑中的思考：关于坚持的意义",
      excerpt: "每天清晨5点的跑步中，我开始理解什么是真正的坚持，以及它如何改变我们的生活",
      content: "坚持不是一种痛苦的义务，而是一种生活的选择。在每个清晨的奔跑中...",
      date: "2024-01-12",
      readTime: "6分钟", 
      category: "生活感悟",
      tags: ["跑步", "坚持", "自律"],
      views: 892,
      likes: 156,
      comments: 34
    },
    {
      id: 3,
      title: "React Hooks的设计哲学",
      excerpt: "深入分析React Hooks的设计理念，以及它如何改变我们编写组件的思维方式",
      content: "Hooks不仅仅是一个新的API，它代表了React团队对函数式编程和组件复用的深度思考...",
      date: "2024-01-10",
      readTime: "12分钟",
      category: "技术分享",
      tags: ["React", "Hooks", "函数式编程"],
      views: 2156,
      likes: 203,
      comments: 67
    },
    {
      id: 4,
      title: "咖啡店里的观察：都市生活的诗意瞬间",
      excerpt: "在熙熙攘攘的咖啡店里，每个人都是一个故事，每个瞬间都值得记录",
      content: "午后的咖啡店总是充满故事。阳光透过玻璃窗洒在木桌上，蒸汽从咖啡杯中袅袅升起...",
      date: "2024-01-08",
      readTime: "5分钟",
      category: "生活观察",
      tags: ["都市生活", "观察", "咖啡文化"],
      views: 643,
      likes: 78,
      comments: 19
    },
    {
      id: 5,
      title: "TypeScript进阶：类型体操的艺术",
      excerpt: "探索TypeScript类型系统的高级用法，如何通过类型编程提升代码的安全性和表达力",
      content: "TypeScript的类型系统远比表面看起来强大。通过巧妙地运用条件类型、映射类型...",
      date: "2024-01-05",
      readTime: "15分钟",
      category: "技术深入",
      tags: ["TypeScript", "类型系统", "进阶技巧"],
      views: 1832,
      likes: 167,
      comments: 45
    },
    {
      id: 6,
      title: "摄影教会我的事：如何用不同的视角看世界",
      excerpt: "摄影不仅改变了我记录生活的方式，更重要的是改变了我观察世界的角度",
      content: "拿起相机的那一刻，世界变得不同了。光线、阴影、色彩、构图，这些以前从未注意的细节...",
      date: "2024-01-03",
      readTime: "7分钟",
      category: "摄影心得",
      tags: ["摄影", "视角", "观察力"],
      views: 567,
      likes: 94,
      comments: 28
    }
  ];

  const categories = ["全部", "技术思考", "生活感悟", "技术分享", "生活观察", "技术深入", "摄影心得"];

  const stats = {
    totalPosts: "42",
    totalViews: "18.7K",
    totalLikes: "1.2K",
    followers: "856"
  };

  return (
    <div className="min-h-screen bg-background font-serif">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-light">返回首页</span>
          </Link>
          <h1 className="text-2xl font-light">思考随笔</h1>
          <div></div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-20 animate-fade-in">
          <div className="text-6xl mb-6">✍️</div>
          <h2 className="text-5xl font-light mb-6">文字的力量</h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            记录思维的碎片，分享生活的感悟。在快节奏的世界中，文字是我们与内心对话的桥梁，是思想沉淀的容器。
          </p>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="text-primary mx-auto mb-3 text-2xl">📝</div>
                <div className="text-2xl font-light mb-1">{stats.totalPosts}</div>
                <div className="text-sm text-muted-foreground font-light">文章数量</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-light mb-1">{stats.totalViews}</div>
                <div className="text-sm text-muted-foreground font-light">总阅读量</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-light mb-1">{stats.totalLikes}</div>
                <div className="text-sm text-muted-foreground font-light">获赞数</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="text-primary mx-auto mb-3 text-2xl">👥</div>
                <div className="text-2xl font-light mb-1">{stats.followers}</div>
                <div className="text-sm text-muted-foreground font-light">关注者</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="font-light cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                {category}
              </Badge>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300 hover:shadow-lg group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="font-light">{post.category}</Badge>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-medium group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="font-light leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-light">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <button className="text-primary font-light hover:underline">
                      阅读全文 →
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Writing Philosophy */}
        <section className="text-center bg-muted/20 rounded-3xl p-12">
          <h3 className="text-3xl font-light mb-8">写作感悟</h3>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              "写作是思考的延伸，是与自己内心对话的方式。每一个文字都承载着情感，每一句话都反映着思考的深度。"
            </p>
            <p>
              "在技术的世界里，我们追求效率和精确；在文字的世界里，我们寻求美感和共鸣。两者并不矛盾，都是表达的艺术。"
            </p>
            <p>
              "好的文章不在于华丽的辞藻，而在于真诚的表达和独特的见解。用简单的文字传达复杂的思想，这就是写作的魅力。"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;