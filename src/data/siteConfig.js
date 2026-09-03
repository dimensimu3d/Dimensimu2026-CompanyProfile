const env = import.meta.env || {};

export const siteConfig = {
  name: 'Dimensimu 3D',
  tagline: 'Wujudkan Ide, Jadi Nyata.',
  description: 'Dimensimu 3D menyediakan 3D printing, custom desain 3D, prototyping, dan produk 3D siap pakai untuk kebutuhan pribadi maupun bisnis.',
  email: env.VITE_CONTACT_EMAIL || '',
  phone: env.VITE_CONTACT_PHONE || '',
  address: env.VITE_CONTACT_ADDRESS || 'Indonesia',
  whatsappNumber: env.VITE_WHATSAPP_NUMBER || '',
  mapsUrl: env.VITE_GOOGLE_MAPS_URL || '',
  instagramUrl: env.VITE_INSTAGRAM_URL || '',
  tiktokUrl: env.VITE_TIKTOK_URL || '',
  youtubeUrl: env.VITE_YOUTUBE_URL || '',
  marketplace: {
    shopee: env.VITE_SHOPEE_URL || '',
    tokopedia: env.VITE_TOKOPEDIA_URL || '',
    tiktokShop: env.VITE_TIKTOK_SHOP_URL || '',
  },
};
