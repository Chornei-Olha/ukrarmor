import Image from 'next/image';

const privateFocus = [
  {
    title: 'Критична енергоінфраструктура',
    image: '/images/priority-energy.webp',
  },
  {
    title: 'Нафтосховища',
    image: '/images/priority-oil.webp',
  },
  {
    title: 'Промислові будівлі, цехи',
    image: '/images/priority-industry.webp',
  },
  {
    title: 'Транспортна інфраструктура',
    image: '/images/priority-transport.webp',
  },
];

const stateFocus = [
  {
    title: 'Авто та броньований транспорт',
    image: '/images/priority-armored.webp',
  },
  {
    title: 'Стоянки техніки',
    image: '/images/priority-parking.webp',
  },
];

function Card({ title, image }: { title: string; image: string }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-white transition-transform hover:-translate-y-1">
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-blue-900/40" />
      </div>

      <div className="p-4">
        <h3 className="text-center text-sm md:text-base font-semibold text-blue-700">{title}</h3>
      </div>
    </div>
  );
}

export default function PriorityObjectsSection() {
  return (
    <section className="relative w-full bg-gray-100 py-20 px-4 md:px-10">
      <div className="mx-auto container">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-700">
            Пріоритетні типи обʼєктів, що підлягають захисту
          </h2>
        </div>

        {/* Private Focus */}
        <div className="mb-16">
          <h3 className="mb-6 text-center text-lg md:text-xl font-semibold text-gray-700">
            Ключовий фокус і основні приватні компанії
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {privateFocus.map((item, idx) => (
              <Card key={idx} title={item.title} image={item.image} />
            ))}
          </div>
        </div>

        {/* State Focus */}
        <div>
          <h3 className="mb-6 text-center text-lg md:text-xl font-semibold text-gray-700">
            Державні замовлення та другорядний фокус
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {stateFocus.map((item, idx) => (
              <Card key={idx} title={item.title} image={item.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
