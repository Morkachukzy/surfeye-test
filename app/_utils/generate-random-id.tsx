import { nanoid } from 'nanoid';

export const generateRandomId = (size?: number) => {
  return nanoid(size);
};
