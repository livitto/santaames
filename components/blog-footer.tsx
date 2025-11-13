"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

interface BlogFooterProps {
  onBookingClick: () => void
}

export function BlogFooter({ onBookingClick }: BlogFooterProps) {
  return (
    <footer className="bg-[#B71C1C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎅</span>
              <h3 className="font-serif text-3xl font-bold">Santa Dave</h3>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed max-w-md">
              Creating magical Christmas moments for families across America since 1969. Where memories are made and
              magic happens.
            </p>
            <p className="text-sm text-white/75">© 2025 Santa Dave. All rights reserved.</p>
          </div>

          {/* Right Column - CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-lg mb-4">Ready to Create Magic?</h4>
              <p className="text-white/90 mb-6">
                Book a home visit from Santa Dave and create unforgettable memories for your family.
              </p>
            </div>
            <Button
              onClick={onBookingClick}
              className="bg-[#FFD700] text-[#B71C1C] hover:bg-[#FFC700] font-bold py-3 text-lg w-full md:w-auto"
            >
              Book Santa Now
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+15195551234" className="hover:text-[#FFD700] transition-colors">
                  (519) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:santaames@yahoo.com" className="hover:text-[#FFD700] transition-colors">
                  santaames@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
