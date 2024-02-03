import { Carousel, CarouselItem } from '@/app/components/carousel';
import { SectionLayout } from '@/app/layouts/section';
import { NearbySpotCard } from './spot-card';
import { nearbySpots } from './spots';

export const NearbySpotsSection = () => {
  return (
    <SectionLayout className="space-y-7 md:space-y-10 pb-12 max-w-none">
      {/* <SectionLayout className="space-y-7 md:space-y-10 pb-12 px-0 md:px-0 lg:px-0 pl-4 md:pl-6 lg:pl-20 max-w-none"> */}
      <div className="flex items-center justify-between px-5 big-brand-tablet:px-16 max-w-brand-section mx-auto">
        <h2 className="uppercase text-brand-md md:text-2xl font-bold">
          Nearby spots
        </h2>
      </div>

      <div className="">
        <Carousel className="max-w-brand-section pl-5">
          {nearbySpots.map((spot) => (
            <CarouselItem
              key={spot.id}
              className="last:pr-5 md:last:pr-10 lg:last:pr-16"
            >
              <NearbySpotCard spot={spot} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </SectionLayout>
  );
};
