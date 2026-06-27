"use client";

import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const fragrances = [
  {
    id: 1,
    name: "BelleEclat №1",
    note: "лимон · пион · кедр",
    desc: "Яркое цитрусовое открытие, сердце пиона и тёплый кедр в финале. Вдохновлён Lanvin Éclat d'Arpège.",
    price: "3 500 ₽",
    volume: "30 мл",
    gradient: "radial-gradient(ellipse at 30% 40%, rgba(201,168,76,0.15) 0%, transparent 70%)",
    bottle: "/bottle-1.png",
  },
  {
    id: 2,
    name: "BelleEclat Sports Charm",
    note: "морские ноты · апельсин · кедр",
    desc: "Свежесть океана и энергия цитруса. Мужской аромат для уверенных. Вдохновлён Chanel Allure Homme Sport.",
    price: "3 500 ₽",
    volume: "30 мл",
    gradient: "radial-gradient(ellipse at 50% 30%, rgba(100,140,180,0.12) 0%, transparent 70%)",
    bottle: "/bottle-2.png",
  },
  {
    id: 3,
    name: "BelleEclat №3",
    note: "жасмин · водные ноты · сандал",
    desc: "Нежный жасмин над водной гладью, тёплый сандал в основе. Вдохновлён L'Imperatrice.",
    price: "3 500 ₽",
    volume: "30 мл",
    gradient: "radial-gradient(ellipse at 60% 40%, rgba(180,201,160,0.12) 0%, transparent 70%)",
    bottle: "/bottle-3.png",
  },
  {
    id: 5,
    name: "BelleEclat №5",
    note: "ваниль · ирис · мускус",
    desc: "Пудровый ирис, обволакивающая ваниль и белый мускус. Вдохновлён Chanel Chance.",
    price: "3 500 ₽",
    volume: "30 мл",
    gradient: "radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.15) 0%, transparent 70%)",
    bottle: "/bottle-5.png",
  },
  {
    id: 7,
    name: "BelleEclat №7",
    note: "груша · чёрная смородина · роза",
    desc: "Сочная груша и смородина, сердце розы. Женственный и притягательный. Вдохновлён Armani Si.",
    price: "3 500 ₽",
    volume: "30 мл",
    gradient: "radial-gradient(ellipse at 40% 40%, rgba(180,100,120,0.12) 0%, transparent 70%)",
    bottle: "/bottle-7.png",
  },
  {
    id: 9,
    name: "BelleEclat №9",
    note: "айва · гиацинт · кедр",
    desc: "Экзотическая айва и весенний гиацинт на кедровой базе. Вдохновлён Chanel Tendre.",
    price: "3 500 ₽",
    volume: "30 мл",
    gradient: "radial-gradient(ellipse at 50% 30%, rgba(232,213,163,0.12) 0%, transparent 70%)",
    bottle: "/bottle-9.png",
  },
  {
    id: 11,
    name: "BelleEclat №11",
    note: "яблоко · сандаловое дерево · фрезия",
    desc: "Свежее яблоко и фрезия, тёплый сандал в основе. Вдохновлён Lacoste Pour Femme.",
    price: "3 500 ₽",
    volume: "30 мл",
    gradient: "radial-gradient(ellipse at 30% 50%, rgba(160,201,168,0.12) 0%, transparent 70%)",
    bottle: "/bottle-11.png",
  },
  {
    id: 108,
    name: "BelleEclat #108",
    note: "ежевика · грейпфрут · кедр",
    desc: "Сочная ежевика и свежий грейпфрут в начале, тёплый кедр в финале. Дерзкий и притягательный аромат.",
    price: "3 500 ₽",
    volume: "30 мл",
    gradient: "radial-gradient(ellipse at 40% 40%, rgba(80,40,100,0.18) 0%, transparent 70%)",
    bottle: "/bottle-108.jpg",
  },
];

function FragranceCard({
  frag,
  index,
  isMobile,
}: {
  frag: (typeof fragrances)[0];
  index: number;
  isMobile: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            card.style.transition = "opacity 1s ease, transform 1s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 200);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    observer.observe(card);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      style={{
        position: "relative",
        border: "1px solid rgba(201,168,76,0.15)",
        padding: isMobile ? "32px 20px" : "48px 36px",
        background: `#0e0e0e`,
        cursor: "default",
        transition: "border-color 0.4s ease, transform 0.4s ease",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(201,168,76,0.5)";
        el.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(201,168,76,0.15)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: frag.gradient,
          pointerEvents: "none",
        }}
      />

      {/* Bottle image */}
      <div
        style={{
          height: isMobile ? "200px" : "340px",
          margin: "0 auto 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={frag.bottle}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          style={{
            height: "100%",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      <div style={{ position: "relative", textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "12px",
            opacity: 0.8,
          }}
        >
          {frag.note}
        </div>

        <h3
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "1.6rem",
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "var(--text)",
            marginBottom: "20px",
          }}
        >
          {frag.name}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.82rem",
            lineHeight: 1.7,
            color: "var(--text-muted)",
            marginBottom: "32px",
          }}
        >
          {frag.desc}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(201,168,76,0.12)",
            paddingTop: "24px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "var(--text-muted)",
              textTransform: "uppercase",
            }}
          >
            {frag.volume}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "1.3rem",
              color: "var(--gold)",
              fontWeight: 400,
            }}
          >
            {frag.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CollectionSection() {
  const isMobile = useIsMobile();
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
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
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="collection"
      style={{
        padding: isMobile ? "80px 16px" : "120px 48px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div
        ref={headingRef}
        style={{ textAlign: "center", marginBottom: "80px" }}
      >
        <div
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.62rem",
            letterSpacing: "0.35em",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "20px",
            opacity: 0.7,
          }}
        >
          — Коллекция 2026 —
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            letterSpacing: "0.06em",
            color: "var(--text)",
            lineHeight: 1,
          }}
        >
          Ароматы
        </h2>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2px",
        }}
      >
        {fragrances.map((frag, i) => (
          <FragranceCard key={frag.id} frag={frag} index={i} isMobile={isMobile} />
        ))}
      </div>

      {/* Catalog link */}
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <a
          href="#contact"
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.25em",
            color: "var(--text-muted)",
            textDecoration: "none",
            textTransform: "uppercase",
            borderBottom: "1px solid rgba(245,240,232,0.2)",
            paddingBottom: "3px",
            transition: "color 0.3s, border-color 0.3s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.color = "var(--gold)";
            el.style.borderColor = "var(--gold)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.color = "var(--text-muted)";
            el.style.borderColor = "rgba(245,240,232,0.2)";
          }}
        >
          Запросить полный каталог →
        </a>
      </div>
    </section>
  );
}
