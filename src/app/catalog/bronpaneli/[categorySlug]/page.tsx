import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import CategorySidebar from '@/components/bronpaneli/CategorySidebar';
import ContactForm from '@/components/ui/ContactForm';
import { bronpaneliCategories } from '@/lib/bronpaneli-data';

export default function CategoryPage({ params }: { params: { categorySlug: string } }) {
  const category = bronpaneliCategories.find((c) => c.slug === params.categorySlug);
  if (!category) return notFound();

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-10">{category.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
        {/* LEFT */}
        <CategorySidebar />

        {/* RIGHT */}
        <div className="space-y-14">
          {/* PRODUCTS GRID */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {category.products.map((p) => (
              <Link
                key={p.slug}
                href={`/catalog/bronpaneli/${category.slug}/${p.slug}`}
                className="group"
              >
                <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-sm font-semibold text-neutral-900 leading-snug">{p.title}</p>

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

          {/* CATEGORY DESCRIPTION UNDER GRID */}
          {category.descriptionHtml && (
            <section className="max-w-4xl prose prose-neutral">
              <div dangerouslySetInnerHTML={{ __html: category.descriptionHtml }} />
            </section>
          )}
        </div>
      </div>

      {/* FORM */}
      <div className="mt-20">
        <ContactForm />
      </div>
    </div>
  );
}
