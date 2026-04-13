"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const hobbyImages = [
  "/hobi1.jpg",
  "/hobi2.jpg",
  "/hobi3.jpg",
]

export function Hobbies() {
  const { t } = useLanguage()
  const hobbies = t.hobbies.items

  const [expandedImage, setExpandedImage] = useState<string | null>(null)

  return (
    <section id="hobbies" className="bg-background py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">

       <h2 className="mb-10 text-center text-3xl font-black text-foreground md:text-5xl">
          {t.hobbies.sectionTitle}
        </h2>

        <div className="overflow-hidden rounded-[8px] border border-primary/35 bg-secondary/20">
          {hobbies.map((hobby, index) => (
            <article
              key={hobby.title}
              className={`grid min-h-[236px] grid-cols-1 bg-secondary/20 md:min-h-[250px] ${
                index !== hobbies.length - 1 ? "border-b border-primary/25" : ""
              } ${index % 2 === 1 ? "md:grid-cols-[230px_1fr]" : "md:grid-cols-[1fr_230px]"}`}
            >

              
              <div className={`p-5 md:p-7 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <h3 className="mb-2 text-xl font-black text-foreground sm:text-2xl md:text-[40px]">
                  {hobby.title}
                </h3>

                <p className="max-w-5xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-[22px]">
                  {hobby.description}
                </p>
              </div>

              {/* IMAGEN */}
              <div
                className={`relative cursor-pointer border-primary/25 bg-card/30 ${
                  index % 2 === 1 ? "md:order-1 md:border-r" : "md:order-2 md:border-l"
                }`}
                onClick={() => setExpandedImage(hobbyImages[index])}
              >
                <div className="relative h-full min-h-[170px] w-full md:min-h-[140px]">
                  <Image
                    src={hobbyImages[index]}
                    alt={hobby.title}
                    fill
                    className="object-cover hover:scale-105 transition"
                  />
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setExpandedImage(null)}
        >
          <button
            onClick={() => setExpandedImage(null)}
            className="absolute right-4 top-4 h-10 w-10 flex items-center justify-center rounded-md border border-white/25 bg-black/40 text-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-md border border-white/20 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={expandedImage}
              alt="preview"
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