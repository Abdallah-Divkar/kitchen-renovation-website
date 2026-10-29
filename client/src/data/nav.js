/**
 * @typedef {Object} NavLink
 * @property {string} label
 * @property {string} href
 */

/** @type {NavLink[]} */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Areas", href: "/areas" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Call-to-action shown in the header and mobile menu */
export const quoteLink = { label: "Request a Free Quote", href: "/contact" };
