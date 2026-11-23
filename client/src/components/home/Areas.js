import Section from "@/components/ui/Section";
import { cities } from "@/data/cities";
import { homeCopy } from "@/data/home";

// Plain labels: there's no Areas page any more, so the cities don't link anywhere.
// The hover is only a highlight: brass colour and a tiny grow (motion-safe skips
// the grow for people who prefer reduced motion). The cursor stays an arrow.
const pill =
  "text-ink border-ink inline-block rounded-full border px-6 py-3 text-[15px] font-medium transition duration-200 hover:border-primary hover:text-primary motion-safe:hover:scale-105";

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
