"use client";

import type { LucideIcon } from "lucide-react";
import { Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience, type ExperienceItem } from "@/data/experience";

const ICONS: Record<ExperienceItem["type"], LucideIcon> = {
  laboral: Briefcase,
  certificacion: Award,
  curso: Sparkles,
  estudio: GraduationCap,
  proyecto: Sparkles,
};

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          title="Experiencia y formación"
          description="Un recorrido por mi formación, certificaciones y trayectoria profesional."
        />

        <ol className="relative border-l border-line ml-3">
          {experience.map((item, i) => {
            const Icon = ICONS[item.type];
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="mb-10 ml-8 last:mb-0"
              >
                <span className="absolute -left-[19px] flex h-9 w-9 items-center justify-center rounded-full bg-surface border border-line">
                  <Icon size={15} className="text-accent-soft" />
                </span>
                <div className="rounded-xl border border-line bg-surface p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display font-semibold text-ink">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs text-muted">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-accent-soft mt-0.5">{item.place}</p>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
