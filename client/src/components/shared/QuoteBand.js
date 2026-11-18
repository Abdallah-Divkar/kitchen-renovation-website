import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { quoteLink } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const button = "px-7! py-3.5! text-[15px]!";

// Dark band at the bottom of most pages (Figma "Quote band"). Phones show only the
// quote button: the bottom bar already has Directions and Call.
export default function QuoteBand({
  title = "Ready to start your project?",
  text = `Get a free quote, or visit our showroom in ${site.address.city}.`,
  note = "No appointment needed.",
}) {
  return (
    <section
      aria-labelledby="quote-band-title"
      className="bg-raised py-14 text-center md:py-24"
    >
      <Container>
        <h2
          id="quote-band-title"
          className="text-ink text-3xl leading-[1.15] font-semibold md:text-[2.75rem]"
        >
          {title}
        </h2>
        {text && (
          <p className="text-muted mx-auto mt-4 max-w-[45rem] text-base leading-relaxed md:mt-5 md:text-lg">
            {text}
            {note && <span className="max-sm:hidden"> {note}</span>}
          </p>
        )}

        <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-5">
          <Button href={quoteLink.href} className={button}>
            {quoteLink.label}
          </Button>
          <Button
            href={site.directionsUrl}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(button, "border-primary! max-sm:hidden")}
          >
            Get Directions
            <span className="sr-only"> (opens Google Maps)</span>
          </Button>
        </div>

        <p className="text-muted mt-5 text-sm max-sm:hidden">
          or call{" "}
          <a
            href={`tel:${site.phoneHref}`}
            className="hover:text-ink focus-visible:outline-primary rounded-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            {site.phone}
          </a>
        </p>
      </Container>
    </section>
  );
}
