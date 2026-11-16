import { useEffect, useState } from "react";
import { getAnalyticsConsent, setAnalyticsConsent, startAnalytics, trackPortfolioClick } from "../analytics";

export function AnalyticsConsent() {
  const [visible, setVisible] = useState(getAnalyticsConsent() === null);
  useEffect(() => {
    if (getAnalyticsConsent() === "accepted") startAnalytics();
    document.addEventListener("click", trackPortfolioClick);
    return () => document.removeEventListener("click", trackPortfolioClick);
  }, []);
  const choose = (accepted: boolean) => {
    setAnalyticsConsent(accepted);
    setVisible(false);
  };
  return (
    <>
      <button className="analytics-settings" onClick={() => setVisible(true)}>Cookie preferences</button>
      {visible && <aside className="analytics-consent" aria-label="Analytics cookie preferences">
        <p>Allow Google Analytics cookies to measure visits and link clicks? Advertising features are disabled. Your choice won’t affect access to this site.</p>
        <div><button onClick={() => choose(false)}>Decline</button><button onClick={() => choose(true)}>Accept analytics</button></div>
      </aside>}
    </>
  );
}
