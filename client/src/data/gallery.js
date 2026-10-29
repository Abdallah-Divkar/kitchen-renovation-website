/**
 * @typedef {Object} GalleryItem
 * @property {string} slug      Unique id, lowercase with hyphens
 * @property {string} title
 * @property {"kitchens"|"vanities"|"closets"|"countertops"} category  Used by the filter bar
 * @property {string} city      Name of a city in data/cities.js
 * @property {string} image     Path under /public, e.g. "/images/gallery/gallery-1.jpg"
 * @property {string} imageAlt
 */

/** Filter options for the gallery page. */
export const galleryCategories = [
  { value: "all", label: "All" },
  { value: "kitchens", label: "Kitchens" },
  { value: "vanities", label: "Vanities" },
  { value: "closets", label: "Closets" },
  { value: "countertops", label: "Countertops" },
];

/** @type {GalleryItem[]} */
export const galleryItems = [
  {
    slug: "modern-kitchen-toronto",
    title: "Modern Kitchen",
    category: "kitchens",
    city: "Toronto",
    image: "/images/gallery/placeholder.jpg",
    imageAlt: "Modern custom kitchen in Toronto",
  },
];

/**
 * Display label for a gallery item's category, e.g. "kitchens" → "Kitchens".
 * @param {GalleryItem["category"]} value
 */
export function getCategoryLabel(value) {
  return galleryCategories.find((c) => c.value === value)?.label ?? "";
}
