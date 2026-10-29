import Areas from "@/components/home/Areas";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import OurProducts from "@/components/home/OurProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import QuoteBand from "@/components/shared/QuoteBand";
import Testimonials from "@/components/shared/Testimonials";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <OurProducts />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials testimonials={testimonials} />
      <Areas />
      <QuoteBand />
    </div>
  );
}
