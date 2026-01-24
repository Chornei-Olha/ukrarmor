import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <div className="mx-auto grid max-w-full grid-cols-3 items-center gap-12">
        <Image
          src="/images/hero-left.webp"
          alt=""
          width={500}
          height={700}
          className="h-full object-cover"
        />

        <div className="text-center">
          <h1 className="font-cormorant text-[70px] italic uppercase leading-[97%] px-10 py-10">
            A Place to Heal,
            <br />
            Grow, and Create{' '}
          </h1>

          <button className="my-10 mx-10 border rounded-[2px] px-10 py-4 font-roboto text-[24px] font-bold uppercase leading-none">
            Step Inside
          </button>
        </div>

        <Image
          src="/images/hero-right.webp"
          alt=""
          width={500}
          height={700}
          className="h-full object-cover object-left"
        />
      </div>
    </section>
  );
}
