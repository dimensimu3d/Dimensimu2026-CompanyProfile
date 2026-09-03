import { Box, Layers3, Phone, ShoppingBag, WandSparkles } from 'lucide-react';
export default function MobileBottomNav({ onCustom }) {
  return <nav className="mobile-bottom-nav"><a href="#beranda"><Box/><span>Beranda</span></a><a href="#produk"><ShoppingBag/><span>Produk</span></a><button onClick={onCustom}><WandSparkles/><span>Custom</span></button><a href="#layanan"><Layers3/><span>Layanan</span></a><a href="#kontak"><Phone/><span>Kontak</span></a></nav>;
}
