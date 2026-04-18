'use client';

import { useEffect, useState } from 'react';
import ContactForm from '@/components/ui/ContactForm';

function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="absolute inset-0 flex items-end justify-center p-0 sm:items-center sm:p-4">
        <div
          className="
            relative z-10 flex w-full flex-col bg-white shadow-2xl
            h-[92dvh] rounded-t-2xl
            sm:h-auto sm:max-h-[90vh] sm:w-[90vw] sm:max-w-4xl sm:rounded-2xl
          "
        >
          <div className="flex items-center justify-between border-b px-4 py-4 sm:px-6">
            <h3 className="pr-4 text-base font-semibold text-gray-900 sm:text-lg">{title}</h3>

            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function GetQuotePageClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Отримання комерційної пропозиції UkrArmor',
            provider: {
              '@type': 'Organization',
              name: 'UkrArmor',
              url: 'https://ukrarmor.kiev.ua/',
            },
            areaServed: 'UA',
            serviceType: 'Підготовка комерційної пропозиції щодо захисту від БПЛА',
            description:
              'Сервіс для завантаження специфікації та отримання комерційної пропозиції щодо рішень захисту від БПЛА.',
            url: 'https://ukrarmor.kiev.ua/get-quote',
          }),
        }}
      />

      <main className="container mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <section
          aria-labelledby="quote-title"
          className="rounded-2xl border bg-white p-5 shadow-sm sm:p-8"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h1 id="quote-title" className="text-2xl font-bold sm:text-3xl">
                Отримати комерційну пропозицію
              </h1>

              <p className="leading-relaxed text-gray-700">
                Інженер UKRARMOR оперативно прорахує Вашу специфікацію та запропонує альтернативи.
              </p>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
              >
                Отримати КП
              </button>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5 text-gray-700 sm:p-6">
              <p className="text-sm font-semibold text-gray-900">Швидко • Зручно • Під ключ</p>
              <p className="mt-2 text-sm leading-relaxed">
                Завантажте специфікацію — менеджер отримає її та зв’яжеться з Вами з детальною
                пропозицією і можливими альтернативами.
              </p>
            </div>
          </div>
        </section>

        <section
          id="how"
          aria-labelledby="how-it-works"
          className="mt-10 rounded-2xl border bg-white p-5 shadow-sm sm:mt-12 sm:p-8"
        >
          <h2 id="how-it-works" className="text-lg font-bold text-gray-900 sm:text-xl">
            Як це працює?
          </h2>

          <p className="mt-4 leading-relaxed text-gray-700">
            Для роботи з сервісом UKRARMOR Ви можете завантажити файл специфікації (доступні
            формати: word, pdf, xls, xlsx, doc та jpg, а розмір файлу не повинен перевищувати 50
            МБ).
          </p>

          <p className="mt-4 leading-relaxed text-gray-700">
            Ваш персональний менеджер отримає Вашу специфікацію, обробить та негайно зв’яжеться з
            Вами. Вам буде представлена детальна пропозиція з урахуванням альтернативних рішень.
          </p>
        </section>

        <section aria-labelledby="service-benefits" className="mt-10 sm:mt-12">
          <h2 id="service-benefits" className="text-lg font-bold text-gray-900 sm:text-xl">
            Що робить сервіс?
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-base font-semibold text-gray-900">Економія часу на розрахунок</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Ваш персональний менеджер отримає Вашу специфікацію, обробить та негайно зв’яжеться
                з Вами.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Завантаження специфікації у будь-якому форматі
              </h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Доступні формати: word, pdf, xls, xlsx, doc та jpg. Розмір файлу — до 50 МБ.
              </p>
            </div>
          </div>
        </section>

        <Modal open={open} onClose={() => setOpen(false)} title="Отримати КП">
          <ContactForm />
        </Modal>
      </main>
    </>
  );
}
