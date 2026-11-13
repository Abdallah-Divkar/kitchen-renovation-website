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
    <section className="bg-surface-alt border-line border-b py-14 md:py-20">
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

        <h1 className="text-ink mt-5 max-w-4xl text-[2.5rem] leading-[1.1] font-semibold md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted mt-4 max-w-2xl text-lg leading-relaxed">
            {subtitle}
          </p>
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
