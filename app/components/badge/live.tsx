import { cn } from '@/app/_theme/utils';
import { Badge, type BadgeProps } from '.';

type LiveBadgeProps = {
  className?: BadgeProps['className'];
  indicatorClassName?: BadgeProps['className'];
};
export const LiveBadge = ({
  className,
  indicatorClassName,
}: LiveBadgeProps) => {
  return (
    <Badge
      className={cn(
        'absolute top-9 left-14 z-10 bg-brand-grey bg-opacity-70 text-brand-md font-bold gap-1.5',
        className
      )}
    >
      <span
        className={cn(
          'w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-brand-red-2 rounded-full',
          indicatorClassName
        )}
      />
      <span className="">Live</span>
    </Badge>
  );
};
