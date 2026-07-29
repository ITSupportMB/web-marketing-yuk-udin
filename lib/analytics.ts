/**
 * Pelacakan event minimum (blueprint §7.4).
 * Stub aman: hanya menembak kalau consent analitik diberikan dan
 * ada sink (dataLayer / gtag) yang terpasang. Tidak memuat pihak ketiga.
 */

export type AnalyticsEvent =
  | "hero_cta_click"
  | "sticky_cta_click"
  | "store_redirect"
  | "vendor_lead_submit"
  | "faq_open"
  | "scroll_75";

const CONSENT_KEY = "yu_analytics_consent";

export function hasConsent(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CONSENT_KEY) === "granted";
}

export function setConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
}

export function hasConsentDecision(): boolean {
  if (typeof window === "undefined") return true; // hindari flash saat SSR
  return window.localStorage.getItem(CONSENT_KEY) !== null;
}

export function track(event: AnalyticsEvent, params: Record<string, unknown> = {}) {
  if (!hasConsent()) return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer?.push({ event, ...params });
  w.gtag?.("event", event, params);
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, params);
  }
}
