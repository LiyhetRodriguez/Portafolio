"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { profile, socialLinks } from "@/data/social";

const floatingPills = [
  { label: "Software", className: "left-4 top-12 md:left-8" },
  { label: "Marketing", className: "right-6 top-14 md:right-12" },
  { label: "Chatbot", className: "left-10 bottom-14 md:left-14" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#05070d] pb-20 pt-24 md:pb-24 md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(68,255,178,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(111,130,255,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(circle_at_center,black_28%,transparent_82%)]" />

      <div className="relative mx-auto max-w-content px-6">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#44ffb2] shadow-[0_0_14px_rgba(68,255,178,0.9)]" />
            Portfolio Digital
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative w-full max-w-[980px]"
          >
            <div className="relative mx-auto h-[300px] w-full max-w-[840px] md:h-[420px]">
              {floatingPills.map((pill, index) => (
                <motion.div
                  key={pill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.12, duration: 0.45 }}
                  className={`absolute ${pill.className} hidden items-center gap-2 rounded-full border border-white/10 bg-[#101827]/80 px-4 py-2 text-sm text-white/90 shadow-[0_18px_35px_rgba(0,0,0,0.25)] backdrop-blur-sm md:flex`}
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1d2b3f] text-[10px] font-bold text-[#dfe7ff]">
                    {pill.label.slice(0, 2).toUpperCase()}
                  </span>
                  {pill.label}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 w-[92%] max-w-[640px] -translate-x-1/2 -translate-y-1/2"
              >
                <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,20,30,0.9),rgba(9,11,17,0.96))] p-3 shadow-[0_35px_80px_rgba(0,0,0,0.45)]">
                  <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#e5e6eb_0%,#c9ccd4_100%)]">
                    <div className="relative h-[240px] md:h-[330px]">
                      <div className="absolute inset-x-[10%] top-0 h-10 rounded-b-[22px] bg-[#111827]/70" />
                      <div className="absolute left-1/2 top-[12%] h-16 w-16 -translate-x-1/2 rounded-full bg-[#d7ae8d] shadow-[inset_0_0_0_8px_rgba(235,201,169,0.35)] md:h-20 md:w-20" />
                      <div className="absolute left-1/2 top-[24%] h-24 w-24 -translate-x-1/2 rounded-[42%] bg-[#d7ae8d] md:h-28 md:w-28" />
                      <div className="absolute left-[20%] top-[46%] h-24 w-6 rounded-full bg-[#0a0d14] md:h-28 md:w-7" />
                      <div className="absolute right-[20%] top-[46%] h-24 w-6 rounded-full bg-[#0a0d14] md:h-28 md:w-7" />
                      <div className="absolute left-1/2 top-[33%] h-10 w-20 -translate-x-1/2 rounded-[16px] bg-[#0d0d12] md:h-12 md:w-24" />
                      <div className="absolute left-1/2 top-[52%] h-20 w-36 -translate-x-1/2 rounded-[26px] bg-[#0d0d14] md:h-28 md:w-44" />
                    </div>

                    <div className="border-t border-white/10 bg-[#0e1320]/90 p-4 md:p-5">
                      <div className="flex items-center justify-between gap-3 text-white">
                        <div>
                          <p className="text-xl font-semibold leading-none md:text-2xl">{profile.name}</p>
                          <p className="mt-1 text-xs text-white/70 md:text-sm">@danieth · dev</p>
                        </div>
                        <span className="text-base text-[#44ffb2] md:text-lg">✓</span>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.14em] text-white/70 md:text-[11px]">
                        <span className="rounded-full border border-white/10 bg-[#111827] px-2 py-1">Proyectos</span>
                        <span>40+</span>
                        <span className="text-[#44ffb2]">Alto</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-10 w-full text-center"
          >
            <h1 className="mx-auto max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-[6rem]">
              Páginas web que convierten <span className="text-[#44ffb2]">visitas</span> en ventas
            </h1>

            <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-3 rounded-full border border-white/10 bg-[#121a26]/80 px-5 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#31ff9d] shadow-[0_0_16px_rgba(49,255,157,0.9)]" />
              <p className="text-sm text-white/90 md:text-lg">
                Automatiza ventas y mejora la atención al cliente 24/7
              </p>
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#141b29] text-white/80 transition hover:-translate-y-0.5 hover:border-[#6ae7ff] hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#141b29] text-white/80 transition hover:-translate-y-0.5 hover:border-[#6ae7ff] hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#141b29] text-white/80 transition hover:-translate-y-0.5 hover:border-[#6ae7ff] hover:text-white"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#141b29] text-white/80 transition hover:-translate-y-0.5 hover:border-[#6ae7ff] hover:text-white"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
