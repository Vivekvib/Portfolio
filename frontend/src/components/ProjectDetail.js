import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, ShieldAlert } from "lucide-react";
import { PROJECTS } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const SectionLabel = ({ children }) => (
  <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#FF4F00]">{children}</p>
);

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = PROJECTS.find((p) => p.id === projectId);

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-start justify-center px-6">
        <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#FF4F00]">404</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold">Project not found.</h1>
        <Link
          to="/"
          data-testid="case-study-back"
          className="mt-8 flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#9E9EA9] hover:border-[#FF4F00] hover:text-[#FF4F00]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all work
        </Link>
      </main>
    );
  }

  const next = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];

  return (
    <main data-testid="case-study-page" className="relative overflow-hidden pt-32">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[680px] rounded-full opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(ellipse, #FF4F00 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <Link
            to="/"
            state={{ scrollTo: "work" }}
            data-testid="case-study-back"
            className="inline-flex items-center gap-2 font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#5C5C66] transition-colors duration-300 hover:text-[#FF4F00]"
          >
            <ArrowLeft className="h-4 w-4" /> All Work
          </Link>
        </motion.div>

        <motion.p variants={fadeUp} custom={1} initial="hidden" animate="show" className="mt-10">
          <span className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#FF4F00]">
            {project.num} // {project.category}
          </span>
        </motion.p>

        <motion.h1
          data-testid="case-study-title"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-4 font-display text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl"
        >
          {project.title}
          <span className="text-[#FF4F00]">.</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 border-y border-white/10 py-5"
        >
          {[
            ["Timeline", project.meta.timeline],
            ["Role", project.meta.role],
            ["Status", project.meta.status],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#5C5C66]">{k}</p>
              <p className="mt-1 font-display text-sm font-bold text-[#F4F4F7]">{v}</p>
            </div>
          ))}
          <div className="flex gap-3 sm:ml-auto">
            <a
              data-testid="case-study-github-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#C6C6CF] transition-colors duration-300 hover:border-[#FF4F00] hover:text-[#FF4F00]"
            >
              <Github className="h-4 w-4" /> Code
            </a>
            {project.live && (
              <a
                data-testid="case-study-live-link"
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#FF4F00] px-5 py-2.5 font-mono2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#08080A] transition-colors duration-300 hover:bg-[#F4F4F7]"
              >
                Live Demo <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </motion.div>

        {project.disclaimer && (
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-6 flex items-start gap-3 rounded-xl border border-[#FF8700]/30 bg-[#FF8700]/5 p-4"
          >
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#FF8700]" />
            <p className="text-sm leading-relaxed text-[#FF8700]">{project.disclaimer}</p>
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <SectionLabel>The Problem</SectionLabel>
            <p className="mt-4 text-base leading-relaxed text-[#9E9EA9]">{project.problem}</p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div key={m.k} className="rounded-xl border border-white/10 bg-[#101014] p-4">
                  <p className="font-display text-2xl font-extrabold text-[#F4F4F7]">
                    {m.k}
                  </p>
                  <p className="mt-1 font-mono2 text-[9px] uppercase tracking-[0.15em] text-[#5C5C66]">
                    {m.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionLabel>What I Built</SectionLabel>
            <ul className="mt-4 space-y-4">
              {project.built.map((b) => (
                <li key={b} className="flex items-start gap-3 text-base leading-relaxed text-[#C6C6CF]">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[#FF4F00]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          data-testid="case-study-architecture"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20"
        >
          <SectionLabel>Architecture</SectionLabel>
          <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {project.architecture.map((step, i) => (
              <div key={step.label} className="flex items-center gap-3 lg:flex-1">
                <div className="flex-1 rounded-xl border border-white/10 bg-[#101014] p-4 transition-colors duration-300 hover:border-[#FF4F00]/50">
                  <p className="font-mono2 text-[9px] uppercase tracking-[0.25em] text-[#FF4F00]">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1.5 font-display text-sm font-bold text-[#F4F4F7]">{step.label}</p>
                  <p className="mt-1 text-[11px] leading-snug text-[#5C5C66]">{step.sub}</p>
                </div>
                {i < project.architecture.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-[#FF4F00]/60 lg:rotate-0" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {project.formulas && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-20"
          >
            <SectionLabel>The Models</SectionLabel>
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
              {project.formulas.map((f) => (
                <div key={f.name} className="rounded-2xl border border-white/10 bg-[#101014] p-6 transition-colors duration-300 hover:border-[#FF4F00]/40">
                  <p className="font-display text-base font-bold text-[#F4F4F7]">{f.name}</p>
                  <p className="mt-4 rounded-lg bg-[#08080A] px-4 py-3 font-mono2 text-xs leading-relaxed text-[#FF8700]">
                    {f.formula}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#9E9EA9]">{f.note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {project.repoTree && (
          <motion.div
            data-testid="case-study-repo-tree"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-20"
          >
            <SectionLabel>Repository Structure</SectionLabel>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#9E9EA9]">
              Monorepo layout from the README — product artefacts (PRD, persona, journey map) ship alongside the code. Explore the full source on GitHub.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-[#101014] p-6">
              {project.repoTree.map(([path, note]) => (
                <div key={path} className="flex items-baseline gap-6 py-1 font-mono2 text-xs">
                  <span className="whitespace-pre text-[#F4F4F7]">{path}</span>
                  {note && <span className="text-[#5C5C66]">{note}</span>}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {project.gallery.length > 0 && (
          <motion.div
            data-testid="case-study-gallery"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-20"
          >
            <SectionLabel>Screenshots</SectionLabel>
            <div className={`mt-6 grid grid-cols-1 gap-6 ${project.gallery.length > 1 ? "md:grid-cols-2" : ""}`}>
              {project.gallery.map((g) => (
                <a
                  key={g.src}
                  href={g.src}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101014]"
                  aria-label={`${g.alt} — open full size`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20"
        >
          <SectionLabel>Key Engineering Decisions</SectionLabel>
          <div className="mt-6 space-y-4">
            {project.decisions.map((d, i) => (
              <div key={d} className="flex items-start gap-5 rounded-xl border border-white/10 bg-[#101014] p-5">
                <span className="font-mono2 text-xs font-bold tracking-[0.2em] text-[#FF4F00]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-[#C6C6CF]">{d}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20"
        >
          <SectionLabel>Stack</SectionLabel>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono2 text-[11px] uppercase tracking-[0.15em] text-[#9E9EA9]"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        <Link
          to={`/work/${next.id}`}
          data-testid="next-project-link"
          className="group mt-24 flex items-center justify-between border-t border-white/10 py-12"
        >
          <div>
            <p className="font-mono2 text-[11px] uppercase tracking-[0.3em] text-[#5C5C66]">
              Next Project
            </p>
            <p className="mt-3 font-display text-4xl font-extrabold tracking-tight text-[#F4F4F7] transition-colors duration-300 group-hover:text-[#FF4F00] sm:text-6xl">
              {next.title}
            </p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#FF4F00] group-hover:bg-[#FF4F00] sm:h-20 sm:w-20">
            <ArrowRight className="h-6 w-6 text-[#F4F4F7] transition-colors duration-300 group-hover:text-[#08080A]" />
          </span>
        </Link>
      </div>
    </main>
  );
}
