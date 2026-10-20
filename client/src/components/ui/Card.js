import { cn } from "@/lib/cn";

export default function Card({
  as: Tag = "div",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "rounded-card border-line bg-surface shadow-card border p-4",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
