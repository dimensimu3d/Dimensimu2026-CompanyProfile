import { ArrowRight, Check } from "lucide-react";
import { ProductArt, Reveal, SmartImage } from "./common";
import { aboutUsImage } from "../data/siteData";
export default function About() {
  return (
    <section id="tentang-kami" className="section-pad about-section">
      <div className="container two-col">
        <Reveal>
          <div className="about-art">
            <div className="about-card c1">
              <SmartImage
                src={aboutUsImage[0].image}
                alt={aboutUsImage[0].name}
                className="product-real-image"
              />
              <span className="product-art-fallback" hidden>
                <ProductArt type={aboutUsImage[0].art} />
              </span>
            </div>
            <div className="about-card c2">
              <SmartImage
                src={aboutUsImage[1].image}
                alt={aboutUsImage[1].name}
                className="product-real-image"
              />
              <span className="product-art-fallback" hidden>
                <ProductArt type={aboutUsImage[1].art} />
              </span>
            </div>
            <div className="about-card c3">
              <SmartImage
                src={aboutUsImage[2].image}
                alt={aboutUsImage[2].name}
                className="product-real-image"
              />
              <span className="product-art-fallback" hidden>
                <ProductArt type={aboutUsImage[2].art} />
              </span>
            </div>
            <span className="about-orb" />
          </div>
        </Reveal>
        <Reveal>
          <span className="eyebrow">TENTANG KAMI</span>
          <h2>
            Solusi 3D Printing
            <br />
            <em>Untuk Semua Kebutuhan</em>
          </h2>
          <p>
            Dimensimu 3D hadir untuk membantu mewujudkan ide kreatif Anda
            menjadi produk nyata. Kami melayani 3D printing, custom desain,
            prototyping, hingga produk siap pakai.
          </p>
          <div className="check-list">
            <span>
              <Check /> Konsultasi kebutuhan
            </span>
            <span>
              <Check /> Custom sesuai ukuran
            </span>
            <span>
              <Check /> Quality control
            </span>
            <span>
              <Check /> Support setelah pesanan
            </span>
          </div>
          <a className="text-link" href="#layanan">
            Selengkapnya <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
