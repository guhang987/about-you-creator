import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Calendar, Award, Code, Users, Zap } from "lucide-react";

const Index = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Java", "AWS", 
    "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Redis", "GraphQL"
  ];

  const experiences = [
    {
      company: "字节跳动",
      position: "高级前端工程师",
      duration: "2022 - 至今",
      description: "负责抖音核心功能开发，优化性能提升用户体验，参与架构设计"
    },
    {
      company: "阿里巴巴",
      position: "前端工程师",
      duration: "2020 - 2022", 
      description: "参与淘宝商家平台开发，构建可复用组件库，提升开发效率"
    },
    {
      company: "腾讯",
      position: "软件工程师",
      duration: "2018 - 2020",
      description: "微信小程序平台开发，负责核心API设计与实现"
    }
  ];

  const projects = [
    {
      title: "实时协作编辑器",
      description: "基于WebRTC和OT算法的在线协作平台，支持千人同时编辑",
      tech: ["React", "WebRTC", "Node.js", "Redis"]
    },
    {
      title: "微服务监控系统",
      description: "分布式系统性能监控平台，实时追踪服务健康状况",
      tech: ["Vue", "Golang", "InfluxDB", "Grafana"]
    },
    {
      title: "智能代码生成工具",
      description: "AI驱动的代码自动生成工具，提升开发效率300%",
      tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-32 h-32 border-4 border-primary/20">
              <AvatarImage src="/placeholder.svg" alt="个人头像" />
              <AvatarFallback className="text-2xl font-bold">张三</AvatarFallback>
            </Avatar>
            
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                你好，我是 <span className="text-primary">张三</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                大厂资深程序员 | 全栈工程师 | 技术架构师
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  北京
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  6年经验
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  技术专家
                </Badge>
              </div>
              
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="lg" className="gap-2">
                  <Mail className="w-4 h-4" />
                  联系我
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">关于我</h2>
          <Card className="p-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              我是一名拥有6年经验的全栈工程师，曾就职于字节跳动、阿里巴巴、腾讯等知名互联网公司。
              专注于前端技术架构设计与性能优化，擅长React、Vue生态系统开发，有丰富的大规模应用开发经验。
              热衷于技术分享与开源贡献，致力于用技术创造价值，提升用户体验。
            </p>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">技能专长</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <Code className="w-8 h-8 text-primary mb-2" />
                <CardTitle>前端开发</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle>后端开发</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.slice(4, 8).map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>数据库 & 工具</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.slice(8).map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">工作经历</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <CardTitle className="text-xl mb-1">{exp.position}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="mt-2 md:mt-0">{exp.duration}</Badge>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">核心项目</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <Card className="p-8 bg-primary/5">
            <h2 className="text-3xl font-bold mb-4">让我们合作</h2>
            <p className="text-lg text-muted-foreground mb-6">
              如果你对我的经历感兴趣，或者有合作机会，欢迎联系我
            </p>
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              发送邮件
            </Button>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
