"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden md:border-x md:border-primary/35 hero-gradient pt-20 md:pt-24">
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-12 md:pb-14 md:pt-16">

        <div className="grid items-center gap-8 md:grid-cols-2">

          {/* FOTO SOLO DESKTOP */}
          <div className="hidden md:flex justify-center md:justify-start md:pl-6">
            <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 overflow-hidden rounded-full border-4 border-primary/75 shadow-lg">
              <Image
                src="/foto-perfil-william.jpg"
                alt="William Inzandara"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className="text-center md:text-left">

            {/* ROLE */}
            <p className="mb-4 font-mono text-sm text-cyan-600/85 md:text-base">
              {t.hero.role}
            </p>

            {/* FOTO SOLO MOBILE */}
            <div className="flex justify-center mb-6 md:hidden">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/75 shadow-lg">
                <Image
                  src="/foto-perfil-william.jpg"
                  alt="William Inzandara"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* TITULO */}
            <h1 className="mb-5 text-4xl font-black leading-[0.97] text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
              <span>{t.hero.greeting}</span>
              <br />
              <span className="text-primary">William</span>
              <br />
              <span className="text-primary">Darío</span>
              <br />
              <span className="text-primary">Inzandara</span>
              <br />
              <span className="text-primary">Lagos</span>
            </h1>

            {/* DESCRIPCIÓN */}
            <p className="mb-8 max-w-[690px] mx-auto md:mx-0 text-[16px] md:text-lg text-muted-foreground">
              {t.hero.description}
            </p>

            {/* BOTONES */}
            <div className="flex justify-center md:justify-start gap-2 flex-nowrap overflow-x-auto">

              <Button
                asChild
                className="h-9 md:h-11 px-4 md:px-8 text-xs md:text-base whitespace-nowrap"
              >
                <Link href="#contacto">
                  {t.hero.contactBtn}
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="h-9 md:h-11 px-4 md:px-8 text-xs md:text-base whitespace-nowrap"
              >
                <Link href="#proyectos">
                  {t.hero.projectsBtn}
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="h-9 md:h-11 px-4 md:px-8 text-xs md:text-base whitespace-nowrap"
              >
                <Link href="/cv-william-inzandara.pdf" target="_blank">
                  <span className="flex items-center gap-2">
                    <Download className="h-4 w-4 md:h-5 md:w-5" />
                    {t.hero.cvBtn}
                  </span>
                </Link>
              </Button>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}