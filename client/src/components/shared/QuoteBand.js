import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { quoteLink } from "@/data/nav";
import { site } from "@/data/site";

export default function QuoteBand({
  title = "Ready to start your project?",
  text = "Get a free quote for your custom kitchen, vanity, closet or countertops.",
}) {
  return (
    <section
      aria-labelledby="quote-band-title"
      className="bg-primary text-surface py-16 text-center md:py-20"
    >
      <Container>
        <h2 id="quote-band-title" className="text-2xl font-bold md:text-3xl">
          {title}
        </h2>
        {text && (
          <p className="text-surface/80 mx-auto mt-3 max-w-xl">{text}</p>
        )}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* "!" forces the light ring: Button's dark ring would vanish on this band */}
          <Button
            href={quoteLink.href}
            variant="secondary"
            className="focus-visible:outline-surface!"
          >
            {quoteLink.label}
          </Button>
          <p className="text-sm">
            or call{" "}
            <a
              href={`tel:${site.phoneHref}`}
              className="focus-visible:outline-surface font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {site.phone}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
