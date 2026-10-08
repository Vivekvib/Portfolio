import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const PROJECTS = [
  {
    id: "filinglens",
    num: "001",
    title: "FilingLens",
    category: "Agentic RAG over SEC 10-K Filings",
    span: "md:col-span-8",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=85",
    alt: "FilingLens — financial filings analytics dashboard",
    description:
      "Agentic RAG system that reads real SEC 10-K filings from EDGAR and generates structured risk memos grounded only in retrieved evidence. A deterministic fact-check layer validates every management-narrative claim against XBRL-reported financials before it's allowed to say \u201cverified\u201d.",
    bullets: [
      "Live /analyze for any US ticker, ~15s end-to-end",
      "Narrative-vs-numbers consistency checker",
      "22 pytest tests covering ratio & grounding logic",
    ],
    tech: ["Python", "FastAPI", "ChromaDB", "Groq LLM", "scikit-learn"],
    github: "https://github.com/Vivekvib/FilingLens",
    live: "https://filing-lens-ruby.vercel.app/",
  },
  {
    id: "foodbridge",
    num: "002",
    title: "FoodBridge",
    category: "Real-Time Food Surplus Marketplace",
    span: "md:col-span-4",
    image:
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?crop=entropy&cs=srgb&fm=jpg&q=85",
    alt: "FoodBridge — food donation logistics",
    description:
      "Zero Hunger. Zero Waste. A marketplace connecting surplus food from restaurants with NGOs and shelters — dual-role auth, in-app chat, GPS-pinned listings and live countdown timers.",
    bullets: [
      "Split-claiming spins off new listings automatically",
      "Deployed with Gunicorn on Render",
    ],
    tech: ["Flask", "PostgreSQL", "Gunicorn", "Render"],
    github: "https://github.com/Vivekvib/FoodBridge",
    live: "https://foodbridge-dev.onrender.com/",
  },
  {
    id: "fairloan",
    num: "003",
    title: "FairLoan",
    category: "Transparent Digital Lending Prototype",
    span: "md:col-span-5",
    image:
      "https://images.unsplash.com/photo-1634097537825-b446635b2f7f?crop=entropy&cs=srgb&fm=jpg&q=85",
    alt: "FairLoan — transparent lending interface",
    description:
      "A responsible-lending prototype built on RBI Digital Lending Guidelines — plain-language cost disclosure, explainable risk decisions, privacy-first analytics, and zero dark patterns. All money math in Decimal, never floats.",
    bullets: [
      "Comprehension-before-conversion UX",
      "Explainable, auditable credit decisions",
    ],
    tech: ["Next.js 14", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/Vivekvib/Fairloan",
    live: null,
  },
  {
    id: "fund_predictor",
    num: "004",
    title: "Fund Predictor",
    category: "Systemic Liquidity Contagion & Fund Herding Engine",
    span: "md:col-span-7",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&q=85",
    alt: "Fund Predictor — quantitative risk engine",
    description:
      "A quant pipeline that empirically measures hidden liquidity risk in Indian small & mid-cap mutual funds. Amihud Illiquidity, Days-to-Liquidate and Price Impact models on 90 days of live NSE data, with an interactive stress-test command center.",
    bullets: [
      "Simulate redemption shocks & fire-sale spirals",
      "Fuzzy entity matching over messy AMFI disclosures",
      "Grades fund managers: herd followers vs contrarians",
    ],
    tech: ["Python", "Pandas", "yfinance", "Chart.js", "Vercel"],
    github: "https://github.com/Vivekvib/Fund_Predictor",
    live: "https://fund-predictor.vercel.app/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

function ProjectCard({ p, index }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      data-testid={`project-card-${p.id}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      onMouseMove={onMove}
      className={`spotlight-card group col-span-12 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101014] transition-colors duration-300 hover:border-white/25 ${p.span}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent" />
        <span className="absolute left-5 top-5 font-mono2 text-xs font-medium tracking-[0.3em] text-[#FF4F00]">
          {p.num}
        </span>
        {p.live && (
          <span className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#08080A]/70 px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#10B981] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            Live
          </span>
        )}
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-8">
        <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#FF4F00]">
          {p.category}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#F4F4F7] sm:text-3xl">
          {p.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#9E9EA9]">{p.description}</p>
        <ul className="mt-4 space-y-2">
          {p.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-[#C6C6CF]">
              <span className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-[#FF4F00]" />
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono2 text-[10px] uppercase tracking-[0.15em] text-[#9E9EA9]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
          <a
            data-testid={`project-github-button-${p.id}`}
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#C6C6CF] transition-colors duration-300 hover:border-[#FF4F00] hover:text-[#FF4F00]"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
          {p.live ? (
            <a
              data-testid={`project-live-button-${p.id}`}
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-[#F4F4F7] px-4 py-2 font-mono2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#08080A] transition-colors duration-300 hover:bg-[#FF4F00]"
            >
              Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#5C5C66]">
              Demo on request
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#FF4F00]">
            01 // Selected Works
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Systems shipped,
            <br />
            <span className="text-stroke">not just written.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#9E9EA9]">
            Four production-grade builds spanning agentic AI, quantitative
            finance and marketplaces — each deployed, tested and running on a
            $0 infrastructure budget.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
