export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 48px",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
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
      <span
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.62rem",
          letterSpacing: "0.15em",
          color: "rgba(245,240,232,0.2)",
          textTransform: "uppercase",
        }}
      >
        belleeclat.ru
      </span>
    </footer>
  );
}
