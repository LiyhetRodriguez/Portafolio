"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/social";

export default function About() {
  const paragraphs = profile.about.split("\n\n").filter(Boolean);

  return (
    <section id="sobre-mi" className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading title="Acerca de mí" />

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-5 text-muted leading-relaxed text-[15px]">
            {paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-ink text-lg" : ""}>
                {p}
              </p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 rounded-2xl border border-line bg-surface p-6 font-mono text-sm"
          >
            <p className="text-muted">
              <span className="text-accent-soft">const</span> desarrollador ={" "}
              <span className="text-amber-soft">{"{"}</span>
            </p>
            <div className="pl-4 space-y-1 mt-1">
              <p>
                <span className="text-ink/70">nombre:</span>{" "}
                <span className="text-amber-soft">&quot;{profile.name}&quot;</span>,
              </p>
              <p>
                <span className="text-ink/70">rol:</span>{" "}
                <span className="text-amber-soft">&quot;{profile.role}&quot;</span>,
              </p>
              <p>
                <span className="text-ink/70">ubicación:</span>{" "}
                <span className="text-amber-soft">&quot;{profile.location}&quot;</span>,
              </p>
              <p>
                <span className="text-ink/70">disponible:</span>{" "}
                <span className="text-accent-soft">true</span>,
              </p>
            </div>
            <p className="text-amber-soft">{"}"}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
