'use client';

import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Аналіз ситуації' },
  { step: '02', title: 'Стратегія' },
  { step: '03', title: 'Реалізація' },
  { step: '04', title: 'Контроль' },
  { step: '05', title: 'Результат' },
];

export default function HowWeWork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-20 text-center">Як ми працюємо</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Чіткий процес без хаосу. Ви розумієте кожен етап роботи та очікуваний результат.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-5">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative bg-gray-50 rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="text-4xl font-extrabold text-blue-700 mb-4">{item.step}</div>
              <h3 className="text-lg font-semibold text-[#2E334E]">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
