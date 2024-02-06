'use client';

import { ForecastDayData } from '../types';
import { ForecastChart } from '../chart';
import { ForecastDayMetrics } from './metrics';

type ForecastChartProps = {
  dataSet: ForecastDayData;
};

export const ForecastDay = ({ dataSet }: ForecastChartProps) => {
  return (
    <div className="md:px-5 lg:px-7 pt-6 pb-11 md:py-14 flex flex-col brand-min-desktop:flex-row items-stretch brand-min-desktop:items-center gap-6 brand-min-desktop:gap-16 rounded-3xl md:rounded-brand-700 shadow-brand-800 bg-white ">
      <ForecastDayMetrics
        averageSurfDistance={dataSet.averageSurfDistance}
        averageSwell={dataSet.averageSwell}
        averageWind={dataSet.averageWind}
      />
      <div className="flex-1">
        <p className="uppercase text-lg font-medium mb-3.5 px-9">Tides</p>
        <ForecastChart tides={dataSet.tides} />
      </div>
    </div>
  );
};
