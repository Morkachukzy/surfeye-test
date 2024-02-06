import { getMinutesAndSeconds } from '@/app/_utils/get-minutes-and-seconds';
import { Badge } from '@/app/components/badge';
import { Compass } from '@/app/components/compass';
import { ForecastDayData } from '../types';
import { cn } from '@/app/_theme/utils';

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
    <div className="py-4 px-4 md:px-8 flex-1 flex items-start max-w-[600px] w-full brand-min-desktop:max-w-none mx-auto brand-min-desktop:mx-[unset] justify-between gap-4">
      <div className="space-y-1.5 md:space-y-0.5 flex-shrink-0">
        <p className=" uppercase text-brand-md md:text-lg text-center font-medium">
          Surf (m)
        </p>
        <p className="font-bold text-4xl">{averageSurfDistance}</p>
      </div>
      <div>
        <div className="space-y-1.5 md:space-y-0.5">
          <p className="uppercase text-brand-md md:text-lg text-center font-medium">
            Swell
          </p>
          <div className="flex items-center gap-1 md:gap-3.5">
            <span className="space-x-2 md:space-x-3">
              <ForecastDayMetricValue
                value={getMinutesAndSeconds(averageSwell.time).minutes}
                unit="m"
              />
              <ForecastDayMetricValue
                value={getMinutesAndSeconds(averageSwell.time).seconds}
                unit="s"
              />
            </span>

            <Compass direction={averageSwell.direction} iconClass="mb-1" />
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <Badge className="px-2.5 py-1 bg-brand-pale-blue md:bg-black md:bg-opacity-10 text-brand-md gap-0.5 font-bold ">
            2810 <span className="font-normal lowercase">kj</span>
          </Badge>
        </div>
      </div>
      <div>
        <div className="space-y-1.5 md:space-y-0.5">
          <p className="uppercase text-brand-md md:text-lg text-center font-medium">
            Wind
          </p>
          <div className="flex items-center gap-2 md:gap-3.5">
            <ForecastDayMetricValue
              value={averageWind.speed}
              unit="kph"
              className="flex items-end gap-1"
            />

            <Compass direction={averageWind.direction} iconClass="mb-1" />
          </div>
        </div>
        <div className="flex justify-center mt-3">
          <Badge className="px-2.5 py-1 font-exo2 text-brand-md text-white gap-0.5 font-bold bg-brand-green capitalize">
            Offshore
          </Badge>
        </div>
      </div>
    </div>
  );
};

type ForecastDayMetricValueProps = {
  value: string | number;
  unit: string;
  className?: string;
};
const ForecastDayMetricValue = ({
  value,
  unit,
  className,
}: ForecastDayMetricValueProps) => {
  return (
    <span className={cn('font-bold text-  text-3xl md:text-4xl', className)}>
      {value}
      <span className="lowercase text-xl md:text-2xl font-normal">{unit}</span>
    </span>
  );
};
