import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

const canonicalPath = () => {
  const url = new URL(window.location.href);
  url.hash = '';
  url.search = '';
  return url.toString();
};

export default function SiteMeta() {
  useEffect(() => {
    document.title = `${siteConfig.name} — ${siteConfig.tagline}`;

    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', siteConfig.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalPath();

    let structuredData = document.getElementById('dimensimu-ld-json');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'dimensimu-ld-json';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }

    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      url: canonicalPath(),
      service: [
        { '@type': 'Service', name: '3D Printing' },
        { '@type': 'Service', name: 'Custom Desain 3D' },
        { '@type': 'Service', name: 'Prototyping' },
      ],
    });
  }, []);

  return null;
}
