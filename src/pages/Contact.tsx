import { useState, type FormEvent } from "react";
import { cn } from "../utils/cn";
import { usePageMeta } from "../lib/router";
import { useEstimate } from "../lib/estimate";
import { img, serviceOptions, site } from "../data/site";
import {
  Button,
  Container,
  EstimateCTA,
  Icon,
  PageHero,
  Reveal,
} from "../components/ui";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  service: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  service: "",
  message: "",
};

const inputClass =
  "w-full border bg-white px-4 py-3 text-sm text-navy placeholder:text-slate/55 transition focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20";

export default function Contact() {
  usePageMeta(
    "Contact Bob Romea Roofing | Pittsburgh, PA",
    "Contact Bob Romea Roofing at (412) 781-2539 or 1936 Middle St, Pittsburgh, PA 15215. Serving Pittsburgh, PA and Warren, OH.",
  );
  const { openEstimate } = useEstimate();
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (key: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const next: Partial<Record<keyof ContactForm, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = "Enter a valid email address.";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Enter a valid phone number with at least 10 digits.";
    if (!form.propertyType) next.propertyType = "Select a property type.";
    if (!form.service) next.service = "Select the service you need.";
    if (form.message.trim().length < 10) next.message = "Please add at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1300);
  };

  const restart = () => {
    setForm(initialForm);
    setErrors({});
    setStatus("idle");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Property."
        intro="Tell us what you have noticed or what you are planning. For the fastest, most direct conversation, call Bob Romea Roofing during published business hours."
        image={img.craftsman}
        imageAlt="Residential home with a finished roof and welcoming exterior"
      >
        <Button href={site.phoneHref} arrow>
          Call {site.phone}
        </Button>
        <Button href={site.emailHref} variant="ghost">
          <Icon name="mail" size={15} />
          Email the Team
        </Button>
      </PageHero>

      <section className="bg-warm py-14 sm:py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            {/* Contact details */}
            <div>
              <Reveal>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-7 bg-orange" />
                  <span className="eyebrow text-orange">Contact details</span>
                </div>
                <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-[1.08] text-navy">
                  A direct line to the conversation.
                </h2>
                <p className="mt-4 text-[13.5px] leading-[1.8] text-slate">
                  Bob Romea Roofing serves residential and commercial property owners from
                  Pittsburgh, Pennsylvania and Warren, Ohio.
                </p>
              </Reveal>

              <div className="mt-8 space-y-px bg-navy/10">
                <Reveal>
                  <a
                    href={site.phoneHref}
                    className="group flex items-start justify-between gap-5 bg-white p-5 transition hover:bg-navy"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange/10 text-orange transition group-hover:bg-orange group-hover:text-white">
                        <Icon name="phone" size={18} />
                      </span>
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate transition group-hover:text-white/50">
                          Phone
                        </p>
                        <p className="mt-1 font-display text-[19px] font-bold text-navy transition group-hover:text-white">
                          {site.phone}
                        </p>
                        <p className="mt-1 text-[10.5px] text-slate transition group-hover:text-white/50">
                          Tap to call from your phone
                        </p>
                      </div>
                    </div>
                    <Icon name="arrow-up-right" size={17} className="mt-2 text-slate/50 transition group-hover:text-orange" />
                  </a>
                </Reveal>

                <Reveal>
                  <a
                    href={site.emailHref}
                    className="group flex items-start justify-between gap-5 bg-white p-5 transition hover:bg-navy"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange/10 text-orange transition group-hover:bg-orange group-hover:text-white">
                        <Icon name="mail" size={18} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate transition group-hover:text-white/50">
                          Email
                        </p>
                        <p className="mt-1 break-all font-display text-[13.5px] font-bold text-navy transition group-hover:text-white">
                          {site.email}
                        </p>
                        <p className="mt-1 text-[10.5px] text-slate transition group-hover:text-white/50">
                          Opens your email application
                        </p>
                      </div>
                    </div>
                    <Icon name="arrow-up-right" size={17} className="mt-2 shrink-0 text-slate/50 transition group-hover:text-orange" />
                  </a>
                </Reveal>

                <Reveal>
                  <div className="bg-white p-5">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange/10 text-orange">
                        <Icon name="map-pin" size={18} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate">Published locations</p>
                        <div className="mt-2 grid gap-4 sm:grid-cols-2">
                          <div>
                            <p className="font-display text-[12.5px] font-bold text-navy">Pittsburgh</p>
                            <p className="mt-0.5 text-[11.5px] leading-relaxed text-slate">{site.pittsburgh}</p>
                            <a
                              href="https://www.google.com/maps/search/?api=1&query=1936+Middle+St+Pittsburgh+PA+15215"
                              target="_blank"
                              rel="noreferrer"
                              className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold text-orange underline-offset-2 hover:underline"
                            >
                              Directions
                              <Icon name="arrow-up-right" size={11} />
                            </a>
                          </div>
                          <div>
                            <p className="font-display text-[12.5px] font-bold text-navy">Warren</p>
                            <p className="mt-0.5 text-[11.5px] leading-relaxed text-slate">{site.warren}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal>
                  <div className="bg-white p-5">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-orange/10 text-orange">
                        <Icon name="clock" size={18} />
                      </span>
                      <div className="w-full">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate">Published hours</p>
                        <div className="mt-2 space-y-1.5">
                          {site.hours.map((entry) => (
                            <div key={entry.day} className="flex justify-between gap-6 text-[11.5px]">
                              <span className="text-slate">{entry.day}</span>
                              <span className="font-medium text-navy">{entry.time}</span>
                            </div>
                          ))}
                        </div>
                        <p className="mt-2 text-[10px] leading-relaxed text-slate/70">
                          Please call ahead to confirm current availability.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal className="mt-5">
                <div className="border-l-2 border-orange bg-white p-5">
                  <p className="font-display text-[13.5px] font-bold text-navy">Looking for a project estimate?</p>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate">
                    The multi-step estimate request collects the property details in one place.
                  </p>
                  <Button className="mt-3" size="sm" onClick={() => openEstimate()} arrow>
                    Request a Free Estimate
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={100}>
              <div className="border border-soft bg-white shadow-[0_30px_70px_-50px_rgba(16,28,44,0.4)]">
                <div className="border-b border-soft p-6 sm:p-8">
                  <p className="eyebrow text-orange">Send a message</p>
                  <h2 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.05rem)] font-bold leading-tight text-navy">
                    Tell us how we can help.
                  </h2>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate">
                    Fields marked <span className="font-semibold text-orange">*</span> are required.
                  </p>
                </div>

                {status === "sent" ? (
                  <div className="p-6 sm:p-8" role="status" aria-live="polite">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-orange">
                      <Icon name="check-circle" size={30} />
                    </div>
                    <p className="eyebrow mt-5 text-orange">Demo message prepared</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-navy">
                      Thank you, {form.name.split(" ")[0] || "there"}.
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.8] text-slate">
                      Your message details are held in this browser only. This demonstration does
                      not send email, store the inquiry, or create a request with Bob Romea Roofing.
                    </p>
                    <div className="mt-4 border border-gold/40 bg-[#fbf8ef] p-4 text-[11.5px] leading-relaxed text-charcoal/75">
                      <strong className="text-navy">For a live response:</strong> call{" "}
                      <a href={site.phoneHref} className="font-semibold underline decoration-orange/50 underline-offset-2">
                        {site.phone}
                      </a>{" "}
                      or email{" "}
                      <a href={site.emailHref} className="break-all font-semibold underline decoration-orange/50 underline-offset-2">
                        {site.email}
                      </a>
                      .
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Button variant="outline" onClick={restart}>Prepare Another Message</Button>
                      <Button href={site.phoneHref}>
                        <Icon name="phone" size={15} />
                        Call Now
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form className="space-y-5 p-6 sm:p-8" onSubmit={submit} noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="mb-1.5 block text-[12px] font-semibold text-navy">
                          Full name <span className="text-orange">*</span>
                        </label>
                        <input
                          id="contact-name"
                          autoComplete="name"
                          value={form.name}
                          onChange={(event) => update("name", event.target.value)}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "contact-name-error" : undefined}
                          placeholder="Your full name"
                          className={cn(inputClass, errors.name ? "border-red-500" : "border-navy/15")}
                        />
                        {errors.name && <p id="contact-name-error" role="alert" className="mt-1.5 text-[11px] font-medium text-red-700">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="mb-1.5 block text-[12px] font-semibold text-navy">
                          Email address <span className="text-orange">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(event) => update("email", event.target.value)}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "contact-email-error" : undefined}
                          placeholder="you@example.com"
                          className={cn(inputClass, errors.email ? "border-red-500" : "border-navy/15")}
                        />
                        {errors.email && <p id="contact-email-error" role="alert" className="mt-1.5 text-[11px] font-medium text-red-700">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-phone" className="mb-1.5 block text-[12px] font-semibold text-navy">
                          Phone number <span className="text-orange">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={(event) => update("phone", event.target.value)}
                          aria-invalid={Boolean(errors.phone)}
                          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                          placeholder="(412) 555-0123"
                          className={cn(inputClass, errors.phone ? "border-red-500" : "border-navy/15")}
                        />
                        {errors.phone && <p id="contact-phone-error" role="alert" className="mt-1.5 text-[11px] font-medium text-red-700">{errors.phone}</p>}
                      </div>
                      <div>
                        <label htmlFor="contact-property" className="mb-1.5 block text-[12px] font-semibold text-navy">
                          Property type <span className="text-orange">*</span>
                        </label>
                        <select
                          id="contact-property"
                          value={form.propertyType}
                          onChange={(event) => update("propertyType", event.target.value)}
                          aria-invalid={Boolean(errors.propertyType)}
                          className={cn(inputClass, "appearance-none", errors.propertyType ? "border-red-500" : "border-navy/15")}
                        >
                          <option value="">Select property type</option>
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                        </select>
                        {errors.propertyType && <p role="alert" className="mt-1.5 text-[11px] font-medium text-red-700">{errors.propertyType}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="mb-1.5 block text-[12px] font-semibold text-navy">
                        Service needed <span className="text-orange">*</span>
                      </label>
                      <select
                        id="contact-service"
                        value={form.service}
                        onChange={(event) => update("service", event.target.value)}
                        aria-invalid={Boolean(errors.service)}
                        className={cn(inputClass, "appearance-none", errors.service ? "border-red-500" : "border-navy/15")}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      {errors.service && <p role="alert" className="mt-1.5 text-[11px] font-medium text-red-700">{errors.service}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="mb-1.5 block text-[12px] font-semibold text-navy">
                        How can we help? <span className="text-orange">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        value={form.message}
                        onChange={(event) => update("message", event.target.value)}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "contact-message-error" : undefined}
                        placeholder="Describe the property, concern, and what you would like to discuss…"
                        className={cn(inputClass, errors.message ? "border-red-500" : "border-navy/15")}
                      />
                      {errors.message && <p id="contact-message-error" role="alert" className="mt-1.5 text-[11px] font-medium text-red-700">{errors.message}</p>}
                    </div>

                    <div className="border border-gold/40 bg-[#fbf8ef] p-3.5">
                      <p className="flex items-start gap-2 text-[10.5px] leading-relaxed text-charcoal/70">
                        <Icon name="info" size={13} className="mt-0.5 shrink-0 text-gold" />
                        Demo form: your message is prepared locally and is not sent, stored, or
                        delivered. Call or email for a live conversation.
                      </p>
                    </div>

                    <Button type="submit" full size="lg" disabled={status === "sending"}>
                      {status === "sending" ? (
                        <>
                          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                          Preparing…
                        </>
                      ) : (
                        <>
                          Prepare Demo Message
                          <Icon name="arrow-right" size={16} />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <EstimateCTA
        title="Prefer the full project questionnaire?"
        text="The estimate request walks through property type, service, project details, and contact preferences in one place."
        image={img.heroRoofers}
      />
    </>
  );
}
