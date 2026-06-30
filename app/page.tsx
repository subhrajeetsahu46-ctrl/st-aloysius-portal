import { Hero } from "@/components/sections/Hero"
import { StatisticsStrip } from "@/components/sections/StatisticsStrip"
import { HeritageIntro } from "@/components/sections/HeritageIntro"
import { Academics } from "@/components/sections/Academics"

export default function Home() {
  return (
    <main>
      <Hero />
      <StatisticsStrip />
      <HeritageIntro />
      <Academics />
    </main>
  )
}
