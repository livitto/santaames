"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryPhotos = [
  {
    image: "/images/hero-1.jpg",
    caption: "Santa Dave bringing holiday magic to downtown Ames with his majestic sleigh and reindeer",
  },
  {
    image: "/images/hero-2.jpg",
    caption: "Creating precious memories with children, one snowball fight at a time",
  },
  {
    image: "/images/hero-3.jpg",
    caption: "Warm moments with families in the comfort of their homes during the holiday season",
  },
  {
    image: "/images/hero-4.jpg",
    caption: "Ready to welcome children with open arms and a heart full of Christmas spirit",
  },
  {
    image: "/images/hero-5.jpg",
    caption: "Sharing laughter and joy with families - the true essence of Christmas",
  },
  {
    image: "/santa-at-corporate-event.jpg",
    caption: "Bringing festive cheer to corporate events and making every celebration memorable",
  },
  {
    image: "/santa-with-children-at-school.jpg",
    caption: "Visiting schools and spreading the magic of Christmas to young hearts",
  },
  {
    image: "/santa-at-nursing-home.jpg",
    caption: "Brightening the holidays for seniors at nursing homes with stories and smiles",
  },
  {
    image: "/santa-reading-letters.jpg",
    caption: "Every child's wish is heard - reading letters and making dreams come true",
  },
  {
    image: "/santa-with-pets.jpg",
    caption: "Even our furry friends get to meet Santa and share in the holiday joy",
  },
  {
    image: "/santa-at-community-event.jpg",
    caption: "A proud member of the Ames community, celebrating together year after year",
  },
  {
    image: "/santa-waving-goodbye.jpg",
    caption: "Until next year - keeping the spirit of Christmas alive in every heart",
  },
]

export function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryPhotos.length)
      setProgress(0)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0)
      return
    }

    setProgress(0)
    const startTime = Date.now()
    const duration = 4000

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (newProgress >= 100) {
        clearInterval(progressInterval)
      }
    }, 16) // ~60fps

    return () => clearInterval(progressInterval)
  }, [currentIndex, isAutoPlaying])

  const handleManualNavigation = (callback: () => void) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }

    setIsAutoPlaying(false)

    callback()

    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 6000)
  }

  const goToPrevious = () => {
    handleManualNavigation(() => {
      setCurrentIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length)
    })
  }

  const goToNext = () => {
    handleManualNavigation(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryPhotos.length)
    })
  }

  const goToSlide = (index: number) => {
    handleManualNavigation(() => {
      setCurrentIndex(index)
    })
  }

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-[#FFF8F0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Moments of Magic</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing the joy and wonder of celebrations
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Slider */}
          <div className="relative group">
            {/* Image Container */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFD700]">
              <img
                src={galleryPhotos[currentIndex].image || "/placeholder.svg"}
                alt={galleryPhotos[currentIndex].caption}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#B71C1C] rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#B71C1C] rounded-full w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentIndex + 1} / {galleryPhotos.length}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
                <div
                  className="h-full bg-[#FFD700] transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-lg md:text-xl text-foreground/80 italic font-serif max-w-3xl mx-auto leading-relaxed">
                "{galleryPhotos[currentIndex].caption}"
              </p>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {galleryPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex ? "w-8 h-3 bg-[#B71C1C]" : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
