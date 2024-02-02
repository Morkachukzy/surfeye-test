type FeatureCardProps = Readonly<{
  children: React.ReactNode;
}>;
export const FeatureCard = ({ children }: FeatureCardProps) => {
  return (
    <div className="shadow-brand-900 md:shadow-brand-400 rounded-2xl px-6 py-5 md:px-8 md:py-8 flex items-center gap-3 w-[18.3125rem] md:w-[26.0625rem] xl:w-[unset]">
      {children}
    </div>
  );
};
