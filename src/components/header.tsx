import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";

function Header() {
  return (
    <div className="relative">
      <header className="relative bg-midnight h-16 text-white flex items-center justify-between px-6 shadow-md z-10">
        {/* Left: Logo + Company Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo-scania.svg"
            alt="Scania Logo"
            width={40}
            height={40}
            priority
          />
          <div className="flex flex-col">
            <span className="font-bold tracking-wide text-base md:text-lg leading-tight">
              Mandic Transport
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--color-gold)]">
              International Trucking
            </span>
          </div>
        </div>

        {/* Right: Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Call to Action (optional) */}
        <div className="hidden md:block">
          <a
            href="tel:+385912345678"
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-semibold"
          >
            Call Us
          </a>
        </div>
        {/* Mobile menu (button + dropdown) */}
        <MobileMenu />
      </header>
      {/*  Divider */}
      <div className="h-0.5 bg-gold md:hidden" />
    </div>
  );
}

export default Header;
