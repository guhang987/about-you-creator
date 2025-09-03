-- Fix function security warning by setting search_path
CREATE OR REPLACE FUNCTION public.update_post_stats()
RETURNS TRIGGER AS $$
BEGIN
  -- Update views count
  IF TG_TABLE_NAME = 'post_views' THEN
    UPDATE public.blog_posts 
    SET views = (
      SELECT COUNT(*) 
      FROM public.post_views 
      WHERE post_id = NEW.post_id
    )
    WHERE id = NEW.post_id;
  END IF;
  
  -- Update likes count
  IF TG_TABLE_NAME = 'post_likes' THEN
    UPDATE public.blog_posts 
    SET likes = (
      SELECT COUNT(*) 
      FROM public.post_likes 
      WHERE post_id = COALESCE(NEW.post_id, OLD.post_id)
    )
    WHERE id = COALESCE(NEW.post_id, OLD.post_id);
  END IF;
  
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql 
SET search_path = public;