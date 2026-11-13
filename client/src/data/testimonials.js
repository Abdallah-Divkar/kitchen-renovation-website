/**
 * @typedef {Object} Testimonial
 * @property {string} id
 * @property {string} name
 * @property {string} city
 * @property {string} quote
 * @property {number} [rating]  1–5 stars from the real review. Leave out until real reviews arrive.
 */

// TODO: SAMPLE REVIEWS for the client demo only. Replace with real reviews before launch.
// If there are no real reviews at launch, set this to [] and the Home section hides itself.
/** @type {Testimonial[]} */
export const testimonials = [
  {
    id: "sample-1",
    name: "Client name",
    city: "Toronto",
    quote:
      "Sample review. A real client review will go here once we receive it.",
    rating: 5,
  },
  {
    id: "sample-2",
    name: "Client name",
    city: "Markham",
    quote:
      "Sample review. Real reviews can be short, like this one, or a few sentences long.",
    rating: 5,
  },
  {
    id: "sample-3",
    name: "Client name",
    city: "Scarborough",
    quote:
      "Sample review. Each one shows the client's first name, their city and a star rating.",
    rating: 5,
  },
  {
    id: "sample-4",
    name: "Client name",
    city: "Vaughan",
    quote: "Sample review. Swipe or use the arrows to see more.",
    rating: 5,
  },
];
