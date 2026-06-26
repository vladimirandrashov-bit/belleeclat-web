"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 48px 10px 56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.4s ease",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "none",
      }}
    >
      {/* Logo: icon + wordmark side by side */}
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
        }}
      >
        {/* Icon only (b with laurel) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-icon.png?v=4"
          alt=""
          aria-hidden="true"
          style={{ height: "62px", width: "auto", display: "block" }}
        />
        {/* Wordmark */}
        <span
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "1.05rem",
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

      {/* Navigation links */}
      <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
        {[
          { label: "Коллекция", href: "#collection" },
          { label: "О бренде", href: "#about" },
          { label: "Контакты", href: "#contact" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.68rem",
              fontWeight: 400,
              letterSpacing: "0.22em",
              color: "var(--text-muted)",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--gold)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
