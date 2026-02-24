import Link from 'next/link';
import { bplaCategories } from '@/lib/zakhyst-bpla';

export default function CategorySidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <h3 className="text-sm font-semibold mb-4 text-yellow-500">Захист від БПЛА</h3>

        <ul className="space-y-2 text-sm">
          {bplaCategories.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/catalog/zakhyst-vid-bpla/${item.slug}`}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
