"use client"

import { GraduationCap, Code2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          {t.experience.title}
        </h2>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Academic Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t.experience.academic}</h3>
            </div>

            <div className="space-y-6">
              {t.experience.academicItems.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-primary font-mono mb-1">
                    {item.period} | {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

   
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t.experience.projects}</h3>
            </div>

            <div className="space-y-6">
              {t.experience.projectItems.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-primary font-mono mb-1">{item.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
