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
      className="relative -mt-8 md:-mt-16 mx-auto max-w-content px-6"
    >
      <div className="rounded-[28px] border border-line bg-surface/90 backdrop-blur-sm p-5 sm:p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="shrink-0 h-24 w-24 rounded-[22px] bg-gradient-to-br from-accent/90 via-accent-dim to-surface flex items-center justify-center ring-1 ring-white/10 overflow-hidden">
            <User size={38} className="text-white/90" />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display text-[1.65rem] font-semibold text-ink">
              {profile.name} <span className="text-accent-soft">✓</span>
            </h3>
            <p className="text-muted text-sm mt-1">@danieth · dev</p>

            <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-surface-hi px-2.5 py-1.5 text-[11px] text-muted"
                >
                  <Icon size={12} className="text-accent-soft" />
                  <span>{label}</span>
                  <span className="font-medium text-ink">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
