import { ArrowRight, Quote } from 'lucide-react';
import { portfolio } from '../data/siteData';
import { ProductArt, Reveal, SmartImage } from './common';
export default function Portfolio() {
  return <section id="portofolio" className="section-pad portfolio-section"><div className="container portfolio-grid">
    <Reveal><span className="eyebrow">PORTOFOLIO</span><h2>Hasil Karya Kami</h2><p>Beberapa hasil cetak dan custom project yang pernah kami kerjakan.</p><div className="portfolio-mini-grid">{portfolio.map((p)=><div className="portfolio-item" key={p.title}>{p.image ? <><SmartImage src={p.image} alt={p.title} className="portfolio-real-image"/><span className="portfolio-art-fallback" hidden><ProductArt type={p.art}/></span></> : <ProductArt type={p.art}/>}<span>{p.title}</span></div>)}</div><a className="btn btn-ghost" href="#kontak">Lihat Portofolio <ArrowRight size={17}/></a></Reveal>
    <Reveal><span className="eyebrow">TESTIMONI</span><h2>Apa Kata Mereka?</h2><div className="testimonial"><Quote className="quote-icon"/><p>“Hasil print rapi dan detailnya luar biasa! Pelayanan ramah dan proses cepat. Puas banget!”</p><div className="reviewer"><span className="avatar">RP</span><span><strong>Ricky Pratama</strong><small>Pelanggan</small></span><div className="stars">★★★★★</div></div></div></Reveal>
  </div></section>;
}
