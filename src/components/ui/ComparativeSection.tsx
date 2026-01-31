import Image from 'next/image';

type RowData = {
  price: string;
  lifetime: string;
  access: string;
  deploy: string;
  extra: string;
};

type Label = {
  key: keyof RowData;
  label: string;
};

const keys = ['price', 'lifetime', 'access', 'deploy', 'extra'] as const;

const columns = [
  {
    title: 'Стаціонарний армійський комплекс ППО',
    image: '/images/compare-pvo.webp',
    rows: {
      price: 'Від 13 млн $ */**',
      lifetime: 'До 5 років',
      access: 'Ні',
      deploy: 'Кілька років',
      extra: 'Відсутній',
    },
  },
  {
    title: 'Армійський комплекс РЕБ',
    image: '/images/compare-reb.webp',
    rows: {
      price: 'Від 5 млн $ */**',
      lifetime: 'До 7 років',
      access: 'Обмежено',
      deploy: 'Близько року',
      extra: 'Відсутній',
    },
  },
  {
    title: 'Кінетичний захист',
    image: '/images/compare-kinetic.webp',
    rows: {
      price: 'До 130 тис $ ***',
      lifetime: 'До 30 років',
      access: 'Так',
      deploy: 'Від півроку до кількох днів',
      extra: 'Протипожежний, антивандальний тощо',
    },
  },
  {
    title: 'Активний захист',
    image: '/images/compare-active.webp',
    rows: {
      price: 'До 250 тис $ ***',
      lifetime: 'До 5 років',
      access: 'Так',
      deploy: '1 місяць',
      extra: 'Створення перешкод, відключення каналів звязку, підміна координат',
    },
  },
];

const labels: Label[] = [
  { key: 'price', label: 'Ціна' },
  { key: 'lifetime', label: 'Термін служби' },
  { key: 'access', label: 'Доступність приватним компаніям' },
  { key: 'deploy', label: 'Швидкість розгортання' },
  { key: 'extra', label: 'Додатковий функціонал' },
];

export default function ComparativeSection() {
  return (
    <section className="relative w-full bg-white py-16 px-4 md:px-10">
      <div className="mx-auto container">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-700 max-w-2xl">
            Порівняльний аналіз існуючих засобів захисту від атак БПЛА
          </h2>
        </div>

        {/* Desktop Table */}
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-[900px] grid grid-cols-5 rounded-2xl overflow-hidden shadow-lg border">
            {/* Header Row */}
            <div className="bg-blue-800 text-white p-4 font-semibold">Параметр для порівняння</div>

            {columns.map((col, idx) => (
              <div key={idx} className="relative h-32 bg-gray-100">
                <Image src={col.image} alt={col.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-blue-900/40 flex items-end">
                  <h3 className="p-3 text-white font-semibold text-sm">{col.title}</h3>
                </div>
              </div>
            ))}

            {/* Data Rows */}
            {labels.map((row) => (
              <>
                <div className="bg-blue-700 text-white p-4 text-sm font-medium border-t border-blue-600">
                  {row.label}
                </div>

                {columns.map((col, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 text-sm text-gray-800 border-t">
                    {col.rows[row.key]}
                  </div>
                ))}
              </>
            ))}
          </div>
          <p className="text-base md:text-lg text-gray-700 container">
            <br />* - мінімальна ціна за відкритими джерелами
            <br />
            ** - ціна без урахування експлуатаційних витрат
            <br />
            *** - ціна для середнього об'єкта, при цьому вона може гнучко змінюватись взалежності
            від побажань клієнта
          </p>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {columns.map((col, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg border bg-white">
              <div className="relative h-40 w-full">
                <Image src={col.image} alt={col.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-blue-900/60 flex items-end">
                  <h3 className="p-4 text-white font-semibold">{col.title}</h3>
                </div>
              </div>

              <div className="divide-y">
                {labels.map((row) => (
                  <div key={row.key} className="flex justify-between p-4 text-sm">
                    <span className="font-medium text-gray-600">{row.label}</span>
                    <span className="text-gray-900 text-right max-w-[60%]">
                      {col.rows[row.key]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
