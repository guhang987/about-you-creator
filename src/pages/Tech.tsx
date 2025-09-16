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
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-purple-800 text-white p-4 rounded-lg shadow-lg border border-blue-700/50 tech-card">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-4 h-4 text-cyan-300" />
                  <h4 className="text-sm font-semibold tracking-wide text-cyan-200">云网络后端开发</h4>
                </div>
                <div className="space-y-1 text-xs">
                  <div>• OVS/OVN控制器</div>
                  <div>• SDN/NFV架构</div>
                  <div>• BGP/OSPF/ISIS</div>
                  <div>• iptables/netfilter</div>
                  <div>• VXLAN/GRE隧道</div>
                  <div>• Go/Java/Python</div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tr from-cyan-400 to-blue-500 clip-triangle transform translate-x-4 translate-y-4"></div>
            </div>

            {/* Card 2: Distributed Systems (Core) */}
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-900 to-blue-800 text-white p-4 rounded-lg shadow-lg border border-cyan-700/50 tech-card">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Cloud className="w-4 h-4 text-green-300" />
                  <h4 className="text-sm font-semibold tracking-wide text-green-200">大规模分布式系统</h4>
                </div>
                <div className="space-y-1 text-xs">
                  <div>• CAP理论/BASE</div>
                  <div>• Raft/Paxos一致性</div>
                  <div>• ETCD/Consul集群</div>
                  <div>• 分布式锁/事务</div>
                  <div>• 负载均衡/熔断</div>
                  <div>• 微服务架构</div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tr from-green-400 to-cyan-500 clip-triangle transform translate-x-4 translate-y-4"></div>
            </div>

            {/* Card 3: Cloud Infrastructure */}
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 to-pink-800 text-white p-4 rounded-lg shadow-lg border border-purple-700/50 tech-card">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="w-4 h-4 text-purple-300" />
                  <h4 className="text-sm font-semibold tracking-wide text-purple-200">云计算基础设施</h4>
                </div>
                <div className="space-y-1 text-xs">
                  <div>• Kubernetes/Docker</div>
                  <div>• Prometheus/Grafana</div>
                  <div>• Ansible/Terraform</div>
                  <div>• Istio服务网格</div>
                  <div>• Helm Chart部署</div>
                  <div>• CI/CD Pipeline</div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tr from-pink-400 to-purple-500 clip-triangle transform translate-x-4 translate-y-4"></div>
            </div>

            {/* Card 4: Backend Development */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-teal-700 text-white p-4 rounded-lg shadow-lg border border-blue-700/50 tech-card">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-4 h-4 text-blue-300" />
                  <h4 className="text-sm font-semibold tracking-wide text-blue-200">后端开发技术</h4>
                </div>
                <div className="space-y-1 text-xs">
                  <div>• Golang/Java/Python</div>
                  <div>• Redis/Memcached</div>
                  <div>• gRPC/RESTful API</div>
                  <div>• RabbitMQ/Kafka</div>
                  <div>• Gin/Spring Boot</div>
                  <div>• 高并发架构</div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tr from-teal-400 to-blue-500 clip-triangle transform translate-x-4 translate-y-4"></div>
            </div>

            {/* Card 5: Database Tech */}
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-800 to-cyan-700 text-white p-4 rounded-lg shadow-lg border border-emerald-700/50 tech-card">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-4 h-4 text-emerald-300" />
                  <h4 className="text-sm font-semibold tracking-wide text-emerald-200">数据库技术</h4>
                </div>
                <div className="space-y-1 text-xs">
                  <div>• MySQL/PostgreSQL</div>
                  <div>• InfluxDB时序数据</div>
                  <div>• MongoDB/CouchDB</div>
                  <div>• 索引优化/分库分表</div>
                  <div>• ACID事务特性</div>
                  <div>• 主从复制/读写分离</div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tr from-cyan-400 to-emerald-500 clip-triangle transform translate-x-4 translate-y-4"></div>
            </div>

            {/* Card 6: Frontend & DevOps */}
            <div className="relative overflow-hidden bg-gradient-to-br from-violet-800 to-indigo-700 text-white p-4 rounded-lg shadow-lg border border-violet-700/50 tech-card">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-4 h-4 text-violet-300" />
                  <h4 className="text-sm font-semibold tracking-wide text-violet-200">前端与工程实践</h4>
                </div>
                <div className="space-y-1 text-xs">
                  <div>• React/Vue.js/Angular</div>
                  <div>• TypeScript/ES6+</div>
                  <div>• Jenkins/GitLab CI</div>
                  <div>• Webpack/Vite构建</div>
                  <div>• TDD/单元测试</div>
                  <div>• Vibe Coding流程</div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tr from-indigo-400 to-violet-500 clip-triangle transform translate-x-4 translate-y-4"></div>
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