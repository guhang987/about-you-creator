import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Tech from "./pages/Tech";
import Running from "./pages/Running";
import Photography from "./pages/Photography";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ThemeToggle from "@/components/ui/theme-toggle";

// 自定义滚动处理组件
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // 当路径变化时，滚动到页面顶部
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      {/* 全局头部，包含主题切换按钮 */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-end items-center bg-background/80 backdrop-blur-sm border-b border-border/20">
        <ThemeToggle />
      </header>
      
      {/* 内容区域添加顶部内边距，避免被头部遮挡 */}
      <div className="pt-16">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/running" element={<Running />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
