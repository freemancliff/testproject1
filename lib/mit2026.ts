// Content for /2026mit (2026 Part II). Edit here; the page renders whatever is listed.
// "Placeholder name N" entries are stand-ins until speakers are confirmed.
export const mit2026 = {
  dateLine: "Saturday, November 21, 2026",
  hours: "9:00 am – 4:00 pm",
  venue: "Wong Auditorium",
  building: "Jack C. Tang Center for Management Education (Building E51)",
  institution: "Massachusetts Institute of Technology",
  city: "Cambridge, Massachusetts",
  address: "2 Amherst Street, Cambridge, MA 02139",
  place: "Wong Auditorium, Jack C. Tang Center (E51), MIT · Cambridge, Massachusetts",
  partLabel: "Part II",
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

export type ProgramItem = { time: string; title: string; detail?: string };

export const program: ProgramItem[] = [
  { time: "9:00 – 9:15 am", title: "Welcome", detail: "Rev. Rahsaan Hall" },
  { time: "9:15 – 9:45 am", title: "Keynote", detail: "Prof. Brandon Terry" },
  { time: "9:45 – 10:00 am", title: "Break" },
  { time: "10:00 am – 12:00 pm", title: "Screening: The Alabama Solution", detail: "Followed by a Q&A with family members of the incarcerated documentarians" },
  { time: "", title: "Musical interlude", detail: "Placeholder name 1" },
  { time: "12:00 – 1:00 pm", title: "Reflection, connection, and lunch" },
  { time: "1:00 – 1:45 pm", title: "Represent Justice", detail: "Placeholder name 1 and Placeholder name 2, moderated by Placeholder name 3" },
  { time: "1:45 – 2:00 pm", title: "Break" },
  { time: "2:00 – 2:45 pm", title: "MacArthur Fellows Panel", detail: "Desmond Meade and Reuben Jonathan Miller, moderated by Rahsaan Hall" },
  { time: "2:45 – 3:00 pm", title: "Transition to groups" },
  { time: "3:00 – 3:45 pm", title: "Breakout groups", detail: "Learn, listen, and strategize in the five sessions below" },
  { time: "3:45 – 4:00 pm", title: "Closing", detail: "Placeholder name 1" },
];

export type Breakout = { title: string; leads: string[] };

export const breakouts: Breakout[] = [
  { title: "Divestment from the Carceral State", leads: ["Placeholder name 1", "Placeholder name 2"] },
  { title: "Raising a Moral Voice Against Mass Incarceration", leads: ["Placeholder name 1", "Placeholder name 2"] },
  { title: "Salvaging the Black Vote", leads: ["Rahsaan Hall", "Placeholder name 1", "Placeholder name 2"] },
  { title: "Building Networks to Tell Our Story", leads: ["Placeholder name 1", "Placeholder name 2"] },
  { title: "Education: A Spoke on the Carceral Wheel", leads: ["Placeholder name 1", "Placeholder name 2", "Placeholder name 3"] },
];

// What to expect: the three centerpieces of the day (shown as cards on /2026mit).
export const highlights = [
  {
    kicker: "10:00 am",
    title: "The Alabama Solution",
    text: "The 2026 Oscar-nominated documentary of unspeakable prison conditions in an Alabama state prison, revealed by incarcerated people at the risk of their lives. The screening is followed by a Q&A with family members of the incarcerated documentarians.",
  },
  {
    kicker: "9:15 am",
    title: "Keynote: Prof. Brandon Terry",
    text: "Co-director of the Institute on Policing, Incarceration and Public Safety at the Hutchins Center for African and African American Research at Harvard University, and author of Shattered Dreams, a poignant critique of the civil rights movement and a light on the path of the way forward.",
  },
  {
    kicker: "2:00 pm",
    title: "The MacArthur Fellows Panel",
    text: "Desmond Meade (MacArthur Fellow 2021) and Reuben Jonathan Miller (MacArthur Fellow 2022) in conversation, moderated by Rahsaan Hall, CEO of the Urban League of Eastern Massachusetts.",
  },
];

export type FeaturedPerson = { name: string; slug: string; role: string; bio?: string; photo?: string };

export const featuredPeople: FeaturedPerson[] = [
  {
    name: "Prof. Brandon Terry",
    slug: "brandon-terry",
    role: "Keynote Speaker",
    bio: "Co-director, Institute on Policing, Incarceration and Public Safety, Hutchins Center, Harvard University. Author of Shattered Dreams.",
  },
  {
    name: "Desmond Meade",
    slug: "desmond-meade",
    role: "MacArthur Fellow 2021 · Voting Rights Activist",
    bio: "When voting is not enough: 1.2 million formerly incarcerated Floridians were registered to vote and then denied access because they had not paid taxes, fines and fees.",
  },
  {
    name: "Reuben Jonathan Miller",
    slug: "reuben-jonathan-miller",
    role: "MacArthur Fellow 2022",
    bio: "Acclaimed author of Halfway Home: Race, Punishment, and the Afterlife of Mass Incarceration. Caught in “the system” at age 14, his personal and familial story reveals the reach of incarceration beyond the prison wall.",
  },
  {
    name: "Rahsaan Hall",
    slug: "rahsaan-hall",
    role: "Welcome & Panel Moderator",
    bio: "CEO of the Urban League of Eastern Massachusetts.",
    photo: "/images/speakers/rahsaan-hall.jpg",
  },
];
