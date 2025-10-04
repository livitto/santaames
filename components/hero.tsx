"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const carouselImages = [
  { src: "/images/santa-fireplace.jpg", alt: "Santa Dave by the fireplace" },
  { src: "/images/santa-with-elf-mrs-claus.jpg", alt: "Santa Dave with elf and Mrs. Claus" },
  { src: "/images/santa-and-mrs-claus.jpg", alt: "Santa Dave and Mrs. Claus" },
  { src: "/images/santa-with-baby.jpg", alt: "Santa Dave with baby" },
  { src: "/images/santa-with-group.jpg", alt: "Santa Dave with group" },
  { src: "/images/santa-with-child.jpg", alt: "Santa Dave with child" },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
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

      {/* Carousel Controls */}
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

      {/* Carousel Indicators */}
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

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-[#FFD700] text-[#B71C1C] px-4 py-2 rounded-full mb-6 font-bold text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Two Generations of Christmas Magic</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
          Santa Ames <span className="text-[#FFD700]">with Dave</span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-balance max-w-4xl mx-auto leading-relaxed">
          Creating Memories for 56+ Years
        </p>

        <p className="text-lg md:text-xl mb-8 text-balance max-w-3xl mx-auto opacity-90">
          Vetted & Security Checked • Trusted by Ames Families Since 1969
        </p>

        <Button
          size="lg"
          onClick={scrollToBooking}
          className="bg-[#B71C1C] hover:bg-[#8B0000] text-white text-lg px-8 py-6 rounded-full shadow-2xl border-2 border-[#FFD700] font-bold"
        >
          Book Santa Dave
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
