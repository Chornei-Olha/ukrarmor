import { notFound } from 'next/navigation';
import ProductClient from '@/app/catalog/bronpaneli/components/ProductClient';
import { bronpaneliCategories } from '@/lib/bronpaneli-data';

export function generateStaticParams() {
  return bronpaneliCategories.flatMap((c) =>
    c.products.map((p) => ({
      categorySlug: c.slug,
      productSlug: p.slug,
    }))
  );
}

export default function ProductPage({
  params,
}: {
  params: { categorySlug: string; productSlug: string };
}) {
  const category = bronpaneliCategories.find((c) => c.slug === params.categorySlug);
  const product = category?.products.find((p) => p.slug === params.productSlug);

  if (!category || !product) return notFound();

  return (
    <ProductClient categoryTitle={category.title} categorySlug={category.slug} product={product} />
  );
}
