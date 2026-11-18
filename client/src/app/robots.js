import { site } from "@/data/site";

export default function robots() {
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
