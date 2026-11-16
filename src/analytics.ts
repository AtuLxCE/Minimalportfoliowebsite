const measurementId = "G-S8JD4VX0XX";
const consentKey = "portfolio-analytics-consent";
let started = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getAnalyticsConsent(): string | null {
  try { return localStorage.getItem(consentKey); } catch { return null; }
}

export function setAnalyticsConsent(accepted: boolean) {
  try { localStorage.setItem(consentKey, accepted ? "accepted" : "declined"); } catch { /* Consent still applies to this visit. */ }
  if (accepted) {
    if (started) window.gtag?.("consent", "update", { analytics_storage: "granted" });
    else startAnalytics();
  }
  else window.gtag?.("consent", "update", { analytics_storage: "denied" });
}

export function startAnalytics() {
  if (started || !import.meta.env.PROD) return;
  started = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer!.push(arguments); };
  window.gtag("consent", "default", {
    analytics_storage: "granted", ad_storage: "denied",
    ad_user_data: "denied", ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: window.location.origin + window.location.pathname,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

const projectHosts: Record<string, string> = {
  "skinmate.ai": "Skinmate", "myabhiyan.com": "MyAbhiyan", "nempd.org": "NEMPD",
  "omnio.acaiberry.io": "Omnio",
};

export function trackPortfolioClick(event: MouseEvent) {
  if (!started || getAnalyticsConsent() !== "accepted") return;
  const target = event.target instanceof Element ? event.target.closest("a") : null;
  if (!target) return;
  const url = new URL(target.href);
  const section = target.closest("section")?.id || "navigation";
  if (url.pathname.endsWith("/Atul_Shreewastav_Resume.pdf")) {
    window.gtag?.("event", "resume_download", { placement: section });
  } else if (url.hostname === "wa.me" || url.protocol === "mailto:") {
    window.gtag?.("event", "contact_click", { method: url.hostname === "wa.me" ? "whatsapp" : "email" });
  } else if (section === "projects") {
    const project = projectHosts[url.hostname] || (url.hostname === "acaiberry.io" ? "Omnio" : target.closest("article")?.querySelector("h3")?.textContent);
    if (project) window.gtag?.("event", "project_click", { project_name: project });
  }
}
