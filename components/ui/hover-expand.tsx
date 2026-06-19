"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type HoverExpandImage = {
  src: string;
  alt: string;
  code: string;
};

export function HoverExpand({
  images,
  className,
  defaultIndex = 1,
}: {
  images: HoverExpandImage[];
  className?: string;
  defaultIndex?: number;
}) {
  const [activeImage, setActiveImage] = useState<number | null>(defaultIndex);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={cn("relative w-full max-w-[1400px] px-5", className)}
    >
      <div className="flex w-full items-center justify-center gap-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-3xl border-4 border-black"
            initial={{ width: "3rem", height: "30rem" }}
            animate={{
              width: activeImage === index ? "36rem" : "6rem",
              height: activeImage === index ? "36rem" : "36rem",
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onClick={() => setActiveImage(index)}
            onHoverStart={() => setActiveImage(index)}
          >
            <AnimatePresence>
              {activeImage === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {activeImage === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 z-20 flex flex-col items-start justify-end p-5"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#CCFF00]">
                    {image.code}
                  </p>
                  <p className="mt-1 text-lg font-black uppercase tracking-tight text-white leading-tight">
                    {image.alt}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              className="size-full object-cover"
              alt={image.alt}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
