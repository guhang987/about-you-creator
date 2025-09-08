import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Camera, MapPin, Clock, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import photoCityNight from "@/assets/photo-city-night.jpg";
import photoMorningLight from "@/assets/photo-morning-light.jpg";
import photoCoffeeShop from "@/assets/photo-coffee-shop.jpg";
import photoRainbow from "@/assets/photo-rainbow.jpg";
import photoBookstore from "@/assets/photo-bookstore.jpg";
import photoArchitecture from "@/assets/photo-architecture.jpg";

const Photography = () => {
  const photos = [
    {
      id: 1,
      title: "城市夜景",
      location: "北京国贸",
      date: "2024-01-10",
      description: "霓虹灯下的都市生活，每一束光都诉说着这座城市的故事",
      camera: "Canon R5",
      settings: "f/2.8, 1/60s, ISO 800",
      category: "城市",
      image: photoCityNight
    },
    {
      id: 2,
      title: "晨光微露",
      location: "颐和园",
      date: "2024-01-08",
      description: "清晨的第一缕阳光穿过树叶，温柔地唤醒沉睡的大地",
      camera: "Sony A7R4",
      settings: "f/4.0, 1/125s, ISO 200",
      category: "自然",
      image: photoMorningLight
    },
    {
      id: 3,
      title: "街角咖啡",
      location: "三里屯",
      date: "2024-01-05",
      description: "午后的咖啡馆，时光在这里慢慢流淌",
      camera: "Fuji X-T4",
      settings: "f/1.8, 1/80s, ISO 400",
      category: "生活",
      image: photoCoffeeShop
    },
    {
      id: 4,
      title: "雨后彩虹",
      location: "奥森公园",
      date: "2024-01-03",
      description: "雨过天晴后的彩虹，大自然最美的礼物",
      camera: "Canon R5",
      settings: "f/5.6, 1/250s, ISO 100",
      category: "自然",
      image: photoRainbow
    },
    {
      id: 5,
      title: "静谧书店",
      location: "西单",
      date: "2024-01-01",
      description: "书香中的宁静时光，知识与美好在这里相遇",
      camera: "Leica Q2",
      settings: "f/2.0, 1/60s, ISO 640",
      category: "生活",
      image: photoBookstore
    },
    {
      id: 6,
      title: "建筑线条",
      location: "王府井",
      date: "2023-12-28",
      description: "现代建筑的几何美学，线条与光影的完美对话",
      camera: "Sony A7R4",
      settings: "f/8.0, 1/200s, ISO 100",
      category: "建筑",
      image: photoArchitecture
    }
  ];

  const categories = ["全部", "城市", "自然", "生活", "建筑"];
  const stats = {
    totalPhotos: "328",
    exhibitions: "3",
    awards: "2",
    followers: "1.2K"
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
          <h1 className="text-2xl font-light">光影记录</h1>
          <div></div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-20 animate-fade-in">
          <div className="text-6xl mb-6">📸</div>
          <h2 className="text-5xl font-light mb-6">光影诗学</h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            用镜头捕捉瞬间的美好，在光影变化中感受生活的诗意。每一张照片都是时间的切片，每一次快门都是对美的致敬。
          </p>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <Camera className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-light mb-1">{stats.totalPhotos}</div>
                <div className="text-sm text-muted-foreground font-light">作品数量</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-light mb-1">{stats.exhibitions}</div>
                <div className="text-sm text-muted-foreground font-light">展览参与</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-light mb-1">{stats.awards}</div>
                <div className="text-sm text-muted-foreground font-light">获奖作品</div>
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

        {/* Photo Gallery */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <Card key={photo.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300 hover:shadow-lg group overflow-hidden">
                <div className="aspect-[4/3] bg-muted/20 relative overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="font-light text-xs">
                      {photo.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">{photo.title}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed mb-4">
                    {photo.description}
                  </p>
                  
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{photo.location}</span>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                      <Clock className="w-3 h-3" />
                      <span>{photo.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{photo.camera}</span>
                      <span>{photo.settings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Photography Philosophy */}
        <section className="text-center bg-muted/20 rounded-3xl p-12">
          <h3 className="text-3xl font-light mb-8">摄影心得</h3>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              "摄影不是按下快门的瞬间，而是发现美的过程。每一次拍摄都是与世界的对话，每一张照片都承载着情感的温度。"
            </p>
            <p>
              "光影是摄影的语言，构图是摄影的语法，而情感是摄影的灵魂。技术可以学习，但感受需要用心体验。"
            </p>
            <p>
              "在快节奏的生活中，摄影让我学会停下脚步，用不同的角度观察世界，在平凡中发现不凡的美好。"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Photography;