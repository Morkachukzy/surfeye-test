import { Compass } from '@/app/components/compass';
import { ForecastData } from './types';
import { getMinutesAndSeconds } from '@/app/_utils/get-minutes-and-seconds';
import { cn } from '@/app/_theme/utils';
import { Badge } from '@/app/components/badge';

type ForecastTableProps = {
  dataSet: ForecastData[];
};

const colors: Record<string, string> = {
  Today: 'bg-brand-green text-brand-light',
  Tmrw: 'bg-brand-orange text-brand-light',
  Fri: 'bg-brand-lemon-green text-brand-light',
  Sat: 'bg-brand-lemon-green text-brand-light',
  Sun: 'bg-brand-red-3 text-brand-light',
};

const tableHeaders = ['Surf(m)', 'Swell', 'Wind'];

export const ForecastTable = ({ dataSet }: ForecastTableProps) => {
  return (
    <div className="bg-white rounded-3xl md:rounded-brand-600 shadow-brand-800 mx-auto max-w-[62.5rem] pt-7 md:pt-8 px-6 pb-7 md:pb-10 flex justify-center">
      <div className="max-w-[50rem] w-full">
        <div className="flex items-center justify-between border-b border-brand-primary border-opacity-20 mx-7 md:mx-14">
          {tableHeaders.map((header) => (
            <span
              key={header}
              className="uppercase text-xs md:text-lg font-medium pb-3 md:pb-5"
            >
              {header}
            </span>
          ))}
        </div>
        <div className="py-1.5 space-y-1.5">
          {dataSet.map((data) => (
            <div key={data.label} className="flex items-center justify-between">
              <div className="basis-1/3 flex items-center justify-center relative">
                <Badge
                  className={`absolute left-0 -translate-x-3 md:-translate-x-6 -rotate-90 w-[57px] md:w-[87px] px-[18px] py-0.5 bg-brand-lemon-green ${[colors[data.label]]}`}
                >
                  {data.label}
                </Badge>
                <ForecastSurfHeightMetrics surfHeight={data.surfHeight} />
              </div>
              <ForecastSwellMetrics swell={data.swell} />
              <ForecastWindMetrics wind={data.wind} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

type ForecastSurfHeightMetricsProps = {
  surfHeight: ForecastData['surfHeight'];
};
const ForecastSurfHeightMetrics = ({
  surfHeight,
}: ForecastSurfHeightMetricsProps) => {
  return (
    <div className="text-center basis-1/3 flex gap-2 items-center justify-center py-5 md:py-8 flex-1">
      <ForecastMetrics className="text-center" value={surfHeight} unit="m" />
    </div>
  );
};

type ForecastSwellMetricsProps = {
  swell: ForecastData['swell'];
};
const ForecastSwellMetrics = ({ swell }: ForecastSwellMetricsProps) => {
  return (
    <div className="text-center flex gap-2 items-center justify-center">
      <ForecastMetrics
        value={getMinutesAndSeconds(swell.time).minutes}
        unit="m"
      />
      <ForecastMetrics
        value={getMinutesAndSeconds(swell.time).seconds}
        unit="s"
      />
      <span className="">
        <Compass
          direction={swell.direction}
          className="gap-0 md:gap-0.5 "
          textClass="text-[9px] md:text-xs leading-none"
          iconClass="w-3 md:w-6"
        />
      </span>
    </div>
  );
};

type ForecastWindMetricsProps = {
  wind: ForecastData['wind'];
};
const ForecastWindMetrics = ({ wind }: ForecastWindMetricsProps) => {
  return (
    <div className="basis-1/3 md:pr-8 flex gap-2 items-center justify-end">
      <ForecastMetrics value={wind.speed} unit="kph" />
      <span className="">
        <Compass
          direction={wind.direction}
          className="gap-0 md:gap-0.5 "
          textClass="text-[9px] md:text-xs leading-none"
          iconClass="w-3 md:w-6"
        />
      </span>
    </div>
  );
};

type ForecastMetricsProps = {
  value: string | number;
  unit: string;
  className?: string;
};
const ForecastMetrics = ({ value, unit, className }: ForecastMetricsProps) => {
  return (
    <div className={cn(className)}>
      <span className="">
        <span className="text-brand-md md:text-2xl font-bold">{value}</span>
        <span className="lowercase text-brand-md md:text-2xl font-medium">
          {unit}
        </span>
      </span>
    </div>
  );
};
