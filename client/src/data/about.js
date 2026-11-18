import { cities } from "./cities";

/**
 * @typedef {Object} Reason
 * @property {string} title
 * @property {string} description   1 sentence
 */

/**
 * @typedef {Object} Value
 * @property {string} title
 * @property {string} description   1 sentence
 */

/**
 * @typedef {Object} Stat
 * @property {string} value         Display string, e.g. "15+". "TODO" hides the stat.
 * @property {string} label
 */

/** Copy used only by the About page. Business details come from site.js. */
export const aboutCopy = {
  story: {
    eyebrow: "Our story",
    title: "Built in our own workshop",
    // TODO: client to provide the real story
    text: "How the business started, what we specialize in and what makes us different: in-house manufacturing, attention to detail and customer care.",
    image: "/images/workshop/placeholder.jpg",
    imageAlt: "Owner or team photo",
  },
  whyChooseUs: {
    eyebrow: "Why A-One",
    title: "Why Choose Us",
    subtitle: "What clients get when they work with us.",
  },
  values: {
    eyebrow: "Our values",
    title: "What We Stand For",
    subtitle: "Three things we never compromise on.",
  },
  showroom: {
    eyebrow: "Visit us",
    title: "See it in person",
    image: "/images/showroom/placeholder.jpg",
    imageAlt: "Our showroom",
  },
};

/**
 * Why choose us (About page). Wording is from Figma; the client confirms
 * the real 3-4 reasons.
 * @type {Reason[]}
 */
export const whyChooseUs = [
  {
    title: "In-House Manufacturing",
    // TODO: client to confirm (own manufacturing)
    description:
      "We build our own cabinets, so we control quality and timelines.",
  },
  {
    title: "Quality Materials",
    // TODO: client to confirm
    description: "Durable materials and finishes chosen to last.",
  },
  {
    title: "Years of Experience",
    // TODO: client to confirm years and wording
    description: "Kitchens designed, built and installed across the GTA.",
  },
  {
    title: "Clear Process",
    // TODO: client to confirm
    description: "Transparent quotes and timelines from start to finish.",
  },
];

/**
 * Company values (About page). Wording is from Figma; the client confirms.
 * @type {Value[]}
 */
export const values = [
  {
    title: "Craftsmanship",
    description: "Every cabinet is built with care and precision.",
  },
  {
    title: "Honesty",
    description: "Clear quotes, clear timelines, no surprises.",
  },
  {
    title: "Customer First",
    description: "We design around how you live and cook.",
  },
];

/**
 * Stats row (About page). A value of "TODO" hides that stat, so the page
 * never shows placeholder numbers. The year established is site.established.
 * @type {Stat[]}
 */
export const stats = [
  { value: "TODO", label: "Years of experience" },
  { value: "TODO", label: "Kitchens completed" },
  { value: String(cities.length), label: "GTA cities served" },
  { value: "TODO", label: "Built in-house" }, // Figma shows "100%": client must confirm first
];
