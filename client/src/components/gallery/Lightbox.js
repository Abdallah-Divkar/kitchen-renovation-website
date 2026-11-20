"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { isPlaceholder } from "@/components/shared/CardImage";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
} from "@/components/ui/Icons";
import { getCategoryLabel } from "@/data/gallery";
import { cn } from "@/lib/cn";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const roundButton = cn(
  "bg-surface/80 border-line text-ink hover:border-primary hover:text-primary inline-flex size-12 items-center justify-center rounded-full border transition-colors",
  focusRing,
);

// How far a finger must travel sideways (px) to count as a swipe.
const SWIPE_DISTANCE = 50;

/**
 * Full-screen photo viewer. `items` is the list currently shown in the grid
 * (already filtered), `index` the open photo, or null when closed.
 */
export default function Lightbox({ items, index, onChange, onClose }) {
  const dialogRef = useRef(null);
  const touchStartX = useRef(null);
  const open = index !== null;
  const item = open ? items[index] : null;
  const total = items.length;

  useBodyScrollLock(open);

  // Keep the <dialog> in sync. showModal() keeps focus inside and makes the page
  // behind inert; closing it returns focus to the photo that opened it.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Wraps around: after the last photo comes the first.
  const go = (step) => onChange((index + step + total) % total);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") go(1);
    if (event.key === "ArrowLeft") go(-1);
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) > SWIPE_DISTANCE) go(distance < 0 ? 1 : -1);
  };

  const meta = item
    ? [item.city, getCategoryLabel(item.category)].filter(Boolean).join(" · ")
    : "";

  return (
    <dialog
      ref={dialogRef}
      aria-label={
        item ? `${item.title}, photo ${index + 1} of ${total}` : "Photo"
      }
      // Escape fires "cancel": route it through the parent's state.
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={onClose}
      onKeyDown={onKeyDown}
      // A click on the dark area around the photo closes it.
      onClick={(event) => {
        if (
          event.target === event.currentTarget ||
          event.target.dataset.backdrop
        )
          onClose();
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={onTouchEnd}
      className="bg-surface text-ink m-0 h-dvh max-h-none w-full max-w-none border-0 p-0 open:flex"
    >
      {item && (
        <div
          data-backdrop="true"
          className="flex w-full flex-col items-center justify-center gap-4 px-4 pt-[calc(1rem+env(safe-area-inset-top))] pb-[calc(1rem+env(safe-area-inset-bottom))] sm:px-20"
        >
          <button
            type="button"
            aria-label="Close photo"
            onClick={onClose}
            className={cn(
              roundButton,
              "absolute top-[calc(1rem+env(safe-area-inset-top))] right-4",
            )}
          >
            <CloseIcon className="size-6" />
          </button>

          <figure className="flex w-full max-w-6xl flex-col items-center gap-4">
            <div className="relative h-[65dvh] w-full">
              {isPlaceholder(item.image) ? (
                <div className="rounded-card bg-placeholder text-muted flex h-full items-center justify-center p-6 text-center">
                  [ Photo: {item.imageAlt} ]
                </div>
              ) : (
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              )}
            </div>
            <figcaption className="text-center">
              <span className="text-ink block text-lg font-medium">
                {item.title}
              </span>
              <span className="text-muted block text-sm">
                {meta}
                {meta && " · "}
                {index + 1} of {total}
              </span>
            </figcaption>
          </figure>

          {total > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={() => go(-1)}
                className={cn(
                  roundButton,
                  "absolute top-1/2 left-4 -translate-y-1/2 max-sm:hidden",
                )}
              >
                <ArrowLeftIcon className="size-6" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={() => go(1)}
                className={cn(
                  roundButton,
                  "absolute top-1/2 right-4 -translate-y-1/2 max-sm:hidden",
                )}
              >
                <ArrowRightIcon className="size-6" />
              </button>
              {/* Phones: arrows under the photo, where thumbs reach; swiping works too */}
              <div className="flex gap-4 sm:hidden">
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={() => go(-1)}
                  className={roundButton}
                >
                  <ArrowLeftIcon className="size-6" />
                </button>
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={() => go(1)}
                  className={roundButton}
                >
                  <ArrowRightIcon className="size-6" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </dialog>
  );
}
