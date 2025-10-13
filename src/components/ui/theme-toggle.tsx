import React, { useEffect } from "react";
import { Button } from "./button";
import { Sun, Moon, Check } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { toast } from "@/hooks/use-toast";

interface ThemeToggleProps {
  initialTheme?: "light" | "dark";
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ initialTheme }) => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(() => {
    // 优先从localStorage读取用户偏好
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    
    // 如果有初始主题，使用它
    if (initialTheme) {
      return initialTheme === "dark";
    }
    
    // 默认使用浅色模式
    return false;
  });

  // 应用主题
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // 切换主题
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    // 显示切换成功提示
    const toastInstance = toast({
      title: newTheme ? "已切换至深色模式" : "已切换至浅色模式",
      className: "toast-animation",
    });
    
    // 1.5秒后自动关闭提示
    setTimeout(() => {
      toastInstance.dismiss();
    }, 1500);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative overflow-hidden"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
            ) : (
              <Moon className="h-5 w-5 transition-transform duration-300 hover:scale-110" />
            )}
            <span className="sr-only">
              {isDarkMode ? "切换至浅色模式" : "切换至深色模式"}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>
            {isDarkMode ? "切换至浅色模式" : "切换至深色模式"}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ThemeToggle;