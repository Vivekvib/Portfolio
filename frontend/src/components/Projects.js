import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects";

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
      <Link to={`/work/${p.id}`} className="relative block overflow-hidden" aria-label={`${p.title} case study`}>
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
      </Link>

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
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
          <Link
            data-testid={`project-case-study-${p.id}`}
            to={`/work/${p.id}`}
            className="flex items-center gap-2 rounded-full bg-[#F4F4F7] px-4 py-2 font-mono2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#08080A] transition-colors duration-300 hover:bg-[#FF4F00]"
          >
            <FileText className="h-3.5 w-3.5" /> Case Study
          </Link>
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
              className="flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#C6C6CF] transition-colors duration-300 hover:border-[#FF4F00] hover:text-[#FF4F00]"
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
