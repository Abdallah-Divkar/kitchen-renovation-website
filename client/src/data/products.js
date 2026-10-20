/**
 * @typedef {Object} Product
 * @property {string} slug      Unique id, lowercase with hyphens
 * @property {string} name
 * @property {string} summary   1-2 sentences
 * @property {string} image     Path under /public, e.g. "/images/products/cabinets.jpg"
 * @property {string} imageAlt
 */

/** @type {Product[]} */
export const products = [
  {
    slug: "custom-kitchen-cabinets",
    name: "Custom Kitchen Cabinets",
    summary:
      "Made-to-measure cabinetry designed around your space, storage needs and style. Choose your door profiles, finishes and hardware.",
    image: "/images/products/placeholder.jpg",
    imageAlt: "Custom kitchen cabinets",
  },
  {
    slug: "bathroom-vanities",
    name: "Bathroom Vanities",
    summary:
      "Stylish and functional vanities designed to maximize space and storage in your bathroom.",
    image: "/images/products/placeholder.jpg",
    imageAlt: "Bathroom vanity",
  },
];
