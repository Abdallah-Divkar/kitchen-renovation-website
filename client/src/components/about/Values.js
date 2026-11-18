import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { aboutCopy, values } from "@/data/about";

// Three value cards on the alternate background (Figma "Values").
export default function Values() {
  return (
    <Section alt {...aboutCopy.values}>
      <ul className="grid gap-6 md:grid-cols-3">
        {values.map(({ title, description }) => (
          <Card as="li" key={title} className="p-6! md:p-8!">
            <h3 className="text-ink text-[1.75rem] leading-tight font-medium">
              {title}
            </h3>
            <p className="text-muted mt-3 leading-relaxed">{description}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
