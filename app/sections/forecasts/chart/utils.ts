import { getMinutesAndSeconds } from '@/app/_utils/get-minutes-and-seconds';
import { ForecastDayData } from '../types';

type Datum = ForecastDayData['tides'][number];
type GetLabelsArgs = {
  datum: Datum;
};
export const getLabels = ({ datum }: GetLabelsArgs) => [
  `${getMinutesAndSeconds(datum.swellTime).minutes}:${getMinutesAndSeconds(datum.swellTime).seconds}`,
  `${datum.surfDistance}m`,
];
