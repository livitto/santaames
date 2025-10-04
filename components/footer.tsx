"use client"

import { Phone, Mail, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#B71C1C] to-[#8B0000] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4 text-[#FFD700]">Santa Dave</h3>
            <p className="text-white/90 leading-relaxed">
              The Original Santa of Ames, Iowa. Creating magical memories since 1969.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:555-0123" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors">
                <Phone className="w-4 h-4" />
                <span>(555) 555-0123</span>
              </a>
              <a
                href="mailto:santa@santadave.com"
                className="flex items-center gap-2 hover:text-[#FFD700] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>santa@santadave.com</span>
              </a>
            </div>
          </div>

          {/* Social & Booking */}
          <div>
            <h4 className="font-serif text-xl font-bold mb-4">Follow Santa</h4>
            <div className="flex gap-3 mb-4">
              <Button
                size="icon"
                variant="outline"
                className="bg-white/10 border-white/20 hover:bg-[#FFD700] hover:text-[#B71C1C] hover:border-[#FFD700]"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="bg-white/10 border-white/20 hover:bg-[#FFD700] hover:text-[#B71C1C] hover:border-[#FFD700]"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="bg-white/10 border-white/20 hover:bg-[#FFD700] hover:text-[#B71C1C] hover:border-[#FFD700]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Button>
            </div>
            <Button
              className="w-full bg-[#FFD700] text-[#B71C1C] hover:bg-[#FFC700] font-bold"
              onClick={scrollToBooking}
            >
              Book Now
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm">
          <p>© {new Date().getFullYear()} Santa Dave - The Original Santa of Ames, Iowa. All rights reserved.</p>
          <p className="mt-2">Spreading Christmas joy for over 56 years 🎅✨</p>
        </div>
      </div>
    </footer>
  )
}
