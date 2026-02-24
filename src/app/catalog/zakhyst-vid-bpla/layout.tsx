import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Захист від БПЛА | UKRARMOR',
  description:
    'Захист від БПЛА: стаціонарні та мобільні конструкції, консультація інженера, прорахунок рішення. UKRARMOR.',
  alternates: { canonical: '/catalog/zakhyst-vid-bpla' },
  openGraph: {
    title: 'Захист від БПЛА | UKRARMOR',
    description: 'Стаціонарні та мобільні укриття від атак дронів, консультація та прорахунок.',
    url: '/catalog/zakhyst-vid-bpla',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
