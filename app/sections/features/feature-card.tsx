type FeatureCardProps = Readonly<{
  children: React.ReactNode;
}>;
export const FeatureCard = ({ children }: FeatureCardProps) => {
  return (
    <div className="shadow-brand-400 rounded-2xl p-8 flex items-center gap-3">
      {children}
    </div>
  );
};
