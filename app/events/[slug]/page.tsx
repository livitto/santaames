import type { Metadata } from "next"
import EventPageClient from "./EventPageClient"

const events: Record<
  string,
  {
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
> = {
  "pictures-with-santa-2025": {
    title: "Pictures with Santa 2025",
    location: "Marmalade Moon",
    address: "207 Main St, Ames, Iowa",
    date: "December 8, 2025",
    time: "5:00 – 6:30 PM",
    description: "Bring non-perishable donation",
    fullDescription: `Photos with Santa at Marmalade Moon!

Come join me for a little Christmas magic!

📍 Marmalade Moon – 207 Main St, Ames, IA
📅 Date: December 8, 2025
🕐 Time: 5:00 – 6:30 PM

This is a FREE event—just bring a non-perishable food donation to help stock the local food pantry.

Bring your kiddos, friends, and holiday spirit! Now that many of my little clients are growing up, I'm excited to share some Christmas cheer with new faces too.

Let's make some festive memories together!`,
    mapLink: "https://maps.app.goo.gl/nD9yRoZsSvYEvxz19",
    image: "/events/pictures-with-santa-2025.jpg",
    isFree: true,
  },
}

export async function generateStaticParams() {
  return Object.keys(events).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const event = events[slug]

  if (!event) {
    return { title: "Event Not Found" }
  }

  return {
    title: `${event.title} | Santaames`,
    description: `${event.description} - ${event.date} at ${event.location}, ${event.address}`,
    openGraph: {
      title: `${event.title} | Santaames`,
      description: `${event.description} - ${event.date} at ${event.location}`,
      images: [`https://www.santaames.com${event.image}`],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | Santaames`,
      description: `${event.description} - ${event.date} at ${event.location}`,
      images: [`https://www.santaames.com${event.image}`],
    },
  }
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const event = events[slug]

  return <EventPageClient event={event} slug={slug} />
}
