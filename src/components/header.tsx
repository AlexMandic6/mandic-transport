import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-midnight h-16 text-white flex items-center justify-between px-6 shadow-md">
      {/* Left: Logo + Company Name */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo-scania.svg"
          alt="Scania Logo"
          width={40}
          height={40}
          priority
        />
        <span className="font-bold tracking-wide text-lg">
          Mandic Transport
        </span>
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
    </header>
  );
}

export default Header;
