"use client"

import { Card } from "@/components/ui/card"
import { Instagram, Music, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialPost {
  id: string
  platform: "instagram" | "tiktok"
  url: string
  embedUrl?: string
  thumbnail?: string
  caption?: string
  featured?: boolean
}

// Placeholder posts - replace with actual post URLs
const socialPosts: SocialPost[] = [
  {
    id: "1",
    platform: "instagram",
    url: "https://www.instagram.com/p/placeholder1/",
    thumbnail: "/santa-with-children-instagram-post.jpg",
    caption: "Magical moments with Santa Dave! 🎅✨",
    featured: true,
  },
  {
    id: "2",
    platform: "tiktok",
    url: "https://www.tiktok.com/@placeholder/video/1",
    thumbnail: "/santa-tiktok-video-thumbnail.jpg",
    caption: "Behind the scenes at the North Pole! 🎄",
    featured: true,
  },
  {
    id: "3",
    platform: "instagram",
    url: "https://www.instagram.com/p/placeholder2/",
    thumbnail: "/santa-at-event-instagram.jpg",
    caption: "Another wonderful day spreading Christmas cheer! 🎁",
  },
  {
    id: "4",
    platform: "tiktok",
    url: "https://www.tiktok.com/@placeholder/video/2",
    thumbnail: "/santa-dancing-tiktok.jpg",
    caption: "Santa's got moves! 💃🎅",
  },
]

export function SocialMediaFeed() {
  const handlePostClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFAF7] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Follow Santaames</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Stay connected with me!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {socialPosts.map((post) => (
            <Card
              key={post.id}
              className="group cursor-pointer overflow-hidden border-2 border-gray-200 hover:border-[#FFD700] transition-all duration-300 hover:shadow-xl"
              onClick={() => handlePostClick(post.url)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.thumbnail || "/placeholder.svg"}
                  alt={post.caption || "Social media post"}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Platform icon */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {post.platform === "instagram" ? (
                    <Instagram className="w-5 h-5 text-pink-600" />
                  ) : (
                    <Music className="w-5 h-5 text-black" />
                  )}
                </div>

                {/* Featured badge */}
                {post.featured && (
                  <div className="absolute top-3 left-3 bg-[#FFD700] text-[#B71C1C] px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium line-clamp-2">{post.caption}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs opacity-90">
                    <ExternalLink className="w-3 h-3" />
                    <span>View on {post.platform === "instagram" ? "Instagram" : "TikTok"}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social media links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold gap-2"
            onClick={() => window.open("https://www.instagram.com/santaames", "_blank")}
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </Button>
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white font-bold gap-2"
            onClick={() => window.open("https://www.tiktok.com/@santaames", "_blank")}
          >
            <Music className="w-5 h-5" />
            Follow on TikTok
          </Button>
        </div>

        {/* Admin note - remove this in production */}
      </div>
    </section>
  )
}
