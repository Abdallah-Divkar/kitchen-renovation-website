/**
 * @typedef {Object} NavLink
 * @property {string} label
 * @property {string} href
 */

// FINAL (Nov 20): the menu labels are "About" and "Contact", not "About Us" and
// "Contact Us". With five links, only the short labels fit at 1024px. Don't change
// them back; page titles and breadcrumbs can still say "About Us" and "Contact Us".
/** @type {NavLink[]} */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Call-to-action shown in the header and mobile menu */
export const quoteLink = { label: "Request a Free Quote", href: "/contact" };
