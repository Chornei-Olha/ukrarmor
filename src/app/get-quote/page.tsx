import type { Metadata } from 'next';
import GetQuotePageClient from './GetQuotePageClient';

export const metadata: Metadata = {
  title: 'Отримати комерційну пропозицію | UkrArmor',
  description:
    "Отримайте комерційну пропозицію від UkrArmor. Завантажте специфікацію для швидкого прорахунку рішень із захисту від БПЛА для об'єктів та підприємств.",
  alternates: {
    canonical: 'https://ukrarmor.kiev.ua/get-quote',
  },
  openGraph: {
    title: 'Отримати комерційну пропозицію | UkrArmor',
    description:
      'Завантажте специфікацію та отримайте комерційну пропозицію щодо рішень захисту від БПЛА.',
    url: 'https://ukrarmor.kiev.ua/get-quote',
    siteName: 'UkrArmor',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Отримати комерційну пропозицію UkrArmor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Отримати комерційну пропозицію | UkrArmor',
    description: 'Завантажте специфікацію та отримайте комерційну пропозицію від UkrArmor.',
    images: ['/og-image.jpg'],
  },
};

export default function Page() {
  return <GetQuotePageClient />;
}
