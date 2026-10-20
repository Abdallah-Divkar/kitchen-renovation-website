/**
 * @typedef {Object} Project
 * @property {string} slug      Unique id, lowercase with hyphens
 * @property {string} title
 * @property {"kitchens"|"vanities"|"closets"|"countertops"} category  Used by the filter bar
 * @property {string} city      Name of a city in data/cities.js
 * @property {string} image     Path under /public, e.g. "/images/projects/project-1.jpg"
 * @property {string} imageAlt
 */

/** Filter options for the projects page. */
export const projectCategories = [
  { value: "all", label: "All" },
  { value: "kitchens", label: "Kitchens" },
  { value: "vanities", label: "Vanities" },
  { value: "closets", label: "Closets" },
  { value: "countertops", label: "Countertops" },
];

/** @type {Project[]} */
export const projects = [
  {
    slug: "modern-kitchen-toronto",
    title: "Modern Kitchen",
    category: "kitchens",
    city: "Toronto",
    image: "/images/projects/placeholder.jpg",
    imageAlt: "Modern custom kitchen in Toronto",
  },
];
