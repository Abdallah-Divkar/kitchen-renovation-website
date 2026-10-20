/**
 * @typedef {Object} SiteInfo
 * @property {string} name         Exact business name as it appears on the site
 * @property {string} tagline
 * @property {string} phone        Display format, e.g. "(416) 555-0123"
 * @property {string} phoneHref    For tel: links, e.g. "+14165550123"
 * @property {string} whatsapp     Leave "" if same as phone
 * @property {string} email        Receives quote requests
 * @property {{street: string, city: string, province: string, postalCode: string}} address
 * @property {{days: string, hours: string}[]} hours
 * @property {{label: string, href: string}[]} social  Only keep the ones the client has
 */

/** @type {SiteInfo} */
export const site = {
    name: "TODO: Business Name",
    tagline: "TODO: client tagline",
    phone: "TODO: (000) 000-0000",
    phoneHref: "+10000000000",
    whatsapp: "",
    email: "todo@example.com",
    address: {
        street: "TODO: street address",
        city: "TODO",
        province: "ON",
        postalCode: "TODO",
    },
    hours: [
        { days: "Monday - Friday", hours: "TODO" },
        { days: "Saturday", hours: "TODO" },
        { days: "Sunday", hours: "TODO" },
    ],
    social: [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Houzz", href: "#" },
        { label: "TikTok", href: "#" },
        { label: "Google Business Profile", href: "#" },
    ],
};