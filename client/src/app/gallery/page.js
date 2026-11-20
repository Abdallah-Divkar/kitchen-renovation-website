import GalleryBrowser from "@/components/gallery/GalleryBrowser";
import PageHero from "@/components/shared/PageHero";
import QuoteBand from "@/components/shared/QuoteBand";
import Section from "@/components/ui/Section";
import { galleryCopy, galleryItems } from "@/data/gallery";

export const metadata = {
  title: "Gallery",
  description:
    "Photos of custom kitchens, bathroom vanities, closets and countertops we’ve built across the GTA.",
};

export default function GalleryPage() {
  const { hero, ending } = galleryCopy;

  return (
    <>
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <Section>
        <GalleryBrowser items={galleryItems} />
      </Section>

      {/* The gallery's own wording on the usual quote band, so it ends with one call to action */}
      <QuoteBand title={ending.title} text={ending.text} />
    </>
  );
}
