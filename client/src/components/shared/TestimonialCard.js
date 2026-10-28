import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";

export default function TestimonialCard({
  quote,
  name,
  city,
  rating,
  className,
  ...props
}) {
  const author = [name, city].filter(Boolean).join(", ");

  return (
    <Card as="figure" className={cn("md:p-8", className)} {...props}>
      {rating > 0 && (
        <p className="text-ink mb-3 text-lg tracking-widest">
          <span aria-hidden="true">{"★".repeat(rating)}</span>
          <span className="sr-only">Rated {rating} out of 5</span>
        </p>
      )}
      <blockquote className="text-ink">
        <p>“{quote}”</p>
      </blockquote>
      {author && (
        <figcaption className="text-muted mt-4 text-sm font-semibold">
          — {author}
        </figcaption>
      )}
    </Card>
  );
}
