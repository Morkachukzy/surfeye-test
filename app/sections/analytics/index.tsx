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
import { useMemo, useState } from 'react';

const tabs = '';

export const AnalyticsSection = () => {
  const tabs = useMemo(
    () => [
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
    ],
    []
  );
  return (
    <SectionLayout className="pb-4 md:pb-10 lg:pb-[4.25rem] px-5">
      <div className="flex  items-center gap-1.5 justify-between mb-[1.625rem]">
        <h2 className="uppercase leading-tight text-xl md:text-2xl lg:text-3xl font-bold">
          Live surf <span className="text-brand-dark-green">analytics</span>
        </h2>
        <div className=""></div>
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
    </SectionLayout>
  );
};
