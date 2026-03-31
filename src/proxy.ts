import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

const countryToLocale: Record<string, string> = {
  HR: "hr",
  RS: "sr",
  SI: "sl",
  NL: "nl",
  BE: "nl",
};

const handleI18nRouting = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const geo = (request as NextRequest & { geo?: { country?: string } }).geo;
  const country = geo?.country;
  const localeFromCountry = country ? countryToLocale[country] : undefined;
  const hasCookie = request.cookies.has("NEXT_LOCALE");

  if (localeFromCountry && !hasCookie) {
    request.headers.set("accept-language", localeFromCountry);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
