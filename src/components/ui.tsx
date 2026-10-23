import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "../utils/cn";
import { useEstimate } from "../lib/estimate";
import { Link } from "../lib/router";
import { img, site } from "../data/site";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

const paths: Record<string, ReactNode> = {
  home: <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />,
  building: (
    <>
      <path d="M3 21h18M5 21V6l7-3v18M12 21V9l7 3v9" />
      <path d="M8 8v1M8 12v1M8 16v1M16 14v1M16 18v1" />
    </>
  ),
  buildings: (
    <>
      <path d="M3 21h18M4 21V8l6-4v17M10 21V10l5 3v8M15 21v-5l5-3v8" />
      <path d="M7 9v1M7 13v1M7 17v1M18 16v1" />
    </>
  ),
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18l3 3 6.4-6.4a4 4 0 0 0 5.3-5.4l-2.6 2.6-3-3z" />,
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  droplet: <path d="M12 2.7 6.3 8.4a8 8 0 1 0 11.4 0z" />,
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  message: <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  "arrow-right": <path d="M4 12h16m-6-6 6 6-6 6" />,
  "arrow-left": <path d="M20 12H4m6-6-6 6 6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  "arrow-up": <path d="M12 20V4m-6 6 6-6 6 6" />,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />,
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  "chevron-left": <path d="m15 18-6-6 6-6" />,
  "chevron-right": <path d="m9 18 6-6-6-6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  roof: (
    <>
      <path d="M2 13 12 3l10 10" />
      <path d="M5 11v10h14V11M9 21v-6h6v6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  "zoom-in": (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4M11 8v6M8 11h6" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
};

export function Icon({
  name,
  className,
  size = 20,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths["arrow-right"]}
    </svg>
  );
}

type ButtonVariant = "primary" | "dark" | "outline" | "light" | "ghost" | "gold";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  to?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
  arrow?: boolean;
  full?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-orange text-white shadow-[0_10px_28px_-12px_rgba(244,119,50,0.65)] hover:bg-orange-deep hover:shadow-[0_16px_34px_-14px_rgba(244,119,50,0.7)]",
  dark: "bg-navy text-white hover:bg-charcoal",
  outline: "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-white",
  light: "bg-white text-navy hover:bg-warm",
  ghost: "border border-white/25 bg-transparent text-white hover:border-white/60 hover:bg-white/10",
  gold: "bg-gold text-white hover:bg-[#a3864b]",
};

const sizes = {
  sm: "min-h-10 px-4 py-2 text-[12.5px]",
  md: "min-h-12 px-5 py-3 text-[13px]",
  lg: "min-h-[54px] px-7 py-3.5 text-[13.5px]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  type = "button",
  className,
  disabled,
  ariaLabel,
  arrow = false,
  full = false,
}: ButtonProps) {
  const classes = cn(
    "group/btn inline-flex items-center justify-center gap-2.5 rounded-sm font-sans font-semibold tracking-[0.02em] transition-all duration-300 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    full && "w-full",
    className,
  );
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <Icon
          name="arrow-right"
          size={16}
          className="transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={cn("reveal", className)} data-reveal style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      {eyebrow && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-7 bg-orange" />
          <span className="eyebrow text-orange">{eyebrow}</span>
        </div>
      )}
      <h2
        className={cn(
          "font-display text-[clamp(2rem,4vw,3.35rem)] font-bold leading-[1.06]",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[15px] leading-[1.75]",
            align === "center" && "mx-auto",
            light ? "text-white/65" : "text-slate",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
      </div>
      <div className="relative">
        <Container className="pb-16 pt-16 lg:pb-24 lg:pt-24">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[11px] font-medium tracking-[0.12em] text-white/45 uppercase">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-orange">{eyebrow}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange" />
              <span className="eyebrow text-orange">{eyebrow}</span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.3rem)] font-bold leading-[1.02] tracking-[-0.035em]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/70 sm:text-base">
              {intro}
            </p>
            {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
          </div>
        </Container>
      </div>
      <div className="relative border-t border-white/10">
        <Container>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 py-4 text-[11px] font-medium tracking-[0.14em] text-white/50 uppercase">
            <span>Residential</span>
            <span aria-hidden="true" className="text-orange">•</span>
            <span>Commercial</span>
            <span aria-hidden="true" className="text-orange">•</span>
            <span>Repair & Replacement</span>
            <span className="ml-auto hidden items-center gap-2 sm:flex">
              <Icon name="phone" size={13} className="text-orange" />
              {site.phone}
            </span>
          </div>
        </Container>
      </div>
    </section>
  );
}

export function EstimateCTA({
  title = "Ready to Take the Next Step With Your Roof?",
  text = "Tell us a little about your property and what you need. We'll make it easy to start the conversation.",
  propertyType,
  service,
  image = img.crew,
}: {
  title?: string;
  text?: string;
  propertyType?: "Residential" | "Commercial";
  service?: string;
  image?: string;
}) {
  const { openEstimate } = useEstimate();
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/45" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>
      <Container className="relative">
        <div className="grid items-center gap-10 py-16 lg:grid-cols-[1fr_auto] lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-orange" />
              <span className="eyebrow text-orange">Start a conversation</span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.06] text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-white/65">{text}</p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:flex-row lg:flex-col lg:items-stretch">
            <Button
              size="lg"
              onClick={() => openEstimate({ propertyType, service })}
              arrow
            >
              Request a Free Estimate
            </Button>
            <Button to="/contact" variant="ghost" size="lg">
              Contact Our Team
              <Icon name="arrow-up-right" size={16} />
            </Button>
            <p className="max-w-[280px] text-[11px] leading-relaxed text-white/55">
              Prefer to talk it through?{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-white/80 underline decoration-orange/60 underline-offset-2 transition hover:text-orange"
              >
                Call {site.phone}
              </a>{" "}
              during published business hours.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function BreadcrumbJsonLd({ name }: { name: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name },
          ],
        }),
      }}
    />
  );
}
