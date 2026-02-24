'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import CategorySidebar from '@/components/bronpaneli/CategorySidebar';
import ContactForm from '@/components/ui/ContactForm';
import type { Product } from '@/lib/bronpaneli-data';

export default function ProductClient({
  categoryTitle,
  categorySlug,
  product,
}: {
  categoryTitle: string;
  categorySlug: string;
  product: Product;
}) {
  const formRef = useRef<HTMLDivElement | null>(null);

  const gallery = useMemo(() => {
    const g = product.gallery?.length ? product.gallery : [product.image];
    // гарантируем наличие main photo в начале
    return g[0] === product.image ? g : [product.image, ...g];
  }, [product.gallery, product.image]);

  const [activeImg, setActiveImg] = useState(gallery[0]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-neutral-500 mb-6">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="hover:text-neutral-900">
              Головна
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/catalog" className="hover:text-neutral-900">
              Каталог
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/catalog/bronpaneli" className="hover:text-neutral-900">
              Бронепанелі
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/catalog/bronpaneli/${categorySlug}`} className="hover:text-neutral-900">
              {categoryTitle}
            </Link>
          </li>
          <li>/</li>
          <li className="text-neutral-900 font-medium">{product.title}</li>
        </ol>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-10">{product.title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
        <CategorySidebar />

        <div className="space-y-12">
          {/* TOP BLOCK: image left + info right */}
          <section className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-start">
            {/* LEFT: main image + gallery */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
                <div className="relative aspect-square">
                  <Image src={activeImg} alt={product.title} fill className="object-cover" />
                </div>
              </div>

              {gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {gallery.map((src) => {
                    const active = src === activeImg;
                    return (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActiveImg(src)}
                        className={[
                          'relative h-20 w-24 shrink-0 rounded-xl overflow-hidden border transition',
                          active
                            ? 'border-yellow-400 ring-2 ring-yellow-200'
                            : 'border-neutral-200 hover:border-neutral-400',
                        ].join(' ')}
                        aria-label="Select image"
                      >
                        <Image src={src} alt="" fill className="object-cover" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* RIGHT: price + CTA + classes + short description */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <p className="text-lg font-semibold text-neutral-900">
                {typeof product.price === 'number'
                  ? `${product.price} грн`
                  : (product.priceText ?? 'Ціна за запитом')}
              </p>

              <button
                type="button"
                onClick={scrollToForm}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-yellow-300 px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-yellow-200 transition"
              >
                Замовити прорахунок
              </button>

              <div className="mt-6 space-y-2 text-sm text-neutral-700">
                {product.breakInClass && (
                  <p>
                    <span className="font-semibold">Клас зламостійкості:</span>{' '}
                    {product.breakInClass}
                  </p>
                )}
                {product.bulletClass && (
                  <p>
                    <span className="font-semibold">Клас кулестійкості:</span> {product.bulletClass}
                  </p>
                )}
              </div>

              {product.shortDescription && (
                <p className="mt-5 text-neutral-700 leading-relaxed">{product.shortDescription}</p>
              )}
            </div>
          </section>

          {/* FULL DESCRIPTION */}
          {product.fullDescriptionHtml && (
            <section className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">Опис</h2>

              <div
                className="prose prose-neutral max-w-none"
                dangerouslySetInnerHTML={{ __html: product.fullDescriptionHtml }}
              />
            </section>
          )}

          {/* FORM */}
          <div ref={formRef} className="pt-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
