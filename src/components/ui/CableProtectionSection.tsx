import Image from 'next/image';

export default function CableProtectionSection() {
  return (
    <section className="relative w-full bg-white px-6 md:px-12 py-6 md:py-12">
      <div className="mx-auto container">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-blue-700 max-w-5xl sm:mx-auto text-left sm:text-center">
            Тросова система захисту — найбільш застосовуване рішення для захисту від БПЛА
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8">
            <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-4">
              Тросова система захисту
            </h3>

            <p className="text-gray-700  text-base md:text-lg">
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
