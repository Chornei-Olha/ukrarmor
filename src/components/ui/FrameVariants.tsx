// components/FrameVariants.tsx
import Image from 'next/image';

export default function FrameVariants() {
  return (
    <section className="w-full px-6 md:px-12 py-6 md:py-12">
      <div className="mx-auto container">
        {/* Заголовок */}
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-blue-700 mb-10  max-w-5xl sm:mx-auto text-left sm:text-center">
          Легковиготовлювані конструкції
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* ЛЕВАЯ КОЛОНКА (2/3) */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Варіант конструкції каркаса</h3>

            <div className="relative flex-1 bg-gray-100">
              <Image
                src="/images/frame-scheme.webp"
                alt="Схема конструкції"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Фото */}
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src="/images/frame-photo-1.webp"
                alt=""
                width={300}
                height={300}
                className="object-cover"
              />
            </div>

            <div>
              <Image
                src="/images/frame-photo-2.webp"
                alt=""
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
