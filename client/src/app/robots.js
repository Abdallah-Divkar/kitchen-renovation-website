import { site } from "@/data/site";
import { allowIndexing } from "@/lib/indexing";

export default function robots() {
  // Before launch: keep the whole test site out of search engines.
  if (!allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Developer page, deleted before launch
      disallow: "/ui-test",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
