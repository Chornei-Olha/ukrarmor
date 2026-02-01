import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-auto overflow-hidden bg-white font-body px-6 md:px-12 py-6 md:py-12 ">
      {/* Жовта тінь / градієнт */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full sm:w-1/2 bg-gradient-to-b from-yellow-300/40 via-yellow-200/20 to-transparent sm:bg-gradient-to-r sm:from-yellow-300/40 sm:via-yellow-200/20 sm:to-transparent" />

      <div className="container relative z-10 mx-auto max-h-screen md:min-h-[700px] grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        {/* Ліва частина — текст */}
        <div className="flex flex-col justify-center space-y-6 container py-16 sm:py-0">
          <h1 className="font-heading text-4xl md:text-7xl font-bold leading-tight text-blue-600 ">
            КОМПЛЕКСНИЙ
            <br />
            ЗАХИСТ ВІД БПЛА
          </h1>
          <p className="max-w-xl text-lg md:text-2xl text-blue-600">
            Кінетичний захист об'єктів критичної інфраструктури, об'єктів ПЕК та небезпечних
            об'єктів промисловості
          </p>
          {/* <div className="pt-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="ukrarmor"
                width={100}
                height={100}
                className="object-contain"
                priority
              />{' '}
              <span className="font-heading text-xl font-bold text-gray-900">UKRARMOR</span>
            </div>
          </div> */}
        </div>

        {/* Права частина — картинка */}
        <div className="relative w-full flex items-center justify-center">
          <div className="relative hero-image-wrapper">
            <Image
              src="/images/hero-drone.webp"
              alt="Дрон за захисною сіткою"
              width={700}
              height={700}
              className="object-contain"
              priority
            />

            <div className="pointer-events-none absolute inset-0 fade-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
