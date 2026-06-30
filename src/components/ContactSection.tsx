"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

type Status = "idle" | "sending" | "ok" | "error";

const inputStyle = (focused: boolean): React.CSSProperties => ({
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: `1px solid ${focused ? "rgba(201,168,76,0.6)" : "rgba(201,168,76,0.2)"}`,
  outline: "none",
  padding: "12px 0",
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.85rem",
  letterSpacing: "0.08em",
  color: "var(--text)",
  transition: "border-color 0.3s ease",
  borderRadius: 0,
  WebkitAppearance: "none",
});

export default function ContactSection() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, message }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? "80px 20px" : "120px 48px",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        textAlign: "center",
        background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.05) 0%, #0a0a0a 60%)",
      }}
    >
      <div ref={ref} style={{ maxWidth: "640px", margin: "0 auto" }}>
        {/* Label */}
        <div style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.62rem",
          letterSpacing: "0.35em",
          color: "var(--gold)",
          textTransform: "uppercase",
          marginBottom: "24px",
          opacity: 0.7,
        }}>
          — Контакты
        </div>

        <h2 style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 300,
          letterSpacing: "0.06em",
          color: "var(--text)",
          lineHeight: 1.1,
          marginBottom: "24px",
        }}>
          Начнём диалог
        </h2>

        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.85rem",
          lineHeight: 1.8,
          color: "var(--text-muted)",
          marginBottom: "48px",
        }}>
          Оптовые заказы, партнёрство, индивидуальные ароматы — мы открыты для любого сотрудничества.
        </p>

        {/* Contact form */}
        {status === "ok" ? (
          <div style={{
            padding: "40px 32px",
            border: "1px solid rgba(201,168,76,0.2)",
            marginBottom: "48px",
          }}>
            <div style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "1.8rem",
              fontWeight: 300,
              color: "var(--gold)",
              marginBottom: "12px",
            }}>
              Спасибо
            </div>
            <p style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.82rem",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
            }}>
              Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginBottom: "48px", textAlign: "left" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "36px" }}>
              <div>
                <label style={{
                  display: "block",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.58rem",
                  letterSpacing: "0.3em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  opacity: 0.7,
                }}>
                  Имя / Компания
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder="Ваше имя или название компании"
                  required
                  style={{
                    ...inputStyle(focused === "name"),
                    "::placeholder": { color: "rgba(245,240,232,0.2)" },
                  } as React.CSSProperties}
                />
              </div>

              <div>
                <label style={{
                  display: "block",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.58rem",
                  letterSpacing: "0.3em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  opacity: 0.7,
                }}>
                  Телефон или Email
                </label>
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  onFocus={() => setFocused("contact")}
                  onBlur={() => setFocused(null)}
                  placeholder="+7 900 000 00 00 или email@example.com"
                  required
                  style={inputStyle(focused === "contact")}
                />
              </div>

              <div>
                <label style={{
                  display: "block",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.58rem",
                  letterSpacing: "0.3em",
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                  opacity: 0.7,
                }}>
                  Сообщение
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Опишите ваш запрос..."
                  required
                  rows={4}
                  style={{
                    ...inputStyle(focused === "message"),
                    resize: "none",
                    lineHeight: 1.7,
                  }}
                />
              </div>
            </div>

            {status === "error" && (
              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.75rem",
                color: "rgba(220,80,80,0.8)",
                marginBottom: "16px",
                letterSpacing: "0.1em",
              }}>
                Ошибка отправки. Напишите нам напрямую в Telegram.
              </p>
            )}

            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  display: "inline-block",
                  padding: "14px 52px",
                  border: "1px solid var(--gold)",
                  background: "transparent",
                  color: "var(--gold)",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.68rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  cursor: status === "sending" ? "default" : "pointer",
                  transition: "background 0.3s, color 0.3s",
                  opacity: status === "sending" ? 0.6 : 1,
                  WebkitTapHighlightColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending") {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--gold)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#0a0a0a";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
                }}
              >
                {status === "sending" ? "Отправка..." : "Отправить"}
              </button>
            </div>
          </form>
        )}

        {/* Divider */}
        <div style={{
          display: "flex", alignItems: "center", gap: "16px",
          justifyContent: "center", opacity: 0.2, marginBottom: "40px",
        }}>
          <div style={{ flex: 1, height: "1px", background: "var(--gold)" }} />
          <div style={{ width: "6px", height: "6px", background: "var(--gold)", transform: "rotate(45deg)" }} />
          <div style={{ flex: 1, height: "1px", background: "var(--gold)" }} />
        </div>

        {/* Social links */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0",
          alignItems: "center",
        }}>
          {[
            { label: "+7 995 376-06-66", href: "tel:+79953760666", icon: "◈" },
            { label: "info@belleeclat.ru", href: "mailto:info@belleeclat.ru", icon: "◇" },
            { label: "Telegram", href: "https://t.me/belleeclat_official", icon: "✉" },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "var(--text-muted)",
                textDecoration: "none",
                textTransform: label.includes("@") ? "lowercase" : "uppercase",
                transition: "color 0.3s",
                padding: isMobile ? "12px 0" : "8px 0",
                minHeight: isMobile ? "44px" : "auto",
                WebkitTapHighlightColor: "transparent",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
              }
            >
              <span style={{ color: "var(--gold)", opacity: 0.5, fontSize: "0.9rem" }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        input::placeholder, textarea::placeholder {
          color: rgba(245, 240, 232, 0.2);
          font-family: var(--font-body), sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
        }
      `}</style>
    </section>
  );
}
