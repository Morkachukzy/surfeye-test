'use client';

import {
  SectionAltRow,
  SectionInfoLink,
  SectionLayout,
  SectionUpdateInfo,
} from '@/app/layouts/section';
import { AnalyticCard, AnalyticCardTitle } from './analytic-card';
import { analyticsData } from './analytics-data';
import { cn } from '@/app/_theme/utils';
import { Tab, TabTriggers, Tabs } from '@/app/components/tab';
import { useRouter } from 'next/navigation';

const tabs = '';

export const AnalyticsSection = () => {
  const tabs = [
    {
      id: '30min',
      label: '30min',
    },
    {
      id: '60min',
      label: '60min',
    },
    {
      id: '90min',
      label: '90min',
    },
  ];

  const router = useRouter();

  const push = () => router.push('/#analytics', { scroll: false });
  return (
    <SectionLayout
      className="pb-4 md:pb-10 lg:pb-[4.25rem] px-5"
      relativeId="analytics"
    >
      <Tabs defaultSelectedTab="30min">
        <div className="flex  items-center gap-2 justify-between mb-[1.625rem]">
          <button
            onClick={push}
            className="uppercase flex-shrink-0 leading-tight text-lg px-0 md:text-2xl lg:text-3xl font-bold"
          >
            Live surf <span className="text-brand-dark-green">analytics</span>
          </button>
          <div className="">
            <TabTriggers
              aria-label="analytics-data-vis"
              className="flex flex-shrink-0 items-center px-0.5 md:px-2 bg-brand-light border border-brand-primary rounded-full w-brand-fit gap:0.5 md:gap-1.5"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.id}
                  tab={tab.id}
                  className={cn(
                    'text-xs md:text-[1rem] [&:not(&:first-child)]:border-l py-0 rounded-none border-brand-primary text-brand-primary px-1.5 md:px-3 lg:px-3 text-opacity-50 font-bold bg-transparent ',
                    '[&.active-tab]:rounded-full [&.active-tab]:-mx-[3px] [&.active-tab]:md:-mx-3 [&.active-tab]:py-1.5 [&.active-tab]:md:py-2 [&.active-tab]:bg-brand-primary [&.active-tab]:text-brand-light [&.active-tab]:shadow-brand-1100 [&.active-tab]:px-2 [&.active-tab]:md:px-4'
                  )}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabTriggers>
          </div>
        </div>
        <SectionAltRow className="mb-2 mt-0">
          <SectionUpdateInfo
            updatedAt="2024-02-05T11:59:20+0000"
            className="md:hidden gap-2"
          />
        </SectionAltRow>
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
        <SectionAltRow className="justify-end md:justify-between ">
          <SectionInfoLink
            name="Analytics"
            url="/"
            className="flex-row-reverse md:flex"
          />
          <SectionUpdateInfo
            updatedAt="2024-02-05T11:59:20+0000"
            className="hidden md:flex"
          />
        </SectionAltRow>
      </Tabs>
    </SectionLayout>
  );
};
