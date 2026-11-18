import OurStory from "@/components/about/OurStory";
import ShowroomVisit from "@/components/about/ShowroomVisit";
import Stats from "@/components/about/Stats";
import Values from "@/components/about/Values";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import PageHero from "@/components/shared/PageHero";
import QuoteBand from "@/components/shared/QuoteBand";
import { site } from "@/data/site";

export const metadata = {
  title: "About Us",
  description:
    "Meet A-One Kitchen: our story, what we stand for, and our showroom in Scarborough.",
};

export default function AboutPage() {
  const since = site.established ? ` since ${site.established}` : "";

  return (
    <>
      <PageHero
        title={`About ${site.name}`}
        subtitle={`Custom cabinetry and kitchen renovations in the GTA${since}.`}
        breadcrumbs={[{ label: "About Us" }]}
      />
      <OurStory />
      <Stats />
      <WhyChooseUs />
      <Values />
      <ShowroomVisit />
      <QuoteBand />
    </>
  );
}
