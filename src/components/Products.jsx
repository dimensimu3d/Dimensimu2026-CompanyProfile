import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";
import { useMemo, useState } from "react";
import { catalogSettings, products } from "../data/siteData";
import { ProductArt, Reveal, SmartImage } from "./common";
import { openWhatsApp, productMessage } from "../utils/whatsapp";
import ProductDetailModal from "./ProductDetailModal";

const categories = [
  "Semua",
  ...new Set(products.map((product) => product.category)),
];

export default function Products({ onCustom, notify }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");
  const [selected, setSelected] = useState(null);
  const [displayLimit, setDisplayLimit] = useState(
    catalogSettings.defaultLimit,
  );

  const visibleProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        category === "Semua" || product.category === category;
      const matchesQuery =
        !normalized ||
        `${product.name} ${product.description} ${product.category}`
          .toLowerCase()
          .includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const displayedProducts = useMemo(() => {
    if (displayLimit === Infinity) return visibleProducts;
    return visibleProducts.slice(0, displayLimit);
  }, [visibleProducts, displayLimit]);

  const inspect = (product) => setSelected(product);

  const order = (product) => {
    const opened = openWhatsApp(productMessage(product));
    if (!opened) {
      notify(
        "Tambahkan VITE_WHATSAPP_NUMBER pada .env untuk mengaktifkan pemesanan WhatsApp.",
      );
    }
  };

  return (
    <section id="produk" className="section-pad">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">
            <ShoppingBag size={13} /> KATALOG PRODUK
          </span>
          <h2>Produk Pilihan</h2>
          <p>
            Pilih produk siap pakai atau jadikan referensi untuk project
            custom-mu.
          </p>
        </Reveal>
        <div className="catalog-toolbar">
          <div className="catalog-search">
            <Search size={17} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari produk..."
              aria-label="Cari produk"
            />
          </div>
          <div className="catalog-controls">
            <label className="catalog-limit">
              <span>Maks. tampil</span>
              <span className="catalog-select">
                <select
                  value={displayLimit === Infinity ? "all" : displayLimit}
                  onChange={(e) =>
                    setDisplayLimit(
                      e.target.value === "all"
                        ? Infinity
                        : Number(e.target.value),
                    )
                  }
                  aria-label="Maksimal produk yang ditampilkan"
                >
                  {catalogSettings.limitOptions.map((limit) => (
                    <option key={limit} value={limit}>
                      {limit} produk
                    </option>
                  ))}
                  <option value="all">Semua</option>
                </select>
                <ChevronDown size={14} aria-hidden="true" />
              </span>
            </label>
            <div className="catalog-count">
              <SlidersHorizontal size={15} />
              <span>
                {displayedProducts.length} dari {visibleProducts.length} produk
              </span>
            </div>
          </div>
        </div>
        <div
          className="catalog-filters"
          role="tablist"
          aria-label="Filter kategori produk"
        >
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
              role="tab"
              aria-selected={category === item}
            >
              {item}
            </button>
          ))}
        </div>
        {displayedProducts.length ? (
          <div className="product-grid">
            {displayedProducts.map((p) => (
              <Reveal key={p.id}>
                <article className="product-card">
                  <button
                    className="product-image product-image-button"
                    onClick={() => inspect(p)}
                    aria-label={`Lihat detail ${p.name}`}
                  >
                    <span className="product-tag">{p.tag}</span>
                    {p.image ? (
                      <>
                        <SmartImage
                          src={p.image}
                          alt={p.name}
                          className="product-real-image"
                        />
                        <span className="product-art-fallback" hidden>
                          <ProductArt type={p.art} />
                        </span>
                      </>
                    ) : (
                      <ProductArt type={p.art} />
                    )}
                  </button>
                  <div className="product-info">
                    <div>
                      <span className="product-category">{p.category}</span>
                      <h3>{p.name}</h3>
                      <strong>{p.price}</strong>
                    </div>
                    <button
                      className="icon-btn"
                      aria-label={`Lihat ${p.name}`}
                      onClick={() => inspect(p)}
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <div className="product-actions">
                    <button
                      className="btn btn-light"
                      onClick={() => inspect(p)}
                    >
                      Detail
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => order(p)}
                    >
                      Pesan via WhatsApp
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="catalog-empty">
            <ShoppingBag size={25} />
            <strong>Produk tidak ditemukan</strong>
            <span>Coba kata kunci atau kategori lain.</span>
            <button
              className="text-button"
              onClick={() => {
                setQuery("");
                setCategory("Semua");
              }}
            >
              Reset filter
            </button>
          </div>
        )}
        <div className="center catalog-footer-actions">
          {displayLimit !== Infinity &&
            visibleProducts.length > displayedProducts.length && (
              <button
                className="btn btn-ghost"
                onClick={() => setDisplayLimit(Infinity)}
              >
                Tampilkan Semua {visibleProducts.length} Produk{" "}
                <ShoppingBag size={17} />
              </button>
            )}
          {(query || category !== "Semua") && (
            <button
              className="btn btn-light"
              onClick={() => {
                setQuery("");
                setCategory("Semua");
              }}
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>
      {selected && (
        <ProductDetailModal
          product={selected}
          onClose={() => setSelected(null)}
          onCustom={() => {
            setSelected(null);
            onCustom();
          }}
          onOrder={() => order(selected)}
        />
      )}
    </section>
  );
}
