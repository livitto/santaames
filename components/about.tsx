import { Heart, Award, Users, ShieldCheck } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Meet Santaames </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A Santa with an authentic beard and a heart for community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              For over 20 years, Dave has brought joy, laughter, and quiet wonder to families across central Iowa. He follows a true Santa lineage because his father wore the suit for 32 years and visited the same four families long enough to see children grow into parents. Now Dave continues that generational tradition and hopes to one day reach the same milestone of lifelong family visits.
            </p>

            <p className="text-lg leading-relaxed">
              {"With his real white beard, warm storytelling presence, and gentle manner with children, Dave has become a trusted favorite at home gatherings, schools, nursing homes, realtor events, and community celebrations. He is fully background-checked and insured and arrives prepared for whatever format families prefer, from surprise gift deliveries to calm story time by the tree to photo sessions for entire extended families."}
            </p>

<p className="text-lg leading-relaxed">
              {"For Dave, every visit is more than a booking. It is a moment in someone’s memory that will outlast the season."}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-[#B71C1C] rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="font-serif text-2xl font-bold text-[#B71C1C]">56</div>
                <div className="text-sm text-muted-foreground">Years Legacy</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-[#1B5E20] rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="font-serif text-2xl font-bold text-[#1B5E20]">20</div>
                <div className="text-sm text-muted-foreground">Years Service</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-[#B71C1C] rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="font-serif text-2xl font-bold text-red-700">1000s</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-[#1B5E20] rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div className="font-serif text-2xl font-bold text-[#1B5E20]">✓</div>
                <div className="text-sm text-muted-foreground">Vetted & Checked</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/design-mode/2.png"
                alt="Santa Dave with child"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
              <img
                src="/images/design-mode/3.png"
                alt="Santa Dave by fireplace"
                className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
              />
              <img
                src="/images/design-mode/4.png"
                alt="Santa Dave with baby"
                className="rounded-lg shadow-xl w-full h-64 object-cover -mt-8"
              />
              <img
                src="/images/design-mode/1.png"
                alt="Santa Dave and Mrs. Claus"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD700] rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#B71C1C] rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
