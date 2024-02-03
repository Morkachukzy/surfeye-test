import { ArrowLeftIcon } from '@/app/_assets/icons';
import { GenericButton } from '@/app/components/button';
import { Carousel, CarouselItem } from '@/app/components/carousel';
import { liveVideos } from './videos';

export const VideoPreviewFinder = () => {
  return (
    <div className="pb-6 pt-3.5 bg-brand-primary xl:max-w-[820px] mx-auto xl:rounded-b-3xl space-y-3">
      <div className="px-8">
        <GenericButton
          variant="secondary"
          className=""
          small
          rightIcon={<ArrowLeftIcon />}
        >
          Watch your session
        </GenericButton>
      </div>
      <Carousel className="overflow-x-auto">
        {liveVideos.map((video) => (
          <CarouselItem key={video.id} className="first:pl-8 last:pr-8">
            <div className="rounded-2xl w-[150px] bg-brand-dark-green aspect-[150/85]"></div>
          </CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};
