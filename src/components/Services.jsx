import { ArrowRight } from 'lucide-react';
import { services } from '../data/siteData';
import { Reveal } from './common';
export default function Services() {
  return <section id="layanan" className="section-pad soft-section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">LAYANAN KAMI</span><h2>Layanan yang Kami Tawarkan</h2><p>Dari ide sederhana hingga produk siap digunakan, kami bantu di setiap tahap.</p></Reveal>
    <div className="service-grid">{services.map(({icon:Icon,title,text}) => <Reveal key={title}><article className="service-card"><span className="icon-bubble"><Icon/></span><h3>{title}</h3><p>{text}</p><a href="#kontak">Konsultasikan <ArrowRight size={15}/></a></article></Reveal>)}</div>
    <div className="center"><a className="btn btn-ghost" href="#kontak">Lihat Semua Layanan <ArrowRight size={17}/></a></div>
  </div></section>;
}
