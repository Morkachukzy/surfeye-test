import { cn } from '@/app/_theme/utils';

type SectionLayoutProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;
export const SectionLayout = ({ children, className }: SectionLayoutProps) => {
  return (
    <section
      className={cn(
        'space-y-6 max-w-7xl mx-auto px-4 md:px-6 lg:px-4',
        className
      )}
    >
      {children}
    </section>
  );
};
