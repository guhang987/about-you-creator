import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Tag, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlog } from "@/hooks/useBlog";
import { HeartAnimation } from "@/components/ui/heart-animation";
import { useState, useEffect } from "react";

const Blog = () => {
  const { posts, loading, recordView, toggleLike, checkIfLiked } = useBlog();
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const categories = ["全部", "技术思考", "生活感悟", "技术分享", "生活观察", "技术深入", "摄影心得"];

  const filteredPosts = selectedCategory === "全部" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const stats = {
    totalPosts: posts.length.toString(),
    totalViews: posts.reduce((sum, post) => sum + post.views, 0).toLocaleString(),
    totalLikes: posts.reduce((sum, post) => sum + post.likes, 0).toLocaleString(),
    followers: "856"
  };

  useEffect(() => {
    const checkLikedStatus = async () => {
      const likedStatus: Record<string, boolean> = {};
      for (const post of posts) {
        likedStatus[post.id] = await checkIfLiked(post.id);
      }
      setLikedPosts(likedStatus);
    };

    if (posts.length > 0) {
      checkLikedStatus();
    }
  }, [posts, checkIfLiked]);

  const handleLike = async (postId: string) => {
    const result = await toggleLike(postId);
    if (result !== null) {
      setLikedPosts(prev => ({ ...prev, [postId]: result }));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background font-serif flex items-center justify-center">
        <div className="text-xl text-muted-foreground">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-serif">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-light">返回首页</span>
          </Link>
          <h1 className="text-2xl font-light">思考随笔</h1>
          <div></div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-20 animate-fade-in">
          <div className="text-6xl mb-6">✍️</div>
          <h2 className="text-5xl font-light mb-6">文字的力量</h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
            记录思维的碎片，分享生活的感悟。在快节奏的世界中，文字是我们与内心对话的桥梁，是思想沉淀的容器。
          </p>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="text-primary mx-auto mb-3 text-2xl">📝</div>
                <div className="text-2xl font-light mb-1">{stats.totalPosts}</div>
                <div className="text-sm text-muted-foreground font-light">文章数量</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-light mb-1">{stats.totalViews}</div>
                <div className="text-sm text-muted-foreground font-light">总阅读量</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-light mb-1">{stats.totalLikes}</div>
                <div className="text-sm text-muted-foreground font-light">获赞数</div>
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

        {/* Blog Posts */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPosts.map((post) => {
              const postDate = new Date(post.created_at).toLocaleDateString('zh-CN');
              return (
              <Card key={post.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card transition-all duration-300 hover:shadow-lg group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="font-light">{post.category}</Badge>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{postDate}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.read_time}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-medium group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="font-light leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs font-light">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HeartAnimation
                          isLiked={likedPosts[post.id] || false}
                          onClick={() => handleLike(post.id)}
                          className="p-0"
                        />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-primary font-light hover:underline"
                      onClick={() => recordView(post.id)}
                    >
                      阅读全文 →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
            })}
          </div>
        </section>

        {/* Writing Philosophy */}
        <section className="text-center bg-muted/20 rounded-3xl p-12">
          <h3 className="text-3xl font-light mb-8">写作感悟</h3>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              "写作是思考的延伸，是与自己内心对话的方式。每一个文字都承载着情感，每一句话都反映着思考的深度。"
            </p>
            <p>
              "在技术的世界里，我们追求效率和精确；在文字的世界里，我们寻求美感和共鸣。两者并不矛盾，都是表达的艺术。"
            </p>
            <p>
              "好的文章不在于华丽的辞藻，而在于真诚的表达和独特的见解。用简单的文字传达复杂的思想，这就是写作的魅力。"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;