import { motion } from "framer-motion";

const ITEMS = [
  {
    date: "JAN — MAR 2026",
    role: "Full-Stack Developer Intern",
    org: "Fin-i",
    points: [
      "Shipped production features for a cross-platform fitness app (React Native, Node.js): BMI, body-fat, calorie & macro engines.",
      "Integrated Google Health Connect to ingest activity data from sources like Cronometer into user-facing screens.",
      "Translated client requirements into technical specs; helped ship the product within 3 months.",
    ],
  },
  {
    date: "JUN 2025 — APR 2026",
    role: "Research Co-Author",
    org: "University of Delhi · with Faculty Supervisor",
    points: [
      "Evaluated SEBI-mandated liquidity stress tests in Indian small-cap mutual funds across the 2008 GFC, 2016 Demonetization & COVID-19.",
      "Found a 16% trading-volume contraction in 2008 and stronger liquidity resilience in smaller funds.",
      "Submitted to the Journal of Emerging Market Finance.",
    ],
  },
  {
    date: "AUG 2023 — JUN 2026",
    role: "President → Joint Secretary → Junior Executive",
    org: "E-Cell, Dyal Singh College",
    points: [
      "Led a 120-member organization across content, partnerships, logistics & programs; secured 5+ sponsorships worth INR 2.3L.",
      "Redesigned the B-Plan competition — 5,000+ attendees, 2 startups raised seed grants.",
    ],
  },
  {
    date: "SEP — DEC 2023",
    role: "Coordinator, DSC Unit",
    org: "Aarambh Organization",
    points: [
      "Ran 7 resource drives across Vasant Kunj, Bhikaji Cama Place & Satya Niketan.",
      "Documented an illegal dump yard blocking 500+ daily commuters; escalated to municipal officials and coordinated the clean-up.",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#FF4F00]">
            04 // Experience
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl">
            The road <span className="text-stroke">so far.</span>
          </h2>
        </motion.div>

        <div data-testid="timeline-container" className="relative mt-14 lg:pl-2">
          <span className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10" aria-hidden="true" />
          <div className="space-y-12">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.role}
                data-testid={`timeline-item-${i}`}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-[#FF4F00] bg-[#08080A]" aria-hidden="true" />
                <p className="font-mono2 text-[11px] uppercase tracking-[0.25em] text-[#FF4F00]">
                  {item.date}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-[#F4F4F7] sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-1 font-mono2 text-xs uppercase tracking-[0.15em] text-[#5C5C66]">
                  {item.org}
                </p>
                <ul className="mt-4 max-w-3xl space-y-2">
                  {item.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed text-[#9E9EA9]">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-[#FF4F00]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
