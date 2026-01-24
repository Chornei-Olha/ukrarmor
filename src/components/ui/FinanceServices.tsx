'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';
import { Calculator, FileText, Search, Briefcase } from 'lucide-react';
import { useState } from 'react';
import PopupForm from '@/components/ui/PopupForm';

/* ================= ANIMATION PRESETS ================= */

const transition = {
  duration: 0.8,
  ease: cubicBezier(0.22, 1, 0.36, 1),
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

/* ================= DATA ================= */

const blocks = [
  {
    title: 'Аутсорсинг бухгалтерського обліку',
    icon: Calculator,
    items: [
      'Відновлення бухгалтерського та податкового обліку за стандартами України та МСФЗ',
      'Ведення поточного бухгалтерського обліку на постійній основі',
      'Підготовка квартальної та річної фінансової звітності',
      'Розрахунок податків та подання звітності до податкових органів',
      'Координація взаємодії з податковою інспекцією',
      'Щомісячна та щотижнева управлінська звітність (IAS / GAAP)',
      'Консультації та впровадження фінансових систем (ERP, SAP)',
      'Навчання персоналу роботі з фінансовими системами',
      'Оптимізація податкового навантаження',
      'Розробка моделей кредитування, мотивації та зарплатних проєктів',
    ],
  },
  {
    title: 'Фінансова та управлінська звітність',
    icon: FileText,
    items: [
      'Підготовка управлінської та фінансової звітності за стандартами МСФЗ та GAAP',
      'Консолідована фінансова звітність (P&L, Balance Sheet, Cash Flow, Equity)',
      'Формування файлів для систем автоматизації бізнесу (SAP, ERP)',
      'Щомісячні GAAP-коригування з детальними поясненнями',
      'Фінансова звітність для материнських компаній та інвесторів',
      'Річна фінансова звітність у форматах, погоджених із клієнтом',
    ],
  },
  {
    title: 'Фінансові розслідування та ризики',
    icon: Search,
    items: [
      'Аналіз та вирішення фінансових спорів',
      'Проведення фінансових розслідувань',
      'Оцінка матеріальних та нематеріальних збитків',
      'Виявлення фактів фінансових махінацій',
      'Антикорупційні розслідування відповідно до законодавства України',
      'Аналіз доцільності витрат',
      'Виявлення податкових та регуляторних ризиків',
    ],
  },
  {
    title: 'Фінансовий директор (CFO as a Service)',
    icon: Briefcase,
    items: [
      'Організація управління фінансовими ресурсами підприємства',
      'Фінансово-економічний аналіз діяльності компанії',
      'Розробка та контроль облікової, податкової та інвестиційної політики',
      'Управління активами підприємства',
      'Бюджетування та фінансове планування',
      'Контроль виконання фінансових планів',
      'Участь у бюджетному контролі',
      'Підготовка управлінської звітності',
      'Участь у формуванні річного бюджету',
    ],
  },
];

/* ================= COMPONENT ================= */

export default function FinancePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full min-h-[600px] flex items-center overflow-hidden py-8">
        <Image
          src="/images/bg1.webp"
          alt="Financial consulting"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 sm:px-0">
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Бухгалтерський та фінансовий консалтинг
          </h1>
          <p className="text-lg md:text-xl mt-10 text-gray-200 max-w-3xl">
            Комплексний фінансовий супровід бізнесу — від бухгалтерії до стратегічного управління
            фінансами.{' '}
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
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-3xl md:text-4xl font-semibold mb-20 text-center"
        >
          Напрямки фінансового консалтингу
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid gap-10 sm:grid-cols-2"
        >
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="
                  relative rounded-2xl p-8
                  bg-gradient-to-br from-white/10 via-white/5 to-transparent
                  border border-white/15
                  backdrop-blur-xl
                  transition-all
                  hover:border-blue-400/40
                "
              >
                <div className="absolute inset-0 rounded-2xl bg-blue-700/5 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <Icon className="w-9 h-9 text-blue-400" />
                    <h3 className="text-xl md:text-2xl font-semibold">{block.title}</h3>
                  </div>

                  <ul className="space-y-3 text-gray-600">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-blue-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        {/* POPUP */}
        <PopupForm isOpen={open} onClose={() => setOpen(false)} />
      </section>
    </>
  );
}
