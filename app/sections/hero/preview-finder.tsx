'use client';

import { ArrowLeftIcon, PlayIcon } from '@/app/_assets/icons';
import { GenericButton } from '@/app/components/button';
import { Carousel, CarouselItem } from '@/app/components/carousel';
import { Tabs, TabTriggers, Tab, TabPanel } from '@/app/components/tab';
import { cn } from '@/app/_theme/utils';
import { LiveBadge } from '@/app/components/badge/live';
import { useRef } from 'react';
import { AllWaveVideos } from './mocks/wave-videos';

const formattedWavesData = [
  {
    label: (
      <span className="leading-tight text-xs md:text-xs lg:text-xs">
        Latest <br /> Waves
      </span>
    ),
    id: 'latestWaves',
  },

  {
    label: (
      <span className="leading-tight text-xs md:text-xs lg:text-xs">
        Top surfed <br /> Waves
      </span>
    ),
    id: 'topSurfedWaves',
  },
] as const;

export type WaveVideo = {
  id: string;
  url: string;
};

type VideoPreviewFinderProps = {
  defaultSelectedWaveType: string;
  waves: AllWaveVideos;
  selectedVideo: WaveVideo;
  // eslint-disable-next-line no-unused-vars
  setSelectedVideo?: (wave: WaveVideo) => void;
};
export const VideoPreviewFinder = ({
  defaultSelectedWaveType,
  waves,
  selectedVideo,
  setSelectedVideo,
}: VideoPreviewFinderProps) => {
  const isSelectedVideo = (video: WaveVideo) => {
    return video.id === selectedVideo?.id;
  };

  const carouselRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="">
      <div
        className="pb-6 pt-3.5 bg-brand-primary xl:max-w-[820px] mx-auto xl:rounded-b-3xl space-y-3"
        ref={carouselRef}
      >
        <Tabs defaultSelectedTab={defaultSelectedWaveType}>
          <div className="px-3 md:px-8 flex gap-4 justify-between items-center mb-[18px] md:mb-3">
            <TabTriggers
              aria-label="wave videos"
              className="flex items-center p-0.5 bg-brand-light rounded-full w-brand-fit gap:0.5 md:gap-1.5"
            >
              {formattedWavesData.map((waveType) => (
                <Tab
                  key={waveType.id}
                  tab={waveType.id}
                  className="text-brand-primary py-2 px-6 md:py-2 md:px-8 text-opacity-50 bg-brand-light [&.active-tab]:bg-brand-primary [&.active-tab]:text-brand-light"
                >
                  {waveType.label}
                </Tab>
              ))}
            </TabTriggers>
            <GenericButton
              variant="secondary"
              className="hidden md:flex"
              small
              rightIcon={<ArrowLeftIcon />}
            >
              Watch your session
            </GenericButton>
          </div>
          {formattedWavesData.map((waveType) => (
            <TabPanel key={waveType.id} tab={waveType.id}>
              <Carousel className="overflow-x-auto" hideControls>
                {waves[waveType.id].map((video) => (
                  <CarouselItem
                    key={video.id}
                    className="first:pl-3 md:first:pl-8 last:pr-3 md:last:pr-8"
                  >
                    <div
                      className={cn(
                        'flex items-center justify-center rounded-2xl w-[150px] transition-all  aspect-[150/85] relative cursor-pointer',
                        {
                          ' border-2 border-brand-red-2 active-video':
                            isSelectedVideo(video),
                        }
                      )}
                      onClick={() => setSelectedVideo?.(video)}
                    >
                      <video className="w-full h-full object-cover rounded-2xl">
                        <source src={video.url} type="video/mp4" />
                      </video>
                      {isSelectedVideo(video) ? (
                        <LiveBadge className="top-1.5 left-1.5" />
                      ) : null}
                      <PlayIcon className="absolute" />
                    </div>
                  </CarouselItem>
                ))}
              </Carousel>
            </TabPanel>
          ))}
        </Tabs>
      </div>
      <div className="flex justify-center mt-2">
        <GenericButton
          className="flex md:hidden px-6 py-3"
          small
          rightIcon={
            <ArrowLeftIcon className="[&>path]:fill-brand-light [&>path]:stroke-brand-light" />
          }
        >
          Watch your session
        </GenericButton>
      </div>
    </div>
  );
};
