import { useEffect, useState } from "react";
import { site, services } from "../data/site";
import { Link } from "../lib/router";
import { useEstimate } from "../lib/estimate";
import { BrandLogo } from "./Logo";
import { Button, Container, Icon } from "./ui";

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "Roofing Services", to: "/roofing-services" },
  { label: "Our Work", to: "/our-work" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const { openEstimate } = useEstimate();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy text-white">
      <div className="h-1 w-full bg-gradient-to-r from-forest via-gold to-orange" />
      <div className="absolute inset-0 overflow-hidden opacity-[0.045]">
        <div className="bg-grid h-full w-full" />
      </div>
      <Container className="relative">
        <div className="grid gap-12 border-b border-white/10 py-14 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.1fr] lg:gap-10 lg:py-20">
          <div>
            <Link to="/" aria-label="Bob Romea Roofing — home">
              <BrandLogo onDark className="h-[66px] w-auto" />
            </Link>
            <p className="mt-6 max-w-sm text-[13.5px] leading-[1.8] text-white/55">
              Family-owned residential and commercial roofing contractor serving
              Pittsburgh, Pennsylvania and Northeast Ohio. Roofing, siding, and
              gutter solutions with a focus on clear communication and workmanship.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/55">
              <span className="border border-white/15 px-2.5 py-1.5">Residential</span>
              <span className="border border-white/15 px-2.5 py-1.5">Commercial</span>
              <span className="border border-white/15 px-2.5 py-1.5">Flat Roofing</span>
            </div>
            <Button
              onClick={() => openEstimate()}
              className="mt-7"
              size="sm"
              arrow
            >
              Get a Free Estimate
            </Button>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-white">
              Roofing Services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-[13px] leading-relaxed text-white/55 transition hover:text-orange"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[13px] leading-relaxed text-white/55 transition hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => openEstimate()}
                  className="text-left text-[13px] leading-relaxed text-white/55 transition hover:text-orange"
                >
                  Request an Estimate
                </button>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-[13px] leading-relaxed text-white/55 transition hover:text-orange"
                >
                  Privacy Policy <span className="text-white/30">(Draft)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-[13px] leading-relaxed text-white/55 transition hover:text-orange"
                >
                  Terms of Use <span className="text-white/30">(Draft)</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-white">
              Get in Touch
            </h3>
            <div className="mt-5 space-y-4 text-[13px]">
              <a
                href={site.phoneHref}
                className="group flex items-start gap-3 text-white/70 transition hover:text-white"
              >
                <Icon name="phone" size={16} className="mt-0.5 shrink-0 text-orange" />
                <span className="font-semibold tracking-wide">{site.phone}</span>
              </a>
              <a
                href={site.emailHref}
                className="flex items-start gap-3 break-all text-white/55 transition hover:text-white"
              >
                <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-orange" />
                {site.email}
              </a>
              <div className="flex items-start gap-3 text-white/55">
                <Icon name="map-pin" size={16} className="mt-0.5 shrink-0 text-orange" />
                <div>
                  <p className="font-medium text-white/75">Pittsburgh</p>
                  <p>{site.pittsburgh}</p>
                  <p className="mt-2 font-medium text-white/75">Warren</p>
                  <p>{site.warren}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/55">
                <Icon name="clock" size={16} className="mt-0.5 shrink-0 text-orange" />
                <div>
                  <p>Mon–Fri · 9:00 AM – 6:00 PM</p>
                  <p>Saturday · 9:00 AM – 2:00 PM</p>
                  <p>Sunday · Closed</p>
                  <p className="mt-1 text-[11px] text-white/35">Please call to confirm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 text-[11px] leading-relaxed text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved. Bob Romea Roofing · {site.tagline}™
          </p>
          <p className="max-w-xl md:text-right">
            Website concept for client review. Form submissions are demonstrations and are not
            delivered. Photography is representative and not a portfolio of completed projects.
          </p>
        </div>
      </Container>
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </footer>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-20 right-4 z-40 flex h-11 w-11 items-center justify-center border border-white/20 bg-navy text-white shadow-xl transition hover:bg-orange sm:bottom-6 sm:right-6"
    >
      <Icon name="arrow-up" size={18} />
    </button>
  );
}
