import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, MapPin, Code2, Pen, ArrowDown, Github, Mail, Coffee } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-serif">
      {/* Hero Section - Full Screen */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <Avatar className="w-40 h-40 mx-auto mb-8 border-2 border-primary/10 animate-float">
            <AvatarImage src="/placeholder.svg" alt="头像" />
            <AvatarFallback className="text-4xl font-light bg-primary/5">李</AvatarFallback>
          </Avatar>
          
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wide">
            李明轩
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 leading-relaxed">
            代码诗人 · 生活记录者 · 美学追求者
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-12">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>北京</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-1">
              <Coffee className="w-4 h-4" />
              <span>精品咖啡爱好者</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-light mb-4">我的世界</h2>
            <p className="text-lg text-muted-foreground font-light">
              在代码与生活之间，寻找平衡与美感
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 技术世界 */}
            <Link to="/tech" className="group">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-64 flex flex-col justify-between hover:bg-card hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
                <div>
                  <Code2 className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-medium mb-3">技术探索</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    用代码构建数字世界，在算法中寻找诗意与优雅
                  </p>
                </div>
                <div className="text-sm text-primary font-light">进入 →</div>
              </div>
            </Link>

            {/* 跑步记录 */}
            <Link to="/running" className="group">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-64 flex flex-col justify-between hover:bg-card hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
                <div>
                  <div className="w-12 h-12 text-primary mb-4 text-2xl group-hover:scale-110 transition-transform duration-300">🏃‍♂️</div>
                  <h3 className="text-2xl font-medium mb-3">奔跑足迹</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    每一步都是对自我的超越，记录汗水与坚持的故事
                  </p>
                </div>
                <div className="text-sm text-primary font-light">进入 →</div>
              </div>
            </Link>

            {/* 摄影作品 */}
            <Link to="/photography" className="group">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-64 flex flex-col justify-between hover:bg-card hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
                <div>
                  <Camera className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-medium mb-3">光影记录</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    用镜头捕捉瞬间的美好，在光影变化中感受生活
                  </p>
                </div>
                <div className="text-sm text-primary font-light">进入 →</div>
              </div>
            </Link>

            {/* 博客文章 */}
            <Link to="/blog" className="group">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-64 flex flex-col justify-between hover:bg-card hover:shadow-lg transition-all duration-500 hover:-translate-y-2">
                <div>
                  <Pen className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-medium mb-3">思考随笔</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    记录思维的碎片，分享生活的感悟与技术的思考
                  </p>
                </div>
                <div className="text-sm text-primary font-light">进入 →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-light mb-8">关于我</h2>
            
            <div className="text-lg leading-relaxed text-muted-foreground font-light space-y-6 mb-12">
              <p>
                我是一名热爱生活的程序员，相信技术与美学并不冲突。
              </p>
              <p>
                在代码的世界里追求优雅与效率，在生活中寻找平静与美好。
              </p>
              <p>
                跑步让我保持清醒，摄影帮我发现美感，写作助我沉淀思考。
              </p>
            </div>
            
            <div className="flex justify-center gap-6">
              <Button variant="outline" size="lg" className="gap-2 font-light">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="gap-2 font-light">
                <Mail className="w-4 h-4" />
                邮箱联系
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;