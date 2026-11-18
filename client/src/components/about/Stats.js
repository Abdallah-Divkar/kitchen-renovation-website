import Container from "@/components/ui/Container";
import { stats } from "@/data/about";

// A value of "TODO" means the client hasn't confirmed it yet.
const isReal = (value) => Boolean(value) && !/^todo/i.test(value);

export default function Stats() {
  const shown = stats.filter(({ value }) => isReal(value));

  // One lonely number looks odd, so the band waits until at least two are real.
  if (shown.length < 2) return null;

  return (
    <section aria-label="At a glance" className="bg-surface-alt py-12 md:py-18">
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:flex lg:justify-between">
          {shown.map(({ value, label }) => (
            <li key={label}>
              <p className="font-heading text-primary text-5xl leading-[1.1] font-semibold lining-nums md:text-[4rem]">
                {value}
              </p>
              <p className="text-muted mt-2">{label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
