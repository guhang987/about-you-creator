import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Camera, MapPin, Clock, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import sunset from "@/assets/sunset.jpeg";
import zeekerRun from "@/assets/zeeker-run.jpeg";
import photoMoonWaterCube from "@/assets/27F30534-0D01-4920-9EA0-BEA3F4029EAC_1_105_c.jpeg";
import photoSpiritualMatter from "@/assets/1E557E2C-21F4-4D2C-9CE7-C6316B308253_1_201_a.jpeg";
import photoAutumnPark from "@/assets/FBE97F87-A00F-4E97-828B-0B92E5D5DBE6_1_201_a.jpeg";
import photoCityStreet from "@/assets/9351B81A-7E9E-4884-8189-8A7A56E45E40_1_102_a.jpeg";
import photoMountainLake from "@/assets/04628240-DD27-4A4A-B046-CBFE1B01BC5C_1_105_c.jpeg";
import photoDesertLandscape from "@/assets/05320E60-BB8C-4E98-86A5-0F657861176D_1_105_c.jpeg";
import photoSunsetBeach from "@/assets/0D377586-A1D2-45C2-962F-0C4B0A4AFD64_1_105_c.jpeg";
import photoForestTrail from "@/assets/1E50C8B8-E7AC-41C5-BCF6-806D13E9C2FE_1_102_a.jpeg";
import photoUrbanSkyline from "@/assets/430D9932-0F48-441E-ABB7-7B2730C02744_1_105_c.jpeg";
import photoHistoricBuilding from "@/assets/4A991E71-8C9D-499B-92B3-6100BC697AC9_1_105_c.jpeg";
import photoMountainPeak from "@/assets/4B1D0D07-3976-48EC-A77C-019281AD9B22_1_105_c.jpeg";
import photoCherryBlossom from "@/assets/A1850F8B-15D0-4679-88A6-7243C5EE3828_1_105_c.jpeg";
import photoCityNight from "@/assets/AB664628-C53C-4C64-9E37-905AD623680C_1_102_a.jpeg";
import photoStreetFood from "@/assets/B8D1A859-B1E1-43FB-BA66-131558F2EDE9_1_102_a.jpeg";
import photoMountainFog from "@/assets/D9735E9B-F516-4C20-984E-8868D2D17B44_1_105_c.jpeg";
import photoOceanWave from "@/assets/F5053ED2-2170-40FB-9E45-62288D18C6A6_1_102_a.jpeg";
import photoFlowerField from "@/assets/0B863601-FBF4-45D2-921D-A70B0A867378_1_201_a.jpeg";
import photoDesertSunset from "@/assets/1105E279-FDF9-4A04-9249-B14E86E357F9_1_105_c.jpeg";
import photoCityPark from "@/assets/2337A562-4C57-4033-B0AC-843E4FFF0413_1_105_c.jpeg";
import photoFamilyTravel from "@/assets/2F667E3B-A17C-4CB5-AC8A-2EE97E7C8437.jpeg";
import photoWaterfall from "@/assets/33956AEE-E5F5-4628-BEC0-BFD3EBD30E27_1_105_c.jpeg";
import photoUrbanLife from "@/assets/3D7A552E-821E-4A0E-851E-30E1A066ECBF_1_102_a.jpeg";
import photoRuralScenery from "@/assets/56C48CEF-6C4B-4532-B8B4-805F10755B84_1_105_c.jpeg";
import photoHistoricStreet from "@/assets/6793B604-5D5D-480C-958E-FA0CCF7977A4_1_105_c.jpeg";
import photoTraditionalCulture from "@/assets/6A4D274E-B756-44FE-B634-7409165ED735_1_102_o.jpeg";
import photoLocalMarket from "@/assets/789ABA1B-45AC-4B2B-853F-50344643CCDE_1_102_o.jpeg";
import photoWinterSnow from "@/assets/7A48D6EA-76A8-4F9E-91DF-B06D5F7595E9_1_105_c.jpeg";
import photoStreetArt from "@/assets/970C8113-FE0B-4E23-BEB1-5DE6AE9D3AAC_1_105_c.jpeg";
import photoFestivalCelebration from "@/assets/A6111E09-9AE0-40C6-A9B2-CA67F0023CB1_1_102_o.jpeg";
import photoAerialView from "@/assets/A9294BD2-D019-465B-B599-9B519732B2CC_1_106_c.jpeg";

const Photography = () => {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  
  const photos = [
    {
      id: 1,
      title: "城市日落",
      location: "北京国贸",
      date: "2025-01-10",
      description: "日落时分的城市天际线，夕阳为建筑镀上了一层金色",
      camera: "Canon R5",
      settings: "f/2.8, 1/60s, ISO 800",
      category: "城市",
      image: sunset
    },
    {
      id: 7,
      title: "跑步伙伴",
      location: "奥森公园",
      date: "2025-01-15",
      description: "陪我在奥森跑步的zeeker",
      camera: "iPhone 15 Pro",
      settings: "f/1.8, 1/250s, ISO 100",
      category: "生活",
      image: zeekerRun
    },
    {
      id: 8,
      title: "水立方明月",
      location: "北京水立方",
      date: "2025-01-20",
      description: "水立方上空的一轮明月",
      camera: "Canon R5",
      settings: "f/5.6, 1/500s, ISO 100",
      category: "城市",
      image: photoMoonWaterCube
    },
    {
      id: 9,
      title: "精神与物质",
      location: "北京",
      date: "2025-01-25",
      description: "三联生活书店与LV",
      camera: "Nikon Z7 II",
      settings: "f/4.0, 1/125s, ISO 200",
      category: "生活",
      image: photoSpiritualMatter
    },
    {
      id: 10,
      title: "牛马与牛马",
      location: "承德",
      date: "2025-10-01",
      description: "草原天路，windows壁纸取景地",
      camera: "Sony A7R5",
      settings: "f/5.6, 1/250s, ISO 100",
      category: "自然",
      image: photoAutumnPark
    },
    {
      id: 11,
      title: "龙庆峡",
      location: "北京昌平",
      date: "2025-02-10",
      description: "山谷河流蜿蜒，蓝天映山峦，春日山野清新宜人。",
      camera: "Leica M11",
      settings: "f/2.8, 1/125s, ISO 400",
      category: "山水",
      image: photoCityStreet
    },
    {
      id: 12,
      title: "湖光山色",
      location: "杭州西湖",
      date: "2025-03-05",
      description: "湖水如镜，倒映着远处的山峦，天地间一片宁静与和谐",
      camera: "Canon R6",
      settings: "f/8.0, 1/125s, ISO 100",
      category: "自然",
      image: photoMountainLake
    },
    {
      id: 13,
      title: "赤壁赋",
      location: "东坡赤壁",
      date: "2025-04-15",
      description: "惟江上之清风，与山间之明月",
      camera: "Sony A7R5",
      settings: "f/11, 1/250s, ISO 100",
      category: "书法",
      image: photoDesertLandscape
    },
    {
      id: 14,
      title: "宇宙浪漫",
      location: "不老屯天文台",
      date: "2025-02-20",
      description: "人类唯一该做的就是探索宇宙，其他的事儿都没啥意义",
      camera: "Nikon Z7 II",
      settings: "f/5.6, 1/250s, ISO 200",
      category: "星空",
      image: photoSunsetBeach
    },
    {
      id: 15,
      title: "时光里的皇家史诗",
      location: "故宫博物院",
      date: "2025-05-10",
      description: "红墙黄瓦层叠，宫殿群庄严恢弘，镌刻着王朝的辉煌印记。",
      camera: "Fuji X-T5",
      settings: "f/4.0, 1/60s, ISO 400",
      category: "自然",
      image: photoForestTrail
    },
    {
      id: 16,
      title: "筋斗云",
      location: "海淀",
      date: "2025-01-15",
      description: "大团白云像蓬松的棉团飘在城市上空",
      camera: "Canon R5",
      settings: "f/8.0, 1/125s, ISO 200",
      category: "城市",
      image: photoUrbanSkyline
    },
    {
      id: 17,
      title: "西北工业大学",
      location: "陕西西安",
      date: "2025-01-25",
      description: "计算机学院楼",
      camera: "Leica Q3",
      settings: "f/5.6, 1/125s, ISO 100",
      category: "建筑",
      image: photoHistoricBuilding
    },
    {
      id: 18,
      title: "海鸥",
      location: "天津滨海",
      date: "2025-05-01",
      description: "海鸥栖栏，海面漾波，船只静卧，尽是海滨悠然意",
      camera: "Sony A7R4",
      settings: "f/11, 1/250s, ISO 100",
      category: "动物",
      image: photoMountainPeak
    },
    {
      id: 19,
      title: "春日湖景",
      location: "什刹海",
      date: "2025-03-20",
      description: "湖水漾波，树影摇，岸边人闲，北京有北京自己的海。",
      camera: "Canon EOS R",
      settings: "f/2.8, 1/250s, ISO 200",
      category: "自然",
      image: photoCherryBlossom
    },
    {
      id: 20,
      title: "湖心亭",
      location: "蟒山国家森林公园",
      date: "2025-01-10",
      description: "湖水绕岛，古亭静立，远山层叠，尽显清幽。",
      camera: "Nikon Z6 II",
      settings: "f/5.6, 2s, ISO 400",
      category: "城市",
      image: photoCityNight
    },
    {
      id: 21,
      title: "一览众山小",
      location: "妙峰山",
      date: "2025-04-05",
      description: "登山时，站在山顶，俯瞰风景，发现了世界上最小的森林",
      camera: "iPhone 15 Pro",
      settings: "f/1.8, 1/60s, ISO 320",
      category: "自然",
      image: photoStreetFood
    },
    {
      id: 22,
      title: "画中景",
      location: "东极岛",
      date: "2025-06-15",
      description: "在东极岛偶尔发现景在画中，画在景中",
      camera: "Sony A7R5",
      settings: "f/8.0, 1/250s, ISO 200",
      category: "自然",
      image: photoMountainFog
    },
    {
      id: 23,
      title: "京郊洱海",
      location: "明十三陵水库",
      date: "2025-07-10",
      description: "小洱海",
      camera: "Canon EOS R3",
      settings: "f/8.0, 1/1000s, ISO 200",
      category: "自然",
      image: photoOceanWave
    },
    {
      id: 24,
      title: "夕阳浪漫",
      location: "北京海淀",
      date: "2025-02-25",
      description: "楼宇错落间，晚霞似彩缎铺满天际，为城市晕染出温柔底色。",
      camera: "Sony A7R5",
      settings: "f/11, 1/250s, ISO 100",
      category: "自然",
      image: photoFlowerField
    },
    {
      id: 25,
      title: "川西风景",
      location: "四川甘孜",
      date: "2025-09-15",
      description: "蓝天、湖水、山峦环绕",
      camera: "Canon R5",
      settings: "f/5.6, 1/250s, ISO 200",
      category: "自然",
      image: photoDesertSunset
    },
    {
      id: 26,
      title: "马拉松纪念",
      location: "陕西西安",
      date: "2025-04-20",
      description: "曾经也跑过马拉松",
      camera: "Fuji X-T5",
      settings: "f/4.0, 1/125s, ISO 200",
      category: "城市",
      image: photoCityPark
    },
    {
      id: 27,
      title: "云肩坠落",
      location: "-",
      date: "2025-01-25",
      description: "坠入斑斓云浪，与光同舞，幻梦般浪漫",
      camera: "iPhone 15 Pro",
      settings: "f/2.8, 1/1000s, ISO 100",
      category: "生活",
      image: photoFamilyTravel
    },
    {
      id: 28,
      title: "晚霞",
      location: "深圳宝安",
      date: "2025-06-10",
      description: "瀑布从高处倾泻而下，溅起层层水花，在阳光的照射下形成美丽的彩虹",
      camera: "Nikon Z7 II",
      settings: "f/11, 1/250s, ISO 100",
      category: "自然",
      image: photoWaterfall
    },
    {
      id: 29,
      title: "惬意海边",
      location: "葫芦岛",
      date: "2025-03-15",
      description: "海石相依，远岛如黛，风携潮汐的温柔。",
      camera: "Leica M11",
      settings: "f/2.0, 1/250s, ISO 400",
      category: "城市",
      image: photoUrbanLife
    },
    {
      id: 30,
      title: "光影洒落",
      location: "南石洋大峡谷",
      date: "2025-04-05",
      description: "追逐斑驳光影",
      camera: "Canon R6",
      settings: "f/8.0, 1/125s, ISO 100",
      category: "自然",
      image: photoRuralScenery
    },
    {
      id: 31,
      title: "长河落日圆",
      location: "沩水河畔",
      date: "2025-05-20",
      description: "偶然所得湖畔落日",
      camera: "Leica Q3",
      settings: "f/5.6, 1/125s, ISO 100",
      category: "建筑",
      image: photoHistoricStreet
    },
    {
      id: 32,
      title: "日落大道",
      location: "天津滨海",
      date: "2025-01-15",
      description: "天津滨海的落日时分，公路延展向远方，云霞浸着暖光，车辆载着暮色悠然前行",
      camera: "Nikon Z6 II",
      settings: "f/4.0, 1/60s, ISO 400",
      category: "生活",
      image: photoTraditionalCulture
    },
    {
      id: 33,
      title: "彩虹🌈",
      location: "天津滨海",
      date: "2025-04-10",
      description: "海上彩虹",
      camera: "iPhone 15 Pro",
      settings: "f/1.8, 1/60s, ISO 320",
      category: "生活",
      image: photoLocalMarket
    },
    {
      id: 34,
      title: "日照金山",
      location: "甘孜",
      date: "2025-01-05",
      description: "日落、雪山和流云",
      camera: "Sony A7R4",
      settings: "f/8.0, 1/250s, ISO 200",
      category: "自然",
      image: photoWinterSnow
    },
    {
      id: 35,
      title: "雁栖湖",
      location: "北京怀柔",
      date: "2025-03-01",
      description: "京郊小瑞士",
      camera: "Fuji X-T4",
      settings: "f/4.0, 1/125s, ISO 200",
      category: "城市",
      image: photoStreetArt
    },
    {
      id: 36,
      title: "金光穿洞",
      location: "颐和园",
      date: "2025-02-08",
      description: "颐和园十七孔桥沐着夕光，桥洞淌金，古意与光影织就诗意画卷。",
      camera: "Canon R5",
      settings: "f/4.0, 1/250s, ISO 800",
      category: "生活",
      image: photoFestivalCelebration
    },
    {
      id: 37,
      title: "云绕青山间",
      location: "北京顺义",
      date: "2025-02-15",
      description: "蓝天白云漫过山峦，群峰如墨、雪顶隐现，铺展成自然的壮阔画卷。",
      camera: "DJI Mavic 3",
      settings: "f/8.0, 1/100s, ISO 100",
      category: "自然",
      image: photoAerialView
    }
  ];

  const categories = ["全部", "城市", "自然", "生活", "建筑"];
  
  const filteredPhotos = selectedCategory === "全部" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);
  
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              <Badge 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"} 
                className="font-light cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-20">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPhotos.map((photo) => (
              <Card key={photo.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300 hover:shadow-lg group overflow-hidden">
                <div className="bg-muted/20 relative overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-auto object-contain max-h-[400px] group-hover:scale-105 transition-transform duration-300"
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