import { PinIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

// A drawn "map" (grid, road and pin) that opens the real location on Google Maps.
// No embedded Google map: nothing loads from Google until someone clicks.
export default function MapLink({ className }) {
  return (
    <a
      href={site.mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group rounded-card border-line bg-raised relative block overflow-hidden border",
        "focus-visible:outline-primary focus-visible:outline-2 focus-visible:outline-offset-4",
        className,
      )}
    >
      {/* Grid lines and a road, drawn with CSS; purely decorative */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-size-[3.5rem_3.5rem]"
      />
      <span
        aria-hidden="true"
        className="bg-line absolute inset-y-0 left-1/2 w-3.5 -translate-x-1/2"
      />

      <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
        <PinIcon className="text-primary size-11 transition-transform group-hover:-translate-y-1" />
        <span className="bg-surface text-ink rounded-sm px-3 py-1.5 text-center text-sm">
          {site.name} showroom · Open in Google Maps{" "}
          <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </span>
      </span>
    </a>
  );
}
