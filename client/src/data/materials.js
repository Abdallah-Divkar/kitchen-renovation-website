/**
 * @typedef {Object} Material
 * @property {string} slug      Unique id, lowercase with hyphens
 * @property {string} name
 * @property {string} summary   1-2 sentences
 * @property {string} image     Path under /public, e.g. "/images/materials/quartz.jpg"
 * @property {string} imageAlt
 */

/** @type {Material[]} */
export const materials = [
  {
    slug: "quartz",
    name: "Quartz",
    summary:
      "Non-porous, low-maintenance engineered stone available in a wide range of colours and patterns.",
    image: "/images/materials/placeholder.jpg",
    imageAlt: "Quartz countertop sample",
  },
  {
    slug: "granite",
    name: "Granite",
    summary:
      "Natural stone with unique veining, highly resistant to heat and scratches.",
    image: "/images/materials/placeholder.jpg",
    imageAlt: "Granite countertop sample",
  },
  {
    slug: "solid-wood",
    name: "Solid Wood",
    summary:
      "Classic, durable hardwood for cabinet doors and frames with a warm, natural look.",
    image: "/images/materials/placeholder.jpg",
    imageAlt: "Solid wood cabinet sample",
  },
  {
    slug: "plywood",
    name: "Plywood",
    summary:
      "Strong, moisture-resistant cabinet boxes built to last for years.",
    image: "/images/materials/placeholder.jpg",
    imageAlt: "Plywood cabinet box",
  },
  {
    slug: "melamine",
    name: "Melamine",
    summary:
      "Affordable, easy-to-clean finish that works well for closets and modern cabinetry.",
    image: "/images/materials/placeholder.jpg",
    imageAlt: "Melamine panel sample",
  },
];
