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
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export default function GetQuotePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Отримати комерційну пропозицію</h1>

      {/* HERO */}
      <section className="rounded-2xl border bg-white p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Отримати комерційну пропозицію</h2>
            <p className="text-gray-700 leading-relaxed">
              Інженер UKRARMOR оперативно прорахує Вашу специфікацію та запропонує альтернативи.
            </p>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:brightness-95 transition"
            >
              Отримати КП
            </button>
          </div>

          {/* правий блок — можеш замінити на Image */}
          <div className="rounded-2xl bg-gray-50 p-6 text-gray-700">
            <p className="text-sm font-semibold text-gray-900">Швидко • Зручно • Під ключ</p>
            <p className="mt-2 text-sm leading-relaxed">
              Завантажте специфікацію — менеджер отримає її та зв’яжеться з Вами з детальною
              пропозицією і можливими альтернативами.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="mt-12 rounded-2xl border bg-white p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900">Як це працює?</h3>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Для роботи з сервісом UKRARMOR Ви можете завантажити файл специфікації (доступні формати:
          word, pdf, xls, xlsx, doc та jpg, а розмір файлу не повинен перевищувати 50 МБ).
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Ваш персональний менеджер отримає Вашу специфікацію, обробить та негайно зв’яжеться з
          Вами. Вам буде представлена детальна пропозиція з урахуванням альтернативних рішень.
        </p>
      </section>

      {/* SERVICE DOES */}
      <section className="mt-12">
        <h3 className="text-xl font-bold text-gray-900">Що робить сервіс?</h3>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="text-base font-semibold text-gray-900">Економія часу на розрахунок</h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Ваш персональний менеджер отримає Вашу специфікацію, обробить та негайно зв’яжеться з
              Вами.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h4 className="text-base font-semibold text-gray-900">
              Завантаження специфікації у будь-якому форматі
            </h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Доступні формати: word, pdf, xls, xlsx, doc та jpg. Розмір файлу — до 50 МБ.
            </p>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)} title="Отримати КП">
        <ContactForm />
      </Modal>
    </div>
  );
}
