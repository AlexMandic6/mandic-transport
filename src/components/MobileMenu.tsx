"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-5 bg-white transition-transform duration-300 origin-center ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-white transition-transform duration-300 origin-center ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`md:hidden bg-midnight text-white overflow-hidden transition-all duration-300 ease-in-out absolute top-full left-0 right-0 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 pb-3 last:border-0 last:pb-0 hover:text-[var(--color-gold)] transition-colors text-right"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
