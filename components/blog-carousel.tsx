"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentIndex(index % blogPosts.length)
    setIsAutoPlay(false)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length)
    setIsAutoPlay(false)
  }

  const currentPost = blogPosts[currentIndex]

  return (
    <section id="stories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#B71C1C] text-white px-4 py-2 rounded-full mb-4 font-bold text-sm">
            <span>📖</span>
            Stories
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Stories of Santaames</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tales from decades of spreading Christmas joy and magic across America
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#FFD700] transition-all duration-300 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto md:h-96 overflow-hidden bg-gray-100">
                <img
                  src={currentPost.image || "/placeholder.svg"}
                  alt={currentPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#B71C1C] text-white px-3 py-1 rounded-full text-xs font-bold">
                  {currentIndex + 1} / {blogPosts.length}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-3">{currentPost.date}</p>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#B71C1C] mb-4">{currentPost.title}</h3>
                  <p className="text-gray-700 line-clamp-4 leading-relaxed">{currentPost.excerpt}</p>
                </div>

                <Button
                  onClick={() => window.open(`/blog/${currentPost.id}`, "_blank")}
                  className="w-full bg-[#B71C1C] hover:bg-[#8B0000] text-white font-bold mt-6 gap-2"
                >
                  Read Full Story
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 bg-[#B71C1C] hover:bg-[#8B0000] text-white p-3 rounded-full transition-all"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 bg-[#B71C1C] hover:bg-[#8B0000] text-white p-3 rounded-full transition-all"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {blogPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#B71C1C] w-8" : "bg-gray-300 w-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play toggle */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-sm text-gray-600 hover:text-[#B71C1C] transition-colors font-medium"
          >
            {isAutoPlay ? "⏸ Pause" : "▶ Play"} Auto-play
          </button>
        </div>
      </div>
    </section>
  )
}
