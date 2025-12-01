import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Santaames - The Original Santa of Ames, Iowa",
  description:
    "Santa with the Original Beard – Creating Memories for 56+ Years. Trusted by families, schools, and the City of Ames since 2004.",
  generator: "v0.app",
  metadataBase: new URL("https://santaames.vercel.app"),
  openGraph: {
    title: "Santaames - The Original Santa of Ames, Iowa",
    description:
      "Santa with the Original Beard – Creating Memories for 56+ Years. Trusted by families, schools, and the City of Ames since 2004.",
    type: "website",
    url: "https://santaames.vercel.app",
    siteName: "Santaames",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Santaames - The Original Santa of Ames, Iowa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santaames - The Original Santa of Ames, Iowa",
    description:
      "Santa with the Original Beard – Creating Memories for 56+ Years. Trusted by families, schools, and the City of Ames since 2004.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${playfair.variable} ${lato.variable}`}>{children}</body>
    </html>
  )
}
