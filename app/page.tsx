import { Hero } from "@/components/hero"
import { ClientLogos } from "@/components/client-logos"
import { About } from "@/components/about"
import { PhotoGallery } from "@/components/photo-gallery"
import { Services } from "@/components/services"
import { EventsGallery } from "@/components/events-gallery"
import { Downloads } from "@/components/downloads"
import { Booking } from "@/components/booking"
import { WheresSanta } from "@/components/wheres-santa"
import { SocialMediaFeed } from "@/components/social-media-feed"
import { Footer } from "@/components/footer"
import { ChristmasCountdown } from "@/components/christmas-countdown"
import { Navigation } from "@/components/navigation"
import { MobileMenuProvider } from "@/lib/mobile-menu-context"

export default function Home() {
  return (
    <MobileMenuProvider>
      <ChristmasCountdown />
      <Navigation />
      <main className="pt-16">
        <Hero />
        <ClientLogos />
        <About />
        <PhotoGallery />
        <Services />
        <EventsGallery />
        <Downloads />
        <Booking />
        <WheresSanta />
        <SocialMediaFeed />
      </main>
      <Footer />
    </MobileMenuProvider>
  )
}
