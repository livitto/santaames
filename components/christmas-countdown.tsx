"use client"

import { useEffect, useState } from "react"
import { Gift } from "lucide-react"
import { useMobileMenu } from "@/lib/mobile-menu-context"

export function ChristmasCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const [isBookingInView, setIsBookingInView] = useState(false)
  const { isMenuOpen } = useMobileMenu()

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const christmas = new Date(currentYear, 11, 25) // December 25

      // If Christmas has passed this year, calculate for next year
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
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      setIsVisible(false)

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsVisible(true)
      }, 150)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  useEffect(() => {
    const bookingSection = document.getElementById("booking")

    if (!bookingSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsBookingInView(entry.isIntersecting)
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the booking section is visible
        rootMargin: "-100px 0px 0px 0px", // Account for the fixed header
      },
    )

    observer.observe(bookingSection)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      className={`fixed top-20 right-4 z-[100] bg-[#B71C1C] text-white px-4 py-3 rounded-lg shadow-lg border-2 border-[#FFD700] transition-opacity duration-200 ${
        isVisible && !isMenuOpen && !isBookingInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center gap-2 mb-1">
        <Gift className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-wide">Christmas Countdown</span>
      </div>
      <div className="flex gap-2 text-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold font-serif">{timeLeft.days}</span>
          <span className="text-[10px] uppercase">Days</span>
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-xl font-bold font-serif">{timeLeft.hours}</span>
          <span className="text-[10px] uppercase">Hrs</span>
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-xl font-bold font-serif">{timeLeft.minutes}</span>
          <span className="text-[10px] uppercase">Min</span>
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-xl font-bold font-serif">{timeLeft.seconds}</span>
          <span className="text-[10px] uppercase">Sec</span>
        </div>
      </div>
    </div>
  )
}
