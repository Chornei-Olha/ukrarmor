import Image from 'next/image';

const solutionAdvantages = [
  'Підходить для захисту обʼєктів будь-яких розмірів',
  'При пошкодженні складові частини огорожі можна замінити на нові. Немає необхідності заміни конструкції цілком',
  'Сітчаста конструкція огорожі дозволяє зберігати оглядовість і не дає накопичуватися снігу і дрібному сміттю',
];

const solutionElements = [
  'Легкозводимі металоконструкції',
  'Сітчасті конструкції',
  'Сталеві канати',
];

export function EngineeringServicesRight() {
  return (
    <section className="relative w-full bg-gray-50 py-20 px-4 md:px-10">
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="mb-8 font-heading text-3xl md:text-4xl font-bold text-blue-700">
            Комплексне рішення щодо захисту від атак БПЛА
          </h2>

          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              Переваги комплексного рішення
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
              {solutionAdvantages.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              Основні елементи конструкції
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-gray-600">
              {solutionElements.map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-72 md:h-[420px] w-full rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/engineering-net.webp"
            alt="Сітчаста конструкція захисту"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/20" />
        </div>
      </div>
    </section>
  );
}
