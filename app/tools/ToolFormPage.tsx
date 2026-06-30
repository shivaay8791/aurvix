"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import AurvixLogo from "../components/AurvixLogo";

type Field = {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "number" | "textarea";
};

type ToolFormPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  fields: Field[];
  resultTitle: string;
  buildResult: (values: Record<string, string>) => string;
};

export default function ToolFormPage({
  eyebrow,
  title,
  description,
  fields,
  resultTitle,
  buildResult,
}: ToolFormPageProps) {
  const [values, setValues] = useState<Record<string, string>>({});

  const result = useMemo(() => buildResult(values), [buildResult, values]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-gray-900 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[150px]" />
        <div className="relative mx-auto min-h-screen w-full max-w-7xl px-6 py-8">
          <header className="flex items-center justify-between gap-4">
            <Link href="/" aria-label="Go to Aurvix home">
              <AurvixLogo />
            </Link>
            <Link
              href="/tools"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/15"
            >
              Tool Hub
            </Link>
          </header>

          <section className="grid gap-8 py-14 lg:grid-cols-[1fr_460px]">
            <div>
              <p className="mb-5 w-fit rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200">
                {eyebrow}
              </p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
                {description}
              </p>

              <div className="mt-8 space-y-5 rounded-[28px] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-2xl">
                {fields.map((field) => (
                  <label key={field.label} className="block">
                    <span className="text-sm font-medium text-gray-200">
                      {field.label}
                    </span>
                    {field.type === "textarea" ? (
                      <textarea
                        value={values[field.label] ?? ""}
                        onChange={(event) =>
                          setValues((current) => ({
                            ...current,
                            [field.label]: event.target.value,
                          }))
                        }
                        placeholder={field.placeholder}
                        rows={5}
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/10"
                      />
                    ) : (
                      <input
                        type={field.type ?? "text"}
                        value={values[field.label] ?? ""}
                        onChange={(event) =>
                          setValues((current) => ({
                            ...current,
                            [field.label]: event.target.value,
                          }))
                        }
                        placeholder={field.placeholder}
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-400/10"
                      />
                    )}
                  </label>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-[28px] border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl">
              <h2 className="text-2xl font-bold">{resultTitle}</h2>
              <pre className="mt-5 whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-7 text-gray-200">
                {result}
              </pre>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}
