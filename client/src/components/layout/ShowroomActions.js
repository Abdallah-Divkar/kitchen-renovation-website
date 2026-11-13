import { PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

// Bar height without the phone's home-bar area: 15px + 46px button + 15px.
const barSpace = "h-[calc(4.75rem+env(safe-area-inset-bottom))]";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const barButton = cn(
  "rounded-button inline-flex h-11.5 items-center justify-center gap-2 text-[15px] font-medium transition-colors",
  focusRing,
);

// Directions open Google Maps in a new tab (or the Maps app on a phone).
const newTab = { target: "_blank", rel: "noopener noreferrer" };

export default function ShowroomActions() {
  return (
    <>
      {/* Empty space at the end of the page, so the bar never covers the footer or form buttons */}
      <div aria-hidden="true" className={cn(barSpace, "lg:hidden")} />

      <aside aria-label="Showroom shortcuts">
        {/* Mobile: fixed bar at the bottom of the screen */}
        <div className="bg-raised border-line fixed inset-x-0 bottom-0 z-20 grid grid-cols-2 gap-3 border-t px-4 pt-3.75 pb-[calc(0.9375rem+env(safe-area-inset-bottom))] lg:hidden">
          <a
            href={site.directionsUrl}
            {...newTab}
            className={cn(
              barButton,
              "bg-primary text-surface hover:bg-primary-hover",
            )}
          >
            <PinIcon className="size-4.5" />
            Get Directions
            <span className="sr-only"> (opens Google Maps)</span>
          </a>
          <a
            href={`tel:${site.phoneHref}`}
            className={cn(
              barButton,
              "border-primary text-ink hover:bg-surface border",
            )}
          >
            <PhoneIcon className="size-4.5" />
            Call
            <span className="sr-only"> {site.phone}</span>
          </a>
        </div>

        {/* Desktop: small pill fixed in the bottom-right corner */}
        <a
          href={site.directionsUrl}
          {...newTab}
          className={cn(
            "bg-raised border-primary text-ink hover:bg-surface-alt fixed right-6 bottom-6 z-20 hidden items-center gap-2.5 rounded-full border px-6 py-3.5 text-[15px] font-medium shadow-lg shadow-black/40 transition-colors lg:inline-flex",
            focusRing,
          )}
        >
          <PinIcon className="text-primary size-4.5" />
          Visit Our Showroom
          <span className="sr-only"> (opens Google Maps)</span>
        </a>
      </aside>
    </>
  );
}
