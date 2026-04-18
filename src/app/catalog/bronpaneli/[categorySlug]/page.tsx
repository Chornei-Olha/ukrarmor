import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import CategorySidebar from '@/components/bronpaneli/CategorySidebar';
import ContactForm from '@/components/ui/ContactForm';
import { bronpaneliCategories } from '@/lib/bronpaneli-data';

type PageProps = {
  params: { categorySlug: string };
};

export function generateStaticParams() {
  return bronpaneliCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = bronpaneliCategories.find((c) => c.slug === params.categorySlug);

  if (!category) return {};

  const seo = category.seo;

  return {
    title: seo?.title ?? `${category.title} | UkrArmor`,
    description: seo?.description ?? category.title,
    alternates: {
      canonical: `https://ukrarmor.kiev.ua/catalog/bronpaneli/${category.slug}`,
    },
    openGraph: {
      title: seo?.ogTitle ?? seo?.title ?? `${category.title} | UkrArmor`,
      description: seo?.ogDescription ?? seo?.description ?? category.title,
      url: `https://ukrarmor.kiev.ua/catalog/bronpaneli/${category.slug}`,
      siteName: 'UkrArmor',
      locale: 'uk_UA',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: seo?.ogAlt ?? category.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.ogTitle ?? seo?.title ?? `${category.title} | UkrArmor`,
      description: seo?.ogDescription ?? seo?.description ?? category.title,
      images: ['/og-image.jpg'],
    },
  };
}

export default function CategoryPage({ params }: PageProps) {
  const category = bronpaneliCategories.find((c) => c.slug === params.categorySlug);
  if (!category) return notFound();

  const seo = category.seo;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProductGroup',
            name: category.title,
            brand: {
              '@type': 'Brand',
              name: 'UkrArmor',
            },
            url: `https://ukrarmor.kiev.ua/catalog/bronpaneli/${category.slug}`,
            description: seo?.ogDescription ?? seo?.description ?? category.title,
          }),
        }}
      />

      <main className="container mx-auto px-6 py-12">
        <nav aria-label="breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Головна
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/catalog/bronpaneli" className="hover:text-gray-900 transition-colors">
                Бронепанелі
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">{seo?.breadcrumbTitle ?? category.title}</li>
          </ol>
        </nav>

        <section aria-labelledby="product-title">
          <h1 id="product-title" className="text-2xl md:text-3xl font-bold mb-10">
            {category.title}
          </h1>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
          <CategorySidebar />

          <div className="space-y-14">
            <section aria-labelledby="product-list">
              <h2 id="product-list" className="text-2xl font-bold text-gray-900 mb-6">
                {seo?.productListTitle ?? 'Види бронепанелей'}
              </h2>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.products.map((p, index) => (
                  <Link
                    key={p.slug}
                    href={`/catalog/bronpaneli/${category.slug}/${p.slug}`}
                    className="group"
                  >
                    <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="relative h-48">
                        <Image
                          src={p.image}
                          alt={seo?.cardAlts?.[index] ?? p.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-4">
                        <p className="text-sm font-semibold text-neutral-900 leading-snug">
                          {p.title}
                        </p>

                        <p className="mt-2 text-sm text-neutral-600">
                          {typeof p.price === 'number'
                            ? `${p.price} грн`
                            : (p.priceText ?? 'Ціна за запитом')}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {category.descriptionHtml && (
              <section aria-labelledby="description" className="max-w-4xl">
                <h2 id="description" className="text-2xl font-bold text-gray-900 mb-6">
                  {seo?.descriptionTitle ?? 'Опис'}
                </h2>

                <div
                  className="
                    prose
                    prose-gray
                    max-w-none
                    prose-h2:text-3xl
                    prose-h2:font-bold
                    prose-h2:text-gray-900
                    prose-h3:text-xl
                    prose-h3:font-semibold
                    prose-h3:text-gray-900
                    prose-p:text-gray-700
                    prose-p:leading-relaxed
                    prose-ul:list-disc
                    prose-ul:pl-6
                  "
                  dangerouslySetInnerHTML={{ __html: category.descriptionHtml }}
                />
              </section>
            )}
          </div>
        </div>

        <div className="mt-20">
          <ContactForm />
        </div>
      </main>
    </>
  );
}
