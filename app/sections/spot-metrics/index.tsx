import { SectionLayout } from '@/app/layouts/section';
import { spotConditions } from './conditions';
import { Metric } from './metric';

export const SpotMetricsSection = () => {
  return (
    <SectionLayout className="space-y-7 md:space-y-10 pb-12 ">
      <div className="flex items-center justify-between px-5 big-brand-tablet:px-16">
        <h2 className="uppercase text-brand-md md:text-2xl font-bold">
          Ideal spot conditions
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row big-brand-tablet:items-center gap-6 md:gap-10 justify-start lg:justify-between px-5 big-brand-tablet:px-16">
        {spotConditions.map(({ label, description, icon: Icon }) => (
          <Metric key={label}>
            <Icon className="w-10 md:w-16 h-10 md:h-16" />
            <div className="space-y-1 md:space-y-2.5">
              <p className="text-brand-md md:text-lg font-bold uppercase leading-none">
                {label}
              </p>
              <p className="text-xs md:text-lg font-medium uppercase">
                {description}
              </p>
            </div>
          </Metric>
        ))}
      </div>
    </SectionLayout>
  );
};
