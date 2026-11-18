import CardImage from "@/components/shared/CardImage";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutCopy } from "@/data/about";

// Text first on phones; on desktop the photo moves to the left (Figma "Our Story").
export default function OurStory() {
  const { eyebrow, title, text, image, imageAlt } = aboutCopy.story;

  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} className="mb-6!" />
          <p className="text-muted text-lg leading-relaxed">{text}</p>
        </div>

        <CardImage
          src={image}
          alt={imageAlt}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[4/3] lg:order-first"
        />
      </div>
    </Section>
  );
}
