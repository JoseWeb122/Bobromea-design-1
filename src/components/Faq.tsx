import { useState } from "react";
import { cn } from "../utils/cn";
import { Icon } from "./ui";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({
  items,
  className,
  defaultOpen = 0,
}: {
  items: FaqItem[];
  className?: string;
  defaultOpen?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className={cn("divide-y divide-soft border-y border-soft", className)}>
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                aria-expanded={open}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                className="group flex w-full items-start justify-between gap-5 py-5 text-left"
              >
                <span
                  className={cn(
                    "font-display text-[15px] font-semibold leading-snug transition-colors sm:text-base",
                    open ? "text-orange" : "text-navy group-hover:text-orange",
                  )}
                >
                  {item.q}
                </span>
                <span
                  className={cn(
                    "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    open
                      ? "border-orange bg-orange text-white"
                      : "border-navy/15 text-navy group-hover:border-orange group-hover:text-orange",
                  )}
                >
                  <Icon name={open ? "minus" : "plus"} size={14} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              className={cn(
                "grid transition-all duration-300 ease-out",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-5 pr-10 text-[13.5px] leading-[1.8] text-slate">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
