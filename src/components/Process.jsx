import { ArrowRight } from 'lucide-react';
import { steps } from '../data/siteData';
import { Reveal } from './common';
export default function Process() {
  return <section id="proses" className="section-pad process-section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">ALUR PEMESANAN</span><h2>Proses Mudah, Hasil Memuaskan</h2><p>Alur yang sederhana supaya pesananmu jelas sejak awal.</p></Reveal>
    <div className="steps">{steps.map(({icon:Icon,title,text},i) => <Reveal key={title} className="step-wrap"><div className="step"><span className="step-icon"><Icon/></span><span className="step-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></div>{i < steps.length-1 && <ArrowRight className="step-arrow"/>}</Reveal>)}</div>
  </div></section>;
}
