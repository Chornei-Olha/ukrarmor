// components/CableNetSystems.tsx
import Image from 'next/image';

export default function CableNetSystems() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Текст */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-blue-700 mb-6">
              Канатно-сітчасті системи
            </h2>

            <h3 className="font-heading text-xl font-semibold mb-4">Система «Сталевий захист»</h3>

            <ul className="font-body space-y-3 text-gray-700 leading-relaxed">
              <li>
                • Являє собою єдину конструкцію, в якій канат вплітається в сітку в процесі
                виготовлення
              </li>
              <li>
                • При виробництві використовується низьковуглецевий оцинкований дріт 3-ї групи
                цинкування або дріт, покритий сплавом цинку з алюмінієм і мішметалом
              </li>
              <li>
                • Канат, що вплітається в сітку, використовується типу «Ж» (канати з металевим
                сердечником забезпечують підвищену міцність на розрив без втрати гнучкості).
              </li>
            </ul>

            <h3 className="font-heading text-xl font-semibold mt-8 mb-4">
              Сітка подвійного скручування. Переваги
            </h3>

            <ul className="font-body space-y-3 text-gray-700 leading-relaxed">
              <li>• Не розпускається при розриві одної ланки комірки</li>
              <li>• Просто встановлюється на місці, має легку вагу</li>
              <li>• Передбачені скріпки і монтажні інструменти</li>
              <li>• Має різні варіанти довжини і ширини рулонів</li>
              <li>• Відмінно утримує уламки</li>
            </ul>
          </div>

          {/* Изображения */}
          <div className="grid grid-cols-2 gap-4 items-start">
            <div className="relative col-span-2 aspect-[16/6]">
              <Image
                src="/images/net-scheme.webp"
                alt="Схема сітки"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative aspect-[4/5]">
              <Image
                src="/images/net-detail.webp"
                alt="Деталь сітки"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative aspect-[4/5]">
              <Image
                src="/images/net-rolls.webp"
                alt="Рулони сітки"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
