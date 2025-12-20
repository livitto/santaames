import { Gift, Phone, Camera } from "lucide-react"

export function GettingReady() {
  const steps = [
    {
      icon: Gift,
      title: "Prepare the Gifts",
      description:
        "If Santa is to hand out gifts, the best way is to leave them outside, away from the door and in a large plastic bag. This makes it the easiest and quickest way to load my bag.",
    },
    {
      icon: Phone,
      title: "We'll Call When Close",
      description:
        "I will call when I am in the neighborhood. I'm usually early but will wait till you are ready. Communication is the key to a smooth visit.",
    },
    {
      icon: Camera,
      title: "Set Up Photo Backdrop",
      description:
        "Set up a comfortable setting to get those precious pictures. A comfortable chair next to the Christmas tree makes good pictures. In front of a fireplace is another. Try not to make the fire too blazing.",
    },
  ]

  return (
    <section id="getting-ready" className="py-20 bg-gradient-to-b from-[#F5E6D3] via-[#FFF8F0] to-[#F9F3ED]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-6 h-1 w-20 bg-gradient-to-r from-[#B71C1C] to-[#FFD700] mx-auto rounded-full"></div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">
            Getting Ready for Your Visit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A few friendly suggestions to make your home visit magical and memorable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-6 rounded-xl border-2 border-[#FFD700] bg-white hover:shadow-lg hover:border-[#B71C1C] transition-all duration-300"
              >
                {/* Step number */}
                <div className="mb-4 w-12 h-12 rounded-full bg-[#B71C1C] text-white flex items-center justify-center font-bold text-lg group-hover:bg-[#FFD700] group-hover:text-[#B71C1C] transition-colors">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-4 p-4 bg-[#FFF8F0] rounded-full group-hover:bg-[#FFD700] transition-colors">
                  <Icon className="w-8 h-8 text-[#B71C1C]" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#B71C1C] mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <div className="mt-12 p-6 bg-[#B71C1C] text-white rounded-xl max-w-2xl mx-auto text-center shadow-lg">
          <p className="font-semibold mb-2 text-xl">Ho Ho Ho!</p>
          <p className="leading-relaxed text-base">
            I will "go with the flow" when I come and take in any ideas you have. The most important thing is creating
            wonderful memories with your family!
          </p>
        </div>
      </div>
    </section>
  )
}
