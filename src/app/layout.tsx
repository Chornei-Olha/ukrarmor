import React from 'react';
import '../styles/index.css';
import { Cormorant, Anonymous_Pro } from 'next/font/google';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

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
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/images/logo.webp' }],
  },
  openGraph: {
    title: 'Ukrarmor',
    description: 'Protection from drones',
    url: 'https://ukrarmor.kiev.ua/',
    images: [
      {
        url: 'https://ukrarmor.kiev.ua/images/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Ukrarmor Logo',
      },
    ],
    siteName: 'Ukrarmor',
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
      <body className="font-body flex flex-col min-h-screen">
        {/* GLOBAL JSON-LD (ORGANIZATION) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'UkrArmor',
              url: 'https://ukrarmor.kiev.ua/',
              logo: 'https://ukrarmor.kiev.ua/logo.png',
              telephone: '+3805009999514',
              email: 'ukrarmor.kiev@ukr.net',
              areaServed: 'UA',
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+3805009999514',
                  contactType: 'customer support',
                  areaServed: 'UA',
                  availableLanguage: ['Ukrainian'],
                },
              ],
            }),
          }}
        />
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
