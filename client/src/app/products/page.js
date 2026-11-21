import MaterialCard from "@/components/products/MaterialCard";
import ProductCardLarge from "@/components/products/ProductCardLarge";
import PageHero from "@/components/shared/PageHero";
import QuoteBand from "@/components/shared/QuoteBand";
import Section from "@/components/ui/Section";
import { materials, materialsCopy } from "@/data/materials";
import { products, productsCopy } from "@/data/products";

export const metadata = {
  title: "Products",
  description:
    "Custom kitchen cabinets, bathroom vanities, closets and wardrobes, and countertops, plus the materials and finishes we work with.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero {...productsCopy.hero} breadcrumbs={[{ label: "Products" }]} />

      <Section {...productsCopy.grid}>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {products.map((product) => (
            <ProductCardLarge
              key={product.slug}
              id={product.slug}
              name={product.name}
              summary={product.summary}
              image={product.image}
              imageAlt={product.imageAlt}
            />
          ))}
        </div>
      </Section>

      <Section alt {...materialsCopy}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {materials.map((material) => (
            <MaterialCard
              key={material.slug}
              name={material.name}
              summary={material.summary}
              image={material.image}
              imageAlt={material.imageAlt}
            />
          ))}
        </div>
      </Section>

      <QuoteBand />
    </>
  );
}
