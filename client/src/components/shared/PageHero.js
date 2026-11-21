import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const crumbLink =
  "hover:text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function PageHero({ title, subtitle, breadcrumbs = [], image }) {
  // Pages list only the crumbs after Home; the last one is the current page.
  const trail = [{ label: "Home", href: "/" }, ...breadcrumbs];

  return (
    // "isolate" keeps the photo's negative z-index inside this section.
    <section
      className={cn(
        "bg-surface-alt border-line relative isolate overflow-hidden border-b",
        // With a photo, the header floats on top (see Header.js), so the top padding
        // adds the header's height: 72px on phones and tablets, 96px from lg.
        image ? "pt-32 pb-14 md:pt-38 md:pb-20 lg:pt-44" : "py-14 md:py-20",
      )}
    >
      {image && (
        <>
          {/* Decorative background: the title says what the page is, so alt is empty */}
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            preload
            className="-z-10 object-cover"
          />
          {/* Dark gradient so the text stays readable: stronger on phones, where text covers the whole photo */}
          <div
            aria-hidden="true"
            className="from-surface/95 via-surface/85 to-surface/60 md:via-surface/70 md:to-surface/25 absolute inset-0 -z-10 bg-linear-to-r"
          />
        </>
      )}
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
        {/* Always room for the same number of lines (3 on phones, 2 from md),
            so every page's hero is the same height and the title never jumps.
            1.625em is one line at leading-relaxed. Keep subtitles within that. */}
        <p className="text-muted mt-4 min-h-[calc(3*1.625em)] max-w-2xl text-lg leading-relaxed md:min-h-[calc(2*1.625em)]">
          {subtitle}
        </p>
      </Container>
    </section>
  );
}
