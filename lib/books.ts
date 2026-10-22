// The Bob Moses Legacy Conference Bookstore.
// To add a book: copy a line, change the fields. For Amazon books set `asin` (the 10-character
// code in the Amazon link after /dp/) and the site builds a clean link with your affiliate tag.
// Books without an `asin` or `url` get a tagged Amazon search link automatically.
// To show a cover, drop a picture at public/media/books/<slug>.jpg (any common format).
import { amazonSearchUrl } from "./affiliate";

export type Category = "Mass Incarceration & Policing" | "Reparations & Wealth" | "History & Reconstruction" | "Race, Law & Voting" | "Education";

export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  category: Category;
  years: (2023 | 2024)[];     // which pop-up bookstore featured it (empty = added later)
  asin?: string;              // Amazon product id
  url?: string;               // any other store / publisher page
  featured?: boolean;         // pinned to the top of every list (the Moses family books)
  note?: string;              // short line under the author, e.g. "Forthcoming December 2026"
};

const books: Book[] = [
  // ── The Moses family books: always listed first ──
  { slug: "radical-equations-clean", title: "Radical Equations", subtitle: "Civil Rights from Mississippi to the Algebra Project", author: "Robert P. Moses and Charles E. Cobb Jr.", category: "Education", years: [], asin: "0807031275", featured: true },
  { slug: "the-white-peril", title: "The White Peril", subtitle: "A Family Memoir", author: "Omo Moses", category: "Race, Law & Voting", years: [], asin: "0807021520", featured: true },

  // ── Mass Incarceration & Policing ──
  { slug: "the-new-jim-crow", title: "The New Jim Crow", subtitle: "Mass Incarceration in the Age of Colorblindness", author: "Michelle Alexander", category: "Mass Incarceration & Policing", years: [2023, 2024], asin: "1620971933" },
  { slug: "america-on-fire", title: "America on Fire", subtitle: "The Untold History of Policing and Protest", author: "Elizabeth Hinton", category: "Mass Incarceration & Policing", years: [2024], url: "https://wwnorton.com/books/america-on-fire" },
  { slug: "from-the-war-on-poverty-to-the-war-on-crime", title: "From the War on Poverty to the War on Crime", author: "Elizabeth Hinton", category: "Mass Incarceration & Policing", years: [2024], url: "https://www.hup.harvard.edu/books/9780674979826" },
  { slug: "locking-up-our-own", title: "Locking Up Our Own", subtitle: "Crime and Punishment in Black America", author: "James Forman Jr.", category: "Mass Incarceration & Policing", years: [2023, 2024], url: "https://www.barnesandnoble.com/w/locking-up-our-own-james-forman/1123909577?ean=9780374712907" },
  { slug: "city-of-inmates", title: "City of Inmates", subtitle: "Conquest, Rebellion, and the Rise of Human Caging in Los Angeles, 1771–1965", author: "Kelly Lytle Hernández", category: "Mass Incarceration & Policing", years: [2023, 2024], asin: "1469659190" },
  { slug: "holding-on", title: "Holding On", subtitle: "Family and Fatherhood during Incarceration and Reentry", author: "Tasseli McKay", category: "Mass Incarceration & Policing", years: [2024], url: "https://www.ucpress.edu/book/9780520305250/holding-on" },
  { slug: "the-growth-of-incarceration-in-the-united-states", title: "The Growth of Incarceration in the United States", subtitle: "Exploring Causes and Consequences", author: "National Research Council (Khalil Gibran Muhammad, contributor)", category: "Mass Incarceration & Policing", years: [2023], url: "https://www.thriftbooks.com/w/the-growth-of-incarceration-in-the-united-states-exploring-causes-and-consequences_national-research-council_committee-on-law-and-justice/13617135/item/18992364/" },
  { slug: "the-geographies-of-threat", title: "The Geographies of Threat and the Production of Violence", author: "Rasul A. Mowatt", category: "Mass Incarceration & Policing", years: [2023, 2024], asin: "B09G5KW6JT" },
  { slug: "the-condemnation-of-blackness", title: "The Condemnation of Blackness", subtitle: "Race, Crime, and the Making of Modern Urban America", author: "Khalil Gibran Muhammad", category: "Mass Incarceration & Policing", years: [2023, 2024], asin: "0674238141" },
  { slug: "stolen-wealth-hidden-power", title: "Stolen Wealth, Hidden Power", subtitle: "The Case for Reparations for Mass Incarceration", author: "Tasseli McKay", category: "Mass Incarceration & Policing", years: [2024], url: "https://www.ucpress.edu/book/9780520389465/stolen-wealth-hidden-power" },

  // ── Reparations & Wealth ──
  { slug: "from-here-to-equality", title: "From Here to Equality", subtitle: "Reparations for Black Americans in the Twenty-First Century (Second Edition)", author: "William A. Darity Jr. and A. Kirsten Mullen", category: "Reparations & Wealth", years: [2023, 2024], url: "https://uncpress.org/book/9781469671208/from-here-to-equality-second-edition/" },
  { slug: "the-black-reparations-project", title: "The Black Reparations Project", subtitle: "A Handbook for Racial Justice", author: "William A. Darity Jr.", category: "Reparations & Wealth", years: [2024], url: "https://www.ucpress.edu/book/9780520383814/the-black-reparations-project" },
  { slug: "the-color-of-wealth", title: "The Color of Wealth", subtitle: "The Story Behind the U.S. Racial Wealth Divide", author: "Bárbara Robles and co-authors", category: "Reparations & Wealth", years: [2023], asin: "1595580042" },

  // ── History & Reconstruction ──
  { slug: "slavery-by-another-name", title: "Slavery by Another Name", subtitle: "The Re-Enslavement of Black Americans from the Civil War to World War II", author: "Douglas A. Blackmon", category: "History & Reconstruction", years: [2023, 2024], asin: "0385722702" },
  { slug: "redemption", title: "Redemption", subtitle: "The Last Battle of the Civil War", author: "Nicholas Lemann", category: "History & Reconstruction", years: [2023, 2024], asin: "0374248559" },
  { slug: "the-promised-land", title: "The Promised Land", subtitle: "The Great Black Migration and How It Changed America", author: "Nicholas Lemann", category: "History & Reconstruction", years: [2023], asin: "0679733477" },
  { slug: "how-the-word-is-passed", title: "How the Word Is Passed", subtitle: "A Reckoning with the History of Slavery Across America", author: "Clint Smith", category: "History & Reconstruction", years: [2023], asin: "0316278742" },
  { slug: "by-hands-now-known", title: "By Hands Now Known", subtitle: "Jim Crow's Legal Executioners", author: "Margaret A. Burnham", category: "History & Reconstruction", years: [2023, 2024], asin: "0393867854" },
  { slug: "the-fierce-urgency-of-now", title: "The Fierce Urgency of Now", subtitle: "Lyndon Johnson, Congress, and the Battle for the Great Society", author: "Julian E. Zelizer", category: "History & Reconstruction", years: [2024], asin: "0143128019" },
  { slug: "du-bois-data-portraits", title: "W.E.B. Du Bois's Data Portraits", subtitle: "Visualizing Black America", author: "W.E.B. Du Bois", category: "History & Reconstruction", years: [2023], asin: "1616897066" },
  { slug: "the-big-test", title: "The Big Test", subtitle: "The Secret History of the American Meritocracy", author: "Nicholas Lemann", category: "History & Reconstruction", years: [2023], asin: "0374527512" },
  { slug: "reckoning-with-our-roots", title: "Reckoning with Our Roots", subtitle: "Unearthing Injustice to Find Our Way Home", author: "Joan T. Wynne", category: "History & Reconstruction", years: [2023], asin: "1524977756" },

  // ── Race, Law & Voting ──
  { slug: "caste", title: "Caste", subtitle: "The Origins of Our Discontents", author: "Isabel Wilkerson", category: "Race, Law & Voting", years: [2023, 2024], asin: "0593230256" },
  { slug: "faces-at-the-bottom-of-the-well", title: "Faces at the Bottom of the Well", subtitle: "The Permanence of Racism", author: "Derrick Bell", category: "Race, Law & Voting", years: [2023], asin: "1541645537" },
  { slug: "keeping-faith-with-the-constitution", title: "Keeping Faith with the Constitution", author: "Goodwin Liu, Pamela S. Karlan, and Christopher H. Schroeder", category: "Race, Law & Voting", years: [2023, 2024], url: "https://www.barnesandnoble.com/w/keeping-faith-with-the-constitution-goodwin-liu/1103373843?ean=9780199752836" },
  { slug: "let-my-people-vote", title: "Let My People Vote", subtitle: "My Battle to Restore the Civil Rights of Returning Citizens", author: "Desmond Meade", category: "Race, Law & Voting", years: [2023] },

  // ── Education ──
  { slug: "a-born-teacher", title: "A Born Teacher", subtitle: "The Making of a Black Community School in Texas", author: "Avis Ann Mullen and Kirsten Mullen", category: "Education", years: [], url: "https://www.ttupress.org/9781682833216/a-born-teacher/", note: "Forthcoming, December 2026" },
  { slug: "quality-education-as-a-constitutional-right", title: "Quality Education as a Constitutional Right", subtitle: "Creating a Grassroots Movement to Transform Public Schools", author: "Robert P. Moses, Ernesto Cortés Jr., Lisa Delpit, Theresa Perry, and others", category: "Education", years: [], asin: "0807032824" },
  { slug: "punished-for-dreaming", title: "Punished for Dreaming", subtitle: "How School Reform Harms Black Children and How We Heal", author: "Bettina Love", category: "Education", years: [2024] },
  { slug: "we-want-to-do-more-than-survive", title: "We Want to Do More Than Survive", subtitle: "Abolitionist Teaching and the Pursuit of Educational Freedom", author: "Bettina Love", category: "Education", years: [2024] },
  { slug: "the-education-of-blacks-in-the-south", title: "The Education of Blacks in the South, 1860–1935", author: "James D. Anderson", category: "Education", years: [2023, 2024], asin: "0807842214" },
];

// Each book's final link: Amazon (by id) > the publisher/store link > a tagged Amazon search.
export const catalog = [...books].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)).map((b) => ({
  ...b,
  link: b.asin ? `https://www.amazon.com/dp/${b.asin}` : b.url ?? amazonSearchUrl(`${b.title} ${b.author.split(" and ")[0]}`),
}));

export const categories: Category[] = ["Mass Incarceration & Policing", "Reparations & Wealth", "History & Reconstruction", "Race, Law & Voting", "Education"];

// Articles and resources shared at the pop-up bookstores (free to read).
export type Resource = { title: string; by: string; source: string; url: string };
export const resources: Resource[] = [
  { title: "Ten Things We Get Wrong about Reparations", by: "A. Kirsten Mullen and William A. Darity Jr.", source: "Rolling Stone, June 19, 2021", url: "https://www.rollingstone.com/culture/culture-commentary/juneteenth-reparations-misconceptions-1186060/" },
  { title: "On direct payments to close the racial-wealth gap", by: "William Darity and A. Kirsten Mullen", source: "The Economist, May 18, 2021", url: "https://www.economist.com/by-invitation/2021/05/18/william-darity-and-a-kirsten-mullen-on-direct-payments-to-close-the-racial-wealth-gap" },
  { title: "Why It's Time to Pay Reparations to Black Americans", by: "William Darity Jr. and A. Kirsten Mullen", source: "Institute for Research on Poverty, UW–Madison", url: "https://www.irp.wisc.edu/resource/william-darity-jr-and-kirsten-mullen-on-why-its-time-to-pay-reparations-to-black-americans/" },
  { title: "America Needs a Better Reparations Plan", by: "A. Kirsten Mullen", source: "Bloomberg Opinion, May 20, 2022", url: "https://www.bloomberg.com/opinion/articles/2022-05-20/america-needs-a-better-reparations-plan-a-kirsten-mullen" },
  { title: "Resurrecting the Promise of 40 Acres: The Imperative of Reparations for Black Americans", by: "A. Kirsten Mullen and William A. Darity Jr.", source: "Report for the Roosevelt Institute", url: "https://rooseveltinstitute.org/publications/resurrecting-the-promise-of-40-acres-the-imperative-of-reparations-for-black-americans/" },
  { title: "The Queen Mother", by: "A. Kirsten Mullen", source: "Vanity Fair, November 2022", url: "https://archive.vanityfair.com/article/2022/11/the-queen-mother" },
  { title: "Data Science for Social Impact in Higher Education: First Steps", by: "Nathan Alexander", source: "data.org playbook", url: "https://data.org/playbooks/data-science-for-social-impact-in-higher-education/" },
  { title: "Art Exhibit by Victor Quiñonez", by: "Victor Quiñonez", source: "Virtual tour (Matterport)", url: "https://matterport.com/discover/space/PYdAwHMYEPT" },
  { title: "Art for Justice: Agnes Gund's grants on mass incarceration", by: "The Art Newspaper", source: "The Art Newspaper, May 25, 2023", url: "https://www.theartnewspaper.com/2023/05/25/art-for-justice-agnes-gund-grants-mass-incarceration" },
];
