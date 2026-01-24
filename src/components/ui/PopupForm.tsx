'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function PopupForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name, email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setShowThankYou(true);
      setName('');
      setEmail('');
      setMessage('');

      setTimeout(() => {
        setShowThankYou(false);
        onClose();
      }, 2500);
    } catch (err) {
      alert('Помилка. Спробуйте ще раз.');
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {!showThankYou ? (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-[0_0_40px_8px_rgba(59,130,246,0.5)]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-black"
            >
              ×
            </button>

            <h3 className="text-2xl font-bold text-blue-500 mb-6 text-center">
              Отримати консультацію
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Ваше імʼя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border rounded-full px-4 py-3 text-gray-800 placeholder-gray-500"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border rounded-full px-4 py-3 text-gray-800 placeholder-gray-500"
              />

              <textarea
                placeholder="Опишіть вашу ситуацію"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className="w-full border rounded-2xl px-4 py-3 text-gray-800 placeholder-gray-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-400 text-white py-3 rounded-full font-medium hover:bg-blue-500 transition"
              >
                Надіслати
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            className="bg-white rounded-3xl p-10 w-[90%] max-w-md text-center shadow-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <h3 className="text-2xl font-bold text-blue-500 mb-4">Дякуємо!</h3>
            <p>Ми звʼяжемося з вами найближчим часом.</p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
