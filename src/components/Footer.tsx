"use client";

import Image from "next/image";
import { navLinks } from "@/constants/navLinks";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/" || /^\/[a-z]{2}$/.test(pathname);
  const isEnglish = locale === "en";

  function switchToEnglish() {
    // Replace current locale prefix with /en
    const newPath = pathname.replace(`/${locale}`, "/en") || "/en";
    router.push(newPath);
  }

  return (
    <footer className="bg-midnight text-white">
      {isHome && (
        <div className="bg-gold px-6 md:px-12 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-midnight font-semibold text-base">{t("cta")}</p>
            <p className="text-midnight/70 text-sm mt-0.5">{t("ctaSub")}</p>
          </div>

          <a
            href={`/${locale}/contact`}
            className="bg-midnight text-gold text-sm font-semibold px-5 py-2.5 rounded hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {t("ctaBtn")}
          </a>
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
              {t("tagline")}
            </span>
          </div>
        </div>
        <nav className="flex gap-6">
          {navLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 text-sm hover:text-gold transition-colors"
              >
                {tNav(link.href.slice(1))}
              </Link>
            ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 md:px-12 py-3 flex items-center justify-between">
        <p className="text-gray-600 text-xs">{t("copyright")}</p>
        {!isEnglish && (
          <button
            onClick={switchToEnglish}
            className="text-gray-500 text-xs hover:text-gold transition-colors underline underline-offset-2 cursor-pointer"
          >
            {t("viewInEnglish")}
          </button>
        )}
      </div>
    </footer>
  );
}
