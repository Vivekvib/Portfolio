import { motion } from "framer-motion";
import { BrainCircuit, Code2, Database, LineChart, TerminalSquare } from "lucide-react";

const CATEGORIES = [
  {
    id: "languages",
    icon: Code2,
    label: "Languages",
    items: ["Python", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    id: "frameworks",
    icon: TerminalSquare,
    label: "Backend & Web",
    items: ["FastAPI", "Flask", "React", "Next.js", "Node.js", "React Native", "Tailwind CSS"],
  },
  {
    id: "ml",
    icon: BrainCircuit,
    label: "AI / Data",
    items: ["RAG Pipelines", "ChromaDB", "BM25 Hybrid Retrieval", "Pandas", "PyTorch"],
  },
  {
    id: "tools",
    icon: Database,
    label: "Databases & Cloud",
    items: ["PostgreSQL", "SQLite", "Vercel", "Render", "Git/GitHub"],
  },
  {
    id: "fineng",
    icon: LineChart,
    label: "Financial Engineering",
    items: ["SEC EDGAR / XBRL", "Amihud Illiquidity", "Price Impact", "DTL Modelling"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#FF4F00]">
            03 // Stack
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
            Tools I <span className="text-stroke">think in.</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={c.id}
              data-testid={`skill-category-${c.id}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group rounded-2xl border border-white/10 bg-[#101014] p-6 transition-colors duration-300 hover:border-[#FF4F00]/40 ${
                i < 2 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF4F00]/10 text-[#FF4F00] transition-colors duration-300 group-hover:bg-[#FF4F00] group-hover:text-[#08080A]">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold tracking-tight text-[#F4F4F7]">
                  {c.label}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 font-mono2 text-[11px] tracking-wide text-[#9E9EA9] transition-colors duration-200 hover:border-[#FF4F00]/50 hover:text-[#F4F4F7]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
