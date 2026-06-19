"use client";

import React from "react";
import { motion } from "motion/react";

const ArrowGreenLeft = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-[#CCFF00] stroke-current overflow-visible" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10,90 C 10,40 40,20 60,50 C 70,65 80,75 95,70" />
    <path d="M80,55 L95,70 L85,85" />
  </svg>
);

const ArrowGreenRight = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-[#CCFF00] stroke-current overflow-visible" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M90,10 C 80,60 60,80 40,60 C 20,40 40,20 60,30 C 80,40 70,70 50,80" />
    <path d="M65,75 L50,80 L55,65" />
  </svg>
);

const CircularBadge = () => (
  <div className="relative w-28 h-28 md:w-36 md:h-36 bg-[#CCFF00] rounded-full flex items-center justify-center shadow-xl rotate-12 hover:scale-105 transition-transform cursor-pointer border-[3px] border-black/5">
    <div className="absolute inset-1 animate-[spin_10s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
        <text className="text-[11px] font-black tracking-[0.18em] uppercase" fill="black">
          <textPath href="#circlePath" startOffset="0%">
            ДЭЛГЭРЭНГҮЙ ҮЗЭХ • ДООШ •
          </textPath>
        </text>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-10 h-10 text-black stroke-current overflow-visible" fill="none" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20,80 Q 40,50 30,30 T 80,20" />
        <path d="M60,10 L80,20 L70,40" />
      </svg>
    </div>
  </div>
);

const HERO_SHADOW =
  "1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99, 7px 7px 0 #001A99, 8px 8px 0 #001A99, 9px 9px 0 #001A99, 10px 10px 0 #001A99, 11px 11px 0 #001A99, 12px 12px 0 #001A99, 13px 13px 0 #001A99, 14px 14px 0 #001A99";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-[#0038FF] flex flex-col font-sans selection:bg-[#CCFF00] selection:text-black relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10 md:py-8 max-w-[1440px] mx-auto w-full">
        <div className="flex items-center gap-1">
          <div className="bg-white text-black font-black tracking-tight text-xs md:text-sm px-3 py-1.5 rounded-2xl rounded-bl-sm relative shadow-sm">
            САЙН УУ,
            <div className="absolute -bottom-1.5 left-0 w-3 h-3 bg-white" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}></div>
          </div>
          <div className="bg-[#CCFF00] text-black font-black text-xs md:text-sm px-3 py-1.5 rounded-full border-[1.5px] border-white shadow-sm">
            VORTEX СТУДИО
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          {[
            { label: "Бидний тухай", href: "#about" },
            { label: "Үйлчилгээ", href: "#skills" },
            { label: "Ажлууд", href: "#work" },
            { label: "Холбоо", href: "#contact" },
          ].map((item) => (
            <a key={item.label} href={item.href} className="px-4 py-1.5 rounded-full border border-white/30 text-white text-xs font-semibold hover:bg-white/10 transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="px-6 py-2 rounded-full border border-white text-white text-xs md:text-sm font-semibold hover:bg-white hover:text-[#0038FF] transition-colors">
          Уулзалт товлох
        </a>
      </nav>

      <main className="flex-1 relative z-10 pt-8 pb-32 md:pt-12 md:pb-48 px-4 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10 mt-4 mb-16">
          <div className="w-full flex flex-col items-center relative z-10 space-y-2 md:space-y-4">
            <div className="w-full flex justify-start pl-[10%] md:pl-[25%] relative z-30">
              <h1
                className="text-[clamp(4.5rem,12vw,160px)] font-black leading-[0.85] tracking-tighter text-[#CCFF00] m-0 p-0 uppercase"
                style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif', textShadow: HERO_SHADOW }}
              >
                #CREATIVE
              </h1>
            </div>

            <div className="w-full flex justify-center relative z-20">
              <h1
                className="text-[clamp(5rem,15vw,220px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase"
                style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif', textShadow: HERO_SHADOW }}
              >
                STUDIO
              </h1>
            </div>

            <div className="w-full flex justify-start pl-[15%] md:pl-[30%] relative z-10">
              <h1
                className="text-[clamp(4.5rem,12vw,160px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase"
                style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif', textShadow: HERO_SHADOW }}
              >
                VORTEDX.
              </h1>
            </div>
          </div>

          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[10%] left-[5%] md:left-[20%] z-30 pointer-events-auto"
            >
              <div className="w-40 md:w-52 aspect-[3/3.5] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[-12deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-[#D2B48C] rounded-full flex items-center justify-center mb-4 shadow-inner border-[3px] border-white/50 overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vortex&backgroundColor=D2B48C" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="text-center mt-2">
                  <p className="font-bold text-sm md:text-lg text-white">vortex.studio</p>
                  <p className="text-[10px] md:text-xs text-white/80 mt-1">Бүхнийг даатга</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[15%] right-[5%] md:right-[22%] z-30 pointer-events-auto"
            >
              <div className="w-40 md:w-52 aspect-[3/3.5] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[12deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-[#2C3E50] rounded-full flex items-center justify-center mb-4 shadow-inner border-[3px] border-white/50 overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Designer" alt="Avatar" className="w-full h-full object-cover scale-150" />
                </div>
                <div className="text-center mt-2">
                  <p className="font-bold text-sm md:text-lg text-white">brand.designer</p>
                  <p className="text-[10px] md:text-xs text-white/80 mt-1">Брэнд архитектор</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-[0%] left-[0%] md:left-[10%] w-24 h-24 md:w-32 md:h-32 z-20">
              <ArrowGreenLeft />
            </div>
            <div className="absolute top-[5%] right-[0%] md:right-[10%] w-24 h-24 md:w-32 md:h-32 z-20">
              <ArrowGreenRight />
            </div>

            <div className="absolute bottom-[-10%] right-[0%] md:right-[15%] z-40 pointer-events-auto">
              <CircularBadge />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
