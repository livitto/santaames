"use client"

import { Phone, Mail, Facebook, Instagram, MessageCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking")
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openWhatsApp = () => {
    window.open("https://wa.me/15155091059", "_blank")
  }

  return (
    <footer id="contact" className="relative z-10 bg-gradient-to-b from-[#B71C1C] to-[#8B0000] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[30%_40%_30%] gap-8 mb-8">
          {/* Column 1: Brand, Description, Social Icons (30%) */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">
              Santa<span className="text-[#FFD700]">ames</span>
            </h3>
            <p className="text-white/90 leading-relaxed mb-6">
              The Original Santa of Ames, Iowa. Creating magical Christmas memories for families, businesses, and communities since 2004. Bringing joy and wonder to every celebration.
            </p>
            <h5 className="font-semibold text-sm uppercase tracking-wide mb-3 text-amber-300">Follow us on</h5>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="bg-white/10 border-white/20 hover:bg-[#FFD700] hover:text-[#B71C1C] hover:border-[#FFD700] transition-colors"
                asChild
              >
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="bg-white/10 border-white/20 hover:bg-[#FFD700] hover:text-[#B71C1C] hover:border-[#FFD700] transition-colors"
                asChild
              >
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="bg-white/10 border-white/20 hover:bg-[#FFD700] hover:text-[#B71C1C] hover:border-[#FFD700] transition-colors"
                asChild
              >
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          {/* Column 2: Empty space (40%) */}
          <div></div>

          {/* Column 3: Contact Info and Buttons (30%) */}
          <div>
            <h4 className="font-serif text-2xl font-bold mb-6 text-amber-300">Contact</h4>
            <div className="space-y-4 mb-6">
              <a
                href="tel:515-509-1059"
                className="flex items-center gap-3 hover:text-[#FFD700] transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>(515) 509-1059</span>
              </a>
              <a
                href="mailto:santaames@yahoo.com"
                className="flex items-center gap-3 hover:text-[#FFD700] transition-colors text-lg"
              >
                <Mail className="w-5 h-5" />
                <span>santaames@yahoo.com</span>
              </a>
            </div>
            <div className="space-y-3">
              <Button
                className="w-full bg-[#FFD700] text-[#B71C1C] hover:bg-[#FFC700] font-bold py-5"
                onClick={scrollToBooking}
              >
                Book Now
              </Button>
              <Button
                className="w-full bg-[#25D366] text-white hover:bg-[#20BA5A] font-bold py-5"
                onClick={openWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80 text-sm space-y-2">
          <p>© {new Date().getFullYear()} Santaames - The Original Santa of Ames, Iowa. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Developed with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> in Ames by{" "}
            <a
              href="https://www.linkedin.com/in/sashakil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:underline font-semibold"
            >
              Sam
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
