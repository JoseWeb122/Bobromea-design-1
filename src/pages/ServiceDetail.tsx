import { Link, usePageMeta } from "../lib/router";
import { useEstimate } from "../lib/estimate";
import { getService, img, services, site } from "../data/site";
import { FaqAccordion } from "../components/Faq";
import {
  BreadcrumbJsonLd,
  Button,
  Container,
  EstimateCTA,
  Icon,
  PageHero,
  Reveal,
  SectionHeading,
} from "../components/ui";

const supportingImage: Record<string, { src: string; alt: string }> = {
  Residential: {
    src: img.slateInstall,
    alt: "Roofing team installing a new roof on a brick home",
  },
  Commercial: {
    src: img.commercialRooftop,
    alt: "Aerial view of a commercial low-slope roof",
  },
  Both: {
    src: img.shingleDetail,
    alt: "Close view of asphalt roof shingles",
  },
};

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = getService(slug);
  const { openEstimate } = useEstimate();

  usePageMeta(
    service
      ? `${service.name} | Bob Romea Roofing`
      : "Service not found | Bob Romea Roofing",
    service
      ? `${service.cardCopy} Bob Romea Roofing serves Pittsburgh, PA and Warren, OH.`
      : "Explore roofing services from Bob Romea Roofing.",
  );

  if (!service) {
    return (
      <section className="bg-warm py-24">
        <Container>
          <p className="eyebrow text-orange">Service not found</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-navy">This page is not available.</h1>
          <p className="mt-4 max-w-xl text-slate">
            Explore the full roofing service overview or return to the homepage.
          </p>
          <div className="mt-7 flex gap-3">
            <Button to="/roofing-services">View Roofing Services</Button>
            <Button to="/" variant="outline">Back Home</Button>
          </div>
        </Container>
      </section>
    );
  }

  const related = service.related.map(getService).filter(Boolean);
  const support = supportingImage[service.category];
  const propertyType =
    service.category === "Residential"
      ? ("Residential" as const)
      : service.category === "Commercial"
        ? ("Commercial" as const)
        : undefined;
  const estimateService = service.name === "Residential Roofing" || service.name === "Commercial Roofing"
    ? ""
    : service.name;

  return (
    <>
      <BreadcrumbJsonLd name={service.name} />
      <PageHero
        eyebrow={service.name}
        title={service.headline}
        intro={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        <Button
          onClick={() =>
            openEstimate({ propertyType, service: estimateService || undefined })
          }
          arrow
        >
          Request a Free Estimate
        </Button>
        <Button href={site.phoneHref} variant="ghost">
          <Icon name="phone" size={15} />
          {site.phone}
        </Button>
      </PageHero>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-orange" />
                <span className="eyebrow text-orange">The starting point</span>
              </div>
              <h2 className="font-display text-[clamp(1.8rem,3.3vw,2.7rem)] font-bold leading-[1.1] text-navy">
                {service.cardTitle}, understood in context.
              </h2>
              <p className="mt-5 text-[14px] leading-[1.85] text-slate">{service.intro}</p>
              <p className="mt-4 text-[14px] leading-[1.85] text-slate">
                The right approach depends on the property, the existing roof assembly, visible
                conditions, and what you are hoping to achieve. That is why the first step is a
                conversation — not a predetermined package.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  ["Property-led", "Begin with the building and its condition."],
                  ["Practical", "Explore options that fit the situation."],
                  ["Coordinated", "Clarify scope, timing, and expectations."],
                  ["Accessible", "Start online or pick up the phone."],
                ].map(([title, text]) => (
                  <div key={title} className="flex items-start gap-3 border border-soft bg-warm p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-orange text-white">
                      <Icon name="check" size={11} />
                    </span>
                    <div>
                      <p className="font-display text-[12.5px] font-bold text-navy">{title}</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <aside className="border-t-2 border-orange bg-navy p-6 text-white sm:p-7">
                <p className="eyebrow text-orange">Common customer needs</p>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug">
                  Are you noticing something similar?
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {service.needs.map((need) => (
                    <li key={need} className="flex items-start gap-2.5 text-[12px] leading-relaxed text-white/65">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange" />
                      {need}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() =>
                    openEstimate({ propertyType, service: estimateService || undefined })
                  }
                  className="mt-6 inline-flex w-full items-center justify-between border border-white/20 px-4 py-3 text-[11.5px] font-semibold text-white transition hover:border-orange hover:bg-orange"
                >
                  Describe your project
                  <Icon name="arrow-up-right" size={15} />
                </button>
              </aside>
              <div className="mt-4 flex items-center justify-between gap-4 border border-soft p-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate">Prefer to call?</p>
                  <a href={site.phoneHref} className="mt-1 block font-display text-[17px] font-bold text-navy hover:text-orange">
                    {site.phone}
                  </a>
                </div>
                <Icon name="phone" size={22} className="text-orange" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#f2f2ec] py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="How this service comes together."
            intro="A clear process helps keep the work connected to the property and its requirements."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {service.approach.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="h-full border-t border-navy/20 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center bg-navy text-orange">
                      <Icon name={index === 0 ? "search" : index === 1 ? "layers" : "shield"} size={19} />
                    </span>
                    <span className="font-display text-[11px] font-semibold text-slate/55">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[16px] font-bold leading-snug text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[12px] leading-[1.8] text-slate">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden bg-navy">
                <img
                  src={support.src}
                  alt={support.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 max-w-[240px] bg-navy/85 p-3 text-[10px] leading-relaxed text-white/60 backdrop-blur sm:bottom-6 sm:left-6">
                Representative roofing photography — not a claimed completed project.
              </div>
            </Reveal>
            <Reveal delay={100} className="order-1 lg:order-2">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-orange" />
                <span className="eyebrow text-orange">Practical considerations</span>
              </div>
              <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.6rem)] font-bold leading-[1.1] text-navy">
                What shapes the recommendation.
              </h2>
              <p className="mt-4 text-[13.5px] leading-[1.8] text-slate">
                These are the kinds of details that make each {service.name.toLowerCase()} project
                different. They can be discussed as part of your estimate conversation.
              </p>
              <ul className="mt-6 space-y-3">
                {service.considerations.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-soft pb-3 text-[12.5px] leading-relaxed text-charcoal">
                    <Icon name="check" size={15} className="mt-0.5 shrink-0 text-orange" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                variant="dark"
                className="mt-7"
                onClick={() => openEstimate({ propertyType, service: estimateService || undefined })}
                arrow
              >
                Discuss Your Project
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#f2f2ec] py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow={`${service.name} FAQ`}
                title="A few practical questions."
                intro="Helpful answers to prepare for the conversation. Project-specific questions are best discussed directly with the team."
              />
              <div className="mt-7">
                <Button href={site.phoneHref} variant="outline">
                  <Icon name="phone" size={15} />
                  Call {site.phone}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <FaqAccordion items={service.faqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 border-b border-soft pb-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Keep exploring" title="Related roofing services." className="max-w-2xl" />
            <Button to="/roofing-services" variant="outline" size="sm" arrow>
              All Services
            </Button>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((item) =>
              item ? (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group border border-soft bg-warm transition hover:border-navy/25 hover:bg-white"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <h3 className="font-display text-[14.5px] font-bold leading-snug text-navy">{item.name}</h3>
                    <Icon name="arrow-up-right" size={16} className="shrink-0 text-orange" />
                  </div>
                </Link>
              ) : null,
            )}
          </div>
        </Container>
      </section>

      <EstimateCTA
        propertyType={propertyType}
        service={estimateService || undefined}
        title={`Ready to talk about ${service.name.toLowerCase()}?`}
        text="Share a little about the property and the concern. The conversation can begin from there."
        image={service.image}
      />
      <section className="bg-white py-8">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-soft pt-6">
            <p className="text-[11px] text-slate">
              Explore all {services.length} published service areas with Bob Romea Roofing.
            </p>
            <div className="flex flex-wrap gap-4 text-[11px] font-semibold text-navy">
              <Link to="/our-work" className="hover:text-orange">Our Work</Link>
              <Link to="/about" className="hover:text-orange">About Us</Link>
              <Link to="/contact" className="hover:text-orange">Contact</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
