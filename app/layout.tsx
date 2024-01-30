import type { Metadata } from 'next';
import RootProvider, { appFonts } from './provider';

export const metadata: Metadata = {
  title: 'Surfeye',
  description: 'A platform for surfing enthusiasts.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootProvider>
      <html lang="en">
        <body className={appFonts}>{children}</body>
      </html>
    </RootProvider>
  );
}
