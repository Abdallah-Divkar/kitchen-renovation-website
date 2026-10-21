import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = { title: "UI Test" };

export default function UiTestPage() {
  return (
    <main>
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
    </main>
  );
}
