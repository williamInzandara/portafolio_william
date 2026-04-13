"use client"

import { Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonios" className="bg-card py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">

        {/* TÍTULO */}
        <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center text-foreground">
          {t.testimonials.sectionLabel}
        </h2>

        {/* CARDS */}
        <div className="grid gap-6 md:grid-cols-3">

          {t.testimonials.items.map((item, index) => (
            <div
              key={index}
              className="rounded-[12px] border border-primary/35 bg-secondary/20 p-6 shadow-sm"
            >
              <Quote className="mb-4 h-6 w-6 text-primary/60" />

              <p className="mb-6 text-muted-foreground leading-relaxed">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div className="font-semibold text-foreground">
                  {item.name}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}