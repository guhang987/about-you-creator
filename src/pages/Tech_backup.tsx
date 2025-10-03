import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, Database, Cloud, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Tech = () => {

  const projects = [
    {
      title: "基于多源数据跨时空关联融合与知识迁移的交通优控方法研究",
      description: "华为云智能体项目，参与交通优控方法研究，缓解路口交通拥堵难题。采用多尺度时序模型、分层异构图神经网络等，提出SSTGCN模型，车流量预测准确率较基础模型提升67%，较传统模型提高12.04%，发表IEEE MASS论文（一作），获2项专利，获华为优秀实习生评价。",
      tech: ["机器学习", "时空图神经网络", "TensorFlow", "知识迁移"],
      status: "校企合作项目"
    },
    {
      title: "国家云虚拟私有云产品研发", 
      description: "研发云网络虚拟私有云产品，主导旧Java SDN云网络控制器的Go重构，参与4个核心组件研发及100+高性能接口开发。建成大规模分布式控制器，支持10000+节点部署、虚拟机网络故障毫秒自愈，网络配置下发延迟从秒级优化至≤200ms。已在业务生产系统中稳定运行。",
      tech: ["Cloud Computing", "Golang", "虚拟化技术", "MySQL"],
      status: "开发项目"
    },
    {
      title: "少样本辅助的混合联邦学习方法研究",
      description: "针对物联网联邦学习数据异构、通信量大的痛点，研究少样本辅助混合联邦学习，从先验分布、无约束分布、拆分学习三方面优化，最高提升准确率20.01%、减少通信量43.13%，缓解训练难题。发表通信类顶级会议论文一篇，申请专利两项，授权一项。",
      tech: ["分布式机器学习", "联邦学习", "通信", "人工智能"],
      status: "学术项目"
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
                  <div>• BGP/OSPF路由协议</div>
                  <div>• VXLAN/GRE隧道</div>
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
                  <div>• Prometheus监控</div>
                  <div>• Terraform编排</div>
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
                  <div>• Redis缓存</div>
                  <div>• gRPC/RESTful API</div>
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
                  <div>• MongoDB文档数据库</div>
                  <div>• 索引优化/分库分表</div>
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
                  <div>• React/Vue.js框架</div>
                  <div>• TypeScript/ES6+</div>
                  <div>• Vite构建工具</div>
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

        {/* Research Papers */}
        <section className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">我的论文作品</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border-border/50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
              <p className="font-light mb-2">
                <span className="font-medium">Hang Gu</span>, Bin Guo, Jiangtao Wang, Wen Sun, Jiaqi Liu, Sicong Liu, Zhiwen Yu. "FedAux: An Efficient Framework for Hybrid Federated Learning", The 2022 IEEE International Conference on Communications (ICC'22).
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <Badge variant="secondary" className="font-light">CCF C 类会议</Badge>
                <Badge variant="secondary" className="font-light">国家重点研发专项</Badge>
                <a href="https://ieeexplore.ieee.org/document/9839129" className="text-primary hover:underline flex items-center gap-1">
                  查看链接
                </a>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border-border/50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
              <p className="font-light mb-2">
                <span className="font-medium">Hang Gu</span>, Bin Guo, Jiangshan Zhang, Sicong Liu, Zhenli Sheng, Zhongyi Wang. "SSTGCN: A Deep Learning Framework for Road Intersection Similarity Learning", The 2022 IEEE 19th International Conference on Mobile Ad Hoc and Smart Systems (MASS'22).
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <Badge variant="secondary" className="font-light">CCF C 类会议</Badge>
                <Badge variant="secondary" className="font-light">西工大-华为校企合作项目</Badge>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border-border/50 p-6 rounded-lg hover:shadow-md transition-all duration-300">
              <h4 className="text-lg font-light mb-3">专利成果</h4>
              <ul className="space-y-2 font-light">
                <li>• 《一种基于知识迁移的混合联邦学习方法》，公开号：CN114048838A</li>
                <li>• 《一种基于模型拆分的混合联邦学习方法》，公开(公告)号: CN116911408B</li>
              </ul>
            </div>
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