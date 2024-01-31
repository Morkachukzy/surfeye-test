import { StarIcon } from '@/app/_assets/icons';
import { cn } from '../_theme/utils';

const STAR_LENGTH = 5;

type StarRatingProps = {
  level: 0 | 1 | 2 | 3 | 4 | 5;
};

export const StarRating = ({ level }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-2 ">
      {[...Array(STAR_LENGTH)].map((_, index) => (
        <StarIcon
          key={index}
          className={cn('w-6 h-6', {
            'fill-brand-yellow': index < level,
          })}
        />
      ))}
    </div>
  );
};
