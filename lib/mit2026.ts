// Content for /2026mit (2026 Part II). Edit here; the page renders whatever is listed.
export const mit2026 = {
  dateLine: "Saturday, November 21, 2026",
  hours: "9:00 am – 4:30 pm",
  venue: "Wong Auditorium",
  building: "Jack C. Tang Center for Management Education (Building E51)",
  institution: "Massachusetts Institute of Technology",
  city: "Cambridge, Massachusetts",
  address: "2 Amherst Street, Cambridge, MA 02139",
  place: "Wong Auditorium, Jack C. Tang Center (E51), MIT · Cambridge, Massachusetts",
  partLabel: "Part II",
  admission: "Free to attend",
  brandTitle: "Remaking America: The Work Before Us",
  tagline: "Celebrating the 45th Anniversary of the MacArthur Fellows Program",
};

// ── Registration (page: /register, saves to Mailchimp) ──
// Flip to false to close registration: buttons switch to "Registration Opening Soon"
// and the form is disabled.
export const MIT_REGISTRATION_OPEN = true;

// Mailchimp tag applied to every MIT registrant so you can email just them or
// trigger a confirmation email. Find the number in Mailchimp: Audience > Signup forms >
// Embedded forms, then copy the value of the hidden input named "tags".
// Leave "" to register people without a tag.
export const MIT_MAILCHIMP_TAG_ID = "";

// Mailchimp field "bmc2026mit" (radio button, one choice: "I confirm"), merge tag MMERGE17.
// Everyone who ticks the confirmation box and submits gets "I confirm" saved in it, so a
// segment of "bmc2026mit is I confirm" is exactly the MIT 2026 registrants.
// The value must match the radio choice's text exactly (including capital I).
export const MIT_EVENT_FIELD = { tag: "MMERGE17", value: "I confirm" };

export type ProgramItem = {
  time: string;
  title: string;
  detail?: string;
  note?: string;
  kind?: "break" | "feature" | "macarthur";
};

// Matches the Part II agenda. "macarthur" rows get the purple featured underlay.
export const program: ProgramItem[] = [
  { time: "9:00 – 9:15 am", title: "Welcome", detail: "Rev. Rahsaan Hall" },
  { time: "9:15 – 9:45 am", title: "Keynote", detail: "Prof. Brandon Terry", kind: "feature" },
  { time: "9:45 – 10:00 am", title: "Break", kind: "break" },
  { time: "10:00 am – 12:00 pm", title: "The Alabama Solution screening", kind: "feature" },
  { time: "12:00 – 12:15 pm", title: "Musical Interlude" },
  { time: "12:15 – 12:45 pm", title: "Lunch & Reflection" },
  { time: "12:45 – 1:30 pm", title: "Fireside Chat", detail: "Clara Brooks and Julie Godwin, moderated by Roeshana Moore-Evans", kind: "feature" },
  { time: "1:30 – 1:45 pm", title: "Break", kind: "break" },
  { time: "1:45 – 2:45 pm", title: "MacArthur Conversation", detail: "Desmond Meade and Reuben Miller, moderated by Rev. Rahsaan Hall", note: "A short MacArthur film plays right before the conversation.", kind: "macarthur" },
  { time: "2:45 – 3:00 pm", title: "Transition to Groups", kind: "break" },
  { time: "3:00 – 4:00 pm", title: "Breakout Groups", detail: "Learn, listen, and strategize in five working sessions" },
  { time: "4:00 – 4:15 pm", title: "Transition", kind: "break" },
  { time: "4:15 – 4:30 pm", title: "Closing Remarks", detail: "Dr. Janet Moses" },
];

// Breakout group names only (no leaders listed, by decision).
export const breakouts: string[] = [
  "Strategizing Divestment from the Carceral Economy",
  "Raising a Moral Voice Against Mass Incarceration",
  "Salvaging the Black Vote",
  "Building Networks to Tell Our Story",
  "Caste Education as a Spoke on the Carceral Wheel",
];

// What to expect: the centerpieces of the day, in time order (cards on /2026mit).
export const highlights = [
  {
    kicker: "9:15 am",
    title: "Keynote: Prof. Brandon Terry",
    text: "Co-director of the Institute on Policing, Incarceration and Public Safety at the Hutchins Center for African and African American Research at Harvard University, and author of Shattered Dreams, a poignant critique of the civil rights movement and a light on the path of the way forward.",
  },
  {
    kicker: "10:00 am",
    title: "The Alabama Solution",
    text: "The 2026 Oscar-nominated documentary of unspeakable prison conditions in an Alabama state prison, revealed by incarcerated people at the risk of their lives.",
  },
  {
    kicker: "12:45 pm",
    title: "Fireside Chat",
    text: "A conversation with Clara Brooks and Julie Godwin, family members of the incarcerated documentarians, moderated by Roeshana Moore-Evans.",
  },
  {
    kicker: "1:45 pm",
    title: "MacArthur Conversation",
    text: "Desmond Meade (MacArthur Fellow 2021) and Reuben Jonathan Miller (MacArthur Fellow 2022) in conversation, moderated by Rev. Rahsaan Hall, CEO of the Urban League of Eastern Massachusetts. A short MacArthur film plays right before.",
    accent: "macarthur" as const,
  },
];

// Speakers and Facilitators: name + title only. Add a title when you have it (leave "" for none).
export type FeaturedPerson = { name: string; slug: string; title: string; photo?: string };

export const featuredPeople: FeaturedPerson[] = [
  { name: "Prof. Brandon Terry", slug: "brandon-terry", title: "Co-director, Institute on Policing, Incarceration and Public Safety, Hutchins Center, Harvard University" },
  { name: "Desmond Meade", slug: "desmond-meade", title: "MacArthur Fellow 2021 · Voting Rights Activist" },
  { name: "Reuben Jonathan Miller", slug: "reuben-jonathan-miller", title: "MacArthur Fellow 2022 · Author of Halfway Home" },
  { name: "Rev. Rahsaan Hall", slug: "rahsaan-hall", title: "CEO, Urban League of Eastern Massachusetts", photo: "/images/speakers/rahsaan-hall.jpg" },
  { name: "Clara Brooks", slug: "clara-brooks", title: "" },
  { name: "Julie Godwin", slug: "julie-godwin", title: "" },
  { name: "Roeshana Moore-Evans", slug: "roeshana-moore-evans", title: "Equity Empowerment Consulting", photo: "/images/speakers/roeshana-moore-evans.jpg" },
  { name: "Dr. Janet Moses", slug: "janet-moses", title: "" },
];
