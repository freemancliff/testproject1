// Content for /2026mit. Edit here; the page renders whatever is listed.
export const mit2026 = {
  dateLine: "Saturday, November 21, 2026",
  hours: "9:00 am – 4:00 pm",
  venue: "Wong Auditorium",
  building: "Jack C. Tang Center for Management Education (Building E51)",
  institution: "Massachusetts Institute of Technology",
  city: "Cambridge, Massachusetts",
  place: "Wong Auditorium, Jack C. Tang Center (E51), MIT · Cambridge, Massachusetts",
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
  { time: "9:15 – 9:45 am", title: "Rev. Brandon Terry" },
  { time: "9:45 – 10:00 am", title: "Break" },
  { time: "10:00 am – 12:00 pm", title: "Screening: The Alabama Solution" },
  { time: "", title: "Musical interlude", detail: "Donna McElroy" },
  { time: "12:00 – 1:00 pm", title: "Reflection, connection, and lunch" },
  { time: "1:00 – 1:45 pm", title: "Represent Justice", detail: "Julie Godwin and Clara Brooks, moderated by Roeshana Moore-Evans" },
  { time: "1:45 – 2:00 pm", title: "Break" },
  { time: "2:00 – 2:45 pm", title: "MacArthur Conversation", detail: "Desmond Meade, Reuben Miller, and Andrea Armstrong, moderated by Rev. Rahsaan Hall" },
  { time: "2:45 – 3:00 pm", title: "Transition to groups" },
  { time: "3:00 – 3:45 pm", title: "Breakout groups", detail: "See the five sessions below" },
  { time: "3:45 – 4:00 pm", title: "Closing", detail: "Dr. Janet Moses" },
];

export type Breakout = { title: string; leads: string[] };

export const breakouts: Breakout[] = [
  { title: "Strategizing Divestment from the Carceral Economy", leads: ["Mariamma Hammond", "Church Group Divesting from Citizens Bank"] },
  { title: "Raising a Moral Voice Against Mass Incarceration", leads: ["Brandon Crowley", "Jill Harvey"] },
  { title: "Salvaging the Black Vote", leads: ["Liz Miranda", "Rahsaan Hall", "Fuquan"] },
  { title: "Building Networks to Tell Our Story", leads: ["Community Youth Arts Groups", "Julie Godwin", "Clara Brooks"] },
  { title: "Caste Education as a Spoke on the Carceral Wheel", leads: ["Christina Thomas", "Winston Cox", "Ben Moynihan", "Cliff Freeman", "Maisha Moses", "Greg Benoit", "Young People's Project (YPP) support"] },
];

export const featuredPeople = [
  "Rev. Brandon Terry",
  "Desmond Meade",
  "Reuben Miller",
  "Andrea Armstrong",
  "Julie Godwin",
  "Clara Brooks",
  "Rev. Rahsaan Hall",
  "Roeshana Moore-Evans",
  "Dr. Janet Moses",
];
