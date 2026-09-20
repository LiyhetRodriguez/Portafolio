"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Megaphone } from "lucide-react";
import { profile } from "@/data/social";

const floatingPills = [
  { label: "Software", icon: Code2, className: "left-4 top-8 md:left-8" },
  { label: "Marketing", icon: Megaphone, className: "right-6 top-16 md:right-10" },
  { label: "Chatbot", icon: Bot, className: "left-6 bottom-12 md:left-10" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#05070d] pb-20 pt-6 md:pb-24 md:pt-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(68,255,178,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(111,130,255,0.10),transparent_30%)]" />
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(circle_at_center,black_25%,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-10">
        <div className="relative min-h-[540px] lg:min-h-[620px]">
          <div className="absolute inset-0 hidden lg:block" />

          {floatingPills.map((pill, index) => (
            <motion.div
              key={pill.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                delay: 0.2 + index * 0.12,
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute ${pill.className} z-20 flex items-center gap-2 rounded-full border border-white/10 bg-[#0f1727]/90 px-3 py-2 text-xs font-medium text-white/90 shadow-[0_15px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm`}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#1a2437] text-[#dfe7ff] ring-1 ring-white/5">
                <pill.icon size={12} />
              </span>
              {pill.label}
            </motion.div>
          ))}

          <div className="relative z-10 flex min-h-[540px] flex-col items-center justify-center gap-8 pt-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="w-full max-w-[440px] text-center lg:text-left"
            >
              <h1 className="text-[3.3rem] font-black leading-[0.82] tracking-[-0.08em] text-white sm:text-[4.5rem] lg:text-[5.7rem]">
                <span className="block">Páginas</span>
                <span className="block text-white">convierte</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 22, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative w-full max-w-[560px]"
            >
              <div className="mx-auto w-full max-w-[520px] overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,21,31,0.9),rgba(8,10,16,0.97))] p-3 shadow-[0_35px_80px_rgba(0,0,0,0.45)]">
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,#dfe1e7_0%,#c1c5cf_100%)]">
                  <div className="relative h-[260px] md:h-[330px]">
                    <div className="absolute inset-x-[8%] top-0 h-10 rounded-b-[20px] bg-[#111827]/70" />
                    <div className="absolute left-1/2 top-[12%] h-16 w-16 -translate-x-1/2 rounded-full bg-[#d7ae8d] shadow-[inset_0_0_0_8px_rgba(235,201,169,0.35)] md:h-20 md:w-20" />
                    <div className="absolute left-1/2 top-[24%] h-24 w-24 -translate-x-1/2 rounded-[42%] bg-[#d7ae8d] md:h-28 md:w-28" />
                    <div className="absolute left-[20%] top-[46%] h-24 w-6 rounded-full bg-[#0a0d14] md:h-28 md:w-7" />
                    <div className="absolute right-[20%] top-[46%] h-24 w-6 rounded-full bg-[#0a0d14] md:h-28 md:w-7" />
                    <div className="absolute left-1/2 top-[32%] h-10 w-20 -translate-x-1/2 rounded-[16px] bg-[#0d0d12] md:h-12 md:w-24" />
                    <div className="absolute left-1/2 top-[52%] h-20 w-36 -translate-x-1/2 rounded-[26px] bg-[#0d0d14] md:h-28 md:w-44" />
                  </div>

                  <div className="border-t border-white/10 bg-[#0e1320]/90 p-4 md:p-5">
                    <div className="flex items-center justify-between gap-3 text-white">
                      <div>
                        <p className="text-xl font-semibold leading-none md:text-2xl">{profile.name}</p>
                        <p className="mt-1 text-xs text-white/70 md:text-sm">@danieth · dev</p>
                      </div>
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#44ffb2] text-[10px] font-bold text-[#08120d]">✓</span>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-2 text-[9px] uppercase tracking-[0.14em] text-white/70 md:text-[10px]">
                      <span className="rounded-full border border-white/10 bg-[#111827] px-2 py-1">Proyectos</span>
                      <span>40+</span>
                      <span className="text-[#44ffb2]">Alto</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
