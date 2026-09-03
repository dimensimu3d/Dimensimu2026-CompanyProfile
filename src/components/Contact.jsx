import { Mail, Send, WandSparkles, MapPin } from 'lucide-react';
import { Reveal } from './common';
import { siteConfig } from '../data/siteConfig';
export default function Contact({ onCustom, notify }) {
  return <>
    <section id="kontak" className="section-pad contact-section"><div className="container contact-card"><div><span className="eyebrow">SIAP MEMULAI?</span><h2>Punya Ide yang Ingin Dicetak?</h2><p>Ceritakan kebutuhanmu. Kami bantu dari konsultasi, desain, sampai produk jadi.</p></div><div className="contact-actions"><button className="btn btn-primary" onClick={onCustom}>Mulai Custom <WandSparkles size={17}/></button>{siteConfig.email ? <a className="btn btn-light" href={`mailto:${siteConfig.email}`}>Kirim Email <Mail size={17}/></a> : <span className="btn btn-light"><MapPin size={17}/> Hubungi untuk detail lokasi</span>}</div></div></section>
    <section className="newsletter"><div className="container newsletter-inner"><div className="newsletter-icon"><Send/></div><div><span className="eyebrow">UPDATE & PROMO</span><h3>Dapatkan Update & Promo Terbaru</h3><p>Info produk baru dan promo langsung ke emailmu.</p></div><form onSubmit={(e)=>{e.preventDefault();notify('Terima kasih! Emailmu sudah terdaftar.')}}><input type="email" required placeholder="Masukkan email Anda" aria-label="Email"/><button className="btn btn-primary" type="submit">Berlangganan</button></form></div></section>
  </>;
}
