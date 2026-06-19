"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
};

const BRUTAL_FONT = 'var(--font-display), "Arial Black", Impact, sans-serif';
const BRUTAL_SHADOW =
  "1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99, 7px 7px 0 #001A99, 8px 8px 0 #001A99";

function CharacterV1({ char, index, centerIndex, scrollYProgress }: CharacterProps) {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);

  return (
    <motion.span
      className={cn("inline-block text-[#CCFF00]", isSpace && "w-6")}
      style={{ x, rotateX, textShadow: BRUTAL_SHADOW }}
    >
      {char}
    </motion.span>
  );
}

function CharacterV2({ char, index, centerIndex, scrollYProgress }: CharacterProps) {
  const distanceFromCenter = index - centerIndex;
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [Math.abs(distanceFromCenter) * 50, 0]);

  return (
    <motion.img
      src={char}
      alt=""
      className="inline-block w-16 md:w-20 mx-2 md:mx-3"
      style={{ x, scale, y, transformOrigin: "center" }}
    />
  );
}

function CharacterV3({ char, index, centerIndex, scrollYProgress }: CharacterProps) {
  const distanceFromCenter = index - centerIndex;
  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 90, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [-Math.abs(distanceFromCenter) * 20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.img
      src={char}
      alt=""
      className="inline-block w-16 md:w-20 mx-2 md:mx-3"
      style={{ x, rotate, y, scale, transformOrigin: "center" }}
    />
  );
}

function Bracket({ className }: { className: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 78" className={className}>
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  );
}

const stackIcons = [
  "https://cdn.simpleicons.org/react/ffffff",
  "https://cdn.simpleicons.org/nextdotjs/ffffff",
  "https://cdn.simpleicons.org/typescript/ffffff",
  "https://cdn.simpleicons.org/tailwindcss/ffffff",
  "https://cdn.simpleicons.org/framer/ffffff",
  "https://cdn.simpleicons.org/figma/ffffff",
  "https://cdn.simpleicons.org/github/ffffff",
  "https://cdn.simpleicons.org/vercel/ffffff",
  "https://cdn.simpleicons.org/visualstudiocode/ffffff",
];

export function ScrollTextSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);
  const targetRef3 = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3 });

  const text = "ТАНЫ САНААГ   БИД БОДИТ БОЛГОЁ";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);
  const iconCenterIndex = Math.floor(stackIcons.length / 2);

  return (
    <main className="w-full bg-[#0038FF] text-white relative">
      {/* Grid bg overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Floating helper hint */}
      <div className="absolute top-24 left-1/2 z-20 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
        <span className="inline-block px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-[#CCFF00] text-black rounded-full">
          /// ДАВУУ ТАЛ
        </span>
      </div>

      {/* Section 1 — Characters fly together */}
      <div
        ref={targetRef}
        className="relative box-border flex h-[210vh] items-center justify-center gap-[2vw] overflow-hidden p-[2vw]"
      >
        <div
          className="w-full max-w-5xl text-center text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none"
          style={{ perspective: "500px", fontFamily: BRUTAL_FONT }}
        >
          {characters.map((char, index) => (
            <CharacterV1
              key={index}
              char={char}
              index={index}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>

      {/* Section 2 — Icons fall in */}
      <div
        ref={targetRef2}
        className="relative -mt-[100vh] box-border flex h-[210vh] flex-col items-center justify-center gap-12 overflow-hidden p-[2vw]"
      >
        <p
          className="flex items-center justify-center gap-3 text-xl md:text-2xl font-black uppercase tracking-tight text-white"
          style={{ fontFamily: BRUTAL_FONT }}
        >
          <Bracket className="h-10 md:h-12 text-[#CCFF00]" />
          <span>АШИГЛАДАГ ТЕХНОЛОГИУД</span>
          <Bracket className="h-10 md:h-12 scale-x-[-1] text-[#CCFF00]" />
        </p>
        <div className="w-full max-w-5xl text-center">
          {stackIcons.map((icon, index) => (
            <CharacterV2
              key={index}
              char={icon}
              index={index}
              centerIndex={iconCenterIndex}
              scrollYProgress={scrollYProgress2}
            />
          ))}
        </div>
      </div>

      {/* Section 3 — Icons spin in */}
      <div
        ref={targetRef3}
        className="relative -mt-[95vh] box-border flex h-[210vh] flex-col items-center justify-center gap-12 overflow-hidden p-[2vw]"
      >
        <p
          className="flex items-center justify-center gap-3 text-xl md:text-2xl font-black uppercase tracking-tight text-white"
          style={{ fontFamily: BRUTAL_FONT }}
        >
          <Bracket className="h-10 md:h-12 text-[#CCFF00]" />
          <span>ААМЖИЛТТАЙ ТҮНШҮҮД</span>
          <Bracket className="h-10 md:h-12 scale-x-[-1] text-[#CCFF00]" />
        </p>
        <div
          className="w-full max-w-5xl text-center"
          style={{ perspective: "500px" }}
        >
          {stackIcons.map((icon, index) => (
            <CharacterV3
              key={index}
              char={icon}
              index={index}
              centerIndex={iconCenterIndex}
              scrollYProgress={scrollYProgress3}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
