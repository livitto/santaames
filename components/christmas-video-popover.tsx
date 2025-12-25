"use client"

import { useEffect, useState } from "react"
import { X, Play } from "lucide-react"

export function ChristmasVideoPopover() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [isHeroInView, setIsHeroInView] = useState(true)

  useEffect(() => {
    // Check if user has already seen the popover in this session
    const visited = sessionStorage.getItem("christmas-video-seen")

    if (!visited) {
      // Show popover after a short delay (1.5 seconds)
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)

      return () => clearTimeout(timer)
    } else {
      setShowPreview(true)
    }
  }, [])

  useEffect(() => {
    const heroSection = document.getElementById("home")
    if (!heroSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHeroInView(entry.isIntersecting)
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(heroSection)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    // Load Wistia scripts
    const script1 = document.createElement("script")
    script1.src = "https://fast.wistia.com/player.js"
    script1.async = true
    document.body.appendChild(script1)

    const script2 = document.createElement("script")
    script2.src = "https://fast.wistia.com/embed/a26z2f5kvl.js"
    script2.async = true
    script2.type = "module"
    document.body.appendChild(script2)

    const style = document.createElement("style")
    style.innerHTML = `wistia-player[media-id='a26z2f5kvl']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/a26z2f5kvl/swatch'); display: block; filter: blur(5px); padding-top:177.5%; }`
    document.head.appendChild(style)

    return () => {
      if (script1.parentNode) script1.parentNode.removeChild(script1)
      if (script2.parentNode) script2.parentNode.removeChild(script2)
      if (style.parentNode) style.parentNode.removeChild(style)
    }
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
    // Mark as seen for this session
    sessionStorage.setItem("christmas-video-seen", "true")
    setShowPreview(true)
  }

  const handleReplay = () => {
    setIsVisible(true)
    setShowPreview(false)
  }

  return (
    <>
      {showPreview && !isVisible && isHeroInView && (
        <button
          onClick={handleReplay}
          className="fixed top-20 right-2 md:right-4 z-[100] group cursor-pointer"
          aria-label="Replay Christmas video"
        >
          {/* Video thumbnail background */}
          <div className="relative w-40 md:w-72 aspect-[9/16] bg-black rounded-lg shadow-lg border-2 border-[#FFD700] overflow-hidden hover:scale-105 transition-transform">
            <img
              src="https://embed-ssl.wistia.com/deliveries/7c8e9e7e8e7e8e7e8e7e8e7e8e7e8e7e/file.jpg?image_crop_resized=960x540"
              alt="Santa's Christmas Message"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to swatch with higher resolution if direct image fails
                e.currentTarget.src =
                  "https://fast.wistia.com/embed/medias/a26z2f5kvl/swatch?image_play_button=1&image_play_button_color=B71C1Ce0&image_crop_resized=960x1704"
              }}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#B71C1C] text-white p-3 md:p-4 rounded-full border-2 border-white shadow-lg group-hover:bg-[#8B0000] transition-colors">
                <Play className="w-6 h-6 md:w-8 md:h-8 fill-current" />
              </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-2 left-2 right-2 text-center">
              <div className="text-xs md:text-sm font-bold text-white drop-shadow-lg uppercase tracking-wide">
                Santa's Message
              </div>
            </div>
          </div>
        </button>
      )}

      {/* Full Video Modal */}
      {isVisible && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] transition-opacity"
            onClick={handleClose}
          />

          {/* Video Modal */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full border-4 border-[#FFD700] overflow-hidden">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 z-10 bg-[#B71C1C] text-white p-2 rounded-full hover:bg-[#8B0000] transition-colors shadow-lg"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-[#B71C1C] to-[#8B0000] text-white py-4 px-6 text-center">
                <h2 className="font-serif text-2xl font-bold">🎅 Merry Christmas! 🎄</h2>
                <p className="text-sm text-white/90 mt-1">A Special Message from Santa</p>
              </div>

              {/* Video Container */}
              <div className="bg-[#FFF8F0] p-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <wistia-player media-id="a26z2f5kvl" aspect="0.5633802816901409" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
