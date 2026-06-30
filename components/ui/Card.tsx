import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-stone-white border border-sand/30 rounded-sm p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group",
        className
      )}
      {...props}
    >
      {/* Gold accent line at the top that expands on hover */}
      <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full" />
      {children}
    </div>
  )
}
