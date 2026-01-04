import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlowingBorderCard({ 
  children, 
  className,
  animationDirection = 'clockwise' 
}: { 
  children: ReactNode, 
  className?: string,
  animationDirection?: 'clockwise' | 'counter-clockwise' 
}) {
  return (
    <div className={cn("glowing-border p-[1px]", animationDirection)}>
      <div className={cn("glowing-border-inner", className)}>
        {children}
      </div>
    </div>
  );
}
