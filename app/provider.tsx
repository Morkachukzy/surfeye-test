import React from 'react';
import ThemeProvider from '@/app/_theme/provider';

export { appFonts } from '@/app/_theme/provider';

import '@/app/_libs/gsap';

export type RootProviderProps = {
  children: React.ReactNode;
};

export default function RootProvider({
  children,
}: Readonly<RootProviderProps>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
