import { SectionLayout } from '@/app/layouts/section';
import { AnalyticCard, AnalyticCardTitle } from './analytic-card';
import { StarRating } from '@/app/components/star-rating';

export const AnalyticsSection = () => {
  return (
    <SectionLayout>
      <div className="flex items-center justify-between">
        <h2 className="uppercase text-3xl font-bold">
          Live surf <span className="text-brand-dark-green">analytics</span>
        </h2>
        <button className="flex items-center gap-3 leading-none uppercase italic font-bold text-xl bg-brand-primary text-white rounded-full select-none py-3.5 px-[1.875rem]">
          90 min
        </button>
      </div>
      <div className="flex items-stretch gap-10">
        <AnalyticCard className="space-y-8">
          <AnalyticCardTitle>Conditions rating</AnalyticCardTitle>
          <StarRating level={4} />
        </AnalyticCard>
        <AnalyticCard>
          <AnalyticCardTitle>Average ride time</AnalyticCardTitle>
        </AnalyticCard>
        <AnalyticCard>
          <AnalyticCardTitle>Waves surfed</AnalyticCardTitle>
        </AnalyticCard>
        <AnalyticCard>
          <AnalyticCardTitle>Rides' direction split</AnalyticCardTitle>
        </AnalyticCard>
      </div>
    </SectionLayout>
  );
};
