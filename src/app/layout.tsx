import React from 'react';
import '../styles/index.css';
import { Cormorant, Anonymous_Pro } from 'next/font/google';

const headingFont = Cormorant({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
});

const bodyFont = Anonymous_Pro({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Ukrarmor',
  description: 'Protection from drones',
  icons: {
    icon: [{ url: '/images/logo.png' }],
  },
  openGraph: {
    title: 'Ukrarmor',
    description: 'Protection from drones',
    url: 'https://art-posure.vercel.app/', // сюда ссылку на сайт
    images: [
      {
        url: 'https://art-posure.vercel.app/images/og-image.png', // абсолютный путь
        width: 1200,
        height: 630,
        alt: 'Art POS|URE Logo',
      },
    ],
    siteName: 'AUkrarmor',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
