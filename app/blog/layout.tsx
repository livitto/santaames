import type React from "react"
import { MobileMenuProvider } from "@/lib/mobile-menu-context"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MobileMenuProvider>{children}</MobileMenuProvider>
}
