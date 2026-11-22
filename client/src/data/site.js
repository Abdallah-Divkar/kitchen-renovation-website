/**
 * @typedef {Object} SiteInfo
 * @property {string} name         Exact business name as it appears on the site
 * @property {string} tagline
 * @property {string} description
 * @property {string} phone        Display format, e.g. "(416) 555-0123"
 * @property {string} phoneHref    For tel: links, e.g. "+14165550123"
 * @property {string} whatsapp     Leave "" if same as phone
 * @property {string} email        Receives quote requests
 * @property {{street: string, unit: string, city: string, province: string, postalCode: string}} address
 * @property {string} directionsUrl  Google Maps directions to the showroom
 * @property {string} mapUrl         The showroom on Google Maps
 * @property {string} mapEmbedUrl    The map shown on the Contact page
 * @property {string} visitNote      Shown with the showroom details
 * @property {{days: string, hours: string}[]} hours
 * @property {{label: string, href: string}[]} social  Only keep the ones the client has
 * @property {string} established  Year the business started, e.g. "1975". "" hides it everywhere
 * @property {string} shortDescription  One line for the footer
 * @property {string} url  Public address of the site, no trailing slash. Placeholder until the domain is chosen
 * @property {{days: string[], opens: string, closes: string}[]} openingHours  Machine-readable hours for Google. Keep in sync with hours
 */

const address = {
  street: "2200 Markham Road",
  unit: "Unit 10Z",
  city: "Scarborough",
  province: "ON",
  postalCode: "", // TODO: client to confirm
};

// Google Maps directions link. The unit is left out because Maps
// finds the building more reliably without it.
const mapQuery = encodeURIComponent(
  `${address.street}, ${address.city}, ${address.province}`,
);
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
// Opens the showroom's location on Google Maps (used by the map box on Contact)
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
// The live map on Contact. TODO: once we have the client's Google Business Profile,
// replace this with the "Share → Embed a map" link from his listing (shows his name).
const mapEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`;

// The site's own address, for the sitemap and link previews. On Vercel it fills
// itself in: the vercel.app address now, the real domain once it's connected.
const productionHost = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
const url = productionHost
  ? `https://${productionHost}`
  : "http://localhost:3000";

/** @type {SiteInfo} */
export const site = {
  name: "A-One Kitchen",
  url,
  tagline: "Custom Cabinetry & Renovations",
  shortDescription:
    "Custom cabinetry and kitchen renovations, built in-house and installed across the GTA.", // TODO: client to confirm ("built in-house")
  established: "1975", // TODO: client to confirm the year
  description:
    "Transform your home with beautifully designed custom cabinetry and expertly executed kitchen renovations.\nFrom concept and manufacturing to installation and finishing, A-One Kitchen helps bring your vision to life.",
  phone: "(647) 642-7751",
  phoneHref: "+16476427751",
  whatsapp: "", // TODO: client to confirm if WhatsApp uses the same number
  email: "todo@example.com", // TODO: client to send the quote email
  address,
  directionsUrl,
  mapUrl,
  mapEmbedUrl,
  visitNote: "Walk-ins welcome, no appointment needed",
  logo: { src: "/images/brand/aone-logo-white.svg", width: 1168, height: 386 },
  hours: [
    { days: "Monday - Saturday", hours: "8 am - 7 pm" },
    { days: "Sunday", hours: "Closed" },
  ],
  // Same hours as above, in the format Google reads. Keep the two in sync.
  openingHours: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  social: [
    { label: "Instagram", href: "#" }, // TODO: client to send real links
    { label: "Facebook", href: "#" },
  ],
};
