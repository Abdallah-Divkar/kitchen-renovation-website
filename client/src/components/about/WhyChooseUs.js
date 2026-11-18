import Section from "@/components/ui/Section";
import { aboutCopy, whyChooseUs } from "@/data/about";

// Four reasons in a row on desktop. Each one is a left-aligned card with a
// brass line on top (Figma "Why Choose Us (moved from Home)").
export default function WhyChooseUs() {
  return (
    <Section {...aboutCopy.whyChooseUs}>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map(({ title, description }) => (
          <li key={title} className="border-primary border-t-2 px-6 pt-7 pb-8">
            <h3 className="text-ink text-[1.75rem] leading-tight font-medium">
              {title}
            </h3>
            <p className="text-muted mt-3 leading-relaxed">{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
