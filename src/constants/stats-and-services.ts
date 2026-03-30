interface Stat {
  value: string;
  label: string;
}

interface Service {
  icon: string;
  title: string;
  description: string;
}

export const stats: Stat[] = [
  { value: "2", label: "Trucks in fleet" },
  { value: "FTL", label: "Load type" },
  { value: "EU", label: "Coverage" },
  { value: "24/7", label: "Availability" },
];

export const services: Service[] = [
  {
    icon: "🚛",
    title: "Full Truckload (FTL)",
    description:
      "Dedicated full loads across Europe. Direct, efficient, on schedule.",
  },
  {
    icon: "❄️",
    title: "Refrigerated Transport",
    description:
      "Temperature-controlled cargo handled with care from pickup to delivery.",
  },
  {
    icon: "🗺️",
    title: "International Routes",
    description:
      "Regular lanes across the EU from our Zagreb base, built for reliability.",
  },
];
