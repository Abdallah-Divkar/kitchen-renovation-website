"use client";

import {
  Children,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/cn";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const arrowButton = cn(
  "border-line text-ink hover:border-primary hover:text-primary inline-flex size-11 items-center justify-center rounded-full border transition-colors disabled:pointer-events-none disabled:opacity-40",
  focusRing,
);

// One slide on phones with the next one peeking in, 2 on tablets, 3 on desktop.
// The calc() widths leave room for the gaps (gap-5 = 1.25rem) between slides.
const defaultSlideWidths =
  "w-[85%] sm:w-[60%] md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]";

// Width of one slide plus the gap after it: how far one step scrolls.
function slideStep(track) {
  const first = track.firstElementChild;
  if (!first) return 0;
  const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
  return first.getBoundingClientRect().width + gap;
}

export default function Carousel({
  label,
  heading,
  slideClassName = defaultSlideWidths,
  className,
  children,
}) {
  const slides = Children.toArray(children);
  const total = slides.length;

  const trackRef = useRef(null);
  const trackId = useId();
  const [state, setState] = useState({
    first: 0, // index of the first fully visible slide
    visible: 1, // how many slides fit on screen
    atStart: true,
    atEnd: false,
    scrollable: false, // false when every slide already fits
  });
  const [announcement, setAnnouncement] = useState("");

  // Reads the track's scroll position and works out which slides are showing.
  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = slideStep(track);
    const maxScroll = track.scrollWidth - track.clientWidth;
    setState({
      first: step ? Math.round(track.scrollLeft / step) : 0,
      visible: step ? Math.max(1, Math.round(track.clientWidth / step)) : 1,
      atStart: track.scrollLeft <= 1,
      atEnd: track.scrollLeft >= maxScroll - 1,
      scrollable: maxScroll > 1,
    });
  }, []);

  // Recalculate on scroll (swipe, arrows, keyboard) and when the size changes.
  // ResizeObserver also runs once on mount, which sets the first values.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(track);
    track.addEventListener("scroll", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      track.removeEventListener("scroll", schedule);
    };
  }, [update]);

  if (total === 0) return null;

  const { first, visible, atStart, atEnd, scrollable } = state;
  // Number of stops: with 10 slides and 3 visible, the first one can be slides 1 to 8.
  const stops = Math.max(1, total - visible + 1);

  const describe = (start) => {
    const end = Math.min(total, start + visible);
    return visible === 1
      ? `Slide ${start + 1} of ${total}`
      : `Slides ${start + 1} to ${end} of ${total}`;
  };

  const go = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollBy({
      left: direction * slideStep(track),
      behavior: reduceMotion ? "auto" : "smooth",
    });
    // Screen readers hear where the buttons moved to.
    const target = Math.min(stops - 1, Math.max(0, first + direction));
    setAnnouncement(describe(target));
  };

  // Decorative position dots: screen readers get the slide labels instead.
  const dots = (
    <div aria-hidden="true" className="flex items-center gap-2">
      {Array.from({ length: stops }, (_, i) => (
        <span
          key={i}
          className={cn(
            "rounded-full transition-colors",
            i === first ? "bg-primary size-2.5" : "bg-muted/40 size-2",
          )}
        />
      ))}
    </div>
  );

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={cn("flex flex-col gap-8 md:gap-12", className)}
    >
      {(heading || scrollable) && (
        <div className="flex items-end justify-between gap-6">
          <div className="min-w-0">{heading}</div>
          {scrollable && (
            <div className="hidden shrink-0 items-center gap-4 md:flex">
              <button
                type="button"
                aria-label="Previous slides"
                aria-controls={trackId}
                disabled={atStart}
                onClick={() => go(-1)}
                className={arrowButton}
              >
                <ArrowLeftIcon className="size-5" />
              </button>
              {dots}
              <button
                type="button"
                aria-label="Next slides"
                aria-controls={trackId}
                disabled={atEnd}
                onClick={() => go(1)}
                className={arrowButton}
              >
                <ArrowRightIcon className="size-5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* The negative margins and matching padding let slides run to the edge of
          Container's padding (px-4 / sm:px-6 / lg:px-8), so the next slide peeks in. */}
      <div
        id={trackId}
        ref={trackRef}
        tabIndex={scrollable ? 0 : undefined}
        className={cn(
          "-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto overscroll-x-contain px-4 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:-mx-8 lg:scroll-px-8 lg:px-8",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          focusRing,
        )}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.key ?? i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}`}
            className={cn("shrink-0 snap-start", slideClassName)}
          >
            {slide}
          </div>
        ))}
      </div>

      {scrollable && <div className="-mt-2 md:hidden">{dots}</div>}

      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </div>
  );
}
