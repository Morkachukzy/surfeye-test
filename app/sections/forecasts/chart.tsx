'use client';

import './chart.scss';

import { useMemo } from 'react';
import { ForecastData, ForecastDayData } from './types';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { VictoryArea, VictoryChart, VictoryLabel } from 'victory';
import { cn } from '@/app/_theme/utils';
import { getMinutesAndSeconds } from '@/app/_utils/get-minutes-and-seconds';
import { SunriseIcon, SunsetIcon } from '@/app/_assets/icons';

const data = [
  {
    name: 'Page A',
    uv: 1400,
    pv: 1400,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 1200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 1280,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1490,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 1090,
    pv: 3800,
    amt: 2500,
  },
];
type ForecastChartProps = {
  dataSet: ForecastDayData;
};

export const ForecastChart = ({ dataSet }: ForecastChartProps) => {
  // const formattedData = useMemo(() => {
  //   return dataSet.tides.map((tide) => ({
  //     surfDistance: data.surfHeight,
  //     swellDistance: data.swell.direction,
  //   }));
  // }, [dataSet]);

  return (
    <div>
      <div className=""></div>
      <div className="max-w-[609px] w-full h-[160px]  rounded-brand-200  flex items-end  relative ">
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
            data={dataSet.tides}
            maxDomain={{
              y: 4,
            }}
            labels={({ datum }) => [
              `${getMinutesAndSeconds(datum.swellTime).minutes}:${getMinutesAndSeconds(datum.swellTime).seconds}`,
              `${datum.surfDistance}m`,
            ]}
            labelComponent={
              <VictoryLabel
                dy={-10}
                lineHeight={[1.5, 1.5]}
                className="small-text"
                style={[
                  {
                    width: '2.75rem',
                    fontStyle: 'italic',
                    fontFamily: 'Exo 2',
                    fontWeight: '600',
                    fill: '#01243C',
                  },
                  {
                    fontFamily: 'Exo 2',
                    fontStyle: 'italic',
                    fontWeight: '400',
                    fill: 'rgba(1, 36, 60, 0.57)',
                  },
                ]}
              />
            }
            x="swellTime"
            y="surfDistance"
            interpolation="natural"
            width={605}
            padding={0}
            height={159}
            style={{
              data: {
                fill: 'rgba(134, 169, 197, 0.60)',
                stroke: '#01243C',
                strokeWidth: '2.2px',
                fillOpacity: 0.3,
              },
              labels: {
                fontSize: 8,
                padding: 15,
              },
              parent: {
                overflow: 'hidden',
                paddingInline: '1px',
                borderRadius: '24px',
                // border: '3px solid #c43a31',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

type ForecastChartSegmentProps = {
  className?: string;
  label?: string | JSX.Element;
  labelPosition?: 'left' | 'right';
};
const ForecastChartSegment = ({
  className,
  label,
  labelPosition = 'right',
}: ForecastChartSegmentProps) => {
  return (
    <div className={cn('h-full relative', className)}>
      <div
        className={cn('w-brand-fit absolute top-full mt-2 italic', {
          'left-0 -translate-x-1/2': labelPosition === 'left',
          'right-0 translate-x-1/2': labelPosition === 'right',
        })}
      >
        {label}
      </div>
    </div>
  );
};

type ForecastChartLabelProps = {};

const ForecastChartLabel = () => {
  return <div></div>;
};
