import { StarIcon } from '@/app/_assets/icons';
import { cn } from '../_theme/utils';

const STAR_LENGTH = 5;

type StarRatingSize = 'normal' | 'small';
type StarRatingProps = {
  level: 0 | 1 | 2 | 3 | 4 | 5;
  size?: StarRatingSize;
  className?: string;
};

const sizes = {
  normal: 'w-6 h-6',
  small: 'w-2.5 md:w-4 h-2.5 md:h-4',
} as const;

export const StarRating = ({
  level,
  size = 'normal',
  className,
}: StarRatingProps) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {[...Array(STAR_LENGTH)].map((_, index) => (
        <StarIcon
          key={index}
          className={cn(sizes[size], {
            'fill-brand-yellow': index < level,
          })}
        />
      ))}
    </div>
  );
};
