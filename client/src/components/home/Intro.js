import Link from "next/link";
import CardImage from "@/components/shared/CardImage";
import Section from "@/components/ui/Section";
import { stats } from "@/data/about";
import { homeCopy } from "@/data/home";
import { navLinks } from "@/data/nav";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function Intro() {
  const { eyebrow, heading, text, linkLabel, image, imageAlt } = homeCopy.intro;

  const established = stats.find((stat) => stat.label === "Year established");
  const year = /^\d{4}$/.test(established?.value ?? "")
    ? established.value
    : "";
  const aboutLink = navLinks.find((link) => link.href === "/about");

  return (
    <Section aria-labelledby="intro-title">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-4">
          <p className="text-muted text-[13px] font-semibold tracking-wide uppercase">
            {eyebrow}
          </p>
          <h2
            id="intro-title"
            className="text-ink text-3xl leading-snug font-bold md:text-4xl"
          >
            {year ? `${heading} since ${year}` : heading}
          </h2>
          <p className="text-muted text-[17px] leading-relaxed">{text}</p>
          {aboutLink && (
            <Link
              href={aboutLink.href}
              className={`text-ink rounded-sm font-semibold hover:underline ${focusRing}`}
            >
              {linkLabel} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>

        <CardImage
          src={image}
          alt={imageAlt}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[4/3] lg:aspect-auto lg:h-[26.25rem]"
        />
      </div>
    </Section>
  );
}
