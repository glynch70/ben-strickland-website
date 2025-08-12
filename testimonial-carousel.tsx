"use client"

import { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  image: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return (
    <>
      {/* Desktop Grid (2x2) */}
      <div className="hidden md:grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="bg-black/60 border border-[#05ABC4]/30 hover:shadow-lg hover:shadow-[#05ABC4]/20 transition-all hover-glow"
          >
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#05ABC4] text-[#05ABC4]" />
                ))}
              </div>
              <p className="text-gray-50 mb-6 text-base leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.name}, ${testimonial.title}`}
                  className="w-20 h-20 rounded-full mr-4 object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-50">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                  {testimonial.company && <p className="text-xs text-gray-500">{testimonial.company}</p>}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonials.map((testimonial, index) => (
              <div className="embla__slide" key={index}>
                <Card className="bg-black/60 border border-[#05ABC4]/30 hover:shadow-lg hover:shadow-[#05ABC4]/20 transition-all mx-2 hover-glow">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#05ABC4] text-[#05ABC4]" />
                      ))}
                    </div>
                    <p className="text-gray-50 mb-6 text-base leading-relaxed">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`${testimonial.name}, ${testimonial.title}`}
                        className="w-20 h-20 rounded-full mr-4 object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-semibold text-gray-50">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.title}</p>
                        {testimonial.company && <p className="text-xs text-gray-500">{testimonial.company}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${index === selectedIndex ? "bg-[#05ABC4]" : "bg-gray-600"}`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  )
}
