import Link from "next/link";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import CardImage from "./CardImage";

const linkClass =
  "text-ink mt-3 inline-block text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function ProductCard({
  name,
  summary,
  image,
  imageAlt,
  href,
  linkLabel = "View details",
  framed = false,
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
        className={framed ? "aspect-video" : "aspect-[4/3] sm:aspect-square"}
      />
      <Heading className="text-ink mt-4 text-lg font-semibold md:text-xl">
        {name}
      </Heading>
      {summary && <p className="text-muted mt-2 text-sm">{summary}</p>}
      {href && (
        <Link href={href} className={linkClass}>
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
