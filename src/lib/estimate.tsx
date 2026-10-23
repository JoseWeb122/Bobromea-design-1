import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";

export type EstimatePropertyType = "Residential" | "Commercial";

export type EstimatePreset = {
  propertyType?: EstimatePropertyType;
  service?: string;
};

type EstimateValue = {
  open: boolean;
  preset: EstimatePreset;
  openEstimate: (preset?: EstimatePreset) => void;
  closeEstimate: () => void;
};

const EstimateContext = createContext<EstimateValue | null>(null);

export function EstimateProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState<EstimatePreset>({});
  const triggerRef = useRef<HTMLElement | null>(null);

  const openEstimate = useCallback((next?: EstimatePreset) => {
    triggerRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setPreset(next ?? {});
    setOpen(true);
  }, []);

  const closeEstimate = useCallback(() => {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 40);
  }, []);

  const value = useMemo(
    () => ({ open, preset, openEstimate, closeEstimate }),
    [open, preset, openEstimate, closeEstimate],
  );

  return <EstimateContext.Provider value={value}>{children}</EstimateContext.Provider>;
}

export function useEstimate() {
  const ctx = useContext(EstimateContext);
  if (!ctx) throw new Error("useEstimate must be used within EstimateProvider");
  return ctx;
}
