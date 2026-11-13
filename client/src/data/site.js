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
 * @property {string} visitNote      Shown with the showroom details
 * @property {{days: string, hours: string}[]} hours
 * @property {{label: string, href: string}[]} social  Only keep the ones the client has
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
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${address.street}, ${address.city}, ${address.province}`,
)}`;

/** @type {SiteInfo} */
export const site = {
  name: "A-One Kitchen",
  tagline: "Custom Cabinetry & Renovations",
  description:
    "Transform your home with beautifully designed custom cabinetry and expertly executed kitchen renovations.\nFrom concept and manufacturing to installation and finishing, A-One Kitchen helps bring your vision to life.",
  phone: "(647) 642-7751",
  phoneHref: "+16476427751",
  whatsapp: "", // TODO: client to confirm if WhatsApp uses the same number
  email: "todo@example.com", // TODO: client to send the quote email
  address,
  directionsUrl,
  visitNote: "Walk-ins welcome, no appointment needed",
  logo: { src: "/images/logo_1.jpeg", width: 140, height: 44 },
  hours: [
    { days: "Monday - Saturday", hours: "8 am - 7 pm" },
    { days: "Sunday", hours: "Closed" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Houzz", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "Google Business Profile", href: "#" },
  ],
};
