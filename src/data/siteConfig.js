const env = import.meta.env || {};

export const siteConfig = {
  name: 'Dimensimu 3D',
  tagline: 'Wujudkan Ide, Jadi Nyata.',
  description: 'Dimensimu 3D menyediakan 3D printing, custom desain 3D, prototyping, dan produk 3D siap pakai untuk kebutuhan pribadi maupun bisnis.',
  email: env.VITE_CONTACT_EMAIL || 'dimensimu3d@gmail.com' || '',
  phone: env.VITE_CONTACT_PHONE || '+6289677725622' || '',
  address: env.VITE_CONTACT_ADDRESS || 'Indonesia',
  whatsappNumber: env.VITE_WHATSAPP_NUMBER || '',
  mapsUrl: env.VITE_GOOGLE_MAPS_URL || 'https://maps.app.goo.gl/nnxJV2y4fyD5Hrmb9' || '',
  instagramUrl: env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/dimensimu3d?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==' || '',
  tiktokUrl: env.VITE_TIKTOK_URL || 'https://www.tiktok.com/@ahfproject?is_from_webapp=1&sender_device=pc' || '',
  youtubeUrl: env.VITE_YOUTUBE_URL || 'https://www.youtube.com/@ahfproject' || '',
  marketplace: {
    shopee: env.VITE_SHOPEE_URL || 'https://shopee.co.id/dimensimu3d' || '',
    tokopedia: env.VITE_TOKOPEDIA_URL || 'https://shopee.co.id/dimensimu3d' || '',
    tiktokShop: env.VITE_TIKTOK_SHOP_URL || 'https://shopee.co.id/dimensimu3d' || '',
  },
};
