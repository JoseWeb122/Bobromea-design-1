import { Link, usePageMeta } from "../lib/router";
import { useEstimate } from "../lib/estimate";
import { img } from "../data/site";
import { Gallery } from "../components/Gallery";
import {
  Button,
  Container,
  EstimateCTA,
  Icon,
  PageHero,
  Reveal,
  SectionHeading,
} from "../components/ui";

export default function OurWork() {
  usePageMeta(
    "Our Work & Representative Roofing Photography | Bob Romea Roofing",
    "Explore representative residential and commercial roofing photography from Bob Romea Roofing. Verified company project imagery is pending approval for this concept.",
  );
  const { openEstimate } = useEstimate();

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Quality You Can See."
        intro="Roofing is visual work. Explore representative photography of the materials, details, and types of projects that define residential and commercial roofing — while approved Bob Romea Roofing project images are being gathered."
        image={img.slateInstall}
        imageAlt="Roofers installing a new slate-style roof on a brick home"
      >
        <Button onClick={() => openEstimate()} arrow>
          Request a Free Estimate
        </Button>
      </PageHero>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 border-b border-soft pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeading
              eyebrow="A representative portfolio"
              title="Look closely at the details."
              intro="Filter by property type and project focus. Select any image to open a larger view, then use the previous and next controls — or the arrow keys — to browse."
            />
            <div className="flex flex-wrap gap-3">
              <div className="border border-soft bg-warm px-4 py-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate">Residential</p>
                <p className="mt-1 font-display text-[13px] font-bold text-navy">Shingle &amp; metal systems</p>
              </div>
              <div className="border border-soft bg-warm px-4 py-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate">Commercial</p>
                <p className="mt-1 font-display text-[13px] font-bold text-navy">Flat &amp; low-slope</p>
              </div>
            </div>
          </div>
          <Reveal className="mt-8">
            <Gallery />
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#f2f2ec] py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="About this gallery"
                title="Honest imagery, clearly labeled."
                intro="The existing website does not provide a fully verified project archive. Rather than invent project names, addresses, or outcomes, this concept uses relevant roofing photography and labels it as representative."
              />
              <div className="mt-6 border-l-2 border-orange bg-white p-5">
                <p className="flex items-start gap-2.5 text-[12px] leading-[1.8] text-slate">
                  <Icon name="info" size={15} className="mt-0.5 shrink-0 text-orange" />
                  Before launch, replace these images with approved company project photographs and
                  add descriptions only where the details can be verified.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid border-t border-navy/15 sm:grid-cols-2 sm:gap-x-10">
                {[
                  {
                    title: "Roof replacement detail",
                    text: "Look for consistent shingle lines, clean edges, and careful penetration detailing.",
                  },
                  {
                    title: "Flat roof drainage",
                    text: "Drains, scuppers, seams, and equipment details all influence how a low-slope roof performs.",
                  },
                  {
                    title: "Complete exteriors",
                    text: "Roof, siding, trim, and gutters should read as a considered whole rather than separate parts.",
                  },
                  {
                    title: "Safe work practices",
                    text: "Access, staging, and fall protection are part of the work behind the finished photograph.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="border-b border-navy/10 py-5">
                    <p className="font-display text-[10px] font-bold uppercase tracking-[0.14em] text-orange">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 font-display text-[14.5px] font-bold text-navy">{item.title}</h3>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-slate">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button to="/roofing-services" variant="dark" arrow>
                  Explore Roofing Services
                </Button>
                <Link to="/about" className="text-[12px] font-semibold text-navy underline-offset-4 hover:underline">
                  About Bob Romea Roofing
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <EstimateCTA
        title="Your property could be the next conversation."
        text="Tell us what you are seeing, what you are planning, and what would help you move forward."
        image={img.crew}
      />
    </>
  );
}
