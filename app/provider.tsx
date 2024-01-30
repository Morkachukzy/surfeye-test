import React from 'react';
import ThemeProvider from '@/app/theme/provider';

export { appFonts } from '@/app/theme/provider';

export type RootProviderProps = {
  children: React.ReactNode;
};

export default function RootProvider({
  children,
}: Readonly<RootProviderProps>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
