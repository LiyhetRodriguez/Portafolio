"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { profile, socialLinks } from "@/data/social";

const floatingPills = [
  { label: "Software", className: "left-0 top-36" },
  { label: "Marketing", className: "right-6 top-16" },
  { label: "Web", className: "left-4 bottom-20" },
  { label: "Chatbot", className: "right-8 bottom-20" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#05070d] pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(141,107,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(20,122,255,0.12),transparent_25%)]" />
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_80%)]" />

      <div className="relative mx-auto max-w-content px-6">
        <div className="relative mx-auto flex max-w-[1120px] flex-col items-center">
          <div className="relative h-[520px] w-full max-w-[980px]">
            <div className="pointer-events-none absolute left-0 top-32 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1c2335]/80 shadow-[0_0_30px_rgba(112,83,239,0.5)] ring-1 ring-white/10">
              <span className="text-2xl text-white">◌</span>
            </div>
            <div className="pointer-events-none absolute right-0 top-36 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1c2335]/80 shadow-[0_0_30px_rgba(112,83,239,0.5)] ring-1 ring-white/10">
              <span className="text-2xl text-white">◌</span>
            </div>

            {floatingPills.map((pill, index) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className={`absolute ${pill.className} hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-[#101827]/80 px-4 py-2 text-sm text-white/90 shadow-[0_18px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm`}
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1b2240] text-[10px] font-bold text-[#c9d2ff]">
                  {pill.label.slice(0, 2).toUpperCase()}
                </span>
                {pill.label}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute left-1/2 top-1/2 w-[92%] max-w-[640px] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative rounded-[38px] border border-[#4c5d8d]/80 bg-[linear-gradient(180deg,rgba(20,24,36,0.92),rgba(7,10,17,0.95))] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-x-0 top-0 mx-auto h-16 w-[120px] rounded-b-[28px] bg-[#0b0e17]" />
                <div className="absolute left-1/2 top-4 h-5 w-5 -translate-x-1/2 rounded-full bg-[#0a0c14] ring-4 ring-[#dfe4ef]/70" />

                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#d9d9d9]">
                  <div className="absolute left-0 right-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(52,58,79,0.15),transparent)]" />
                  <div className="relative h-[460px] bg-[linear-gradient(180deg,#d8d9dc_0%,#b9b9bd_100%)]">
                    <div className="absolute inset-x-[12%] top-0 h-14 rounded-b-[28px] bg-[#0e1016]/60 blur-[2px]" />
                    <div className="absolute left-1/2 top-[12%] h-20 w-20 -translate-x-1/2 rounded-full bg-[#d8ac8c] shadow-[inset_0_0_0_8px_rgba(239,202,170,0.4)]" />
                    <div className="absolute left-1/2 top-[28%] h-28 w-28 -translate-x-1/2 rounded-[42%] bg-[#d8ac8c] shadow-[inset_0_-8px_0_rgba(90,55,40,0.15)]" />
                    <div className="absolute left-1/2 top-[28%] h-12 w-20 -translate-x-1/2 rounded-[18px] bg-[#0d0d12]" />
                    <div className="absolute left-1/2 top-[42%] h-[120px] w-[170px] -translate-x-1/2 rounded-[30px_30px_0_0] bg-[#0a0d14]" />
                    <div className="absolute left-1/2 top-[54%] h-[120px] w-[200px] -translate-x-1/2 rounded-[30px] bg-[#0a0d14] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
                    <div className="absolute left-[22%] top-[50%] h-[120px] w-[28px] rounded-full bg-[#0a0d14]" />
                    <div className="absolute right-[22%] top-[50%] h-[120px] w-[28px] rounded-full bg-[#0a0d14]" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 pb-5">
                    <div className="rounded-[22px] border border-white/10 bg-[#1d2130]/80 px-4 py-3 backdrop-blur-sm">
                      <div className="flex items-center justify-between gap-3 text-white">
                        <div>
                          <p className="text-[1.7rem] font-semibold leading-none">{profile.name}</p>
                          <p className="mt-1 text-sm text-white/70">@danieth · dev</p>
                        </div>
                        <span className="text-lg text-[#59ffb5]">✓</span>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#101827] px-2 py-1 text-[10px] text-white/80 uppercase tracking-[0.14em]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#b6b9ce]" />
                          Proyectos
                        </div>
                        <div className="text-sm text-white">40+</div>
                        <div className="text-sm text-white/80">Enga</div>
                        <div className="text-[11px] font-medium text-[#8afcbb]">Alto</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute right-10 top-12 hidden md:flex items-center gap-3 rounded-full border border-white/10 bg-[#1a1f2c]/80 px-4 py-3 text-white shadow-[0_18px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#60d4ff] text-sm font-bold text-[#08131d]">T</span>
              <span className="text-base font-medium">Marketing</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.6 }}
              className="absolute right-2 top-[36%] hidden md:flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1a2140] text-2xl text-white shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
            >
              N
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.6 }}
              className="absolute right-16 bottom-20 hidden md:flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1f364b] text-2xl text-white shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
            >
              ✦
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.74, duration: 0.6 }}
              className="absolute right-3 bottom-6 hidden md:flex items-center gap-3 rounded-full border border-white/10 bg-[#1a1f2c]/80 px-4 py-3 text-white shadow-[0_18px_35px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2e2e35] text-sm font-bold text-white">💬</span>
              <span className="text-base font-medium">Chatbot</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-8 w-full text-center"
          >
            <h1 className="font-display text-4xl font-black leading-[0.97] tracking-[-0.06em] text-white sm:text-5xl lg:text-[7rem]">
              Páginas web que convierten <span className="text-[#44ffb2]">visitas en</span> ventas
            </h1>

            <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-3 rounded-[28px] border border-white/10 bg-[#131a26]/75 px-5 py-3 shadow-[0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <span className="inline-flex h-3 w-3 rounded-full bg-[#31ff9d] shadow-[0_0_16px_rgba(49,255,157,0.9)]" />
              <p className="text-base text-white/90 md:text-xl">
                Automatiza ventas, ordena el negocio y atiende clientes 24/7
              </p>
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#1a1e2c] text-white/80 transition hover:scale-105 hover:border-[#6ae7ff] hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#1a1e2c] text-white/80 transition hover:scale-105 hover:border-[#6ae7ff] hover:text-white"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#1a1e2c] text-white/80 transition hover:scale-105 hover:border-[#6ae7ff] hover:text-white"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#1a1e2c] text-white/80 transition hover:scale-105 hover:border-[#6ae7ff] hover:text-white"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
