import { cn } from "@/lib/cn";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function Section({
  alt = false,
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
        "py-16 md:py-20",
        alt ? "bg-surface-alt" : "bg-surface",
        className,
      )}
      {...props}
    >
      <Container>
        {title && (
          <SectionHeading title={title} subtitle={subtitle} align={align} />
        )}
        {children}
      </Container>
    </section>
  );
}
