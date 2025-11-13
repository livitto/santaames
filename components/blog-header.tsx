"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (sectionId: string) => {
    if (window.opener) {
      window.opener.location.hash = sectionId
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-[#B71C1C]">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#B71C1C]">🎅</span>
          <span className="font-serif text-xl font-bold text-[#B71C1C] hidden sm:inline">Santa Dave</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => {
              if (window.opener) {
                window.opener.location.reload()
              }
            }}
            className="text-gray-700 hover:text-[#B71C1C] font-medium transition-colors"
          >
            Home
          </button>
          <Button
            onClick={() => handleScroll("#booking")}
            className="bg-[#B71C1C] hover:bg-[#8B0000] text-white font-bold"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#B71C1C] transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  if (window.opener) {
                    window.opener.location.reload()
                  }
                }}
                className="text-left text-gray-700 hover:text-[#B71C1C] font-medium transition-colors py-2"
              >
                Home
              </button>
              <Button
                onClick={() => handleScroll("#booking")}
                className="w-full bg-[#B71C1C] hover:bg-[#8B0000] text-white font-bold"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
