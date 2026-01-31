import Image from 'next/image';

export default function ChallengesSection() {
  return (
    <section className="relative w-full bg-white py-16 px-6 md:px-12">
      <div className="mx-auto container">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-blue-700">
            ВИКЛИКИ І РЕАЛЬНІСТЬ
          </h2>
          <div className="mt-2 h-1 w-32 bg-blue-600 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
          {/* Left: Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-xl aspect-[2] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/protection.webp"
                alt="Захисна сітка та конструкція"
                fill
                className="object-contain"
              />

              {/* Soft fade overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent" />
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <h3 className="font-heading text-3xl md:text-4xl font-semibold text-blue-700 leading-tight">
              Багаторівневий
              <br />
              кінетичний захист
            </h3>
            <p className="text-base md:text-lg text-gray-700 max-w-xl">
              Визначення рівня захисту об'єкта від БПЛА здійснюється експлуатуючою організацією на
              підставі галузевих або об'єктових нормативних документів або замовником у завданні на
              проєктування.
            </p>

            <div className="flex items-start gap-4">
              <Image
                src="/images/drone.webp"
                alt="Дрон"
                width={200}
                height={200}
                className="object-contain shrink-0"
              />

              <p className="text-sm md:text-base text-gray-700"></p>
            </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="mt-12 rounded-2xl bg-gray-50 p-6 md:p-10 shadow-inner space-y-6">
          <h3 className="font-heading text-3xl md:text-4xl font-semibold text-blue-700 leading-tight text-center">
            Щодо об'єкта (території) промисловості категорії
          </h3>
          <p className="text-sm md:text-lg text-gray-800 leading-relaxed text-left max-w-5xl mx-auto">
            Оснащення об'єкта засобами виявлення (візуальними та акустичними), пасивного захисту
            (сітчасті огорожі, екрани, навіси, габіони), радіоелектронної боротьби (засобами
            придушення або перетворення електромагнітних випромінювань і сигналів дистанційного
            керування) з безпілотними повітряними, підводними і надводними суднами та апаратами,
            безпілотними транспортними засобами та іншими автоматизованими безпілотними комплексами.
          </p>
        </div>
      </div>
    </section>
  );
}
