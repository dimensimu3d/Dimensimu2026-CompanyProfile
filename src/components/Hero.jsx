import { lazy, Suspense, Component } from 'react';
import { ArrowRight, BadgeCheck, Clock3, Gem, ShieldCheck, Sparkles, WandSparkles } from 'lucide-react';
import { Particles, PrinterVisual, Reveal } from './common';

const Printer3DExperience = lazy(() => import('./Printer3DExperience'));

class PrinterFallbackBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export default function Hero({ onCustom }) {
  return <section id="beranda" className="hero section-pad">
    <Particles />
    <div className="container hero-grid">
      <Reveal className="hero-copy">
        <span className="eyebrow"><Sparkles size={14}/> 3D PRINTING & CUSTOM SOLUTION</span>
        <h1>Wujudkan Ide,<br/><em>Jadi Nyata.</em></h1>
        <p className="hero-lead">Dimensimu 3D membantu mengubah ide menjadi produk nyata melalui 3D printing berkualitas, custom desain, dan solusi prototyping.</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#produk">Lihat Produk <ArrowRight size={17}/></a>
          <button className="btn btn-ghost" onClick={onCustom}>Custom Sekarang <WandSparkles size={17}/></button>
        </div>
        <div className="trust-row">
          <span><ShieldCheck size={18}/> Kualitas Tinggi</span><span><BadgeCheck size={18}/> Hasil Presisi</span><span><Gem size={18}/> Harga Terjangkau</span><span><Clock3 size={18}/> Pengerjaan Cepat</span>
        </div>
      </Reveal>
      <Reveal className="hero-visual">
        <PrinterFallbackBoundary fallback={<PrinterVisual />}>
          <Suspense fallback={<PrinterVisual />}><Printer3DExperience /></Suspense>
        </PrinterFallbackBoundary>
        <div className="hero-float"><span className="live-dot"/> Custom order tersedia</div>
      </Reveal>
    </div>
  </section>;
}
