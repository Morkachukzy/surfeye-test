import { SectionLayout } from '@/app/layouts/section';
import { FeatureCard } from './feature-card';
import { features } from './features';

export const FeaturesSection = () => {
  return (
    <SectionLayout className="pb-[4.5rem]">
      <div className="flex items-center justify-between">
        <h2 className="uppercase text-2xl font-bold">
          Get surf eye <span className="text-brand-yellow">unlimited</span>
        </h2>
        <button className="flex items-center gap-3 leading-none uppercase italic font-bold text-xl bg-brand-yellow rounded-full select-none py-3.5 px-[1.875rem]">
          Get started
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        {features.map(({ title, description, icon: Icon }) => (
          <FeatureCard key={title}>
            <div className="space-y-1 flex-1">
              <p className="uppercase font-bold text-xs md:text-brand-md">
                {title}
              </p>
              <p className="font-medium text-xs md:text-brand-md">
                {description}
              </p>
            </div>
            <div className="w-10 md:w-14">
              <Icon />
            </div>
          </FeatureCard>
        ))}
      </div>
    </SectionLayout>
  );
};