import { cn } from '@/app/_theme/utils';

type AnalyticCardBaseProps = {
  children?: React.ReactNode;
  className?: string;
};
type AnalyticCardProps = Readonly<AnalyticCardBaseProps>;

export const AnalyticCard = ({ children, className }: AnalyticCardProps) => {
  return (
    <div
      className={cn(
        'relative flex-1 p-10 border-brand-gradient-primary shadow-brand-700 bg-brand-light rounded-brand-300',
        className
      )}
    >
      {children}
    </div>
  );
};

type AnalyticCardTitleProps = Readonly<AnalyticCardBaseProps>;

export const AnalyticCardTitle = ({
  children,
  className,
}: AnalyticCardTitleProps) => {
  return (
    <p className={cn('uppercase font-medium text-lg mb-2.5', className)}>
      {children}
    </p>
  );
};

type AnalyticCardValueProps = Readonly<AnalyticCardBaseProps>;

export const AnalyticCardValue = ({
  children,
  className,
}: AnalyticCardValueProps) => {
  return (
    <p className={cn('text-brand-3xl font-bold ', className)}>{children}</p>
  );
};

type AnalyticCardInfoTextProps = Readonly<AnalyticCardBaseProps>;

export const AnalyticCardInfoText = ({
  children,
  className,
}: AnalyticCardInfoTextProps) => {
  return (
    <p
      className={cn(
        'text-xs font-medium flex items-center gap-1 uppercase',
        className
      )}
    >
      {children}
    </p>
  );
};
