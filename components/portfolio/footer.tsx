"use client"

import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* NOMBRE COMPLETO */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold sm:text-xl">
              William Darío Inzandara Lagos
            </h3>
          </div>

          {/* BOTÓN VOLVER ARRIBA */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
            <span>{t.footer.backToTop}</span>
          </button>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/70">
            © {new Date().getFullYear()} William Darío Inzandara Lagos
          </p>
        </div>

      </div>
    </footer>
  )
}