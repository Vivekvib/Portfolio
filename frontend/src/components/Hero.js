import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { scrollToId } from "@/components/Navbar";

function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf, w, h;
    const mouse = { x: -9999, y: -9999 };
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const N = Math.min(85, Math.floor((window.innerWidth * window.innerHeight) / 16000));
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.4,
      ember: Math.random() < 0.18,
    }));

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 16000) {
          const d = Math.sqrt(d2) || 1;
          p.x += (dx / d) * 0.9;
          p.y += (dy / d) * 0.9;
        }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 12100) {
            const alpha = (1 - d2 / 12100) * 0.14;
            ctx.strokeStyle = `rgba(244,244,247,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = p.ember ? "rgba(255,79,0,0.85)" : "rgba(244,244,247,0.45)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className={`mask-line ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "112%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const METRICS = [
  { k: "04", v: "Shipped full-stack & ML systems" },
  { k: "15s", v: "Live SEC 10-K risk memos, on demand" },
  { k: "2026", v: "Open for engineering roles" },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24">
      <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1709625862266-014ef072fd93?crop=entropy&cs=srgb&fm=jpg&q=85)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080A]/60 via-[#08080A]/40 to-[#08080A]" />
        <ParticleField />
      </motion.div>

      <motion.div style={{ y: fgY, opacity: fade }} className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <MaskedLine delay={0.35}>
          <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
            </span>
            <span className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#9E9EA9]">
              Open for Roles — 2026
            </span>
          </span>
        </MaskedLine>

        <h1 className="font-display font-extrabold leading-[0.92] tracking-tight">
          <MaskedLine delay={0.5} className="text-lg sm:text-xl">
            <span className="font-mono2 text-xs font-medium uppercase tracking-[0.35em] text-[#FF4F00] sm:text-sm">
              Computer Science (Hons) — Software · AI/Data · FinTech
            </span>
          </MaskedLine>
          <MaskedLine delay={0.62} className="mt-4 text-6xl sm:text-8xl lg:text-[9rem]">
            <span data-testid="hero-title-name" className="text-[#F4F4F7]">
              VIVEK
            </span>
          </MaskedLine>
          <MaskedLine delay={0.74} className="text-6xl sm:text-8xl lg:text-[9rem]">
            <span className="text-stroke">NISHAD</span>
            <span className="text-[#FF4F00]">.</span>
          </MaskedLine>
        </h1>

        <MaskedLine delay={0.95} className="mt-8 max-w-xl">
          <p data-testid="hero-subtitle" className="text-base leading-relaxed text-[#9E9EA9] sm:text-lg">
            Building intelligent data engines, fair algorithms & scalable web
            applications — from agentic RAG over SEC filings to real-time food
            rescue marketplaces.
          </p>
        </MaskedLine>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            data-testid="hero-cta-projects"
            onClick={() => scrollToId("work")}
            className="group relative overflow-hidden rounded-full bg-[#FF4F00] px-8 py-4 font-mono2 text-xs font-bold uppercase tracking-[0.2em] text-[#08080A]"
          >
            <span className="absolute inset-0 -translate-x-full bg-[#F4F4F7] transition-transform duration-300 ease-out group-hover:translate-x-0" />
            <span className="relative flex items-center gap-2">
              Explore Selected Work
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </span>
          </button>
          <a
            data-testid="hero-github-link"
            href="https://github.com/Vivekvib"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-[#9E9EA9] transition-colors duration-300 hover:border-[#FF4F00] hover:text-[#FF4F00]"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            data-testid="hero-linkedin-link"
            href="https://www.linkedin.com/in/vivek-nishad-21bb071b2/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-[#9E9EA9] transition-colors duration-300 hover:border-[#FF4F00] hover:text-[#FF4F00]"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 grid max-w-2xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3"
        >
          {METRICS.map((m) => (
            <div key={m.k}>
              <div className="font-display text-3xl font-bold text-[#F4F4F7]">
                {m.k}
                <span className="text-[#FF4F00]">+</span>
              </div>
              <div className="mt-1 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#5C5C66]">
                {m.v}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        data-testid="hero-scroll-indicator"
        onClick={() => scrollToId("work")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-6 z-10 hidden items-center gap-2 font-mono2 text-[10px] uppercase tracking-[0.3em] text-[#5C5C66] transition-colors duration-300 hover:text-[#FF4F00] md:flex lg:right-10"
        aria-label="Scroll to work"
      >
        Scroll
        <ArrowUpRight className="h-3.5 w-3.5 rotate-90" />
      </motion.button>
    </section>
  );
}
