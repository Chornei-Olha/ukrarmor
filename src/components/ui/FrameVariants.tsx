// components/FrameVariants.tsx
import Image from 'next/image';

export default function FrameVariants() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto container px-4">
        {/* Заголовок */}
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-blue-700 mb-10">
          Легковиготовлювані конструкції
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* ЛЕВАЯ КОЛОНКА (2/3) */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="font-heading text-xl font-semibold mb-4">Варіант конструкції каркаса</h3>

            <div className="relative flex-1 bg-gray-100 rounded-lg overflow-hidden">
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
            <div className="rounded-lg">
              <Image
                src="/images/frame-photo-1.webp"
                alt=""
                width={300}
                height={300}
                className="object-cover"
              />
            </div>

            <div className="relative rounded-lg">
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
