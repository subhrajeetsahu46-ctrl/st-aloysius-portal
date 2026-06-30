import { Button } from "@/components/ui/Button"
import { client } from '@/sanity/lib/client'

// 1. Fetch data from Sanity
async function getAdmissions() {
  const query = `*[_type == "admission"] | order(_createdAt asc)`
  return await client.fetch(query)
}

export default async function AdmissionsPage() {
  const sanitySteps = await getAdmissions()

  // 2. Fallback static steps if Sanity is empty
  const staticSteps = [
    { stepTitle: "Inquiry", description: "Fill out our online inquiry form to express interest." },
    { stepTitle: "Application", description: "Submit the registration form with required documents." },
    { stepTitle: "Interaction", description: "A brief meeting with the academic coordinator." },
    { stepTitle: "Enrollment", description: "Complete fee payment and finalize admission." }
  ]

  const steps = sanitySteps.length > 0 ? sanitySteps : staticSteps

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-[1280px] mx-auto">
      <h1 className="font-display text-4xl text-maroon mb-8">Admissions 2025-26</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div className="font-body text-lg text-charcoal space-y-6">
          <p>We invite applications for the upcoming academic year. At St. Aloysius, we look for students who are eager to learn and ready to embrace our values of virtue and labor.</p>
          <div className="flex gap-4">
            <Button variant="primary">Download Prospectus</Button>
            <Button variant="ghost">Fee Structure</Button>
          </div>
        </div>

        {/* Admissions Steps - Now dynamic! */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step: any, i: number) => (
            <div key={i} className="p-6 bg-stone-50 border border-stone-200">
              <span className="text-yellow-600 font-bold text-3xl font-display">{i + 1}</span>
              <h3 className="font-display text-maroon text-xl mt-2 mb-2">{step.stepTitle}</h3>
              <p className="text-sm font-body text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}