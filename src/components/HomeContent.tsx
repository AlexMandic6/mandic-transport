import { stats, services } from "@/constants/stats-and-services";

export function HomeContent() {
  return (
    <div className="bg-[#111827]">
      {/* Stats */}
      <section className="bg-midnight px-6 md:px-12 py-14">
        <p className="text-[#c8a84b] text-[10px] uppercase tracking-widest mb-2">
          By the numbers
        </p>
        <h2 className="text-white text-2xl font-medium mb-10">
          Built on experience,
          <br />
          driven by precision.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10 border border-white/10 rounded-lg overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-midnight px-4 py-6 text-center">
              <div className="text-[#c8a84b] text-3xl font-medium leading-none">
                {stat.value}
              </div>
              <div className="text-gray-500 text-[11px] uppercase tracking-wider mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#111827] px-6 md:px-12 py-14">
        <p className="text-[#c8a84b] text-[10px] uppercase tracking-widest mb-2">
          What we do
        </p>
        <h2 className="text-white text-2xl font-medium mb-10">
          Reliable freight,
          <br />
          across every border.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-midnight border border-[#c8a84b]/20 rounded-lg p-6"
            >
              <div className="text-xl mb-3">{service.icon}</div>
              <h3 className="text-white text-sm font-medium mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
