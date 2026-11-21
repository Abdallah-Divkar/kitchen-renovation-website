import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

// A live Google map of the showroom, with a link to open it in Google Maps.
export default function ShowroomMap({ className }) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={cn(
          "rounded-card border-line bg-raised overflow-hidden border",
          className,
        )}
      >
        <iframe
          src={site.mapEmbedUrl}
          title={`Map showing the ${site.name} showroom`}
          // Only loads when scrolled near, so the rest of the page isn't slowed down.
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="block h-full w-full border-0"
        />
      </div>
      <a
        href={site.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-primary self-start rounded-sm text-[15px] font-medium underline-offset-4 hover:underline ${focusRing}`}
      >
        Open in Google Maps <span aria-hidden="true">↗</span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  );
}
