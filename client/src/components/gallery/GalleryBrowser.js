"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import { isPlaceholder } from "@/components/shared/CardImage";
import { ExpandIcon } from "@/components/ui/Icons";
import { galleryCategories, getCategoryLabel } from "@/data/gallery";
import { cn } from "@/lib/cn";
import Lightbox from "./Lightbox";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

// The chosen filter lives in the address (#kitchens), so it can be shared and the
// browser's back button steps through filters. These three functions let React
// read the address bar like any other piece of state.
function subscribe(onChange) {
  window.addEventListener("popstate", onChange);
  window.addEventListener("hashchange", onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener("hashchange", onChange);
  };
}
const getHash = () => window.location.hash.slice(1);
const getServerHash = () => "";

export default function GalleryBrowser({ items }) {
  const hash = useSyncExternalStore(subscribe, getHash, getServerHash);
  const [openIndex, setOpenIndex] = useState(null);

  // Only categories that have photos get a button; "All" always does.
  const filters = galleryCategories
    .map((category) => ({
      ...category,
      count:
        category.value === "all"
          ? items.length
          : items.filter((item) => item.category === category.value).length,
    }))
    .filter((category) => category.count > 0);

  // An unknown or empty #hash means "All".
  const active = filters.some((f) => f.value === hash && hash !== "all")
    ? hash
    : "all";
  const shown =
    active === "all" ? items : items.filter((item) => item.category === active);

  const choose = (value) => {
    const url =
      value === "all"
        ? window.location.pathname + window.location.search
        : `#${value}`;
    // pushState adds a history step without reloading; React hears about it
    // through the popstate event we send right after.
    window.history.pushState(null, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const announcement =
    active === "all"
      ? `Showing all ${shown.length} photos`
      : `Showing ${shown.length} ${shown.length === 1 ? "photo" : "photos"} of ${getCategoryLabel(active).toLowerCase()}`;

  return (
    <>
      {/* Phones: one row that scrolls sideways if the buttons don't fit */}
      <div
        role="group"
        aria-label="Filter photos"
        className="-mx-4 flex [scrollbar-width:none] gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {filters.map(({ value, label, count }) => {
          const pressed = value === active;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={pressed}
              onClick={() => choose(value)}
              className={cn(
                "shrink-0 rounded-full border px-5 py-2.5 text-[15px] font-medium whitespace-nowrap transition-colors",
                focusRing,
                pressed
                  ? "bg-primary border-primary text-surface"
                  : "border-line text-ink hover:border-primary",
              )}
            >
              {label}{" "}
              <span className={pressed ? "text-surface/70" : "text-muted"}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 lg:gap-8">
        {shown.map((item, index) => {
          const meta = [item.city, getCategoryLabel(item.category)]
            .filter(Boolean)
            .join(" · ");
          return (
            <li key={item.slug}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`View larger: ${item.title}`}
                className={cn(
                  "group rounded-card bg-placeholder relative block aspect-[4/3] w-full overflow-hidden",
                  focusRing,
                )}
              >
                {isPlaceholder(item.image) ? (
                  <span className="text-muted absolute inset-0 flex items-center justify-center p-3 text-center text-xs sm:text-sm">
                    [ Photo: {item.imageAlt} ]
                  </span>
                ) : (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    // The first row is on screen straight away, so load it first.
                    loading={index < 3 ? "eager" : undefined}
                    className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="bg-surface/80 text-ink absolute right-3 bottom-3 hidden size-9 items-center justify-center rounded-full opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:flex"
                >
                  <ExpandIcon className="size-4.5" />
                </span>
              </button>
              {/* Captions from tablet up; on phones they show in the lightbox */}
              <div className="mt-3 max-sm:hidden">
                <p className="text-ink text-lg font-medium">{item.title}</p>
                {meta && <p className="text-muted mt-1 text-sm">{meta}</p>}
              </div>
            </li>
          );
        })}
      </ul>

      <Lightbox
        items={shown}
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </>
  );
}
