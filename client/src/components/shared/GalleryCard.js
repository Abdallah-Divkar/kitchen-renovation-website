import CardImage from "./CardImage";

export default function GalleryCard({
  title,
  city,
  type,
  image,
  imageAlt,
  headingAs: Heading = "h3",
  sizes,
  className,
  ...props
}) {
  // Joins whichever of city and type exist, so one missing doesn't leave a stray "·"
  const meta = [city, type].filter(Boolean).join(" · ");

  return (
    <article className={className} {...props}>
      <CardImage src={image} alt={imageAlt} sizes={sizes} />
      <Heading className="text-ink mt-3 text-lg font-semibold">{title}</Heading>
      {meta && <p className="text-muted mt-1 text-sm">{meta}</p>}
    </article>
  );
}
