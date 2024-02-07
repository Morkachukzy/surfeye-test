'use client';

import { SectionLayout } from '@/app/layouts/section';
import { FeatureCard } from './feature-card';
import { features } from './features';
import { Carousel, CarouselItem } from '@/app/components/carousel';
import { GenericButton } from '@/app/components/button';
import { useMediaQuery } from '@/app/hooks/use-media-query';

export const FeaturesSection = () => {
  const isHDDevice = useMediaQuery('only screen and (min-width : 1280px)');
  return (
    <SectionLayout className="pb-10 px-0 md:px-0 lg:px-0 space-y-3.5">
      <div className="flex items-center gap-3.5 justify-between px-4 md:px-6 lg:px-4 xl:px-0">
        <h2 className="uppercase text-brand-md md:text-lg lg:text-2xl font-bold">
          Get surf eye <span className="text-brand-yellow">unlimited</span>
        </h2>
        <GenericButton variant="yellow" small>
          Get started
        </GenericButton>
      </div>

      <Carousel className="py-3 px-5 gap-4" hideControls={isHDDevice}>
        {features.map(({ title, description, icon: Icon }) => (
          <CarouselItem key={title} className="last:pr-5">
            <FeatureCard>
              <div className="space-y-1 flex-1">
                <p className="uppercase font-bold text-xs md:text-brand-md">
                  {title}
                </p>
                <p className="font-medium text-xs md:text-brand-md">
                  {description}
                </p>
              </div>
              <div className="w-10 md:w-14">
                <Icon />
              </div>
            </FeatureCard>
          </CarouselItem>
        ))}
      </Carousel>
    </SectionLayout>
  );
};
