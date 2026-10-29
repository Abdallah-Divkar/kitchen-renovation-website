/**
 * Copy used only by the Home page. The Hero headline and paragraph come from
 * site.tagline and site.description (data/site.js); the "Why Choose Us" items
 * live in data/about.js and the reviews in data/testimonials.js.
 */
export const homeCopy = {
  hero: {
    image: "/images/home/placeholder.jpg",
    imageAlt: "Finished custom kitchen",
    secondaryLabel: "View Our Gallery",
  },
  intro: {
    eyebrow: "About us",
    // The Intro adds "since <year>" from the "Year established" stat in about.js
    heading: "Custom kitchens, built in the GTA",
    // TODO: client to confirm the intro wording
    text: "We design, manufacture and install custom kitchen cabinets and renovations for homes across Toronto and the GTA.",
    linkLabel: "Learn more about us",
  },
  products: {
    title: "Our Products",
    subtitle: "Custom-made in our own shop for your kitchen and home.",
    linkLabel: "View products",
  },
  featuredGallery: {
    title: "Featured Gallery",
    subtitle: "A few of our recent projects across the GTA.",
    buttonLabel: "View the Gallery",
  },
  whyChooseUs: {
    title: "Why Choose Us",
  },
  areas: {
    title: "Areas We Serve",
    subtitle: "Custom kitchens and cabinets across Toronto and the GTA.",
  },
};
