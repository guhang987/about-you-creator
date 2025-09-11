import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useStaticBlog } from "@/hooks/useStaticBlog";
import { BlogPost as BlogPostType } from "@/data/staticBlogData";


const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const { getPostById } = useStaticBlog();
  const post = id ? getPostById(id) : null;


  if (!post) {
    return (
      <div className="min-h-screen bg-background font-serif flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">文章未找到</h2>
          <Link to="/blog" className="text-primary hover:underline">
            返回博客列表
          </Link>
        </div>
      </div>
    );
  }

  const postDate = new Date(post.created_at).toLocaleDateString('zh-CN');

  return (
    <div className="min-h-screen bg-background font-serif">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-light">返回博客</span>
          </Link>
          <h1 className="text-xl font-light">思考随笔</h1>
          <div></div>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-8">
          <Badge variant="secondary" className="font-light mb-4">{post.category}</Badge>
          <h1 className="text-4xl font-light mb-6 leading-relaxed">{post.title}</h1>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{postDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.read_time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{post.views} 阅读</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none font-light leading-relaxed">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tags and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs font-light">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{post.likes} 点赞</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;