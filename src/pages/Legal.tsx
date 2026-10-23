import { Link, usePageMeta } from "../lib/router";
import { privacySections, site, termsSections } from "../data/site";
import { BreadcrumbJsonLd, Button, Container, Icon } from "../components/ui";

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const isPrivacy = kind === "privacy";
  usePageMeta(
    isPrivacy ? "Privacy Policy (Draft) | Bob Romea Roofing" : "Terms of Use (Draft) | Bob Romea Roofing",
    isPrivacy
      ? "Draft privacy policy for the Bob Romea Roofing website concept. Forms are demonstrations only."
      : "Draft terms of use for the Bob Romea Roofing website concept.",
  );
  const sections = isPrivacy ? privacySections : termsSections;

  return (
    <>
      <BreadcrumbJsonLd name={isPrivacy ? "Privacy Policy" : "Terms of Use"} />
      <section className="bg-navy pb-14 pt-14 text-white sm:pb-16 sm:pt-16">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange" />
              <span className="eyebrow text-orange">{isPrivacy ? "Privacy" : "Terms"}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-display text-[clamp(2.3rem,5vw,3.8rem)] font-bold leading-[1.05]">
                {isPrivacy ? "Privacy Policy" : "Terms of Use"}
              </h1>
              <span className="border border-gold/50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-gold">
                Draft for review
              </span>
            </div>
            <p className="mt-5 text-[13.5px] leading-[1.8] text-white/60">
              This page is a clearly labeled draft prepared for the website concept. It is not
              legal advice and should be reviewed and replaced with approved policy text before a
              production launch.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:gap-16">
            <div className="max-w-2xl">
              <div className="mb-8 flex items-center gap-2 border border-gold/40 bg-[#fbf8ef] p-4">
                <Icon name="info" size={16} className="shrink-0 text-gold" />
                <p className="text-[11.5px] leading-relaxed text-charcoal/75">
                  Demonstration content only. No form on this site transmits information.
                </p>
              </div>
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <section key={section.title}>
                    <h2 className="font-display text-[19px] font-bold text-navy">
                      {String(index + 1).padStart(2, "0")} · {section.title}
                    </h2>
                    <p className="mt-2.5 text-[13.5px] leading-[1.9] text-slate">{section.body}</p>
                  </section>
                ))}
                <section>
                  <h2 className="font-display text-[19px] font-bold text-navy">
                    {String(sections.length + 1).padStart(2, "0")} · Contact
                  </h2>
                  <p className="mt-2.5 text-[13.5px] leading-[1.9] text-slate">
                    Questions about this concept can be directed to the business at{" "}
                    <a href={site.phoneHref} className="font-semibold text-navy underline decoration-orange/50 underline-offset-2">
                      {site.phone}
                    </a>{" "}
                    or{" "}
                    <a href={site.emailHref} className="break-all font-semibold text-navy underline decoration-orange/50 underline-offset-2">
                      {site.email}
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-soft bg-warm p-5">
                <p className="eyebrow text-orange">Related pages</p>
                <div className="mt-4 flex flex-col gap-3 text-[12.5px]">
                  <Link to="/contact" className="flex items-center justify-between gap-2 text-navy hover:text-orange">
                    Contact <Icon name="arrow-up-right" size={13} />
                  </Link>
                  <Link to={isPrivacy ? "/terms" : "/privacy-policy"} className="flex items-center justify-between gap-2 text-navy hover:text-orange">
                    {isPrivacy ? "Terms of Use" : "Privacy Policy"} <Icon name="arrow-up-right" size={13} />
                  </Link>
                  <Link to="/" className="flex items-center justify-between gap-2 text-navy hover:text-orange">
                    Home <Icon name="arrow-up-right" size={13} />
                  </Link>
                </div>
              </div>
              <Button to="/roofing-services" variant="dark" size="sm" className="mt-4" full arrow>
                Roofing Services
              </Button>
              <p className="mt-4 text-[10px] leading-relaxed text-slate/70">
                Last prepared for concept review. Policy content is subject to business and legal
                approval.
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
