import Link from "next/link";
import Section from "@/components/ui/Section";
import { cities } from "@/data/cities";
import { homeCopy } from "@/data/home";
import { navLinks } from "@/data/nav";

const pill =
  "text-ink border-ink hover:bg-ink hover:text-surface inline-block rounded-full border px-6 py-3 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function Areas() {
  const { title, subtitle } = homeCopy.areas;
  const areasLink = navLinks.find((link) => link.href === "/areas");

  if (!areasLink) return null;
  return (
    <Section title={title} subtitle={subtitle}>
      <ul className="flex flex-wrap gap-3">
        {cities.map((city) => (
          <li key={city.slug}>
            <Link href={areasLink.href} className={pill}>
              {city.name}
              <span className="sr-only"> service area</span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
