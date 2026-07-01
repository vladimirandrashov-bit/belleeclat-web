"use client";

import { useState } from "react";

const AROMAS = [
  { num: "№ 101", name: "Cherry Desire", hint: "Тёмная сторона сладкого",  notes: "вишня · амбра · ваниль",   bottle: "/exclusive/cherry-desire.png" },
  { num: "№ 112", name: "Sweet Tobacco", hint: "Запрещённое удовольствие", notes: "табак · ваниль · сандал",  bottle: "/exclusive/sweet-tobacco.png" },
  { num: "№ 13",  name: "Bright Devila", hint: "Яркость с характером",     notes: "цитрус · жасмин · пачули", bottle: "/exclusive/bright-devila.png" },
  { num: "№ 4",   name: "Sexy Magic",    hint: "Необъяснимое притяжение",  notes: "роза · мускус · кедр",     bottle: "/exclusive/sexy-magic.png"    },
];

export default function ExclusivePage() {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--text)", overflow: "hidden" }}>

      {/* ШАПКА */}
      <header style={{
        padding: "20px 24px",
        borderBottom: "1px solid rgba(201,168,76,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "1.6rem",
            color: "var(--gold)",
            letterSpacing: "0.1em",
          }}>BelleEclat</span>
        </a>
        <span style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.6rem",
          letterSpacing: "0.35em",
          color: "rgba(201,168,76,0.4)",
          textTransform: "uppercase",
        }}>Закрытая коллекция</span>
      </header>

      {/* HERO */}
      <section style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "100px 24px 60px",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-block",
          border: "1px solid rgba(201,168,76,0.3)",
          padding: "5px 18px",
          marginBottom: "40px",
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.58rem",
          letterSpacing: "0.4em",
          color: "var(--gold)",
          textTransform: "uppercase",
        }}>Ограниченный доступ</div>

        <h1 style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
          fontWeight: 300,
          lineHeight: 1.15,
          color: "var(--text)",
          marginBottom: "28px",
          letterSpacing: "0.02em",
        }}>
          Некоторые ароматы<br />
          <span style={{ color: "var(--gold)", fontStyle: "italic" }}>не для всех</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "var(--text-muted)",
          maxWidth: "480px",
          margin: "0 auto 16px",
        }}>
          Четыре формулы. Закрытая дистрибуция.<br />
          Они не появятся в открытой рознице.
        </p>

        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.82rem",
          lineHeight: 1.7,
          color: "rgba(245,240,232,0.25)",
          maxWidth: "420px",
          margin: "0 auto",
          letterSpacing: "0.03em",
        }}>
          Мы намеренно ограничиваем тираж и каналы.<br />
          Редкость — это часть формулы.
        </p>
      </section>

      {/* КАРТОЧКИ */}
      <section style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 48px 80px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2px",
      }}>
        {AROMAS.map((a) => (
          <div key={a.num} style={{
            border: "1px solid rgba(201,168,76,0.15)",
            background: "#0e0e0e",
            padding: "48px 36px",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Фото флакона */}
            <div style={{
              height: "340px",
              margin: "0 auto 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.bottle}
                alt={a.name}
                style={{
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.3em",
                color: "var(--gold)",
                textTransform: "uppercase",
                marginBottom: "12px",
                opacity: 0.8,
              }}>{a.notes}</div>

              <h3 style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.6rem",
                fontWeight: 300,
                letterSpacing: "0.08em",
                color: "var(--text)",
                marginBottom: "16px",
              }}>{a.name}</h3>

              <p style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.82rem",
                lineHeight: 1.7,
                color: "var(--text-muted)",
                marginBottom: "32px",
                fontStyle: "italic",
              }}>{a.hint}</p>

              <div style={{
                borderTop: "1px solid rgba(201,168,76,0.12)",
                paddingTop: "24px",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                color: "rgba(201,168,76,0.35)",
                textTransform: "uppercase",
              }}>{a.num} · Закрытая коллекция</div>
            </div>
          </div>
        ))}
      </section>

      {/* НИЖНИЙ БЛОК */}
      <section style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "0 24px 120px",
        textAlign: "center",
      }}>
        <div style={{
          width: "1px",
          height: "60px",
          background: "linear-gradient(to bottom, rgba(201,168,76,0.3), transparent)",
          margin: "0 auto 48px",
        }} />

        <p style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "clamp(1.2rem, 3vw, 1.7rem)",
          fontWeight: 300,
          color: "var(--text)",
          marginBottom: "16px",
          lineHeight: 1.4,
        }}>Когда появятся — вы узнаете первыми.</p>

        <p style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.82rem",
          color: "var(--text-muted)",
          lineHeight: 1.8,
          marginBottom: "40px",
        }}>
          Мы сообщим о запуске только тем,<br />кто уже ждёт.
        </p>

        <a
          href="https://t.me/belleeclat_official"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            display: "inline-block",
            border: "1px solid var(--gold)",
            color: btnHover ? "#0a0a0a" : "var(--gold)",
            background: btnHover ? "var(--gold)" : "transparent",
            padding: "14px 40px",
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
          }}
        >Хочу узнать первым</a>
      </section>

    </main>
  );
}
