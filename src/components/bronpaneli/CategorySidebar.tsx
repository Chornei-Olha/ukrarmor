'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { bronpaneliCategories } from '@/lib/bronpaneli-data';

export default function CategorySidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <p className="text-sm font-semibold mb-4 text-yellow-500">Бронепанелі</p>

        <ul className="space-y-2 text-sm">
          {bronpaneliCategories.map((c) => {
            const href = `/catalog/bronpaneli/${c.slug}`;
            const active = pathname === href || pathname.startsWith(href + '/');

            return (
              <li key={c.slug}>
                <Link
                  href={href}
                  className={[
                    'block transition-colors',
                    active ? 'text-yellow-600 font-semibold' : 'text-gray-700 hover:text-black',
                  ].join(' ')}
                >
                  {c.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
