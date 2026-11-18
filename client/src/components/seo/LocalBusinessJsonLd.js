import { cities } from "@/data/cities";
import { site } from "@/data/site";

// Business details for Google (name, address, phone, hours). Everything comes from
// site.js, and fields the client hasn't sent yet are left out instead of faked.
export default function LocalBusinessJsonLd() {
  const { address } = site;
  const hasEmail = site.email && !site.email.includes("example.com");
  const sameAs = site.social
    .map(({ href }) => href)
    .filter((href) => href && href !== "#");

  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    slogan: site.tagline,
    url: site.url,
    telephone: site.phoneHref,
    ...(hasEmail && { email: site.email }),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street}, ${address.unit}`,
      addressLocality: address.city,
      addressRegion: address.province,
      ...(address.postalCode && { postalCode: address.postalCode }),
      addressCountry: "CA",
    },
    hasMap: site.mapUrl,
    openingHoursSpecification: site.openingHours.map(
      ({ days, opens, closes }) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days,
        opens,
        closes,
      }),
    ),
    areaServed: cities.map(({ name }) => ({ "@type": "City", name })),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return (
    <script
      type="application/ld+json"
      // "<" is escaped so no text in the data can close the script tag (Next.js docs)
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
