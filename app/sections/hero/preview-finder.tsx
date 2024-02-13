'use client';

import { gsap, ScrollTrigger } from '@/app/_libs/gsap';
import { useGSAP } from '@gsap/react';
import { ArrowLeftIcon, PlayIcon } from '@/app/_assets/icons';
import { GenericButton } from '@/app/components/button';
import { Carousel, CarouselItem } from '@/app/components/carousel';
import { Tabs, TabTriggers, Tab, TabPanel } from '@/app/components/tab';
import { cn } from '@/app/_theme/utils';
import { LiveBadge } from '@/app/components/badge/live';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { AllWaveVideos } from './mocks/wave-videos';
import { debounce } from 'remeda';
import { createIntersectionObserver } from '@/app/_utils/create-intersection-observer';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

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

  const carouselRef = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement>(null);
  const liveRef = useRef<HTMLDivElement>(null);
  const pinnedLiveRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!container.current || !liveRef.current || !pinnedLiveRef.current)
      return;

    const containerEl = container.current;
    const liveEl = liveRef.current;
    const pinnedLiveEl = pinnedLiveRef.current;

    const { unobserve } = createIntersectionObserver({
      options: {
        root: containerEl,
        threshold: 0,
      },
      entryCallback: (e) => {
        if (e.isIntersecting) {
          pinnedLiveEl.style.opacity = '0';
          pinnedLiveEl.style.pointerEvents = 'none';
          pinnedLiveEl.style.cursor = 'none';
          return;
        }
        pinnedLiveEl.style.opacity = '1';
        pinnedLiveEl.style.pointerEvents = 'all';
        pinnedLiveEl.style.cursor = 'pointer';
      },
      observerCallback: (observer) => {
        observer.observe(liveEl);
      },
    });
    return () => unobserve(liveEl);
  }, []);

  const scrollLiveIntoView = () => {
    container.current?.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

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

          <Carousel
            className="overflow-x-auto"
            outerContainerClassName="relative"
            hideControls
            ref={container}
          >
            <CarouselItem
              className="first:pl-3 md:first:pl-8 last:pr-3 md:last:pr-8"
              ref={liveRef}
            >
              <div
                className={cn(
                  'flex items-center justify-center rounded-2xl transition-all  w-[150px] h-full relative cursor-pointer live',
                  {
                    ' border-2 border-brand-red-2 active-video':
                      isSelectedVideo(waves.live),
                  }
                )}
                onClick={() => setSelectedVideo?.(waves.live)}
              >
                <video className="w-full h-full object-cover rounded-2xl">
                  <source src={waves.live.url} type="video/mp4" />
                </video>
                <LiveBadge className="top-1.5 left-1.5" />
                <PlayIcon className="absolute" />
              </div>
            </CarouselItem>

            <div
              className={cn(
                'opacity-0 absolute left-0 z-10 h-full pl-3 fade-bg transition-all'
              )}
              ref={pinnedLiveRef}
            >
              <div
                className={cn(
                  ' relative flex items-center justify-center rounded-2xl transition-all w-8 h-full cursor-pointer live',
                  {
                    ' border-2 border-brand-red-2 active-video':
                      isSelectedVideo(waves.live),
                  }
                )}
                onClick={scrollLiveIntoView}
              >
                <video className="w-full h-full object-cover rounded-2xl">
                  <source src={waves.live.url} type="video/mp4" />
                </video>
                <LiveBadge
                  className="top-6 left-0 -translate-x-1.5 origin-bottom h-4 px-2 md:px-2 text-xs md:text-xs -rotate-90"
                  indicatorClassName="md:w-1.5 md:h-1.5"
                />
              </div>
            </div>
            {formattedWavesData.map((waveType) => (
              <TabPanel
                key={waveType.id}
                tab={waveType.id}
                className="relative flex gap-2 md:gap-5 items-stretch"
              >
                {waves[waveType.id].map((video) => (
                  <CarouselItem
                    key={video.id}
                    className="last:pr-3 md:last:pr-8"
                  >
                    <div
                      className={cn(
                        'flex items-center justify-center rounded-2xl w-[150px] transition-all aspect-[150/85] relative cursor-pointer',
                        {
                          'active-video border-2 border-white':
                            isSelectedVideo(video),
                        }
                      )}
                      onClick={() => setSelectedVideo?.(video)}
                    >
                      <video className="w-full h-full object-cover rounded-2xl">
                        <source src={video.url} type="video/mp4" />
                      </video>
                      <PlayIcon className="absolute" />
                    </div>
                  </CarouselItem>
                ))}
              </TabPanel>
            ))}
          </Carousel>
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
