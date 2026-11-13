import ContactInfo from "@/components/contact/ContactInfo";
import VisitShowroom from "@/components/contact/VisitShowroom";
import PageHero from "@/components/shared/PageHero";
import Container from "@/components/ui/Container";
import { contactCopy } from "@/data/contact";
import QuoteForm from "@/components/contact/QuoteForm";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  const { title, subtitle } = contactCopy.hero;

  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Phones: the showroom comes first, because the site's goal is a showroom visit.
          Desktop: it comes after the form. Only one copy is ever displayed, so screen
          readers and keyboards never meet it twice. */}
      <VisitShowroom className="lg:hidden" />

      <section className="py-16 md:py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-16">
          <QuoteForm />

          <aside aria-label="Contact information" className="hidden lg:block">
            <ContactInfo />
          </aside>
        </Container>
      </section>

      <VisitShowroom className="hidden lg:block" />
    </>
  );
}
