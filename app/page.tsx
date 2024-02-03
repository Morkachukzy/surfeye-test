import { Navbar } from '@/app/sections/navbar';
import { HeroSection } from './sections/hero';
import { FeaturesSection } from '@/app/sections/features';
import { AnalyticsSection } from '@/app/sections/analytics';
import { RecordingAreaSection } from '@/app/sections/recording-area';
import { NearbySpotsSection } from '@/app/sections/nearby-spots';
import { SpotMetricsSection } from '@/app/sections/spot-metrics';
import { AboutSection } from '@/app/sections/about';
import { FooterSection } from '@/app/sections/footer';

export default function Home() {
  return (
    <main className="font-exo text-brand-primary">
      <Navbar />
      <HeroSection />
      <AnalyticsSection />
      <RecordingAreaSection />
      <NearbySpotsSection />
      <SpotMetricsSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
}
