import { SectionLayout } from '@/app/layouts/section';
import {
  AnalyticCard,
  AnalyticCardTitle,
  AnalyticCardValue,
  AnalyticCardInfoText,
} from './analytic-card';
import { StarRating } from '@/app/components/star-rating';
import { Badge } from '@/app/components/badge';
import { DirectionIcon, SurfWaveIcon, WaveIcon } from '@/app/_assets/icons';

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
          <div className="flex items-start gap-5 mb-3">
            <AnalyticCardValue className="flex items-end gap-2">
              <span className="leading-none">8</span>
              <span className="font-semibold text-brand-md lowercase">
                seconds
              </span>
            </AnalyticCardValue>
            <Badge className="bg-brand-green text-white">Good</Badge>
          </div>
          <AnalyticCardInfoText>
            <WaveIcon className="w-3 h-3" />4 week average 11sec
          </AnalyticCardInfoText>
        </AnalyticCard>
        <AnalyticCard>
          <AnalyticCardTitle>Waves surfed</AnalyticCardTitle>
          <div className="flex items-start gap-5 mb-3">
            <AnalyticCardValue className="flex items-end gap-2">
              <span className="leading-none">312</span>
            </AnalyticCardValue>
            <Badge className="bg-brand-red text-white">Crowded</Badge>
          </div>
          <AnalyticCardInfoText>
            <SurfWaveIcon className="w-3 h-3" />
            Average 150
          </AnalyticCardInfoText>
        </AnalyticCard>
        <AnalyticCard>
          <AnalyticCardTitle>Rides' direction split</AnalyticCardTitle>
          <div className="flex items-start gap-5 mb-3">
            <AnalyticCardValue className="flex items-start gap-2">
              <span className="leading-none flex flex-col items-start gap-1">
                <span className="">40</span>
                <span className="text-brand-md uppercase font-medium">
                  lefts
                </span>
              </span>
              <span className="leading-none">|</span>
              <span className="leading-none flex flex-col items-start gap-1">
                <span className="">60</span>
                <span className="text-brand-md uppercase font-medium">
                  rights
                </span>
              </span>
            </AnalyticCardValue>
          </div>
          <AnalyticCardInfoText>
            <DirectionIcon className="w-3 h-3" />
            Average 30|70
          </AnalyticCardInfoText>
        </AnalyticCard>
      </div>
    </SectionLayout>
  );
};
