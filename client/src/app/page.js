import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import OurProducts from "@/components/home/OurProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <OurProducts />
      <FeaturedProjects />
    </div>
  );
}
