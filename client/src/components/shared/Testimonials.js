import Section from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import TestimonialCard from "./TestimonialCard";

// The grid never has more columns than cards, so 1 or 2 reviews don't sit
// squashed on the left of a 3-column row.
const columns = {
  1: "mx-auto max-w-2xl",
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
};

export default function Testimonials({
  testimonials = [],
  title = "What Our Clients Say",
  subtitle,
  alt = true,
  ...props
}) {
  if (testimonials.length === 0) return null;

  const count = Math.min(testimonials.length, 3);

  return (
    <Section
      alt={alt}
      title={title}
      subtitle={subtitle}
      align="center"
      {...props}
    >
      <div className={cn("grid gap-6", columns[count])}>
        {testimonials.map(({ id, ...testimonial }) => (
          <TestimonialCard key={id} {...testimonial} />
        ))}
      </div>
    </Section>
  );
}
