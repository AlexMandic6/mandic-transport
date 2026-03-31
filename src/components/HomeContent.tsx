import { stats, services } from "@/constants/stats-and-services";
import { useTranslations } from "next-intl";

export function HomeContent() {
  const tStats = useTranslations("stats");
  const tServices = useTranslations("services");

  return (
    <div className="bg-dark">
      {/* Stats */}
      <section className="bg-midnight px-6 md:px-12 py-14">
        <p className="text-gold text-[10px] uppercase tracking-widest mb-2">
          {tStats("heading")}
        </p>
        <h2 className="text-white text-2xl uppercase font-medium mb-10">
          {tStats("headingLine1")}
          <br />
          {tStats("headingLine2")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 border border-white/10 rounded-lg overflow-hidden">
          {stats.map((stat) => (
            <div
              key={stat.labelKey}
              className="bg-midnight px-4 py-6 text-center"
            >
              <div className="text-gold text-3xl font-medium leading-none">
                {stat.value}
              </div>
              <div className="text-gray-500 text-[11px] uppercase tracking-wider mt-2">
                {tStats(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-dark px-6 md:px-12 py-14">
        <p className="text-gold text-[10px] uppercase tracking-widest mb-2">
          {tServices("label")}
        </p>
        <h2 className="text-white text-2xl uppercase font-medium mb-10">
          {tServices("headingLine1")}
          <br />
          {tServices("headingLine2")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.titleKey}
              className="bg-midnight border border-gold/20 rounded-lg p-6"
            >
              <div className="text-xl mb-3">{service.icon}</div>
              <h3 className="text-white text-sm font-medium mb-2">
                {tServices(service.titleKey)}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {tServices(service.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
