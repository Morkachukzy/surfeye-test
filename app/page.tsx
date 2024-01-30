import { Navbar } from '@/app/sections/navbar';
import { FeaturesSection } from '@/app/sections/features';

export default function Home() {
  return (
    <main className="font-exo text-brand-primary px-4">
      <Navbar />
      <FeaturesSection />
    </main>
  );
}
