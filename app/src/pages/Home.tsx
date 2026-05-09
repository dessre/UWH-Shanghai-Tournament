import HeroSection from '@/sections/HeroSection'
import LatestHighlights from '@/sections/LatestHighlights'
import CompetitionGuidelines from '@/sections/CompetitionGuidelines'
import OrganizersSection from '@/sections/OrganizersSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LatestHighlights />
      <CompetitionGuidelines />
      <OrganizersSection />
    </main>
  )
}
