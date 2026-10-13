import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import { scrollToId } from "@/components/Navbar";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      const t = setTimeout(() => scrollToId(target), 200);
      window.history.replaceState({}, "");
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [location.state]);

  return (
    <main>
      <Hero />
      <MarqueeStrip />
      <Projects />
      <About />
      <Skills />
      <Timeline />
      <Contact />
    </main>
  );
}
