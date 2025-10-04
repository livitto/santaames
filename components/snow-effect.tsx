"use client"

import { useEffect } from "react"

export function SnowEffect() {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement("div")
      snowflake.classList.add("snowflake")
      snowflake.innerHTML = "❄"
      snowflake.style.left = Math.random() * 100 + "vw"
      snowflake.style.fontSize = Math.random() * 10 + 10 + "px"
      snowflake.style.animationDuration = Math.random() * 3 + 5 + "s"
      snowflake.style.animationDelay = Math.random() * 5 + "s"
      snowflake.style.zIndex = "0"
      document.body.appendChild(snowflake)

      setTimeout(() => {
        snowflake.remove()
      }, 8000)
    }

    const interval = setInterval(createSnowflake, 300)

    // Create initial snowflakes
    for (let i = 0; i < 20; i++) {
      setTimeout(createSnowflake, i * 100)
    }

    return () => clearInterval(interval)
  }, [])

  return null
}
