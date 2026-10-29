import ProductCard from "@/components/shared/ProductCard";
import Section from "@/components/ui/Section";
import { homeCopy } from "@/data/home";
import { navLinks } from "@/data/nav";
import { products } from "@/data/products";

export default function OurProducts() {
  const { title, subtitle, linkLabel } = homeCopy.products;
  const productsLink = navLinks.find((link) => link.href === "/products");

  return (
    <Section title={title} subtitle={subtitle} align="center">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            name={product.name}
            summary={product.summary}
            image={product.image}
            imageAlt={product.imageAlt}

            href={productsLink && `${productsLink.href}#${product.slug}`}
            linkLabel={linkLabel}
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        ))}
      </div>
    </Section>
  );
}
