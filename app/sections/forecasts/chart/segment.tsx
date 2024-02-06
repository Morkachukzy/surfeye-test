import { cn } from '@/app/_theme/utils';

type ForecastChartSegmentProps = {
  className?: string;
  label?: string | JSX.Element;
  labelPosition?: 'left' | 'right';
};
export const ForecastChartSegment = ({
  className,
  label,
  labelPosition = 'right',
}: ForecastChartSegmentProps) => {
  return (
    <div className={cn('h-full relative', className)}>
      <div
        className={cn('w-brand-fit absolute top-full mt-2 italic', {
          'left-0 -translate-x-1/2': labelPosition === 'left',
          'right-0 translate-x-1/2': labelPosition === 'right',
        })}
      >
        {label}
      </div>
    </div>
  );
};
