import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Zap, Calendar, Target, Trophy, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Running = () => {
  const stats = {
    totalDistance: "1,247",
    totalRuns: "156",
    avgPace: "4:32",
    thisMonth: "87.5"
  };

  const recentRuns = [
    {
      date: "2024-01-15",
      distance: "10.2",
      duration: "46:23",
      pace: "4:33",
      location: "奥森公园",
      weather: "晴朗",
      mood: "充满活力"
    },
    {
      date: "2024-01-13", 
      distance: "5.8",
      duration: "26:45",
      pace: "4:37",
      location: "朝阳公园",
      weather: "多云",
      mood: "轻松愉快"
    },
    {
      date: "2024-01-11",
      distance: "8.5",
      duration: "38:42",
      pace: "4:33",
      location: "颐和园",
      weather: "阴天",
      mood: "专注坚定"
    }
  ];

  const goals = [
    { title: "半马PB", target: "1:35:00", current: "1:42:15", progress: 85 },
    { title: "月跑量", target: "120km", current: "87.5km", progress: 73 },
    { title: "全马目标", target: "3:30:00", current: "训练中", progress: 45 }
  ];

  const runningPhilosophy = [
    "跑步不是为了逃避什么，而是为了遇见更好的自己。",
    "每一步都是对惰性的胜利，每一次呼吸都是对生命的感恩。",
    "在奔跑中思考，在汗水中成长，在坚持中发现内心的力量。"
  ];

  return (
    <div className="min-h-screen bg-background font-serif">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-light">返回首页</span>
          </Link>
          <h1 className="text-2xl font-light">奔跑足迹</h1>
          <div></div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-20 animate-fade-in">
          <div className="text-6xl mb-6">🏃‍♂️</div>
          <h2 className="text-5xl font-light mb-6">在路上</h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            每一步都是对自我的超越，每一次呼吸都是对生活的热爱。在奔跑中寻找内心的平静，在汗水中收获成长的喜悦。
          </p>
        </section>

        {/* Stats Overview */}
        <section className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">数据概览</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-4">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-sm font-light text-muted-foreground">总里程</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-light mb-1">{stats.totalDistance}</div>
                <div className="text-sm text-muted-foreground">公里</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-4">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-sm font-light text-muted-foreground">跑步次数</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-light mb-1">{stats.totalRuns}</div>
                <div className="text-sm text-muted-foreground">次</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-4">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-sm font-light text-muted-foreground">平均配速</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-light mb-1">{stats.avgPace}</div>
                <div className="text-sm text-muted-foreground">分钟/公里</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="pb-4">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-sm font-light text-muted-foreground">本月里程</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-light mb-1">{stats.thisMonth}</div>
                <div className="text-sm text-muted-foreground">公里</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Runs */}
        <section className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">最近记录</h3>
          <div className="space-y-6">
            {recentRuns.map((run, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="secondary" className="font-light">{run.date}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{run.location}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground font-light mb-3">
                        心情：{run.mood} · 天气：{run.weather}
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-light mb-1">{run.distance}</div>
                        <div className="text-xs text-muted-foreground">公里</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light mb-1">{run.duration}</div>
                        <div className="text-xs text-muted-foreground">时间</div>
                      </div>
                      <div>
                        <div className="text-2xl font-light mb-1">{run.pace}</div>
                        <div className="text-xs text-muted-foreground">配速</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">目标追踪</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-4">
                  <Trophy className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="font-medium">{goal.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">目标：</span>
                      <span>{goal.target}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">当前：</span>
                      <span>{goal.current}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-xs text-muted-foreground">
                      {goal.progress}%
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="text-center bg-muted/20 rounded-3xl p-12">
          <h3 className="text-3xl font-light mb-8">跑步哲学</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {runningPhilosophy.map((quote, index) => (
              <p key={index} className="text-lg text-muted-foreground font-light leading-relaxed italic">
                "{quote}"
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Running;