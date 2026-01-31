// components/StrengthCalculation.tsx
import Image from 'next/image';

export default function StrengthCalculation() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-blue-700 mb-12">
          Розрахунок міцності та деформативності утримуючих сітчастих огорож
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Колонка 1 */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-2">Твердотільне моделювання</h3>
            <p className="font-body text-sm text-gray-600 mb-4">
              металевої сітки для обчислення інтегральних характеристик жорсткості
            </p>

            <div className="relative aspect-[4/3]">
              <Image src="/images/solid-model-1.webp" alt="" fill className="object-contain" />
            </div>

            <div className="relative aspect-[4/3]">
              <Image src="/images/solid-model-2.webp" alt="" fill className="object-contain" />
            </div>
          </div>

          {/* Колонка 2 */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-2">Балочне представлення</h3>
            <p className="font-body text-sm text-gray-600 mb-4">
              металевих сіток для оцінки утримуючої здатності при дії динамічних навантажень
            </p>

            <div className="relative aspect-[4/3]">
              <Image src="/images/beam-model-1.webp" alt="" fill className="object-contain" />
            </div>

            <div className="relative aspect-[4/3]">
              <Image src="/images/beam-model-2.webp" alt="" fill className="object-contain" />
            </div>
          </div>

          {/* Колонка 3 */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-2">Мембранне представлення</h3>
            <p className="font-body text-sm text-gray-600 mb-4">
              сіток для оцінки міцності під дією вагових і кліматичних навантажень
            </p>

            <div className="relative aspect-[4/3]">
              <Image src="/images/membrane-model-1.webp" alt="" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3]">
              <Image src="/images/membrane-model-2.webp" alt="" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3]">
              <Image src="/images/membrane-model-3.webp" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
