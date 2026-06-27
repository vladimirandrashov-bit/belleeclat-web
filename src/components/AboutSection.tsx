"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function AboutSection() {
  const isMobile = useIsMobile();
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [
      { el: leftRef.current, dir: -1 },
      { el: rightRef.current, dir: 1 },
    ];
    items.forEach(({ el, dir }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = `translateX(${dir * 40}px)`;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = "opacity 1.2s ease, transform 1.2s ease";
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
            observer.disconnect();
          }
        },
        { threshold: 0.25 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <section
      id="about"
      style={{
        padding: isMobile ? "80px 20px" : "120px 48px",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        background: "linear-gradient(to bottom, #0a0a0a, #0d0b07)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "48px" : "80px",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div ref={leftRef}>
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
            — О бренде
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "0.04em",
              color: "var(--text)",
              lineHeight: 1.1,
              marginBottom: "32px",
            }}
          >
            Аромат — это
            <br />
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              моментальная
            </span>
            <br />
            память
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.88rem",
              lineHeight: 1.9,
              color: "var(--text-muted)",
              marginBottom: "16px",
            }}
          >
            Совместно с парфюмерным домом Jean Niel мы создаём авторские ароматы,
            которые не следуют трендам, а создают их.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.88rem",
              lineHeight: 1.9,
              color: "var(--text-muted)",
              marginBottom: "40px",
            }}
          >
            Каждый флакон — это маленькая история, рассказанная языком запаха,
            которую обязательно хочется услышать снова.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {[
              ["2023", "Год основания"],
              ["34+", "Ароматов в коллекции"],
              ["100%", "Авторские рецептуры"],
              ["Франция", "Аромат"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "var(--font-display), serif",
                    fontSize: "2rem",
                    color: "var(--gold)",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — decorative (hidden on mobile) */}
        <div
          ref={rightRef}
          style={{
            position: "relative",
            height: "480px",
            display: isMobile ? "none" : "flex",
            border: "1px solid rgba(201,168,76,0.12)",
            background:
              "radial-gradient(ellipse at 40% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Large decorative letter */}
          <div
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "18rem",
              fontWeight: 300,
              color: "rgba(201,168,76,0.06)",
              lineHeight: 1,
              userSelect: "none",
              position: "absolute",
            }}
          >
            B
          </div>
          <div
            style={{
              position: "relative",
              textAlign: "center",
              padding: "40px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.4rem",
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.7,
                letterSpacing: "0.03em",
              }}
            >
              «Мы не создаём парфюм.
              <br />
              Мы создаём причину
              <br />
              для воспоминания.»
            </p>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: "var(--gold)",
                margin: "24px auto 0",
                opacity: 0.5,
              }}
            />
          </div>

          {/* Corner accents */}
          {["top-left", "top-right", "bottom-left", "bottom-right"].map(
            (pos) => (
              <div
                key={pos}
                style={{
                  position: "absolute",
                  [pos.includes("top") ? "top" : "bottom"]: "-1px",
                  [pos.includes("left") ? "left" : "right"]: "-1px",
                  width: "20px",
                  height: "20px",
                  borderTop: pos.includes("top")
                    ? "2px solid var(--gold)"
                    : "none",
                  borderBottom: pos.includes("bottom")
                    ? "2px solid var(--gold)"
                    : "none",
                  borderLeft: pos.includes("left")
                    ? "2px solid var(--gold)"
                    : "none",
                  borderRight: pos.includes("right")
                    ? "2px solid var(--gold)"
                    : "none",
                }}
              />
            )
          )}
        </div>
      </div>

    </section>
  );
}
