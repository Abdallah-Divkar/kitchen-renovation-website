import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { quoteLink } from "@/data/nav";
import { site } from "@/data/site";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function Header() {
  return (
    <header className="border-line bg-surface sticky top-0 z-40 border-b">
      <Container className="flex h-16 items-center justify-between gap-4 xl:gap-8">
        <Link
          href="/"
          className={`font-heading text-ink shrink-0 text-lg font-bold whitespace-nowrap ${focusRing}`}
        >
          {site.name}
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks
            className="flex items-center gap-4 xl:gap-6"
            linkClassName={`text-sm whitespace-nowrap ${focusRing}`}
            inactiveClassName="text-muted hover:text-ink"
            activeClassName="text-ink font-semibold underline decoration-2 underline-offset-8"
          />
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className={`text-ink text-sm font-medium whitespace-nowrap ${focusRing}`}
          >
            <span className="sr-only">Call </span>
            {site.phone}
          </a>
          <Button href={quoteLink.href} className="whitespace-nowrap">
            {quoteLink.label}
          </Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
