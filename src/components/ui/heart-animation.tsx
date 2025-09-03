import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeartAnimationProps {
  isLiked: boolean;
  onClick: () => void;
  className?: string;
}

export const HeartAnimation: React.FC<HeartAnimationProps> = ({ 
  isLiked, 
  onClick, 
  className 
}) => {
  const [showFloatingHearts, setShowFloatingHearts] = useState(false);

  const handleClick = () => {
    if (!isLiked) {
      setShowFloatingHearts(true);
      setTimeout(() => setShowFloatingHearts(false), 1000);
    }
    onClick();
  };

  return (
    <>
      <style>
        {`
          @keyframes floatUp {
            0% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
            100% {
              opacity: 0;
              transform: translateY(-20px) scale(0.5);
            }
          }
          .float-animation {
            animation: floatUp 1s ease-out forwards;
          }
        `}
      </style>
      <div className="relative inline-block">
        <button
          onClick={handleClick}
          className={cn(
            "transition-all duration-200 hover:scale-110",
            className
          )}
        >
          <Heart 
            className={cn(
              "w-5 h-5 transition-all duration-300",
              isLiked 
                ? "fill-red-500 text-red-500 animate-pulse" 
                : "text-muted-foreground hover:text-red-500"
            )} 
          />
        </button>
        
        {/* Floating hearts animation */}
        {showFloatingHearts && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute float-animation opacity-0",
                  i === 0 && "left-0 top-0",
                  i === 1 && "left-2 top-1",
                  i === 2 && "left-1 -top-1"
                )}
                style={{
                  animationDelay: `${i * 200}ms`
                }}
              >
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};