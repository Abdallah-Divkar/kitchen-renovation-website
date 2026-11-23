import Link from "next/link";
import CardImage from "@/components/shared/CardImage";
import Section from "@/components/ui/Section";
import { site } from "@/data/site";
import { homeCopy } from "@/data/home";
import { navLinks } from "@/data/nav";
import LinkArrow from "@/components/ui/LinkArrow";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function Intro() {
  const { eyebrow, heading, text, linkLabel, image, imageAlt } = homeCopy.intro;
  const year = site.established;
  const aboutLink = navLinks.find((link) => link.href === "/about");

  return (
    <Section aria-labelledby="intro-title">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-4">
          {/* Change 1: the eyebrow is brass */}
          <p className="text-primary text-xs font-semibold tracking-[0.17em] uppercase">
            {eyebrow}
          </p>
          {/* Change 2: same size and weight as the other section headings */}
          <h2
            id="intro-title"
            className="text-ink text-3xl leading-[1.15] font-semibold md:text-[2.75rem]"
          >
            {year ? `${heading} since ${year}` : heading}
          </h2>
          <p className="text-muted text-[17px] leading-relaxed">{text}</p>
          {aboutLink && (
            <Link
              href={aboutLink.href}
              // Change 3: the link is brass
              className={`group text-primary rounded-sm text-[15px] font-medium underline-offset-4 hover:underline ${focusRing}`}
            >
              {linkLabel} <LinkArrow />
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
