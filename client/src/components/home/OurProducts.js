import Link from "next/link";
import ProductCard from "@/components/shared/ProductCard";
import Section from "@/components/ui/Section";
import { homeCopy } from "@/data/home";
import { navLinks } from "@/data/nav";
import { products } from "@/data/products";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export default function OurProducts() {
  const { eyebrow, title, subtitle, linkLabel, allLinkLabel } =
    homeCopy.products;
  const productsLink = navLinks.find((link) => link.href === "/products");

  return (
    <Section alt eyebrow={eyebrow} title={title} subtitle={subtitle}>
      {/* Phones: compact 2 × 2 grid. Desktop: 4 columns with summaries and links. */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            name={product.name}
            summary={product.summary}
            image={product.image}
            imageAlt={product.imageAlt}
            href={productsLink && `${productsLink.href}#${product.slug}`}
            linkLabel={linkLabel}
            compactOnMobile
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        ))}
      </div>

      {/* Phones only: the cards have no links there, so one link for all of them */}
      {productsLink && (
        <Link
          href={productsLink.href}
          className={`text-primary mt-8 inline-block rounded-sm text-[15px] font-medium underline-offset-4 hover:underline sm:hidden ${focusRing}`}
        >
          {allLinkLabel} <span aria-hidden="true">→</span>
        </Link>
      )}
    </Section>
  );
}
