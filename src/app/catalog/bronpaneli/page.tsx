import Link from 'next/link';
import Image from 'next/image';
import { bronpaneliCategories } from '@/lib/bronpaneli-data';
import ContactForm from '../../../components/ui/ContactForm';

export default function BronpaneliPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10">Бронепанелі</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">
        {' '}
        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h3 className="text-sm font-semibold mb-4 text-yellow-500">Бронепанелі</h3>

            <ul className="space-y-2 text-sm">
              {bronpaneliCategories.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/catalog/bronpaneli/${item.slug}`}
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
            {bronpaneliCategories.map((item) => (
              <Link key={item.slug} href={`/catalog/bronpaneli/${item.slug}`} className="group">
                <div className="relative h-64 overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
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
            {bronpaneliCategories.map((item) => (
              <Link key={item.slug} href={`/catalog/bronpaneli/${item.slug}`} className="group">
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

          {/* TEXT BLOCK — ТЕПЕРЬ ПОД СЕТКОЙ, НО В ПРАВОЙ КОЛОНКЕ */}
          <section className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900">Бронепанелі від виробника</h2>

            <div className="mt-8 space-y-10 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Застосування та призначення бронепанелей
                </h3>

                <p>
                  Бронепанелі — це елементи інженерно-технічних засобів захисту, призначені для
                  створення модульних перегородок стін, підлоги та стелі в спеціальних приміщеннях:
                  кас банку, сейфової кімнати, сховища цінностей, депозитарію.
                </p>

                <p>
                  Головне завдання бронепанелей — захист від злочинних посягань фінансових
                  приміщень, сейфових кімнат, сховищ цінностей, обмінних пунктів, а також захист від
                  ураження вогнепальною зброєю співробітників операційних кас, приміщень для
                  зберігання цінних предметів, архівів, кас поза офісами банку, квиткових кас.
                </p>

                <p>
                  Для зведення спеціальних броньованих стін (як зламостійких, так і кулестійких) в
                  існуючих або споруджуваних приміщеннях використовуються два методи — будівельний і
                  модульний. Будівельний спосіб — формування перегородок за допомогою будівельних
                  матеріалів (цегляна кладка, моноліт). Модульний спосіб — застосування бронепанелей
                  заданого класу зламостійкості і кулестійкості.
                </p>

                <p>
                  Наша компанія рада запропонувати Вам виготовлення та встановлення бронепанелей за
                  всіма класами захисту від злому та кулестійкості. Ми виготовляємо броньовані
                  панелі із спеціальними сумішами, металеві бронепанелі, спеціальні полегшені панелі
                  для встановлення на верхніх поверхах адміністративних, торгових та офісних
                  будівель. Тип збірки бронепанелей може бути як зварним (зварювання панелей), так і
                  болтовим — для самостійного збирання.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Переваги бронепанелей</h3>

                <p>
                  На сьогоднішній день найбільш застосовуваним способом створення касового вузла,
                  сейфової кімнати або депозитарію для банку в існуючій будівлі є використання
                  бронепанелей як матеріалу для захисту стін, підлоги і стельових перекриттів.
                  Застосування такого способу має ряд незаперечних переваг:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Збірно-розбірна конструкція (можна розбирати та збирати на новому місці)</li>
                  <li>Менша вага матеріалів</li>
                  <li>Значна швидкість виробництва і монтажу</li>
                  <li>Зручність монтажу (можливість працювати навіть у невеликих приміщеннях)</li>
                  <li>Економія корисної внутрішньої площі приміщення</li>
                  <li>Відсутність «мокрих» робіт</li>
                  <li>Можливість приступати до оздоблювальних робіт відразу після монтажу</li>
                  <li>Приваблива ціна бронепанелей</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Використання бронепанелей</h3>

                <p>
                  Бронепанелі використовують при зміцненні або зведенні стін, підлоги і стелі таких
                  приміщень як:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Операційні каси</li>
                  <li>Касові вузли</li>
                  <li>Каси поза операційними залами</li>
                  <li>Пункти обміну валют</li>
                  <li>Квиткові каси</li>
                  <li>Сейфові кімнати</li>
                  <li>Сховище цінностей</li>
                  <li>Депозитарій банку</li>
                  <li>Кімнати зберігання зброї</li>
                  <li>Кімнати зберігання наркотичних речовин</li>
                  <li>Кімнати безпеки (safety room)</li>
                  <li>Ломбарди</li>
                  <li>Ювелірні магазини</li>
                  <li>Пости охорони</li>
                  <li>
                    Захист трансформаторів, трансформаторних підстанцій та інших об&apos;єктів
                    критичної інфраструктури
                  </li>
                </ul>

                <p>
                  Застосування бронепанелей у вищезазначених випадках дозволяє в короткі терміни
                  провести вимірювання приміщення, виготовити необхідну кількість панелей заданих
                  класів зламостійкості та кулестійкості, виконати такелажні та монтажні роботи й
                  максимально швидко приступити до цільового використання приміщень.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Як купити бронепанелі</h3>

                <p>
                  Завдання купити бронепанелі — досить просте. Вам необхідно або повідомити нам
                  габаритні розміри об&apos;єкту, тип об&apos;єкту та вказати клас захисту, що Вас
                  цікавить, або викликати безкоштовного замірника.
                </p>

                <p>
                  Замірник зможе швидко і кваліфіковано провести розрахунки, обговорити з Вами всі
                  технічні тонкощі (введення вентиляції, установку розеток, розташування
                  бронедверей, за потреби — установку броневікон), а ми надамо детальний розрахунок
                  із ціною на бронепанелі та їх установку, попередні креслення та візуалізацію
                  Вашого об&apos;єкту.
                </p>

                <p>
                  В нашій компанії Ви також можете замовити доставку та встановлення елементів
                  технічної укріпленості на Ваш об&apos;єкт. Деталі про послуги уточнюйте у наших
                  менеджерів — вони ж проконсультують щодо товарів та інших питань про продукцію.
                </p>

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
