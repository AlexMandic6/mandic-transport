import { useTranslations } from "next-intl";

export default function FleetHeading() {
  const t = useTranslations("home");

  return (
    <div className="w-full bg-black px-6 pt-16 pb-10 md:px-16">
      <p className="text-red text-xs tracking-[0.3em] uppercase font-medium mb-4">
        {t("heading")}
      </p>
      <h2 className="text-white text-4xl md:text-6xl font-black uppercase leading-none tracking-tight max-w-2xl">
        {t("hero")}
      </h2>
      <p className="text-white/50 text-sm md:text-base font-light mt-5 max-w-lg leading-relaxed">
        {t("heroSub")}
      </p>
    </div>
  );
}
