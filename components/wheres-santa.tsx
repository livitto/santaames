import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Clock, Gift, ExternalLink } from "lucide-react"
import Link from "next/link"

const upcomingEvents = [
  {
    id: "pictures-with-santa-2025",
    title: "Pictures with Santa 2025",
    location: "Marmalade Moon",
    address: "207 Main St, Ames, Iowa",
    date: "December 8, 2025",
    time: "5:00 – 6:30 PM",
    description: "FREE event—just bring a non-perishable food donation to help stock the local food pantry",
    mapLink: "https://maps.app.goo.gl/nD9yRoZsSvYEvxz19",
    image: "/events/pictures-with-santa-2025.jpg",
    isFree: true,
  },
]

export function WheresSanta() {
  return (
    <section id="wheres-santa" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-12">
          <img
            src="/images/hero-1.jpg"
            alt="Santa Dave in sleigh with reindeer"
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">{`Where's Santa?`}</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow">Find Santa at these upcoming events</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Featured Event */}
          <div className="mb-12">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden border-2 border-[#B71C1C]/20 hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <div className="grid md:grid-cols-2">
                  {/* Event Image */}
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover mx-4 rounded-lg"
                    />
                    {event.isFree && (
                      <div className="absolute top-4 left-4 bg-[#FFD700] text-[#B71C1C] px-4 py-1.5 rounded-full text-sm font-bold shadow-lg border-2 border-[#B71C1C]/20 mx-4">
                        FREE EVENT: 8 Dec 2025
                      </div>
                    )}
                  </div>

                  {/* Event Details */}
                  <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#B71C1C] mb-4">{event.title}</h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#B71C1C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#B71C1C]" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{event.location}</p>
                          <a
                            href={event.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#1B5E20] hover:underline flex items-center gap-1"
                          >
                            {event.address}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#B71C1C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-[#B71C1C]" />
                        </div>
                        <span className="font-medium">{event.date}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#B71C1C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-[#B71C1C]" />
                        </div>
                        <span className="font-medium">{event.time}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#1B5E20]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Gift className="w-5 h-5 text-[#1B5E20]" />
                        </div>
                        <span className="font-medium text-[#1B5E20]">{event.description}</span>
                      </div>
                    </div>

                    <Link
                      href={`/events/${event.id}`}
                      className="inline-flex items-center justify-center bg-[#B71C1C] hover:bg-[#8B0000] text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      View Event Details
                    </Link>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
