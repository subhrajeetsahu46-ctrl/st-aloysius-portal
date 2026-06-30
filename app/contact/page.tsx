import { client } from '@/sanity/lib/client'

async function getContactData() {
  // Fetches the site settings document
  return await client.fetch(`*[_type == "siteSettings"][0]`)
}

export default async function ContactPage() {
  const data = await getContactData()

  return (
    <main className="min-h-screen bg-stone-white pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="font-display text-4xl text-maroon">Contact Us</h1>
        
        {/* If data exists, show it; otherwise show a fallback */}
        <div className="font-body text-charcoal space-y-4">
          <p className="text-lg"><strong>Campus Address:</strong></p>
          <p>{data?.address || "Loading address..."}</p>
          
          <p className="text-lg"><strong>Office Hours:</strong></p>
          <p>{data?.officeHours || "Loading hours..."}</p>
        </div>
      </div>
    </main>
  )
}