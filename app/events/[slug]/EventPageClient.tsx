"use client"

import Link from "next/link"
import { MapPin, Calendar, Clock, Gift, ArrowLeft, Share2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

interface EventDetails {
  title: string
  location: string
  address: string
  date: string
  time: string
  description: string
  fullDescription: string
  mapLink: string
  image: string
  isFree: boolean
}

export default function EventPageClient({ event, slug }: { event: EventDetails | undefined; slug: string }) {
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#B71C1C] mb-4">Event Not Found</h1>
          <Link href="/#wheres-santa" className="text-[#1B5E20] hover:underline">
            View all events
          </Link>
        </div>
      </div>
    )
  }

  const shareUrl = `https://www.santaames.com/events/${slug}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-white">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            href="/#wheres-santa"
            className="inline-flex items-center gap-2 text-[#B71C1C] hover:text-[#8B0000] mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Event Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              {event.isFree && (
                <div className="absolute top-4 left-4 bg-[#FFD700] text-[#B71C1C] px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-[#B71C1C]/20">
                  FREE EVENT
                </div>
              )}
            </div>

            {/* Event Title */}
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#B71C1C] mb-6">{event.title}</h1>

            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 shadow-md border border-[#B71C1C]/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B71C1C]/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#B71C1C]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">{event.location}</p>
                    <a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#1B5E20] hover:underline"
                    >
                      {event.address} →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md border border-[#B71C1C]/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B71C1C]/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#B71C1C]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-semibold text-foreground">{event.date}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md border border-[#B71C1C]/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B71C1C]/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#B71C1C]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-semibold text-foreground">{event.time}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-md border border-[#1B5E20]/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1B5E20]/10 rounded-full flex items-center justify-center">
                    <Gift className="w-6 h-6 text-[#1B5E20]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Entry</p>
                    <p className="font-semibold text-[#1B5E20]">{event.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Description */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-[#B71C1C]/10 mb-8">
              <h2 className="font-serif text-2xl font-bold text-[#B71C1C] mb-4">About This Event</h2>
              <div className="prose prose-lg max-w-none">
                {event.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={event.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#B71C1C] hover:bg-[#8B0000] text-white font-bold py-4 px-6 rounded-lg transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: event.title,
                      text: `${event.description} - ${event.date} at ${event.location}`,
                      url: shareUrl,
                    })
                  } else {
                    navigator.clipboard.writeText(shareUrl)
                    alert("Link copied to clipboard!")
                  }
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#FFC700] text-[#B71C1C] font-bold py-4 px-6 rounded-lg transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share Event
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
