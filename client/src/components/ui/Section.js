import { cn } from "@/lib/cn";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function Section({
  alt = false,
  eyebrow,
  title,
  subtitle,
  align,
  className,
  children,
  ...props
}) {
  return (
    <section
      className={cn(
        "py-16 md:py-20 lg:py-28",
        alt ? "bg-surface-alt" : "bg-surface",
        className,
      )}
      {...props}
    >
      <Container>
        {title && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align={align}
          />
        )}
        {children}
      </Container>
    </section>
  );
}
