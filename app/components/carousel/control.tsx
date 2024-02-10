import { cn } from '@/app/_theme/utils';
import { range } from '@/app/_utils/range';

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
