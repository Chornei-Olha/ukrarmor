'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setAboutOpen(false);
    }
  }, [open]);

  return (
    <header className="w-full relative z-50">
      <div className="bg-neutral-200" />

      <div className="mx-auto flex container items-center justify-between px-6 py-4">
        {/* LOGO */}
        <a href="/" className="mr-auto flex items-center gap-3">
          <Image src="/images/logo-s.webp" alt="logo" width={60} height={60} priority />
          <span className="font-heading text-xl font-bold text-gray-900">UkrArmor</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 font-roboto text-[18px] leading-none relative">
          <a href="/">Головна</a>

          <a href="/about">Про компанію</a>

          {/* DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center gap-2 hover:opacity-70 transition"
            >
              Каталог
              <span
                className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
              >
                ▿
              </span>
            </button>

            <div
              className={`absolute left-0 top-full mt-3 w-56 origin-top
    transform transition-all duration-200 ease-out
    ${
      aboutOpen
        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
    }`}
            >
              <div className="flex flex-col bg-white shadow-2xl rounded-xl border border-neutral-200 py-2">
                <a
                  href="/catalog/bronpaneli"
                  className="px-5 py-3 hover:bg-neutral-100 transition-colors whitespace-nowrap"
                >
                  Бронепанелі
                </a>
                <a
                  href="/catalog/zakhyst-vid-bpla"
                  className="px-5 py-3 hover:bg-neutral-100 transition-colors whitespace-nowrap"
                >
                  Захист від БПЛА
                </a>
              </div>
            </div>
          </div>

          <a href="/get-quote">Отримати комерційну пропозицію</a>
        </nav>

        {/* BURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-between w-6 h-5 ml-auto z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[2px] w-full bg-black transition ${
              open ? 'rotate-45 translate-y-[9px]' : ''
            }`}
          />
          <span className={`h-[2px] w-full bg-black transition ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-[2px] w-full bg-black transition ${
              open ? '-rotate-45 -translate-y-[9px]' : ''
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`max-h-screen md:hidden fixed inset-0 bg-white transition-transform duration-300 z-40
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <a href="/" className="justify-center mt-16 mb-16 flex items-center gap-3">
          <Image src="/images/logo-s.webp" alt="logo" width={40} height={40} priority />
          <span className="font-heading text-xl font-bold text-gray-900">UkrArmor</span>
        </a>
        <nav className="flex flex-col items-left justify-center gap-8 font-roboto text-[18px] ml-8">
          <a href="/" onClick={() => setOpen(false)}>
            Головна
          </a>
          <a href="/about" onClick={() => setOpen(false)}>
            Про компанію
          </a>

          {/* MOBILE DROPDOWN */}
          <div className="flex flex-col items-left w-full">
            <button onClick={() => setAboutOpen(!aboutOpen)} className="flex items-center gap-2">
              Каталог
              <span
                className={`transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`}
              >
                ▾
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                aboutOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col gap-4 text-[16px] normal-case items-left ml-16">
                <a href="/catalog/bronpaneli" onClick={() => setOpen(false)}>
                  Бронепанелі
                </a>
                <a href="/catalog/zakhyst-vid-bpla" onClick={() => setOpen(false)}>
                  Захист від БПЛА
                </a>
              </div>
            </div>
          </div>

          <a href="/contacts" onClick={() => setOpen(false)}>
            Контакти
          </a>

          <a href="/get-quote" onClick={() => setOpen(false)}>
            Отримати комерційну пропозицію
          </a>
        </nav>
      </div>

      <div className="h-px w-full bg-neutral-200" />
    </header>
  );
}
