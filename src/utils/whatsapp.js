import { siteConfig } from '../data/siteConfig.js';

export function createWhatsAppUrl(message) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  if (!number) return '';
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
  const url = createWhatsAppUrl(message);
  if (!url) return false;
  window.open(url, '_blank', 'noopener,noreferrer');
  return true;
}

export function productMessage(product) {
  return `Halo Dimensimu 3D, saya tertarik dengan produk "${product.name}" (${product.price}). Saya ingin konsultasi mengenai ketersediaan, ukuran, warna, dan pemesanannya.`;
}
