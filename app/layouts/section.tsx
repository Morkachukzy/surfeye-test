import { cn } from '@/app/_theme/utils';

type SectionLayoutProps = Readonly<{
  children?: React.ReactNode;
  className?: string;
}>;
export const SectionLayout = ({ children, className }: SectionLayoutProps) => {
  return (
    <section className={cn('max-w-brand-section mx-auto ', className)}>
      {children}
    </section>
  );
};
