"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/navLinks";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="bg-midnight text-white">
      {/* CTA Band */}
      {isHome && (
        <div className="bg-gold px-6 md:px-12 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-midnight font-semibold text-base">
              Ready to ship across Europe?
            </p>
            <p className="text-midnight/70 text-sm mt-0.5">
              Get in touch with our team today.
            </p>
          </div>

          <Link
            href="/contact"
            className="bg-midnight text-gold text-sm font-semibold px-5 py-2.5 rounded hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      )}

      {/* Main footer row */}
      <div className="px-6 md:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo-scania.svg"
            alt="Scania Logo"
            width={32}
            height={32}
          />
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm leading-tight">
              Mandic Transport
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gold">
              Zagreb, Croatia
            </span>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-400 text-sm hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-12 py-3">
        <p className="text-gray-600 text-xs">
          © 2026 Mandic Transport. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
