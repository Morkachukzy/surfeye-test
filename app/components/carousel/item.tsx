import { cn } from '@/app/_theme/utils';
import { forwardRef } from 'react';

type CarouselItemProps = {
  children?: React.ReactNode;
  className?: string;
};

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ children, className }, ref) => {
    return (
      <div
        className={cn(
          'snap-always snap-start flex-shrink-0 flex-1 carousel-item',
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

CarouselItem.displayName = 'CarouselItem';
