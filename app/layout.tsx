import '@/styles/globals.css'
import type { Metadata } from 'next'
import { EB_Garamond, Inter, Cinzel } from 'next/font/google'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel', display: 'swap' })

export const metadata: Metadata = {
  title: 'St. Aloysius Anglo Indian High School',
  description: 'Est. 1847 | Visakhapatnam',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${garamond.variable} ${inter.variable} ${cinzel.variable}`}>
      <body className="antialiased bg-parchment flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
