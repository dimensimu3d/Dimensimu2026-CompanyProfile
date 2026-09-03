import { ArrowRight, Check } from 'lucide-react';
import { ProductArt, Reveal } from './common';
export default function About() {
  return <section id="tentang-kami" className="section-pad about-section"><div className="container two-col">
    <Reveal><div className="about-art"><div className="about-card c1"><ProductArt type="vase"/></div><div className="about-card c2"><ProductArt type="figure"/></div><div className="about-card c3"><ProductArt type="gear"/></div><span className="about-orb"/></div></Reveal>
    <Reveal><span className="eyebrow">TENTANG KAMI</span><h2>Solusi 3D Printing<br/><em>Untuk Semua Kebutuhan</em></h2><p>Dimensimu 3D hadir untuk membantu mewujudkan ide kreatif Anda menjadi produk nyata. Kami melayani 3D printing, custom desain, prototyping, hingga produk siap pakai.</p><div className="check-list"><span><Check/> Konsultasi kebutuhan</span><span><Check/> Custom sesuai ukuran</span><span><Check/> Quality control</span><span><Check/> Support setelah pesanan</span></div><a className="text-link" href="#layanan">Selengkapnya <ArrowRight size={16}/></a></Reveal>
  </div></section>;
}
