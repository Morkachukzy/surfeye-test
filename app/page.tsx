import { Navbar } from '@/app/sections/navbar';
import { FeaturesSection } from '@/app/sections/features';
import { AnalyticsSection } from '@/app/sections/analytics';

export default function Home() {
  return (
    <main className="font-exo text-brand-primary">
      <Navbar />
      <FeaturesSection />
      <AnalyticsSection />
    </main>
  );
}
