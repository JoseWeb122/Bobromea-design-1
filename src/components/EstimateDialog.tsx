import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { site, serviceOptions } from "../data/site";
import { useEstimate } from "../lib/estimate";
import { BrandLogo } from "./Logo";
import { Button, Icon } from "./ui";

type FormState = {
  propertyType: "" | "Residential" | "Commercial";
  service: string;
  description: string;
  zip: string;
  timeframe: string;
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  notes: string;
};

type Errors = Partial<Record<keyof FormState | "acknowledge", string>>;

const emptyForm: FormState = {
  propertyType: "",
  service: "",
  description: "",
  zip: "",
  timeframe: "",
  name: "",
  email: "",
  phone: "",
  contactMethod: "",
  notes: "",
};

const stepLabels = [
  "Property type",
  "Roofing service",
  "Project details",
  "Contact info",
  "Review",
];

const timeframes = ["As soon as possible", "Within the next month", "In the next 1–3 months", "Researching options"];

const inputBase =
  "w-full border bg-white px-4 py-3 text-sm text-navy placeholder:text-slate/55 transition focus:outline-none focus:ring-2 focus:ring-orange/25";

function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <label htmlFor={htmlFor} className="text-[12.5px] font-semibold text-navy">
          {label}{" "}
          {required ? (
            <span className="text-orange" aria-hidden="true">
              *
            </span>
          ) : (
            <span className="text-[10.5px] font-normal text-slate">(optional)</span>
          )}
        </label>
        {required && <span className="text-[10px] uppercase tracking-wide text-slate/70">Required</span>}
      </div>
      {children}
      {hint && !error && <p className="mt-1.5 text-[11px] text-slate">{hint}</p>}
      {error && (
        <p className="mt-1.5 flex items-start gap-1.5 text-[11.5px] font-medium text-red-700" role="alert">
          <Icon name="info" size={12} className="mt-0.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

function ChoiceCard({
  name,
  value,
  checked,
  onChange,
  title,
  description,
  icon,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  title: string;
  description?: string;
  icon?: string;
}) {
  return (
    <label
      className={cn(
        "group relative flex cursor-pointer items-start gap-3 border p-4 transition-all duration-200",
        checked
          ? "border-orange bg-orange/[0.045] shadow-[inset_0_0_0_1px_#f47732]"
          : "border-navy/12 bg-white hover:border-navy/35",
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {icon && (
        <span
          className={cn(
            "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm transition",
            checked ? "bg-orange text-white" : "bg-warm text-slate group-hover:text-navy",
          )}
        >
          <Icon name={icon} size={18} />
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className={cn("block text-[13px] font-semibold", checked ? "text-navy" : "text-charcoal")}>
          {title}
        </span>
        {description && <span className="mt-0.5 block text-[11.5px] leading-relaxed text-slate">{description}</span>}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
          checked ? "border-orange bg-orange" : "border-navy/25 bg-white",
        )}
      >
        {checked && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
      </span>
    </label>
  );
}

export function EstimateDialog() {
  const { open, closeEstimate, preset } = useEstimate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [acknowledge, setAcknowledge] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setForm({
      ...emptyForm,
      propertyType: preset.propertyType ?? "",
      service: preset.service && serviceOptions.includes(preset.service) ? preset.service : "",
    });
    setStep(preset.propertyType ? 1 : 0);
    setErrors({});
    setAcknowledge(false);
    setStatus("idle");
  }, [open, preset]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeEstimate();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((node) => node.offsetParent !== null);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [open, closeEstimate]);

  if (!open) return null;

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  };

  const validateStep = (index: number): Errors => {
    const next: Errors = {};
    if (index === 0 && !form.propertyType) next.propertyType = "Please choose a property type.";
    if (index === 1 && !form.service) next.service = "Please choose a roofing service.";
    if (index === 2) {
      if (form.description.trim().length < 10)
        next.description = "Please add at least 10 characters describing the concern.";
      if (!/^\d{5}(-\d{4})?$/.test(form.zip.trim()))
        next.zip = "Enter a valid 5-digit ZIP code (for example, 15215).";
      if (!form.timeframe) next.timeframe = "Please select a project timeframe.";
    }
    if (index === 3) {
      if (form.name.trim().length < 2) next.name = "Please enter your full name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
        next.email = "Enter a valid email address.";
      const digits = form.phone.replace(/\D/g, "");
      if (digits.length < 10) next.phone = "Enter a valid phone number with at least 10 digits.";
      if (!form.contactMethod) next.contactMethod = "Choose a preferred contact method.";
    }
    if (index === 4 && !acknowledge) {
      next.acknowledge = "Please confirm that you understand this is a demonstration form.";
    }
    return next;
  };

  const goNext = () => {
    const nextErrors = validateStep(step);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      window.setTimeout(() => {
        dialogRef.current
          ?.querySelector<HTMLElement>('[aria-invalid="true"], [role="alert"]')
          ?.focus?.();
      }, 30);
      return;
    }
    setStep((current) => Math.min(4, current + 1));
    dialogRef.current?.querySelector<HTMLElement>("[data-step-top]")?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const goBack = () => {
    setErrors({});
    setStep((current) => Math.max(0, current - 1));
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const allErrors: Errors = {
      ...validateStep(0),
      ...validateStep(1),
      ...validateStep(2),
      ...validateStep(3),
      ...validateStep(4),
    };
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      const firstInvalidStep = [0, 1, 2, 3, 4].find(
        (index) => Object.keys(validateStep(index)).length > 0,
      );
      setStep(firstInvalidStep ?? 4);
      return;
    }
    setStatus("submitting");
    window.setTimeout(() => setStatus("success"), 1500);
  };

  const restart = () => {
    setForm(emptyForm);
    setAcknowledge(false);
    setErrors({});
    setStep(0);
    setStatus("idle");
  };

  const valueOrDefault = (value: string) => value || "Not provided";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-navy/80 p-0 backdrop-blur-sm animate-fade-in sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeEstimate();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimate-dialog-title"
        className="relative my-0 flex min-h-screen w-full max-w-5xl flex-col overflow-hidden bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] animate-scale-in sm:my-0 sm:min-h-0 lg:grid lg:grid-cols-[315px_1fr]"
      >
        {/* Sidebar */}
        <aside className="relative hidden overflow-hidden bg-navy p-8 text-white lg:flex lg:flex-col">
          <div className="absolute inset-0 opacity-30">
            <img
              src="https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=800&h=1200"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/90 to-navy" />
          </div>
          <div className="relative flex h-full flex-col">
            <BrandLogo onDark className="h-14 w-auto" />
            <div className="mt-12">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-6 bg-orange" />
                <span className="eyebrow text-orange">Free estimate request</span>
              </div>
              <h2 id="estimate-dialog-title" className="font-display text-[28px] font-bold leading-[1.15]">
                Tell us about your roof.
              </h2>
              <p className="mt-4 text-[12.5px] leading-[1.8] text-white/60">
                A few details help start a more useful conversation about your property and
                what you need.
              </p>
            </div>
            <div className="mt-10 space-y-5">
              <a href={site.phoneHref} className="flex items-start gap-3 text-white/80 transition hover:text-white">
                <Icon name="phone" size={16} className="mt-0.5 shrink-0 text-orange" />
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.13em] text-white/55">Call</span>
                  <span className="mt-0.5 block text-[13px] font-semibold">{site.phone}</span>
                </span>
              </a>
              <a href={site.emailHref} className="flex items-start gap-3 break-all text-white/65 transition hover:text-white">
                <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-orange" />
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.13em] text-white/55">Email</span>
                  <span className="mt-0.5 block text-[12px]">{site.email}</span>
                </span>
              </a>
              <div className="flex items-start gap-3 text-white/65">
                <Icon name="map-pin" size={16} className="mt-0.5 shrink-0 text-orange" />
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.13em] text-white/55">Serving</span>
                  <span className="mt-0.5 block text-[12px]">Pittsburgh, PA &amp; Warren, OH</span>
                </span>
              </div>
            </div>
            <div className="mt-auto border-t border-white/10 pt-6">
              <p className="flex items-start gap-2 text-[11px] leading-relaxed text-white/55">
                <Icon name="info" size={13} className="mt-0.5 shrink-0" />
                Concept form. Your inquiry is prepared on this device and is not sent to the
                company.
              </p>
            </div>
          </div>
        </aside>

        {/* Main panel */}
        <div className="relative flex min-h-full flex-col">
          <div className="flex items-center justify-between border-b border-soft px-5 py-4 sm:px-8">
            <div className="flex items-center gap-3 lg:hidden">
              <BrandLogo className="h-9 w-auto" />
            </div>
            <div className="hidden lg:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate">
                Step {step + 1} of 5
              </p>
              <p className="mt-0.5 font-display text-[14px] font-semibold text-navy">
                {stepLabels[step]}
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={closeEstimate}
              aria-label="Close estimate request"
              className="flex h-9 w-9 items-center justify-center border border-navy/15 text-navy transition hover:border-orange hover:bg-orange hover:text-white"
            >
              <Icon name="close" size={17} />
            </button>
          </div>

          <div className="border-b border-soft px-5 pb-4 pt-4 sm:px-8">
            <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.1em] text-slate lg:hidden">
              <span>Step {step + 1} of 5 · {stepLabels[step]}</span>
              <span>{Math.round(((step + 1) / 5) * 100)}%</span>
            </div>
            <div
              className="h-[3px] w-full overflow-hidden bg-soft"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(((step + 1) / 5) * 100)}
              aria-label="Estimate request progress"
            >
              <div
                className="h-full bg-orange transition-all duration-500 ease-out"
                style={{ width: `${((step + 1) / 5) * 100}%` }}
              />
            </div>
            <ol className="mt-3 hidden grid-cols-5 gap-1 lg:grid">
              {stepLabels.map((label, index) => (
                <li
                  key={label}
                  aria-current={index === step ? "step" : undefined}
                  className={cn(
                    "text-[9px] uppercase tracking-[0.06em]",
                    index === step ? "text-orange" : index < step ? "text-navy/60" : "text-slate/50",
                  )}
                >
                  {label}
                </li>
              ))}
            </ol>
          </div>

          <div data-step-top className="flex-1 px-5 py-6 sm:px-8 sm:py-8">
            {status === "success" ? (
              <div className="flex h-full flex-col justify-center py-8 text-center animate-fade-up" role="status" aria-live="polite">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <Icon name="check-circle" size={34} />
                </div>
                <p className="eyebrow mt-6 text-orange">Demo request prepared</p>
                <h3 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-navy">
                  Your project details are ready.
                </h3>
                <p className="mx-auto mt-4 max-w-md text-[13px] leading-[1.8] text-slate">
                  Thanks, {form.name.split(" ")[0] || "there"}. Your inquiry has been assembled in
                  this browser only — it has <strong className="text-navy">not been sent</strong>, stored,
                  or scheduled with Bob Romea Roofing.
                </p>
                <div className="mx-auto mt-6 w-full max-w-md border border-gold/40 bg-[#fbf8ef] p-4 text-left">
                  <p className="flex items-start gap-2 text-[11.5px] leading-relaxed text-charcoal/75">
                    <Icon name="info" size={14} className="mt-0.5 shrink-0 text-gold" />
                    This is a front-end demonstration. Live delivery requires a backend or a form
                    service, and submitting this form does not confirm an estimate, inspection, or
                    appointment.
                  </p>
                </div>
                <div className="mt-4 border border-soft p-4 text-left text-[12px] text-slate">
                  <span className="font-semibold text-navy">Request summary:</span>{" "}
                  {form.propertyType} · {form.service} · ZIP {form.zip} · {form.timeframe}
                </div>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href={site.phoneHref}>
                    <Icon name="phone" size={15} />
                    Call {site.phone}
                  </Button>
                  <Button variant="outline" onClick={restart}>
                    Start another request
                  </Button>
                  <Button variant="ghost" className="!border-navy/20 !text-navy hover:!bg-navy hover:!text-white" onClick={closeEstimate}>
                    Close
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                {step === 0 && (
                  <div className="animate-fade-in">
                    <p className="eyebrow text-orange">First things first</p>
                    <h3 className="mt-2 font-display text-[clamp(1.45rem,3vw,1.9rem)] font-bold leading-tight text-navy">
                      What type of property is this?
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate">
                      This helps focus the conversation on the right roofing considerations.
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <ChoiceCard
                        name="propertyType"
                        value="Residential"
                        checked={form.propertyType === "Residential"}
                        onChange={() => setField("propertyType", "Residential")}
                        title="Residential"
                        description="A home, townhouse, or residential property."
                        icon="home"
                      />
                      <ChoiceCard
                        name="propertyType"
                        value="Commercial"
                        checked={form.propertyType === "Commercial"}
                        onChange={() => setField("propertyType", "Commercial")}
                        title="Commercial"
                        description="A commercial, industrial, or multi-unit building."
                        icon="building"
                      />
                    </div>
                    {errors.propertyType && (
                      <p role="alert" className="mt-3 text-[11.5px] font-medium text-red-700">
                        {errors.propertyType}
                      </p>
                    )}
                  </div>
                )}

                {step === 1 && (
                  <div className="animate-fade-in">
                    <p className="eyebrow text-orange">
                      {form.propertyType || "Your property"} · Roofing service
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.45rem,3vw,1.9rem)] font-bold leading-tight text-navy">
                      What can we help you with?
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate">
                      Choose the option that is closest. If you are not sure, “Other / Not Sure” is
                      a good place to start.
                    </p>
                    <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {serviceOptions.map((service) => (
                        <ChoiceCard
                          key={service}
                          name="service"
                          value={service}
                          checked={form.service === service}
                          onChange={() => setField("service", service)}
                          title={service}
                        />
                      ))}
                    </div>
                    {errors.service && (
                      <p role="alert" className="mt-3 text-[11.5px] font-medium text-red-700">
                        {errors.service}
                      </p>
                    )}
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-fade-in">
                    <p className="eyebrow text-orange">
                      {form.service || "Roofing"} · Project overview
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.45rem,3vw,1.9rem)] font-bold leading-tight text-navy">
                      Tell us a little about the project.
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate">
                      A few details now can make the first conversation more useful. A ZIP code is
                      requested for context, not as a promise of service availability.
                    </p>
                    <div className="mt-6 space-y-5">
                      <Field
                        label="What concern or result should we know about?"
                        htmlFor="est-description"
                        required
                        error={errors.description}
                      >
                        <textarea
                          id="est-description"
                          rows={4}
                          value={form.description}
                          onChange={(event) => setField("description", event.target.value)}
                          aria-invalid={Boolean(errors.description)}
                          aria-describedby={errors.description ? "est-description-error" : undefined}
                          placeholder="Example: There is a water stain on the ceiling after heavy rain, and the shingles near the chimney look worn."
                          className={cn(inputBase, errors.description ? "border-red-500" : "border-navy/15")}
                        />
                        {errors.description && <span id="est-description-error" className="sr-only">{errors.description}</span>}
                      </Field>
                      <div className="grid gap-5 sm:grid-cols-[0.8fr_1.2fr]">
                        <Field label="Property ZIP code" htmlFor="est-zip" required error={errors.zip} hint="For example, 15215.">
                          <input
                            id="est-zip"
                            inputMode="numeric"
                            autoComplete="postal-code"
                            value={form.zip}
                            onChange={(event) => setField("zip", event.target.value)}
                            aria-invalid={Boolean(errors.zip)}
                            placeholder="15215"
                            className={cn(inputBase, errors.zip ? "border-red-500" : "border-navy/15")}
                          />
                        </Field>
                        <Field label="Project timeframe" htmlFor="est-timeframe-group" required error={errors.timeframe}>
                          <div id="est-timeframe-group" className="grid grid-cols-2 gap-2">
                            {timeframes.map((range) => (
                              <label
                                key={range}
                                className={cn(
                                  "flex cursor-pointer items-center justify-center border px-2.5 py-2.5 text-center text-[11px] font-medium leading-tight transition",
                                  form.timeframe === range
                                    ? "border-orange bg-orange/[0.06] text-orange"
                                    : "border-navy/15 text-slate hover:border-navy/35 hover:text-navy",
                                )}
                              >
                                <input
                                  type="radio"
                                  name="timeframe"
                                  value={range}
                                  checked={form.timeframe === range}
                                  onChange={() => setField("timeframe", range)}
                                  className="sr-only"
                                />
                                {range}
                              </label>
                            ))}
                          </div>
                        </Field>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-fade-in">
                    <p className="eyebrow text-orange">Contact information</p>
                    <h3 className="mt-2 font-display text-[clamp(1.45rem,3vw,1.9rem)] font-bold leading-tight text-navy">
                      How can we reach you?
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate">
                      Required fields are marked. This concept does not send or store your details.
                    </p>
                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" htmlFor="est-name" required error={errors.name}>
                        <input
                          id="est-name"
                          autoComplete="name"
                          value={form.name}
                          onChange={(event) => setField("name", event.target.value)}
                          aria-invalid={Boolean(errors.name)}
                          placeholder="Your full name"
                          className={cn(inputBase, errors.name ? "border-red-500" : "border-navy/15")}
                        />
                      </Field>
                      <Field label="Email address" htmlFor="est-email" required error={errors.email}>
                        <input
                          id="est-email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={(event) => setField("email", event.target.value)}
                          aria-invalid={Boolean(errors.email)}
                          placeholder="you@example.com"
                          className={cn(inputBase, errors.email ? "border-red-500" : "border-navy/15")}
                        />
                      </Field>
                      <Field label="Phone number" htmlFor="est-phone" required error={errors.phone}>
                        <input
                          id="est-phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={(event) => setField("phone", event.target.value)}
                          aria-invalid={Boolean(errors.phone)}
                          placeholder="(412) 555-0123"
                          className={cn(inputBase, errors.phone ? "border-red-500" : "border-navy/15")}
                        />
                      </Field>
                      <Field label="Preferred contact method" htmlFor="est-contact-group" required error={errors.contactMethod}>
                        <div id="est-contact-group" className="grid grid-cols-3 gap-2">
                          {["Phone", "Email", "Text"].map((method) => (
                            <label
                              key={method}
                              className={cn(
                                "flex min-h-[46px] cursor-pointer items-center justify-center border text-[11.5px] font-medium transition",
                                form.contactMethod === method
                                  ? "border-orange bg-orange/[0.06] text-orange"
                                  : "border-navy/15 text-slate hover:border-navy/35 hover:text-navy",
                              )}
                            >
                              <input
                                type="radio"
                                name="contactMethod"
                                value={method}
                                checked={form.contactMethod === method}
                                onChange={() => setField("contactMethod", method)}
                                className="sr-only"
                              />
                              {method}
                            </label>
                          ))}
                        </div>
                      </Field>
                      <div className="sm:col-span-2">
                        <Field label="Anything else?" htmlFor="est-notes" hint="Optional details such as roof age, material, building access, or photos you could provide.">
                          <textarea
                            id="est-notes"
                            rows={3}
                            value={form.notes}
                            onChange={(event) => setField("notes", event.target.value)}
                            placeholder="Additional context about the property…"
                            className={cn(inputBase, "border-navy/15")}
                          />
                        </Field>
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="animate-fade-in">
                    <p className="eyebrow text-orange">Review before submitting</p>
                    <h3 className="mt-2 font-display text-[clamp(1.45rem,3vw,1.9rem)] font-bold leading-tight text-navy">
                      Does everything look right?
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate">
                      Check the details below. Going back preserves everything you have entered.
                    </p>
                    <div className="mt-5 divide-y divide-soft border border-soft">
                      <ReviewRow label="Property type" value={valueOrDefault(form.propertyType)} onEdit={() => setStep(0)} />
                      <ReviewRow label="Service" value={valueOrDefault(form.service)} onEdit={() => setStep(1)} />
                      <ReviewRow
                        label="Project details"
                        value={`${valueOrDefault(form.description)} · ZIP ${valueOrDefault(form.zip)} · ${valueOrDefault(form.timeframe)}`}
                        onEdit={() => setStep(2)}
                      />
                      <ReviewRow
                        label="Contact"
                        value={`${valueOrDefault(form.name)} · ${valueOrDefault(form.email)} · ${valueOrDefault(form.phone)} · Prefers ${valueOrDefault(form.contactMethod)}`}
                        onEdit={() => setStep(3)}
                      />
                      {form.notes && (
                        <ReviewRow label="Additional notes" value={form.notes} onEdit={() => setStep(3)} />
                      )}
                    </div>
                    <div className="mt-4 border border-gold/40 bg-[#fbf8ef] p-4">
                      <p className="flex items-start gap-2 text-[11.5px] leading-relaxed text-charcoal/75">
                        <Icon name="info" size={14} className="mt-0.5 shrink-0 text-gold" />
                        Demo form only. Your information is prepared locally and is not emailed,
                        stored, or submitted to the business. Live delivery will need a backend or
                        form service.
                      </p>
                    </div>
                    <label className="mt-4 flex cursor-pointer items-start gap-3 text-[12px] leading-relaxed text-charcoal">
                      <input
                        type="checkbox"
                        checked={acknowledge}
                        onChange={(event) => {
                          setAcknowledge(event.target.checked);
                          setErrors((current) => {
                            const next = { ...current };
                            delete next.acknowledge;
                            return next;
                          });
                        }}
                        aria-invalid={Boolean(errors.acknowledge)}
                        className="mt-0.5 h-4 w-4 shrink-0 accent-[#f47732]"
                      />
                      <span>
                        I understand this is a demonstration form and that no estimate request will
                        be delivered.
                      </span>
                    </label>
                    {errors.acknowledge && (
                      <p role="alert" className="mt-1.5 text-[11.5px] font-medium text-red-700">
                        {errors.acknowledge}
                      </p>
                    )}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-soft pt-5">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={goBack}
                      disabled={status === "submitting"}
                      className="inline-flex min-h-11 items-center gap-2 px-1 text-[12px] font-semibold text-slate transition hover:text-navy disabled:opacity-50"
                    >
                      <Icon name="arrow-left" size={15} />
                      Previous
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={closeEstimate}
                      className="text-[12px] font-semibold text-slate transition hover:text-navy"
                    >
                      Cancel
                    </button>
                  )}
                  {step < 4 ? (
                    <Button type="button" onClick={goNext} arrow>
                      Continue
                    </Button>
                  ) : (
                    <Button type="submit" disabled={status === "submitting"} className="min-w-[190px]">
                      {status === "submitting" ? (
                        <>
                          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                          Preparing…
                        </>
                      ) : (
                        <>
                          Prepare Demo Request
                          <Icon name="arrow-right" size={15} />
                        </>
                      )}
                    </Button>
                  )}
                </div>
                <p className="mt-4 text-center text-[10px] leading-relaxed text-slate/75 sm:text-left">
                  Prefer to speak directly? Call{" "}
                  <a href={site.phoneHref} className="font-semibold text-navy underline decoration-orange/50 underline-offset-2">
                    {site.phone}
                  </a>{" "}
                  during published business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewRow({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string;
  onEdit: () => void;
}) {
  return (
    <div className="grid gap-2 p-3.5 sm:grid-cols-[120px_1fr_auto] sm:items-start">
      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate">{label}</p>
      <p className="break-words text-[12px] leading-relaxed text-charcoal">{value}</p>
      <button
        type="button"
        onClick={onEdit}
        className="justify-self-start text-[10.5px] font-semibold uppercase tracking-wide text-orange underline-offset-2 hover:underline sm:justify-self-end"
      >
        Edit
      </button>
    </div>
  );
}
