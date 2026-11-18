import CardImage from "@/components/shared/CardImage";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/cn";

// The large card on the Products page (Figma "Product card / Large"): the photo
// runs edge to edge, with the text underneath. No link: there are no detail
// pages yet. The page passes id={slug} so Home's /products#<slug> links land here.
export default function ProductCardLarge({
  name,
  summary,
  image,
  imageAlt,
  headingAs: Heading = "h3",
  sizes = "(min-width: 768px) 50vw, 100vw",
  className,
  ...props
}) {
  return (
    <Card
      as="article"
      className={cn("overflow-hidden p-0!", className)}
      {...props}
    >
      <CardImage
        src={image}
        alt={imageAlt}
        sizes={sizes}
        className="aspect-[16/10] rounded-none!"
      />
      <div className="p-6 md:p-8">
        <Heading className="text-ink text-[1.75rem] leading-tight font-medium">
          {name}
        </Heading>
        {summary && (
          <p className="text-muted mt-3 leading-relaxed">{summary}</p>
        )}
      </div>
    </Card>
  );
}
