import Link from "next/link";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center rounded-button px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-primary text-surface hover:bg-primary-dark",
  secondary: "border border-ink bg-surface text-ink hover:bg-surface-alt",
  outline: "border border-ink text-ink hover:bg-ink hover:text-surface",
};

export default function Button({
  variant = "primary",
  href,
  className,
  children,
  type = "button",
  ...props
}) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    // Plain <a> for tel:, mailto: and external URLs; next/link for internal routes
    const isExternal = /^(https?:|tel:|mailto:)/.test(href);
    return isExternal ? (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
