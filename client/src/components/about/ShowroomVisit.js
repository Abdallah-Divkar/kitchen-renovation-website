import CardImage from "@/components/shared/CardImage";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutCopy } from "@/data/about";
import { site } from "@/data/site";

const button = "px-7! py-3.5! text-[15px]!";

// "See it in person": text and Get Directions on the left, photo on the right.
export default function ShowroomVisit() {
  const { eyebrow, title, image, imageAlt } = aboutCopy.showroom;
  const { address } = site;

  const fullAddress = [
    address.street,
    address.unit,
    address.city,
    address.province,
  ].join(", ");

  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={`See cabinet styles, materials and finishes at our ${address.city} showroom. ${site.visitNote}.`}
            className="mb-6!"
          />
          <address className="text-ink not-italic">
            {fullAddress}
            {address.postalCode && ` ${address.postalCode}`}
          </address>
          <p className="text-ink mt-2 text-[15px]">
            {site.hours
              .map(({ days, hours }) => `${days}: ${hours}`)
              .join(" · ")}
          </p>

          <Button
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${button} mt-8`}
          >
            Get Directions
            <span className="sr-only"> (opens Google Maps)</span>
          </Button>
        </div>

        <CardImage
          src={image}
          alt={imageAlt}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[560/380]"
        />
      </div>
    </Section>
  );
}
