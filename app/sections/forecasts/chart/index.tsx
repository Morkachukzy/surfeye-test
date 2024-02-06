'use client';

import './chart.scss';

import { ForecastDayData } from '../types';

import { VictoryArea, VictoryLabel } from 'victory';
import { SunriseIcon, SunsetIcon } from '@/app/_assets/icons';
import { getLabels } from './utils';
import { areaChartStyles, labelStyles } from './styles';
import { ForecastChartSegment } from './segment';

type ForecastChartProps = {
  tides: ForecastDayData['tides'];
};

export const ForecastChart = ({ tides }: ForecastChartProps) => {
  return (
    <div>
      <div className="w-[609px] h-[160px] rounded-brand-200  flex items-end  relative ">
        <ForecastChartSegment
          className="absolute left-0 w-1/4 h-full rounded-l-3xl bg-black bg-opacity-10"
          label={
            <div className="flex gap-1.5 items-center">
              <span className="text-xs italic font-normal opacity-50">
                {7.35}
              </span>
              <SunriseIcon />
            </div>
          }
        />
        <ForecastChartSegment className="absolute inset-x-1/4  h-full  bg-brand-grey bg-opacity-20" />
        <ForecastChartSegment
          className="absolute right-0 w-1/4  h-full rounded-r-3xl bg-black bg-opacity-10"
          label={
            <div className="flex gap-1.5 items-center">
              <span className="text-xs italic font-normal opacity-50">
                {17.35}
              </span>
              <SunsetIcon />
            </div>
          }
          labelPosition="left"
        />
        <div className="h-full w-full absolute inset-0 z-50">
          <VictoryArea
            data={tides}
            maxDomain={{
              y: 4,
            }}
            labels={getLabels}
            labelComponent={
              <VictoryLabel
                dy={-10}
                lineHeight={[1.5, 1.5]}
                style={labelStyles}
              />
            }
            x="swellTime"
            y="surfDistance"
            interpolation="natural"
            width={605}
            padding={0}
            height={159}
            style={areaChartStyles}
          />
        </div>
      </div>
    </div>
  );
};
