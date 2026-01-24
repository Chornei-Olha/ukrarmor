'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Комплексний підхід',
    text: 'Поєднання юридичної та фінансової експертизи в одному рішенні.',
  },
  {
    title: 'Досвід роботи з бізнесом',
    text: 'Розуміємо бізнес-процеси та говоримо з власниками однією мовою.',
  },
  {
    title: 'Конфіденційність',
    text: 'Гарантуємо повну безпеку інформації та дотримання професійної етики.',
  },
  {
    title: 'Орієнтація на результат',
    text: 'Ми працюємо не заради процесу, а заради досягнення цілей клієнта.',
  },
  {
    title: 'Міжнародні стандарти',
    text: 'Використовуємо практики та підходи, прийняті у міжнародному бізнес-середовищі.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Чому ми</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Наш підхід базується на досвіді, відповідальності та довгостроковій співпраці.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="
                bg-white
                border border-gray-200
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-md
                hover:border-blue-400
                transition
              "
            >
              <h3 className="text-xl font-semibold mb-3 text-[#2E334E]">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
