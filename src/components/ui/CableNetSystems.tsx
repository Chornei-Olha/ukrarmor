// components/CableNetSystems.tsx
import Image from 'next/image';

export default function CableNetSystems() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-blue-700 mb-6 max-w-5xl sm:mx-auto text-left sm:text-center">
          Канатно-сітчасті системи
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Текст */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Система «Сталевий захист»</h3>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="text-base sm:text-lg ">
                • Являє собою єдину конструкцію, в якій канат вплітається в сітку в процесі
                виготовлення
              </li>
              <li className="text-base sm:text-lg ">
                • При виробництві використовується низьковуглецевий оцинкований дріт 3-ї групи
                цинкування або дріт, покритий сплавом цинку з алюмінієм і мішметалом
              </li>
              <li className="text-base sm:text-lg ">
                • Канат, що вплітається в сітку, використовується типу «Ж» (канати з металевим
                сердечником забезпечують підвищену міцність на розрив без втрати гнучкості).
              </li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-4">
              Сітка подвійного скручування. Переваги
            </h3>

            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li className="text-base sm:text-lg">
                • Не розпускається при розриві одної ланки комірки
              </li>
              <li className="text-base sm:text-lg">
                • Просто встановлюється на місці, має легку вагу
              </li>
              <li className="text-base sm:text-lg">• Передбачені скріпки і монтажні інструменти</li>
              <li className="text-base sm:text-lg">
                • Має різні варіанти довжини і ширини рулонів
              </li>
              <li className="text-base sm:text-lg">• Відмінно утримує уламки</li>
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
