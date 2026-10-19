export const SITE = {
  name: "Bob Moses Legacy Conference",
  edition: "The 5th Annual Bob Moses Legacy Conference",
  title: "Remaking America: The Work Before Us",
  dates: "October 2–4, 2026",
  location: "Montgomery, Alabama",
  venue: "Equal Justice Initiative Legacy Sites",
  shareUrl: "https://www.bobmosesfund.org/thebobmosesconference",
  agendaUrl: "https://bobmosesconference.com/bmc2026",
  donateUrl: "https://cambridge.fcsuite.com/erp/donate/create/fund?funit_id=1627",
  hotelUrl:
    "https://be.synxis.com/?adult=1&arrive=2026-10-02&chain=10237&child=0&currency=USD&depart=2026-10-04&group=261002BMLC&hotel=48509&level=hotel&locale=en-US&productcurrency=USD&rooms=1",
  youtubeId: "2OyrE8G7Ias",
  channelUrl: "https://www.youtube.com/@BobMosesLegacy",
} as const;

// Flip to true to reopen registration: re-enables the hero/footer buttons,
// the sticky bar button, and the Mailchimp-backed form on /register.
export const REGISTRATION_OPEN = false;

// Mailchimp list the registration form posts to (same list as the Wix embed).
export const MAILCHIMP = {
  base: "https://bobmosesfund.us11.list-manage.com/subscribe/post-json?u=b0bc29ba55c50742e570559dc&id=f3b12d815d&f_id=002fc6e3f0",
};
