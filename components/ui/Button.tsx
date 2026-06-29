import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  href?: string // <-- NEW: We added the ability to pass a link
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', href, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-sm px-8 py-4 font-body font-semibold uppercase tracking-[0.12em] text-[11px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none text-center"
    
    const variants = {
      primary: "bg-maroon text-stone-white hover:bg-charcoal",
      secondary: "bg-gold text-stone-white hover:bg-charcoal",
      ghost: "bg-transparent text-charcoal hover:bg-parchment border border-sand hover:border-gold",
    }

    // NEW: If an href is provided, render a Next.js Link instead of a normal button
    if (href) {
      return (
        <Link href={href} className={cn(baseStyles, variants[variant], className)}>
          {props.children}
        </Link>
      )
    }

    // Default: render a normal button
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"