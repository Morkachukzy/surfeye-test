'use client';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import { cn } from '@/app/_theme/utils';

import {
  attachObservers,
  scrollSectionIntoView,
  splitCarouselItemsIntoChunks,
} from './utils';
import { CarouselControl } from './control';

type CarouselProps = {
  children?: React.ReactNode;
  className?: string;
  outerContainerClassName?: string;
  hideControls?: boolean;
};

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, className, outerContainerClassName, hideControls }, ref) => {
    const [sectionIndex, setSectionIndex] = useState(1);

    const innerCarouselRef = useRef<HTMLDivElement>();
    const outerCarouselRef = useRef<HTMLDivElement>(null);

    const [carouselItemChunks, setCarouselItemChunks] = useState<
      HTMLDivElement[][]
    >([]);

    useEffect(() => {
      if (!innerCarouselRef.current || !outerCarouselRef.current) return;

      attachObservers(outerCarouselRef.current, carouselItemChunks, (index) => {
        setSectionIndex(index);
      });
    }, [carouselItemChunks]);

    const addToRef = useCallback((element: HTMLDivElement) => {
      if (!element) return;

      setCarouselItemChunks(splitCarouselItemsIntoChunks(element));
      innerCarouselRef.current = element;
    }, []);

    const handleSetIndex = (index: number) => {
      scrollSectionIntoView(carouselItemChunks, index);
    };

    return (
      <div className={cn(outerContainerClassName)} ref={addToRef}>
        <div className="overflow-x-scroll no-scrollbar" ref={outerCarouselRef}>
          <div
            className={cn(
              'flex items-stretch gap-2 md:gap-5 overflow-x-visible mx-auto snap-x snap-mandatory no-scrollbar',
              className
            )}
            ref={ref}
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

export * from './item';
