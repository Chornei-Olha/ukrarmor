import Image from 'next/image';

const engineeringSteps = [
  {
    step: '1',
    title: 'Команда кваліфікованих фахівців',
    points: [
      'Проєктуємо металеві конструкції та робочу документацію',
      'Використовуємо сучасні цифрові технології проєктування',
      'Виконуємо точні розрахунки надійності та міцності конструкцій',
      'Оптимізуємо існуючі рішення клієнтів',
      'Великий практичний досвід у проєктуванні сталевих каркасів',
    ],
    image: '/images/engineering-team.webp',
  },
  {
    step: '2',
    title: 'Власне конструкторське бюро',
    points: [
      'Професійна розробка технічної документації',
      'Індивідуальний підхід до кожного проєкту',
      'Контроль якості на всіх етапах реалізації',
    ],
    image: '/images/engineering-design.webp',
  },
  {
    step: '3',
    title: 'Суворе дотримання чинних норм',
    points: [
      'Рішення розробляються згідно з актуальними стандартами',
      'Врахування вимог безпеки на етапі проєктування',
      'Контроль відповідності нормативним документам',
    ],
    image: '/images/engineering-standards.webp',
  },
];

export function EngineeringServicesLeft() {
  return (
    <section className="relative w-full bg-white px-6 md:px-12 py-6 md:py-12">
      <div className="container">
        <h2 className="mb-14 max-w-5xl !text-left sm:!text-center md:mx-auto font-heading text-3xl md:text-4xl font-bold text-blue-700">
          «Ukrarmor» пропонує повний комплекс інжинірингових послуг
        </h2>

        <div className="space-y-16">
          {engineeringSteps.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text */}
              <div>
                <div className="flex items-center gap-3 mb-4 text-lg sm:text-xl ">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                    {item.step}
                  </span>
                  <h3 className=" font-semibold text-gray-800">{item.title}</h3>
                </div>

                <ul className="space-y-2 text-sm md:text-base text-gray-600">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                      <span className="text-base sm:text-lg">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="relative h-56 md:h-72 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-blue-900/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
