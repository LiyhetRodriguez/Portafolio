"use client";

import { useEffect, useState } from "react";

type Line = { prompt: string; text: string; result?: string };

const SCRIPT: Line[] = [
  { prompt: "~", text: "whoami" },
  { prompt: "~", text: "cat perfil.json", result: '{ rol: "Desarrollador de Software" }' },
  { prompt: "~", text: "git commit -m \"feat: nueva funcionalidad\"" },
  { prompt: "~", text: "npm run build", result: "✓ build completado sin errores" },
  { prompt: "~", text: "echo $DISPONIBILIDAD", result: "abierto a nuevos proyectos" },
];

const TYPE_SPEED = 42;
const HOLD_AFTER_LINE = 900;
const HOLD_AFTER_RESULT = 1400;

export default function TerminalWindow() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [history, setHistory] = useState<Line[]>([]);

  useEffect(() => {
    const current = SCRIPT[lineIndex];
    if (!current) return;

    if (charIndex < current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    }

    if (current.result && !showResult) {
      const t = setTimeout(() => setShowResult(true), 350);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setHistory((h) => [...h, current]);
      setShowResult(false);
      setCharIndex(0);
      setLineIndex((i) => (i + 1) % SCRIPT.length);
      if (lineIndex === SCRIPT.length - 1) setHistory([]);
    }, current.result ? HOLD_AFTER_RESULT : HOLD_AFTER_LINE);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex, showResult]);

  const current = SCRIPT[lineIndex];

  return (
    <div className="rounded-2xl border border-line bg-surface/80 shadow-2xl shadow-black/40 overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-surface-hi/60">
        <span className="h-3 w-3 rounded-full bg-[#EF6A5F]" />
        <span className="h-3 w-3 rounded-full bg-[#F5BD4F]" />
        <span className="h-3 w-3 rounded-full bg-[#61C454]" />
        <span className="ml-3 text-xs text-muted">terminal — zsh</span>
      </div>

      <div className="p-5 min-h-[220px] flex flex-col gap-2.5">
        {history.map((line, i) => (
          <div key={i}>
            <p className="text-muted">
              <span className="text-accent-soft">{line.prompt}</span> $ {line.text}
            </p>
            {line.result && <p className="text-amber-soft pl-4">{line.result}</p>}
          </div>
        ))}

        {current && (
          <div>
            <p className="text-ink">
              <span className="text-accent-soft">{current.prompt}</span> $ {current.text.slice(0, charIndex)}
              {charIndex < current.text.length && (
                <span className="inline-block w-2 h-4 bg-accent-soft align-middle ml-0.5 animate-blink" />
              )}
            </p>
            {current.result && showResult && (
              <p className="text-amber-soft pl-4">{current.result}</p>
            )}
            {charIndex === current.text.length && !current.result && (
              <span className="inline-block w-2 h-4 bg-accent-soft align-middle animate-blink" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
