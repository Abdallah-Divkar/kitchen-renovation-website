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
 * @property {string} value         Display string, e.g. "15+"
 * @property {string} label
 */

/**
 * "Why choose us" (Home page). Reasons below are examples from the client
 * checklist; the client confirms the real 3-4.
 * @type {Reason[]}
 */
export const whyChooseUs = [
  {
    title: "Built in-house",
    description: "TODO: client to confirm (own manufacturing).",
  },
  {
    title: "Quality craftsmanship",
    description: "TODO: client to provide.",
  },
  {
    title: "On-time delivery",
    description: "TODO: client to provide.",
  },
  {
    title: "Warranty",
    description: "TODO: client to confirm warranty length.",
  },
];

/**
 * Company values (About page).
 * @type {Value[]}
 */
export const values = [
  {
    title: "Craftsmanship",
    description: "TODO: client to provide.",
  },
  {
    title: "Honesty",
    description: "TODO: client to provide.",
  },
  {
    title: "Customer first",
    description: "TODO: client to provide.",
  },
];

/**
 * Stats row (About page, possibly Home).
 * @type {Stat[]}
 */
export const stats = [
  { value: "TODO", label: "Years of experience" },
  { value: "TODO", label: "Projects completed" },
  { value: "1975", label: "Year established" }, //TODO client to confirm
  { value: "TODO", label: "Warranty" },
];
