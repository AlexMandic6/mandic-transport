import Link from "next/link";

const services = [
  {
    icon: "🚛",
    title: "Full Truckload (FTL)",
    description:
      "We offer dedicated full truckload transport across Europe. Your cargo gets its own truck — no sharing, no stops, no delays. Ideal for time-sensitive or high-volume shipments that need to move fast and arrive intact.",
  },
  {
    icon: "❄️",
    title: "Refrigerated Transport",
    description:
      "Our refrigerated vehicles maintain precise temperature conditions throughout the entire journey. Whether you're shipping food, pharmaceuticals, or other perishables, we ensure your cargo arrives in perfect condition.",
  },
  {
    icon: "🗺️",
    title: "International Routes",
    description:
      "Operating from our Zagreb base, we run regular lanes across the European Union. With experience navigating cross-border logistics, customs, and documentation, we keep your freight moving without friction.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-dark text-white">
      {/* Hero */}
      <section className="bg-midnight px-6 md:px-12 py-16 md:py-24">
        <p className="text-gold text-[10px] uppercase tracking-widest mb-3">
          What we offer
        </p>
        <h1 className="text-3xl md:text-4xl font-medium max-w-xl leading-snug">
          Freight solutions built for the long haul.
        </h1>
      </section>

      {/* Gold divider */}
      <div className="h-0.5 bg-gold" />

      {/* Services */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-midnight border border-gold/20 rounded-lg p-8 flex flex-col md:flex-row gap-6"
            >
              <div className="text-4xl">{service.icon}</div>
              <div>
                <h2 className="text-white text-lg font-medium mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            Need a custom solution? We&apos;re happy to discuss your
            requirements.
          </p>
          <Link
            href="/contact"
            className="border border-gold text-gold hover:bg-gold hover:text-midnight px-5 py-2 rounded text-sm font-semibold transition-colors whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
