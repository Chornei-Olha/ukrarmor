'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'WHAT ARE DELIVERY OPTIONS?',
    answer:
      'Due to the detailed nature and our high order volume, our current order processing time is 3–5 business days, not including transit time...',
  },
  {
    question: 'DO YOU CREATE CUSTOM BOXES?',
    answer: 'Yes. You can choose the items for your personal box HERE.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      {/* TITLE */}
      <h2 className="mb-16 text-center font-cormorant text-[40px] italic font-light leading-[100%] md:text-[64px]">
        Frequently asked questions
      </h2>

      <div className="divide-y divide-gray-300">
        {faqData.map((item, index) => (
          <div key={index} className="py-6 md:py-8">
            {/* QUESTION */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-robotoCondensed text-[18px] font-normal uppercase leading-[100%] md:text-[22px]">
                {item.question}
              </span>

              <span
                className={`ml-6 inline-block h-0 w-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-500 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* ANSWER */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'mt-6 max-h-[400px]' : 'max-h-0'
              }`}
            >
              <p className="font-robotoCondensed text-[16px] font-light leading-[100%] text-gray-600 md:text-[18px]">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
