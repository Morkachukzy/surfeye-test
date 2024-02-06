'use client';

import { ForecastDayData } from '../types';
import { ForecastChart } from '../chart';
import { ForecastDayMetrics } from './metrics';

type ForecastChartProps = {
  dataSet: ForecastDayData;
};

export const ForecastDay = ({ dataSet }: ForecastChartProps) => {
  return (
    <div className="px-7 py-14 flex items-center gap-16 rounded-brand-700 shadow-brand-800 bg-white ">
      <ForecastDayMetrics
        averageSurfDistance={dataSet.averageSurfDistance}
        averageSwell={dataSet.averageSwell}
        averageWind={dataSet.averageWind}
      />
      <div className="">
        <p className="uppercase text-lg font-medium mb-3.5 px-9">Tides</p>
        <ForecastChart tides={dataSet.tides} />
      </div>
    </div>
  );
};
