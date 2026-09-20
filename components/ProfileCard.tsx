"use client";

import { motion } from "framer-motion";
import { CircleCheck, Code2, FolderGit2, User } from "lucide-react";
import { profile } from "@/data/social";

const stats = [
  { icon: FolderGit2, label: "Proyectos", value: profile.projectsCount },
  { icon: Code2, label: "Tecnologías", value: profile.techCount },
  { icon: CircleCheck, label: "Años de experiencia", value: profile.yearsExperience },
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
      <div className="rounded-3xl border border-line bg-surface/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl shadow-black/30">
        {/* Foto: reemplaza este bloque por <Image src="/tu-foto.jpg" ... /> cuando tengas una fotografía real */}
        <div className="shrink-0 h-24 w-24 rounded-2xl bg-gradient-to-br from-accent to-accent-dim flex items-center justify-center ring-1 ring-white/10">
          <User size={40} className="text-white/90" />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-display text-xl font-semibold text-ink">
            {profile.name}
          </h3>
          <p className="text-muted text-sm mt-1">{profile.role}</p>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-surface-hi px-3 py-1 text-xs text-amber-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
            {profile.status}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full sm:w-auto sm:border-l sm:border-line sm:pl-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-ink font-display font-semibold text-lg">
                <Icon size={16} className="text-accent-soft" />
                {value}
              </div>
              <p className="text-[11px] text-muted mt-1 leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
