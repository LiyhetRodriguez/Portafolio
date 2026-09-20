"use client";

import { MessageCircle } from "lucide-react";
import { socialLinks } from "@/data/social";

export default function WhatsAppButton() {
  const number = socialLinks.whatsapp.replace(/\D/g, "");

  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-105 active:scale-95 transition-transform"
    >
      <MessageCircle size={26} fill="white" className="text-[#25D366]" />
    </a>
  );
}
