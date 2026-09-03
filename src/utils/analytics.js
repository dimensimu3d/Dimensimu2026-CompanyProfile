export function trackEvent(name, payload = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: name,
    ...payload,
    timestamp: Date.now(),
  });

  window.dispatchEvent(new CustomEvent('analytics:event', {
    detail: { name, payload },
  }));
}
