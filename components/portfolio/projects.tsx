import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Nombre del Proyecto 1",
    description: "Aplicación web desarrollada con Next.js y TypeScript. Implementa autenticación, gestión de estado y consumo de APIs externas.",
    github: "https://github.com/usuario/proyecto-1",
    demo: "https://demo.vercel.app",
    demoLabel: "demo.vercel.app",
  },
  {
    title: "Nombre del Proyecto 2",
    description: "App móvil con Flutter y Dart para gestión de tareas con notificaciones push, sincronización en tiempo real y soporte offline.",
    github: "https://github.com/usuario/proyecto-2",
    demo: "https://play.google.com/store",
    demoLabel: "Play Store",
  },
  {
    title: "Nombre del Proyecto 3",
    description: "API REST con Java y Spring Boot. Base de datos relacional con SQL, autenticación JWT y documentación con Swagger.",
    github: "https://github.com/usuario/proyecto-3",
    demo: null,
    demoLabel: null,
  },
]

export function Projects() {
  return (
    <section id="proyectos" className="bg-card py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-primary md:mb-10">
          | Proyectos
        </p>

        <div className="grid gap-4">
          {projects.map((project, index) => (
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
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600/95 transition-colors hover:text-cyan-700"
                >
                  <Github className="h-4 w-4" />
                  <span className="break-all font-mono">{project.github.replace("https://", "")}</span>
                </Link>

                {project.demo && (
                  <>
                    <span className="text-primary/65">|</span>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600/95 transition-colors hover:text-cyan-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="font-mono">{project.demoLabel}</span>
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
