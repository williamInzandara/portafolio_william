"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Phone, Linkedin, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const contactInfo = [
  { icon: Github, label: "github.com/williaminzandara", href: "https://github.com/williaminzandara" },
  { icon: Mail, label: "inzandaralagoswilliamdario@gmail.com", href: "mailto:inzandaralagoswilliamdario@gmail.com" },
  { icon: Phone, label: "+57 316 388 6760", href: "tel:+573163886760" },
  { icon: Linkedin, label: "https://www.linkedin.com/in/william-inzandara-336048403/", href: "https://www.linkedin.com/in/william-inzandara-336048403/" },
]

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert(t.contact.successMsg)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contacto" className="py-20 bg-card">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          {t.contact.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12">{t.contact.subtitle}</p>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <Card className="bg-background border-border">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.nameLbl}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-card border-border"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.emailLbl}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-card border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.messageLbl}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-card border-border resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t.contact.sendBtn}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center space-y-4">
            {contactInfo.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="break-all text-muted-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
