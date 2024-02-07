'use client';

import { cn } from '@/app/_theme/utils';
import { chunk } from '@/app/_utils/chunk';
import { range } from '@/app/_utils/range';
import { forwardRef, useRef, useState } from 'react';

type CarouselProps = {
  children?: React.ReactNode;
  className?: string;
  hideControls?: boolean;
};

const scrollSectionIntoView = (parent: HTMLElement, index: number) => {
  const MAX_CHUNK_AMOUNT = 3;
  const carouselItems = Array.from(
    parent.querySelectorAll('.carousel-item')
  ) as HTMLDivElement[];

  const carouselChunkList = chunk(carouselItems, MAX_CHUNK_AMOUNT);
  const selectedChunk = carouselChunkList[index - 1];
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

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, className, hideControls }, ref) => {
    const [sectionIndex, setSectionIndex] = useState(1);

    const innerCarouselRef = useRef<HTMLDivElement>(null);

    const handleSetIndex = (index: number) => {
      setSectionIndex(index);
      if (!innerCarouselRef.current) return;

      scrollSectionIntoView(innerCarouselRef.current, index);
    };
    return (
      <div className="" ref={ref}>
        <div className="overflow-x-scroll no-scrollbar">
          <div
            className={cn(
              'flex items-stretch gap-2 md:gap-5 overflow-x-visible mx-auto snap-x snap-mandatory no-scrollbar',
              className
            )}
            ref={innerCarouselRef}
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
