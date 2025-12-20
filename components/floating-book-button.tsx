"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function FloatingBookButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    const visibleSections = new Set<string>()

    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id
          if (entry.isIntersecting) {
            visibleSections.add(sectionId)
          } else {
            visibleSections.delete(sectionId)
          }
        })

        // Hide button if any excluded section is visible
        const shouldHide = visibleSections.size > 0
        setIsVisible(!shouldHide)
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      },
    )

    const heroSection = document.getElementById("home")
    const bookingSection = document.getElementById("booking")
    const magicVideoSection = document.getElementById("magic-video")
    const downloadsSection = document.getElementById("downloads")
    const footerSection = document.getElementById("contact")

    if (heroSection) observer.observe(heroSection)
    if (bookingSection) observer.observe(bookingSection)
    if (magicVideoSection) observer.observe(magicVideoSection)
    if (downloadsSection) observer.observe(downloadsSection)
    if (footerSection) observer.observe(footerSection)

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
      clearTimeout(scrollTimeout)
    }
  }, [])

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button
      onClick={scrollToBooking}
      className={`
        fixed bottom-4 right-4 z-50
        lg:hidden
        bg-[#B71C1C] hover:bg-[#8B0000] text-white
        shadow-2xl hover:shadow-3xl
        px-4 py-3 rounded-full
        font-bold text-sm
        border-2 border-[#FFD700]
        transition-all duration-300
        ${isVisible && !isScrolling ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}
      `}
      aria-label="Book Santa Dave"
    >
      <Calendar className="w-4 h-4 mr-1.5" />
      Book Now
    </Button>
  )
}
