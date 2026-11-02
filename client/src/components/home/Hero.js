import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { homeCopy } from "@/data/home";
import { navLinks, quoteLink } from "@/data/nav";
import { site } from "@/data/site";
import Image from "next/image";
import { isPlaceholder } from "@/components/shared/CardImage";

const heroButton = "px-7! py-3.5! text-[15px]! font-semibold!";
export default function Hero() {
  const galleryLink = navLinks.find((link) => link.href === "/gallery");
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-primary text-surface relative py-16 md:py-24 lg:py-40"
    >
      {!isPlaceholder(homeCopy.hero.image) && (
        <Image
          src={homeCopy.hero.image}
          alt={homeCopy.hero.imageAlt}
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover"
        />
      )}
      <div className="bg-primary/60 absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <h1
          id="hero-title"
          className="max-w-4xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl"
        >
          {site.tagline}
        </h1>
        <p className="text-surface/80 mt-6 max-w-2xl text-lg sm:text-xl">
          {site.description}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            href={quoteLink.href}
            variant="secondary"
            className={`${heroButton} hover:bg-line! focus-visible:outline-surface!`}
          >
            {quoteLink.label}
          </Button>
          {galleryLink && (
            <Button
              href={galleryLink.href}
              variant="outline"
              className={`${heroButton} border-surface! text-surface! hover:bg-surface! hover:text-ink! focus-visible:outline-surface!`}
            >
              {homeCopy.hero.secondaryLabel}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
