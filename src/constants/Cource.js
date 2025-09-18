const baseLinks = [
  {
    text: "Foundation",
    href: "/cources/foundation",
    logo: "/Kurs-images/foundation.webp",
  },
  {
    text: "TypeScript",
    href: "/cources/typescript",
    logo: "/Kurs-images/ts.webp",
  },
  {
    text: "JavaScript",
    href: "/cources/javascript",
    logo: "/Kurs-images/js.webp",
  },
  {
    text: "React.js",
    href: "/cources/react",
    logo: "/Kurs-images/jsx.webp",
  },
  {
    text: "Vue.js",
    href: "/cources/vue",
    logo: "/Kurs-images/v.webp",
  },
  {
    text: "Angular",
    href: "/cources/angular",
    logo: "/Kurs-images/angular.webp",
  },
];

export const CourceLinks = baseLinks.map((item) => ({
  ...item,
  onClick: () => (window.location.href = item.href),
}));
