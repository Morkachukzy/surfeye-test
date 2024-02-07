import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import Utc from 'dayjs/plugin/utc';

dayjs.extend(LocalizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(Utc);

export const dayjsInstance = dayjs;

export const toNow = (s: string) => {
  return dayjs().to(dayjs(s));
};

export const genericDateFormat = (input?: string) => {
  return dayjs(input).format('HH:ss MMMM D, YYYY');
};
