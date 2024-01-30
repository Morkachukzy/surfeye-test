import { ReactNode } from 'react';
export { appFonts } from './core/font';
import './globals.css';

type ThemeProviderProps = {
  children: ReactNode | React.ReactNode[];
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <>{children}</>;
};

export default ThemeProvider;
