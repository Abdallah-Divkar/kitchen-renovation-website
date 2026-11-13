import Carousel from "@/components/shared/Carousel";
import GalleryCard from "@/components/shared/GalleryCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryItems, getCategoryLabel } from "@/data/gallery";
import { homeCopy } from "@/data/home";

export default function FeaturedProjects() {
  const { eyebrow, title, subtitle } = homeCopy.featuredProjects;
  const featured = galleryItems.filter((item) => item.featured).slice(0, 10);

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
    </Section>
  );
}
