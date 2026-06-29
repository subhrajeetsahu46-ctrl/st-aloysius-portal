import { Card } from "../ui/Card"
import { Button } from "../ui/Button"

export function Academics() {
  const pillars = [
    {
      title: "Primary Years",
      grade: "Classes I to V",
      desc: "Building a strong foundation in literacy, numeracy, and character in a nurturing environment."
    },
    {
      title: "Middle School",
      grade: "Classes VI to VIII",
      desc: "Encouraging critical thinking, independent study habits, and holistic development."
    },
    {
      title: "High School",
      grade: "Classes IX to X",
      desc: "Rigorous academic preparation for board examinations with a focus on future readiness."
    }
  ]

  return (
    <section className="py-24 bg-stone-white">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-h3 md:text-h2 text-maroon mb-6">Academic Excellence</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="font-body text-body text-charcoal/80">
            Following the Anglo-Indian curriculum, we provide a structured, disciplined, and comprehensive education designed to unlock every student's highest potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <Card key={index} className="flex flex-col h-full">
              <span className="text-gold font-body text-label font-bold mb-4">{pillar.grade}</span>
              <h3 className="font-display text-h4 text-maroon mb-4">{pillar.title}</h3>
              <p className="font-body text-body text-charcoal/80 flex-grow">{pillar.desc}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" href="/academics">View Complete Syllabus</Button>
        </div>

      </div>
    </section>
  )
}