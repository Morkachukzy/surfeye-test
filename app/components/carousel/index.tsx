'use client';

import { cn } from '@/app/_theme/utils';
import { chunk } from '@/app/_utils/chunk';
import { createIntersectionObserver } from '@/app/_utils/create-intersection-observer';
import { range } from '@/app/_utils/range';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type CarouselProps = {
  children?: React.ReactNode;
  className?: string;
  hideControls?: boolean;
};

const MAX_CHUNK_AMOUNT = 3;

const splitCarouselItemsIntoChunks = <T extends HTMLElement>(
  parent: T,
  chunkLength: number = MAX_CHUNK_AMOUNT
) => {
  const carouselItems = Array.from(
    parent.querySelectorAll('.carousel-item')
  ) as HTMLDivElement[];

  return chunk(carouselItems, chunkLength);
};

const scrollSectionIntoView = <T extends HTMLElement>(
  chunkList: T[][],
  index: number
) => {
  const selectedChunk = chunkList[index - 1];
  const selectedEl =
    index >= MAX_CHUNK_AMOUNT
      ? selectedChunk[selectedChunk.length - 1]
      : selectedChunk[0];

  if (!selectedEl) return;

  selectedEl.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest',
  });
};

const getMonitoredChunks = <T extends HTMLElement>(chunkList: T[][]) => {
  return chunkList.reduce((acc, chunks) => [...acc, chunks[0]], []);
};

const attachObservers = <T extends HTMLElement>(
  parent: T,
  chunkList: T[][],
  // eslint-disable-next-line no-unused-vars
  callback?: (index: number) => void
) => {
  const observerInitOptions = {
    root: parent,
    threshold: 0,
  };

  const entryCallback = (entry: IntersectionObserverEntry) => {
    if (entry.intersectionRatio > 0) {
      console.log('entry.target', entry.target);
      const attributeValue = entry.target.getAttribute('data-observable');
      if (!attributeValue) return;
      const chunkIndex = parseInt(attributeValue);
      callback?.(chunkIndex);
    }
  };

  const monitoredChunks = getMonitoredChunks(chunkList);

  monitoredChunks.forEach((chunk) => {
    createIntersectionObserver({
      options: observerInitOptions,
      entryCallback,
      observerCallback: (observer) => {
        // const firstElOfChunk = chunk[0];
        // firstElOfChunk.setAttribute('data-observable', `${index + 1}`);

        observer.observe(chunk);
      },
    });
  });
};

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, className, hideControls }, ref) => {
    const [sectionIndex, setSectionIndex] = useState(1);

    const innerCarouselRef = useRef<HTMLDivElement>();

    const [carouselItemChunks, setCarouselItemChunks] = useState<
      HTMLDivElement[][]
    >([]);

    useEffect(() => {
      if (!innerCarouselRef.current) return;
      attachObservers(innerCarouselRef.current, carouselItemChunks, (index) => {
        console.log('CALLED CALLBACK');

        setSectionIndex(index);
      });
    }, [carouselItemChunks]);

    const addToRef = useCallback((element: HTMLDivElement) => {
      if (!element) return;

      setCarouselItemChunks(splitCarouselItemsIntoChunks(element));
      innerCarouselRef.current = element;
    }, []);

    const handleSetIndex = (index: number) => {
      setSectionIndex(index);

      scrollSectionIntoView(carouselItemChunks, index);
    };
    return (
      <div className="" ref={ref}>
        <div className="overflow-x-scroll no-scrollbar">
          <div
            className={cn(
              'flex items-stretch gap-2 md:gap-5 overflow-x-visible mx-auto snap-x snap-mandatory no-scrollbar',
              className
            )}
            ref={addToRef}
          >
            {children}
          </div>
        </div>
        {!hideControls ? (
          <CarouselControl
            sectionIndex={sectionIndex}
            setSectionIndex={handleSetIndex}
          />
        ) : null}
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';

type CarouselItemProps = {
  children?: React.ReactNode;
  className?: string;
};

export const CarouselItem = ({ children, className }: CarouselItemProps) => {
  return (
    <div
      className={cn(
        'snap-always snap-start flex-shrink-0 flex-1 carousel-item',
        className
      )}
    >
      {children}
    </div>
  );
};

type CarouselControlProps = {
  sectionIndex: number;
  setSectionIndex: (sectionIndex: number) => void;
};

export const CarouselControl = ({
  sectionIndex,
  setSectionIndex,
}: CarouselControlProps) => {
  return (
    <div className="max-w-[165px] w-full p-3 mx-auto flex items-center gap-2 mt-3">
      {range(1, 3).map((i) => (
        <button
          key={i}
          className={cn(
            'block h-1.5 bg-brand-primary bg-opacity-50 min-w-4 rounded-full',
            {
              'flex-1 transition-all duration-500 bg-opacity-100':
                sectionIndex === i,
            }
          )}
          onClick={() => setSectionIndex(i)}
        ></button>
      ))}
    </div>
  );
};
