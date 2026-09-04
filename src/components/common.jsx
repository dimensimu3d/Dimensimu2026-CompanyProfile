import { Box, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { logoIcon } from "../data/siteData";

export function Logo() {
  return (
    <a className="logo" href="#beranda" aria-label="Dimensimu 3D">
      <span className="logo-mark">
        <img src={logoIcon} alt="Dimensimu 3D" className="logo-image" />
      </span>
      <span>
        <strong>Dimensimu 3D</strong>
        <small>3D PRINTING & CUSTOM SOLUTION</small>
        <small>created by @yasif883</small>
      </span>
    </a>
  );
}

export function Reveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={`reveal ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SmartImage({ src, alt, className = "", fallback }) {
  if (!src) return fallback ?? null;
  return (
    <span className="smart-image" data-loaded="false">
      <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        width="800"
        height="600"
        onLoad={(event) =>
          event.currentTarget.parentElement?.setAttribute("data-loaded", "true")
        }
        onError={(event) => {
          event.currentTarget.parentElement?.setAttribute("data-error", "true");
          const fallbackNode =
            event.currentTarget.parentElement?.nextElementSibling;
          if (fallbackNode) fallbackNode.removeAttribute("hidden");
        }}
      />
    </span>
  );
}

export function WhatsAppFloat({ href }) {
  if (!href) return null;
  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp Dimensimu 3D"
    >
      <MessageCircle size={21} fill="currentColor" />
      <span>Chat WhatsApp</span>
    </a>
  );
}

export function ProductArt({ type }) {
  return (
    <div className={`product-art art-${type}`} aria-hidden="true">
      <span className="art-glow" />
      {type === "keychain" && (
        <>
          <span className="ring" />
          <span className="badge-3d">3D</span>
        </>
      )}
      {type === "phone" && (
        <>
          <span className="phone-shape" />
          <span className="phone-base" />
        </>
      )}
      {type === "figure" && (
        <>
          <span className="head" />
          <span className="body" />
          <span className="arm a1" />
          <span className="arm a2" />
          <span className="leg l1" />
          <span className="leg l2" />
        </>
      )}
      {type === "pencil" && (
        <>
          <span className="cup" />
          <span className="pencil p1" />
          <span className="pencil p2" />
          <span className="pencil p3" />
        </>
      )}
      {type === "gear" && <span className="gear-shape" />}
      {type === "vase" && <span className="vase-shape" />}
      {type === "robot" && (
        <>
          <span className="robot-head" />
          <span className="robot-body" />
          <span className="robot-leg r1" />
          <span className="robot-leg r2" />
        </>
      )}
    </div>
  );
}

export function PrinterVisual() {
  return (
    <div className="printer-scene" aria-label="Ilustrasi printer 3D">
      <div className="scene-orb orb-a" />
      <div className="scene-orb orb-b" />
      <div className="printer">
        <div className="printer-top">DIMENSIMU 3D</div>
        <div className="printer-frame f-left" />
        <div className="printer-frame f-right" />
        <div className="printer-frame f-top" />
        <div className="printer-bed" />
        <div className="print-object">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="printer-head">
          <span />
        </div>
        <div className="printer-spool" />
      </div>
    </div>
  );
}

export function Particles() {
  const dots = Array.from({ length: 14 }, (_, i) => i);
  return (
    <div className="particles" aria-hidden="true">
      {dots.map((i) => (
        <span key={i} style={{ "--i": i }} />
      ))}
    </div>
  );
}
