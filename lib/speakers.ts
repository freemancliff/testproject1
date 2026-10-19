export type Speaker = {
  name: string;
  title: string[];
  photo?: string;
  initials?: string;
};

const img = (f: string) => `/images/speakers/${f}.jpg`;

export const saturdayFellows: Speaker[] = [
  { name: "Bryan Stevenson", title: ["Founder, Equal Justice Initiative", "MacArthur Fellow 1995"], photo: img("bryan-stevenson") },
  { name: "Ellen Barry", title: ["Founder, Legal Services for Prisoners with Children", "MacArthur Fellow 1998"], photo: img("ellen-barry") },
];

export const sundayFeatured: Speaker[] = [
  { name: "William Darity Jr.", title: ["Professor of Public Policy, Duke University", "Sunday Plenary"], photo: img("william-darity") },
  { name: "Kirsten Mullen", title: ["Author & Researcher, ARTEFACTUAL", "Sunday Plenary"], photo: img("kirsten-mullen") },
  { name: "Dr. Terrence L. (Kojo) Johnson", title: ["Mary Lee Hardin Willard Dean, Candler School of Theology", "Sunday Keynote"], photo: img("terrence-johnson") },
  { name: "Tasseli McKay", title: ["Asst. Professor, UNC Social Medicine", "Sunday Plenary"], photo: img("tasseli-mckay") },
];

export type Participant = { name: string; role: string; photo?: string; initials?: string; gradient?: string };

export const participants: Participant[] = [
  { name: "Reverend Rahsaan Hall", role: "CEO, Urban League of MA · MC & Moderator", photo: img("rahsaan-hall") },
  { name: "Ben Moynihan", role: "Executive Director, The Algebra Project", photo: img("ben-moynihan") },
  { name: "Jessy Molina", role: "Molina Consulting · Conference Organizer", photo: img("jessy-molina") },
  { name: "Roeshana Moore-Evans", role: "Equity Empowerment Consulting · Conference Organizer", photo: img("roeshana-moore-evans") },
  { name: "Alex Duran", role: "Program Director, Galaxy Gives · Co-producer, The Alabama Solution", photo: img("alex-duran") },
  { name: "Dr. Melanie Hill", role: "Musician & Scholar", photo: img("melanie-hill") },
  { name: "Steven Acosta", role: "Florida International University · Student", initials: "SA", gradient: "linear-gradient(135deg,#2C2C2C 0%,#3a5c4a 100%)" },
  { name: "Micaela Zeitlin", role: "Florida International University · Student", initials: "MZ", gradient: "linear-gradient(135deg,#2C2C2C 0%,#4a3d5c 100%)" },
  { name: "Johana Velasquez", role: "Florida International University · Student", initials: "JV", gradient: "linear-gradient(135deg,#2C2C2C 0%,#5c4a3a 100%)" },
  { name: "Dean Aaron Kuntz", role: "Florida International University", photo: img("aaron-kuntz") },
  { name: "Dean Ana Luszczynska", role: "Florida International University", photo: img("ana-luszczynska") },
  { name: "Dr. Maria Lovett", role: "Florida International University", photo: img("maria-lovett") },
  { name: "Dr. Bryan Dewsbury", role: "Florida International University", photo: img("bryan-dewsbury") },
  { name: "Dr. Joan Wynne", role: "Co-Founder, Bob Moses Center/FIU", photo: img("joan-wynne") },
];
