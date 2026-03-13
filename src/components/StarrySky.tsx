"use client";

import { useEffect, useRef } from "react";

export default function StarrySky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const stars: { x: number; y: number; r: number; speed: number; opacity: number; phase: number }[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight * 3;
    }

    function createStars() {
      stars.length = 0;
      const count = Math.floor((canvas!.width * canvas!.height) / 3000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          r: Math.random() * 1.5 + 0.3,
          speed: Math.random() * 0.02 + 0.005,
          opacity: Math.random() * 0.7 + 0.3,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    let time = 0;

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      time += 0.05;

      for (const star of stars) {
        const twinkle = Math.sin(time * star.speed * 200 + star.phase) * 0.4 + 0.6;
        const alpha = star.opacity * twinkle;

        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    createStars();
    draw();

    const handleResize = () => {
      resize();
      createStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
