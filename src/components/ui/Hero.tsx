import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full">
      <div
        className="
          mx-auto max-w-full
          flex flex-col
          min-h-screen
          lg:min-h-0
          lg:grid lg:grid-cols-3 lg:items-center lg:gap-12
        "
      >
        {/* Верхняя картинка */}
        <div className="w-full flex-1 lg:h-full">
          <Image
            src="/images/hero-left.webp"
            alt="Healing space"
            width={500}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Центр */}
        <div className="text-center flex flex-col items-center justify-center px-6 py-8 lg:py-0">
          <h1
            className="
              font-cormorant italic uppercase leading-[97%]
              text-[32px] sm:text-[48px] lg:text-[70px]
            "
          >
            A Place to Heal,
            <br />
            Grow, and Create
          </h1>

          <button
            className="
              mt-8 border rounded-[2px]
              px-6 py-3 sm:px-8 sm:py-4
              font-roboto font-bold uppercase leading-none
              text-[14px] sm:text-[20px] lg:text-[24px]
              transition hover:bg-black hover:text-white
            "
          >
            Step Inside
          </button>
        </div>

        {/* Нижняя картинка */}
        <div className="w-full flex-1 lg:h-full">
          <Image
            src="/images/hero-right.webp"
            alt="Creative space"
            width={500}
            height={700}
            className="h-full w-full object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
