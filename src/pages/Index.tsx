import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, MapPin, Code2, Pen, ArrowDown, Github, Mail, Coffee, Car } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import techIllustration from "@/assets/tech-illustration.jpg";
import lifeCollage from "@/assets/life-collage.jpg";
import blogHero from "@/assets/blog-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-serif">
      {/* Hero Section - Full Screen */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="城市夜景" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <Avatar className="w-40 h-40 mx-auto mb-8 border-2 border-primary/10 animate-float">
            <AvatarImage src="/placeholder.svg" alt="头像" />
            <AvatarFallback className="text-4xl font-light bg-primary/5">李</AvatarFallback>
          </Avatar>
          
          <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wide">
            李明轩
          </h1>
          
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-12">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>北京</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-1">
              <Car className="w-4 h-4" />
              <span>存在主义者</span>
            </div>
            <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-1">
              <Coffee className="w-4 h-4" />
              <span>咖啡爱好者</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="min-h-screen flex items-center justify-center py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-light mb-4">我的世界</h2>
            <p className="text-lg text-muted-foreground font-light">
              代码与生活，思考与存在
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 技术探索 */}
            <Link to="/tech" className="group">
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden h-80 hover:bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="h-32 overflow-hidden">
                  <img src={techIllustration} alt="技术探索" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col justify-between h-48">
                  <div>
                    <Code2 className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-medium mb-2">技术探索</h3>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed">
                      代码世界的诗意构建
                    </p>
                  </div>
                  <div className="text-sm text-primary font-light">进入 →</div>
                </div>
              </div>
            </Link>

            {/* 生活记录 */}
            <Link to="/photography" className="group">
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden h-80 hover:bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="h-32 overflow-hidden">
                  <img src={lifeCollage} alt="生活记录" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col justify-between h-48">
                  <div>
                    <Camera className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-medium mb-2">生活记录</h3>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed">
                      光影中的日常与美好
                    </p>
                  </div>
                  <div className="text-sm text-primary font-light">进入 →</div>
                </div>
              </div>
            </Link>

            {/* 思考随笔 */}
            <Link to="/blog" className="group">
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden h-80 hover:bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="h-32 overflow-hidden">
                  <img src={blogHero} alt="思考随笔" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col justify-between h-48">
                  <div>
                    <div className="w-8 h-8 text-primary mb-3 text-xl group-hover:scale-110 transition-transform duration-300">✨</div>
                    <h3 className="text-xl font-medium mb-2">思考随笔</h3>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed">
                      存在主义的思维碎片
                    </p>
                  </div>
                  <div className="text-sm text-primary font-light">进入 →</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center py-16 px-6 bg-muted/10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-light mb-8">关于我</h2>
            
            <div className="text-lg leading-relaxed text-muted-foreground font-light space-y-4 mb-12">
              <p>
                存在主义者，北漂程序员，在代码与哲学间寻找平衡。
              </p>
              <p>
                开着极氪007GT穿梭于城市，用镜头记录生活，在咖啡香中思考人生。
              </p>
            </div>
            
            <div className="flex justify-center gap-6">
              <Button variant="outline" size="lg" className="gap-2 font-light">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="gap-2 font-light">
                <Mail className="w-4 h-4" />
                联系我
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;