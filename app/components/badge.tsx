import { cn } from '@/app/_theme/utils';

type BadgeProps = Readonly<{
  children?: React.ReactNode;
  className?: string;
}>;

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        'rounded-full inline-flex items-center leading-none uppercase text-xs font-medium justify-center gap-3 py-0.5 md:py-1 px-[7px] md:px-3.5',
        className
      )}
    >
      {children}
    </span>
  );
};
