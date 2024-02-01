import { Navbar } from '@/app/sections/navbar';
import { FeaturesSection } from '@/app/sections/features';
import { AnalyticsSection } from '@/app/sections/analytics';
import { RecordingAreaSection } from '@/app/sections/recording-area';
import { SpotMetricsSection } from './sections/spot-metrics';

export default function Home() {
  return (
    <main className="font-exo text-brand-primary">
      <Navbar />
      <FeaturesSection />
      <AnalyticsSection />
      <RecordingAreaSection />
      <SpotMetricsSection />
    </main>
  );
}
