import Image from 'next/image';

export default function FollowFeed() {
  return (
    <section className="relative bg-[#F7F2EE] py-8 md:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* TITLE */}
        <h2 className="mb-10 text-center font-cormorant text-[45px] md:text-[64px] italic leading-none">
          Follow our feed
        </h2>

        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          {/* LEFT BLOCK */}
          <div className="relative flex flex-col items-center text-center">
            {/* FEATHER */}
            <Image
              src="/images/feather.webp"
              alt=""
              width={280}
              height={180}
              className="pointer-events-none absolute -left-24 top-0 opacity-90"
            />

            <span className="mb-6 font-roboto text-[18px] uppercase tracking-wide">@asanka_91</span>

            <a
              href="https://www.instagram.com/asanka_91/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-3 border px-8 py-3 font-roboto text-[18px] font-medium uppercase leading-none transition hover:opacity-60">
                <span className="text-lg">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="pointer-events-none"
                  />
                </span>
                Follow us
              </button>
            </a>
          </div>

          {/* RIGHT GRID */}
          <div
            className="
    grid
    h-[520px]
    grid-cols-2
    grid-rows-3
    gap-4
    md:h-[420px]
    md:grid-cols-3
    md:grid-rows-2
  "
          >
            {/* BIG IMAGE */}
            <div className="relative col-span-2 row-span-2 md:col-span-1 md:row-span-2">
              <Image src="/images/insta-1.png" alt="" fill className="object-cover" />
            </div>

            {/* SMALL 1 */}
            <div className="relative">
              <Image src="/images/insta-2.png" alt="" fill className="object-cover" />
            </div>

            {/* SMALL 2 */}
            <div className="relative">
              <Image src="/images/insta-3.png" alt="" fill className="object-cover" />
            </div>

            {/* SMALL 3 */}
            <div className="relative md:col-start-2">
              <Image src="/images/insta-4.png" alt="" fill className="object-cover" />
            </div>

            {/* SMALL 4 */}
            <div className="relative">
              <Image src="/images/insta-5.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
