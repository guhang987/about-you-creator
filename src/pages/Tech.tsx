import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, Database, Cloud, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Tech = () => {

  const projects = [
    {
      title: "实时协作编辑器",
      description: "基于WebRTC和OT算法的在线协作平台，支持多人实时编辑文档",
      tech: ["React", "WebRTC", "Node.js", "Redis"],
      status: "生产环境"
    },
    {
      title: "微服务监控系统", 
      description: "分布式系统性能监控平台，实时追踪服务健康状况和性能指标",
      tech: ["Vue", "Golang", "InfluxDB", "Grafana"],
      status: "开源项目"
    },
    {
      title: "智能代码生成工具",
      description: "基于AI的代码自动生成工具，提升开发效率和代码质量",
      tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      status: "实验阶段"
    }
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
          <h1 className="text-2xl font-light">技术探索</h1>
          <div></div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl font-light mb-6">代码诗学</h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            在数字世界中构建美好，用技术连接想象与现实。每一行代码都是对完美的追求，每一个项目都承载着改变世界的梦想。
          </p>
        </section>

        {/* Skills Cards */}
        <section className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">技能图谱</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1: Cloud Network Backend (Core) */}
            <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg h-80">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6" />
                <h4 className="text-lg font-semibold">云网络后端开发</h4>
              </div>
              <div className="space-y-2 mb-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">网络控制器技术</span>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">SDN/NFV</span>
                  <span className="text-yellow-400">★★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">BGP/OSPF协议</span>
                  <span className="text-yellow-400">★★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">网络安全策略</span>
                  <span className="text-yellow-400">★★★</span>
                </div>
              </div>
              <p className="text-xs text-blue-200 mt-auto">
                聚焦网络控制器与SDN/NFV技术落地
              </p>
            </div>

            {/* Card 2: Distributed Systems (Core) */}
            <div className="bg-purple-900 text-white p-6 rounded-xl shadow-lg h-80">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-6 h-6" />
                <h4 className="text-lg font-semibold">大规模分布式系统</h4>
              </div>
              <div className="space-y-2 mb-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">分布式架构设计</span>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">高可用/高可靠方案</span>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">灾备与容错机制</span>
                  <span className="text-yellow-400">★★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">大规模集群调度</span>
                  <span className="text-yellow-400">★★★★</span>
                </div>
              </div>
              <p className="text-xs text-purple-200 mt-auto">
                构建可靠的大规模分布式架构体系
              </p>
            </div>

            {/* Card 3: Cloud Infrastructure */}
            <div className="bg-slate-100 text-slate-900 p-6 rounded-xl shadow-lg h-80">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6" />
                <h4 className="text-lg font-semibold">云计算基础设施</h4>
              </div>
              <div className="space-y-2 mb-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">云主机部署</span>
                  <span className="text-orange-500">★★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">运维自动化</span>
                  <span className="text-orange-500">★★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Docker/K8s</span>
                  <span className="text-orange-500">★★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">资源监控告警</span>
                  <span className="text-orange-500">★★★</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-auto">
                云基础设施部署与运维自动化
              </p>
            </div>

            {/* Card 4: Frontend Tech */}
            <div className="bg-slate-100 text-slate-900 p-6 rounded-xl shadow-lg h-80">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6" />
                <h4 className="text-lg font-semibold">前端技术</h4>
              </div>
              <div className="space-y-2 mb-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">React</span>
                  <span className="text-orange-500">★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">前端工程化</span>
                  <span className="text-orange-500">★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">组件设计</span>
                  <span className="text-orange-500">★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">TypeScript</span>
                  <span className="text-orange-500">★★★</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-auto">
                现代化前端开发与工程实践
              </p>
            </div>

            {/* Card 5: Database Tech */}
            <div className="bg-slate-100 text-slate-900 p-6 rounded-xl shadow-lg h-80">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6" />
                <h4 className="text-lg font-semibold">数据库技术</h4>
              </div>
              <div className="space-y-2 mb-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">MySQL</span>
                  <span className="text-orange-500">★★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">数据库优化</span>
                  <span className="text-orange-500">★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">事务与锁机制</span>
                  <span className="text-orange-500">★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">PostgreSQL</span>
                  <span className="text-orange-500">★★★★</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-auto">
                数据存储与性能优化解决方案
              </p>
            </div>

            {/* Card 6: Engineering Practice */}
            <div className="bg-slate-100 text-slate-900 p-6 rounded-xl shadow-lg h-80">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6" />
                <h4 className="text-lg font-semibold">工程实践</h4>
              </div>
              <div className="space-y-2 mb-4 flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Vibe coding</span>
                  <span className="text-orange-500">★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">CI/CD流程</span>
                  <span className="text-orange-500">★★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">代码评审</span>
                  <span className="text-orange-500">★★★</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">测试驱动开发</span>
                  <span className="text-orange-500">★★★</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-auto">
                现代软件工程实践与质量保障
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">★★★★★ 精通 | ★★★★ 熟练 | ★★★ 掌握</p>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">精选项目</h3>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300 hover:shadow-lg">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <CardTitle className="text-2xl font-medium">{project.title}</CardTitle>
                        <Badge variant="secondary" className="font-light">{project.status}</Badge>
                      </div>
                      <CardDescription className="text-lg font-light leading-relaxed mb-4">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-light">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="text-center bg-muted/20 rounded-3xl p-12">
          <h3 className="text-3xl font-light mb-8">技术哲学</h3>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              "代码不仅仅是逻辑的堆砌，更是思想的表达。优雅的代码如同优美的诗句，简洁而富有韵律。"
            </p>
            <p>
              "技术的本质是解决问题，但优秀的技术人员追求的是用最简单的方式解决最复杂的问题。"
            </p>
            <p>
              "在快速迭代的时代，保持学习的热情和对美的追求，是技术人员最宝贵的品质。"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tech;