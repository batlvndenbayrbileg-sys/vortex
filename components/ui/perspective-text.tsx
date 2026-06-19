"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const STORY = `VORTEX— МЭРГЭЖЛИЙН ӨНДӨР ТҮВШИНД ТАНЫ БИЗНЕСИЙГ БУСДАД ТАНИУЛНА.  
ТАНАЙ БИЗНЕСИЙН МАРКЕТИНГ, БРЭНД ХӨГЖҮҮЛЭЛТ, ЛОГО ДИЗАЙН, ПОСТЕР СУРТАЛЧИЛГАА, ВИДЕО КОНТЕНТ ГЭЭД БҮГДИЙГ НЭГ ДОР ШИЙДНЭ. ТА ЗӨВХӨН БҮТЭЭГДЭХҮҮНИЙХЭЭ ЧАНАРТ Л АНХААР, БУСДЫГ НЬ БИД ХАРИУЦНА.  `;

export function PerspectiveTextScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Text rises from below center, passes through, exits above
  const y = useTransform(scrollYProgress, [0, 1], [400, -400]);
  const transform = useMotionTemplate`rotateX(25deg) translateY(${y}px) translateZ(0px)`;

  return (
    <div
      ref={targetRef}
      className="relative z-0 h-[200vh] w-full bg-[#0038FF] text-white"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Title pill */}
        <div className="absolute top-12 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="inline-block px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-[#CCFF00] text-black rounded-full">
            /// МАНИФЕСТО
          </span>
          <span className="text-[10px] uppercase font-black tracking-[0.3em] text-white/50">
            ↓ уншина уу
          </span>
        </div>

        {/* Grid bg */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />

        {/* 3D perspective text */}
        <div
          className="relative w-full max-w-5xl px-6 z-10"
          style={{ perspective: "400px" }}
        >
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              transform,
              fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif',
            }}
            className="text-center text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-[#CCFF00] uppercase"
          >
            {STORY}
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-b from-transparent to-[#0038FF] pointer-events-none z-20" />
        {/* Top gradient fade */}
        <div className="absolute inset-x-0 top-0 h-[20vh] bg-gradient-to-t from-transparent to-[#0038FF] pointer-events-none z-20" />
      </div>
    </div>
  );
}
