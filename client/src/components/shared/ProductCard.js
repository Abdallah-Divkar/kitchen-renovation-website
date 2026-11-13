import Link from "next/link";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import CardImage from "./CardImage";

const linkClass =
  "text-primary mt-3 inline-block text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function ProductCard({
  name,
  summary,
  image,
  imageAlt,
  href,
  linkLabel = "View details",
  framed = false,
  compactOnMobile = false,
  headingAs: Heading = "h3",
  sizes,
  className,
  ...props
}) {
  const content = (
    <>
      <CardImage
        src={image}
        alt={imageAlt}
        sizes={sizes}
        className={
          framed
            ? "aspect-video"
            : cn(
                "sm:aspect-square",
                compactOnMobile ? "aspect-square" : "aspect-[4/3]",
              )
        }
      />
      <Heading
        className={cn(
          "text-ink font-semibold md:text-xl",
          compactOnMobile
            ? "mt-2.5 text-base sm:mt-4 sm:text-lg"
            : "mt-4 text-lg",
        )}
      >
        {name}
      </Heading>
      {/* Compact on phones: photo and name only; summary and link from sm up */}
      {summary && (
        <p
          className={cn(
            "text-muted mt-2 text-sm",
            compactOnMobile && "hidden sm:block",
          )}
        >
          {summary}
        </p>
      )}
      {href && (
        <Link
          href={href}
          className={cn(linkClass, compactOnMobile && "max-sm:hidden")}
        >
          {linkLabel}
          <span className="sr-only"> about {name}</span>
          <span aria-hidden="true"> →</span>
        </Link>
      )}
    </>
  );
  // md:p-6 wins over Card's p-4 because responsive classes always come later
  // in the CSS. A plain "p-6" would fight p-4, since cn() doesn't merge classes.
  return framed ? (
    <Card as="article" className={cn("md:p-6", className)} {...props}>
      {content}
    </Card>
  ) : (
    <article className={className} {...props}>
      {content}
    </article>
  );
}
