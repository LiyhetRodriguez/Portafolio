"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile, socialLinks, contactFormEndpoint } from "@/data/social";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: socialLinks.whatsapp,
    href: `https://wa.me/${socialLinks.whatsapp.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    label: "Correo",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: socialLinks.linkedin,
    href: socialLinks.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: socialLinks.github,
    href: socialLinks.github,
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      // Conecta este formulario a tu propio endpoint, Formspree, Resend, etc.
      // definiendo contactFormEndpoint en data/social.ts
      if (!contactFormEndpoint || contactFormEndpoint.startsWith("[")) {
        throw new Error("Endpoint no configurado");
      }
      const res = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Fallo al enviar");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          title="¿Trabajamos juntos?"
          description="Cuéntame sobre tu proyecto y te responderé lo antes posible."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-3">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-line bg-surface p-4 hover:border-accent-soft/50 transition-colors"
              >
                <span className="h-10 w-10 shrink-0 rounded-lg bg-accent-dim/60 flex items-center justify-center">
                  <channel.icon size={18} className="text-accent-soft" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-ink">{channel.label}</span>
                  <span className="block text-xs text-muted truncate">
                    {channel.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-line bg-surface p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nombre" name="nombre" type="text" required />
              <Field label="Correo" name="correo" type="email" required />
            </div>
            <Field label="Asunto" name="asunto" type="text" required />
            <div>
              <label className="block text-sm text-muted mb-1.5" htmlFor="mensaje">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                className="w-full rounded-lg bg-base border border-line px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-accent-soft outline-none transition-colors resize-none"
                placeholder="Cuéntame en qué puedo ayudarte…"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white hover:shadow-[0_0_28px_2px_rgba(124,108,240,0.45)] transition-shadow disabled:opacity-60"
            >
              <Send size={16} />
              {status === "sending" ? "Enviando…" : "Enviar mensaje"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-emerald-400">
                Mensaje enviado. ¡Gracias por escribir, {profile.name}!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-amber-soft">
                Configura <code className="font-mono">contactFormEndpoint</code> en{" "}
                <code className="font-mono">data/social.ts</code> para recibir mensajes.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm text-muted mb-1.5" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg bg-base border border-line px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-accent-soft outline-none transition-colors"
      />
    </div>
  );
}
