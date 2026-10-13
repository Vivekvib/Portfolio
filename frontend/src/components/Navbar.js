import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const LogoMark = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
    <rect width="64" height="64" rx="14" fill="#101014" />
    <rect x="1.5" y="1.5" width="61" height="61" rx="12.5" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" />
    <path d="M13 17 L23 47 L29 31" fill="none" stroke="#FF4F00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M36 47 L36 17 L51 47 L51 17" fill="none" stroke="#F4F4F7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LINKS = [
  { id: "work", label: "01 // WORK", testid: "nav-link-projects" },
  { id: "about", label: "02 // ABOUT", testid: "nav-link-about" },
  { id: "skills", label: "03 // SKILLS", testid: "nav-link-skills" },
  { id: "contact", label: "04 // CONTACT", testid: "nav-link-contact" },
];

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -72, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const go = (id) => {
    if (pathname !== "/") navigate("/", { state: { scrollTo: id } });
    else scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08080A]/80 backdrop-blur-xl backdrop-saturate-150"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          data-testid="nav-logo"
          onClick={() => go("top")}
          className="flex items-center gap-3"
          aria-label="Vivek Nishad — back to top"
        >
          <LogoMark />
          <span className="font-mono2 text-xs font-medium uppercase tracking-[0.25em] text-[#F4F4F7]">
            VN<span className="text-[#FF4F00]">.</span>DEV
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={l.testid}
              onClick={() => go(l.id)}
              className="font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#9E9EA9] transition-colors duration-200 hover:text-[#FF4F00]"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            data-testid="nav-cta-resume"
            href="/Vivek_Nishad_Resume.pdf"
            download="Vivek_Nishad_Resume.pdf"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#FF4F00] px-5 py-2 font-mono2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#08080A]"
          >
            <span className="absolute inset-0 -translate-x-full bg-[#F4F4F7] transition-transform duration-300 ease-out group-hover:translate-x-0" />
            <span className="relative flex items-center gap-2">
              Resume
              <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </a>
          <button
            data-testid="nav-cta-contact"
            onClick={() => go("contact")}
            className="hidden items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 font-mono2 text-[11px] uppercase tracking-[0.2em] text-[#9E9EA9] transition-colors duration-300 hover:border-[#FF4F00] hover:text-[#FF4F00] sm:flex"
          >
            Hire Me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
