// 'use client';

// import Link from 'next/link';
// import { useMemo, useRef, useState } from 'react';

// type TabKey = 'general' | 'uav' | 'armor';

// type FormState = {
//   company: string;
//   comment: string;
//   name: string;
//   email: string;
//   phone: string;
//   interests: string[];
//   files: File[];
//   consent: boolean;
// };

// const ACCEPTED_EXTENSIONS = ['pdf', 'dwg', 'doc', 'docx', 'step', 'stp'];
// const ACCEPTED_MIME = [
//   'application/pdf',
//   'application/msword',
//   'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//   // dwg/step often comes as application/octet-stream depending on OS/browser
//   'application/octet-stream',
// ];

// const TABS: { key: TabKey; label: string }[] = [
//   { key: 'general', label: 'Загальні побажання' },
//   { key: 'uav', label: 'Захист від БПЛА' },
//   { key: 'armor', label: 'Бронепанелі' },
// ];

// const INTERESTS: Record<TabKey, { title?: string; subtitle?: string; options: string[] }> = {
//   general: {
//     options: [
//       'Я проектувальник, потрібна допомога!',
//       'Потрібна професійна консультація',
//       'Захист від БПЛА',
//       'Бронепанелі',
//       'Інше',
//     ],
//   },
//   uav: {
//     title: 'Заявка на укриття від атак дронів',
//     subtitle:
//       'Фізичний захист від БПЛА. Стаціонарні та переносні конструкції. Можливе доопрацювання під індивідуальні особливості проекту.',
//     options: [
//       'Стаціонарні укриття від атак дронів',
//       'Мобільні укриття від БПЛА',
//       'Я проектувальник, потрібна допомога',
//       'Інше (вкажу у коментарях)',
//     ],
//   },
//   armor: {
//     title: 'Заявка на бронепанелі',
//     subtitle:
//       'Виробництво та постачання бронепанелей є одним із ключових напрямків діяльності нашої компанії. Просимо вказати, які типи бронепанелей Вас цікавлять.',
//     options: [
//       'Бронепанелі бетонно-заливні зварні',
//       'Панелі металобетонні з болтовим з’єднанням',
//       'Сендвіч бронепанелі зварні',
//       'Сендвіч бронепанелі болтові',
//       'Кулестійкі броньовані панелі',
//       'Захисні панелі',
//       'Вибухостійкі броньовані панелі',
//       'Зламостійкі бронепанелі',
//       'Броньовані панелі 1 класу',
//       'Броньовані панелі 2 класу',
//       'Броньовані панелі 3 класу',
//       'Броньовані панелі 4 класу',
//       'Броньовані панелі 5 класу',
//       'Я проектувальник, потрібна допомога',
//       'Інше (вкажу у коментарях)',
//     ],
//   },
// };

// function isAllowedFile(file: File) {
//   const ext = file.name.split('.').pop()?.toLowerCase() || '';
//   const okExt = ACCEPTED_EXTENSIONS.includes(ext);
//   const okMime = ACCEPTED_MIME.includes(file.type) || file.type === '';
//   return okExt && okMime;
// }

// export default function ContactForm() {
//   const [tab, setTab] = useState<TabKey>('general');
//   const [isDragging, setIsDragging] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const [form, setForm] = useState<FormState>({
//     company: '',
//     comment: '',
//     name: '',
//     email: '',
//     phone: '',
//     interests: [],
//     files: [],
//     consent: false,
//   });

//   const cfg = useMemo(() => INTERESTS[tab], [tab]);

//   const toggleInterest = (value: string) => {
//     setForm((prev) => {
//       const exists = prev.interests.includes(value);
//       return {
//         ...prev,
//         interests: exists ? prev.interests.filter((v) => v !== value) : [...prev.interests, value],
//       };
//     });
//   };

//   const addFiles = (files: FileList | null) => {
//     if (!files) return;
//     const incoming = Array.from(files);
//     const allowed = incoming.filter(isAllowedFile);

//     setForm((prev) => {
//       // remove duplicates by name+size
//       const existingKeys = new Set(prev.files.map((f) => `${f.name}:${f.size}`));
//       const merged = [...prev.files];

//       for (const f of allowed) {
//         const key = `${f.name}:${f.size}`;
//         if (!existingKeys.has(key)) merged.push(f);
//       }
//       return { ...prev, files: merged };
//     });
//   };

//   const removeFile = (name: string, size: number) => {
//     setForm((prev) => ({
//       ...prev,
//       files: prev.files.filter((f) => !(f.name === name && f.size === size)),
//     }));
//   };

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.consent) {
//       alert('Будь ласка, підтвердіть згоду на обробку персональних даних.');
//       return;
//     }

//     // Собираем payload (интересы, активная вкладка, поля, файлы)
//     const data = new FormData();
//     data.append('category', tab);
//     data.append('company', form.company);
//     data.append('comment', form.comment);
//     data.append('name', form.name);
//     data.append('email', form.email);
//     data.append('phone', form.phone);
//     data.append('interests', JSON.stringify(form.interests));

//     form.files.forEach((f) => data.append('files', f));

//     // Тут подключишь свой эндпоинт (например /api/contact)
//     // await fetch('/api/contact', { method: 'POST', body: data });
//     console.log('FORM SUBMIT', {
//       category: tab,
//       ...form,
//       files: form.files.map((f) => ({ name: f.name, size: f.size })),
//     });

//     alert('Дякуємо! Заявку надіслано.');
//     setForm((prev) => ({ ...prev, interests: [], files: [], consent: false }));
//   };

//   return (
//     <section className="w-full">
//       {/* фон как в макете: градиент + легкий blur/overlay для читабельности */}
//       <div className="relative overflow-hidden rounded-2xl">
//         <div className="absolute inset-0 bg-gradient-to-b from-sky-500/70 via-sky-400/50 to-yellow-300/70" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.30),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.20),transparent_55%)]" />
//         <div className="relative p-6 md:p-10">
//           {/* header line */}
//           <div className="flex items-start justify-between gap-4">
//             <h2 className="text-white text-lg md:text-2xl font-semibold tracking-wide">
//               ФОРМА ЗВОРОТНЬОГО ЗВ&apos;ЯЗКУ
//             </h2>

//             <Link
//               href="/uav-protection-questionnaire"
//               className="shrink-0 inline-flex items-center justify-center rounded-md bg-yellow-300 px-4 py-2 text-xs md:text-sm font-semibold text-gray-900 shadow hover:bg-yellow-200 transition"
//             >
//               Розрахунок захисту від БПЛА
//             </Link>
//           </div>

//           {/* tabs */}
//           <div className="mt-6 flex gap-2 md:gap-3">
//             {TABS.map((t) => {
//               const active = t.key === tab;
//               return (
//                 <button
//                   key={t.key}
//                   type="button"
//                   onClick={() => setTab(t.key)}
//                   className={[
//                     'px-4 md:px-6 py-2 md:py-2.5 rounded-t-md text-xs md:text-sm font-semibold transition shadow-sm',
//                     active
//                       ? 'bg-blue-700 text-white'
//                       : 'bg-yellow-300/90 text-gray-900 hover:bg-yellow-200',
//                   ].join(' ')}
//                 >
//                   {t.label}
//                 </button>
//               );
//             })}
//           </div>

//           {/* main panel */}
//           <div className="bg-white/20 backdrop-blur-sm rounded-b-2xl rounded-tr-2xl p-6 md:p-8 mt-0 shadow-[0_20px_60px_rgba(0,0,0,0.20)]">
//             <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 lg:gap-10">
//               {/* left: interests */}
//               <div>
//                 {cfg.title && (
//                   <>
//                     <h3 className="text-white text-lg md:text-xl font-semibold">{cfg.title}</h3>
//                     {cfg.subtitle && (
//                       <p className="mt-3 text-white/90 text-sm leading-relaxed">{cfg.subtitle}</p>
//                     )}
//                     <div className="mt-6" />
//                   </>
//                 )}

//                 <h4 className="text-white text-base md:text-lg font-semibold">Що Вас цікавить ?</h4>

//                 <div className="mt-4 space-y-3">
//                   {cfg.options.map((opt) => {
//                     const checked = form.interests.includes(opt);
//                     return (
//                       <label key={opt} className="flex items-start gap-3 cursor-pointer">
//                         <input
//                           type="checkbox"
//                           className="mt-1 h-4 w-4 accent-yellow-300"
//                           checked={checked}
//                           onChange={() => toggleInterest(opt)}
//                         />
//                         <span className="text-white/95 text-sm">{opt}</span>
//                       </label>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* right: fields */}
//               <form onSubmit={onSubmit} className="space-y-4">
//                 <input
//                   value={form.company}
//                   onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
//                   placeholder="Організація"
//                   className="w-full rounded-md bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
//                 />

//                 <textarea
//                   value={form.comment}
//                   onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
//                   placeholder="Будь-який Ваш коментар"
//                   rows={4}
//                   className="w-full rounded-md bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
//                 />

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     value={form.name}
//                     onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
//                     placeholder="Ваше імʼя *"
//                     className="w-full rounded-md bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
//                     required
//                   />
//                   <input
//                     value={form.email}
//                     onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
//                     placeholder="Ваш email *"
//                     type="email"
//                     className="w-full rounded-md bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
//                     required
//                   />
//                 </div>

//                 <input
//                   value={form.phone}
//                   onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
//                   placeholder="Ваш телефон *"
//                   className="w-full md:max-w-[360px] rounded-md bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
//                   required
//                 />

//                 {/* upload */}
//                 <div className="pt-2">
//                   <p className="text-white font-semibold">У Вас є проект?</p>

//                   <div
//                     onDragEnter={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       setIsDragging(true);
//                     }}
//                     onDragOver={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       setIsDragging(true);
//                     }}
//                     onDragLeave={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       setIsDragging(false);
//                     }}
//                     onDrop={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       setIsDragging(false);
//                       addFiles(e.dataTransfer.files);
//                     }}
//                     className={[
//                       'mt-3 rounded-xl border-2 border-dashed px-6 py-10 text-center transition',
//                       isDragging ? 'border-blue-800 bg-white/35' : 'border-blue-800/50 bg-white/25',
//                     ].join(' ')}
//                   >
//                     <p className="text-blue-900 font-semibold">Перетягніть файли проекту сюди</p>
//                     <p className="mt-2 text-blue-900/80 text-sm">
//                       {ACCEPTED_EXTENSIONS.join(', ')}
//                     </p>

//                     <div className="mt-6 flex flex-col items-center gap-3">
//                       <span className="text-white/90 text-sm">Або натисніть кнопку</span>

//                       <button
//                         type="button"
//                         onClick={() => fileInputRef.current?.click()}
//                         className="inline-flex items-center justify-center rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow hover:bg-neutral-100 transition"
//                       >
//                         Вкласти проект
//                       </button>

//                       <input
//                         ref={fileInputRef}
//                         type="file"
//                         multiple
//                         accept={ACCEPTED_EXTENSIONS.map((e) => `.${e}`).join(',')}
//                         className="hidden"
//                         onChange={(e) => addFiles(e.target.files)}
//                       />
//                     </div>
//                   </div>

//                   {/* file list */}
//                   {form.files.length > 0 && (
//                     <div className="mt-4 rounded-lg bg-white/25 p-3">
//                       <p className="text-white text-sm font-semibold">Вкладені файли:</p>
//                       <ul className="mt-2 space-y-2">
//                         {form.files.map((f) => (
//                           <li
//                             key={`${f.name}:${f.size}`}
//                             className="flex items-center justify-between gap-3 text-sm text-white"
//                           >
//                             <span className="truncate">
//                               {f.name}{' '}
//                               <span className="text-white/70">
//                                 ({Math.round(f.size / 1024)} KB)
//                               </span>
//                             </span>
//                             <button
//                               type="button"
//                               onClick={() => removeFile(f.name, f.size)}
//                               className="shrink-0 rounded-md bg-white/20 px-3 py-1 text-xs hover:bg-white/30 transition"
//                             >
//                               Видалити
//                             </button>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>

//                 {/* consent */}
//                 <label className="flex items-center gap-3 pt-2">
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 accent-blue-700"
//                     checked={form.consent}
//                     onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
//                   />
//                   <span className="text-white/95 text-sm">
//                     Підтверджую свою згоду на обробку персональних даних
//                   </span>
//                 </label>

//                 {/* submit */}
//                 <div className="pt-3 flex justify-end">
//                   <button
//                     type="submit"
//                     className="w-full md:w-[320px] rounded-md bg-blue-700 px-6 py-3 text-white font-semibold shadow hover:bg-blue-800 transition"
//                   >
//                     Надіслати
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>

//           {/* small spacing like макет */}
//           <div className="h-2" />
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';

type TabKey = 'general' | 'uav' | 'armor';

type FormState = {
  company: string;
  comment: string;
  name: string;
  email: string;
  phone: string;
  interests: string[];
  files: File[];
  consent: boolean;
};

const ACCEPTED_EXTENSIONS = ['pdf', 'dwg', 'doc', 'docx', 'step', 'stp'];
const ACCEPTED_MIME = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  // dwg/step often comes as application/octet-stream depending on OS/browser
  'application/octet-stream',
];

const TABS: { key: TabKey; label: string }[] = [
  { key: 'general', label: 'Загальні побажання' },
  { key: 'uav', label: 'Захист від БПЛА' },
  { key: 'armor', label: 'Бронепанелі' },
];

const INTERESTS: Record<TabKey, { title?: string; subtitle?: string; options: string[] }> = {
  general: {
    options: [
      'Я проектувальник, потрібна допомога!',
      'Потрібна професійна консультація',
      'Захист від БПЛА',
      'Бронепанелі',
      'Інше',
    ],
  },
  uav: {
    title: 'Заявка на укриття від атак дронів',
    subtitle:
      'Фізичний захист від БПЛА. Стаціонарні та переносні конструкції. Можливе доопрацювання під індивідуальні особливості проекту.',
    options: [
      'Стаціонарні укриття від атак дронів',
      'Мобільні укриття від БПЛА',
      'Я проектувальник, потрібна допомога',
      'Інше (вкажу у коментарях)',
    ],
  },
  armor: {
    title: 'Заявка на бронепанелі',
    subtitle:
      'Виробництво та постачання бронепанелей є одним із ключових напрямків діяльності нашої компанії. Просимо вказати, які типи бронепанелей Вас цікавлять.',
    options: [
      'Бронепанелі бетонно-заливні зварні',
      'Панелі металобетонні з болтовим з’єднанням',
      'Сендвіч бронепанелі зварні',
      'Сендвіч бронепанелі болтові',
      'Кулестійкі броньовані панелі',
      'Захисні панелі',
      'Вибухостійкі броньовані панелі',
      'Зламостійкі бронепанелі',
      'Броньовані панелі 1 класу',
      'Броньовані панелі 2 класу',
      'Броньовані панелі 3 класу',
      'Броньовані панелі 4 класу',
      'Броньовані панелі 5 класу',
      'Я проектувальник, потрібна допомога',
      'Інше (вкажу у коментарях)',
    ],
  },
};

function isAllowedFile(file: File) {
  const ext = file.name.split('.').pop()?.toLowerCase() || '';
  const okExt = ACCEPTED_EXTENSIONS.includes(ext);
  const okMime = ACCEPTED_MIME.includes(file.type) || file.type === '';
  return okExt && okMime;
}

export default function ContactForm() {
  const [tab, setTab] = useState<TabKey>('general');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [form, setForm] = useState<FormState>({
    company: '',
    comment: '',
    name: '',
    email: '',
    phone: '',
    interests: [],
    files: [],
    consent: false,
  });

  const cfg = useMemo(() => INTERESTS[tab], [tab]);

  const toggleInterest = (value: string) => {
    setForm((prev) => {
      const exists = prev.interests.includes(value);
      return {
        ...prev,
        interests: exists ? prev.interests.filter((v) => v !== value) : [...prev.interests, value],
      };
    });
  };

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    const incoming = Array.from(files);
    const allowed = incoming.filter(isAllowedFile);

    setForm((prev) => {
      // remove duplicates by name+size
      const existingKeys = new Set(prev.files.map((f) => `${f.name}:${f.size}`));
      const merged = [...prev.files];

      for (const f of allowed) {
        const key = `${f.name}:${f.size}`;
        if (!existingKeys.has(key)) merged.push(f);
      }
      return { ...prev, files: merged };
    });
  };

  const removeFile = (name: string, size: number) => {
    setForm((prev) => ({
      ...prev,
      files: prev.files.filter((f) => !(f.name === name && f.size === size)),
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.consent) {
      alert('Будь ласка, підтвердіть згоду на обробку персональних даних.');
      return;
    }

    const data = new FormData();
    data.append('category', tab);
    data.append('company', form.company);
    data.append('comment', form.comment);
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('phone', form.phone);
    data.append('interests', JSON.stringify(form.interests));
    form.files.forEach((f) => data.append('files', f));

    // await fetch('/api/contact', { method: 'POST', body: data });
    console.log('FORM SUBMIT', {
      category: tab,
      ...form,
      files: form.files.map((f) => ({ name: f.name, size: f.size })),
    });

    alert('Дякуємо! Заявку надіслано.');
    setForm((prev) => ({ ...prev, interests: [], files: [], consent: false }));
  };

  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-2xl">
        {/* background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/75 via-sky-400/55 to-yellow-300/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.30),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.20),transparent_55%)]" />

        <div className="relative p-4 sm:p-6 md:p-10">
          {/* header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <h2 className="text-white text-base sm:text-lg md:text-2xl font-semibold tracking-wide">
              ФОРМА ЗВОРОТНЬОГО ЗВ&apos;ЯЗКУ
            </h2>

            <Link
              href="/uav-protection-questionnaire"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-yellow-300 px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-900 shadow hover:bg-yellow-200 transition"
            >
              Розрахунок захисту від БПЛА
            </Link>
          </div>

          {/* tabs (scrollable on mobile) */}
          <div className="mt-5 sm:mt-6">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {TABS.map((t) => {
                const active = t.key === tab;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setTab(t.key)}
                    className={[
                      'shrink-0 px-4 sm:px-5 py-2.5 rounded-t-xl text-xs sm:text-sm font-semibold transition shadow-sm',
                      active
                        ? 'bg-blue-700 text-white'
                        : 'bg-yellow-300/95 text-gray-900 hover:bg-yellow-200',
                    ].join(' ')}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* main panel */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 sm:p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.20)]">
            {/* IMPORTANT:
               Mobile: single column (checkboxes first, then fields)
               Desktop: two columns
               Also: panel scrolls inside viewport on small screens
            */}
            <div className="max-h-[calc(100vh-220px)] sm:max-h-none overflow-y-auto pr-0 sm:pr-0">
              <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6 lg:gap-10">
                {/* LEFT: interests (always first on mobile) */}
                <div className="order-1">
                  {cfg.title && (
                    <>
                      <h3 className="text-white text-lg md:text-xl font-semibold">{cfg.title}</h3>
                      {cfg.subtitle && (
                        <p className="mt-3 text-white/90 text-sm leading-relaxed">{cfg.subtitle}</p>
                      )}
                      <div className="mt-5" />
                    </>
                  )}

                  <h4 className="text-white text-base md:text-lg font-semibold">
                    Що Вас цікавить?
                  </h4>

                  {/* on mobile make this block compact + scroll if huge list */}
                  <div className="mt-4 space-y-3 max-h-[46vh] lg:max-h-none overflow-y-auto lg:overflow-visible pr-1">
                    {cfg.options.map((opt) => {
                      const checked = form.interests.includes(opt);
                      return (
                        <label key={opt} className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 accent-yellow-300"
                            checked={checked}
                            onChange={() => toggleInterest(opt)}
                          />
                          <span className="text-white/95 text-sm leading-snug">{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* RIGHT: fields (goes under checkboxes on mobile) */}
                <form onSubmit={onSubmit} className="order-2 space-y-4">
                  {/* Make sure nothing overflows on very small widths */}
                  <div className="min-w-0">
                    <input
                      value={form.company}
                      onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                      placeholder="Організація"
                      className="w-full min-w-0 rounded-xl bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
                    />
                  </div>

                  <textarea
                    value={form.comment}
                    onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
                    placeholder="Будь-який Ваш коментар"
                    rows={4}
                    className="w-full min-w-0 rounded-xl bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Ваше імʼя *"
                      className="w-full min-w-0 rounded-xl bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
                      required
                    />
                    <input
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="Ваш email *"
                      type="email"
                      className="w-full min-w-0 rounded-xl bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
                      required
                    />
                  </div>

                  <input
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="Ваш телефон *"
                    className="w-full min-w-0 rounded-xl bg-white px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-2 focus:ring-blue-700"
                    required
                  />

                  {/* upload */}
                  <div className="pt-2">
                    <p className="text-white font-semibold">У Вас є проект?</p>

                    <div
                      onDragEnter={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDragging(true);
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDragging(true);
                      }}
                      onDragLeave={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDragging(false);
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDragging(false);
                        addFiles(e.dataTransfer.files);
                      }}
                      className={[
                        'mt-3 rounded-2xl border-2 border-dashed px-4 sm:px-6 py-7 sm:py-10 text-center transition',
                        isDragging
                          ? 'border-blue-800 bg-white/35'
                          : 'border-blue-800/50 bg-white/25',
                      ].join(' ')}
                    >
                      <p className="text-blue-950 font-semibold text-sm sm:text-base">
                        Перетягніть файли проекту сюди
                      </p>

                      <p className="mt-2 text-blue-950/80 text-xs sm:text-sm break-words">
                        {ACCEPTED_EXTENSIONS.join(', ')}
                      </p>

                      <div className="mt-5 sm:mt-6 flex flex-col items-center gap-3">
                        <span className="text-white/90 text-xs sm:text-sm">
                          Або натисніть кнопку
                        </span>

                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow hover:bg-neutral-100 transition"
                        >
                          Вкласти проект
                        </button>

                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          accept={ACCEPTED_EXTENSIONS.map((e) => `.${e}`).join(',')}
                          className="hidden"
                          onChange={(e) => addFiles(e.target.files)}
                        />
                      </div>
                    </div>

                    {/* file list */}
                    {form.files.length > 0 && (
                      <div className="mt-4 rounded-2xl bg-white/25 p-4">
                        <p className="text-white text-sm font-semibold">Вкладені файли:</p>

                        <ul className="mt-3 space-y-2">
                          {form.files.map((f) => (
                            <li
                              key={`${f.name}:${f.size}`}
                              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-white"
                            >
                              <span className="min-w-0 break-words">
                                {f.name}{' '}
                                <span className="text-white/70">
                                  ({Math.round(f.size / 1024)} KB)
                                </span>
                              </span>

                              <button
                                type="button"
                                onClick={() => removeFile(f.name, f.size)}
                                className="self-start sm:self-auto shrink-0 rounded-xl bg-white/20 px-3 py-1.5 text-xs hover:bg-white/30 transition"
                              >
                                Видалити
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* consent */}
                  <label className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 accent-blue-700"
                      checked={form.consent}
                      onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))}
                    />
                    <span className="text-white/95 text-sm leading-snug">
                      Підтверджую свою згоду на обробку персональних даних
                    </span>
                  </label>

                  {/* submit */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-blue-700 px-6 py-3 text-white font-semibold shadow hover:bg-blue-800 transition"
                    >
                      Надіслати
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="h-2" />
        </div>
      </div>
    </section>
  );
}
