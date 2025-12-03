"use client"

export function ClientLogos() {
  const clients = [
    { name: "GiGi's Playhouse", logo: "/logos/gigi-playhouse.webp" },
    { name: "Bethany Life", logo: "/logos/bethany-life.webp" },
    { name: "Ames Golf & Country Club", logo: "/logos/ames-golf.webp" },
    { name: "Des Moines Embassy Club", logo: "/logos/embassy-club.png" },
    { name: "Alliance", logo: "/logos/alliance.svg" },
    { name: "RE/MAX", logo: "/logos/remax.png" }, // Updated to new PNG logo
    { name: "Hyperion Field Club", logo: "/logos/hyperion.png" },
    { name: "Rose Farm", logo: "/logos/rose-farm.png" },
    { name: "A Child's World", logo: "/logos/childs-world.webp" },
    { name: "Coca-Cola", logo: "/logos/coca-cola.png" },
    { name: "Oakridge Real Estate", logo: "/logos/oakridge.webp" },
    { name: "Iowa Terrace Hill", logo: "/logos/iowa-terrace-hill.png" },
    { name: "Hy-Vee", logo: "/logos/hyvee.png" }, // Updated to new PNG logo
    { name: "City of Ames", logo: "/logos/city-of-ames.png" }, // Updated City of Ames logo to new PNG version
    { name: "Prairie Meadows", logo: "/logos/prairie-meadows.png" },
    { name: "Zylstra Harley-Davidson", logo: "/logos/zylstra-harley.png" },
    { name: "Windsor Heights", logo: "/logos/windsor-heights.png" },
    { name: "Lowe's", logo: "/logos/lowes.png" },
    { name: "Bickford Senior Living", logo: "/logos/bickford.png" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FFFAF7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Trusted Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proudly serving leading organizations across Iowa and beyond
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-center aspect-[3/2] hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
                title={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
