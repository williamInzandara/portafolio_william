"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()

  const navItems = [
    { label: t.nav.sobreMi, href: "#sobre-mi" },
    { label: t.nav.lenguajes, href: "#lenguajes" },
    { label: t.nav.proyectos, href: "#proyectos" },
    { label: t.nav.hobbies, href: "#intereses" },
    { label: t.nav.testimonios, href: "#testimonios" },
    { label: t.nav.experiencia, href: "#experiencia" },
    { label: t.nav.contacto, href: "#contacto" },
  ]

  const toggleLang = () => setLang(lang === "es" ? "en" : "es")
  const ThemeIcon = theme === "dark" ? Sun : Moon
  const langLabel = lang === "es" ? "EN" : "ES"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/35 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto w-full max-w-6xl px-4 py-3">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="text-lg font-bold whitespace-nowrap"
          >
            William Inzandara
          </Link>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-3">

            <ul className="flex items-center gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center h-9 px-4 rounded-md border border-primary/35 bg-card text-sm text-foreground/80 transition-colors hover:text-primary whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-5 w-px bg-primary/25" />

            {/* THEME */}
            <button
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary/35 bg-card text-foreground/80 hover:text-primary"
            >
              <ThemeIcon className="h-4 w-4" />
            </button>

            {/* LANG */}
            <button
              onClick={toggleLang}
              className="inline-flex h-9 px-3 items-center justify-center rounded-md border border-primary/35 bg-card text-sm font-semibold text-foreground/80 hover:text-primary whitespace-nowrap"
            >
              {langLabel}
            </button>

          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-2">

            <button
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary/35 bg-card text-foreground/80 hover:text-primary"
            >
              <ThemeIcon className="h-4 w-4" />
            </button>

            <button
              onClick={toggleLang}
              className="inline-flex h-9 px-3 items-center justify-center rounded-md border border-primary/35 bg-card text-sm font-semibold text-foreground/80 hover:text-primary"
            >
              {langLabel}
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <ul className="md:hidden mt-3 space-y-2 pb-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 rounded-md border border-primary/35 bg-card text-foreground/80 hover:text-primary whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

      </nav>
    </header>
  )
}