import { Hero } from "@/components/hero"
import { ClientLogos } from "@/components/client-logos"
import { About } from "@/components/about"
import { PhotoGallery } from "@/components/photo-gallery"
import { Services } from "@/components/services"
import { EventsGallery } from "@/components/events-gallery"
import { Downloads } from "@/components/downloads"
import { Booking } from "@/components/booking"
import { GettingReady } from "@/components/getting-ready"
import { WheresSanta } from "@/components/wheres-santa"
import { SocialMediaFeed } from "@/components/social-media-feed"
import { Footer } from "@/components/footer"
import { ChristmasCountdown } from "@/components/christmas-countdown"
import { Navigation } from "@/components/navigation"
import { MobileMenuProvider } from "@/lib/mobile-menu-context"
import { FloatingBookButton } from "@/components/floating-book-button"
import { BlogCarousel } from "@/components/blog-carousel"

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
        <GettingReady />
        <WheresSanta />
        <BlogCarousel />
        <SocialMediaFeed />
      </main>
      <Footer />
      <FloatingBookButton />
    </MobileMenuProvider>
  )
}
