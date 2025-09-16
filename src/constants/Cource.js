const baseLinks = [
  {
    text: "Foundation",
    href: "/cources/foundation",
    logo: "public/Kurs-images/foundation.webp",
  },
  {
    text: "TypeScript",
    href: "/cources/typescript",
    logo: "public/Kurs-images/ts.webp",
  },
  {
    text: "JavaScript",
    href: "/cources/javascript",
    logo: "public/Kurs-images/js.webp",
  },
  {
    text: "React.js",
    href: "/cources/react",
    logo: "public/Kurs-images/jsx.webp",
  },
  {
    text: "Vue.js",
    href: "/cources/vue",
    logo: "public/Kurs-images/v.webp",
  },
  {
    text: "Angular",
    href: "/cources/angular",
    logo: "public/Kurs-images/angular.webp",
  },
];

export const CourceLinks = baseLinks.map((item) => ({
  ...item,
  onClick: () => (window.location.href = item.href),
}));
