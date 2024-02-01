import { cn } from '@/app/_theme/utils';

type MetricProps = {
  children?: React.ReactNode;
  className?: string;
};

export const Metric = ({ children, className }: MetricProps) => {
  return (
    <div className={cn('flex items-center gap-5', className)}>{children}</div>
  );
};
