import { AnalyticCardValue, AnalyticCardInfoText } from './analytic-card';
import { Badge } from '@/app/components/badge';
import { StarRating } from '@/app/components/star-rating';
import { DirectionIcon, SurfWaveIcon, WaveIcon } from '@/app/_assets/icons';

export const analyticsData = [
  {
    id: 'conditions-rating',
    title: 'Conditions rating',
    render: () => <StarRating level={4} />,
  },
  {
    id: 'average-ride-time',
    title: 'Average ride time',
    render: () => (
      <div className="w-brand-fit mx-auto  brand-big-phone:mx-[unset]">
        <div className="flex items-start gap-3 md:gap-5 mb-1.5 md:mb-3">
          <AnalyticCardValue className="flex items-end gap-2">
            <span className="leading-none">8</span>
            <span className="md:hidden font-semibold text-brand-md lowercase">
              sec
            </span>
            <span className="hidden md:inline font-semibold text-brand-md lowercase">
              seconds
            </span>
          </AnalyticCardValue>
          <Badge className="bg-brand-lemon-green text-white">Good</Badge>
        </div>
        <AnalyticCardInfoText>
          <WaveIcon className="w-3 h-3" />
          <span className="md:hidden">4w average 11sec</span>
          <span className="hidden md:inline">4 week average 11sec</span>
        </AnalyticCardInfoText>
      </div>
    ),
  },

  {
    id: 'rides-direction-split',
    title: "Rides' direction split",
    render: () => (
      <>
        <div className="flex items-start gap-5 mb-1.5 md:mb-3 justify-center brand-big-phone:justify-start">
          <AnalyticCardValue className="flex items-start gap-2">
            <span className="leading-none flex flex-col items-start gap-1">
              <span className="text-3xl md:text-brand-3xl">40</span>
              <span className="text-xs md:text-brand-md uppercase font-medium">
                lefts
              </span>
            </span>
            <span className="leading-none text-3xl md:text-brand-3xl">|</span>
            <span className="leading-none flex flex-col items-start gap-1">
              <span className="text-3xl md:text-brand-3xl">60</span>
              <span className="text-xs md:text-brand-md uppercase font-medium">
                rights
              </span>
            </span>
          </AnalyticCardValue>
        </div>
        <AnalyticCardInfoText className="justify-center  brand-big-phone:justify-start">
          <DirectionIcon className="text-center md:text-left w-3 h-3" />
          Average 30|70
        </AnalyticCardInfoText>
      </>
    ),
  },
  {
    id: 'waves-surfed',
    title: 'Waves surfed',
    render: () => (
      <div className="w-brand-fit mx-auto  brand-big-phone:mx-[unset]">
        <div className="flex items-start gap-3.5 md:gap-5 mb-3">
          <AnalyticCardValue className="flex items-end gap-2">
            <span className="leading-none">312</span>
          </AnalyticCardValue>
          <Badge className="bg-brand-red text-white">Crowded</Badge>
        </div>
        <AnalyticCardInfoText className="flex">
          <SurfWaveIcon className="w-3 h-3" />
          Average 150
        </AnalyticCardInfoText>
      </div>
    ),
  },
] as const;
