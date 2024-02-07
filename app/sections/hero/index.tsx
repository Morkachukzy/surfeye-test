import { SectionLayout } from '@/app/layouts/section';
import { LiveVideos } from './live';

export const HeroSection = () => {
  return (
    <SectionLayout relativeId="live">
      <LiveVideos />
    </SectionLayout>
  );
};
