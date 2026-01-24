'use client';

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PopupForm from '@/components/ui/PopupForm';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [collabOpen, setCollabOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Лого */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={60}
              height={30}
              priority
              className="cursor-pointer ml-6 sm:ml-0"
            />
          </Link>
        </div>

        {/* Десктоп меню по центру */}
        <nav className="hidden md:flex items-center space-x-16 text-lg font-medium font-montserrat text-gray-700 mx-auto relative">
          <Link href="/" className="hover:text-blue-400">
            Головна
          </Link>

          {/* Продукція */}
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-blue-400">
              <span>Послуги</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${productOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>

            <AnimatePresence>
              {productOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 overflow-hidden"
                >
                  <Link href="/legal" className="block px-4 py-2 hover:bg-blue-100">
                    Юридичні послуги
                  </Link>
                  <Link href="/finance" className="block px-4 py-2 hover:bg-blue-100">
                    Бухгалтерські послуги
                  </Link>
                  <Link href="/consulting" className="block px-4 py-2 hover:bg-blue-100">
                    Бізнес послуги
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="#footer" className="hover:text-blue-400">
            Контакти
          </Link>
        </nav>

        {/* Правая кнопка — обратная связь */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 text-sm font-medium text-white px-5 py-2.5 rounded-full
                    bg-gradient-to-r from-gray-900 to-gray-700
                    hover:from-gray-800 hover:to-gray-600 transition"
          >
            Зв’язатися з нами
          </button>
        </div>

        {/* Мобильная кнопка (бургер) */}
        <div className="md:hidden mr-6">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t h-screen">
          <div className="flex flex-col space-y-8 items-center px-4 py-3">
            <Link
              href="/"
              className="flex justify-center items-center w-full"
              onClick={() => setIsOpen(false)}
            >
              Головна
            </Link>

            <div>
              <button
                className="w-full flex justify-left items-center gap-2 hover:bg-gray-100 rounded"
                onClick={() => setProductOpen(!productOpen)}
              >
                <span>Послуги</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${productOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </button>
              {productOpen && (
                <div className="flex flex-col pl-4 mt-3 space-y-5">
                  <Link href="/legal" onClick={() => setIsOpen(false)}>
                    Юридичні послуги
                  </Link>
                  <Link href="/finance" onClick={() => setIsOpen(false)}>
                    Бухгалтерські послуги
                  </Link>
                  <Link href="/consulting" onClick={() => setIsOpen(false)}>
                    Бізнес послуги
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#footer"
              className="flex justify-center items-center w-full"
              onClick={() => setIsOpen(false)}
            >
              Контакти
            </Link>

            {/* Кнопка обратной связи внизу (мобильная) */}
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 text-sm font-medium text-white px-5 py-2.5 rounded-full
                    bg-gradient-to-r from-gray-900 to-gray-700
                    hover:from-gray-800 hover:to-gray-600 transition"
            >
              Зв’язатися з нами
            </button>

            {/* Соцсети */}
            <div className="mt-auto border-t pt-6 flex justify-center gap-6">
              {/* <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/youtube.png" alt="Youtube" width={24} height={24} />
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
              </a> */}
              <div>
                <a
                  href="tel:+380970144014"
                  className="text-lg font-medium text-blue-400 hover:underline"
                >
                  +38 (097) 01 44 014
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
      {/* POPUP */}
      <PopupForm isOpen={open} onClose={() => setOpen(false)} />
    </header>
  );
}
