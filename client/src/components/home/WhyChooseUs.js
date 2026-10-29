import Section from "@/components/ui/Section";
import { whyChooseUs } from "@/data/about";
import { homeCopy } from "@/data/home";

export default function WhyChooseUs() {
  return (
    <Section title={homeCopy.whyChooseUs.title} align="center">
      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map(({ title, description }) => (
          <li
            key={title}
            className="flex flex-col items-center gap-3 text-center"
          >
            {/* Placeholder for an icon: replace it, or delete this line for none */}
            <div
              aria-hidden="true"
              className="bg-placeholder size-14 rounded-full"
            />
            <h3 className="text-ink text-lg font-semibold">{title}</h3>
            <p className="text-muted text-[15px]">{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
