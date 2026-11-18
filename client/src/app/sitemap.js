import { navLinks } from "@/data/nav";
import { site } from "@/data/site";

// One entry per menu link, so a new page appears here when it is added to nav.js.
// No lastModified: Cache Components may reject reading the current date, and
// search engines don't need it.
export default function sitemap() {
  return navLinks.map(({ href }) => ({
    url: `${site.url}${href}`,
  }));
}
