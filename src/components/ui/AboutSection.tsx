'use client';

import { motion } from 'framer-motion';

const audiences = [
  {
    title: 'Малий та середній бізнес',
    description:
      'Юридичний супровід операційної діяльності, податкові питання, договори та захист інтересів.',
  },
  {
    title: 'Власники компаній',
    description: 'Захист активів, корпоративна структура, стратегічні та управлінські рішення.',
  },
  {
    title: 'ФОП',
    description: 'Оподаткування, перевірки, супровід діяльності та вирішення спорів.',
  },
  {
    title: 'Компанії з іноземним капіталом',
    description: 'Міжнародне структурування, ТЦУ, податкове резидентство та комплаєнс.',
  },
  {
    title: 'Бізнес у кризових / спірних ситуаціях',
    description: 'Судові спори, банкрутство, реструктуризація та антикризовий супровід.',
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            Кому ми допомагаємо
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Ми працюємо з бізнесом та підприємцями, які цінують системний підхід, конфіденційність
            та результат.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm hover:shadow-lg transition"
            >
              {/* Accent line */}
              <div className="w-12 h-1 bg-blue-700 rounded-full mb-4"></div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>

              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
