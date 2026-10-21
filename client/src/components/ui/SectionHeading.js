import { cn } from "@/lib/cn";

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
  className,
}) {
  return (
    <div className={cn("mb-8", align === "center" && "text-center", className)}>
      <Tag className="text-ink text-2xl font-bold md:text-3xl">{title}</Tag>
      {subtitle && (
        <p
          className={cn(
            "text-muted mt-2 max-w-2xl text-sm",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
