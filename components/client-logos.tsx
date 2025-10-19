"use client"

export function ClientLogos() {
  const clients = [
    { name: "Blank Park Zoo", logo: "/logos/blank-park-zoo.svg" },
    { name: "GiGi's Playhouse", logo: "/logos/gigi-playhouse.webp" },
    { name: "Bethany Life", logo: "/logos/bethany-life.webp" },
    { name: "Ames Golf & Country Club", logo: "/logos/ames-golf.webp" },
    { name: "Des Moines Embassy Club", logo: "/logos/embassy-club.png" },
    { name: "Alliance", logo: "/logos/alliance.svg" },
    { name: "RE/MAX", logo: "/logos/remax.webp" },
    { name: "Hyperion Field Club", logo: "/logos/hyperion.png" },
    { name: "Rose Farm", logo: "/logos/rose-farm.png" },
    { name: "A Child's World", logo: "/logos/childs-world.webp" },
    { name: "Coca-Cola", logo: "/logos/coca-cola.png" },
    { name: "Oakridge Real Estate", logo: "/logos/oakridge.webp" },
    { name: "Iowa Terrace Hill", logo: "/logos/iowa-terrace-hill.png" },
    { name: "Hy-Vee", logo: "/logos/hyvee.jpg" },
    { name: "City of Ames", logo: "/logos/city-of-ames.jpg" },
    { name: "Prairie Meadows", logo: "/logos/prairie-meadows.png" },
    { name: "Zylstra Harley-Davidson", logo: "/logos/zylstra-harley.png" },
    { name: "Windsor Heights", logo: "/logos/windsor-heights.png" },
    { name: "Lowe's", logo: "/logos/lowes.png" },
    { name: "Bickford Senior Living", logo: "/logos/bickford.png" },
  ]

  return (
    <section className="py-16 bg-[#1B5E20] overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-white/90 text-sm uppercase tracking-wider font-bold">
          Trusted by {clients.length} Leading Organizations
        </h3>
      </div>
      <div className="relative">
        <div className="flex animate-scroll items-center">
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-6 bg-white rounded-lg shadow-lg flex items-center justify-center min-w-[180px] h-[100px] relative"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
          {/* Second set for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 px-8 py-6 bg-white rounded-lg shadow-lg flex items-center justify-center min-w-[180px] h-[100px] relative"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
