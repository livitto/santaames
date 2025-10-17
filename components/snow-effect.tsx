"use client"

import type React from "react"

import { useEffect } from "react"

export function SnowEffect({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createSnowflake = () => {
      if (!container) return

      const snowflake = document.createElement("div")
      snowflake.classList.add("snowflake")
      snowflake.innerHTML = "❄"
      snowflake.style.left = Math.random() * 100 + "%"
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px"
      snowflake.style.animationDuration = Math.random() * 3 + 5 + "s"
      snowflake.style.animationDelay = Math.random() * 5 + "s"
      snowflake.style.position = "absolute"
      snowflake.style.zIndex = "5"
      container.appendChild(snowflake)

      setTimeout(() => {
        snowflake.remove()
      }, 8000)
    }

    const interval = setInterval(createSnowflake, 300)

    // Create initial snowflakes
    for (let i = 0; i < 20; i++) {
      setTimeout(createSnowflake, i * 100)
    }

    return () => {
      clearInterval(interval)
      // Clean up any remaining snowflakes
      if (container) {
        const snowflakes = container.querySelectorAll(".snowflake")
        snowflakes.forEach((flake) => flake.remove())
      }
    }
  }, [containerRef])

  return null
}
