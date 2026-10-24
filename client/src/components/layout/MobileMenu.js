"use client";

import { useEffect, useId, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { quoteLink } from "@/data/nav";
import { site } from "@/data/site";
import NavLinks from "./NavLinks";
import { usePathname } from "next/navigation";

// Matches Tailwind's lg breakpoint (64rem = 1024px), where the desktop nav appears.MQ
const DESKTOP_QUERY = "(min-width: 64rem)";
const iconButton =
  "inline-flex size-10 items-center justify-center rounded-button text-ink hover:bg-surface-alt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function MobileMenu() {
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

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className={iconButton}
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(true)}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
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
        <Container className="border-line flex h-16 shrink-0 items-center justify-between border-b">
          <span className="font-heading text-lg font-bold">{site.name}</span>
          <button
            type="button"
            className={iconButton}
            aria-label="Close menu"
            onClick={close}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </Container>

        <Container
          as="nav"
          aria-label="Main"
          className="flex-1 overflow-y-auto py-4"
        >
          <NavLinks
            className="divide-line flex flex-col divide-y"
            linkClassName="block py-4 text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            inactiveClassName="text-muted hover:text-ink"
            activeClassName="text-ink font-semibold underline decoration-2 underline-offset-8"
            onLinkClick={close}
          />
        </Container>

        <Container className="border-line flex shrink-0 flex-col gap-3 border-t py-6">
          <a
            href={`tel:${site.phoneHref}`}
            onClick={close}
            className="text-ink focus-visible:outline-primary self-center py-2 font-medium focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span className="sr-only">Call </span>
            {site.phone}
          </a>
          <Button href={quoteLink.href} onClick={close} className="w-full">
            {quoteLink.label}
          </Button>
        </Container>
      </dialog>
    </div>
  );
}
