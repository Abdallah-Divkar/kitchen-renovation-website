import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

// The white logo, linking to Home. The alt text is the business name from site.js.
export default function Logo({ className, imageClassName, onClick }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn("inline-block shrink-0", className)}
    >
      <Image
        src={site.logo.src}
        alt={site.name}
        width={site.logo.width}
        height={site.logo.height}
        loading="eager"
        className={cn("block w-auto", imageClassName)}
      />
    </Link>
  );
}
