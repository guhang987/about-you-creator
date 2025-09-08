import { useState, useEffect } from 'react';
import { staticBlogPosts, BlogPost } from '@/data/staticBlogData';

export const useStaticBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟异步加载
    const loadPosts = async () => {
      setLoading(true);
      // 添加一点延迟模拟真实的加载过程
      await new Promise(resolve => setTimeout(resolve, 500));
      setPosts(staticBlogPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

  const getPostById = (id: string): BlogPost | undefined => {
    return posts.find(post => post.id === id);
  };

  return {
    posts,
    loading,
    getPostById
  };
};