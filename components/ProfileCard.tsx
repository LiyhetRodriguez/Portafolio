"use client";

import { motion } from "framer-motion";
import { CircleCheck, Code2, FolderGit2, User } from "lucide-react";
import { profile } from "@/data/social";

const stats = [
  { icon: FolderGit2, label: "Proyectos", value: profile.projectsCount },
  { icon: Code2, label: "Engagement", value: "Alto" },
  { icon: CircleCheck, label: "Disponibilidad", value: "OK" },
];

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto -mt-6 max-w-content px-6 md:-mt-10"
    >
      <div className="rounded-[26px] border border-white/10 bg-[#0f1521]/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-6">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1f2a3f] via-[#0f172a] to-[#091018] ring-1 ring-white/10">
            <User size={34} className="text-white/90" />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-[1.5rem] font-semibold text-white">
              {profile.name} <span className="text-[#44ffb2]">✓</span>
            </h3>
            <p className="mt-1 text-sm text-slate-300">@danieth · dev</p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-slate-200"
                >
                  <Icon size={12} className="text-[#44ffb2]" />
                  <span>{label}</span>
                  <span className="font-medium text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
