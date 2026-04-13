"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const projectData = [
  {
    title: "Control de Finanzas Personales",
    description:
      "Aplicación web para la gestión de finanzas personales que permite registrar ingresos y gastos, visualizar balances en tiempo real y organizar transacciones por categorías. Incluye panel interactivo, historial de movimientos y control detallado del flujo de dinero.",
    github: "https://github.com/williamInzandara/control-de-finanzas.git",
    demo: "https://control-de-finanzas.vercel.app",
    image: "/proyecto1.jpg",
  },
  {
    title: "GraFyApi — Graficador de Cálculo Multivariable",
    description:
      "Aplicación web interactiva para la visualización de funciones matemáticas en 3D. Permite explorar superficies como paraboloides, ondas y funciones personalizadas en tiempo real, facilitando el análisis del cálculo multivariable de forma visual e intuitiva.",
    github: "https://github.com/williamInzandara/GraFyApi.git",
    demo: "https://gra-fy-api-tqxf.vercel.app",
    image: "/proyecto2.jpg",
  },
  {
    title: "Casa Segura — Sistema de Monitoreo con Cámaras",
    description:
      "Aplicación desarrollada en Flutter orientada a la seguridad del hogar mediante monitoreo de cámaras y sistema de notificaciones inteligentes. Detecta objetos o posibles intrusos y envía alertas en tiempo real al usuario.",
    github: "https://github.com/williamInzandara/casa_segura.git",
    demo: "https://casa-segura-uteg.vercel.app",
    image: "/proyecto3.jpg",
  },
]

export function Projects() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="proyectos" className="bg-card py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">


        <h2 className="mb-10 text-3xl md:text-4xl font-bold text-center text-foreground">
          {t.projects.sectionLabel}
        </h2>

        <div className="flex flex-col gap-6">
          {projectData.map((project, index) => (
            <article
              key={index}
              className="flex flex-col md:flex-row gap-6 rounded-[8px] border border-primary/35 bg-secondary/20 p-4 md:p-6"
            >

             
              <div
                onClick={() => setSelectedImage(project.image)}
                className="relative w-full md:w-[280px] h-[200px] md:h-[180px] flex-shrink-0 overflow-hidden rounded-md bg-black/20 cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

            
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-black text-foreground sm:text-2xl md:text-3xl">
                  {project.title}
                </h3>

                <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {project.description}
                </p>

                <div className="h-px w-full bg-primary/35" />

                {/* LINKS */}
                <div className="mt-4 flex flex-wrap items-center gap-2 text-primary">

                  {/* GITHUB */}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600/95 hover:text-cyan-700"
                  >
                    <Github className="h-4 w-4" />
                    <span className="break-all font-mono">
                      {project.github.replace("https://", "")}
                    </span>
                  </Link>

                  {/* DEMO */}
                  {project.demo && (
                    <>
                      <span className="text-primary/65">|</span>
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600/95 hover:text-cyan-700"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="font-mono">
                          {project.demo.replace("https://", "")}
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>


      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-[80vh] px-4">
            
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-50 text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <Image
              src={selectedImage}
              alt="preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}