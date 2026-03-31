import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "hr", "sl", "nl", "sr"],
  defaultLocale: "en",
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];
