"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/cn";

// "/" only matches the home page; other links also match their sub-pages
export function isActivePath(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavLinks({
  className,
  linkClassName,
  activeClassName,
  inactiveClassName,
  onLinkClick,
}) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {navLinks.map(({ label, href }) => {
        const active = isActivePath(pathname, href);
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              onClick={onLinkClick}
              className={cn(
                linkClassName,
                active ? activeClassName : inactiveClassName,
              )}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
