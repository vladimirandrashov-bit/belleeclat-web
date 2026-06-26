"use client";

import { useEffect, useRef, useState } from "react";

const VIEWS = [
  "/parts/view-front.png",
  "/parts/view-45.png",
  "/parts/view-side.png",
  "/parts/view-back.png",
  "/parts/view-side.png",
  "/parts/view-45.png",
];

const PARTS = [
  { src: "/parts/part-cap.png",      label: "cap",      rest: { x: 0,    y: -160 }, size: 0.38 },
  { src: "/parts/part-sprayer.png",  label: "sprayer",  rest: { x: 60,   y: -60  }, size: 0.34 },
  { src: "/parts/part-bottle.png",   label: "bottle",   rest: { x: 0,    y: 40   }, size: 0.56 },
  { src: "/parts/part-label.png",    label: "label",    rest: { x: -90,  y: 80   }, size: 0.44 },
];

export default function InteractiveBottle({ height = 320 }: { height?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewIdx, setViewIdx] = useState(0);
  const [exploded, setExploded] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      const idx = Math.min(VIEWS.length - 1, Math.floor(ratio * VIEWS.length));
      setViewIdx(idx);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const handleClick = () => {
    setExploded((prev) => !prev);
  };

  const w = height * 0.6;

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setViewIdx(0); }}
      style={{
        position: "relative",
        width: `${w}px`,
        height: `${height}px`,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {/* Hint */}
      <div style={{
        position: "absolute",
        bottom: "-28px",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "var(--font-body), sans-serif",
        fontSize: "0.6rem",
        letterSpacing: "0.2em",
        color: "var(--gold)",
        opacity: hovered ? 0.7 : 0,
        transition: "opacity 0.4s ease",
        whiteSpace: "nowrap",
        textTransform: "uppercase",
        pointerEvents: "none",
      }}>
        {exploded ? "нажми чтобы собрать" : "нажми чтобы разобрать"}
      </div>

      {/* Rotating view — hidden when exploded */}
      <img
        src={VIEWS[viewIdx]}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: exploded ? 0 : 1,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />

      {/* Exploded parts */}
      {PARTS.map((p) => (
        <img
          key={p.label}
          src={p.src}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: `${w * p.size}px`,
            height: "auto",
            objectFit: "contain",
            transform: exploded
              ? `translate(calc(-50% + ${p.rest.x}px), calc(-50% + ${p.rest.y}px))`
              : "translate(-50%, -50%)",
            opacity: exploded ? 1 : 0,
            transition: "transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease",
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}
