import Section from "@/components/ui/Section";
import { cities } from "@/data/cities";
import { homeCopy } from "@/data/home";

// Plain labels: there's no Areas page any more, so the cities don't link anywhere.
const pill =
  "text-ink border-ink inline-block rounded-full border px-6 py-3 text-[15px] font-medium";

export default function Areas() {
  const { eyebrow, title, subtitle } = homeCopy.areas;

  return (
    <Section eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <ul className="flex flex-wrap gap-3">
        {cities.map((city) => (
          <li key={city.slug} className={pill}>
            {city.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
