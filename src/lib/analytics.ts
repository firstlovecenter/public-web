const MEASUREMENT_ID = 'G-HE4CVLW1G4';

let initialized = false;

/**
 * Load GA4 once the page has finished loading, so it never competes with the
 * hero for bandwidth but still counts visitors who leave without interacting.
 */
export const loadAnalytics = () => {
  if (initialized) return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  // gtag.js only processes `arguments` objects pushed onto dataLayer. Pushing a
  // plain array (e.g. `(...args) => dataLayer.push(args)`) is silently ignored,
  // which is why no hits were recorded from Sept 2026 until this fix.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID);

  const inject = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    document.head.appendChild(script);
  };
  const whenIdle = () =>
    'requestIdleCallback' in window ? window.requestIdleCallback(inject, { timeout: 3000 }) : setTimeout(inject, 1);

  if (document.readyState === 'complete') whenIdle();
  else window.addEventListener('load', whenIdle, { once: true });
};
