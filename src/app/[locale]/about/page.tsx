import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const fleetImages = [
  { src: "/scania-truck3.jpg", alt: "Scania truck front view" },
  { src: "/scania-truck4.jpg", alt: "Scania truck on the road" },
  { src: "/scania-truck5.jpg", alt: "Scania 500 S side view" },
];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <main className="min-h-screen bg-dark text-white">
      {/* Hero */}
      <section className="bg-midnight px-6 md:px-12 py-16 md:py-24">
        <p className="text-gold text-[10px] uppercase tracking-widest mb-3">
          {t("label")}
        </p>
        <h1 className="text-3xl md:text-4xl font-medium max-w-xl leading-snug">
          {t("heading")}{" "}
        </h1>
      </section>

      {/* Gold divider */}
      <div className="h-0.5 bg-gold" />

      {/* Story */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-[10px] uppercase tracking-widest mb-6">
            {t("backgroundLabel")}
          </p>
          <p className="text-gray-300 text-base leading-relaxed mb-4">
            {t("backgroundP1")}
          </p>
          <p className="text-gray-400 text-base leading-relaxed">
            {t("backgroundP2")}
          </p>
        </div>
      </section>

      {/* Meet the team */}
      <section className="bg-midnight px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-[10px] uppercase tracking-widest mb-6">
            {t("teamLabel")}
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
              <span className="text-gold text-2xl font-semibold">M</span>
            </div>
            <div>
              <h2 className="text-white text-lg font-medium mb-1">
                {t("teamName")}
              </h2>
              <p className="text-gold text-[10px] uppercase tracking-widest mb-4">
                Zagreb, Croatia
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t("teamDescription")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-[10px] uppercase tracking-widest mb-6">
            {t("fleetLabel")}
          </p>
          <h2 className="text-white text-2xl font-medium mb-8">
            {t("fleetHeading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fleetImages.map((image) => (
              <div
                key={image.src}
                className="relative aspect-video rounded-lg overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
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
