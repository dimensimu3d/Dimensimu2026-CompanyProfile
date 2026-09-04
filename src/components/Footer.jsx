import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
  ShoppingBag,
} from "lucide-react";
import { Logo } from "./common";
import { siteConfig } from "../data/siteConfig";

const ExternalLink = ({ href, children, label }) =>
  href ? (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  ) : null;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Solusi 3D printing dan custom desain untuk kebutuhan pribadi,
            bisnis, pendidikan, koleksi, dan prototyping.
          </p>
          <div className="socials">
            <ExternalLink
              href={siteConfig.instagramUrl}
              label="Instagram Dimensimu 3D"
            >
              <Instagram size={17} />
            </ExternalLink>
            <ExternalLink
              href={siteConfig.tiktokUrl}
              label="TikTok Dimensimu 3D"
            >
              <span style={{ fontSize: "14px", fontWeight: 800 }}>♪</span>
            </ExternalLink>
            <ExternalLink
              href={siteConfig.youtubeUrl}
              label="YouTube Dimensimu 3D"
            >
              <Youtube size={17} />
            </ExternalLink>
          </div>
        </div>
        <div>
          <h4>Navigasi</h4>
          <a href="#beranda">Beranda</a>
          <a href="#tentang-kami">Tentang Kami</a>
          <a href="#layanan">Layanan</a>
          <a href="#produk">Produk</a>
          <a href="#portofolio">Portofolio</a>
        </div>
        <div>
          <h4>Layanan</h4>
          <a href="#layanan">3D Printing</a>
          <a href="#layanan">Custom Desain 3D</a>
          <a href="#layanan">Prototyping</a>
          <a href="#layanan">Finishing</a>
        </div>
        <div>
          <h4>Kontak & Toko</h4>
          <span>
            <MapPin /> {siteConfig.address}
          </span>
          {siteConfig.phone ? (
            <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}>
              <Phone /> {siteConfig.phone}
            </a>
          ) : null}
          {siteConfig.email ? (
            <a href={`mailto:${siteConfig.email}`}>
              <Mail /> {siteConfig.email}
            </a>
          ) : null}
          <div className="footer-stores">
            {siteConfig.marketplace.shopee && (
              <a
                href={siteConfig.marketplace.shopee}
                target="_blank"
                rel="noreferrer"
              >
                <ShoppingBag /> Shopee
              </a>
            )}
            {siteConfig.marketplace.tokopedia && (
              <a
                href={siteConfig.marketplace.tokopedia}
                target="_blank"
                rel="noreferrer"
              >
                <ShoppingBag /> Tokopedia
              </a>
            )}
            {siteConfig.marketplace.tiktokShop && (
              <a
                href={siteConfig.marketplace.tiktokShop}
                target="_blank"
                rel="noreferrer"
              >
                <ShoppingBag /> TikTok Shop
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Dimensimu 3D. All rights reserved.</span>
        <span>Made for ideas that deserve to exist.</span>
      </div>
    </footer>
  );
}
