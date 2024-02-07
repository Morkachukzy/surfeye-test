'use client';

import { useMediaQuery as _useMediaQuery } from 'usehooks-ts';
export const useMediaQuery = (query: string) => {
  return _useMediaQuery(query);
};
