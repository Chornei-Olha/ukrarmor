import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#EEF5F1]">
      {/* TOP */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-3">
          {/* COLUMN 1 */}
          <div className="flex items-center justify-center md:items-start md:justify-start">
            <Image
              src="/images/logo.svg"
              alt="Simple Brown Box"
              width={300}
              height={200}
              className="opacity-80"
            />
          </div>

          {/* COLUMN 2 */}
          <div className="font-roboto text-[16px] leading-[130%]">
            <a href="/" className="block mb-3">
              Home
            </a>
            <a href="/gallery" className="block mb-3">
              Gallery
            </a>
            <a href="/services" className="block mb-3">
              Services
            </a>
            <a href="/faq" className="block mb-3">
              FAQ
            </a>
            <a href="#" className="block mb-3">
              Privacy policy
            </a>
            <a href="#" className="block">
              Terms & Conditions
            </a>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-3 font-roboto text-[16px] leading-[130%]">
            <p className="mb-4 font-medium uppercase">Information</p>

            <p>Simple Brown Box Ltd</p>
            <p>Flat 44</p>

            <p className="pt-4">
              Phone:{' '}
              <a href="tel:+447342366339" className="text-blue-600 hover:underline">
                +44 7342 366339
              </a>
            </p>
            <p>
              <a
                href="mailto:Company@SimpleBrownBox.co.uk"
                className="text-blue-600 hover:underline"
              >
                Company@SimpleBrownBox.co.uk
              </a>
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://wa.me/447342366339"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Image src="/icons/whatsapp.svg" alt="" width={20} height={20} />
              </a>

              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <Image src="/icons/telegram.svg" alt="" width={20} height={20} />
              </a>

              <a
                href="https://www.instagram.com/asanka_91/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image src="/icons/instagram.svg" alt="" width={20} height={20} />
              </a>

              <a
                href="https://www.facebook.com/alena.san.ko.2025"
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
        Copyright © 2026 «Art POSURE» | Created by Chornei Olha
      </div>
    </footer>
  );
}
