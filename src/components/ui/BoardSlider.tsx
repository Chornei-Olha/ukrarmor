'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';

const boardMembers = [
  {
    id: 1,
    photo: '/images/team-1.webp',
    name: 'ВІКТОРІЯ СЕНИК',
    position: 'Бухгалтер',
    // badge: "Правління",
    description: `Маю 22-річний досвід в індустрії.\n
    Я й моя команда має експертизу з бух.обліку, оподаткуванню різних форм власності, глибоку експертизу в ефективній побудові різних моделей для різних типів бізнесу. Критичне мислення, Емоційний інтелект помножене на досвід та професійну експертизу дозволяє «під ключ» закривати потреби партнерів в короткі терміни\n
    Серед партнерів компанії з ринку FMCG(виробничі та торгові), девелоперського бізнесу, роздрібної торгівлі, ринку ХоРеКа, IT бізнесу та інші. \n`,
  },
  {
    id: 2,
    photo: '/images/team-2.webp',
    name: 'ЖУРАВЛЬОВ ВАЛЕРІЙ',
    position: 'Експерт зі стратегічного розвитку та антикризисного менеджменту',
    // badge: "Правління",
    description: `Професіонал в побудові та розвитку бізнесу з 22 річним досвідом в українських та іноземній компаніях.\n
Ключові компетенції.\n
1. Стратегічний менеджмент.\n
2. Антикризовий менеджмент\n
3. Архітектура бізнесу\n
4. Фінанси\n
5. Управління ризиками\n
6. Бізнес коучинг\n`,
  },
  {
    id: 3,
    photo: '/images/team-3.webp',
    name: 'ВІКТОРІЯ ПІЛЮГА',
    position: 'Юрист',
    // badge: "Правління",
    description: `За більше ніж 25 років  кількість виграних справ більше  ніж 90%. Спеціалізації: корпоративне право, податкове право, кримінальне право, інтелектуальна власність, юридичний супровід бізнесу "під ключ".`,
  },
];

export default function BoardSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<null | (typeof boardMembers)[0]>(null);

  return (
    <div id="slider1" className="w-full text-center relative py-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Про нас</h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Стрелки (десктоп) */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden sm:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden sm:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Стрелки (мобилка) */}
        <div className="flex justify-center gap-4 sm:hidden mb-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {boardMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="h-full flex flex-col justify-between p-4 border rounded-xl shadow-md bg-white min-h-[650px] max-h-[650px]">
                <div className="relative mb-2">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={300}
                    height={160}
                    className="w-full h-96 object-cover rounded-lg"
                    priority
                  />
                  {/* <div className="absolute bottom-2 right-2 bg-[#0103B8] text-white text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
                    {member.badge}
                  </div> */}
                </div>
                <h3 className="font-bold font-dm text-[20px]">{member.name}</h3>
                <p className="font-bold font-inter text-[16px] text-[#09234B] mt-[15px]">
                  {member.position}
                </p>
                <p className="font-regular font-inter text-[16px] mt-[15px] line-clamp-2">
                  {member.description}
                </p>
                <div className="mt-[20px] flex justify-center">
                  <button
                    className="inline-flex items-center gap-2 text-sm font-medium text-white px-5 py-2.5 rounded-full
                    bg-gradient-to-r from-gray-900 to-gray-700
                    hover:from-gray-800 hover:to-gray-600 transition"
                    onClick={() => {
                      console.log('Click!', member);
                      setSelectedMember(member);
                    }}
                  >
                    Детальніше
                    <span className="transition group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Модалка */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full rounded-xl shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-2">{selectedMember.name}</h3>
            <p className="text-md font-semibold text-[#09234B] mb-2">{selectedMember.position}</p>
            <p className="text-sm text-gray-700 whitespace-pre-line text-left">
              {selectedMember.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
