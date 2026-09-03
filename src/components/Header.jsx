import { ArrowRight, Menu, X } from 'lucide-react';
import { navItems } from '../data/siteData';
import { Logo } from './common';

export default function Header({ menuOpen, setMenuOpen, onCustom }) {
  const anchor = (item) => item.toLowerCase().replaceAll(' ', '-');
  return <header className="site-header">
    <div className="container nav-wrap">
      <Logo />
      <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`}>
        {navItems.map((item) => <a key={item} href={`#${anchor(item)}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
      </nav>
      <button className="nav-cta" onClick={onCustom}>Hubungi Kami <ArrowRight size={16}/></button>
      <button className="menu-btn" aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} onClick={() => setMenuOpen((value) => !value)}>
        {menuOpen ? <X/> : <Menu/>}
      </button>
    </div>
  </header>;
}
