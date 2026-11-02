/**
 * @typedef {Object} GalleryItem
 * @property {string} slug      Unique id, lowercase with hyphens
 * @property {string} title
 * @property {"kitchens"|"vanities"|"closets"|"countertops"} category  Used by the filter bar
 * @property {string} city      Name of a city in data/cities.js
 * @property {string} image     Path under /public, e.g. "/images/gallery/gallery-1.jpg"
 * @property {string} imageAlt
 * @property {boolean} [featured]  Shown in the Featured Gallery on Home
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
    featured: true,
  },
  {
    slug: "spa-vanity-markham",
    title: "Spa-Style Vanity",
    category: "vanities",
    city: "Markham",
    image: "/images/gallery/placeholder.jpg",
    imageAlt: "Custom bathroom vanity in Markham",
    featured: true,
  },
  {
    slug: "walk-in-closet-richmond-hill",
    title: "Walk-In Closet",
    category: "closets",
    city: "Richmond Hill",
    image: "/images/gallery/placeholder.jpg",
    imageAlt: "Custom walk-in closet in Richmond Hill",
    featured: true,
  },
  {
    slug: "quartz-countertops-vaughan",
    title: "Quartz Countertops",
    category: "countertops",
    city: "Vaughan",
    image: "/images/gallery/placeholder.jpg",
    imageAlt: "Custom quartz kitchen countertops in Vaughan",
    featured: true,
  },
  {
    slug: "shaker-kitchen-scarborough",
    title: "Shaker Kitchen",
    category: "kitchens",
    city: "Scarborough",
    image: "/images/gallery/placeholder.jpg",
    imageAlt: "Shaker style kitchen in Scarborough",
    featured: true,
  },
  {
    slug: "floating-vanity-toronto",
    title: "Floating Vanity",
    category: "vanities",
    city: "Toronto",
    image: "/images/gallery/placeholder.jpg",
    imageAlt: "Floating bathroom vanity in Toronto",
    featured: true,
  },
  {
    slug: "traditional-kitchen-scarborough",
    title: "Traditional Kitchen",
    category: "kitchens",
    city: "Scarborough",
    image: "/images/gallery/placeholder.jpg",
    imageAlt: "Traditional custom kitchen in Scarborough",
  },
];

/**
 * Display label for a gallery item's category, e.g. "kitchens" → "Kitchens".
 * @param {GalleryItem["category"]} value
 */
export function getCategoryLabel(value) {
  return galleryCategories.find((c) => c.value === value)?.label ?? "";
}
