"use client"

import type React from "react"

import { MobileMenuProvider } from "@/lib/mobile-menu-context"

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MobileMenuProvider>{children}</MobileMenuProvider>
}
