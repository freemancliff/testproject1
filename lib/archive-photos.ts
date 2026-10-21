// Photos for past conferences. Web-sized copies live in public/media/archive/<year>/.
// To add more: run  python3 scripts/optimize_photos.py  (see the script header), then list them here.
// The year's header image is public/media/archive/<year>/hero.jpg and is picked up automatically.
import type { Photo } from "./eji-photos";

const at = (year: string, n: string, alt: string): Photo => ({ src: `/media/archive/${year}/${n}.jpg`, alt });

export const archivePhotos: Record<string, Photo[]> = {
  "2025": [
    at("2025", "01", "Attendees smiling together between sessions"),
    at("2025", "02", "Two speakers in conversation on stage between conference banners"),
    at("2025", "03", "Dancers performing on stage in front of the conference banner"),
    at("2025", "04", "A speaker at the welcome podium"),
    at("2025", "05", "A speaker addressing the audience"),
    at("2025", "06", "Three attendees smiling together"),
    at("2025", "07", "Colorful mural artwork on display"),
    at("2025", "08", "Attendees posing together and smiling"),
    at("2025", "09", "A participant speaking during a breakout discussion"),
    at("2025", "10", "Attendees sharing a laugh in a breakout session"),
    at("2025", "11", "Attendees in conversation"),
    at("2025", "12", "Two speakers in conversation on stage"),
  ],
  "2023": [
    at("2023", "01", "Young people lined up on stage as the audience looks on"),
    at("2023", "02", "Two speakers in conversation on stage"),
    at("2023", "03", "A full room listening to the program"),
    at("2023", "04", "Three attendees laughing together on a couch"),
    at("2023", "05", "Sunset over the MIT campus rooftops and Great Dome"),
    at("2023", "06", "A large group posing together on couches"),
    at("2023", "07", "Participants gathered on stage at the podium"),
    at("2023", "08", "Two attendees smiling together on stage"),
    at("2023", "09", "A group embracing on stage after the program"),
    at("2023", "10", "Attendees laughing together on stage"),
    at("2023", "11", "The hall full during a session"),
    at("2023", "12", "Two speakers in conversation"),
    at("2023", "13", "Smiling guests on stage"),
  ],
  "2024": [],
  "2022": [],
};
