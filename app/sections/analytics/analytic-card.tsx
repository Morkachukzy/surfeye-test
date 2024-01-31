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
        'relative flex-1 px-3.5 py-[1.625rem] md:p-10 border-brand-gradient-primary shadow-brand-700 bg-brand-light rounded-3xl md:rounded-brand-300',
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
    <p
      className={cn(
        'uppercase text-left font-medium text-brand-md md:text-lg mb-2.5 whitespace-nowrap',
        className
      )}
    >
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
    <p className={cn('text-brand-2xl md:text-brand-3xl font-bold ', className)}>
      {children}
    </p>
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
        'text-xs font-normal md:font-medium flex items-center gap-1 uppercase',
        className
      )}
    >
      {children}
    </p>
  );
};
