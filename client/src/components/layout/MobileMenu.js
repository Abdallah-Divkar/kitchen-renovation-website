"use client";

import { useEffect, useId, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { quoteLink } from "@/data/nav";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { usePathname } from "next/navigation";

// Matches Tailwind's lg breakpoint (64rem = 1024px), where the desktop nav appears.MQ
const DESKTOP_QUERY = "(min-width: 64rem)";
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const iconButton = cn(
  "inline-flex size-10 items-center justify-center rounded-button text-ink hover:text-primary transition-colors",
  focusRing,
);

export default function MobileMenu({ className }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const dialogRef = useRef(null);

  const close = () => setOpen(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close if the route changes some other way (e.g. the browser back button)
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Keep the <dialog> in sync with state. showModal() traps focus and makes the page behind inert.MQ
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Lock body scroll only while open, and restore the previous values afterwards.MQ
  useEffect(() => {
    if (!open) return;
    const { body, documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [open]);

  // If the window is widened to desktop while open, close so scroll is unlocked.MQ
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const { address } = site;

  return (
    <div className={cn("lg:hidden", className)}>
      <button
        type="button"
        className={iconButton}
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(true)}
      >
        <MenuIcon className="size-7" />
      </button>
      <dialog
        ref={dialogRef}
        id={menuId}
        aria-label="Site menu"
        // Escape fires "cancel": route it through state so state stays the single source of truth.MQ
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={close}
        className="bg-surface text-ink m-0 h-dvh max-h-none w-full max-w-none flex-col border-0 p-0 open:flex"
      >
        {/* Same layout as the mobile header: logo centred, close button on the right */}
        <Container className="border-line grid h-18 shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b">
          <Logo
            onClick={close}
            className={cn("col-start-2", focusRing)}
            imageClassName="h-10"
          />
          <button
            type="button"
            className={cn(iconButton, "col-start-3 justify-self-end")}
            aria-label="Close menu"
            onClick={close}
          >
            <CloseIcon className="size-7" />
          </button>
        </Container>

        <div className="flex-1 overflow-y-auto">
          <Container className="py-10">
            <nav aria-label="Main">
              <NavLinks
                className="flex flex-col gap-5"
                linkClassName={cn(
                  "font-heading block w-fit text-4xl font-semibold transition-colors",
                  focusRing,
                )}
                inactiveClassName="text-ink hover:text-primary"
                activeClassName="text-primary"
                onLinkClick={close}
              />
            </nav>

            <div className="border-line mt-8 flex flex-col gap-7 border-t pt-7">
              <a
                href={`tel:${site.phoneHref}`}
                onClick={close}
                className={cn(
                  "hover:text-primary inline-flex w-fit items-center gap-2.5 text-lg transition-colors",
                  focusRing,
                )}
              >
                <PhoneIcon className="size-5" />
                <span className="sr-only">Call </span>
                {site.phone}
              </a>
              <Button
                href={quoteLink.href}
                onClick={close}
                className="w-full py-3.5! text-[15px]!"
              >
                {quoteLink.label}
              </Button>
              <p className="text-muted text-sm leading-relaxed">
                Showroom: {address.street}, {address.unit}, {address.city}
                <br />
                {site.hours
                  .map(({ days, hours }) => `${days}: ${hours}`)
                  .join(" · ")}
              </p>
            </div>
          </Container>
        </div>
      </dialog>
    </div>
  );
}
