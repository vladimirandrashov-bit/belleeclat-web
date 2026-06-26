"use client";

import { useEffect, useRef } from "react";

const WORDS = [
  "Страсть", "Счастье", "Секс", "Возбуждение",
  "Желание", "Радость", "Дофамин",
  "Серотонин", "Окситоцин", "Эндорфин", "Адреналин",
  "Нежность", "Эйфория", "Блаженство", "Восторг",
  "Соблазн", "Наслаждение", "Влечение", "Трепет",
  "Вдохновение", "Тепло", "Свобода", "Магия",
];

interface WordEl {
  el: HTMLDivElement;
  x: number;
  y: number;
  dx: number;
  dy: number;
  phase: "in" | "hold" | "out";
  timer: number;
  holdTime: number;
  opacity: number;
}

export default function FloatingWords() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ACTIVE = 5;
    const FADE_MS = 2000;
    const MIN_HOLD = 4000;
    const MAX_HOLD = 8000;

    const words: WordEl[] = [];
    let wordIdx = Math.floor(Math.random() * WORDS.length);
    let lastTime = performance.now();
    let rafId: number;

    function spawnWord(el: HTMLDivElement, wordEl: WordEl) {
      const word = WORDS[wordIdx % WORDS.length];
      wordIdx++;
      el.textContent = word;

      // Random position avoiding dead center (hero text area)
      const safeZones = [
        // top area
        { x: [5, 95], y: [5, 25] },
        // left side
        { x: [2, 30], y: [20, 80] },
        // right side
        { x: [65, 95], y: [20, 80] },
        // bottom area
        { x: [5, 95], y: [72, 90] },
      ];
      const zone = safeZones[Math.floor(Math.random() * safeZones.length)];
      wordEl.x = zone.x[0] + Math.random() * (zone.x[1] - zone.x[0]);
      wordEl.y = zone.y[0] + Math.random() * (zone.y[1] - zone.y[0]);
      el.style.left = `${wordEl.x}%`;
      el.style.top = `${wordEl.y}%`;

      // Slow drift direction
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.004 + Math.random() * 0.006; // % per ms
      wordEl.dx = Math.cos(angle) * speed;
      wordEl.dy = Math.sin(angle) * speed;

      // Random size
      const size = 0.9 + Math.random() * 1.0; // 0.9–1.9rem
      el.style.fontSize = `${size}rem`;

      wordEl.phase = "in";
      wordEl.timer = 0;
      wordEl.holdTime = MIN_HOLD + Math.random() * (MAX_HOLD - MIN_HOLD);
      wordEl.opacity = 0;
    }

    function init() {
      for (let i = 0; i < ACTIVE; i++) {
        const el = document.createElement("div");
        el.style.cssText = `
          position: absolute;
          font-family: var(--font-display), 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 300;
          letter-spacing: 0.1em;
          color: var(--gold);
          text-shadow: 0 0 24px rgba(201, 168, 76, 0.6), 0 0 48px rgba(201, 168, 76, 0.2);
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          transform: translateX(-50%) translateY(-50%);
          opacity: 0;
          will-change: opacity, left, top;
        `;
        container!.appendChild(el);

        const wordEl: WordEl = {
          el,
          x: 50, y: 50,
          dx: 0, dy: 0,
          phase: "in",
          timer: 0,
          holdTime: 5000,
          opacity: 0,
        };

        // Stagger initial spawn
        setTimeout(() => spawnWord(el, wordEl), i * 1600);
        words.push(wordEl);
      }
    }

    function tick(now: number) {
      const dt = Math.min(now - lastTime, 100);
      lastTime = now;

      words.forEach((w) => {
        w.timer += dt;

        if (w.phase === "in") {
          w.opacity = Math.min(w.timer / FADE_MS, 1) * 0.72;
          if (w.timer >= FADE_MS) {
            w.phase = "hold";
            w.timer = 0;
          }
        } else if (w.phase === "hold") {
          // drift
          w.x += w.dx * dt;
          w.y += w.dy * dt;
          w.el.style.left = `${w.x}%`;
          w.el.style.top = `${w.y}%`;
          if (w.timer >= w.holdTime) {
            w.phase = "out";
            w.timer = 0;
          }
        } else if (w.phase === "out") {
          w.opacity = Math.max(0, 0.72 * (1 - w.timer / FADE_MS));
          if (w.timer >= FADE_MS) {
            spawnWord(w.el, w);
          }
        }

        w.el.style.opacity = `${w.opacity}`;
      });

      rafId = requestAnimationFrame(tick);
    }

    init();
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      words.forEach((w) => w.el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    />
  );
}
