'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import PopupForm from '@/components/ui/PopupForm';

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[600px] flex items-center overflow-hidden py-8">
      {/* Фоновое изображение */}
      <Image
        src="/images/bg2.webp"
        alt="Business consulting background"
        fill
        priority
        className="object-cover"
      />

      {/* Затемняющий оверлей (по желанию) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6 sm:px-0">
        <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
          Комплексний юридичний фінансовий, бізнес-консалтинговий супровід бізнесу{' '}
        </h1>
        <p className="text-lg md:text-xl mt-16 text-gray-200 max-w-4xl">
          Ми захищаємо ваші інтереси, оптимізуємо податкове навантаження та допомагаємо бізнесу
          зростати в Україні та за кордоном.{' '}
        </p>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          <a
            onClick={() => setOpen(true)}
            className="inline-block bg-blue-400 text-white px-6 py-3 rounded-full border border-white/20 font-medium hover:bg-white/5 hover:text-white transition text-center 
             shadow-lg animate-pulse-slow"
          >
            Отримати консультацію
          </a>

          <a
            href="#services"
            className="inline-block text-white/90 px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition text-center"
          >
            Наші послуги
          </a>
        </div>
      </div>
      {/* POPUP */}
      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
