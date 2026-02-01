'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" w-full relative">
      {/* TOP DIVIDER */}
      <div className="w-full bg-neutral-200" />

      {/* MAIN HEADER */}
      <div className="mx-auto flex container items-center justify-between px-6 py-4">
        {/* LOGO */}
        <a href="/" className="mr-auto flex items-center gap-3">
          <Image src="/images/logo.png" alt="logo" width={60} height={60} priority />
          <span className="font-heading text-xl font-bold text-gray-900">UKRARMOR</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 font-roboto text-[18px] uppercase leading-none">
          <a href="/">Home</a>
          <a href="/gallery">Gallery</a>
        </nav>

        {/* BURGER BUTTON */}
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
        className={`md:hidden fixed inset-0 bg-white transition-transform duration-300 z-40
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-10 font-roboto text-[24px] uppercase">
          <a href="/" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </a>
        </nav>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="h-px w-full bg-neutral-200" />
    </header>
  );
}
