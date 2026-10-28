import Link from "next/link";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import CardImage from "./CardImage";

export default function CityCard({
  name,
  summary,
  image,
  imageAlt,
  tags,
  href,
  headingAs: Heading = "h3",
  sizes,
  className,
  ...props
}) {
  return (
    <Card as="article" className={cn("md:p-6", className)} {...props}>
      <CardImage
        src={image}
        alt={imageAlt}
        sizes={sizes}
        className="aspect-video"
      />
      <Heading className="text-ink mt-4 text-lg font-semibold md:text-xl">
        {href ? (
          <Link
            href={href}
            className="focus-visible:outline-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            {name}
          </Link>
        ) : (
          name
        )}
      </Heading>
      {summary && <p className="text-muted mt-2 text-sm">{summary}</p>}
      {tags?.length > 0 && (
        <p className="text-ink mt-3 text-sm font-semibold">
          {tags.join(" · ")}
        </p>
      )}
    </Card>
  );
}
