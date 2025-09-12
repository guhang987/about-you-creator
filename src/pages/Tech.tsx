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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Card 1: Cloud Network Backend (Core) */}
            <div className="bg-blue-900 text-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-4 h-4" />
                <h4 className="text-sm font-semibold">云网络后端开发</h4>
              </div>
              <div className="space-y-1 text-xs">
                <div>网络控制器技术</div>
                <div>SDN/NFV</div>
                <div>BGP/OSPF协议</div>
                <div>网络安全策略</div>
                <div>虚拟网络架构</div>
                <div>网络拓扑管理</div>
              </div>
            </div>

            {/* Card 2: Distributed Systems (Core) */}
            <div className="bg-purple-900 text-white p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Cloud className="w-4 h-4" />
                <h4 className="text-sm font-semibold">大规模分布式系统</h4>
              </div>
              <div className="space-y-1 text-xs">
                <div>分布式架构设计</div>
                <div>高可用/高可靠方案</div>
                <div>灾备与容错机制</div>
                <div>大规模集群调度</div>
                <div>负载均衡策略</div>
                <div>分布式一致性</div>
              </div>
            </div>

            {/* Card 3: Cloud Infrastructure */}
            <div className="bg-slate-100 text-slate-900 p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="w-4 h-4" />
                <h4 className="text-sm font-semibold">云计算基础设施</h4>
              </div>
              <div className="space-y-1 text-xs">
                <div>云主机部署</div>
                <div>运维自动化</div>
                <div>Docker/K8s</div>
                <div>资源监控告警</div>
                <div>弹性伸缩</div>
                <div>服务网格</div>
              </div>
            </div>

            {/* Card 4: Frontend Tech */}
            <div className="bg-slate-100 text-slate-900 p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4" />
                <h4 className="text-sm font-semibold">前端技术</h4>
              </div>
              <div className="space-y-1 text-xs">
                <div>React</div>
                <div>Vue.js</div>
                <div>TypeScript</div>
                <div>前端工程化</div>
                <div>组件设计</div>
                <div>响应式布局</div>
              </div>
            </div>

            {/* Card 5: Database Tech */}
            <div className="bg-slate-100 text-slate-900 p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-4 h-4" />
                <h4 className="text-sm font-semibold">数据库技术</h4>
              </div>
              <div className="space-y-1 text-xs">
                <div>MySQL</div>
                <div>PostgreSQL</div>
                <div>Redis</div>
                <div>数据库优化</div>
                <div>事务与锁机制</div>
                <div>数据建模</div>
              </div>
            </div>

            {/* Card 6: Engineering Practice */}
            <div className="bg-slate-100 text-slate-900 p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4" />
                <h4 className="text-sm font-semibold">工程实践</h4>
              </div>
              <div className="space-y-1 text-xs">
                <div>Vibe coding</div>
                <div>CI/CD流程</div>
                <div>代码评审</div>
                <div>测试驱动开发</div>
                <div>敏捷开发</div>
                <div>性能优化</div>
              </div>
            </div>
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