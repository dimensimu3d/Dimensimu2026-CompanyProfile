import { CheckCircle2, MessageCircle, X } from 'lucide-react';
import { ProductArt, SmartImage } from './common';
import { useState } from 'react';

export default function ProductDetailModal({ product, onClose, onCustom, onOrder }) {
  const gallery = product.gallery?.length ? product.gallery : (product.image ? [product.image] : []);
  const [activeImage, setActiveImage] = useState(gallery[0] || '');
  if (!product) return null;
  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal product-detail-modal" role="dialog" aria-modal="true" aria-labelledby="product-detail-title">
        <button className="modal-close" onClick={onClose} aria-label="Tutup"><X /></button>
        <div className="product-detail-grid">
          <div>
            <div className="product-detail-visual">
              {activeImage ? <SmartImage src={activeImage} alt={product.name} className="product-detail-real-image"/> : <ProductArt type={product.art} />}
            </div>
            {gallery.length > 1 && <div className="product-detail-thumbs" aria-label="Galeri gambar produk">
              {gallery.map((src) => <button key={src} type="button" className={activeImage === src ? 'active' : ''} onClick={() => setActiveImage(src)} aria-label={`Tampilkan gambar ${product.name}`}>
                <img src={src} alt="" loading="lazy" decoding="async"/>
              </button>)}
            </div>}
          </div>
          <div>
            <span className="eyebrow">{product.category}</span>
            <h2 id="product-detail-title">{product.name}</h2>
            <strong className="detail-price">{product.price}</strong>
            <p>{product.description}</p>
            <div className="detail-meta">
              <span><CheckCircle2 size={15}/> {product.tag}</span>
              <span><CheckCircle2 size={15}/> Custom ukuran & warna</span>
              <span><CheckCircle2 size={15}/> Konsultasi kebutuhan</span>
            </div>
            <div className="detail-actions"><button className="btn btn-primary detail-cta" onClick={onOrder}><MessageCircle size={17}/> Pesan via WhatsApp</button><button className="btn btn-light detail-cta" onClick={onCustom}>Custom / Konsultasi</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
