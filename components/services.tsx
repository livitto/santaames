"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Building2, Users, Heart } from "lucide-react"

const services = [
  {
    icon: Gift,
    title: "Family Visits",
    description:
      "Make your family celebration unforgettable with a personal visit from Santa Dave. Perfect for home gatherings and intimate events.",
    color: "bg-[#B71C1C]",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Bring holiday cheer to your workplace with professional Santa services for company parties and client events.",
    color: "bg-[#1B5E20]",
  },
  {
    icon: Users,
    title: "Community Events",
    description:
      "Trusted by the City of Ames and local businesses for public appearances, photo sessions, and community celebrations.",
    color: "bg-[#B71C1C]",
  },
  {
    icon: Heart,
    title: "Schools & Nursing Homes",
    description:
      "Spreading joy to children and seniors with compassionate visits that create lasting memories for all ages.",
    color: "bg-[#1B5E20]",
  },
]

const scrollToBooking = () => {
  const bookingSection = document.getElementById("booking")
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: "smooth" })
  }
}

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#FFFAF7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Santa Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional Santa appearances for every occasion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col"
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 text-center flex-row ${service.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-serif text-xl text-[#B71C1C] tracking-tighter">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-base leading-relaxed mb-4 flex-1">
                  {service.description}
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full border-[#B71C1C] text-[#B71C1C] hover:bg-[#B71C1C] hover:text-white bg-transparent"
                  onClick={scrollToBooking}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
