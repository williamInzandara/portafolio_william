import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, User } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden md:border-x md:border-primary/35 bg-[radial-gradient(circle_at_24%_58%,rgba(123,97,255,0.18),transparent_30%),radial-gradient(circle_at_57%_43%,rgba(255,255,255,0.9),transparent_45%),linear-gradient(104deg,#f2eff9_0%,#eff2fa_100%)] pt-20 md:pt-24">
      <div className="mx-auto w-full max-w-[1220px] px-4 pb-12 pt-12 md:pb-14 md:pt-16">
        <div className="grid items-center gap-8 md:gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1 md:pl-6">
            <div className="mx-auto mt-2 flex h-[190px] w-[190px] items-center justify-center rounded-full border-[3px] border-primary/75 bg-background/45 shadow-[0_0_70px_rgba(124,104,255,0.25)] sm:h-[220px] sm:w-[220px] md:mx-0 md:mt-16 md:h-[265px] md:w-[265px]">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <User className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11" strokeWidth={1.8} />
                <span className="text-sm tracking-[0.08em] sm:text-base md:text-[20px]">MI FOTO</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-4 font-mono text-sm text-cyan-600/85 md:text-base">{"// Full Stack Developer"}</p>
            <h1 className="mb-5 text-4xl font-black leading-[0.97] text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
              <span>Hola, soy</span>
              <br />
              <span className="text-primary">William</span>
              <br />
              <span className="text-primary">Darío</span>
              <br />
              <span className="text-primary">Inzandara</span>
              <br />
              <span className="text-primary">Lagos</span>
            </h1>
            <p className="mb-8 max-w-[690px] text-base leading-relaxed text-muted-foreground md:text-lg">
              Desarrollador apasionado por crear interfaces modernas y sistemas robustos.
              Especializado en Next.js, TypeScript y Flutter.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="h-10 w-full rounded-[4px] bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:h-11 sm:w-auto sm:px-8 sm:text-base">
                <Link href="#contacto">Contactarme</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="h-10 w-full rounded-[4px] border-primary/55 bg-background/30 px-6 text-sm font-semibold text-foreground/90 hover:bg-background/45 sm:h-11 sm:w-auto sm:px-8 sm:text-base"
              >
                <Link href="#proyectos">Ver proyectos</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="h-10 w-full rounded-[4px] border-primary/55 bg-background/30 px-6 text-sm font-semibold text-primary hover:bg-background/45 sm:h-11 sm:w-auto sm:px-8 sm:text-base"
              >
                <Link href="/cv-william-inzandara.pdf" target="_blank">
                  <Download className="h-5 w-5" />
                  Descargar CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
