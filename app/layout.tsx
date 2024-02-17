import type { Metadata, Viewport } from 'next';
import RootProvider from './provider';

export const metadata: Metadata = {
  title: 'Surfeye',
  description: 'A platform for surfing enthusiasts.',
  appleWebApp: true,
};

export const viewport: Viewport = {
  width: 'device-width',
  minimumScale: 1.0,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </RootProvider>
  );
}
