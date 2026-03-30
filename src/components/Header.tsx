import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "@/constants/navLinks";

function Header() {
  return (
    <div className="relative">
      <header className="relative bg-midnight h-16 text-white flex items-center justify-between px-6 shadow-md z-10">
        {/* Left: Logo + Company Name */}
        <Link href="/" className="flex items-center gap-3">
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
            <span className="text-[10px] uppercase tracking-widest text-gold">
              International Trucking
            </span>
          </div>
        </Link>

        {/* Right: Nav + Call Us (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6 text-sm font-medium text-white/80">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:+385993308093"
            className="border border-gold text-gold hover:bg-gold hover:text-midnight px-4 py-1.5 rounded text-sm font-semibold transition-colors"
          >
            Call Us
          </a>
        </div>

        {/* Mobile menu */}
        <MobileMenu />
      </header>

      {/* Gold divider — mobile only */}
      <div className="h-0.5 bg-gold md:hidden" />
    </div>
  );
}

export default Header;
