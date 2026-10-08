import Marquee from "react-fast-marquee";

const ITEMS = [
  "FULL-STACK ARCHITECTURE",
  "AGENTIC RAG",
  "QUANT RISK ENGINE",
  "FILINGLENS",
  "FOODBRIDGE",
  "FAIRLOAN",
  "FUND PREDICTOR",
  "CS HONS 2026",
];

export default function MarqueeStrip() {
  return (
    <div
      data-testid="marquee-strip"
      className="relative overflow-hidden border-y border-white/10 bg-[#0B0B0E] py-6"
      aria-hidden="true"
    >
      <Marquee speed={28} gradient={false} pauseOnHover>
        {ITEMS.map((item, i) => (
          <span key={item} className="mx-8 flex items-center gap-16">
            <span
              className={`font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl ${
                i % 2 === 0 ? "text-stroke" : "text-stroke-ember"
              }`}
            >
              {item}
            </span>
            <span className="h-2 w-2 rotate-45 bg-[#FF4F00]/60" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
