"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const NAV_LINKS = [
  { label: "Коллекция", href: "#collection" },
  { label: "О бренде", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY > 60) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasBg = scrolled || menuOpen;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isMobile ? "14px 20px" : "20px 48px 10px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.4s ease",
          background: hasBg ? "rgba(10,10,10,0.96)" : "transparent",
          backdropFilter: hasBg ? "blur(12px)" : "none",
          borderBottom: hasBg ? "1px solid rgba(201,168,76,0.1)" : "none",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-icon.png?v=4"
            alt=""
            aria-hidden="true"
            style={{ height: isMobile ? "42px" : "62px", width: "auto", display: "block" }}
          />
          <span
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: isMobile ? "0.9rem" : "1.05rem",
              fontWeight: 400,
              fontVariant: "small-caps",
              letterSpacing: "0.1em",
              color: "var(--gold)",
              lineHeight: 1,
            }}
          >
            BelleEclat
          </span>
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.22em",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
              >
                {label}
              </a>
            ))}
            <a
              href="/opt"
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.22em",
                color: "var(--gold)",
                textDecoration: "none",
                textTransform: "uppercase",
                border: "1px solid rgba(201,168,76,0.4)",
                padding: "8px 18px",
                transition: "background 0.25s, color 0.25s",
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
              Партнёрам
            </a>
          </div>
        )}

        {/* Hamburger button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "5px",
              outline: "none",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span style={{
              display: "block", width: "22px", height: "1.5px",
              background: "var(--gold)",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", width: "22px", height: "1.5px",
              background: "var(--gold)",
              transition: "opacity 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: "22px", height: "1.5px",
              background: "var(--gold)",
              transition: "transform 0.3s ease",
              transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }} />
          </button>
        )}
      </nav>

      {/* Mobile slide-down menu */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(10,10,10,0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(201,168,76,0.12)",
            overflow: "hidden",
            maxHeight: menuOpen ? "240px" : "0",
            transition: "max-height 0.35s ease",
          }}
        >
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.28em",
                color: "var(--text-muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                padding: "18px 24px",
                borderBottom: "1px solid rgba(201,168,76,0.08)",
                WebkitTapHighlightColor: "transparent",
              }}
              onTouchStart={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.06)";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              }}
              onTouchEnd={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="/opt"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.28em",
              color: "var(--gold)",
              textDecoration: "none",
              textTransform: "uppercase",
              padding: "18px 24px",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            Партнёрам
          </a>
        </div>
      )}
    </>
  );
}
