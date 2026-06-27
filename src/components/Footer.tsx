"use client";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <footer
      style={{
        padding: isMobile ? "32px 20px" : "40px 48px",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "center" : "space-between",
        alignItems: "center",
        textAlign: isMobile ? "center" : "left",
        gap: isMobile ? "12px" : "16px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "1.1rem",
          fontWeight: 400,
          fontVariant: "small-caps",
          letterSpacing: "0.12em",
          color: "var(--gold)",
          opacity: 0.7,
        }}
      >
        BelleEclat
      </span>
      <span
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.62rem",
          letterSpacing: "0.2em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
        }}
      >
        © 2026 · Ростов-на-Дону
      </span>
      <div style={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "center" : "flex-end", gap: "4px" }}>
        <a
          href="tel:+79953760666"
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            color: "rgba(245,240,232,0.2)",
            textDecoration: "none",
          }}
        >
          +7 995 376-06-66
        </a>
        <a
          href="mailto:info@belleeclat.ru"
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.15em",
            color: "rgba(245,240,232,0.2)",
            textDecoration: "none",
            textTransform: "lowercase",
          }}
        >
          info@belleeclat.ru
        </a>
      </div>
    </footer>
  );
}
