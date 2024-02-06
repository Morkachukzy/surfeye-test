import { cn } from '@/app/_theme/utils';
import { forwardRef } from 'react';

type CarouselProps = {
  children?: React.ReactNode;
  className?: string;
  showControls?: boolean;
};

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, className, showControls }, ref) => {
    return (
      <div className="">
        <div className="overflow-x-scroll no-scrollbar" ref={ref}>
          <div
            className={cn(
              'flex items-stretch gap-2 md:gap-5 overflow-x-visible mx-auto snap-x snap-mandatory no-scrollbar',
              className
            )}
          >
            {children}
          </div>
        </div>
        <CarouselControl />
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
      className={cn('snap-always snap-start flex-shrink-0 flex-1', className)}
    >
      {children}
    </div>
  );
};

export const CarouselControl = () => {
  return <div className="">This is a control</div>;
};
