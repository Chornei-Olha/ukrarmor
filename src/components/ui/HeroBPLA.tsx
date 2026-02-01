import Image from 'next/image';

export default function HeroBPLA() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/drone-flying.webp"
        alt="Інженерні рішення від атак БПЛА"
        fill
        priority
        className="object-cover"
      />

      {/* Dark / Blue Tech Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-blue-900/40 to-black/40" />

      {/* Subtle Grid Effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto container px-6 md:px-12 py-6 md:py-12">
          <h2 className="font-heading text-4xl md:text-7xl font-bold text-white leading-tight">
            Інженерні рішення
            <br />
            від атак БПЛА
          </h2>

          {/* <p className="mt-6 max-w-xl text-lg md:text-xl text-white/80">
            Комплексний багаторівневий захист критичної інфраструктури, промислових об'єктів та
            стратегічних територій
          </p> */}

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="text-base md:text-lg rounded-2xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition">
              Отримати консультацію
            </button>

            {/* <button className="rounded-2xl border border-white/40 px-8 py-4 text-white font-semibold hover:bg-white/10 transition">
              Дізнатися більше
            </button> */}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
