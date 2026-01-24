import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    title: 'service',
    img: '/images/service-1.webp',
    anchor: 'service-1',
  },
  {
    title: 'service',
    img: '/images/service-2.webp',
    anchor: 'service-2',
  },
  {
    title: 'service',
    img: '/images/service-3.webp',
    anchor: 'service-3',
  },
];

export default function FeaturedCollections() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-10 font-cormorant text-[45px] md:text-[64px] italic leading-none">
          Our services
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.anchor}>
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={400}
                className="mb-6 w-full object-cover"
              />

              <Link
                href={`/services#${item.anchor}`}
                className="
                  inline-block
                  rounded-[2px]
                  border
                  px-8
                  py-3
                  font-roboto
                  text-[18px]
                  font-medium
                  uppercase
                  leading-none
                  transition
                  hover:bg-black
                  hover:text-white
                "
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
