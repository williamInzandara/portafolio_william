"use client"

import { Github, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function AboutMe() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="bg-card py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">

        <h2 className="mb-10 text-3xl md:text-4xl font-bold text-center text-foreground">
        {t.aboutMe.sectionLabel}
        </h2>

        <div className="grid items-center gap-8 md:grid-cols-[200px_1fr] md:gap-10">

          <div className="mx-auto md:mx-0">
            <div className="relative h-[300px] w-[200px] overflow-hidden rounded-lg border-3 border-primary/40 shadow-md">
              <Image
                src="/foto2-perfil-william.jpg"
                alt="William Inzandara"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXTO */}
          <div>
            <h2 className="mb-2 text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-5xl">
              William Darío Inzandara Lagos
            </h2>

            <p className="mb-4 font-mono text-sm text-cyan-600/85 sm:text-base md:text-[22px]">
              {t.aboutMe.jobTitle}
            </p>

            {/* BOTONES */}
            <div className="mb-5 flex flex-wrap gap-2">
              <Link
                href="https://github.com/williaminzandara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-md border border-primary/35 bg-background px-4 text-sm font-semibold text-foreground/90 transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>

              <Link
                href="mailto:inzandaralagoswilliamdario@gmail.com"
                className="inline-flex h-9 items-center gap-1.5 rounded-md border border-primary/35 bg-background px-4 text-sm font-semibold text-foreground/90 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>Gmail</span>
              </Link>

              <Link
                href="https://wa.me/573163886760"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-md border border-primary/35 bg-background px-4 text-sm font-semibold text-foreground/90 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </Link>
            </div>

            <p className="max-w-4xl text-base leading-relaxed text-muted-foreground md:text-lg">
              <span className="font-semibold text-foreground">
                {t.aboutMe.aboutLabel}
              </span>{" "}
              {t.aboutMe.aboutText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}