import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#EEF5F1]">
      {/* TOP */}
      <div className="mx-auto container px-6 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
          {/* COLUMN 1 */}
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <Image
              src="/images/logo-s.webp"
              alt="logo"
              width={100}
              height={100}
              className="opacity-80"
            />
          </div>

          {/* COLUMN 2 */}
          <div className="font-roboto text-[16px] leading-[130%]">
            {/* <a href="/" className="block mb-3">
              Home
            </a>
            <a href="/gallery" className="block mb-3">
              Gallery
            </a>
            <a href="#" className="block mb-3">
              Privacy policy
            </a>
            <a href="#" className="block">
              Terms & Conditions
            </a> */}
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-3 font-roboto text-[16px] leading-[130%]">
            <p className="mb-4 font-medium uppercase">Information</p>

            <p>Ukrarmor</p>
            {/* <p>Flat 44</p> */}

            <p className="pt-4">
              Phone:{' '}
              <a href="tel:+447342366339" className="text-blue-600 hover:underline">
                +380678888888
              </a>
            </p>
            <p>
              <a
                href="mailto:Company@SimpleBrownBox.co.uk"
                className="text-blue-600 hover:underline"
              >
                ukrarmor@gmail.com
              </a>
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Image src="/icons/whatsapp.svg" alt="" width={20} height={20} />
              </a>

              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <Image src="/icons/telegram.svg" alt="" width={20} height={20} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image src="/icons/instagram.svg" alt="" width={20} height={20} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image src="/icons/facebook.svg" alt="" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-px w-full bg-neutral-300" />

      {/* BOTTOM */}
      <div className="py-6 text-center font-roboto text-[14px] leading-none">
        Copyright © 2026 «UKRARMOR» | Created by{' '}
        <a
          href="https://www.instagram.com/olha_chornei/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Chornei Olha
        </a>
      </div>
    </footer>
  );
}
