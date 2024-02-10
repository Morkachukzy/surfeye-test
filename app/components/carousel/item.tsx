import { cn } from '@/app/_theme/utils';

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
