'use client';

import ContactForm from '@/components/ui/ContactForm';

function scrollToForm() {
  const el = document.getElementById('contact-form');
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

const objects = [
  'Парки зберігання нафти та нафтопродуктів',
  'Стратегічні та інфраструктурні об’єкти',
  'Магістральні газопроводи',
  'Виробничі комплекси',
  'Інші типи об’єктів',
];

const features = [
  'Захисна споруда не допускає потрапляння БПЛА',
  'Забезпечується відстань від об’єктів, що захищаються, 5 (п’ять) і більше метрів',
  'Ремонтопридатність сітки ЗОК',
  'Відповідає чинним нормам і вимогам України (вітрове, снігове та сейсмічне навантаження)',
  'Конструкція не спирається на елементи технологічного обладнання та резервуарних парків',
];

const protectedTypes = [
  'Урядові будівлі та дипломатичні об’єкти',
  'Аеропорти та авіаційна інфраструктура',
  'Енергетична інфраструктура',
  'Нафтогазова та гірничодобувна промисловість',
  'Промислові підприємства',
  'Транспортні вузли та інфраструктура',
  'Телекомунікаційна інфраструктура',
  'Центри обробки даних',
  'Приватна власність та VIP-захист',
];

export default function UavProtectionQuestionnairePage() {
  return (
    <>
      {/* ✅ SEO: Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'UkrArmor',
            description: "Інженерні рішення захисту об'єктів від БПЛА та сучасних загроз",
            url: 'https://ukrarmor.kiev.ua/',
          }),
        }}
      />

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-10">Про компанію</h1>

        {/* ✅ ABOUT COMPANY BLOCK (SEO) */}
        <section
          id="about-company"
          aria-label="Про компанію UkrArmor"
          data-keywords="захист від БПЛА, захист від дронів, інженерні рішення, захист підприємств, захист інфраструктури"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        >
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900">
              Український виробник комплексних рішень щодо захисту об&apos;єктів від безпілотних
              загроз
            </h2>

            <p>
              Технічні системи та інженерні захисні конструкції для захисту обладнання та споруд від
              БПЛА.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              {objects.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={scrollToForm}
                className="rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-black hover:brightness-95 transition"
              >
                Залишити заявку
              </button>
            </div>
          </div>

          {/* INFO CARD */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-gray-600">ПРОЕКТУВАННЯ І РЕАЛІЗАЦІЯ</p>
                <p className="mt-2 text-sm text-gray-600">ТЕРМІН СЛУЖБИ ВИРОБІВ БІЛЬШЕ 10 РОКІВ</p>
              </div>

              <div className="shrink-0 rounded-full bg-yellow-400 px-4 py-3 text-center">
                <div className="text-sm font-bold leading-tight">100%</div>
                <div className="text-xs font-semibold leading-tight">Захист</div>
              </div>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Завдання ЗОК — запобігти зіткненню БПЛА та дронів з обладнанням та об&apos;єктами,
              віднести точку вибуху на безпечну відстань.
            </p>

            <ul className="mt-5 list-disc pl-6 space-y-2 text-gray-700">
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            {/* Contacts */}
            <div className="mt-6 rounded-xl bg-gray-50 p-4">
              <h3 className="text-sm font-semibold text-gray-900">Контакти</h3>
              <p className="mt-2 text-sm text-gray-700">
                Телефон: <span className="font-semibold">+380 50 999 95 14</span>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Email: <span className="font-semibold">ukrarmor.kiev@ukr.net</span>
              </p>
            </div>
          </div>
        </section>

        {/* PROTECTED TYPES */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Види об&apos;єктів, що захищаються</h2>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {protectedTypes.map((t, idx) => (
              <div key={t} className="rounded-xl border bg-white p-4 text-sm text-gray-800">
                <span className="font-semibold">{idx + 1}.</span> {t}
              </div>
            ))}
          </div>
        </section>

        {/* FORM */}
        <div id="contact-form" className="mt-20 scroll-mt-24">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
