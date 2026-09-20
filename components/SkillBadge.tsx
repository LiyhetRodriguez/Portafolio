"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillBadge({
  name,
  icon: Icon,
}: {
  name: string;
  icon: LucideIcon;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col items-center justify-center gap-2.5 rounded-xl border border-line bg-surface px-4 py-5 hover:border-accent-soft/60 hover:bg-surface-hi transition-colors"
    >
      <Icon
        size={22}
        className="text-muted group-hover:text-accent-soft transition-colors"
      />
      <span className="text-xs text-ink/80 text-center">{name}</span>
    </motion.div>
  );
}
