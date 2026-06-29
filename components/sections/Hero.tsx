import { Button } from "../ui/Button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-charcoal">
      
      {/* REAL SCHOOL BACKGROUND */}
      <div className="absolute inset-0 opacity-50 bg-[url('/school-building.jpg')] bg-cover bg-center" />
      
      {/* Dark gradient overlay to ensure text is perfectly readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />

      {/* Content */}
      <div className="relative z-10 max-w-[1024px] mx-auto px-6 text-center mt-16">
        <span className="block font-body text-gold uppercase tracking-[0.2em] text-sm mb-6 font-semibold animate-fade-in-up">
          Visakhapatnam's Heritage School
        </span>
        
        <h1 className="font-display text-h2 md:text-display text-stone-white mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Shaping Character, <br />
          <span className="italic text-parchment font-light">Inspiring Excellence.</span>
        </h1>
        
        <p className="font-body text-body-lg text-parchment/80 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          For nearly 180 years, St. Aloysius Anglo Indian High School has provided a foundation of knowledge, discipline, and community for generations of students.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Button variant="secondary" href="/admissions">Admissions 2025-26</Button>
<Button variant="ghost" href="/about" className="text-stone-white border-stone-white/30 hover:border-gold hover:bg-stone-white/10">
  Explore Our Heritage
</Button>
        </div>
      </div>
    </section>
  )
}