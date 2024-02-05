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
