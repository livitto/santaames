import { Hero } from "@/components/hero"
import { ClientLogos } from "@/components/client-logos"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { EventsGallery } from "@/components/events-gallery"
import { Booking } from "@/components/booking"
import { WheresSanta } from "@/components/wheres-santa"
import { Footer } from "@/components/footer"
import { ChristmasCountdown } from "@/components/christmas-countdown"
import { SnowEffect } from "@/components/snow-effect"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <>
      <SnowEffect />
      <ChristmasCountdown />
      <Navigation />
      <main className="pt-16">
        <Hero />
        <ClientLogos />
        <About />
        <Services />
        <EventsGallery />
        <Booking />
        <WheresSanta />
      </main>
      <Footer />
    </>
  )
}
