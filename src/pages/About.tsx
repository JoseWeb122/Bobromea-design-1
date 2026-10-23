import { Link, usePageMeta } from "../lib/router";
import { useEstimate } from "../lib/estimate";
import { brandPrinciples, img, site } from "../data/site";
import {
  Button,
  Container,
  EstimateCTA,
  Icon,
  PageHero,
  Reveal,
  SectionHeading,
} from "../components/ui";

export default function About() {
  usePageMeta(
    "About Bob Romea Roofing | Family-Owned Roofing in Pittsburgh",
    "Learn about Bob Romea Roofing, a family-owned residential and commercial roofing contractor serving Pittsburgh, PA and Warren, OH.",
  );
  const { openEstimate } = useEstimate();

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built Around the Importance of Protecting Your Property."
        intro="Bob Romea Roofing, also known as BRC Roofing, is a family-owned residential and commercial roofing contractor serving Pittsburgh, Pennsylvania and Northeast Ohio. The work is guided by the simple idea behind the company's mark: Building on Truth."
        image={img.crew}
        imageAlt="Roofing professional at work on a residential roof"
      >
        <Button onClick={() => openEstimate()} arrow>
          Request an Estimate
        </Button>
        <Button href={site.phoneHref} variant="ghost">
          <Icon name="phone" size={15} />
          {site.phone}
        </Button>
      </PageHero>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-orange" />
                <span className="eyebrow text-orange">The company</span>
              </div>
              <h2 className="font-display text-[clamp(2rem,3.6vw,2.9rem)] font-bold leading-[1.08] text-navy">
                Roofing rooted in the property and the people who own it.
              </h2>
              <div className="mt-6 space-y-4 text-[14px] leading-[1.85] text-slate">
                <p>
                  A roofing project asks property owners to make decisions about systems they do
                  not look at every day. The work should make that process easier to understand —
                  from the first conversation about a leak or an aging roof to the details reviewed
                  before the project begins.
                </p>
                <p>
                  The company's published services cover residential and commercial roofing,
                  including roof repair and replacement, new roof installation, flat and low-slope
                  roofing, commercial roof restoration, siding, and gutters. Both homes and
                  commercial buildings are part of the work.
                </p>
                <p>
                  Bob Romea Roofing serves Pittsburgh, PA from its Middle Street location and also
                  has a Warren, Ohio presence. The team's tagline — Building on Truth — is a useful
                  standard for how a construction conversation should feel: direct, grounded, and
                  focused on the property in front of you.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Focus", value: "Residential & commercial" },
                  { label: "Based in", value: "Pittsburgh, PA" },
                  { label: "Also serving", value: "Warren, OH" },
                ].map((item) => (
                  <div key={item.label} className="border-t border-navy/15 pt-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate">{item.label}</p>
                    <p className="mt-1.5 font-display text-[13px] font-bold leading-snug text-navy">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-navy">
                  <img
                    src={img.rooftopCity}
                    alt="Roofing tradespeople working at a property"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="eyebrow text-orange">Published locations</p>
                    <p className="mt-3 flex items-start gap-2.5 text-[12px] leading-relaxed text-white/75">
                      <Icon name="map-pin" size={15} className="mt-0.5 shrink-0 text-gold" />
                      <span>{site.pittsburgh}<br />{site.warren}</span>
                    </p>
                  </div>
                </div>
                <p className="mt-2 flex items-start gap-1.5 text-[10px] leading-relaxed text-slate">
                  <Icon name="info" size={11} className="mt-0.5 shrink-0" />
                  Representative work photography, not a verified team or project photo. Replace
                  with approved company imagery before launch.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="bg-grid h-full w-full" />
        </div>
        <Container className="relative">
          <SectionHeading
            eyebrow="How we think about it"
            title="Principles for a better roofing conversation."
            intro="Not superlatives. A practical standard for how the work should be approached."
            light
            align="center"
          />
          <div className="mt-10 grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {brandPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 70}>
                <div className="h-full bg-navy p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-white/15 text-orange">
                      <Icon name={principle.icon} size={19} />
                    </span>
                    <span className="font-display text-[10px] font-semibold text-white/25">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-[14.5px] font-bold leading-snug">{principle.title}</h3>
                  <p className="mt-2.5 text-[11.5px] leading-[1.8] text-white/50">{principle.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f2f2ec] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="What you can expect"
                title="A straightforward starting point."
                intro="The conversation should help you understand the property, the options, and what the next step involves — without pressure to decide before you are ready."
              />
              <ul className="mt-7 space-y-4">
                {[
                  ["Property-specific context", "Discussion grounded in the building, its condition, and the concerns you have noticed."],
                  ["Clear scope conversations", "A chance to understand what the work involves and what is included before moving forward."],
                  ["Respect for the property", "Planning around access, protection, and the practical realities of an occupied home or building."],
                  ["An honest next step", "If more information or a different specialist is needed, that should be part of the conversation."],
                ].map(([title, text]) => (
                  <li key={title} className="flex items-start gap-3.5 border-b border-navy/10 pb-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-orange text-white">
                      <Icon name="check" size={13} />
                    </span>
                    <div>
                      <p className="font-display text-[13.5px] font-bold text-navy">{title}</p>
                      <p className="mt-1 text-[12px] leading-relaxed text-slate">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-4">
                <Button onClick={() => openEstimate()} arrow>Start a Conversation</Button>
                <Button to="/contact" variant="outline">Contact Details</Button>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-white p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-soft pb-5">
                  <div>
                    <p className="eyebrow text-orange">Visit or call</p>
                    <h3 className="mt-2 font-display text-[22px] font-bold text-navy">Bob Romea Roofing</h3>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center border border-navy/12 text-gold">
                    <Icon name="roof" size={23} />
                  </span>
                </div>
                <div className="mt-5 space-y-5 text-[12.5px]">
                  <a href={site.phoneHref} className="flex items-start gap-3 text-navy hover:text-orange">
                    <Icon name="phone" size={16} className="mt-0.5 shrink-0 text-orange" />
                    <span className="font-semibold">{site.phone}</span>
                  </a>
                  <a href={site.emailHref} className="flex items-start gap-3 break-all text-slate hover:text-navy">
                    <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-orange" />
                    {site.email}
                  </a>
                  <div className="flex items-start gap-3 text-slate">
                    <Icon name="map-pin" size={16} className="mt-0.5 shrink-0 text-orange" />
                    <div>
                      <p className="font-medium text-navy">Pittsburgh</p>
                      <p>{site.pittsburgh}</p>
                      <p className="mt-2 font-medium text-navy">Warren</p>
                      <p>{site.warren}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-t border-soft pt-5 text-slate">
                    <Icon name="clock" size={16} className="mt-0.5 shrink-0 text-orange" />
                    <div>
                      {site.hours.map((entry) => (
                        <div key={entry.day} className="flex justify-between gap-6">
                          <span>{entry.day}</span>
                          <span className="font-medium text-navy">{entry.time}</span>
                        </div>
                      ))}
                      <p className="mt-2 text-[10.5px] text-slate/70">
                        Published hours. Please call ahead to confirm availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 border border-gold/40 bg-[#fbf8ef] p-4">
                <p className="flex items-start gap-2 text-[11px] leading-relaxed text-charcoal/70">
                  <Icon name="info" size={13} className="mt-0.5 shrink-0 text-gold" />
                  This concept deliberately omits unverified credentials, licenses, awards, or
                  company years. Add these only after the business has confirmed them for launch.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 border border-soft p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="eyebrow text-orange">Explore the work</p>
              <p className="mt-2 font-display text-xl font-bold text-navy">
                See the materials, details, and exterior work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/our-work" variant="dark" arrow>View Our Work</Button>
              <Link to="/roofing-services" className="inline-flex items-center gap-1.5 px-2 py-3 text-[12px] font-semibold text-navy underline-offset-4 hover:underline">
                Roofing services
                <Icon name="arrow-up-right" size={14} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <EstimateCTA image={img.heroHome} />
    </>
  );
}
