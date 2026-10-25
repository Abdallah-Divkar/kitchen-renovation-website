import Link from "next/link";
import Container from "@/components/ui/Container";
import { cities } from "@/data/cities";
import { navLinks } from "@/data/nav";
import { products } from "@/data/products";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

// Hard-coded for now: Cache Components may reject reading the current date here
const copyrightYear = 2026;

const projectsLink = navLinks.find((link) => link.href === "/projects");

const linkClass =
  "rounded-sm hover:text-surface hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface";
const headingClass = "text-base font-semibold text-surface";
const listClass = "mt-3 flex flex-col gap-3 text-[15px]";

export default function Footer() {
  const { address } = site;

  return (
    <footer className="bg-footer text-footer-text pt-18 pb-8">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand: the business name stands in for the logo until it arrives */}
          <div className="flex flex-col gap-3.5">
            <Link
              href="/"
              className={cn(linkClass, "text-surface w-fit text-xl font-bold")}
            >
              {site.name}
            </Link>
            <p className="text-[15px]">{site.tagline}</p>
            <ul
              aria-label="Social media"
              className="text-surface flex flex-wrap gap-x-4 gap-y-2 text-[15px] font-medium"
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
              {projectsLink && (
                <li>
                  <Link href={projectsLink.href} className={linkClass}>
                    {projectsLink.label}
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          <nav aria-labelledby="footer-areas">
            <h2 id="footer-areas" className={headingClass}>
              Areas We Serve
            </h2>
            <ul className={listClass}>
              {cities.map(({ slug, name }) => (
                <li key={slug}>
                  <Link href="/areas" className={linkClass}>
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
                  Showroom: {address.street}, {address.city}, {address.province}{" "}
                  {address.postalCode}
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
          {/* Placeholder text until a privacy policy page exists */}
          <p>Privacy Policy</p>
        </div>
      </Container>
    </footer>
  );
}
