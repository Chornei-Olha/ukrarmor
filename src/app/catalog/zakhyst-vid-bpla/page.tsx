import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';
import { bplaCategories } from '@/lib/zakhyst-bpla';

export default function ZakhystVidBplaPage() {
  const cards = bplaCategories.filter((c) => !!c.image);
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10">Захист від БПЛА</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h3 className="text-sm font-semibold mb-4 text-yellow-500">Захист від БПЛА</h3>

            <ul className="space-y-2 text-sm">
              {bplaCategories.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/catalog/zakhyst-vid-bpla/${item.slug}`}
                    className="text-gray-700 hover:text-black transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="space-y-16">
          {/* GRID */}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {bplaCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/catalog/zakhyst-vid-bpla/${item.slug}`}
                className="group"
              >
                <div className="relative h-64 overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <Image
                    src={item.image ?? '/images/placeholder.jpg'}
                    alt={`${item.title} UkrArmor`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/35 transition-colors duration-300 group-hover:bg-black/45" />

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-lg font-semibold leading-snug text-white">{item.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {bplaCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/catalog/zakhyst-vid-bpla/${item.slug}`}
                className="group"
              >
                <div className="bg-yellow-400 p-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
              </Link>
            ))}
          </div> */}

          {/* TEXT (весь текст с твоего сообщения) */}
          <section className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900">Системи пасивного захисту від БПЛА</h2>

            <div className="mt-8 space-y-10 text-gray-700 leading-relaxed">
              {/* Вступ */}
              <div className="space-y-4">
                <p>
                  У відповідь на зростаючий рівень загроз безпеці ,були розроблені системи
                  мінімізіції наслідків ворожих атак БПЛА.
                </p>
                <p>
                  Система захисту від БПЛА запобігає наближенню дрона до об&apos;єкта і викликає
                  спрацьовування пристрою на безпечній відстані. Таким чином знижується збиток від
                  тарана БПЛА, скидання предметів з пристроями, а також може бути забезпечений
                  захист від ударного впливу і впливу уламків.
                </p>
                <p>
                  Залежно від запиту Замовника, в UKRARMOR виробляють системи захисту БПЛА на основі
                  типового асортименту, або адаптують захисні огороджувальні конструкції за
                  індивідуальними проектами.
                </p>
              </div>

              {/* Види */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Види захисних конструкцій</h3>

                <div className="space-y-3">
                  <p className="font-semibold text-gray-900">Стаціонарні укриття від БПЛА</p>
                  <p>
                    Спрацювання пристроїв на безпечній від об&apos;єкта дистанції. Панелі можуть
                    бути виконані із металевої або полімерної сітки.
                  </p>

                  <p className="font-semibold text-gray-900 pt-2">
                    Швидкозмонтовані укриття від БПЛА
                  </p>
                  <p>
                    Зниження збитків матеріально-технічних засобів внаслідок інцидентів з БПЛА та
                    стрілецької зброї порушників.
                  </p>
                </div>
              </div>

              {/* Розробка */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Під час розробки ЗОК враховуються
                </h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>рівень можливих загроз;</li>
                  <li>Тип об&apos;єкта;</li>
                  <li>особливості навколишньої місцевості;</li>
                  <li>Характеристики БПЛА.</li>
                </ul>
              </div>

              {/* Колір */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Колір залежить від тактичного завдання
                </h3>

                <p>
                  Колір огороджувальної конструкції залежить від мети її використання: ЗОК можуть
                  бути використані як для маскування об&apos;єкта, так і з наміром привернути увагу
                  оператора БПЛА та спровокувати спрацювання пристрою. Система покривається
                  порошковою фарбою, забарвлення відповідно до каталогу RAL.
                </p>

                <p>
                  Системи захисту від інцидентів з БПЛА дозволяють утримувати джерела небезпеки на
                  безпечній від об&apos;єкта дистанції, при цьому розмір та тип літального апарата
                  не має значення.
                </p>
              </div>

              {/* Сіткові */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Сіткові захисні огороджувальні конструкції
                </h3>

                <p>
                  Захист від БПЛА потрібен всім об&apos;єктам без винятку: від житлових будинків і
                  соціальних установ до військових баз. Для захисту окремих елементів або компактних
                  споруд використовуються каркасні укриття, тоді як для великих об&apos;єктів, що
                  вимагають перекриття прольотів до 70 метрів, застосовуються вантові системи з
                  тросовою основою і полімерним сітчастим полотном.
                </p>

                <p>
                  Конструкція запобігає наближенню дрона до об&apos;єкта, викликаючи спрацьовування
                  пристрою на достатній відстані, що зменшує збиток від ударного впливу і уламків.
                </p>

                <p className="font-semibold text-gray-900">
                  Комплект поставки класичного сітчастого укриття:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Огорожа сітчаста, що запобігає спрацьовуванню пристрою або знижує руйнівний
                    вплив пристрою за рахунок його спрацьовування на віддаленій від об&apos;єкта
                    дистанції.
                  </li>
                  <li>
                    Силовий каркас , що сприймає на себе навантаження від сітчастої огорожі, при
                    впливі БПЛА . Є несучою конструкцією.
                  </li>
                </ul>

                <p className="font-semibold text-gray-900">
                  Заповнення полотна стаціонарної огорожі:
                </p>

                <p>
                  Заповнення панелей стаціонарних укриттів від БПЛА може бути виконано з металевої
                  або полімерної сітки, порівнянної за міцністю зі сталлю, з різними розмірами
                  комірок. Вибір матеріалу і комірки залежить від рівня захисту, умов експлуатації
                  та бюджету.
                </p>

                <p>
                  Полімерні сітки легші та зручніші в монтажі, ідеальні для складного рельєфу.
                  Високомолекулярний поліетилен стійкий до хімії, УФ-випромінювання та перепадів
                  температур.
                </p>
              </div>

              {/* Модульні */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Модульні швидкомонтовані укриття
                </h3>

                <p>
                  Модульні захисні споруди відрізняються простотою монтажу і перевезення, не мають
                  обмежень за розмірами споруджуваної конструкції. Використовуються для збереження
                  цілісності техніки і матеріальних цінностей.
                </p>

                <p className="font-semibold text-gray-900">
                  Цілі використання швидкомонтованих укриттів:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Тимчасовий захист критичних вузлів;</li>
                  <li>Створення мобільних захисних периметрів;</li>
                  <li>Оперативне посилення вразливих ділянок.</li>
                </ul>

                <p className="font-semibold text-gray-900">Функції швидкомонтованих укриттів:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Захист від впливу безпілотних літальних апаратів .</li>
                  <li>
                    Захист від впливу скиданих і осколкових пристроїв, що доставляються за допомогою
                    БПЛА ворога.
                  </li>
                  <li>
                    Забезпечення функціонування об&apos;єктів інфраструктури в умовах протидії
                    ворога.
                  </li>
                </ul>
              </div>

              {/* Сфери */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Сфери застосування систем пасивного захисту від БПЛА
                </h3>

                <div className="space-y-3">
                  <p className="font-semibold text-gray-900">Об&apos;єкти інфраструктури</p>
                  <p>Захист об&apos;єктів інфраструктури від інцидентів з БПЛА.</p>

                  <p className="font-semibold text-gray-900">Об&apos;єкти ПЕК</p>
                  <p>
                    Захист об&apos;єктів паливно-енергетичного комплексу від інцидентів з
                    безпілотниками.
                  </p>

                  <p className="font-semibold text-gray-900">Промислові об&apos;єкти</p>
                  <p>Фізичний захист промислових об&apos;єктів від інцидентів з дронами.</p>

                  <p className="font-semibold text-gray-900">Резервуари та сховища</p>
                  <p>
                    Захист від БПЛА тросами за допомогою вантової системи. Використовується
                    поліамідна сітка.
                  </p>

                  <p className="font-semibold text-gray-900">Трансформатори та електростанції</p>
                  <p>
                    Мобільні та стаціонарні системи захисту електростанцій та підстанцій від
                    літальних апаратів.
                  </p>

                  <p className="font-semibold text-gray-900">Техніка</p>
                  <p>Забезпечення цілісності техніки за допомогою модульних систем захисту.</p>
                </div>
              </div>

              {/* Якщо не ставити */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Нагадаємо, що відбувається, коли не використовують укриття від атак БПЛА там, де
                  вони потрібні
                </h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Зупинка стратегічних виробництв. Пряме влучання виводить з ладу ключові
                    підприємства, викликаючи тривалий простій і розрив технологічних ланцюжків у
                    суміжних галузях.
                  </li>
                  <li>
                    Системні збої в енергетиці та логістиці. Пошкодження вузлів інфраструктури
                    провокує каскадні аварії — від масштабних відключень електрики до зупинки
                    трубопроводів.
                  </li>
                  <li>
                    Великі екологічні катастрофи. Атака на об&apos;єкти з небезпечними речовинами
                    призводить до розливів, викидів токсинів і пожеж, завдаючи довгострокової шкоди
                    екосистемам.
                  </li>
                  <li>
                    Дестабілізація економіки. Тривалі перебої в постачанні палива та енергії
                    провокують дефіцит, зростання цін і соціальне невдоволення, перетворюючи
                    тактичний збиток на стратегічний.
                  </li>
                </ul>
              </div>

              {/* Характеристики */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Характеристики стаціонарних укриттів
                </h3>

                <dl className="mt-2 space-y-3 text-sm">
                  <div className="flex justify-between gap-6">
                    <dt className="text-gray-600">Особливості виконання</dt>
                    <dd className="text-gray-900 text-right">
                      Сталевий каркас + Високоміцна полімерна сітка на даху + сталева сітка на
                      стінках
                    </dd>
                  </div>

                  <div className="flex justify-between gap-6">
                    <dt className="text-gray-600">Перекривний проліт</dt>
                    <dd className="text-gray-900">До 24 м</dd>
                  </div>

                  <div className="flex justify-between gap-6">
                    <dt className="text-gray-600">Протиуламковий захист</dt>
                    <dd className="text-gray-900">За індивідуальним замовленням</dd>
                  </div>

                  <div className="flex justify-between gap-6">
                    <dt className="text-gray-600">Захист від повторної атаки</dt>
                    <dd className="text-gray-900">За індивідуальним замовленням</dd>
                  </div>
                </dl>

                <h3 className="text-xl font-semibold text-gray-900 pt-4">
                  Характеристики швидкомонтованих укриттів
                </h3>

                <dl className="mt-2 space-y-3 text-sm">
                  <div className="flex justify-between gap-6">
                    <dt className="text-gray-600">Заповнення полотна</dt>
                    <dd className="text-gray-900 text-right">
                      Сталева сітка, високоміцна полімерна сітка
                    </dd>
                  </div>

                  <div className="flex justify-between gap-6">
                    <dt className="text-gray-600">Перекривається проліт</dt>
                    <dd className="text-gray-900">До 8 метрів</dd>
                  </div>

                  <div className="flex justify-between gap-6">
                    <dt className="text-gray-600">Протиосколковий захист</dt>
                    <dd className="text-gray-900 text-right">
                      Сталевий лист 2+2 мм або протиосколковий мат
                    </dd>
                  </div>

                  <div className="flex justify-between gap-6">
                    <dt className="text-gray-600">Захист від повторної атаки</dt>
                    <dd className="text-gray-900">За індивідуальним замовленням</dd>
                  </div>
                </dl>
              </div>

              {/* Фінал */}
              <div className="space-y-4">
                <p>
                  Компанія UKRARMOR здійснює послуги з монтажу вироблених виробів. У штаті нашої
                  компанії тільки професійні монтажники, сертифіковані на виконання робіт з монтажу.
                </p>

                <p>З усіх питань Ви можете звернутися до нас, за вказаними на сайті контактами.</p>

                <p className="font-semibold text-gray-900">З повагою до Вас, команда UKRARMOR!</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* FORM BLOCK */}
      <div className="mt-20">
        <ContactForm />
      </div>
    </div>
  );
}
