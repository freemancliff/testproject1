// Content for /2026mit. Edit here; the page renders whatever is listed.
export const mit2026 = {
  dateLine: "Saturday, November 21, 2026",
  place: "MIT Tang Auditorium · Cambridge, Massachusetts",
  hours: "9:00 am – 4:00 pm",
};

export type ProgramItem = { time: string; title: string; detail?: string };

export const program: ProgramItem[] = [
  { time: "9:00 – 9:15 am", title: "Welcome", detail: "Rev. Rahsaan Hall" },
  { time: "9:15 – 9:45 am", title: "Opening address", detail: "Rev. Brandon Terry" },
  { time: "9:45 – 10:00 am", title: "Break" },
  { time: "10:00 am – 12:00 pm", title: "Screening: The Alabama Solution" },
  { time: "", title: "Musical interlude" },
  { time: "12:00 – 1:00 pm", title: "Reflection, connection, and lunch" },
  { time: "1:00 – 1:45 pm", title: "Represent Justice", detail: "Julie Godwin and Clara Brooks, moderated by Roeshana Moore-Evans" },
  { time: "1:45 – 2:00 pm", title: "Break" },
  { time: "2:00 – 2:45 pm", title: "MacArthur Conversation", detail: "Desmond Meade and Reuben Miller, moderated by Rev. Rahsaan Hall" },
  { time: "2:45 – 3:00 pm", title: "Transition to groups" },
  { time: "3:00 – 3:45 pm", title: "Breakout groups", detail: "See the five sessions below" },
  { time: "3:45 – 4:00 pm", title: "Closing", detail: "Dr. Janet Moses" },
];

export type Breakout = { title: string; leads: string[] };

export const breakouts: Breakout[] = [
  { title: "Strategizing Divestment from the Carceral Economy", leads: ["Mariamma Hammond", "Church group divesting from Citizens Bank"] },
  { title: "Raising a Moral Voice Against Mass Incarceration", leads: ["Brandon Crowley", "Jill Harvey"] },
  { title: "Salvaging the Black Vote", leads: ["Liz Miranda", "Rahsaan Hall", "Fuquan"] },
  { title: "Building Networks to Tell Our Story", leads: ["Community youth arts groups", "Julie Godwin", "Clara Brooks"] },
  { title: "Caste Education as a Spoke on the Carceral Wheel", leads: ["Christina Thomas", "Winston Cox", "Ben Moynihan", "Cliff Freeman", "Maisha Moses", "Greg Benoit", "Young People's Project (YPP) support"] },
];

export const evening = { time: "6:00 pm", title: "Evening tribute", detail: "Honoring Omo and Maisha" };

export const featuredPeople = [
  "Rev. Brandon Terry",
  "Desmond Meade",
  "Reuben Miller",
  "Julie Godwin",
  "Clara Brooks",
  "Rev. Rahsaan Hall",
  "Roeshana Moore-Evans",
  "Dr. Janet Moses",
];
