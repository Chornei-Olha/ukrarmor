import React from 'react';
import '../styles/index.css';
import { Roboto_Condensed, Cormorant_Garamond } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto-condensed',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['italic'],
  variable: '--font-cormorant',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Art POS|URE',
  description:
    'POS|URE is not a form, but an inner position. I don’t depict it — I stand within it.',
  icons: {
    icon: [{ url: '/images/favicon.webp' }],
  },
  openGraph: {
    title: 'Art POS|URE — Where Art Meets Stillness',
    description:
      'POS|URE is not a form, but an inner position. I don’t depict it — I stand within it.',
    url: 'https://art-posure.vercel.app/', // сюда ссылку на сайт
    images: [
      {
        url: 'https://art-posure.vercel.app/images/og-image.png', // абсолютный путь
        width: 1200,
        height: 630,
        alt: 'Art POS|URE Logo',
      },
    ],
    siteName: 'Art POS|URE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable} ${cormorant.variable}`}>
        {' '}
        {children}
        <script
          type="module"
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fbuddhasa1071back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.7"
        ></script>
      </body>
    </html>
  );
}
