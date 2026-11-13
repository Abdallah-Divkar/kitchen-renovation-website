import Image from "next/image";
import { isPlaceholder } from "@/components/shared/CardImage";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { homeCopy } from "@/data/home";
import { quoteLink } from "@/data/nav";
import { site } from "@/data/site";

const heroButton = "px-7! py-3.5! text-[15px]!";

export default function Hero() {
  const { heading, text, image, imageAlt } = homeCopy.hero;
  const { address, hours } = site;

  return (
    // The header floats over this section (see Header.js), so the photo starts at the
    // very top. Phones: content sits at the bottom of a screen-tall photo.
    // Desktop: content is vertically centred on the left.
    <section
      aria-labelledby="hero-title"
      className="bg-surface text-ink relative flex min-h-[45rem] items-end pt-32 pb-12 lg:min-h-[51.25rem] lg:items-center lg:py-32"
    >
      {!isPlaceholder(image) && (
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          preload
          className="object-cover"
        />
      )}
      {/* Dark gradients keep the text readable: from the bottom on phones, from the left on desktop */}
      <div
        aria-hidden="true"
        className="from-surface via-surface/70 to-surface/30 absolute inset-0 bg-linear-to-t lg:hidden"
      />
      <div
        aria-hidden="true"
        className="from-surface/95 via-surface/70 to-surface/20 absolute inset-0 hidden bg-linear-to-r lg:block"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <p className="text-primary text-xs font-semibold tracking-[0.17em] uppercase">
            {site.tagline}
          </p>
          <h1
            id="hero-title"
            className="mt-4 text-[2.75rem] leading-[1.1] font-semibold sm:text-6xl lg:text-[4rem]"
          >
            {heading}
          </h1>
          <p className="text-ink/90 mt-5 text-lg leading-relaxed">{text}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href={quoteLink.href} className={heroButton}>
              {quoteLink.label}
            </Button>
            <Button
              href={site.directionsUrl}
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              className={heroButton}
            >
              Get Directions
              <span className="sr-only"> (opens Google Maps)</span>
            </Button>
          </div>

          <p className="text-muted mt-6 hidden text-sm sm:block">
            Showroom: {address.street}, {address.city}
            {hours[0] && ` · ${hours[0].days}: ${hours[0].hours}`}
          </p>
        </div>
      </Container>
    </section>
  );
}
