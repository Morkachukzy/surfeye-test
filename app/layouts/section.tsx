type SectionLayoutProps = Readonly<{
  children: React.ReactNode;
}>;
export const SectionLayout = ({ children }: SectionLayoutProps) => {
  return <section className="space-y-6 max-w-7xl mx-auto">{children}</section>;
};
