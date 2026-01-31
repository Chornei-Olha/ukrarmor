// components/ProcessSteps.tsx
export default function ProcessSteps() {
  const steps = [
    {
      title: 'Проектування готового продукту',
      text: 'Розробка елементів конструкції під конкретного замовника',
      color: 'bg-blue-900',
    },
    {
      title: 'Сертифікація',
      text: 'З огляду на відсутність нормативів і стандартів на системи захисту від БПЛА «Ukrarmor» обґрунтовує надійність конструкції розрахунками, моделюванням і аналізом за аналогічними стандартами.',
      color: 'bg-blue-800',
    },
    {
      title: 'Виробництво готових металоконструкцій та елементів',
      text: '«Ukrarmor » володіє повним технологічним циклом виробництва всіх необхідних виробів для реалізації пропонованихрішень',
      color: 'bg-blue-700',
    },
    {
      title: 'Підбір індивідуальних комплексів змішаної частоти «Антидрон»',
      text: 'Досвід партнерів дозволяє здійснити індивідуальний підбір рішень залежно від загроз і рельєфу місцевості',
      color: 'bg-sky-700',
    },
    {
      title: 'Монтажні роботи під ключ',
      text: 'Передбачається виводити на ринок не тільки матеріали, але й послуги з монтажу захисних конструкцій',
      color: 'bg-red-600',
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-blue-700 mb-4">
          «Ukrarmor» — ваш надійний технічний партнер для захисту від БПЛА
        </h2>

        <p className="font-body text-gray-700 mb-12 max-w-3xl">
          Реалізуємо проєкти будь-якої складності, спираючись на промислову потужність і суворі
          стандарти якості
        </p>

        {/* Steps */}
        <div className="hidden lg:flex items-stretch">
          {steps.map((step, index) => (
            <div key={index} className="relative flex-1">
              <div
                className={`${step.color}
    text-white
    font-heading
    text-center
    px-4
    h-[96px]
    flex items-center justify-center
    clip-chevron
    text-xl
    leading-tight
  `}
              >
                {step.title}
              </div>

              <p className="font-body text-sm text-gray-700 mt-4 px-4">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-6 lg:hidden">
          {steps.map((step, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className={`${step.color} text-white font-heading px-4 py-3`}>{step.title}</div>
              <p className="font-body text-sm text-gray-700 px-4 py-3">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 bg-blue-900 text-white font-heading text-center py-5 relative">
          <span>
            Індивідуальний підхід до розрахунку комплексного захисту для кожного об&apos;єкта
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600" />
        </div>
      </div>

      {/* Chevron clip-path */}
      <style jsx>{`
        .clip-chevron {
          clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%, 5% 50%);
        }
      `}</style>
    </section>
  );
}
