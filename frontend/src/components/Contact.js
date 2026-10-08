import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { LogoMark, scrollToId } from "@/components/Navbar";

const EMAIL = "vivekworks51@gmail.com";

const LINKS = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    copy: EMAIL,
    external: false,
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "vivek-nishad-21bb071b2",
    href: "https://www.linkedin.com/in/vivek-nishad-21bb071b2/",
    external: true,
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "@Vivekvib",
    href: "https://github.com/Vivekvib",
    external: true,
  },
  {
    id: "instagram",
    icon: Instagram,
    label: "Instagram",
    value: "handle coming soon",
    href: null,
    placeholder: true,
  },
  {
    id: "phone",
    icon: Phone,
    label: "Mobile",
    value: "+91 · number coming soon",
    href: null,
    placeholder: true,
  },
];

export default function Contact() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn't copy — email is " + EMAIL);
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10">
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, #FF4F00 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono2 text-xs uppercase tracking-[0.3em] text-[#FF4F00]">
            05 // Contact
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-stroke">EXTRAORDINARY.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-[#9E9EA9]">
            I'm looking for Software Engineering, Backend, AI/Data and FinTech
            roles. If you're hiring — or just want to talk markets, models or
            systems — my inbox is open.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LINKS.map((l, i) => {
            const inner = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#FF4F00]/10 text-[#FF4F00]">
                  <l.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#5C5C66]">
                    {l.label}
                  </span>
                  <span className="mt-1 block truncate font-display text-base font-bold text-[#F4F4F7]">
                    {l.value}
                  </span>
                </span>
                {l.copy ? (
                  <Copy className="h-4 w-4 shrink-0 text-[#5C5C66]" />
                ) : l.placeholder ? (
                  <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 font-mono2 text-[9px] uppercase tracking-[0.15em] text-[#5C5C66]">
                    Placeholder
                  </span>
                ) : (
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#5C5C66] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF4F00]" />
                )}
              </>
            );
            const cls =
              "group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#101014] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#FF4F00]/50";
            return (
              <motion.div
                key={l.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {l.href ? (
                  <a
                    data-testid={`contact-${l.id}-button`}
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noreferrer" : undefined}
                    onClick={l.copy ? (e) => { e.preventDefault(); copyEmail(); } : undefined}
                    className={cls}
                  >
                    {inner}
                  </a>
                ) : (
                  <div data-testid={`contact-${l.id}-button`} className={cls} data-cursor-hover>
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <button
            onClick={() => scrollToId("top")}
            className="flex items-center gap-3"
            aria-label="Back to top"
          >
            <LogoMark size={30} />
            <span className="font-mono2 text-[10px] uppercase tracking-[0.25em] text-[#5C5C66]">
              VN<span className="text-[#FF4F00]">.</span>DEV
            </span>
          </button>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#5C5C66]">
            © 2026 Vivek Nishad — Designed & built with obsession
          </p>
          <p className="font-mono2 text-[10px] uppercase tracking-[0.2em] text-[#5C5C66]">
            New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  );
}
