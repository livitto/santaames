"use client"

export function ClientLogos() {
  const clients = [
    "City of Ames",
    "Downtown Ames",
    "Accura Health",
    "Gingerbread",
    "Bickford",
    "Childserve",
    "North Grand Mall",
    "Boone Rail",
    "Discover Ames",
    "Aqua Center Water Park",
    "Ames School District",
  ]

  return (
    <section className="py-12 bg-[#1B5E20] overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h3 className="text-center text-white/90 text-sm uppercase tracking-wider font-bold">
          Trusted by Leading Organizations
        </h3>
      </div>
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set */}
          {clients.map((client, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-8 px-6 py-3 bg-white rounded-lg shadow-lg">
              <span className="text-[#B71C1C] font-bold text-lg whitespace-nowrap">{client}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-8 px-6 py-3 bg-white rounded-lg shadow-lg">
              <span className="text-[#B71C1C] font-bold text-lg whitespace-nowrap">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
