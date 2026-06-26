"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false });
const FloatingWords = dynamic(() => import("./FloatingWords"), { ssr: false });

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Staggered entrance animation
    const elements = [
      { el: lineRef.current, delay: 300 },
      { el: subtitleRef.current, delay: 600 },
      { el: titleRef.current, delay: 800 },
      { el: ctaRef.current, delay: 1400 },
    ];
    elements.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      setTimeout(() => {
        el.style.transition = "opacity 1.2s ease, transform 1.2s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100dvh",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 50% 60%, #1a1206 0%, #0a0a0a 70%)",
      }}
    >
      {/* Three.js particles */}
      <ParticleCanvas />

      {/* Floating emotion words */}
      <FloatingWords />

      {/* Radial vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.8) 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "900px",
        }}
      >
        {/* Top line */}
        <div
          ref={lineRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "var(--gold)",
              opacity: 0.6,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.35em",
              color: "var(--gold)",
              textTransform: "uppercase",
              opacity: 0.8,
            }}
          >
            Парфюмерный дом
          </span>
          <div
            style={{
              width: "48px",
              height: "1px",
              background: "var(--gold)",
              opacity: 0.6,
            }}
          />
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(4rem, 12vw, 10rem)",
            fontWeight: 300,
            letterSpacing: "0.1em",
            lineHeight: 0.9,
            color: "var(--text)",
            marginBottom: "32px",
            fontVariant: "small-caps",
          }}
        >
          Belle
          <span style={{ color: "var(--gold)" }}>Eclat</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
            letterSpacing: "0.22em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            marginBottom: "60px",
          }}
        >
          Parfum créé en France
        </p>

        {/* CTA */}
        <div ref={ctaRef} style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#collection"
            style={{
              display: "inline-block",
              padding: "14px 44px",
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--gold)";
              el.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "var(--gold)";
            }}
          >
            Открыть коллекцию
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              padding: "14px 44px",
              border: "1px solid rgba(245,240,232,0.2)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(245,240,232,0.5)";
              el.style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(245,240,232,0.2)";
              el.style.color = "var(--text-muted)";
            }}
          >
            Связаться
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.4,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "var(--text)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--text), transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.15); }
        }
      `}</style>
    </section>
  );
}
