import GalleryCard from "@/components/shared/GalleryCard";
import Section from "@/components/ui/Section";
import { galleryItems, getCategoryLabel } from "@/data/gallery";
import { homeCopy } from "@/data/home";

export default function FeaturedProjects() {
  const { title, subtitle } = homeCopy.featuredProjects;
  const featured = galleryItems.filter((item) => item.featured).slice(0, 6);

  if (featured.length === 0) return null;

  return (
    <Section alt title={title} subtitle={subtitle}>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((item) => (
          <GalleryCard
            key={item.slug}
            title={item.title}
            city={item.city}
            type={getCategoryLabel(item.category)}
            image={item.image}
            imageAlt={item.imageAlt}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ))}
      </div>
    </Section>
  );
}
