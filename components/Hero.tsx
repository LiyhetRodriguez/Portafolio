"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Briefcase,
  Code2,
  Github,
  Instagram,
  Linkedin,
  Megaphone,
  MessageCircle,
} from "lucide-react";
import { profile, socialLinks } from "@/data/social";

const floatingPills = [
  { label: "Software", icon: Code2, className: "left-2 top-12 md:left-6" },
  { label: "Marketing", icon: Megaphone, className: "right-2 top-16 md:right-8" },
  { label: "Chatbot", icon: Bot, className: "left-6 bottom-14 md:left-10" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#05070d] pb-20 pt-8 md:pb-24 md:pt-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(68,255,178,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(111,130,255,0.12),transparent_35%)]" />
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(circle_at_center,black_28%,transparent_82%)]" />

      <div className="relative mx-auto max-w-[1300px] px-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-4 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#44ffb2] shadow-[0_0_14px_rgba(68,255,178,0.9)]" />
              Portfolio Digital
            </div>
          </motion.div>

          <div className="relative flex min-h-[560px] flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="w-full max-w-[500px] text-center lg:text-left"
            >
              <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] text-white sm:text-6xl lg:text-[5.5rem]">
                <span className="block">Páginas</span>
                <span className="block text-[#44ffb2]">convierten</span>
              </h1>

              <div className="mt-5 flex items-center justify-center gap-3 rounded-full border border-white/10 bg-[#111927]/80 px-4 py-2.5 text-sm text-white/90 shadow-[0_15px_40px_rgba(0,0,0,0.2)] backdrop-blur-sm lg:justify-start">
                <span className="h-2.5 w-2.5 rounded-full bg-[#31ff9d] shadow-[0_0_16px_rgba(49,255,157,0.9)]" />
                <span>Automatiza ventas y responde 24/7</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[640px]"
            >
              <div className="relative mx-auto h-[360px] w-full max-w-[560px] md:h-[420px]">
                {floatingPills.map((pill, index) => (
                  <motion.div
                    key={pill.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{
                      opacity: 1,
                      y: [0, -8, 0],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      delay: 0.2 + index * 0.12,
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${pill.className} flex items-center gap-2 rounded-full border border-white/10 bg-[#0f1727]/90 px-3 py-2 text-xs font-medium text-white/90 shadow-[0_15px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm`}
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#1a2437] text-[#dfe7ff] ring-1 ring-white/5">
                      <pill.icon size={12} />
                    </span>
                    {pill.label}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 w-[92%] max-w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,21,31,0.9),rgba(9,11,17,0.97))] p-3 shadow-[0_35px_80px_rgba(0,0,0,0.45)]"
                >
                  <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,#dfe1e7_0%,#c1c5cf_100%)]">
                    <div className="relative h-[260px] md:h-[330px]">
                      <div className="absolute inset-x-[8%] top-0 h-10 rounded-b-[22px] bg-[#111827]/70" />
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
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 flex justify-center lg:justify-start">
            <div className="flex items-center gap-4">
              {[
                { href: socialLinks.github, icon: Github },
                { href: socialLinks.linkedin, icon: Linkedin },
                { href: socialLinks.whatsapp, icon: MessageCircle },
                { href: "https://instagram.com", icon: Instagram },
              ].map(({ href, icon: Icon }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#141b29] text-white/80 shadow-[0_8px_18px_rgba(0,0,0,0.18)] transition"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
