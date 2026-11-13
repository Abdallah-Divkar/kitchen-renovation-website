import Carousel from "@/components/shared/Carousel";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "./TestimonialCard";

// Reviews as a carousel: one at a time on phones, up to 3 on desktop.
// With no reviews the whole section is hidden.
export default function Testimonials({
  testimonials = [],
  eyebrow,
  title = "What Our Clients Say",
  subtitle,
  alt = true,
  ...props
}) {
  if (testimonials.length === 0) return null;

  return (
    <Section alt={alt} {...props}>
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
        {testimonials.map(({ id, ...testimonial }) => (
          <TestimonialCard key={id} className="h-full" {...testimonial} />
        ))}
      </Carousel>
    </Section>
  );
}
