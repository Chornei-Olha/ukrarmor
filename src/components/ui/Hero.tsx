'use client';

import { useState } from 'react';
import Image from 'next/image';
import PopupForm from '@/components/ui/PopupForm';

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full">
      <div
        className="
          mx-auto max-w-full
          flex flex-col
          min-h-screen
          lg:min-h-0
          lg:grid lg:grid-cols-3 lg:items-center lg:gap-12
        "
      >
        {/* Верхняя картинка */}
        <div className="w-full flex-1 lg:h-full">
          <Image
            src="/images/hero-left.webp"
            alt="Healing space"
            width={500}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Центр */}
        <div className="text-center flex flex-col items-center justify-center px-6 py-8 md:py-12 lg:py-16">
          <h1
            className="
              font-cormorant italic uppercase leading-[97%]
              text-[32px] sm:text-[48px] lg:text-[70px]
            "
          >
            A Place to Heal,
            <br />
            Grow, and Create
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="
    mt-8 border rounded-[2px]
    px-6 py-3 sm:px-8 sm:py-4
    font-roboto font-medium uppercase leading-none
    text-[14px] sm:text-[20px] lg:text-[24px]
    bg-[#EEF5F1]                           /* фон подсветки */
    shadow-[0_0_20px_5px_rgba(238,245,241,0.5)] /* мягкая подсветка */
    transition
    hover:opacity-60
    animate-pulse-slow                        /* пульсация */
  "
          >
            Step Inside
          </button>
        </div>

        {/* Нижняя картинка */}
        <div className="w-full flex-1 lg:h-full">
          <Image
            src="/images/hero-right.webp"
            alt="Creative space"
            width={500}
            height={700}
            className="h-full w-full object-cover object-left"
          />
        </div>
      </div>
      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
