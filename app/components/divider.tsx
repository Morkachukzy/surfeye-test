import { cn } from '@/app/_theme/utils';

type DividerProps = {
  className?: string;
};

export const Divider = ({ className }: DividerProps) => {
  return (
    <div
      className={cn('bg-brand-primary bg-opacity-15 w-full h-0.5', className)}
    />
  );
};
