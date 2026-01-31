// components/ComplexApproach.tsx
import Image from 'next/image';

export default function ComplexApproach() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-blue-700 mb-12">
          Комплексний підхід до розрахункового обґрунтування міцності
        </h2>

        <div className="divide-y divide-gray-200">
          {/* ROW 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            <div className="font-body text-gray-800">
              <span className="font-semibold">1.</span> Проведено моделювання
            </div>

            <div className="grid grid-cols-3 gap-4">
              {['model-1.webp', 'model-2.webp', 'model-3.webp'].map((img) => (
                <div key={img} className="relative aspect-[4/3]">
                  <Image src={`/images/${img}`} alt="" fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            <div className="font-body text-gray-800">
              <span className="font-semibold">2.</span> Створено натурну модель сегмента конструкції
            </div>

            <div className="relative aspect-[16/6] rounded-lg overflow-hidden">
              <Image src="/images/physical-model.webp" alt="" fill className="object-cover" />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            <div className="font-body text-gray-800">
              <span className="font-semibold">3.</span> Проведено натурні випробування на
              випробувальному стенді
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-gray-600">
                <li>Визначено монтажні провисання та зусилля</li>
                <li>Обрано спосіб кріплення сіток до канатних гілок</li>
                <li>Визначено оптимальні розміри конструктивної комірки</li>
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {['test-1.webp', 'test-2.webp', 'test-3.webp'].map((img) => (
                <div key={img} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image src={`/images/${img}`} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
            <div className="font-body text-gray-800">
              <span className="font-semibold">4.</span> Виконано верифікацію розрахункових методик
              за результатами натурних експериментів
            </div>
            {/* CTA */}
            <div className="bg-blue-700 text-white font-heading text-center py-4 rounded-md">
              Випробування підтвердили розрахункові характеристики конструкції
            </div>{' '}
          </div>
        </div>
      </div>
    </section>
  );
}
