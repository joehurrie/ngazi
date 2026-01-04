import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlowingBorderCard({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className="clockwise-glow p-[1px]">
      <div className={cn("clockwise-glow-inner", className)}>
        {children}
      </div>
    </div>
  );
}
