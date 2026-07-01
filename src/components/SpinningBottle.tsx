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

interface SpinningBottleProps {
  width?: number;
  height?: number;
  intervalMs?: number;
  transitionMs?: number;
  filter?: string;
  overlay?: React.ReactNode;
}

export default function SpinningBottle({
  width = 90,
  height = 130,
  intervalMs = 1400,
  transitionMs = 900,
  filter = "blur(5px) brightness(0.38) sepia(0.25)",
  overlay,
}: SpinningBottleProps) {
  const [srcs, setSrcs]   = useState<[string, string]>([VIEWS[0], VIEWS[1]]);
  const [front, setFront] = useState(0);
  const cursor = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      cursor.current = (cursor.current + 1) % VIEWS.length;
      const nextSrc = VIEWS[cursor.current];
      setFront((f) => {
        const back = 1 - f;
        setSrcs((prev) => {
          const copy = [...prev] as [string, string];
          copy[back] = nextSrc;
          return copy;
        });
        return back;
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  const base: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    filter,
    transition: `opacity ${transitionMs}ms ease-in-out`,
  };

  return (
    <div style={{ position: "relative", width, height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={srcs[0]} alt="" style={{ ...base, opacity: front === 0 ? 1 : 0 }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={srcs[1]} alt="" style={{ ...base, opacity: front === 1 ? 1 : 0 }} />
      {overlay && (
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}>
          {overlay}
        </div>
      )}
    </div>
  );
}
