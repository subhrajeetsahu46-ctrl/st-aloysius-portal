import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/Button'

export function Navigation() {
  return (
    <header className="fixed top-0 w-full z-50 bg-stone-white/95 backdrop-blur-sm border-b border-sand/50 shadow-sm transition-all">
      <div className="max-w-[1440px] mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-4 group">
          
          {/* NEW: The School Crest */}
          <div className="relative w-12 h-14 flex-shrink-0 transition-transform group-hover:scale-105 duration-300">
            <Image 
              src="/crest.jpg" 
              alt="St. Aloysius School Crest" 
              fill
              className="object-contain"
              priority
            />
          </div>
          
<div className="flex flex-col justify-center">
            <span className="font-display text-lg lg:text-xl text-maroon leading-none tracking-tight">
              St. Aloysius Anglo Indian High School
            </span>
            <span className="font-body text-[10px] text-vestment uppercase tracking-widest mt-1 font-semibold">
              Est. 1847
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
<nav className="hidden lg:flex items-center gap-8">
  {/* We explicitly list them to ensure they match your requirements */}
  <Link href="/about" className="font-body text-sm text-charcoal hover:text-gold transition-colors font-medium">About</Link>
  <Link href="/academics" className="font-body text-sm text-charcoal hover:text-gold transition-colors font-medium">Academics</Link>
  <Link href="/admissions" className="font-body text-sm text-charcoal hover:text-gold transition-colors font-medium">Admissions</Link>
  <Link href="/contact" className="font-body text-sm text-charcoal hover:text-gold transition-colors font-medium">Contact</Link>
  <Link href="/news" className="font-body text-sm text-charcoal hover:text-gold transition-colors font-medium">News</Link>
</nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="primary" className="py-3 px-6" href="/admissions">Enquire Now</Button>
        </div>

      </div>
    </header>
  )
}