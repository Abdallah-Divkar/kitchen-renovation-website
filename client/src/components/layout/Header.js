"use client";

import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { PhoneIcon } from "@/components/ui/Icons";
import { quoteLink } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function Header() {
  // On Home the header floats over the hero photo; on every other page it's solid.
  const overHero = usePathname() === "/";

  return (
    <header
      className={cn(
        "text-ink z-30 w-full",
        overHero
          ? "from-surface/80 absolute inset-x-0 top-0 bg-linear-to-b to-transparent"
          : "bg-surface",
      )}
    >
      {/* Mobile: 3-column grid so the logo sits in the exact centre. Desktop: one row. */}
      <Container className="grid h-18 grid-cols-[1fr_auto_1fr] items-center lg:flex lg:h-24 lg:justify-between lg:gap-6">
        <Logo
          className={cn("col-start-2", focusRing)}
          imageClassName="h-10 lg:h-13"
        />

        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks
            className="flex items-center gap-6 xl:gap-10"
            linkClassName={cn(
              "text-[15px] font-medium tracking-[0.02em] whitespace-nowrap transition-colors",
              focusRing,
            )}
            inactiveClassName="text-ink hover:text-primary"
            activeClassName="text-primary"
          />
        </nav>

        <div className="hidden shrink-0 items-center gap-5 lg:flex xl:gap-7">
          <a
            href={`tel:${site.phoneHref}`}
            className={cn(
              "hover:text-primary inline-flex items-center gap-2 text-[15px] font-medium whitespace-nowrap transition-colors",
              focusRing,
            )}
          >
            <PhoneIcon className="size-4.5" />
            <span className="sr-only">Call </span>
            {site.phone}
          </a>
          <Button
            href={quoteLink.href}
            className="px-7! py-3.5! text-[15px]! whitespace-nowrap"
          >
            {quoteLink.label}
          </Button>
        </div>

        <MobileMenu className="col-start-3 justify-self-end" />
      </Container>
    </header>
  );
}
