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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {!showThankYou ? (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
    relative
    w-[90%]
    max-w-md
    bg-[#fdfbf7]
    border
    border-black
    rounded-[2px]
    p-8
    font-roboto
    shadow-[0_0_40px_10px_rgba(238,245,241,0.5)]
  "
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-black text-xl hover:opacity-60"
            >
              ×
            </button>

            <h3
              className="
                font-cormorant
                italic
                uppercase
                text-[28px]
                text-center
                mb-8
                tracking-wide
              "
            >
              Get in Touch
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block uppercase text-[12px] mb-2 tracking-wide">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-black
                    px-2
                    py-2
                    text-[16px]
                    focus:outline-none
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block uppercase text-[12px] mb-2 tracking-wide">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-black
                    px-2
                    py-2
                    text-[16px]
                    focus:outline-none
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block uppercase text-[12px] mb-2 tracking-wide">Message</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-black
                    px-2
                    py-2
                    text-[16px]
                    focus:outline-none
                    resize-none
                  "
                />
              </div>

              {/* Button */}
              <div className="pt-6 text-center">
                <button
                  type="submit"
                  className="
                    border
                    border-black
                    px-10
                    py-3
                    uppercase
                    tracking-wide
                    text-[14px]
                    transition
                    hover:bg-black
                    hover:text-white
                  "
                >
                  Send Request
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              w-[90%]
              max-w-md
              bg-[#fdfbf7]
              border
              border-black
              rounded-[2px]
              p-10
              text-center
              font-roboto
            "
          >
            <h3 className="font-cormorant italic uppercase text-[26px] mb-4">Thank You</h3>
            <p className="text-[16px]">We’ll contact you shortly.</p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
