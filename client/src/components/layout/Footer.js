import Link from "next/link";
import Container from "@/components/ui/Container";
import { products } from "@/data/products";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

// Hard-coded for now: Cache Components may reject reading the current date here
const copyrightYear = 2026;

const linkClass =
  "rounded-sm hover:text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const headingClass = "text-base font-semibold text-ink";
const listClass = "mt-3 flex flex-col gap-3 text-[15px]";

export default function Footer() {
  const { address } = site;

  return (
    <footer className="bg-footer text-footer-text border-footer-line border-t pt-18 pb-8">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Brand: the business name stands in for the logo until it arrives.AD */}
          <div className="flex flex-col gap-3.5">
            <Link
              href="/"
              className={cn(linkClass, "text-ink w-fit text-xl font-bold")}
            >
              {site.name}
            </Link>
            <p className="text-[15px]">{site.tagline}</p>
            <ul
              aria-label="Social media"
              className="text-ink flex flex-wrap gap-x-4 gap-y-2 text-[15px] font-medium"
            >
              {site.social.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-labelledby="footer-products">
            <h2 id="footer-products" className={headingClass}>
              Products
            </h2>
            <ul className={listClass}>
              {products.map(({ slug, name }) => (
                <li key={slug}>
                  <Link href="/products" className={linkClass}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Contact</h2>
            <ul className={listClass}>
              <li>
                <a href={`tel:${site.phoneHref}`} className={linkClass}>
                  <span className="sr-only">Call </span>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={linkClass}>
                  {site.email}
                </a>
              </li>
              <li>
                <address className="not-italic">
                  Showroom: {address.street}, {address.unit}, {address.city},{" "}
                  {address.province} {address.postalCode}
                </address>
              </li>
              {site.hours.map(({ days, hours }) => (
                <li key={days}>
                  {days}: {hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-footer-line text-footer-muted mt-12 flex flex-col gap-2 border-t pt-6 text-sm sm:flex-row sm:justify-between">
          <p>
            © {copyrightYear} {site.name}. All rights reserved.
          </p>
          {/* Placeholder text until a privacy policy page exists.AD */}
          <p>Privacy Policy</p>
        </div>
      </Container>
    </footer>
  );
}
