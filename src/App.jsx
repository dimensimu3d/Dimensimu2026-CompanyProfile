import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomModal from './components/CustomModal';
import MobileBottomNav from './components/MobileBottomNav';
import SiteMeta from './components/SiteMeta';
import ErrorBoundary from './components/ErrorBoundary';
import { WhatsAppFloat } from './components/common';
import { siteConfig } from './data/siteConfig';
import { trackEvent } from './utils/analytics';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [faq, setFaq] = useState(0);
  const [toast, setToast] = useState('');

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen || modalOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen, modalOpen]);

  const notify = (message) => {
    setToast(message);
    window.setTimeout(() => setToast(''), 2500);
  };

  const submitCustom = (e) => {
    e.preventDefault();
    setModalOpen(false);
    notify('Permintaan custom berhasil disiapkan. Tim kami akan menghubungi Anda.');
  };

  const openCustom = () => {
    trackEvent('open_custom_order');
    setModalOpen(true);
  };

  const whatsappHref = siteConfig.whatsappNumber ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Halo Dimensimu 3D, saya ingin konsultasi tentang 3D printing / custom desain.')}` : '';

  return <ErrorBoundary><>
    <SiteMeta />
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} onCustom={openCustom} />
    <main id="konten">
      <Hero onCustom={openCustom} />
      <Stats />
      <About />
      <Services />
      <Products onCustom={openCustom} notify={notify} />
      <Process />
      <Portfolio />
      <FAQ faq={faq} setFaq={setFaq} onCustom={openCustom} />
      <Contact onCustom={openCustom} notify={notify} />
    </main>
    <Footer />
    <WhatsAppFloat href={whatsappHref} />
    <MobileBottomNav onCustom={openCustom} />
    {modalOpen && <CustomModal onClose={() => setModalOpen(false)} onSubmit={submitCustom} notify={notify} />}
    {toast && <div className="toast" role="status"><Check size={18}/>{toast}</div>}
  </></ErrorBoundary>;
}
