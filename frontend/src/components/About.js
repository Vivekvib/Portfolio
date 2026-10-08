import { motion } from "framer-motion";
import { Award, GraduationCap, Medal } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "B.Sc. Computer Science (Hons)",
    sub: "Dyal Singh College, University of Delhi",
  },
  {
    icon: Medal,
    title: "Gold Medal — Hackathon & Brain Wave",
    sub: "Dyal Singh College Techfest, 2024",
  },
  {
    icon: Award,
    title: "President, E-Cell",
    sub: "Led a 120-member org · INR 2.3L sponsorships",
  },
];

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-5"
        >
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#FF4F00]">
            02 // About
          </p>
          <h2
            data-testid="about-section-title"
            className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl"
          >
            Mathematical rigor,
            <br />
            <span className="text-stroke">engineering taste.</span>
          </h2>
          <span
            data-testid="about-degree-chip"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#FF4F00]/40 bg-[#FF4F00]/10 px-4 py-2 font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#FF8700]"
          >
            <GraduationCap className="h-4 w-4" />
            CS (Hons) · University of Delhi
          </span>
        </motion.div>

        <div className="lg:col-span-7">
          <motion.p
            data-testid="about-bio-text"
            variants={fade}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-base leading-relaxed text-[#9E9EA9] sm:text-lg"
          >
            I'm a Computer Science (Hons) graduate who ships. My work sits at
            the intersection of software engineering, AI/data systems and
            financial technology — from an agentic RAG pipeline that cross-examines
            SEC filings against their own numbers, to a quantitative engine
            measuring liquidity contagion across Indian mutual funds.
          </motion.p>
          <motion.p
            variants={fade}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-5 text-base leading-relaxed text-[#9E9EA9]"
          >
            Most recently I built production features at a fitness-tech startup
            (React Native + Node.js, Google Health Connect integrations) and
            co-authored research on SEBI-mandated liquidity stress tests across
            the 2008 GFC, 2016 Demonetization and COVID-19 — submitted to the
            Journal of Emerging Market Finance. I care about systems that stay
            honest: verified claims, explainable decisions, no dark patterns.
          </motion.p>

          <div className="mt-10 space-y-4">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.title}
                variants={fade}
                custom={3 + i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#101014] p-5 transition-colors duration-300 hover:border-[#FF4F00]/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FF4F00]/10 text-[#FF4F00]">
                  <h.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-bold text-[#F4F4F7]">{h.title}</p>
                  <p className="font-mono2 text-[11px] uppercase tracking-[0.15em] text-[#5C5C66]">
                    {h.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
