import Carousel from "@/components/shared/Carousel";
import GalleryCard from "@/components/shared/GalleryCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryItems, getCategoryLabel } from "@/data/gallery";
import { homeCopy } from "@/data/home";
import Link from "next/link";
import { navLinks } from "@/data/nav";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function FeaturedProjects() {
  const { eyebrow, title, subtitle } = homeCopy.featuredProjects;
  const featured = galleryItems.filter((item) => item.featured).slice(0, 10);

  const galleryLink = navLinks.find((link) => link.href === "/gallery");

  if (featured.length === 0) return null;

  return (
    <Section>
      <Carousel
        label={title}
        heading={
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            className="mb-0!"
          />
        }
      >
        {featured.map((item) => (
          <GalleryCard
            key={item.slug}
            title={item.title}
            city={item.city}
            type={getCategoryLabel(item.category)}
            image={item.image}
            imageAlt={item.imageAlt}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 85vw"
          />
        ))}
      </Carousel>
      {galleryLink && (
        <Link
          href={galleryLink.href}
          className={`text-primary mt-8 inline-block rounded-sm text-[15px] font-medium underline-offset-4 hover:underline ${focusRing}`}
        >
          See all projects <span aria-hidden="true">→</span>
        </Link>
      )}
    </Section>
  );
}
