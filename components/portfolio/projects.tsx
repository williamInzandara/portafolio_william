"use client"

import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const projectLinks = [
  {
    github: "https://github.com/usuario/proyecto-1",
    demo: "https://demo.vercel.app",
    demoLabel: "demo.vercel.app",
  },
  {
    github: "https://github.com/usuario/proyecto-2",
    demo: "https://play.google.com/store",
    demoLabel: "Play Store",
  },
  {
    github: "https://github.com/usuario/proyecto-3",
    demo: null,
    demoLabel: null,
  },
]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="proyectos" className="bg-card py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-primary md:mb-10">
          {t.projects.sectionLabel}
        </p>

        <div className="grid gap-4">
          {t.projects.items.map((project, index) => (
            <article
              key={index}
              className="rounded-[8px] border border-primary/35 bg-secondary/20 p-5 md:p-6"
            >
              <h3 className="mb-2 text-xl font-black text-foreground sm:text-2xl md:text-3xl">
                {project.title}
              </h3>

              <p className="mb-6 max-w-5xl text-base leading-relaxed text-muted-foreground md:mb-8 md:text-lg">
                {project.description}
              </p>

              <div className="h-px w-full bg-primary/35" />

              <div className="mt-4 flex flex-wrap items-center gap-2 text-primary">
                <Link
                  href={projectLinks[index].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600/95 transition-colors hover:text-cyan-700"
                >
                  <Github className="h-4 w-4" />
                  <span className="break-all font-mono">{projectLinks[index].github.replace("https://", "")}</span>
                </Link>

                {projectLinks[index].demo && (
                  <>
                    <span className="text-primary/65">|</span>
                    <Link
                      href={projectLinks[index].demo!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600/95 transition-colors hover:text-cyan-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-mono">{projectLinks[index].demoLabel}</span>
                    </Link>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
