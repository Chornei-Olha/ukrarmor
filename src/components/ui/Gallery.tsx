'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  '/images/gallery-1.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-1.jpg',
  '/images/gallery-3.jpg',
  '/images/gallery-2.jpg',
  '/images/gallery-1.jpg',
];

// useEffect(() => {
//   const handler = (e: KeyboardEvent) => {
//     if (e.key === 'Escape') close();
//     if (e.key === 'ArrowLeft') prev();
//     if (e.key === 'ArrowRight') next();
//   };
//   window.addEventListener('keydown', handler);
//   return () => window.removeEventListener('keydown', handler);
// }, []);

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const prev = () =>
    setActiveIndex((prev) => (prev === null ? null : prev === 0 ? images.length - 1 : prev - 1));

  const next = () =>
    setActiveIndex((prev) => (prev === null ? null : prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      {/* GRID */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="mb-12 text-center font-cormorant text-[40px] italic font-light leading-[100%] md:text-[64px]">
          Gallery
        </h1>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      {/* MODAL SLIDER */}
      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          {/* CLOSE */}
          <button
            onClick={close}
            className="absolute right-4 top-4 text-3xl text-white"
            aria-label="Close gallery"
          >
            ✕
          </button>

          {/* PREV */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-6 text-4xl text-white"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* IMAGE */}
          <div className="relative h-[70vh] w-[90vw] md:h-[80vh] md:w-[70vw]">
            <Image
              src={images[activeIndex]}
              alt="Selected image"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* NEXT */}
          <button
            onClick={next}
            className="absolute right-2 md:right-6 text-4xl text-white"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
