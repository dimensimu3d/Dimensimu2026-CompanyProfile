import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/siteData';
import { Reveal } from './common';
export default function FAQ({ faq, setFaq, onCustom }) {
  return <section id="faq" className="section-pad faq-section"><div className="container faq-grid"><Reveal><span className="eyebrow">FAQ</span><h2>Pertanyaan yang Sering Ditanyakan</h2><p>Belum menemukan jawaban? <button className="text-button" onClick={onCustom}>Tanyakan langsung ke kami.</button></p></Reveal>
    <Reveal><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${faq===i?'open':''}`} key={q}><button onClick={()=>setFaq(faq===i?-1:i)}><span>{q}</span><ChevronDown size={18}/></button><div className="faq-answer"><p>{a}</p></div></div>)}</div></Reveal>
  </div></section>;
}
