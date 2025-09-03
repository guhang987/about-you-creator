import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  created_at: string;
  read_time: string;
  views: number;
  likes: number;
}

export const useBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const recordView = async (postId: string) => {
    try {
      const { error } = await supabase
        .from('post_views')
        .insert({
          post_id: postId,
          ip_address: await getClientIP(),
          user_agent: navigator.userAgent
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error recording view:', error);
    }
  };

  const toggleLike = async (postId: string) => {
    try {
      const ipAddress = await getClientIP();
      
      // Check if already liked
      const { data: existingLike } = await supabase
        .from('post_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('ip_address', ipAddress)
        .single();

      if (existingLike) {
        // Unlike
        const { error } = await supabase
          .from('post_likes')
          .delete()
          .eq('post_id', postId)
          .eq('ip_address', ipAddress);

        if (error) throw error;
        return false; // unliked
      } else {
        // Like
        const { error } = await supabase
          .from('post_likes')
          .insert({
            post_id: postId,
            ip_address: ipAddress
          });

        if (error) throw error;
        return true; // liked
      }
    } catch (error) {
      console.error('Error toggling like:', error);
      return null;
    }
  };

  const checkIfLiked = async (postId: string) => {
    try {
      const ipAddress = await getClientIP();
      const { data } = await supabase
        .from('post_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('ip_address', ipAddress)
        .single();

      return !!data;
    } catch (error) {
      return false;
    }
  };

  const getClientIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      return 'unknown';
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    recordView,
    toggleLike,
    checkIfLiked,
    refetch: fetchPosts
  };
};