import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, Database, Cloud, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Tech = () => {
  const skills = {
    frontend: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS"],
    backend: ["Node.js", "Python", "Java", "Go", "GraphQL"],
    database: ["PostgreSQL", "MongoDB", "Redis", "InfluxDB"],
    cloud: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  };

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

        {/* Skills */}
        <section className="mb-20">
          <h3 className="text-3xl font-light text-center mb-12">技能图谱</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300">
              <CardHeader className="pb-4">
                <Code className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="font-medium">前端开发</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="outline" className="font-light">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300">
              <CardHeader className="pb-4">
                <Database className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="font-medium">后端开发</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="outline" className="font-light">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300">
              <CardHeader className="pb-4">
                <Smartphone className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="font-medium">数据存储</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <Badge key={skill} variant="outline" className="font-light">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300">
              <CardHeader className="pb-4">
                <Cloud className="w-8 h-8 text-primary mb-3" />
                <CardTitle className="font-medium">云端部署</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((skill) => (
                    <Badge key={skill} variant="outline" className="font-light">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
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