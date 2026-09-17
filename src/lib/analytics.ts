const MEASUREMENT_ID = 'G-HE4CVLW1G4';

let initialized = false;

export const loadAnalyticsAfterInteraction = () => {
  const events: Array<keyof WindowEventMap> = ['pointerdown', 'keydown', 'scroll'];
  const load = () => {
    if (initialized) return;
    initialized = true;
    events.forEach((event) => window.removeEventListener(event, load));
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer.push(args);
    window.gtag('js', new Date());
    window.gtag('config', MEASUREMENT_ID);
  };
  events.forEach((event) => window.addEventListener(event, load, { once: true, passive: event === 'scroll' }));
  return () => events.forEach((event) => window.removeEventListener(event, load));
};
