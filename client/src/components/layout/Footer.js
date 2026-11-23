import Link from "next/link";
import Container from "@/components/ui/Container";
import { contactCopy } from "@/data/contact";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import Logo from "./Logo";
import LinkArrow from "@/components/ui/LinkArrow";

// Hard-coded for now: Cache Components may reject reading the current date here
const copyrightYear = 2026;

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";
const linkClass = cn("rounded-sm hover:underline", focusRing);
const headingClass =
  "text-primary font-sans! text-xs font-semibold tracking-[0.17em] uppercase";
const listClass = "text-ink mt-3 flex flex-col gap-3";

export default function Footer() {
  const { address } = site;
  const cityLine = `${address.city}, ${address.province}${address.postalCode ? ` ${address.postalCode}` : ""}`;
  const hasEmail = site.email && !site.email.includes("example.com");
  // Links the client hasn't sent yet are still "#": hide them instead of showing dead links
  const social = site.social.filter(({ href }) => href && href !== "#");

  return (
    <footer className="bg-footer text-footer-text">
      <Container className="pt-20 pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:flex lg:gap-16">
          <div className="flex flex-col items-start gap-4 lg:w-85">
            <Logo className={focusRing} imageClassName="h-14" />
            <p className="leading-relaxed">{site.shortDescription}</p>
            {social.length > 0 && (
              <ul
                aria-label="Social media"
                className="text-ink flex flex-wrap gap-x-2 text-[15px] font-medium"
              >
                {social.map(({ label, href }, index) => (
                  <li key={label} className="flex gap-2">
                    {index > 0 && <span aria-hidden="true">·</span>}
                    <a href={href} className={linkClass}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-labelledby="footer-pages">
            <h2 id="footer-pages" className={headingClass}>
              Pages
            </h2>
            <ul className={listClass}>
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Visit the showroom</h2>
            <ul className={listClass}>
              <li>
                {address.street}, {address.unit}
              </li>
              <li>{cityLine}</li>
              {site.hours.map(({ days, hours }) => (
                <li key={days}>
                  {days}: {hours}
                </li>
              ))}
              <li>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("group text-primary", linkClass)}
                >
                  Get Directions <LinkArrow />
                  <span className="sr-only"> (opens Google Maps)</span>
                </a>
              </li>
            </ul>
          </div>

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
                {hasEmail ? (
                  <a href={`mailto:${site.email}`} className={linkClass}>
                    {site.email}
                  </a>
                ) : (
                  contactCopy.info.emailPending
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-footer-line text-footer-muted mt-14 border-t pt-14 text-sm">
          {/* "Privacy Policy" is placeholder text until a privacy page exists */}
          <p>
            © {copyrightYear} {site.name}. All rights reserved.{" "}
            <span aria-hidden="true">·</span> Privacy Policy
          </p>
        </div>
      </Container>
    </footer>
  );
}
