"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";

const projects = [
  {
    title: "Discover",
    src: "/project.jpg",
  },
  {
    title: "Sketch",
    src: "/project1.jpg",
  },
  {
    title: "Design",
    src: "/project2.jpg",
  },
  {
    title: "Build",
    src: "/project3.jpg",
  },
  {
    title: "Ship",
    src: "/project4.jpg",
  },
];

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  src: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="rounded-4xl relative -top-1/4 flex h-[760px] w-[600px] max-w-[90vw] origin-top items-center justify-center overflow-hidden bg-zinc-950 border-4 border-black brutalist-box"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={title} className="h-full w-full object-cover object-center" />
      </motion.div>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[100vh] pt-[50vh]"
      >
        <div className="absolute left-1/2 top-[8%] grid -translate-x-1/2 content-start justify-items-center gap-5 text-center px-6 z-10">
          <span className="inline-block px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] bg-[#CCFF00] text-black rounded-full border-2 border-black">
            /// АЖЛЫН УРСГАЛ
          </span>
          <h2
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white"
            style={{
              fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif',
              textShadow:
                "1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99, 7px 7px 0 #001A99, 8px 8px 0 #001A99",
            }}
          >
            Бүтэхгүй мэт санааг ч
            <br />
            <span className="text-[#CCFF00]">бодит болгоно</span>
          </h2>
        </div>
        {projects.map((project, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (projects.length - i - 1) * 0.1,
          );
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

export { Skiper16, StickyCard_001 };
export const StickyCardsSection = Skiper16;

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * Author: @gurvinder-singh02
 */
