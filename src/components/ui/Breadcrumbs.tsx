// src/components/ui/Breadcrumbs.tsx
import Link from 'next/link';

export type Crumb = { href: string; label: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, idx) => {
          const last = idx === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2">
              {!last ? (
                <Link href={c.href} className="hover:text-gray-900 transition">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gray-900">{c.label}</span>
              )}
              {!last && <span className="text-gray-300">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
