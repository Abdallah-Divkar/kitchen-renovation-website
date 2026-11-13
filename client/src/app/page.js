import Areas from "@/components/home/Areas";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import OurProducts from "@/components/home/OurProducts";
import QuoteBand from "@/components/shared/QuoteBand";
import Testimonials from "@/components/shared/Testimonials";
import { testimonials } from "@/data/testimonials";
import { homeCopy } from "@/data/home";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <OurProducts />
      <FeaturedProjects />
      <Testimonials
        testimonials={testimonials}
        eyebrow={homeCopy.testimonials.eyebrow}
        title={homeCopy.testimonials.title}
      />
      <Areas />
      <QuoteBand />
    </div>
  );
}
