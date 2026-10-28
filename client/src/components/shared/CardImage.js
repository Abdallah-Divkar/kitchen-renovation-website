import Image from "next/image";
import { cn } from "@/lib/cn";

// Real photos haven't arrived yet: the data files point at placeholder.jpg
// files that don't exist in public/, so those paths get a grey box instead
// of a broken image and a red 404 in the console.
function isPlaceholder(src) {
  return !src || src.endsWith("/placeholder.jpg");
}

export default function CardImage({
  src,
  alt,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "aspect-[4/3]",
}) {
  return (
    <div
      className={cn(
        "rounded-card bg-placeholder relative overflow-hidden",
        className,
      )}
    >
      {isPlaceholder(src) ? (
        <span
          aria-hidden="true"
          className="text-muted absolute inset-0 flex items-center justify-center p-4 text-center text-sm"
        >
          [ Photo: {alt} ]
        </span>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      )}
    </div>
  );
}
