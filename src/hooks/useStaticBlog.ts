import { useState, useEffect } from 'react';
import { staticBlogPosts, BlogPost } from '@/data/staticBlogData';

export const useStaticBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(staticBlogPosts);
  const [loading, setLoading] = useState(false);

  const getPostById = (id: string): BlogPost | undefined => {
    return posts.find(post => post.id === id);
  };

  return {
    posts,
    loading,
    getPostById
  };
};