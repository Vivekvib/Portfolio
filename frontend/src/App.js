import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import NoiseOverlay from "@/components/NoiseOverlay";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1.0 });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#F4F4F7]">
      <NoiseOverlay />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Projects />
        <About />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
