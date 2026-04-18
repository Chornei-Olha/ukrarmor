import type { Metadata } from 'next';
import LandingPage from './LandingPage';

export const metadata: Metadata = {
  title: 'Комплексний захист від БПЛА для підприємств | UkrArmor',
  description:
    "Інженерні рішення захисту від БПЛА: проєктування, виробництво та монтаж. Захист промислових і стратегічних об'єктів від дронів.",

  alternates: {
    canonical: 'https://ukrarmor.kiev.ua/',
  },

  openGraph: {
    title: 'Комплексний захист від БПЛА для підприємств | UkrArmor',
    description: "Інженерні рішення захисту від БПЛА для промислових і критичних об'єктів.",
    url: 'https://ukrarmor.kiev.ua/',
    siteName: 'UkrArmor',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Захист від БПЛА UkrArmor',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Комплексний захист від БПЛА для підприємств | UkrArmor',
    description: 'Інженерні рішення захисту від БПЛА.',
    images: ['/og-image.jpg'],
  },
};

export default function Page() {
  return <LandingPage />;
}
