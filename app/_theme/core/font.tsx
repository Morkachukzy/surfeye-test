import localFont from 'next/font/local';

const exo2 = localFont({
  src: [
    {
      path: '../../_assets/fonts/Exo_2.ttf',
      style: 'normal',
    },
    {
      path: '../../_assets/fonts/Exo_2-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-exo',
});

type SimpleNextFont = Record<string, unknown> & { variable: string };

const combineFonts = (...fonts: SimpleNextFont[]) => {
  return fonts.reduce((acc, font) => {
    return acc + font.variable + ' ';
  }, '');
};

export const appFonts = combineFonts(exo2);

export default appFonts;
