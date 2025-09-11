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

        {/* Skills Mind Map */}
        <section className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">技能图谱</h3>
          <div className="relative w-full h-[800px] md:h-[900px] bg-gradient-to-br from-background to-muted/20 rounded-3xl p-8 overflow-hidden">
            {/* Central Theme */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-lg border-2 border-primary-foreground/20">
                <h4 className="text-lg md:text-xl font-medium text-center whitespace-nowrap">云计算与云网络技术体系</h4>
              </div>
            </div>

            {/* Branch 1: Cloud Network Backend - Top */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-blue-900 text-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2 border-2 border-blue-700">
                  <Database className="w-5 h-5" />
                  <span className="font-medium text-sm md:text-base">云网络后端开发</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg">网络控制器技术 ★★★★★</div>
                  <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg">SDN/NFV ★★★★</div>
                  <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg">BGP/OSPF ★★★★</div>
                  <div className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg">网络安全 ★★★★</div>
                </div>
              </div>
              {/* Connection line */}
              <div className="w-px h-20 bg-border mx-auto mt-2"></div>
            </div>

            {/* Branch 2: System Architecture - Top Right */}
            <div className="absolute top-16 right-8 md:right-16">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-purple-900 text-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2 border-2 border-purple-700">
                  <Cloud className="w-5 h-5" />
                  <span className="font-medium text-sm md:text-base">系统架构设计</span>
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-lg">大规模分布式系统 ★★★★★</div>
                  <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-lg">高可用架构 ★★★★</div>
                  <div className="bg-purple-100 text-purple-900 px-3 py-1 rounded-lg">灾备方案 ★★★★</div>
                </div>
              </div>
              {/* Connection line */}
              <div className="w-16 h-px bg-border rotate-45 origin-left mt-2"></div>
            </div>

            {/* Branch 3: Cloud Infrastructure - Right */}
            <div className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-green-700 text-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  <span className="font-medium text-sm md:text-base">云计算基础设施</span>
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg">云主机部署 ★★★★</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg">运维自动化 ★★★★</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg">Docker/K8s ★★★★</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg">资源调度 ★★★</div>
                </div>
              </div>
              {/* Connection line */}
              <div className="w-20 h-px bg-border -ml-20 mt-2"></div>
            </div>

            {/* Branch 4: Database - Bottom Right */}
            <div className="absolute bottom-16 right-8 md:right-16">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-gray-600 text-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  <span className="font-medium text-sm md:text-base">数据库技术</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg">MySQL ★★★★</div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg">PostgreSQL ★★★★</div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg">Redis ★★★★</div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg">InfluxDB ★★★</div>
                </div>
              </div>
              {/* Connection line */}
              <div className="w-16 h-px bg-border rotate-135 origin-left -mt-2"></div>
            </div>

            {/* Branch 5: Engineering Practice - Bottom */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-orange-700 text-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  <span className="font-medium text-sm md:text-base">工程实践</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg">CI/CD ★★★★</div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg">微服务架构 ★★★★</div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg">性能优化 ★★★★</div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg">测试驱动开发 ★★★</div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg">代码审查 ★★★★</div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-lg">文档规范 ★★★</div>
                </div>
              </div>
              {/* Connection line */}
              <div className="w-px h-20 bg-border mx-auto -mt-20"></div>
            </div>

            {/* Branch 6: Frontend - Left */}
            <div className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2">
              <div className="flex flex-col items-center space-y-3">
                <div className="bg-teal-600 text-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  <span className="font-medium text-sm md:text-base">前端技术</span>
                </div>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-lg">React ★★★</div>
                  <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-lg">TypeScript ★★★</div>
                  <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-lg">Vue.js ★★★</div>
                  <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-lg">Tailwind CSS ★★★</div>
                </div>
              </div>
              {/* Connection line */}
              <div className="w-20 h-px bg-border ml-20 mt-2"></div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border">
              <p className="text-xs text-muted-foreground">★★★★★ 精通 | ★★★★ 熟练 | ★★★ 掌握</p>
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