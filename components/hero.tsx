"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { SnowEffect } from "@/components/snow-effect"

const carouselImages = [
  { src: "/images/hero-1.jpg", alt: "Santa Dave in sleigh with reindeer in downtown Ames" },
  { src: "/images/hero-2.jpg", alt: "Santa Dave with child having snowball fun" },
  { src: "/images/hero-3.jpg", alt: "Santa Dave with child in cozy home setting" },
  { src: "/images/hero-4.jpg", alt: "Santa Dave in traditional setting with Christmas tree" },
  { src: "/images/hero-5.jpg", alt: "Santa Dave with family in fun candid moment" },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-end justify-center overflow-hidden">
      <SnowEffect containerRef={heroRef} />

      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white pb-28 pl-4">
        <div className="inline-flex items-center gap-2 bg-[#FFD700] text-[#B71C1C] px-4 py-2 rounded-full mb-6 font-bold text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Santa for All Seasons</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
          Santaames
        </h1>

        <p className="text-lg md:text-xl mb-8 text-balance max-w-3xl mx-auto opacity-90">
          Vetted &amp; Security Checked • Trusted by Ames Families Since 2004
        </p>

        <Button
          size="lg"
          onClick={scrollToBooking}
          className="bg-[#B71C1C] hover:bg-[#8B0000] text-white text-lg px-8 py-6 rounded-full shadow-2xl border-2 border-[#FFD700] font-bold"
        >
          Book Santaames
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent z-10 h-24" />
    </section>
  )
}
