import { Link, usePageMeta } from "../lib/router";
import { useEstimate } from "../lib/estimate";
import { generalFaqs, img, services } from "../data/site";
import { FaqAccordion } from "../components/Faq";
import {
  Button,
  Container,
  EstimateCTA,
  Icon,
  PageHero,
  Reveal,
  SectionHeading,
} from "../components/ui";

export default function Services() {
  usePageMeta(
    "Roofing Services | Bob Romea Roofing, Pittsburgh",
    "Explore residential and commercial roofing services from Bob Romea Roofing: roof repair, replacement, flat roofing, inspections, siding, and gutters.",
  );
  const { openEstimate } = useEstimate();

  return (
    <>
      <PageHero
        eyebrow="Roofing services"
        title="Roofing Services for Homes and Commercial Buildings."
        intro="From a persistent leak to a planned exterior update, the right starting point is a conversation about the property. Explore the roofing and exterior services offered by Bob Romea Roofing."
        image={img.crewWide}
        imageAlt="Roofing crew installing shingles on a residential roof"
      >
        <Button onClick={() => openEstimate()} arrow>
          Request a Free Estimate
        </Button>
        <Button href="tel:+14127812539" variant="ghost">
          <Icon name="phone" size={15} />
          (412) 781-2539
        </Button>
      </PageHero>

      <section className="border-b border-soft bg-white">
        <Container>
          <div className="flex flex-wrap gap-x-6 gap-y-2 py-5">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#/services/${service.slug}`}
                className="text-[11.5px] font-semibold text-slate transition hover:text-orange"
              >
                {service.name}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-warm py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="What we do"
                title="A service for the condition, not just the category."
                intro="Roofing concerns rarely fit into neat boxes. These services overlap because a property's condition, materials, and goals should shape the recommendations."
              />
            </Reveal>
            <Reveal delay={100} className="lg:pt-2">
              <div className="grid gap-0 border-t border-navy/15 sm:grid-cols-2 sm:gap-x-10">
                {[
                  ["Start with the concern", "What is happening, when it started, and what the property is telling you."],
                  ["Consider the whole roof", "The surrounding condition matters as much as the visible issue."],
                  ["Match the next step", "Repair, restoration, replacement, or further review may fit different situations."],
                  ["Plan with clarity", "Scope, materials, timing, and access should be understood before work begins."],
                ].map(([title, text], index) => (
                  <div key={title} className="border-b border-navy/10 py-5">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-orange">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-[14px] font-bold text-navy">{title}</h3>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-slate">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Service overview"
            title="Explore your options."
            intro="Each service page explains common concerns, practical considerations, and the next step for the conversation."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 4) * 70}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-soft bg-warm transition duration-300 hover:-translate-y-1 hover:border-navy/25 hover:bg-white hover:shadow-[0_22px_45px_-30px_rgba(16,28,44,0.5)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/45 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">
                      {service.category}
                    </p>
                    <h2 className="mt-2 font-display text-[16.5px] font-bold leading-snug text-navy">
                      {service.name}
                    </h2>
                    <p className="mt-2 flex-1 text-[11.5px] leading-[1.7] text-slate">
                      {service.cardCopy}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wide text-navy transition group-hover:text-orange">
                      Learn more
                      <Icon name="arrow-right" size={13} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-[11px] leading-relaxed text-slate/75">
            Available services reflect the company's published information. Please confirm scope,
            materials, and current availability when you speak with the team.
          </p>
        </Container>
      </section>

      <section className="bg-[#f2f2ec] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Not sure where to start?"
                title="Tell us what you have noticed."
                intro="You do not need to diagnose the roof before reaching out. A description of the concern, the property, and what you are hoping to resolve is enough to begin."
              />
              <Button className="mt-7" onClick={() => openEstimate()} arrow>
                Start an Estimate Request
              </Button>
            </Reveal>
            <Reveal delay={100}>
              <FaqAccordion items={generalFaqs.slice(0, 5)} />
            </Reveal>
          </div>
        </Container>
      </section>

      <EstimateCTA image={img.shingleDetail} service="" />
    </>
  );
}
