import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full">
      {/* TOP DIVIDER */}
      <div className="h-px w-full bg-neutral-200" />

      {/* LOGO */}

      {/* MAIN HEADER */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/">
          {' '}
          <div className="mr-auto">
            <Image src="/images/logo.svg" alt="Simple Brown Box" width={150} height={50} priority />
          </div>
        </a>
        {/* LEFT NAV */}
        <nav className="flex gap-8 font-roboto text-[18px] uppercase leading-none">
          <a href="/">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/services">Services</a>
          <a href="/faq">FAQ</a>
        </nav>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="h-px w-full bg-neutral-200" />
    </header>
  );
}
