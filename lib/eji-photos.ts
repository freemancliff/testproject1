// Photos from the 2026 Montgomery conference (web-sized copies in public/media/2026-montgomery/day1-3).
// These images carry the photographer's own logo, so the extra caption is switched off.
// Set SHOW_CREDIT to true to print "Photo credit: Dee Sanders Photography" on every one again.
export const SHOW_CREDIT = false;
export const CREDIT = SHOW_CREDIT ? "Photo credit: Dee Sanders Photography" : "";

export type Photo = { src: string; alt: string; credit?: string };

const p = (day: 1 | 2 | 3, n: string, alt: string): Photo => ({
  src: `/media/2026-montgomery/day${day}/DSC${n}.jpg`,
  alt,
});

// Day 1 = Friday, October 2 · Day 2 = Saturday, October 3 · Day 3 = Sunday, October 4
export const friday: Photo[] = [
  p(1, "04168", "Attendees greeting one another at the Friday welcome"),
  p(1, "04179", "Guests gathering around the registration tables"),
  p(1, "04225", "Exhibit panels on voting rights history in the conference lobby"),
  p(1, "04219", "Conversation among attendees in the lobby"),
  p(1, "04250", "Attendees sharing a moment in the lobby"),
  p(1, "04374", "A full room settling in for the opening session"),
  p(1, "04419", "Panelists in conversation on stage"),
  p(1, "04431", "Panel on stage before a packed audience"),
  p(1, "04494", "A speaker addressing the room from the podium"),
];

export const saturday: Photo[] = [
  p(2, "04498", "Tables set for the Saturday dinner"),
  p(2, "04556", "Four attendees posing together at dinner"),
  p(2, "04533", "Two attendees embracing at the Saturday gathering"),
  p(2, "04598", "The ballroom full during the Saturday dinner"),
  p(2, "04651", "A violinist performing for the dinner guests"),
  p(2, "04678", "Violin performance in a purple dress"),
  p(2, "04699", "Four panelists in conversation on stage"),
  p(2, "04712", "Panelists posing together after the conversation"),
  p(2, "04753", "Three attendees smiling together at the dinner"),
];

export const sunday: Photo[] = [
  p(3, "04971", "Conference participants gathered for a group photo outside"),
  p(3, "04999", "Conference group photo at Montgomery Square"),
  p(3, "05002", "A group of attendees beneath the sculpture of hands holding the number 7053"),
  p(3, "05006", "Three attendees posing beneath the 7053 sculpture"),
  p(3, "04908", "A speaker at the podium during Sunday's program"),
  p(3, "04933", "A speaker in a red jacket answering a question"),
  p(3, "05042", "Workshop participants around a round table"),
  p(3, "05073", "Two presenters leading the Sunday session"),
  p(3, "05114", "The room standing to applaud"),
];

// Single-use picks
export const ejiHero = p(3, "04999", "Conference group photo at Montgomery Square");
export const ejiAbout = p(3, "05002", "A group of attendees beneath the sculpture of hands holding the number 7053");
export const ejiDay = {
  friday: p(1, "04175", "Two attendees in conversation at the Friday welcome"),
  saturday: p(2, "04651", "A violinist performing for the dinner guests"),
  sunday: p(3, "04971", "Conference participants gathered for a group photo outside"),
};

// Home page mosaic (first is the large tile)
export const homeGallery: Photo[] = [
  p(3, "04971", "Conference participants gathered for a group photo outside"),
  p(1, "04168", "Attendees greeting one another at the Friday welcome"),
  p(2, "04651", "A violinist performing for the dinner guests"),
  p(1, "04431", "Panel on stage before a packed audience"),
  p(3, "05114", "The room standing to applaud"),
  p(2, "04526", "Three attendees smiling together at the Saturday gathering"),
  p(2, "04712", "Panelists posing together after the conversation"),
];
