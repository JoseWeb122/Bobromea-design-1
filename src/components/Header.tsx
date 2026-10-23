import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { site } from "../data/site";
import { Link, useRouter } from "../lib/router";
import { useEstimate } from "../lib/estimate";
import { BrandLogo } from "./Logo";
import { Button, Container, Icon } from "./ui";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Residential Roofing", to: "/residential-roofing" },
  { label: "Commercial Roofing", to: "/commercial-roofing" },
  { label: "Roofing Services", to: "/roofing-services" },
  { label: "Our Work", to: "/our-work" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { path } = useRouter();
  const { openEstimate } = useEstimate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (to: string) => {
    if (to === "/") return path === "/";
    if (to === "/roofing-services") return path === "/roofing-services" || path.startsWith("/services/");
    return path === to;
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-navy focus:shadow-xl"
      >
        Skip to main content
      </a>

      <div className="relative z-[55] bg-navy text-white">
        <Container>
          <div className="flex min-h-9 items-center justify-between gap-4 py-2 text-[10px] font-medium tracking-[0.08em] sm:text-[11px]">
            <div className="flex items-center gap-2.5">
              <span className="hidden h-1.5 w-1.5 rounded-full bg-orange sm:block" />
              <Icon name="roof" size={14} className="text-gold sm:hidden" />
              <span className="text-white/75">Residential &amp; Commercial Roofing Solutions</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="hidden items-center gap-1.5 text-white/55 lg:flex">
                <Icon name="map-pin" size={12} className="text-gold" />
                {site.serviceArea}
              </span>
              <a
                href={site.phoneHref}
                className="flex items-center gap-1.5 font-semibold tracking-[0.04em] text-white transition hover:text-orange"
              >
                <Icon name="phone" size={12} className="text-orange" />
                {site.phone}
              </a>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-transparent bg-white/98 backdrop-blur transition-all duration-300",
          scrolled && "border-soft shadow-[0_10px_34px_-22px_rgba(16,28,44,0.45)]",
        )}
      >
        <Container>
          <div
            className={cn(
              "flex items-center justify-between gap-4 transition-all duration-300",
              scrolled ? "h-[72px]" : "h-[84px]",
            )}
          >
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              aria-label="Bob Romea Roofing — return to homepage"
              className="group flex shrink-0 items-center focus-visible:rounded-sm"
            >
              <BrandLogo className="h-11 w-auto transition-opacity duration-300 group-hover:opacity-90 sm:h-12 xl:h-[52px]" />
            </Link>

            <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={isActive(item.to) ? "page" : undefined}
                  className={cn(
                    "relative rounded-sm px-2.5 py-2.5 text-[12px] font-semibold tracking-[-0.015em] transition-colors duration-200",
                    isActive(item.to)
                      ? "text-navy"
                      : "text-charcoal/70 hover:text-navy",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-2.5 -bottom-0.5 h-[2px] origin-left bg-orange transition-transform duration-300",
                      isActive(item.to) ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href={site.phoneHref}
                aria-label={`Call Bob Romea Roofing at ${site.phone}`}
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-soft text-navy transition hover:border-navy hover:bg-navy hover:text-white xl:hidden"
              >
                <Icon name="phone" size={18} />
              </a>
              <div className="hidden sm:block">
                <Button
                  size="sm"
                  onClick={() => openEstimate()}
                  className="px-5 text-[11.5px] uppercase tracking-[0.09em]"
                  arrow
                >
                  Get a Free Estimate
                </Button>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((value) => !value)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-soft text-navy transition hover:border-navy xl:hidden"
              >
                <Icon name={menuOpen ? "close" : "menu"} size={20} />
              </button>
            </div>
          </div>
        </Container>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full max-h-[calc(100vh-71px)] overflow-y-auto border-t border-soft bg-white shadow-2xl animate-fade-in xl:hidden"
          >
            <div className="mx-auto max-w-[1320px] px-5 py-6 sm:px-8">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navItems.map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive(item.to) ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between border-b border-soft/80 py-4 font-display text-lg font-semibold tracking-[-0.02em] transition-colors",
                      isActive(item.to) ? "text-orange" : "text-navy hover:text-orange",
                    )}
                    style={{ animationDelay: `${index * 35}ms` }}
                  >
                    {item.label}
                    <Icon name="arrow-up-right" size={17} className="text-slate/60" />
                  </Link>
                ))}
              </nav>
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  openEstimate();
                }}
                size="lg"
                full
                arrow
                className="mt-6"
              >
                Get a Free Estimate
              </Button>
              <div className="mt-6 grid gap-3 bg-warm p-4 text-sm">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 font-semibold text-navy"
                >
                  <Icon name="phone" size={15} className="text-orange" />
                  {site.phone}
                </a>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-2.5 break-all text-slate"
                >
                  <Icon name="mail" size={15} className="text-orange" />
                  {site.email}
                </a>
                <p className="flex items-start gap-2.5 text-slate">
                  <Icon name="map-pin" size={15} className="mt-0.5 shrink-0 text-orange" />
                  {site.pittsburgh}
                  <br />&amp; {site.warren}
                </p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile persistent action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 p-2.5 shadow-[0_-8px_30px_-18px_rgba(16,28,44,0.5)] backdrop-blur sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={site.phoneHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 border border-navy/15 text-[12px] font-semibold text-navy"
          >
            <Icon name="phone" size={15} className="text-orange" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => openEstimate()}
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-orange text-[12px] font-semibold text-white"
          >
            Free Estimate
            <Icon name="arrow-right" size={14} />
          </button>
        </div>
      </div>
    </>
  );
}
