"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Lenguajes", href: "#lenguajes" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/35 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto w-full max-w-[1220px] px-4 py-2.5 md:py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="max-w-[82%] truncate text-sm font-black uppercase tracking-[0.05em] text-primary leading-none sm:text-base md:max-w-none md:text-[24px] md:tracking-[0.08em]"
          >
            WILLIAM INZANDARA
          </Link>

          <ul className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex h-8 items-center rounded-[4px] border border-primary/35 bg-card px-4 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <ul className="md:hidden mt-3 max-h-[70vh] space-y-2 overflow-y-auto pb-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-[4px] border border-primary/35 bg-card px-3 py-2 text-foreground/80 transition-colors hover:text-primary"
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
