"use client";

import { useEffect, useRef } from "react";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = "opacity 1s ease, transform 1s ease";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      style={{
        padding: "120px 48px",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        textAlign: "center",
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.05) 0%, #0a0a0a 60%)",
      }}
    >
      <div ref={ref} style={{ maxWidth: "640px", margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.35em",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "24px",
            opacity: 0.7,
          }}
        >
          — Контакты
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 300,
            letterSpacing: "0.06em",
            color: "var(--text)",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Начнём диалог
        </h2>

        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.85rem",
            lineHeight: 1.8,
            color: "var(--text-muted)",
            marginBottom: "56px",
          }}
        >
          Оптовые заказы, партнёрство, индивидуальные ароматы —
          <br />
          мы открыты для любого сотрудничества.
        </p>

        {/* Contact links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "center",
            marginBottom: "64px",
          }}
        >
          {[
            { label: "Telegram", href: "https://t.me/belleeclat", icon: "✉" },
            { label: "Instagram", href: "https://instagram.com/belleeclat", icon: "◎" },
            { label: "WhatsApp", href: "https://wa.me/79000000000", icon: "◈" },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.2em",
                color: "var(--text-muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.3s",
                padding: "4px 0",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-muted)")
              }
            >
              <span style={{ color: "var(--gold)", opacity: 0.6 }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>

        {/* Gold divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            justifyContent: "center",
            opacity: 0.3,
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "var(--gold)" }} />
          <div
            style={{
              width: "6px",
              height: "6px",
              background: "var(--gold)",
              transform: "rotate(45deg)",
            }}
          />
          <div style={{ flex: 1, height: "1px", background: "var(--gold)" }} />
        </div>
      </div>
    </section>
  );
}
