import { Button } from "../ui/Button"

export function HeritageIntro() {
  return (
    <section className="py-24 md:py-32 bg-parchment">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Text */}
        <div className="order-2 lg:order-1">
          <h2 className="font-display text-h3 md:text-h2 text-maroon mb-6 leading-tight">
            A Legacy of Academic and Moral Excellence
          </h2>
          <div className="w-24 h-1 bg-gold mb-8" />
          
          <p className="font-body text-body-lg text-charcoal mb-6 leading-relaxed">
            Situated in the heart of Visakhapatnam, St. Aloysius Anglo Indian High School is more than just an educational institution; it is a vital piece of the city's history. 
          </p>
          <p className="font-body text-body text-charcoal/80 mb-10 leading-relaxed">
            Since our founding in 1847, we have been committed to nurturing the intellectual, physical, and moral growth of our students, preparing them to lead with integrity in a rapidly changing world.
          </p>
          
          <Button variant="ghost" href="/about">Read Our Full History</Button>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-sm overflow-hidden shadow-card group">
          <div className="absolute inset-0 bg-maroon/20 z-10 transition-opacity group-hover:opacity-0 duration-500" />
          {/* Placeholder Library/Heritage Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070')] bg-cover bg-center mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105" />
        </div>

      </div>
    </section>
  )
}