import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-native-hidden");
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      setHovering(
        !!e.target.closest("a, button, [role='button'], [data-cursor-hover]")
      );
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      document.documentElement.classList.remove("cursor-native-hidden");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        data-testid="custom-cursor"
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-[#FF4F00]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-[#FF4F00]/60"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          opacity: hovering ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}
