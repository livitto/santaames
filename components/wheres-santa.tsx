import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Clock } from "lucide-react"

const upcomingEvents = [
  {
    location: "North Grand Mall",
    address: "2801 Grand Ave, Ames, IA",
    date: "December 15-24",
    time: "10:00 AM - 8:00 PM",
  },
  {
    location: "Aqua Center Water Park",
    address: "5600 Green Hills Dr, Ames, IA",
    date: "December 16",
    time: "2:00 PM - 5:00 PM",
  },
  {
    location: "Boone Scenic Valley Railroad",
    address: "225 10th St, Boone, IA",
    date: "December 17-18",
    time: "1:00 PM - 6:00 PM",
  },
  {
    location: "Downtown Ames Main Street",
    address: "Main Street, Ames, IA",
    date: "December 20",
    time: "4:00 PM - 7:00 PM",
  },
]

export function WheresSanta() {
  return (
    <section id="wheres-santa" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">{`Where's Santa?`}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Find Santa Ames at these upcoming events</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Map Placeholder */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-xl border-4 border-[#FFD700]">
            <img src="/map-of-ames-iowa-with-location-pins-christmas-them.jpg" alt="Map of Santa's locations" className="w-full h-96 object-cover" />
          </div>

          {/* Events List */}
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#B71C1C] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-[#B71C1C] mb-2">{event.location}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{event.address}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-[#1B5E20]" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-[#1B5E20]" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
