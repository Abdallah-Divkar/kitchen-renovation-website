import Button from "@/components/ui/Button";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { contactCopy } from "@/data/contact";
import { site } from "@/data/site";

const linkClass =
  "hover:text-primary rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

// One row: icon, small label, then the value.
function Row({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <Icon className="text-primary mt-0.5 size-5.5 shrink-0" />
      <div>
        <dt className="text-muted text-xs font-semibold tracking-[0.12em] uppercase">
          {label}
        </dt>
        <dd className="text-ink mt-1 text-lg leading-snug">{children}</dd>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  const { address } = site;
  // The real email isn't known yet, so show a note instead of a fake address.
  const hasEmail = site.email && !site.email.includes("example.com");

  return (
    <div>
      <h2 className="text-ink text-3xl font-semibold">
        {contactCopy.info.title}
      </h2>
      <dl className="mt-7 flex flex-col gap-7">
        <Row icon={PhoneIcon} label="Phone">
          <a href={`tel:${site.phoneHref}`} className={linkClass}>
            {site.phone}
          </a>
        </Row>
        <Row icon={MailIcon} label="Email">
          {hasEmail ? (
            <a href={`mailto:${site.email}`} className={linkClass}>
              {site.email}
            </a>
          ) : (
            contactCopy.info.emailPending
          )}
        </Row>
        <Row icon={PinIcon} label="Showroom">
          <address className="not-italic">
            {address.street}, {address.unit}
            <br />
            {address.city}, {address.province} {address.postalCode}
          </address>
        </Row>
        <Row icon={ClockIcon} label="Hours">
          {site.hours.map(({ days, hours }) => (
            <span key={days} className="block">
              {days}: {hours}
            </span>
          ))}
        </Row>
      </dl>
      <Button
        href={`tel:${site.phoneHref}`}
        variant="outline"
        className="border-primary! mt-8 px-6! py-3!"
      >
        Call Now
        <span className="sr-only"> {site.phone}</span>
      </Button>
    </div>
  );
}
