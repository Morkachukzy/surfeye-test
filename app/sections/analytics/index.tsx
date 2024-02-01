import { SectionLayout } from '@/app/layouts/section';
import { AnalyticCard, AnalyticCardTitle } from './analytic-card';
import { analyticsData } from './analytics-data';
import { cn } from '@/app/_theme/utils';

export const AnalyticsSection = () => {
  return (
    <SectionLayout className="pb-[4.5rem]">
      <div className="flex items-center justify-between">
        <h2 className="uppercase text-3xl font-bold">
          Live surf <span className="text-brand-dark-green">analytics</span>
        </h2>
        <button className="flex items-center gap-3 leading-none uppercase italic font-bold text-xl bg-brand-primary text-white rounded-full select-none py-3.5 px-[1.875rem]">
          90 min
        </button>
      </div>
      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 items-stretch justify-center gap-8 flex-wrap">
        {analyticsData.map((analytic) => (
          <AnalyticCard
            key={analytic.title}
            className={cn('flex-none', {
              'order-last ': analytic.id === 'rides-direction-split',
            })}
          >
            <AnalyticCardTitle>{analytic.title}</AnalyticCardTitle>
            <analytic.render />
          </AnalyticCard>
        ))}
      </div>
      <AnalyticCard className="grid md:hidden grid-cols-2 gap-x-4 gap-y-5">
        {analyticsData.map((analytic) => (
          <div
            key={analytic.title}
            className={cn(
              'brand-big-phone:w-brand-fit brand-big-phone:mx-auto',
              {
                'flex-1 ': analytic.id === 'rides-direction-split',
              }
            )}
          >
            <AnalyticCardTitle
              className={cn({
                'text-center  brand-big-phone:text-left':
                  analytic.id === 'waves-surfed',
              })}
            >
              {analytic.title}
            </AnalyticCardTitle>
            <analytic.render />
          </div>
        ))}
      </AnalyticCard>
    </SectionLayout>
  );
};
