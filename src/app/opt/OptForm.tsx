"use client";

import { useState } from "react";

type State = "idle" | "loading" | "done" | "error";

export default function OptForm() {
  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({ name: "", phone: "", city: "", comment: "" });

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [key]: e.target.value })),
  });

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(201,168,76,0.3)",
    padding: "10px 0",
    fontFamily: "var(--font-body), sans-serif",
    fontSize: "0.95rem",
    color: "var(--text)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-body), sans-serif",
    fontSize: "0.6rem",
    letterSpacing: "0.3em",
    textTransform: "uppercase" as const,
    color: "var(--text-muted)",
    display: "block",
    marginBottom: "4px",
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/opt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div style={{
        padding: "40px",
        border: "1px solid rgba(201,168,76,0.3)",
        textAlign: "center",
        background: "rgba(201,168,76,0.04)",
      }}>
        <div style={{ fontFamily: "var(--font-display), serif", fontSize: "1.8rem", color: "var(--gold)", marginBottom: "12px" }}>
          Заявка получена
        </div>
        <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
          Пришлём коммерческое предложение в течение рабочего дня.<br />
          Если не дождётесь — пишите на{" "}
          <a href="mailto:info@belleeclat.ru" style={{ color: "var(--gold)" }}>info@belleeclat.ru</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      <div>
        <label style={labelStyle}>Имя *</label>
        <input
          {...field("name")}
          required
          placeholder="Как вас зовут"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderBottomColor = "var(--gold)")}
          onBlur={(e) => (e.target.style.borderBottomColor = "rgba(201,168,76,0.3)")}
        />
      </div>
      <div>
        <label style={labelStyle}>Телефон *</label>
        <input
          {...field("phone")}
          required
          type="tel"
          placeholder="+7 900 000 00 00"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderBottomColor = "var(--gold)")}
          onBlur={(e) => (e.target.style.borderBottomColor = "rgba(201,168,76,0.3)")}
        />
      </div>
      <div>
        <label style={labelStyle}>Город</label>
        <input
          {...field("city")}
          placeholder="Ваш город"
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderBottomColor = "var(--gold)")}
          onBlur={(e) => (e.target.style.borderBottomColor = "rgba(201,168,76,0.3)")}
        />
      </div>
      <div>
        <label style={labelStyle}>Комментарий</label>
        <textarea
          {...field("comment")}
          rows={3}
          placeholder="Расскажите о вашем магазине или проекте (необязательно)"
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
          onFocus={(e) => (e.target.style.borderBottomColor = "var(--gold)")}
          onBlur={(e) => (e.target.style.borderBottomColor = "rgba(201,168,76,0.3)")}
        />
      </div>

      {state === "error" && (
        <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.85rem", color: "#e07070" }}>
          Не удалось отправить. Напишите напрямую: info@belleeclat.ru
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        style={{
          padding: "16px 48px",
          border: "1px solid var(--gold)",
          background: "transparent",
          color: "var(--gold)",
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          cursor: state === "loading" ? "wait" : "pointer",
          transition: "background 0.25s, color 0.25s",
          alignSelf: "flex-start",
          opacity: state === "loading" ? 0.6 : 1,
        }}
        onMouseEnter={(e) => {
          if (state !== "loading") {
            (e.currentTarget as HTMLButtonElement).style.background = "var(--gold)";
            (e.currentTarget as HTMLButtonElement).style.color = "#0a0a0a";
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
          (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
        }}
      >
        {state === "loading" ? "Отправляю..." : "Получить КП"}
      </button>
    </form>
  );
}
