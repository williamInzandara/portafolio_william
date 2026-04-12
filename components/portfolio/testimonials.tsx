"use client"

import Image from "next/image"
import { FormEvent, useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Quote } from "lucide-react"

type Testimonial = {
  quote: string
  name: string
  role: string
  image?: string
}

const initialTestimonials: Testimonial[] = [
  {
    quote: "Excelente desarrollador, muy comprometido con los proyectos. Su capacidad para resolver problemas complejos y su atención al detalle son impresionantes.",
    name: "Juan Díaz",
    role: "Developer TechCorp",
    image: "/testimonial-1.jpg",
  },
  {
    quote: "Trabajar con él fue una experiencia increíble. Entrega código limpio, bien documentado y siempre dentro de los plazos acordados.",
    name: "María López",
    role: "Project Manager StartupX",
    image: "/testimonial-2.jpg",
  },
  {
    quote: "Su dominio de Next.js y TypeScript es sobresaliente. Además, tiene excelentes habilidades de comunicación y trabajo en equipo.",
    name: "Carlos Ruiz",
    role: "CTO DevAgency",
    image: "/testimonial-3.jpg",
  },
]

const STORAGE_KEY = "portfolio-user-testimonials"

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [form, setForm] = useState({ name: "", role: "", quote: "" })

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      return
    }

    try {
      const parsed = JSON.parse(saved) as Testimonial[]
      if (Array.isArray(parsed) && parsed.length > 0) {
        setTestimonials(parsed)
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(testimonials))
  }, [testimonials])

  const handleAddTestimonial = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const name = form.name.trim()
    const role = form.role.trim()
    const quote = form.quote.trim()

    if (!name || !role || !quote) {
      return
    }

    const newItem: Testimonial = { name, role, quote }
    setTestimonials((prev) => [newItem, ...prev])
    setForm({ name: "", role: "", quote: "" })
    setIsDialogOpen(false)
  }

  return (
    <section id="testimonios" className="py-20 bg-card">
      <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">TESTIMONIOS</h2>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="inline-flex w-full sm:w-auto items-center gap-2">
                <Plus className="h-4 w-4" />
                Agregar testimonio
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Agregar un testimonio</DialogTitle>
                <DialogDescription>
                  Comparte tu experiencia para que aparezca en esta sección.
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-4" onSubmit={handleAddTestimonial}>
                <div className="space-y-2">
                  <label htmlFor="testimonial-name" className="text-sm font-medium text-foreground">
                    Nombre
                  </label>
                  <Input
                    id="testimonial-name"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="testimonial-role" className="text-sm font-medium text-foreground">
                    Cargo o relación
                  </label>
                  <Input
                    id="testimonial-role"
                    placeholder="Ej. CTO en Empresa X"
                    value={form.role}
                    onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="testimonial-quote" className="text-sm font-medium text-foreground">
                    Testimonio
                  </label>
                  <Textarea
                    id="testimonial-quote"
                    placeholder="Escribe aquí tu comentario"
                    value={form.quote}
                    onChange={(event) => setForm((prev) => ({ ...prev, quote: event.target.value }))}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Publicar testimonio
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary/20 text-sm font-bold text-primary">
                        {getInitials(testimonial.name)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
