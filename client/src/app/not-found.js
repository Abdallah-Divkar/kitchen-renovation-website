import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { quoteLink } from "@/data/nav";

export const metadata = { title: "Page not found" };

const button = "px-7! py-3.5! text-[15px]!";

// Shown for any address that doesn't exist. Next.js sends the 404 status and adds
// noindex by itself, and the page renders inside the normal header and footer.
export default function NotFound() {
  return (
    <section className="bg-surface py-24 md:py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-primary text-xs font-semibold tracking-[0.17em] uppercase">
            Error 404
          </p>
          <h1 className="text-ink mt-4 text-[2.5rem] leading-[1.1] font-semibold md:text-6xl">
            Page not found
          </h1>
          <p className="text-muted mt-5 text-lg leading-relaxed">
            The page you’re looking for may have moved, or the address may be
            mistyped. Head back home, or get in touch and we’ll help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/" className={button}>
              Back to Home
            </Button>
            <Button
              href={quoteLink.href}
              variant="secondary"
              className={button}
            >
              {quoteLink.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
