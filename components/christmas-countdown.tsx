"use client"

import { useEffect, useState } from "react"
import { Gift, Video } from "lucide-react"
import { useMobileMenu } from "@/lib/mobile-menu-context"

export function ChristmasCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isHeroInView, setIsHeroInView] = useState(true)
  const { isMenuOpen } = useMobileMenu()

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const christmas = new Date(currentYear, 11, 25)

      if (now > christmas) {
        christmas.setFullYear(currentYear + 1)
      }

      const difference = christmas.getTime() - now.getTime()

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const heroSection = document.querySelector("section")

    if (!heroSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHeroInView(entry.isIntersecting)
        })
      },
      {
        threshold: 0.3, // Show when 30% of hero is visible
        rootMargin: "0px",
      },
    )

    observer.observe(heroSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      className={`fixed top-20 right-2 md:right-4 z-[100] bg-[#B71C1C] text-white px-2 py-2 md:px-4 md:py-3 rounded-lg shadow-lg border-2 border-[#FFD700] transition-opacity duration-200 ${
        isHeroInView && !isMenuOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center gap-1 md:gap-2 mb-1">
        <Gift className="w-3 h-3 md:w-4 md:h-4" />
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">Christmas Countdown</span>
      </div>
      <div className="flex gap-1 md:gap-2 text-center">
        <div className="flex flex-col">
          <span className="text-base md:text-xl font-bold font-serif">{timeLeft.days}</span>
          <span className="text-[9px] md:text-[10px] uppercase">Days</span>
        </div>
        <span className="text-base md:text-xl font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-base md:text-xl font-bold font-serif">{timeLeft.hours}</span>
          <span className="text-[9px] md:text-[10px] uppercase">Hrs</span>
        </div>
        <span className="text-base md:text-xl font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-base md:text-xl font-bold font-serif">{timeLeft.minutes}</span>
          <span className="text-[9px] md:text-[10px] uppercase">Min</span>
        </div>
        <span className="text-base md:text-xl font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-base md:text-xl font-bold font-serif">{timeLeft.seconds}</span>
          <span className="text-[9px] md:text-[10px] uppercase">Sec</span>
        </div>
      </div>
      <a
        href="#magic-video"
        className="flex items-center justify-center gap-1 mt-2 pt-2 border-t border-[#FFD700]/30 text-[10px] md:text-xs text-[#FFD700] hover:text-white transition-colors uppercase tracking-wide font-semibold"
      >
        <Video className="w-3.5 h-3.5 md:w-4 md:h-4" />
        Get Magic Message
      </a>
    </div>
  )
}
