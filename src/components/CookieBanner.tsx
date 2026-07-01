"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_accepted")) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_accepted", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: "rgba(10,10,10,0.97)",
      borderTop: "1px solid rgba(201,168,76,0.2)",
      padding: "16px 24px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: "24px", flexWrap: "wrap",
    }}>
      <p style={{
        fontFamily: "var(--font-body), sans-serif",
        fontSize: "0.75rem", color: "rgba(245,240,232,0.6)",
        lineHeight: 1.6, margin: 0, maxWidth: "700px",
      }}>
        Мы используем файлы cookie для анализа посещаемости сайта.
        Продолжая пользоваться сайтом, вы соглашаетесь с{" "}
        <a href="/privacy" style={{ color: "var(--gold)", textDecoration: "none" }}>
          политикой конфиденциальности
        </a>.
      </p>
      <button onClick={accept} style={{
        fontFamily: "var(--font-body), sans-serif",
        fontSize: "0.7rem", letterSpacing: "0.2em",
        textTransform: "uppercase", cursor: "pointer",
        background: "transparent", border: "1px solid rgba(201,168,76,0.5)",
        color: "var(--gold)", padding: "10px 24px",
        whiteSpace: "nowrap", transition: "all 0.2s",
      }}>
        Принять
      </button>
    </div>
  );
}
