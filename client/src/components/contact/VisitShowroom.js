import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import { contactCopy } from "@/data/contact";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import MapLink from "./MapLink";

const button = "px-7! py-3.5! text-[15px]!";

export default function VisitShowroom({ className }) {
  const { eyebrow, title, text } = contactCopy.showroom;
  const { address } = site;

  return (
    <section
      className={cn("bg-surface-alt py-16 md:py-20 lg:py-28", className)}
    >
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,32.5rem)_1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={text}
            className="mb-6!"
          />
          <address className="text-ink not-italic">
            {address.street}, {address.unit}, {address.city}, {address.province}{" "}
            {address.postalCode}
          </address>
          <p className="text-ink mt-3 text-[15px]">
            {site.hours
              .map(({ days, hours }) => `${days}: ${hours}`)
              .join(" · ")}
          </p>
          <p className="text-primary mt-3 text-[15px]">{site.visitNote}.</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              href={site.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={button}
            >
              Get Directions
              <span className="sr-only"> (opens Google Maps)</span>
            </Button>
            <Button
              href={`tel:${site.phoneHref}`}
              variant="outline"
              className={cn(button, "border-primary!")}
            >
              Call {site.phone}
            </Button>
          </div>
        </div>

        <MapLink className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[27.5rem]" />
      </Container>
    </section>
  );
}
