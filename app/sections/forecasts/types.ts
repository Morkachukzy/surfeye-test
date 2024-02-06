import { CompassDirection } from '@/app/components/compass';

export type ForecastData = {
  label: string;
  surfHeight: string;
  swell: {
    time: number;
    direction: CompassDirection;
  };
  wind: {
    speed: string;
    direction: CompassDirection;
  };
};

export type ForecastDayData = {
  averageSurfDistance: string;
  averageSwell: {
    time: number;
    direction: CompassDirection;
  };
  averageWind: {
    speed: string;
    direction: CompassDirection;
  };
  tides: {
    swellTime: number;
    surfDistance: number;
  }[];
};
