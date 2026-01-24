'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSectionDark() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="footer" className="bg-gray-900 py-10 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3 items-stretch">
          {/* LEFT — LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 flex justify-center md:justify-start items-start"
          >
            <Link href="/">
              <img
                src="/images/logo_black.webp"
                alt="V&V consulting"
                className="h-[100px] sm:h-[180px] w-auto opacity-90 hover:opacity-100 transition"
              />
            </Link>
          </motion.div>

          {/* CENTER — TEXT + CONTACTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-3 md:order-2 flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="text-3xl font-bold text-white">Звʼяжіться з нами</h2>
              <p className="mt-4 text-gray-300">
                Залиште запит — ми повернемось до вас із рішенням, а не загальною консультацією.
              </p>
            </div>

            <div className="space-y-6 mt-10">
              <div>
                <p className="text-sm text-gray-400">Телефон</p>
                <a
                  href="tel:+380970144014"
                  className="text-lg font-medium text-blue-400 hover:underline"
                >
                  +38 (097) 01 44 014
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:thevvvgroup@gmail.com"
                  className="text-lg font-medium text-blue-400 hover:underline"
                >
                  thevvvgroup@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-3 h-full"
          >
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше імʼя"
                  required
                  className="w-full border border-gray-600 rounded-lg px-4 py-3 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full border border-gray-600 rounded-lg px-4 py-3 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Опишіть вашу ситуацію"
                  rows={6}
                  required
                  className="w-full border border-gray-600 rounded-lg px-4 py-3 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-400 text-gray-900 py-3 rounded-lg font-medium hover:bg-blue-500 transition"
                >
                  Отримати консультацію
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center mt-6">
                Ваша інформація конфіденційна
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FLOAT PHONE BUTTON */}
      <div
        className="fixed bottom-5 right-5 z-50 w-16 sm:w-20 lg:w-[98px] h-16 sm:h-20 lg:h-[98px]
        rounded-full bg-white/10 backdrop-blur-sm
        shadow-[0_0_20px_5px_rgba(59,130,246,0.7)]
        flex items-center justify-center"
      >
        <a href="tel:+380970144014">
          <div className="w-full h-full flex items-center justify-center cursor-pointer rounded-full transition-transform active:scale-95">
            <Image
              src="/images/img_phone_call_2_svg.svg"
              alt="Phone Call"
              width={60}
              height={60}
              className="w-12 sm:w-14 lg:w-[60px] h-12 sm:h-14 lg:h-[60px] animate-wiggle"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
