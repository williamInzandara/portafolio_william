const languages = [
  {
    name: "JavaScript",
    description: "Desarrollo frontend dinámico, manipulación del DOM, APIs y lógica de negocio.",
    color: "#e8ce25",
  },
  {
    name: "TypeScript",
    description: "Superset de JS con tipado estático. Reduce errores y mejora la mantenibilidad.",
    color: "#4f90d7",
  },
  {
    name: "HTML",
    description: "Estructura semántica de páginas accesibles y bien estructuradas.",
    color: "#ef623d",
  },
  {
    name: "CSS",
    description: "Estilos modernos, animaciones, layouts con Flexbox/Grid y Tailwind CSS.",
    color: "#3787cd",
  },
  {
    name: "Python",
    description: "Scripts, automatización, análisis de datos y configuración de backends.",
    color: "#4c89be",
  },
  {
    name: "Java",
    description: "Programación orientada a objetos, Spring Boot, JPA y servicios REST.",
    color: "#f1a22e",
  },
]

export function Languages() {
  return (
    <section id="lenguajes" className="bg-background py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1220px] px-4 md:px-6">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.24em] text-primary md:mb-10">
          | Lenguajes
        </p>

        <h2 className="text-3xl font-black uppercase tracking-[0.03em] text-foreground sm:text-4xl md:text-6xl">
          Mis Lenguajes
        </h2>
        <div className="mb-9 mt-3 h-[4px] w-16 rounded-full bg-primary" />

        <div className="rounded-[10px] border border-primary/35 bg-secondary/20 p-5 md:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {languages.map((lang) => (
              <article
                key={lang.name}
                className="rounded-[8px] border border-primary/30 bg-card px-4 py-4"
              >
                <div className="mb-3 h-3 w-3 rounded-full" style={{ backgroundColor: lang.color }} />
                <h3 className="mb-2 text-2xl font-bold leading-none text-foreground md:text-[34px]">{lang.name}</h3>
                <p className="text-sm leading-[1.45] text-muted-foreground md:min-h-[74px] md:text-[22px]">{lang.description}</p>
                <div className="mt-3 h-[4px] w-[88%] rounded-full" style={{ backgroundColor: lang.color }} />
              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
