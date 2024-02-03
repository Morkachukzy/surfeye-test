import { Badge } from '@/app/components/badge';
import { Carousel, CarouselItem } from '@/app/components/carousel';
import { liveVideos } from './videos';
import { GenericButton } from '@/app/components/button';
import { ArrowLeftIcon } from '@/app/_assets/icons';
import { VideoPreviewFinder } from './preview-finder';

export const LiveVideos = () => {
  return (
    <div className="xl:px-4">
      <VideoPreview />
      <VideoPreviewFinder />
    </div>
  );
};

export const VideoPreview = () => {
  return (
    <div className="max-w-brand-spotlight mx-auto w-full aspect-[390/221] lg:aspect-[960/442] xl:rounded-3xl bg-brand-primary relative">
      <LiveBadge />
    </div>
  );
};

const LiveBadge = () => {
  return (
    <Badge className="absolute top-9 left-14 z-10 bg-brand-grey bg-opacity-70 text-brand-md font-bold gap-1.5">
      <span className="w-2.5 h-2.5 bg-brand-red-2 rounded-full" />
      <span className="">Live</span>
    </Badge>
  );
};
