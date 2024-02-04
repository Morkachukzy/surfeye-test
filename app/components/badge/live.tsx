import { cn } from '@/app/_theme/utils';
import { Badge, type BadgeProps } from '.';

type LiveBadgeProps = {
  className?: BadgeProps['className'];
};
export const LiveBadge = ({ className }: LiveBadgeProps) => {
  return (
    <Badge
      className={cn(
        'absolute top-9 left-14 z-10 bg-brand-grey bg-opacity-70 text-brand-md font-bold gap-1.5',
        className
      )}
    >
      <span className="w-2.5 h-2.5 bg-brand-red-2 rounded-full" />
      <span className="">Live</span>
    </Badge>
  );
};
