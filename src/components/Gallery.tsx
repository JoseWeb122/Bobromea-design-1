import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";
import { gallery, galleryCategories, type GalleryItem } from "../data/site";
import { Icon } from "./ui";

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function Gallery({
  limit,
  showFilters = true,
}: {
  limit?: number;
  showFilters?: boolean;
}) {
  const [filter, setFilter] = useState("All Work");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filtered: GalleryItem[] = (
    filter === "All Work" ? gallery : gallery.filter((item) => item.categories.includes(filter))
  ).slice(0, limit ?? gallery.length);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (direction: number) => {
      setLightbox((current) => {
        if (current === null) return current;
        return (current + direction + filtered.length) % filtered.length;
      });
    },
    [filtered.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "Tab") {
        const dialog = document.getElementById("project-lightbox");
        if (!dialog) return;
        const focusable = Array.from(
          dialog.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])'),
        );
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
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
      lastTriggerRef.current?.focus();
    };
  }, [lightbox, close, step]);

  const active = lightbox !== null ? filtered[lightbox] : null;

  return (
    <div>
      {showFilters && (
        <div
          className="mb-8 flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter project photography by category"
        >
          {galleryCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setFilter(category);
                setLightbox(null);
              }}
              aria-pressed={filter === category}
              className={cn(
                "min-h-10 border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition-all duration-200",
                filter === category
                  ? "border-navy bg-navy text-white"
                  : "border-navy/15 bg-transparent text-slate hover:border-navy/45 hover:text-navy",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="border border-soft bg-white p-8 text-center text-sm text-slate">
          No representative images in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12" aria-live="polite">
          {filtered.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={(event) => {
                lastTriggerRef.current = event.currentTarget;
                setLightbox(index);
              }}
              aria-label={`Open representative image: ${item.alt}`}
              className={cn(
                "group relative block w-full overflow-hidden bg-navy text-left focus-visible:outline-offset-4",
                spans[index % spans.length],
              )}
            >
              <div className="aspect-[16/11] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-orange">
                    {item.categories[0]}
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-white/90">{item.caption}</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition duration-300 group-hover:border-orange group-hover:bg-orange">
                  <Icon name="zoom-in" size={15} />
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      <p className="mt-5 flex items-start gap-2 text-[11px] leading-relaxed text-slate">
        <Icon name="info" size={13} className="mt-0.5 shrink-0" />
        Representative roofing photography is shown for design purposes only. These are not
        verified Bob Romea Roofing project images; approved company photography should replace
        them before launch.
      </p>

      {active &&
        lightbox !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-navy/95 p-3 backdrop-blur-sm animate-fade-in sm:p-6"
            id="project-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Image viewer: ${active.alt}`}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            <div className="relative flex max-h-full w-full max-w-6xl flex-col">
              <div className="flex items-center justify-between pb-4 text-white">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/55">
                  Image {lightbox + 1} of {filtered.length} · Representative
                </p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={close}
                  aria-label="Close image viewer"
                  className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-orange hover:bg-orange"
                >
                  <Icon name="close" size={18} />
                </button>
              </div>
              <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/30">
                <img
                  src={active.image}
                  alt={active.alt}
                  className="max-h-[64vh] w-auto max-w-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-navy/70 text-white backdrop-blur transition hover:border-orange hover:bg-orange sm:left-4"
                >
                  <Icon name="chevron-left" size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/25 bg-navy/70 text-white backdrop-blur transition hover:border-orange hover:bg-orange sm:right-4"
                >
                  <Icon name="chevron-right" size={20} />
                </button>
              </div>
              <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-orange">
                    {active.categories.join(" · ")}
                  </p>
                  <p className="mt-1 text-sm text-white/85">{active.alt}</p>
                </div>
                <p className="max-w-xs text-[10px] leading-relaxed text-white/40">
                  Representative image — not a claimed Bob Romea Roofing project.
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
