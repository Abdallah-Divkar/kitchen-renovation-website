/**
 * @typedef {Object} City
 * @property {string} slug      Unique id, lowercase with hyphens
 * @property {string} name
 * @property {string} summary   1-2 sentences
 * @property {string} image     Path under /public, e.g. "/images/cities/toronto.jpg"
 * @property {string} imageAlt
 * @property {string[]} [tags]  Shown on the city card, e.g. ["Kitchens", "Cabinets"]
 */

/** @type {City[]} */
export const cities = [
  {
    slug: "toronto",
    name: "Toronto",
    summary:
      "Custom cabinetry, vanities, closets and countertops for homes and condos across Toronto.",
    image: "/images/cities/placeholder.jpg",
    imageAlt: "Toronto skyline",
    tags: ["Kitchens", "Cabinets"],
  },
  {
    slug: "markham",
    name: "Markham",
    summary:
      "Kitchen and bathroom renovations tailored to Markham homes, from design to installation.",
    image: "/images/cities/placeholder.jpg",
    imageAlt: "Markham neighbourhood",
    tags: ["Kitchens", "Cabinets"],
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    summary:
      "Quality craftsmanship and personal service for Richmond Hill homeowners.",
    image: "/images/cities/placeholder.jpg",
    imageAlt: "Richmond Hill neighbourhood",
    tags: ["Kitchens", "Cabinets"],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    summary:
      "Custom kitchens, vanities and wardrobes for Vaughan's growing communities.",
    image: "/images/cities/placeholder.jpg",
    imageAlt: "Vaughan neighbourhood",
    tags: ["Kitchens", "Cabinets"],
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    summary:
      "Renovation solutions for Scarborough homes, built to fit your space and budget.",
    image: "/images/cities/placeholder.jpg",
    imageAlt: "Scarborough neighbourhood",
    tags: ["Kitchens", "Cabinets"],
  },
];
