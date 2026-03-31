import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const serviceKeys = [
  { key: "ftl", icon: "🚛" },
  { key: "refrigerated", icon: "❄️" },
  { key: "international", icon: "🗺️" },
] as const;

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <main className="min-h-screen bg-dark text-white">
      {/* Hero */}
      <section className="bg-midnight px-6 md:px-12 py-16 md:py-24">
        <p className="text-gold text-[10px] uppercase tracking-widest mb-3">
          {t("label")}
        </p>
        <h1 className="text-3xl md:text-4xl font-medium max-w-xl leading-snug">
          {t("headingLine1")} <br /> {t("headingLine2")}
        </h1>
      </section>

      {/* Gold divider */}
      <div className="h-0.5 bg-gold" />

      {/* Services */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {serviceKeys.map((serviceKey) => (
            <div
              key={serviceKey.key}
              className="bg-midnight border border-gold/20 rounded-lg p-8 flex flex-col md:flex-row gap-6"
            >
              <div className="text-4xl">{serviceKey.icon}</div>
              <div>
                <h2 className="text-white text-lg font-medium mb-3">
                  {t(`${serviceKey.key}.title`)}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t(`${serviceKey.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">{t("cta")}</p>
          <Link
            href="/contact"
            className="border border-gold text-gold hover:bg-gold hover:text-midnight px-5 py-2 rounded text-sm font-semibold transition-colors whitespace-nowrap"
          >
            {t("ctaBtn")}
          </Link>
        </div>
      </section>
    </main>
  );
}
