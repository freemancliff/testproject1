export type Sponsor =
  | { kind: "logo"; name: string; href: string; src: string; imgStyle?: React.CSSProperties; plain?: boolean }
  | { kind: "text"; lines: string[]; sub?: string; serif?: boolean };

const s = (f: string) => `/images/sponsors/${f}`;
const fit = { maxWidth: "100%", height: "auto", objectFit: "contain" } as const;

export const sponsors: Sponsor[] = [
  { kind: "logo", name: "MacArthur Foundation", href: "https://www.macfound.org", src: "/images/macarthur-supported-by.webp", plain: true, imgStyle: { ...fit, mixBlendMode: "multiply" } },
  { kind: "logo", name: "Cambridge Community Foundation", href: "https://cambridgecf.org", src: s("cambridge-community-foundation.webp"), imgStyle: { maxHeight: 56 } },
  { kind: "logo", name: "Wagner Foundation", href: "https://wfound.org", src: s("wagner-foundation.webp"), imgStyle: { maxHeight: 40 } },
  { kind: "text", lines: ["The Aaronson Fund"], sub: "SOCIAL JUSTICE WORKS!", serif: true },
  { kind: "logo", name: "The Algebra Project", href: "https://algebra.org", src: s("algebra-project.jpg"), imgStyle: { maxWidth: "50%", height: "auto", objectFit: "contain" } },
  { kind: "logo", name: "The Young People's Project", href: "https://www.typp.org", src: s("young-peoples-project.webp"), imgStyle: { maxHeight: 48 } },
  { kind: "logo", name: "MIT", href: "https://web.mit.edu", src: s("mit.webp"), imgStyle: fit },
  { kind: "logo", name: "Bob Moses Research Center for Math Literacy, FIU", href: "https://mosescenter.fiu.edu", src: s("bob-moses-research-center.jpg"), imgStyle: fit },
  { kind: "logo", name: "Earl Center for Learning & Innovation, BU Wheelock", href: "https://earlcenter.bu.edu", src: s("earl-center.webp"), imgStyle: fit },
  { kind: "logo", name: "Candler School of Theology, Emory University", href: "https://candler.emory.edu/", src: s("candler.webp"), imgStyle: fit },
  { kind: "logo", name: "The Annie E. Casey Foundation", href: "https://www.aecf.org/", src: s("annie-e-casey.webp"), imgStyle: fit },
  { kind: "logo", name: "Southern Education Foundation", href: "https://southerneducation.org/", src: s("southern-education-foundation.webp"), imgStyle: fit },
  { kind: "text", lines: ["Wendy Weiss", "& Steven Shay"] },
  { kind: "text", lines: ["Amilie Ratliff"] },
  { kind: "logo", name: "The NEA Foundation", href: "https://www.neafoundation.org/", src: s("nea-foundation.jpg"), imgStyle: fit },
];

export const sponsorshipLevels = [
  { name: "Mandela", amount: "$45,000" },
  { name: "Bob Moses", amount: "$25,000" },
  { name: "Medgar Evers", amount: "$10,000" },
  { name: "Fannie Lou Hamer", amount: "$5,000" },
  { name: "Ida B. Wells", amount: "$2,500" },
];
