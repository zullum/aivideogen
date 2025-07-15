import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { CTASection } from '@/components/cta-section'

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </main>
  )
}