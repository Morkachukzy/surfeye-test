import { SectionLayout } from '@/app/layouts/section';
import { AnalyticCard, AnalyticCardTitle } from './analytic-card';
import { analyticsData } from './analytics-data';
import { cn } from '@/app/_theme/utils';
import { GenericButton } from '@/app/components/button';
import { Tab, TabControls } from '@/app/components/tab';

const tabs = [
  {
    id: 1,
    label: '30min',
    view: <p>THIS IS THE TAB VIEW</p>,
  },
  {
    id: 2,
    label: '60min',
    view: <p>THIS IS THE TAB VIEW</p>,
  },

  {
    id: 3,
    label: '90min',
    view: <p>THIS IS THE TAB VIEW</p>,
  },
];

export const AnalyticsSection = () => {
  return (
    <SectionLayout className="pb-4 md:pb-10 lg:pb-[4.25rem] px-5">
      <div className="flex flex-wrap items-center justify-between mb-[1.625rem]">
        <h2 className="uppercase text-3xl font-bold">
          Live surf <span className="text-brand-dark-green">analytics</span>
        </h2>
        <div className="">
          <Tab tabs={tabs}>
            <TabControls className="" />
          </Tab>
        </div>
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
