"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryPhotos = [
  {
    image: "/images/gallery-2.jpg",
    caption: "Special one-on-one time with each child, making every visit personal and memorable",
  },
  {
    image: "/images/gallery-3.jpg",
    caption: "Santa Dave in his finest traditional suit, ready to bring Christmas magic to your event",
  },
  {
    image: "/images/gallery-4.jpg",
    caption: "Bringing festive cheer to community events and spreading holiday joy throughout Ames",
  },
  {
    image: "/images/gallery-5.jpg",
    caption: "Tender moments with the youngest visitors - even newborns get to meet Santa",
  },
  {
    image: "/images/gallery-6.jpg",
    caption: "Outdoor holiday celebrations with illuminated displays and festive decorations",
  },
  {
    image: "/images/gallery-7.jpg",
    caption: "Professional Santa appearances with authentic costume and traditional sleigh bells",
  },
  {
    image: "/images/gallery-8.jpg",
    caption: "Magical Christmas moments captured - holding the light of the season",
  },
  {
    image: "/images/gallery-santa-boy-globe.jpg",
    caption: "Sharing the magic of Christmas with wonder-filled moments and enchanted ornaments",
  },
  {
    image: "/images/gallery-santa-twins.jpg",
    caption: "Double the joy - creating precious memories with the littlest visitors",
  },
  {
    image: "/images/gallery-santa-list.jpg",
    caption: "Carefully reviewing the nice list in Santa's cozy workshop setting",
  },
  {
    image: "/images/gallery-santa-winter-wonderland.jpg",
    caption: "Santa Dave in his elegant winter wonderland setting, bringing timeless Christmas charm",
  },
  {
    image: "/images/gallery-santa-boy-conversation.jpg",
    caption: "Heart-to-heart conversations about Christmas wishes and holiday dreams",
  },
  {
    image: "/images/gallery-santa-baby.jpg",
    caption: "Gentle moments with infants - creating first Christmas memories that last forever",
  },
  {
    image: "/images/gallery-santa-portrait.jpg",
    caption: "Classic Santa portrait showcasing the authentic traditional look and warm personality",
  },
  {
    image: "/images/gallery-santa-darth-vader.jpg",
    caption: "Fun and memorable moments - Santa brings joy to fans of all ages and interests",
  },
  {
    image: "/images/gallery-santa-thumbs-up.jpg",
    caption: "Ready to make your holiday event spectacular with professional Santa services",
  },
  {
    image: "/images/gallery-santa-storytime.jpg",
    caption: "Captivating young audiences with Christmas stories and creating group memories",
  },
  {
    image: "/images/gallery-santa-family-pajamas.jpg",
    caption: "Warm family moments in Santa's cozy workshop - creating cherished memories together",
  },
  {
    image: "/images/gallery-10.jpg",
    caption: "Working with Santa's helpers to create unforgettable holiday experiences",
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
    <section id="gallery" className="py-20 bg-white">
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
                className="w-full h-full object-cover object-[center_20%] transition-opacity duration-500"
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
