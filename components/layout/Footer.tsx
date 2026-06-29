import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-charcoal text-parchment pt-20 pb-10 border-t-[8px] border-maroon">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-h4 text-gold mb-4">St. Aloysius Anglo Indian High School</h3>
            <p className="font-body text-body text-parchment/70 max-w-sm">
              Est. 1847. A legacy of knowledge, discipline, and character in the heart of Visakhapatnam.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-body text-label text-gold font-bold mb-6">QUICK LINKS</h4>
            <ul className="space-y-3 font-body text-sm text-parchment/80">
              <li><Link href="/about" className="hover:text-gold transition-colors">Our History</Link></li>
              <li><Link href="/academics" className="hover:text-gold transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-gold transition-colors">Admissions 2025-26</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors">Campus Gallery</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-body text-label text-gold font-bold mb-6">CONTACT US</h4>
            <ul className="space-y-3 font-body text-sm text-parchment/80">
              <li>Old Post Office, Beach Rd,</li>
              <li>near One Town,</li>
              <li>Visakhapatnam, AP 530001</li>
              <li className="pt-3 hover:text-gold transition-colors">
                <a href="tel:+918341349475">+91 83413 49475</a>
              </li>
              <li className="hover:text-gold transition-colors">
                <a href="tel:+919182818682">+91 91828 18682</a>
              </li>
              <li className="pt-3 hover:text-gold transition-colors">
                <a href="mailto:staloysiusvizag@gmail.com">staloysiusvizag@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-parchment/10 flex flex-col md:flex-row justify-between items-center gap-4 font-body text-xs text-parchment/50">
          <p>© {new Date().getFullYear()} St. Aloysius Anglo Indian High School. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}