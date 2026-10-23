import { Link, usePageMeta } from "../lib/router";
import { useEstimate } from "../lib/estimate";
import {
  brandPrinciples,
  generalFaqs,
  homeServices,
  img,
  processSteps,
  site,
} from "../data/site";
import { FaqAccordion } from "../components/Faq";
import { Gallery } from "../components/Gallery";
import {
  Button,
  Container,
  EstimateCTA,
  Icon,
  Reveal,
  SectionHeading,
} from "../components/ui";

const heroValues = [
  { icon: "shield", title: "Quality-Focused Workmanship" },
  { icon: "message", title: "Clear, Professional Communication" },
  { icon: "home", title: "Solutions for Your Property" },
];

const trustStrip = [
  { icon: "buildings", title: "Residential & Commercial", text: "Roofing for homes and commercial buildings." },
  { icon: "shield", title: "Professional Service", text: "A considered approach from first conversation." },
  { icon: "target", title: "Project-Focused Solutions", text: "Recommendations grounded in the property." },
  { icon: "calendar", title: "Convenient Estimate Requests", text: "Start the conversation online or by phone." },
];

const matters = [
  {
    icon: "message",
    title: "Communication sets the tone",
    text: "Ask how scope, timing, access, and changes will be communicated. Clear expectations make a roofing project easier to navigate.",
  },
  {
    icon: "calendar",
    title: "Planning is part of the work",
    text: "A thoughtful plan considers the roof system, sequence, property protection, weather, and the practical details of the building.",
  },
  {
    icon: "layers",
    title: "The right solution comes first",
    text: "Repair, restoration, and replacement each serve different conditions. Recommendations should follow an understanding of the property.",
  },
];

export default function Home() {
  usePageMeta(
    "Bob Romea Roofing | Residential & Commercial Roofing in Pittsburgh",
    "Protect what matters most with residential and commercial roofing, roof repair, replacement, flat roofing, siding, and gutters from Bob Romea Roofing in Pittsburgh, PA and Warren, OH.",
  );
  const { openEstimate } = useEstimate();

  const scrollToServices = () => {
    document.getElementById("home-services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative z-10 flex items-center">
            <div className="absolute inset-0 opacity-[0.16]">
              <div className="bg-grid h-full w-full" />
              <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange/20 blur-[120px]" />
            </div>
            <div className="relative mx-auto w-full max-w-[700px] px-5 py-14 sm:px-8 sm:py-16 lg:ml-auto lg:py-24 lg:pl-12 lg:pr-14 xl:pl-16">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-orange" />
                <p className="eyebrow text-orange">Pittsburgh &amp; Northeast Ohio</p>
              </div>
              <h1 className="font-display text-[clamp(2.75rem,5.2vw,4.65rem)] font-extrabold leading-[0.98] tracking-[-0.045em]">
                Protect what matters most.{" "}
                <span className="mt-2 block text-white">
                  Start with a{" "}
                  <span className="relative inline-block">
                    stronger roof
                    <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-orange/80" />
                  </span>
                  .
                </span>
              </h1>
              <p className="mt-7 max-w-[520px] text-[14.5px] leading-[1.8] text-white/65 sm:text-[15.5px]">
                Professional roofing solutions for residential and commercial properties, with a
                focus on quality workmanship, dependable service, and lasting protection.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" onClick={() => openEstimate()} arrow>
                  Get a Free Estimate
                </Button>
                <button
                  type="button"
                  onClick={scrollToServices}
                  className="group inline-flex min-h-[54px] items-center justify-center gap-2.5 border border-white/20 px-6 text-[13px] font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5"
                >
                  Explore Our Services
                  <Icon name="arrow-right" size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <p className="mt-6 text-[10.5px] font-medium uppercase tracking-[0.15em] text-white/55">
                Residential Roofing <span className="px-1.5 text-orange">•</span> Commercial Roofing{" "}
                <span className="px-1.5 text-orange">•</span> Roofing Solutions
              </p>
              <div className="mt-9 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-3 sm:gap-3">
                {heroValues.map((value) => (
                  <div key={value.title} className="flex items-start gap-2.5">
                    <Icon name={value.icon} size={17} className="mt-0.5 shrink-0 text-orange" />
                    <span className="text-[10.5px] font-medium leading-snug tracking-wide text-white/65">
                      {value.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden sm:min-h-[440px] lg:min-h-[700px]">
            <img
              src={img.heroRoofers}
              alt="Professional roofer installing new asphalt shingles on a residential roof"
              className="absolute inset-0 h-full w-full object-cover object-center animate-fade-in"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/20 to-transparent opacity-80 lg:opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
            <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/20 bg-navy/55 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur sm:left-7 sm:top-7">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Residential &amp; Commercial
            </div>
            <div className="absolute bottom-5 right-5 left-5 border border-white/15 bg-navy/70 p-5 backdrop-blur-md sm:bottom-7 sm:left-auto sm:max-w-[315px]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-gold">A roof built on trust</p>
                  <p className="mt-2 font-display text-lg font-semibold leading-snug text-white">
                    “Building on Truth”
                  </p>
                  <p className="mt-1 text-[11px] text-white/60">
                    A guide for how the conversation should begin.
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-orange">
                  <Icon name="roof" size={21} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section aria-label="Service values" className="border-b border-soft bg-white">
        <Container>
          <div className="grid grid-cols-1 divide-y divide-soft sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {trustStrip.map((item, index) => (
              <div
                key={item.title}
                className={`flex gap-3.5 py-6 lg:px-6 ${index === 0 ? "lg:pl-0" : ""} ${
                  index % 2 === 1 ? "sm:border-l sm:border-soft sm:pl-6" : ""
                } lg:border-l-0 lg:pl-6`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center text-orange">
                  <Icon name={item.icon} size={21} />
                </span>
                <div>
                  <h2 className="font-display text-[12.5px] font-bold leading-tight text-navy">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-slate">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="home-services" className="scroll-mt-24 bg-warm py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Roofing services"
                title="Roofing solutions for every type of property."
                intro="From protecting your home to maintaining a commercial building, explore roofing services designed around the building's needs."
              />
            </Reveal>
            <Reveal delay={100} className="shrink-0">
              <Button to="/roofing-services" variant="outline" arrow>
                View All Services
              </Button>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {homeServices.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 80}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden border border-soft bg-white transition-all duration-300 hover:-translate-y-1 hover:border-navy/20 hover:shadow-[0_22px_50px_-28px_rgba(16,28,44,0.45)] focus-visible:-translate-y-1"
                  aria-label={`${service.linkLabel} — learn more`}
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-navy">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading={index > 2 ? "lazy" : "eager"}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-80" />
                    <span className="absolute left-4 top-4 flex h-8 min-w-8 items-center justify-center border border-white/30 bg-navy/50 px-2 text-[10px] font-semibold tracking-[0.12em] text-white backdrop-blur">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 flex translate-y-1 items-center justify-between gap-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="eyebrow text-white/85">Explore service</span>
                      <span className="flex h-8 w-8 items-center justify-center bg-orange text-white">
                        <Icon name="arrow-up-right" size={15} />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-[20px] font-bold leading-tight tracking-[-0.025em] text-navy">
                      {service.cardTitle}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[12.5px] leading-[1.75] text-slate">
                      {service.cardCopy}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 border-t border-soft pt-4 text-[11px] font-semibold text-navy transition group-hover:text-orange">
                      {service.linkLabel}
                      <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-[11px] leading-relaxed text-slate/80">
            Service information reflects the company's published offerings. Scope and suitability
            are confirmed for each property.
          </p>
        </Container>
      </section>

      {/* Residential feature */}
      <section className="overflow-hidden bg-[#f2f2ec] py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <Reveal className="relative">
              <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                <img
                  src={img.craftsman}
                  alt="Craftsman home with a finished roof and inviting covered porch"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-5 flex max-w-[270px] items-center gap-3 bg-navy p-4 text-white shadow-xl sm:left-8 sm:p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 text-orange">
                  <Icon name="home" size={21} />
                </span>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">Residential</p>
                  <p className="mt-1 text-[12px] font-medium leading-snug text-white/80">
                    Roof repair, replacement &amp; new roofing
                  </p>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 hidden h-24 w-24 border-r border-t border-orange/50 lg:block" aria-hidden="true" />
            </Reveal>

            <Reveal delay={100}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-orange" />
                <span className="eyebrow text-orange">For your home</span>
              </div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.15rem)] font-bold leading-[1.06] text-navy">
                Your home deserves a roof you can feel confident about.
              </h2>
              <p className="mt-5 text-[14px] leading-[1.8] text-slate">
                A roofing project should begin with understanding the home, the existing roof, and
                what you have noticed. From there, material and workmanship choices can be
                discussed in context — not as a one-size-fits-all answer.
              </p>
              <ul className="mt-6 space-y-3.5">
                {[
                  "Roofing options appropriate to the property.",
                  "Clear communication throughout the project.",
                  "A professional approach to protecting the home.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] leading-relaxed text-charcoal">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                      <Icon name="check" size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button onClick={() => openEstimate({ propertyType: "Residential" })} arrow>
                  Request a Residential Estimate
                </Button>
                <Link
                  to="/residential-roofing"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-navy underline-offset-4 hover:underline"
                >
                  Residential roofing
                  <Icon name="arrow-up-right" size={14} />
                </Link>
              </div>
              <p className="mt-4 text-[10.5px] text-slate/70">No obligation. Requesting a conversation does not confirm an appointment.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Commercial feature */}
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-20 lg:py-28">
        <div className="absolute inset-0 opacity-[0.055]">
          <div className="bg-grid h-full w-full" />
        </div>
        <div className="absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-orange/[0.07] blur-[100px]" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-orange" />
                <span className="eyebrow text-orange">For commercial properties</span>
              </div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.15rem)] font-bold leading-[1.06]">
                Dependable roofing solutions for commercial properties.
              </h2>
              <p className="mt-5 text-[14px] leading-[1.8] text-white/60">
                Commercial roofing requires careful planning, appropriate materials, and an
                understanding of the building's requirements. Start with a conversation about your
                property and project goals.
              </p>
              <div className="mt-7 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
                {[
                  { icon: "building", text: "Commercial property roofing needs" },
                  { icon: "grid", text: "Flat and low-slope options where applicable" },
                  { icon: "target", text: "Project-specific recommendations" },
                ].map((item) => (
                  <div key={item.text} className="flex flex-col gap-2">
                    <Icon name={item.icon} size={20} className="text-orange" />
                    <p className="text-[11.5px] leading-relaxed text-white/65">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button onClick={() => openEstimate({ propertyType: "Commercial" })} arrow>
                  Discuss a Commercial Project
                </Button>
                <Link
                  to="/commercial-roofing"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white/65 underline-offset-4 transition hover:text-white hover:underline"
                >
                  Commercial roofing
                  <Icon name="arrow-up-right" size={14} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={100} className="relative">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={img.commercialRooftop}
                  alt="Aerial view of a flat commercial rooftop with equipment and drainage"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
              </div>
              <div className="absolute -left-4 -top-4 hidden h-20 w-20 border-b border-l border-orange/70 lg:block" aria-hidden="true" />
              <div className="mt-4 grid grid-cols-2 border border-white/12 bg-white/[0.035] backdrop-blur">
                <div className="border-r border-white/10 p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">Systems</p>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/60">Flat &amp; low-slope roofing</p>
                </div>
                <div className="p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-orange">Approach</p>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/60">Repair, restoration or replacement</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Our work */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Our work"
                title="Quality you can see."
                intro="A closer look at the kind of roofing work, materials, and exterior details we care about. Representative photography is shown while approved company project images are gathered."
              />
            </Reveal>
            <Reveal delay={100}>
              <Button to="/our-work" variant="outline" arrow>
                View the Portfolio
              </Button>
            </Reveal>
          </div>
          <Reveal className="mt-10">
            <Gallery limit={6} />
          </Reveal>
        </Container>
      </section>

      {/* Why choose */}
      <section className="overflow-hidden bg-warm py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy lg:sticky lg:top-28">
                <img
                  src={img.rooftopCity}
                  alt="Roofing tradespeople working at a city property"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="eyebrow text-orange">Our point of view</p>
                  <p className="mt-3 font-display text-[clamp(1.35rem,2.4vw,1.8rem)] font-semibold leading-snug text-white">
                    A stronger roof begins with a clearer conversation.
                  </p>
                  <div className="mt-5 flex items-center gap-3 border-t border-white/20 pt-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">
                      {site.legalName} · Building on Truth™
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <Reveal>
                <SectionHeading
                  eyebrow="Why Bob Romea Roofing"
                  title="Roofing decisions should feel clear, not complicated."
                  intro="Choosing a roofing contractor is an important decision. The process should begin with understanding your property, discussing your concerns, and exploring practical next steps."
                />
              </Reveal>
              <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                {brandPrinciples.map((principle, index) => (
                  <Reveal key={principle.title} delay={index * 70}>
                    <div className="border-t border-navy/15 pt-5">
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center bg-navy text-orange">
                          <Icon name={principle.icon} size={20} />
                        </span>
                        <span className="font-display text-[11px] font-semibold text-slate/50">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-[15px] font-bold leading-snug text-navy">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-[12px] leading-[1.75] text-slate">{principle.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={200} className="mt-8 flex flex-wrap items-center gap-4 border-t border-navy/10 pt-6">
                <Button variant="dark" onClick={() => openEstimate()} arrow>
                  Start a Conversation
                </Button>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-navy underline-offset-4 hover:underline"
                >
                  About our approach
                  <Icon name="arrow-up-right" size={14} />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our simple process"
            title="A clear path from question to next step."
            intro="Every property is different, but a thoughtful process starts in the same place: understanding what you need and what you are working with."
            align="center"
          />
          <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">
            <div className="absolute left-0 right-0 top-[23px] hidden h-px bg-navy/12 lg:block" aria-hidden="true" />
            {processSteps.map((process, index) => (
              <Reveal key={process.number} delay={index * 90} className="relative">
                <div className="flex items-center gap-4 lg:block">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-navy/15 bg-white font-display text-[13px] font-bold text-orange">
                    {process.number}
                  </span>
                  <div className="h-px flex-1 bg-navy/10 lg:hidden" />
                </div>
                <h3 className="mt-5 font-display text-[16px] font-bold leading-snug text-navy">
                  {process.title}
                </h3>
                <p className="mt-2.5 text-[12px] leading-[1.8] text-slate">{process.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-soft bg-warm p-5 sm:flex-row sm:items-center">
            <p className="flex items-start gap-2.5 text-[11.5px] leading-relaxed text-slate">
              <Icon name="info" size={15} className="mt-0.5 shrink-0 text-orange" />
              Submitting the online form prepares a demonstration inquiry. It does not confirm an
              estimate, inspection, or appointment.
            </p>
            <a href={site.phoneHref} className="inline-flex shrink-0 items-center gap-2 text-[12px] font-semibold text-navy hover:text-orange">
              <Icon name="phone" size={14} className="text-orange" />
              {site.phone}
            </a>
          </div>
        </Container>
      </section>

      {/* What matters */}
      <section className="bg-[#f2f2ec] py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="An informed decision"
                title="What matters in a roofing project."
                intro="Without verified customer reviews on this concept site, here is what is worth considering as you evaluate any roofing conversation."
              />
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button variant="dark" onClick={() => openEstimate()} arrow>
                  Request an Estimate
                </Button>
                <Button href={site.phoneHref} variant="outline">
                  <Icon name="phone" size={15} />
                  Call the Team
                </Button>
              </div>
            </Reveal>
            <div className="grid gap-4">
              {matters.map((matter, index) => (
                <Reveal key={matter.title} delay={index * 80}>
                  <div className="flex items-start gap-5 border border-navy/10 bg-white p-5 sm:p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-warm text-orange">
                      <Icon name={matter.icon} size={21} />
                    </span>
                    <div>
                      <h3 className="font-display text-[15.5px] font-bold leading-snug text-navy">
                        {matter.title}
                      </h3>
                      <p className="mt-2 text-[12px] leading-[1.8] text-slate">{matter.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <p className="mt-1 text-[10.5px] leading-relaxed text-slate/70">
                This concept site does not display invented reviews, ratings, or customer
                testimonials. Verified reviews can be added when supplied and approved.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Frequently asked"
                title="Questions worth asking."
                intro="A few clear answers to help you prepare for the conversation. For project-specific guidance, speak directly with the team."
              />
              <div className="mt-7 border-l-2 border-orange bg-warm p-5">
                <p className="font-display text-[14px] font-semibold text-navy">Still deciding?</p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-slate">
                  Call to talk through the property and what you have noticed.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-3 inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-navy hover:text-orange"
                >
                  <Icon name="phone" size={15} className="text-orange" />
                  {site.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <FaqAccordion items={generalFaqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <EstimateCTA image={img.crew} />
    </>
  );
}
