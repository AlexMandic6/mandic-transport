interface Stat {
  value: string;
  labelKey: string;
}

interface Service {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export const stats: Stat[] = [
  { value: "2", labelKey: "trucksLabel" },
  { value: "FTL", labelKey: "loadTypeLabel" },
  { value: "EU", labelKey: "coverageLabel" },
  { value: "24/7", labelKey: "availabilityLabel" },
];

export const services: Service[] = [
  { icon: "🚛", titleKey: "ftl.title", descriptionKey: "ftl.description" },
  {
    icon: "❄️",
    titleKey: "refrigerated.title",
    descriptionKey: "refrigerated.description",
  },
  {
    icon: "🗺️",
    titleKey: "international.title",
    descriptionKey: "international.description",
  },
];
