import { getMinutesAndSeconds } from '@/app/_utils/get-minutes-and-seconds';

type Datum = {
  _x: number;
  _y: number;
};
type GetLabelsArgs = {
  datum: Datum;
  data: Datum[];
};
export const getLabels = ({ datum, data }: GetLabelsArgs) => {
  const datumIndex = data.findIndex(
    (d) => d._x === datum._x && d._y === datum._y
  );
  if (datumIndex === data.length - 1 || datumIndex === 0) {
    return ['', ''];
  }
  return [
    `${getMinutesAndSeconds(datum._x).minutes}:${getMinutesAndSeconds(datum._x).seconds}`,
    `${datum._y}m`,
  ];
};
