/**
 * Copy used only by the Home page. The hero eyebrow is site.tagline (data/site.js);
 * the reviews live in data/testimonials.js. whyChooseUs stays here until task 2.7
 * moves that section to About.
 */
export const homeCopy = {
  hero: {
    heading: "Custom Kitchens, Built for Your Home",
    text: "Designed, made and installed by A-One Kitchen across the GTA.",
    // AI-generated stand-in until the client sends a real photo
    image: "/images/home/hero-kitchen.jpg",
    imageAlt: "Dark custom kitchen with an island and brass pendant lights",
  },
  intro: {
    eyebrow: "About us",
    // The Intro adds "since <year>" from the "Year established" stat in about.js
    heading: "Custom kitchens, built in the GTA",
    // TODO: client to confirm the intro wording
    text: "Every cabinet is made in our own workshop, so we control the quality and the timeline from the first sketch to the final installation.",
    linkLabel: "Learn more about us",
    image: "/images/workshop/placeholder.jpg",
    imageAlt: "Workshop or showroom",
  },
  products: {
    eyebrow: "What we make",
    title: "Our Products",
    subtitle: "Custom-made in our own shop for your kitchen and home.",
    linkLabel: "View products",
    allLinkLabel: "View all products",
  },
  featuredProjects: {
    eyebrow: "Our work",
    title: "Featured Projects",
    subtitle: "A few of our recent kitchens across the GTA.",
  },
  testimonials: {
    eyebrow: "Reviews",
    title: "What Our Clients Say",
  },
  whyChooseUs: {
    title: "Why Choose Us",
  },
  areas: {
    eyebrow: "Where we work",
    title: "Areas We Serve",
    subtitle: "Custom kitchens and cabinetry across Toronto and the GTA.",
  },
};
