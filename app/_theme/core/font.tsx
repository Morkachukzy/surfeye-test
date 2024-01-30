import { Exo_2 } from 'next/font/google';

const exo_2 = Exo_2({ subsets: ['latin'], variable: '--font-exo' });

type SimpleNextFont = Record<string, unknown> & { variable: string };

const combineFonts = (...fonts: SimpleNextFont[]) => {
  return fonts.reduce((acc, font) => {
    return acc + font.variable + ' ';
  }, '');
};

export const appFonts = combineFonts(exo_2);

export default appFonts;
