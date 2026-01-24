'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PopupForm from '@/components/ui/PopupForm';

const directions = [
  {
    title: 'Юридичний супровід договірних відносин',
    content: `складання оферт, договорів, контрактів, угод з контрагентами, в тому числі типових з урахуванням інтересів клієнта;\n
аналіз проектів договорів, угод, отриманих від контрагентів з метою виявлення і нівелювання ризиків для клієнта;\n
ведення роботи щодо узгодження умов договорів, угод, контрактів з контрагентами (складання протоколів розбіжностей, участь в переговорах, супровід відповідної ділової переписки).
`,
  },
  {
    title: 'Юридичний аутсорсинг претензійної роботи щодо виконання контрактних зобов’язань',
    content: `складання претензій контрагентам у разі невиконання ними умов договорів;\n
аналіз і складання відповідей на претензії контрагентів;\n
представництво інтересів клієнта при примусовому виконанні судових рішень.
`,
  },
  {
    title: 'Юридичне обслуговування в сфері податкового права',
    content: `підготовка клієнта до проведення податкових перевірок та їх юридичний супровід;\n
підготовка відповідей на запити податкових органів.
`,
  },
  {
    title: 'Юридичний супровід судового захисту інтересів клієнта',
    content: `захист інтересів клієнта в судах всіх юрисдикцій у спорах, що виникли з договірних відносин;\n
оскарження податкових повідомлень-рішень та інших незаконних рішень і дій податкових органів;\n
оспорювання в судах незаконних дій і рішень інших державних органів і органів місцевого самоврядування;\n
представництво інтересів клієнта при розгляді митних, корпоративних, трудових, цивільних суперечок, суперечок щодо прав інтелектуальної власності і по іншим категоріям спорів, які можуть виникнути в діяльності підприємства.
`,
  },
  {
    title: 'Юридичне обслуговування внутрішньої і корпоративної діяльності підприємства',
    content: `розробка і юридична експертиза внутрішніх документів правового характеру, в тому числі, щодо кадрової діяльності і трудових відносин, щодо побудови внутрішньої структури підприємства, положень, правил;\n
підготовка документів у сфері корпоративного управління підприємств різних організаційно-правових форм, юридичний супровід діяльності органів управління, складання необхідних документів (повідомлень учасникам / акціонерам, проектів рішень);
`,
  },
  {
    title: 'Юридичний супровід і захист у відносинах з контролюючими та іншими державними органам',
    content: `юридичний аналіз регуляторних та інших актів державних органів, що впливають на діяльність клієнта;\n
ведення переписки з державними органами;\n
підготовка до перевірок контролюючих органів та їх юридичний супровід;\n
представлення інтересів клієнта в органах державної влади і місцевого самоврядування.
`,
  },
  {
    title: 'Юридичний супровід і захист у відносинах з правоохоронними органами',
    content: `оперативний захист клієнта (співробітників / менеджменту) при раптових візитах правоохоронців, супровід слідчих та інших дій в рамках кримінального процесу (тимчасовий доступ до документів, обшук, арешт майна і т.п.);\n
оскарження незаконних дій правоохоронних органів, в т.ч. у судовому порядку;\n
складання відповідей на запити правоохоронних органів;\n
складання заяв в правоохоронні органи про дії, що завдають шкоди клієнту.
`,
  },
  {
    title: 'Банкрутство фізичних осіб та фізичних осіб підприємців',
    content: ``,
  },
  {
    title: 'Захист інтелектуальної власності',
    content: ``,
  },
];

export default function LegalPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative w-full min-h-[600px] flex items-center overflow-hidden py-8">
        <Image
          src="/images/bg1.webp"
          alt="Legal and business consulting"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-0">
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Юридичні послуги для бізнесу та приватних клієнтів
          </h1>
          <p className="text-lg md:text-xl mt-10 text-gray-200 max-w-3xl">
            Консультування, захист, супровід. Ми — ваш надійний партнер у правовій сфері.
          </p>
          <div className="mt-16 flex flex-col sm:flex-row gap-4">
            <a
              onClick={() => setOpen(true)}
              className="inline-block bg-blue-400 text-white px-6 py-3 rounded-full border border-white/20 font-medium hover:bg-white/5 hover:text-white transition text-center 
             shadow-lg animate-pulse-slow"
            >
              Отримати консультацію
            </a>

            <Link
              href="/#services"
              className="inline-block text-white/90 px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition text-center"
            >
              Наші послуги
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Коротке описання */}
        <div className="mb-12">
          {/* <h1 className="text-3xl sm:text-4xl font-bold mb-4">Юридичні та фінансові послуги</h1> */}
          <p className="text-gray-600">
            Ми надаємо комплексний супровід для бізнесу: юридичний, фінансовий та консалтинговий.
            Наші експерти допомагають мінімізувати ризики та оптимізувати процеси.
          </p>
        </div>

        {/* Поднапрямки - аккордеон */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center">Наші напрямки</h2>
          <div className="space-y-4 whitespace-pre-line">
            {directions.map((item, idx) => (
              <Disclosure as="div" key={idx} className="border rounded-lg">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500">
                      <span className="font-medium">{item.title}</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''} w-5 h-5 text-blue-400`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-600">
                      {item.content}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>

        {/* Як ми працюємо */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold mb-20 text-center">Як ми працюємо</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Аналіз потреб клієнта та визначення задач</li>
            <li>Розробка стратегії та плану дій</li>
            <li>Виконання робіт та супровід</li>
            <li>Звітність та контроль результату</li>
          </ol>
        </div>
      </div>
      {/* POPUP */}
      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
