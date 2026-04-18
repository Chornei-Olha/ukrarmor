import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import CategorySidebar from '@/app/catalog/zakhyst-vid-bpla/components/CategorySidebar';
import ContactForm from '@/components/ui/ContactForm';
import { bplaCategories } from '@/lib/zakhyst-bpla';

export function generateStaticParams() {
  return bplaCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { categorySlug: string };
}): Promise<Metadata> {
  const category = bplaCategories.find((c) => c.slug === params.categorySlug);
  if (!category) return {};

  if (category.slug === 'stacionarni-ukryttya-vid-bpla') {
    return {
      title: 'Стаціонарні укриття від БПЛА | UkrArmor',
      description:
        "Стаціонарні укриття від БПЛА від виробника UkrArmor для захисту об'єктів, техніки та критичної інфраструктури.",
      alternates: {
        canonical:
          'https://ukrarmor.kiev.ua/catalog/zakhyst-vid-bpla/stacionarni-ukryttya-vid-bpla',
      },
    };
  }

  if (category.slug === 'shvydkomontovani-ukryttya-vid-bpla') {
    return {
      title: 'Швидкомонтовані укриття від БПЛА | UkrArmor',
      description:
        "Швидкомонтовані укриття від БПЛА від виробника UkrArmor для захисту об'єктів, техніки та інфраструктури.",
      alternates: {
        canonical:
          'https://ukrarmor.kiev.ua/catalog/zakhyst-vid-bpla/shvydkomontovani-ukryttya-vid-bpla',
      },
    };
  }

  return {
    title: `${category.title} | UkrArmor`,
    description: category.title,
  };
}

export default function BplaCategoryPage({ params }: { params: { categorySlug: string } }) {
  const category = bplaCategories.find((c) => c.slug === params.categorySlug);
  if (!category) return notFound();

  const products = category.products ?? [];

  const stationaryAltMap = [
    "Стаціонарний захист від БПЛА для об'єктів",
    'Сітчаста конструкція захисту від атак дронів',
    'Стаціонарне укриття для захисту інфраструктури від БПЛА',
    'Захисна огороджувальна конструкція для АЗС та ГРС',
  ];

  const fastAltMap = [
    'Швидкомонтоване укриття від БПЛА',
    'Мобільне укриття для захисту від дронів',
    'Переносне укриття для захисту техніки від БПЛА',
    'Антидроновий ангар укриття',
  ];

  return (
    <>
      {/* JSON-LD */}
      {category.slug === 'stacionarni-ukryttya-vid-bpla' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProductGroup',
              name: 'Стаціонарні укриття від БПЛА',
              brand: { '@type': 'Brand', name: 'UkrArmor' },
              url: 'https://ukrarmor.kiev.ua/catalog/zakhyst-vid-bpla/stacionarni-ukryttya-vid-bpla',
              description: "Стаціонарні укриття від БПЛА для захисту об'єктів та інфраструктури",
            }),
          }}
        />
      )}

      {category.slug === 'shvydkomontovani-ukryttya-vid-bpla' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProductGroup',
              name: 'Швидкомонтовані укриття від БПЛА',
              brand: { '@type': 'Brand', name: 'UkrArmor' },
              url: 'https://ukrarmor.kiev.ua/catalog/zakhyst-vid-bpla/shvydkomontovani-ukryttya-vid-bpla',
              description:
                "Швидкомонтовані укриття від БПЛА для захисту об'єктів та інфраструктури",
            }),
          }}
        />
      )}

      <main className="container mx-auto px-6 py-12">
        {/* BREADCRUMBS */}
        <nav aria-label="breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex gap-2">
            <li>
              <Link href="/">Головна</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/catalog/zakhyst-vid-bpla">Захист від БПЛА</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900">
              {category.slug === 'stacionarni-ukryttya-vid-bpla'
                ? 'Стаціонарні укриття від БПЛА'
                : category.slug === 'shvydkomontovani-ukryttya-vid-bpla'
                  ? 'Швидкомонтовані укриття від БПЛА'
                  : category.title}
            </li>
          </ol>
        </nav>

        {/* H1 */}
        <section aria-labelledby="product-title">
          <h1 id="product-title" className="text-2xl md:text-3xl font-bold mb-10">
            {category.title}
          </h1>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
          <CategorySidebar />

          <div className="space-y-14">
            {/* DESCRIPTION */}
            {category.descriptionHtml && (
              <section aria-labelledby="description" className="max-w-4xl">
                <h2 id="description" className="text-2xl font-bold mb-6">
                  Опис
                </h2>

                <div
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: category.descriptionHtml }}
                />
              </section>
            )}

            {/* GALLERY */}
            {category.gallery && category.gallery.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.gallery.map((img, index) => (
                  <div key={index} className="relative h-56 rounded-2xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`${category.title} — приклад ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* PRODUCTS */}
            {products.length > 0 && (
              <section aria-labelledby="product-list">
                <h2 id="product-list" className="text-2xl font-bold mb-6">
                  Види рішень
                </h2>

                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {products.map((p, index) => (
                    <Link
                      key={p.slug}
                      href={`/catalog/zakhyst-vid-bpla/${category.slug}/${p.slug}`}
                      className="group"
                    >
                      <div className="rounded-2xl border bg-white overflow-hidden hover:shadow-xl">
                        <div className="relative h-48">
                          <Image
                            src={p.image ?? category.image}
                            alt={
                              category.slug === 'stacionarni-ukryttya-vid-bpla'
                                ? (stationaryAltMap[index] ?? p.title)
                                : category.slug === 'shvydkomontovani-ukryttya-vid-bpla'
                                  ? (fastAltMap[index] ?? p.title)
                                  : p.title
                            }
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="p-4">
                          <p className="text-sm font-semibold">{p.title}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
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
