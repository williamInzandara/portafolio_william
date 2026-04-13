"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const hobbyImages = [
  ["/placeholder.jpg", "/placeholder-user.jpg", "/placeholder-logo.png"],
  ["/placeholder-user.jpg", "/placeholder.jpg", "/placeholder-logo.png"],
  ["/placeholder-logo.png", "/placeholder.jpg", "/placeholder-user.jpg"],
]

export function Hobbies() {
  const { t } = useLanguage()
  const hobbies = t.hobbies.items

  const [currentImages, setCurrentImages] = useState(() => hobbies.map(() => 0))
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null)

  const changeImage = (hobbyIndex: number, direction: "prev" | "next") => {
    setCurrentImages((prev) => {
      const next = [...prev]
      const totalImages = hobbyImages[hobbyIndex].length
      const delta = direction === "next" ? 1 : -1
      next[hobbyIndex] = (next[hobbyIndex] + delta + totalImages) % totalImages
      return next
    })
  }

  return (
    <section id="hobbies" className="bg-background py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <p className="mb-6 text-2xl text-primary md:text-3xl">{t.hobbies.sectionTitle}</p>

        <div className="overflow-hidden rounded-[8px] border border-primary/35 bg-secondary/20">
          {hobbies.map((hobby, index) => (
            <article
              key={hobby.title}
              className={`grid min-h-[236px] grid-cols-1 bg-secondary/20 md:min-h-[250px] ${
                index !== hobbies.length - 1 ? "border-b border-primary/25" : ""
              } ${index % 2 === 1 ? "md:grid-cols-[230px_1fr]" : "md:grid-cols-[1fr_230px]"}`}
            >
              <div className={`p-5 md:p-7 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <h3 className="mb-2 text-xl font-black text-foreground sm:text-2xl md:text-[40px]">{hobby.title}</h3>
                <p className="max-w-5xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-[22px]">
                  {hobby.description}
                </p>
              </div>

              <div
                className={`grid grid-rows-[1fr_auto] border-primary/25 bg-card/30 ${
                  index % 2 === 1 ? "md:order-1 md:border-r" : "md:order-2 md:border-l"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setExpandedImage({
                      src: hobbyImages[index][currentImages[index]],
                      alt: `${hobby.title} imagen ${currentImages[index] + 1}`,
                    })
                  }
                  aria-label={`${t.hobbies.expandImage} ${hobby.title}`}
                  className="relative min-h-[170px] w-full cursor-zoom-in md:min-h-[140px]"
                >
                  <Image
                    src={hobbyImages[index][currentImages[index]]}
                    alt={`${hobby.title} imagen ${currentImages[index] + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>

                <div className="flex items-center justify-between border-t border-primary/25 px-2 py-2">
                  <button
                    type="button"
                    onClick={() => changeImage(index, "prev")}
                    aria-label={`${t.hobbies.prevImage} ${hobby.title}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] border border-primary/35 bg-background text-primary transition-colors hover:bg-background/80"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => changeImage(index, "next")}
                    aria-label={`${t.hobbies.nextImage} ${hobby.title}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-[4px] border border-primary/35 bg-background text-primary transition-colors hover:bg-background/80"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {expandedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setExpandedImage(null)}
          role="presentation"
        >
          <button
            type="button"
            onClick={() => setExpandedImage(null)}
            aria-label={t.hobbies.closeImage}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 bg-black/40 text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-md border border-white/20 bg-black"
            onClick={(event) => event.stopPropagation()}
            role="presentation"
          >
            <Image
              src={expandedImage.src}
              alt={expandedImage.alt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  )
}
