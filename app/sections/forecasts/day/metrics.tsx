import { getMinutesAndSeconds } from '@/app/_utils/get-minutes-and-seconds';
import { Badge } from '@/app/components/badge';
import { Compass } from '@/app/components/compass';
import { ForecastDayData } from '../types';

export type ForecastDayMetricsProps = {
  averageSurfDistance: ForecastDayData['averageSurfDistance'];
  averageSwell: ForecastDayData['averageSwell'];
  averageWind: ForecastDayData['averageWind'];
};

export const ForecastDayMetrics = ({
  averageSurfDistance,
  averageSwell,
  averageWind,
}: ForecastDayMetricsProps) => {
  return (
    <div className="py-4 px-8 flex-1 flex items-start justify-between gap-4">
      <div className="gap-0.5">
        <p className="uppercase text-lg text-center font-medium">Surf (m)</p>
        <p className="font-bold text-4xl">{averageSurfDistance}</p>
      </div>
      <div className="gap-0.5">
        <p className="uppercase text-lg text-center font-medium">Swell</p>
        <div className="flex items-center gap-2">
          <span className="lowercase text-2xl font-normal">
            <span className="font-bold text-4xl">
              {getMinutesAndSeconds(averageSwell.time).minutes}
            </span>
            m{' '}
            <span className="font-bold text-4xl">
              {getMinutesAndSeconds(averageSwell.time).seconds}
            </span>
            s
          </span>

          <Compass direction={averageSwell.direction} iconClass="mb-1" />
        </div>
        <div className="flex justify-center mt-3">
          <Badge className="bg-black bg-opacity-10 text-brand-md gap-0.5 font-bold ">
            2810 <span className="font-normal lowercase">kj</span>
          </Badge>
        </div>
      </div>
      <div className="gap-0.5">
        <p className="uppercase text-lg text-center font-medium">Swell</p>
        <div className="flex items-center gap-2">
          <span className="lowercase text-2xl font-normal">
            <span className="font-bold text-4xl">{averageWind.speed}</span>
            kph
          </span>

          <Compass direction={averageWind.direction} iconClass="mb-1" />
        </div>
        <div className="flex justify-center mt-3">
          <Badge className="font-exo2 text-brand-md text-white gap-0.5 font-bold bg-brand-dark-green capitalize">
            Offshore
          </Badge>
        </div>
      </div>
    </div>
  );
};
