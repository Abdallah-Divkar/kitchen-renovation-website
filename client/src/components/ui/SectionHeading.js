import { cn } from "@/lib/cn";

// V2 section heading: optional brass eyebrow, serif title, muted subtitle.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
  className,
}) {
  return (
    <div className={cn("mb-8", align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="text-primary mb-3 text-xs font-semibold tracking-[0.17em] uppercase">
          {eyebrow}
        </p>
      )}
      <Tag className="text-ink text-3xl leading-[1.15] font-semibold md:text-[2.75rem]">
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            "text-muted mt-3 max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
