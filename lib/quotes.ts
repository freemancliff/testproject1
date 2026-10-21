// Pull-quotes shown in the "Voices" band on the home page.
// Add as many as you like; the band shows up to the first six.
// Leave the list empty to hide the band on the live site (dev shows sample cards).
export type Quote = { text: string; author: string; role?: string };

export const quotes: Quote[] = [
  // { text: "Your quote goes here.", author: "Name", role: "Title, Organization" },
];
