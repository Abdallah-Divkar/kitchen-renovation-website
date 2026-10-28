import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { quoteLink } from "@/data/nav";

const crumbLink =
  "hover:text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function PageHero({
  title,
  subtitle,
  breadcrumbs = [],
  showQuoteButton = false,
}) {
  // Pages list only the crumbs after Home; the last one is the current page.
  const trail = [{ label: "Home", href: "/" }, ...breadcrumbs];

  return (
    <section className="bg-placeholder py-16 md:py-24">
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="text-muted flex flex-wrap gap-x-2 text-sm">
            {trail.map((crumb, index) => {
              const isLast = index === trail.length - 1;
              return (
                <li key={crumb.label} className="flex gap-x-2">
                  {isLast || !crumb.href ? (
                    <span aria-current={isLast ? "page" : undefined}>
                      {crumb.label}
                    </span>
                  ) : (
                    <Link href={crumb.href} className={crumbLink}>
                      {crumb.label}
                    </Link>
                  )}
                  {!isLast && <span aria-hidden="true">/</span>}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="text-ink mt-4 max-w-4xl text-4xl font-bold md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-ink mt-4 max-w-2xl text-lg">{subtitle}</p>
        )}
        {showQuoteButton && (
          <Button href={quoteLink.href} className="mt-6">
            {quoteLink.label}
          </Button>
        )}
      </Container>
    </section>
  );
}
