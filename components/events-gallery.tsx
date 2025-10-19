import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const events = [
  {
    image: "/images/walmart-vision.jpg",
    title: "Walmart Vision",
    location: "Ames, IA",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023%20Child%20serve%203-kDb1hUIIUmp7whqBCbqruq5CmttWU1.jpg",
    title: "Ames School District",
    location: "Ames, IA",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024%20Boone%20Rail%201-29EmffhlnhLwOyRGDkDorZ5hCbewWx.jpg",
    title: "Boone Scenic Valley Railroad",
    location: "Boone, IA",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023%20Homewood-EyL7H7u6o1D4y0wL3InB7N68PEYiye.jpg",
    title: "Downtown Ames",
    location: "Main Street",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2021%20Accura%201-Q40q6t3tCK8bTMnwDzJoftQXXCzWnF.jpg",
    title: "Accura Healthcare",
    location: "Community Visit",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2021%20Gingerbread%202-1RfCa7xM9t1mRxk0rF1kNP5b0Ymlsw.jpg",
    title: "ChildServe",
    location: "Special Event",
  },
]

const testimonials = [
  {
    quote:
      "Santa Dave made our company party magical! His authentic beard and warm personality had everyone believing in Christmas magic again.",
    author: "Sarah M.",
    role: "Event Coordinator",
  },
  {
    quote:
      "Our children have been visiting Santa Dave for years. He remembers them each time and makes every visit special. A true treasure in our community!",
    author: "Michael & Jennifer T.",
    role: "Parents",
  },
  {
    quote:
      "Professional, punctual, and absolutely wonderful with the residents. Santa Dave brings so much joy to our nursing home every year.",
    author: "Linda K.",
    role: "Accura Healthcare",
  },
]

export function EventsGallery() {
  return (
    <section id="events" className="py-20 bg-[#FFF8F0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Events & Memories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Creating magical moments across Iowa</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-serif text-xl font-bold mb-1">{event.title}</h3>
                <p className="text-sm opacity-90">{event.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 mt-0 py-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">What My Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from families and organizations who've shared the magic
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-2 border-[#FFD700]">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed mb-4 italic">{`"${testimonial.quote}"`}</p>
                  <div>
                    <p className="font-bold text-[#B71C1C]">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
