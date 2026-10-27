import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/data/products";
import CityCard from "@/components/shared/CityCard";
import { cities } from "@/data/cities";
import ProjectCard from "@/components/shared/ProjectCard";
import { getCategoryLabel, projects } from "@/data/projects";
import TestimonialCard from "@/components/shared/TestimonialCard";
import Testimonials from "@/components/shared/Testimonials";
import { testimonials } from "@/data/testimonials";
import QuoteBand from "@/components/shared/QuoteBand";
import PageHero from "@/components/shared/PageHero";

// Edge-case data for testing only. Real content lives in src/data/.
const longProduct = {
  name: "An Unusually Long Product Name That Wraps Onto Two or Three Lines",
  summary:
    "A deliberately long summary to check wrapping. Made-to-measure cabinetry designed around your space, storage needs and style, with door profiles, finishes and hardware chosen together in our showroom.",
  image: "",
  imageAlt: "Long product name test",
};

export const metadata = { title: "UI Test", robots: { index: false } }; // {robots} = This page is for testing UI components and should not be indexed by search engines MQ.

export default function UiTestPage() {
  return (
    <div>
      <PageHero
        title="Our Products"
        subtitle="PageHero with breadcrumb, subtitle and the quote button."
        breadcrumbs={[{ label: "Products" }]}
        showQuoteButton
      />

      <Section
        title="ProductCard: plain (Home)"
        subtitle="Each link jumps to its framed card below."
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              {...product}
              href={`#${product.slug}`}
              linkLabel="View products"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </div>
      </Section>

      <Section
        alt
        title="ProductCard: framed (Products page)"
        subtitle="No link until detail pages are confirmed. Last two: long text, and no summary."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              id={product.slug}
              {...product}
              framed
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ))}
          <ProductCard {...longProduct} framed />
          <ProductCard {...longProduct} name="No summary" summary="" framed />
        </div>
      </Section>

      <Section
        title="CityCard"
        subtitle="From cities.js. The last card has a link and no tags."
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <CityCard key={city.slug} {...city} />
          ))}
          <CityCard {...cities[0]} name="Link test" tags={[]} href="/areas" />
        </div>
      </Section>

      <Section
        alt
        title="ProjectCard"
        subtitle="projects.js has only one entry: check the grid with one card."
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              {...project}
              type={getCategoryLabel(project.category)}
            />
          ))}
        </div>
      </Section>

      <Testimonials testimonials={testimonials} />

      <Testimonials
        alt={false}
        title="Testimonials with one item"
        testimonials={testimonials.slice(0, 1)}
      />

      <Testimonials title="This heading should NOT appear" testimonials={[]} />

      <Section
        alt
        title="TestimonialCard on its own"
        subtitle="With a rating, and with no city."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <TestimonialCard
            quote="Great work from start to finish."
            name="Test Client"
            city="Toronto"
            rating={5}
          />
          <TestimonialCard
            quote="With a rating, with no city, and a long review."
            name="Test Client"
          />
          <TestimonialCard
            quote="A much longer review to check wrapping. They designed our whole kitchen around the way we cook, built every cabinet in their own shop and installed it in four days. The soft-close drawers and the quartz counters still look new a year later."
            name="Test Client With A Long Name"
            city="Richmond Hill"
          />
        </div>
      </Section>

      <QuoteBand />

      <Section
        title="Buttons"
        subtitle="Primary, secondary and outline in each mode"
      >
        <div className="grid gap-8">
          {["primary", "secondary", "outline"].map((variant) => (
            <div key={variant}>
              <p className="text-muted mb-3 text-sm font-semibold">{variant}</p>
              <div className="flex flex-wrap gap-4">
                <Button variant={variant}>As button</Button>
                <Button variant={variant} href="/products">
                  As internal link
                </Button>
                <Button variant={variant} href="tel:+10000000000">
                  As tel link
                </Button>
                <Button variant={variant} disabled>
                  Disabled
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        alt
        title="Section with alt background"
        subtitle="This one uses bg-surface-alt"
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="text-xl font-semibold">Card one</h3>
            <p className="text-muted mt-2">Plain card content.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Card two</h3>
            <p className="text-muted mt-2">
              Border, radius and shadow come from tokens.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Card three</h3>
            <p className="text-muted mt-2">
              Resize the window to check the grid.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Section without a title prop"
          subtitle="Heading added manually, left-aligned"
          align="left"
        />
        <Container className="border-line border border-dashed py-6">
          Container: dashed outline shows the max width and side padding.
        </Container>
      </Section>
    </div>
  );
}
