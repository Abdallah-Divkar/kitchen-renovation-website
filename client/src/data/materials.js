/**
 * @typedef {Object} Material
 * @property {string} slug      Unique id, lowercase with hyphens
 * @property {string} name
 * @property {string} summary   1 sentence
 * @property {string} image     Path under /public, e.g. "/images/materials/quartz.jpg"
 * @property {string} imageAlt
 */

/** Copy for the Materials section on the Products page. */
export const materialsCopy = {
  eyebrow: "Materials",
  title: "Materials We Use",
  subtitle: "The woods, finishes and hardware behind every piece.",
};

/**
 * Wording is from Figma; the client confirms the real list.
 * @type {Material[]}
 */
export const materials = [
  {
    slug: "solid-wood",
    name: "Solid Wood",
    summary:
      "Oak, maple and walnut for doors, frames and natural wood finishes.",
    image: "/images/materials/placeholder.jpg",
    imageAlt: "Solid wood sample",
  },
  {
    slug: "painted-mdf",
    name: "Painted MDF",
    summary: "A smooth, stable base for painted shaker and flat-panel doors.",
    image: "/images/materials/placeholder.jpg",
    imageAlt: "Painted MDF sample",
  },
  {
    slug: "wood-veneer",
    name: "Wood Veneer",
    summary: "The look of real wood grain at a more accessible price.",
    image: "/images/materials/placeholder.jpg",
    imageAlt: "Wood veneer sample",
  },
  {
    slug: "high-gloss-lacquer",
    name: "High-Gloss Lacquer",
    summary: "A sleek, reflective finish for modern kitchens.",
    image: "/images/materials/placeholder.jpg",
    imageAlt: "High-gloss lacquer sample",
  },
  {
    slug: "quartz",
    name: "Quartz",
    summary: "Durable, low-maintenance countertops in many colours.",
    image: "/images/materials/placeholder.jpg",
    imageAlt: "Quartz sample",
  },
  {
    slug: "soft-close-hardware",
    name: "Soft-Close Hardware",
    summary: "Hinges and drawer runners that close quietly every time.",
    image: "/images/materials/placeholder.jpg",
    imageAlt: "Soft-close hinge",
  },
];
