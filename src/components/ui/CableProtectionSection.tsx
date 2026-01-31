import Image from 'next/image';

export default function CableProtectionSection() {
  return (
    <section className="relative w-full bg-white py-16 px-4 md:px-10">
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-blue-700 max-w-4xl">
            Тросова система захисту — найбільш застосовуване рішення для захисту від БПЛА
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-blue-700 mb-4">
              Тросова система захисту
            </h3>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              є «традиційним» методом, який довгий час вважався єдино правильним і надійним
              рішенням.
              <br />
              <br />
              Сьогодні «Ukrarmor» готові запропонувати більш технологічний і ефективний підхід.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-64 md:h-80 w-full">
            <Image
              src="/images/cable-protection.webp"
              alt="Тросова система захисту"
              fill
              className="object-contain"
            />
            <div className="absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
