import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import CategorySidebar from '@/app/catalog/zakhyst-vid-bpla/components/CategorySidebar';
import ContactForm from '@/components/ui/ContactForm';
import { bplaCategories } from '@/lib/zakhyst-bpla';

export default function BplaProductPage({
  params,
}: {
  params: { categorySlug: string; productSlug: string };
}) {
  const category = bplaCategories.find((c) => c.slug === params.categorySlug);
  if (!category) return notFound();

  const product = (category.products ?? []).find((p) => p.slug === params.productSlug);
  if (!product) return notFound();

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-6 text-sm text-neutral-600">
        <Link href="/catalog/zakhyst-vid-bpla" className="hover:text-black">
          Захист від БПЛА
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/catalog/zakhyst-vid-bpla/${category.slug}`} className="hover:text-black">
          {category.title}
        </Link>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-10">{product.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
        {/* LEFT */}
        <CategorySidebar />

        {/* RIGHT */}
        <div className="space-y-10">
          {/* HERO IMAGE */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white h-64 md:h-96">
            <Image
              src={product.image ?? category.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {product.gallery && product.gallery.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {product.gallery.map((img, index) => (
                <div
                  key={index}
                  className="relative h-32 md:h-40 overflow-hidden rounded-xl border border-neutral-200 bg-white"
                >
                  <Image
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* PRICE */}
          <div className="text-sm text-neutral-700">
            <span className="font-semibold">Ціна: </span>
            {typeof product.price === 'number'
              ? `${product.price} грн`
              : (product.priceText ??
                (typeof product.price === 'string' ? product.price : 'Ціна за запитом'))}
          </div>

          {/* CONTENT */}
          {product.descriptionHtml && (
            <section className="max-w-4xl prose prose-neutral">
              <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
            </section>
          )}

          {/* BACK */}
          <div>
            <Link
              href={`/catalog/zakhyst-vid-bpla/${category.slug}`}
              className="text-sm font-semibold text-yellow-600 hover:text-yellow-700"
            >
              ← Назад до категорії
            </Link>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="mt-20">
        <ContactForm />
      </div>
    </div>
  );
}
