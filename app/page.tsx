"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import ReactLenis from "lenis/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Briefcase,
  Code2,
  Coffee,
  Globe,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Rocket,
  Sparkles as SparkleIcon,
  Star,
  Terminal,
  Zap,
} from "lucide-react";

import { Hero } from "@/components/ui/hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import DisplayCards from "@/components/ui/display-cards";
import { Sparkles } from "@/components/ui/sparkles";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { HoverExpand } from "@/components/ui/hover-expand";
import { StickyCardsSection } from "@/components/ui/sticky-cards";
import { ScrollTextSection } from "@/components/ui/scroll-text";
import { PerspectiveTextScroll } from "@/components/ui/perspective-text";
import { techLogos } from "@/components/tech-logos";

const stickyImages = [
  {
    src: "https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1600&q=80",
    step: "01",
    title: "DISCOVER",
    description:
      "Every project begins with a question. We dig deep, ask why, and find the spark worth building.",
  },
  {
    src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1600&q=80",
    step: "02",
    title: "SKETCH",
    description:
      "Raw ideas turn into rough wireframes. We explore, throw away, iterate — until the shape feels right.",
  },
  {
    src: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?auto=format&fit=crop&w=1600&q=80",
    step: "03",
    title: "DESIGN",
    description:
      "Pixels meet purpose. Color, type, and motion come together to give the product its voice.",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80",
    step: "04",
    title: "BUILD",
    description:
      "Code with care. Clean, fast, and accessible — every component crafted to last and scale.",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
    step: "05",
    title: "SHIP",
    description:
      "Polish, deploy, celebrate. The product goes live — and the loop starts again with new ideas.",
  },
];

const galleryImages = [
  {
    src: "/pic.jpg",
    alt: "Өнгөний нийлэмж",
    code: "БҮТЭЭЛ · 001",
  },
  {
    src: "/pic1.jpg",
    alt: "Үсгийн урлал",
    code: "БҮТЭЭЛ · 002",
  },
  {
    src: "/pic2.jpg",
    alt: "Брэндийн хөдөлгөөн",
    code: "БҮТЭЭЛ · 003",
  },
  {
    src: "/pic3.jpg",
    alt: "Неоны урсгал",
    code: "БҮТЭЭЛ · 004",
  },
  {
    src: "/pic4.jpg",
    alt: "Гэрлийн судалгаа",
    code: "БҮТЭЭЛ · 005",
  },
  {
    src: "/pic5.jpg",
    alt: "Интерфэйс ноорог",
    code: "БҮТЭЭЛ · 006",
  },
  {
    src: "/pic6.jpg",
    alt: "Зоригтой бүтэц",
    code: "БҮТЭЭЛ · 007",
  },
];


/* ─────────── Marquee Strip ─────────── */
function MarqueeStrip({
  items,
  bg = "bg-[#CCFF00]",
  text = "text-black",
  reverse = false,
  tilt = -2,
}: {
  items: string[];
  bg?: string;
  text?: string;
  reverse?: boolean;
  tilt?: number;
}) {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
      <div
        className={`${bg} ${text} py-5 md:py-7 border-y-[3px] border-black`}
        style={{ transform: `rotate(${tilt}deg) scale(1.05)` }}
      >
        <InfiniteSlider duration={25} gap={56} reverse={reverse}>
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-8 text-2xl md:text-4xl font-black uppercase tracking-tighter whitespace-nowrap shrink-0"
              style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif' }}
            >
              <span>{item}</span>
              <Star className="h-6 w-6 md:h-8 md:w-8 shrink-0" strokeWidth={3} fill="currentColor" />
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}

/* ─────────── Skill Cards Config ─────────── */
const skillCards = [
  {
    icon: <Code2 className="size-4 text-blue-300" />,
    title: "Веб хөгжүүлэлт",
    description: "Орчин үеийн вэб платформ",
    date: "Үндсэн чадвар",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Palette className="size-4 text-pink-300" />,
    title: "Брэнд дизайн",
    description: "Лого, систем, өвөрмөц төрх",
    date: "Гол ур чадвар",
    iconClassName: "text-pink-500",
    titleClassName: "text-pink-400",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Rocket className="size-4 text-emerald-300" />,
    title: "Кампанит ажил",
    description: "Стратеги, контент, хэрэгжүүлэлт",
    date: "Үр дүн чухал",
    iconClassName: "text-emerald-500",
    titleClassName: "text-emerald-400",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

const projects = [
  {
    title: "Онлайн худалдаа",
    tag: "ОНЛАЙН ХУДАЛДАА",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    color: "bg-[#FF3366]",
    span: "md:col-span-2 md:row-span-2",
    rotate: "-rotate-1",
  },
  {
    title: "Санхүүгийн удирдлага",
    tag: "САНХҮҮ ПЛАТФОРМ",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    color: "bg-[#CCFF00]",
    span: "",
    rotate: "rotate-1",
  },
  {
    title: "Студио Веб",
    tag: "БРЭНД ВЭБСАЙТ",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    color: "bg-white",
    span: "",
    rotate: "-rotate-2",
  },
  {
    title: "Маркетинг",
    tag: "КАМПАНИТ АЖИЛ",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
    color: "bg-[#FFB800]",
    span: "",
    rotate: "rotate-2",
  },
  {
    title: "Хиймэл оюун",
    tag: "AI ШИЙДЭЛ",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    color: "bg-[#0038FF]",
    span: "md:col-span-2",
    rotate: "-rotate-1",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

/* ─────────── Parallax Manifesto ─────────── */
function ParallaxManifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBgText = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);
  const yMidLayer = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);
  const yForeground = useTransform(scrollYProgress, [0, 1], ["-5%", "15%"]);
  const rotateBadge = useTransform(scrollYProgress, [0, 1], [-30, 360]);
  const scaleBadge = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.1, 0.8]);
  const xSticker = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const xStickerRev = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  return (
    <section
      ref={ref}
      className="relative bg-black text-white overflow-hidden py-32 md:py-48"
    >
      {/* Layer 1 — slowest: huge outlined repeating text */}
      <motion.div
        style={{ y: yBgText }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none select-none"
        aria-hidden
      >
        {["VORTEX • БРЭНД", "ДИЗАЙН • маркетинг", "БОРЛУУЛАЛТ • БҮТЭЭЛ"].map((line, i) => (
          <div
            key={i}
            className="text-[18vw] md:text-[14vw] font-black uppercase tracking-tighter leading-[0.8] whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif',
              WebkitTextStroke: "2px rgba(255,255,255,0.18)",
              color: "transparent",
            }}
          >
            {line}
          </div>
        ))}
      </motion.div>

      {/* Layer 2 — medium: floating stickers moving horizontally */}
      <motion.div style={{ x: xSticker, y: yMidLayer }} className="absolute top-[12%] left-0 pointer-events-none">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-[#CCFF00] rounded-3xl rotate-12 border-4 border-white grid place-items-center shadow-2xl">
          <SparkleIcon className="h-10 w-10 md:h-14 md:w-14 text-black" strokeWidth={2.5} />
        </div>
      </motion.div>

      <motion.div style={{ x: xStickerRev, y: yMidLayer }} className="absolute bottom-[15%] right-0 pointer-events-none">
        <div className="px-6 py-3 md:px-8 md:py-4 bg-[#FF3366] text-white font-black uppercase text-sm md:text-lg tracking-widest border-4 border-white -rotate-6 rounded-full shadow-2xl">
          ✦ САЙН УУ
        </div>
      </motion.div>

      <motion.div style={{ y: yMidLayer }} className="absolute top-[60%] left-[5%] hidden md:block pointer-events-none">
        <div className="w-20 h-20 bg-[#FFB800] rounded-full border-4 border-black grid place-items-center -rotate-12 shadow-2xl">
          <Zap className="h-8 w-8 text-black" strokeWidth={3} fill="black" />
        </div>
      </motion.div>

      {/* Layer 3 — foreground content moving slightly opposite */}
      <motion.div
        style={{ y: yForeground }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <span className="inline-block px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-[#CCFF00] text-black rounded-full">
          /// ИТГЭЛ ҮНЭМШИЛ
        </span>
        <h2
          className="mt-8 text-5xl md:text-[7rem] font-black uppercase tracking-tighter leading-[0.9]"
          style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif' }}
        >
          САЙН БҮТЭЭГДЭХҮҮН БОЛОВЧ  <span className="text-[#CCFF00]">МАРКЕТИНГГҮЙ Л БОЛ</span>
          <br />
          ЯМАР Ч <span className="text-[#FF3366]">БОРЛУУЛАЛТ ҮГҮЙ.</span>
        </h2>
        <p className="mt-10 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Хамтын ажилллагаа бүрт баталгаа өгч, чанарын өндөр түвшинд маркетинг хийнэ

        </p>
      </motion.div>

      {/* Layer 4 — rotating badge sticker, top-right */}
      <motion.div
        style={{ rotate: rotateBadge, scale: scaleBadge }}
        className="absolute top-12 right-6 md:top-20 md:right-16 z-20 pointer-events-none"
      >
        <div className="w-28 h-28 md:w-40 md:h-40 bg-[#0038FF] rounded-full grid place-items-center border-4 border-white shadow-2xl relative">
          <div className="absolute inset-2">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path id="manifestoCircle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
              <text className="text-[8px] font-black tracking-[0.2em] uppercase" fill="#CCFF00">
                <textPath href="#manifestoCircle" startOffset="0%">
                  УНШИНА УУ • PARALLAX • УНШИНА УУ •
                </textPath>
              </text>
            </svg>
          </div>
          <Zap className="h-10 w-10 md:h-14 md:w-14 text-[#CCFF00]" strokeWidth={3} />
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────── Parallax Background Text ─────────── */
function ParallaxBgText({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

  return (
    <div ref={ref} className="absolute inset-0 flex items-center pointer-events-none overflow-hidden" aria-hidden>
      <motion.div
        style={{ x }}
        className="text-[22vw] font-black uppercase tracking-tighter whitespace-nowrap leading-none"
      >
        <span
          style={{
            fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif',
            WebkitTextStroke: "3px rgba(0,0,0,0.25)",
            color: "transparent",
          }}
        >
          {text} • {text} • {text}
        </span>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        lerp: 0.1,
      }}
    >
      <div className="w-full bg-background text-foreground overflow-x-clip">
        {/* HERO */}
        <section id="top">
          <Hero />
        </section>

        {/* MARQUEE STRIP — bridges hero into body */}
        <MarqueeStrip items={["КРЕАТИВ МАРКЕТИНГ", "БРЭНД СИСТЕМ", "ВИЗУАЛ ӨГҮҮЛЭМЖ", "УЛААНБААТАРААС ДЭЛХИЙД"]} />

        {/* ABOUT — Perspective Text Scroll (Skiper28) */}
        <section id="about">
          <PerspectiveTextScroll />
        </section>

        {/* OLD BENTO ABOUT — removed */}
        {false && (
          <section className="relative bg-white text-black py-24 md:py-32 px-4 md:px-10 overflow-hidden">
            <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-60" />

            <div className="relative max-w-7xl mx-auto">
              <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6 mb-12">
                <div>
                  <span className="inline-block px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-black text-[#CCFF00] rounded-full">
                /// ABOUT
                  </span>
                  <h2
                    className="mt-4 text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] text-[#0038FF] brutalist-shadow-yellow"
                    style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif' }}
                  >
                    WHO AM I?
                  </h2>
                </div>
                <p className="max-w-md text-sm md:text-base font-medium">
                  Би 3+ жилийн туршлагатай <span className="bg-[#CCFF00] px-1">creative developer</span>. Frontend

                </p>
              </motion.div>

              {/* Bento grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6 auto-rows-[180px]">
                {/* Photo */}
                <motion.div
                  {...fadeUp}
                  className="md:col-span-2 md:row-span-2 relative brutalist-box rounded-3xl overflow-hidden bg-[#0038FF] border-4 border-black"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
                    alt="workspace"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="text-white font-black uppercase text-xl">Vortex</p>
                      <p className="text-white/80 text-xs">Crafting from MN with ♥</p>
                    </div>
                    <div className="bg-[#CCFF00] p-2 rounded-full">
                      <ArrowUpRight className="h-5 w-5 text-black" strokeWidth={3} />
                    </div>
                  </div>
                </motion.div>

                {/* Big number */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="md:col-span-2 brutalist-box bg-[#CCFF00] rounded-3xl border-4 border-black p-6 flex items-center justify-between"
                >
                  <div>
                    <p className="text-[6rem] md:text-[7rem] font-black leading-none tracking-tighter">3+</p>
                    <p className="font-black uppercase text-sm">Years of crafting</p>
                  </div>
                  <Zap className="h-16 w-16" strokeWidth={2.5} />
                </motion.div>

                {/* Location */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="brutalist-box bg-white rounded-3xl border-4 border-black p-5 flex flex-col justify-between"
                >
                  <MapPin className="h-7 w-7" strokeWidth={3} />
                  <div>
                    <p className="text-xs font-bold uppercase opacity-60">Based in</p>
                    <p className="font-black text-lg uppercase leading-tight">Ulaanbaatar, MN</p>
                  </div>
                </motion.div>

                {/* Coffee */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="brutalist-box bg-[#FF3366] text-white rounded-3xl border-4 border-black p-5 flex flex-col justify-between"
                >
                  <Coffee className="h-7 w-7" strokeWidth={3} />
                  <div>
                    <p className="text-4xl font-black tracking-tighter">2,847</p>
                    <p className="text-xs font-bold uppercase opacity-90">Cups of coffee</p>
                  </div>
                </motion.div>

                {/* Stack tags */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="md:col-span-2 brutalist-box bg-black text-white rounded-3xl border-4 border-black p-5 flex flex-col justify-between"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">/// my stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "Tailwind", "Motion", "Figma", "Three.js"].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-bold rounded-full border-2 border-white/30 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Availability */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="md:col-span-2 brutalist-box bg-[#FFB800] rounded-3xl border-4 border-black p-5 flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest">Status</p>
                    <p className="text-2xl md:text-3xl font-black uppercase leading-tight">
                      Available for <br /> freelance ⚡
                    </p>
                  </div>
                  <span className="relative inline-flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-black opacity-75 animate-ping"></span>
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-black"></span>
                  </span>
                </motion.div>

                {/* Heart */}
                <motion.div
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="brutalist-box bg-white rounded-3xl border-4 border-black p-5 flex flex-col justify-between"
                >
                  <Heart className="h-7 w-7 text-[#FF3366]" strokeWidth={3} fill="#FF3366" />
                  <p className="font-black uppercase text-sm leading-tight">
                    Obsessed with <br /> micro-interactions
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* CONTAINER SCROLL — Showcase */}
        <section className="relative bg-white overflow-hidden z-10">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* Decorative blur orbs */}
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#0038FF] rounded-full blur-3xl opacity-15 pointer-events-none" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#CCFF00] rounded-full blur-3xl opacity-25 pointer-events-none" />

          {/* Floating sticker — top-left */}
          <div className="absolute top-24 left-6 md:left-16 hidden md:block z-20 animate-[float-slow_6s_ease-in-out_infinite]">
            <div className="bg-[#CCFF00] text-black px-4 py-2 rounded-full border-4 border-black -rotate-6 shadow-[6px_6px_0_0_#000]">
              <span className="text-xs font-black uppercase tracking-[0.2em]">★ АМЬД ХАРАГДАЦ</span>
            </div>
          </div>

          {/* Floating sticker — top-right */}
          <div className="absolute top-28 right-6 md:right-16 hidden md:block z-20 animate-[float-slow_7s_ease-in-out_infinite] [animation-delay:1s]">
            <div className="bg-[#FF3366] text-white px-4 py-2 rounded-full border-4 border-black rotate-6 shadow-[6px_6px_0_0_#000]">
              <span className="text-xs font-black uppercase tracking-[0.2em]">ШИНЭ ✦ ШУУРХАЙ</span>
            </div>
          </div>

          {/* Circular spinning badge — far right */}
          <div className="absolute top-40 right-20 hidden lg:block z-20 animate-[float-slow_8s_ease-in-out_infinite] [animation-delay:0.5s]">
            <div className="relative w-24 h-24 bg-[#0038FF] rounded-full grid place-items-center border-4 border-black shadow-[6px_6px_0_0_#000]">
              <div className="absolute inset-1 animate-[spin_12s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="showcaseCircle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
                  <text className="text-[8px] font-black tracking-[0.2em] uppercase" fill="#CCFF00">
                    <textPath href="#showcaseCircle" startOffset="0%">
                      ҮЗЭСГЭЛЭН · 3D · АМЬД ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <span className="text-[#CCFF00] text-2xl font-black">3D</span>
            </div>
          </div>

          <ContainerScroll
            titleComponent={
              <div className="space-y-5">
                <div className="flex items-center justify-center gap-3">
                  <span className="h-px w-12 bg-black" />
                  <span className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] bg-black text-[#CCFF00] rounded-full border-2 border-black">
                  /// ҮЗЭСГЭЛЭН
                  </span>
                  <span className="h-px w-12 bg-black" />
                </div>
                <h2
                  className="text-5xl md:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] text-black"
                  style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif' }}
                >
                  СЭТГЭЛ <br />
                  <span className="text-[#0038FF] brutalist-shadow-yellow">ХӨДӨЛГӨСӨН КОНТЕНТ.</span>
                </h2>
                <p className="text-sm md:text-base text-black/60 font-medium max-w-lg mx-auto pt-2">
                  Видео контент, AI контент бүх төрлийн контент бүтээх үйлчилгээ
                </p>
              </div>
            }
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black">
              {/* Animated gradient layer */}
              <div
                className="absolute inset-0 bg-[linear-gradient(135deg,#0038FF,#FF3366,#CCFF00,#FFB800,#8350e8,#0038FF)] bg-[length:400%_400%]"
                style={{ animation: "gradient-flow 12s ease infinite" }}
              />

              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]" />

              {/* Floating colorful blobs */}
              <div
                className="absolute top-[12%] left-[8%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#CCFF00] mix-blend-difference blur-2xl opacity-80"
                style={{ animation: "blob-1 9s ease-in-out infinite" }}
              />
              <div
                className="absolute bottom-[15%] right-[10%] w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#FF3366] mix-blend-screen blur-2xl opacity-70"
                style={{ animation: "blob-2 11s ease-in-out infinite" }}
              />
              <div
                className="absolute top-[40%] right-[35%] w-24 h-24 md:w-36 md:h-36 rounded-full bg-white mix-blend-overlay blur-2xl opacity-50"
                style={{ animation: "blob-1 14s ease-in-out infinite reverse" }}
              />

              {/* Sticker badges floating */}
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 md:top-12 md:left-12 z-10"
              >
                <div className="px-4 py-2 rounded-full bg-[#CCFF00] text-black text-[10px] md:text-xs font-black uppercase tracking-[0.2em] border-4 border-black shadow-[4px_4px_0_0_#000]">
                  ★ Бүтээлэг студио
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0], rotate: [3, -3, 3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-10"
              >
                <div className="px-4 py-2 rounded-full bg-black text-[#CCFF00] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] border-4 border-[#CCFF00] shadow-[4px_4px_0_0_#CCFF00]">
                  ✦ Idea → Brand
                </div>
              </motion.div>

              {/* Center brand text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3
                  className="text-white text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-center brutalist-shadow select-none"
                  style={{
                    fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif',
                  }}
                >
                  VORTEX
                  <br />
                  <span className="text-[#CCFF00]">STUDIO.</span>
                </h3>
              </div>

              {/* Bottom strip with marquee-style tags */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t-2 border-white/10 py-2 md:py-3 overflow-hidden z-10">
                <div className="flex items-center gap-6 md:gap-10 px-6 text-white text-[10px] md:text-sm font-black uppercase tracking-[0.3em] whitespace-nowrap">
                  <span>● Брэндинг</span>
                  <span className="text-[#CCFF00]">/</span>
                  <span>● Дизайн</span>
                  <span className="text-[#CCFF00]">/</span>
                  <span>● Мотион</span>
                  <span className="text-[#CCFF00]">/</span>
                  <span>● Кампанит ажил</span>
                  <span className="text-[#CCFF00]">/</span>
                  <span>● Контент</span>
                </div>
              </div>
            </div>
          </ContainerScroll>
        </section>

        {/* MARQUEE — Pink */}
        <MarqueeStrip
          items={["БРЭНДИНГ", "ВИЗУАЛ ДИЗАЙН", "МОТИОН ГРАФИК", "ВЕБ ХӨГЖҮҮЛЭЛТ", "КОНТЕНТ"]}
          bg="bg-[#FF3366]"
          text="text-white"
          reverse
        />

        {/* STATS ROW */}
        <section className="relative bg-black text-white py-20 md:py-28 px-4 md:px-10 overflow-hidden">
          <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" />
          <div className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { n: "120+", label: "Дуусгасан төсөл", color: "text-[#CCFF00]" },
              { n: "48", label: "Хамтрагч брэндүүд", color: "text-[#FF3366]" },
              { n: "∞", label: "Үүсгэсэн санаа", color: "text-[#FFB800]" },
              { n: "100%", label: "Сэтгэлээсээ бүтээсэн", color: "text-white" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-2 border-white/20 hover:border-[#CCFF00] hover:bg-white/5 rounded-3xl p-6 transition-colors"
              >
                <p
                  className={`text-6xl md:text-7xl font-black tracking-tighter leading-none ${s.color}`}
                  style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif' }}
                >
                  {s.n}
                </p>
                <p className="mt-3 text-xs md:text-sm font-bold uppercase tracking-widest opacity-70">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Studio mockup image strip */}
          <motion.div
            {...fadeUp}
            className="relative max-w-7xl mx-auto mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              {
                src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80",
                label: "Брэнд систем",
                tilt: "-rotate-2",
              },
              {
                src: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?auto=format&fit=crop&w=800&q=80",
                label: "Визуал концепт",
                tilt: "rotate-2",
              },
              {
                src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
                label: "Савлагааны дизайн",
                tilt: "-rotate-1",
              },
              {
                src: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=800&q=80",
                label: "Кампанит хөтөлбөр",
                tilt: "rotate-1",
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className={`group relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-black brutalist-box bg-zinc-800 ${m.tilt} hover:rotate-0 transition-transform`}
              >
                <Image
                  src={m.src}
                  alt={m.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-full bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-[0.2em] border-2 border-black text-center">
                  {m.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PARALLAX MANIFESTO */}
        <ParallaxManifesto />

        {/* STICKY CARDS — Skiper16 verbatim */}
        <StickyCardsSection />

        {/* SKILLS */}
        <section
          id="skills"
          className="relative bg-[#0038FF] text-white py-28 md:py-32 px-4 md:px-10 overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg pointer-events-none" />

          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-[#CCFF00] text-black rounded-full">
              /// ҮЙЛЧИЛГЭЭ
              </span>
              <h2
                className="mt-4 text-6xl md:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] text-white brutalist-shadow"
                style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif' }}
              >
                ОРЧИН ҮЕИЙН
                <br />
                <span className="text-[#CCFF00]">ШИНЭЛЭГ ТРЕНД.</span>
              </h2>
              <p className="mt-8 text-white/80 max-w-md text-base leading-relaxed">
                Зүгээр харагдах байдалд анхаарах биш — мэдрэгдэх төрх, брэндинг, дизайн, мотион, кампанит ажил —
                хэрэгцээтэй бүхнийг нэг дороос, Бүгдийг чанарын түвшинд хийнэ.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Брэндинг", "Визуал дизайн", "Веб хөгжүүлэлт", "Мотион график", "Кампанит ажил", "Контент стратеги"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-xs font-black uppercase rounded-full bg-white/10 border-2 border-white/30 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Creative image collage */}
              <div className="mt-10 grid grid-cols-2 gap-3 max-w-md">
                <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-black brutalist-box -rotate-2">
                  <Image
                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=600&q=80"
                    alt="Design samples"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-black brutalist-box rotate-2 mt-4">
                  <Image
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80"
                    alt="Brand work"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="flex items-center justify-center min-h-[500px]">
              <div className="w-full max-w-xl">
                <DisplayCards cards={skillCards} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* GALLERY — HoverExpand */}
        <section id="gallery" className="relative bg-[#0038FF] text-white py-24 md:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 grid-bg pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <span className="inline-block px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-[#CCFF00] text-black rounded-full">
              /// ГАЛЕРЕЙ
              </span>
              <h2
                className="mt-4 text-5xl md:text-[6rem] font-black uppercase tracking-tighter leading-[0.85] brutalist-shadow"
                style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif' }}
              >
                БҮТЭЭЛҮҮДИЙН <span className="text-[#CCFF00]">ЕРТӨНЦ.</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/70 max-w-xl mx-auto">
                Зураг бүр өөрийн түүхтэй. Тус бүрд нь ойртож, дэлгэрэнгүйг нь мэдрээрэй.
              </p>
            </motion.div>
            <HoverExpand images={galleryImages} />
          </div>
        </section>

        {/* PROJECTS — Bento */}
        <section id="work" className="relative bg-[#CCFF00] text-black py-24 md:py-32 px-4 md:px-10 overflow-hidden">
          <div className="absolute inset-0 grid-bg-dark pointer-events-none opacity-50" />
          <ParallaxBgText text="WORK" />

          <div className="relative max-w-7xl mx-auto">
            <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6 mb-12">
              <div>
                <span className="inline-block px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-black text-[#CCFF00] rounded-full">
                /// СОНГОМОЛ БҮТЭЭЛҮҮД
                </span>
                <h2
                  className="mt-4 text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] text-black"
                  style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif' }}
                >
                  БРЭНДҮҮД
                  <br />
                  <span className="text-white brutalist-shadow-pink">АМЬДРАХУЙ.</span>
                </h2>
              </div>
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-[#CCFF00] font-black uppercase text-sm tracking-widest hover:bg-[#FF3366] hover:text-white transition-colors"
              >
                Бүх ажил <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-[260px]">
              {projects.map((p, i) => (
                <motion.a
                  key={p.title}
                  href="#"
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -8, rotate: 0 }}
                  className={`group relative overflow-hidden rounded-3xl border-4 border-black brutalist-box ${p.color} ${p.span} ${p.rotate}`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest">
                    {p.tag}
                  </div>
                  <div className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full bg-[#CCFF00] text-black border-2 border-black -rotate-12 group-hover:rotate-0 transition-transform">
                    <ArrowUpRight className="h-5 w-5" strokeWidth={3} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight">
                      {p.title}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* SCROLL TEXT — Skiper31 */}
        <ScrollTextSection />

        {/* STACK — Sparkles */}
        <section id="stack" className="relative bg-[#0038FF] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="h-screen w-full overflow-hidden relative">
            <div className="mx-auto pt-28 md:pt-32 w-full max-w-3xl px-6 text-center">
              <span className="inline-block px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] bg-[#CCFF00] text-black rounded-full border-2 border-black">
              /// ИТГЭДЭГ ХЭРЭГСЭЛ
              </span>
              <h2
                className="mt-4 text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white brutalist-shadow"
                style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif' }}
              >
                ШИЛДГИЙН <span className="text-[#CCFF00]">СОНГОЛТ.</span>
                <br />
                СЭТГЭЛЭЭР <span className="text-[#CCFF00]">БҮТЭЭСЭН.</span>
              </h2>

              <div className="relative mt-12 h-[100px] w-full">
                <InfiniteSlider className="flex h-full w-full items-center" duration={30} gap={64}>
                  {techLogos.map(({ id, name, url }) => (
                    <div
                      key={id}
                      className="flex items-center justify-center shrink-0 opacity-80 hover:opacity-100 hover:scale-110 transition-all"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={url}
                        alt={name}
                        className="h-10 md:h-12 w-auto"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </InfiniteSlider>
                <ProgressiveBlur
                  className="pointer-events-none absolute top-0 left-0 h-full w-[200px]"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute top-0 right-0 h-full w-[200px]"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>

            <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
              <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#CCFF00,transparent_70%)] before:opacity-60" />
              <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t-4 border-black bg-[#0038FF]" />
              <Sparkles
                density={1200}
                className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                color="#CCFF00"
              />
            </div>
          </div>
        </section>

        {/* MARQUEE — Lime */}
        <MarqueeStrip
          items={["ХАМТРАН АЖИЛЛАЦГААЯ", "ТОМ ЗҮЙЛ БҮТЭЭЦГЭЭЕ", "БРЭНДЭД АМЬДРАЛ ✦", "ӨНӨӨДӨР ЭХЛҮҮЛЭЭРЭЙ"]}
          bg="bg-[#0038FF]"
          text="text-[#CCFF00]"
        />

        {/* CONTACT */}
        <section
          id="contact"
          className="relative bg-[#0038FF] text-white py-32 md:py-40 px-4 md:px-10 overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg pointer-events-none" />

          {/* Floating sticker badge */}
          <div className="absolute top-10 right-10 hidden md:block animate-[float-slow_6s_ease-in-out_infinite]">
            <div className="relative w-32 h-32 bg-[#CCFF00] rounded-full grid place-items-center rotate-12 border-4 border-black shadow-2xl">
              <SparkleIcon className="h-12 w-12 text-black" strokeWidth={2.5} />
              <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path id="contactCircle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                  <text className="text-[9px] font-black tracking-[0.2em] uppercase" fill="black">
                    <textPath href="#contactCircle" startOffset="0%">
                      ХАМТРАН АЖИЛЛАЦГААЯ • БИЧЭЭРЭЙ •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <Briefcase className="mx-auto h-12 w-12 text-[#CCFF00]" strokeWidth={2.5} />
              <span className="inline-block mt-6 px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] bg-[#CCFF00] text-black rounded-full">
              /// ХОЛБОГДОХ
              </span>
              <h2
                className="mt-6 text-6xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] brutalist-shadow"
                style={{ fontFamily: 'var(--font-display), "Arial Black", Impact, sans-serif' }}
              >
                БРЕНДЭЭ БИДЭНД
                <br />
                <span className="text-[#CCFF00]">ДААТГА</span>
              </h2>
              <p className="mt-8 text-white/80 max-w-xl mx-auto text-base md:text-lg">
                Шинэ брэнд эхлүүлж байна уу? Хуучин брэндээ шинэчлэх үү? Кампанит ажил, контент, эсвэл бүтээлч санаагаа хуваалцах уу — Манайх хамтрахад үргэлж бэлэн.
              </p>
            </motion.div>

            <motion.a
              {...fadeUp}
              href="mailto:hello@vortex.dev"
              className="mt-12 inline-flex items-center gap-3 px-8 md:px-12 py-5 md:py-6 rounded-full bg-[#CCFF00] text-black font-black uppercase text-lg md:text-xl tracking-wider border-4 border-black brutalist-box hover:bg-white transition-colors"
            >
              <Mail className="h-6 w-6" strokeWidth={3} />
              hello@vortex.studio
              <ArrowDownRight className="h-6 w-6" strokeWidth={3} />
            </motion.a>

            <motion.div {...fadeUp} className="mt-14 flex items-center justify-center gap-3">
              {[
                { Icon: Terminal, label: "GitHub", href: "https://github.com" },
                { Icon: MessageCircle, label: "Twitter", href: "https://twitter.com" },
                { Icon: Globe, label: "LinkedIn", href: "https://linkedin.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 px-5 py-3 rounded-full border-2 border-white/40 hover:bg-white hover:text-[#0038FF] transition-colors"
                >
                  <Icon className="h-4 w-4" strokeWidth={2.5} />
                  <span className="text-xs font-black uppercase tracking-widest">{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          <footer className="relative mt-32 pt-8 border-t-2 border-white/20 max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] md:text-xs text-white/60 uppercase tracking-widest font-black">
              <span>© {new Date().getFullYear()} VORTEX СТУДИО · УЛААНБААТАР</span>
              <span className="flex items-center gap-2">
                СЭТГЭЛЭЭР <Heart className="h-3 w-3 text-[#CCFF00]" fill="#CCFF00" /> БҮТЭЭСЭН
              </span>
              <a href="#top" className="hover:text-[#CCFF00] transition-colors">
                ДЭЭГҮҮР ↑
              </a>
            </div>
          </footer>
        </section>
      </div>
    </ReactLenis>
  );
}
