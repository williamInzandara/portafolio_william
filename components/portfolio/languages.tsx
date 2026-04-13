"use client"

import { useLanguage } from "@/contexts/language-context"

const languageColors: Record<string, string> = {
  JavaScript: "#e8ce25",
  TypeScript: "#4f90d7",
  HTML: "#ef623d",
  CSS: "#3787cd",
  Python: "#4c89be",
  Java: "#f1a22e",
}

export function Languages() {
  const { t } = useLanguage()

  return (
    <section id="lenguajes" className="bg-background py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-primary md:mb-10">
          {t.languages.sectionLabel}
        </p>

        <h2 className="text-3xl font-black uppercase tracking-[0.03em] text-foreground sm:text-4xl md:text-6xl">
          {t.languages.title}
        </h2>
        <div className="mb-9 mt-3 h-[4px] w-16 rounded-full bg-primary" />

        <div className="rounded-[10px] border border-primary/35 bg-secondary/20 p-5 md:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.languages.items.map((lang) => (
              <article
                key={lang.name}
                className="rounded-[8px] border border-primary/30 bg-card px-4 py-4"
              >
                <div className="mb-3 h-3 w-3 rounded-full" style={{ backgroundColor: languageColors[lang.name] }} />
                <h3 className="mb-2 text-2xl font-bold leading-none text-foreground md:text-[34px]">{lang.name}</h3>
                <p className="text-sm leading-[1.45] text-muted-foreground md:min-h-[74px] md:text-[22px]">{lang.description}</p>
                <div className="mt-3 h-[4px] w-[88%] rounded-full" style={{ backgroundColor: languageColors[lang.name] }} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
