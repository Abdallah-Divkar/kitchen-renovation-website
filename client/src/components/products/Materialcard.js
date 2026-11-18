import CardImage from "@/components/shared/CardImage";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";

// One material: a small swatch beside the name and one line (Figma "Material / …").
export default function MaterialCard({
  name,
  summary,
  image,
  imageAlt,
  headingAs: Heading = "h3",
  className,
  ...props
}) {
  return (
    <Card
      as="article"
      className={cn("flex items-center gap-5 p-5!", className)}
      {...props}
    >
      <CardImage
        src={image}
        alt={imageAlt}
        sizes="88px"
        className="aspect-square size-22 shrink-0"
      />
      <div className="min-w-0">
        <Heading className="text-ink font-sans! text-lg font-medium">
          {name}
        </Heading>
        {summary && (
          <p className="text-muted mt-1 text-sm leading-normal">{summary}</p>
        )}
      </div>
    </Card>
  );
}
