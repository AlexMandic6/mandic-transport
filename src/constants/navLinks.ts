interface NavLink {
  href: string;
  key: string;
}

export const navLinks: NavLink[] = [
  { href: "/", key: "home" },
  { href: "/services", key: "services" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];
