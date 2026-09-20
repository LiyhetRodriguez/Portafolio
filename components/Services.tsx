"use client";

import type { LucideIcon } from "lucide-react";
import { Code, Database, Server, Smartphone, Workflow, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { services, type Service } from "@/data/services";

const ICONS: Record<Service["icon"], LucideIcon> = {
  code: Code,
  smartphone: Smartphone,
  server: Server,
  database: Database,
  workflow: Workflow,
  wrench: Wrench,
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          title="¿Qué puedo hacer?"
          description="Servicios que ofrezco para llevar un producto digital desde la idea hasta producción."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="rounded-2xl border border-line bg-surface p-6 hover:border-accent-soft/50 transition-colors"
              >
                <div className="h-10 w-10 rounded-lg bg-accent-dim/60 flex items-center justify-center">
                  <Icon size={19} className="text-accent-soft" />
                </div>
                <h3 className="mt-4 font-display font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
