import { ForecastData, ForecastDayData } from '../types';

export const forecastDataSet: ForecastData[] = [
  {
    label: 'Today',
    surfHeight: '2-3',
    swell: {
      time: 131,
      direction: 'WNW',
    },
    wind: {
      speed: '13',
      direction: 'SSE',
    },
  },
  {
    label: 'Tmrw',
    surfHeight: '2-3',
    swell: {
      time: 131,
      direction: 'WNW',
    },
    wind: {
      speed: '13',
      direction: 'SSE',
    },
  },
  {
    label: 'Fri',
    surfHeight: '2-3',
    swell: {
      time: 131,
      direction: 'WNW',
    },
    wind: {
      speed: '13',
      direction: 'SSE',
    },
  },
  {
    label: 'Sat',
    surfHeight: '2-3',
    swell: {
      time: 131,
      direction: 'WNW',
    },
    wind: {
      speed: '13',
      direction: 'SSE',
    },
  },
  {
    label: 'Sun',
    surfHeight: '2-3',
    swell: {
      time: 131,
      direction: 'WNW',
    },
    wind: {
      speed: '13',
      direction: 'SSE',
    },
  },
];

export const todayForecastDataSet: ForecastDayData = {
  averageSurfDistance: '2-3',
  averageSwell: {
    time: 131,
    direction: 'WNW',
  },
  averageWind: {
    speed: '13',
    direction: 'SSE',
  },
  tides: [
    {
      swellTime: 0,
      surfDistance: 1.5,
    },
    {
      swellTime: 80,
      surfDistance: 1.4,
    },
    {
      swellTime: 200,
      surfDistance: 2.4,
    },
    {
      swellTime: 340,
      surfDistance: 1.2,
    },
    {
      swellTime: 450,
      surfDistance: 1.8,
    },
    {
      swellTime: 550,
      surfDistance: 1.4,
    },
  ],
};

export const tomorrowForecastDataSet: ForecastDayData = {
  averageSurfDistance: '2-3',
  averageSwell: {
    time: 131,
    direction: 'WNW',
  },
  averageWind: {
    speed: '13',
    direction: 'SSE',
  },
  tides: [
    {
      swellTime: 0,
      surfDistance: 1.5,
    },
    {
      swellTime: 40,
      surfDistance: 1.4,
    },
    {
      swellTime: 190,
      surfDistance: 2.1,
    },
    {
      swellTime: 340,
      surfDistance: 2,
    },
    {
      swellTime: 450,
      surfDistance: 1.8,
    },
    {
      swellTime: 550,
      surfDistance: 2.5,
    },
  ],
};
