import { GraduationCap, Code2 } from "lucide-react"

const academicExperience = [
  {
    title: "Ingeniería en Software",
    period: "2022 - 2026",
    institution: "Universidad",
    description: "Formación en desarrollo de software, estructuras de datos, bases de datos, redes y diseño de sistemas.",
  },
]

const projectExperience = [
  {
    title: "Proyectos universitarios",
    period: "2022 - 2026",
    description: "Desarrollo de aplicaciones y sistemas como parte de la carrera: lógica de negocio, gestión de datos y diseño de interfaces.",
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="py-20 bg-background">
      <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          EXPERIENCIA
        </h2>
        
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Academic Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Académica</h3>
            </div>
            
            <div className="space-y-6">
              {academicExperience.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-primary font-mono mb-1">
                    {item.period} | {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Proyectos</h3>
            </div>
            
            <div className="space-y-6">
              {projectExperience.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-primary font-mono mb-1">
                    {item.period} | {item.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
