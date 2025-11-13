"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Download, BookOpen, Scroll, Star, Palette, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"

export function Downloads() {
  const [activeCategory, setActiveCategory] = useState("wishlists")

  const downloadCategories = {
    wishlists: {
      title: "Santa Wish Lists",
      description: "Download free Santa wish list templates for kids to write their Christmas dreams and wishes",
      icon: Star,
      items: [
        {
          title: "Santa Wish List - Template 1",
          description: "Fun wish list with naughty or nice checkboxes and a drawing space for kids",
          icon: Star,
          file: "/downloads/santa-wish-list-1.jpeg",
          color: "from-[#2E7D32] to-[#1B5E20]",
        },
        {
          title: "Santa Wish List - Template 2",
          description: "Festive wish list with behavior checkboxes and space for Christmas wishes",
          icon: BookOpen,
          file: "/downloads/santa-wish-list-2.jpeg",
          color: "from-[#B71C1C] to-[#8B0000]",
        },
        {
          title: "Santa Wish List - Template 3",
          description: "Colorful polka dot wish list with behavior options and wish lines",
          icon: Scroll,
          file: "/downloads/santa-wish-list-3.jpeg",
          color: "from-[#FFD700] to-[#FFA000]",
        },
      ],
    },
    coloring: {
      title: "Coloring Pages",
      description: "Fun Christmas-themed coloring pages for kids to enjoy during the holiday season",
      icon: Palette,
      items: [
        {
          title: "Children Decorating Tree",
          description:
            "Heartwarming scene of two children decorating a Christmas tree together with ornaments and presents",
          icon: Palette,
          file: "/downloads/coloring-page-1.png",
          color: "from-[#2E7D32] to-[#1B5E20]",
        },
        {
          title: "Christmas Train",
          description: "Festive locomotive decorated with Christmas trees and bows, perfect for train-loving kids",
          icon: Palette,
          file: "/downloads/coloring-page-2.png",
          color: "from-[#B71C1C] to-[#8B0000]",
        },
        {
          title: "Decorated Christmas Tree",
          description: "Beautiful Christmas tree with ornaments, garland, star topper, and wrapped presents underneath",
          icon: Palette,
          file: "/downloads/coloring-page-3.png",
          color: "from-[#FFD700] to-[#FFA000]",
        },
      ],
    },
    stories: {
      title: "Christmas Stories",
      description: "Magical Christmas stories and activity books to read with your children",
      icon: Book,
      items: [
        {
          title: "Santa's Reindeer Story",
          description:
            "Learn about Rudolph's grown-up life and his new baby reindeer! Help Santa name Rudolph and Clarice's twins in this interactive story.",
          icon: Book,
          file: "/downloads/santas-reindeer-story.txt",
          thumbnail: "/downloads/santas-reindeer-thumbnail.jpg",
          color: "from-[#B71C1C] to-[#8B0000]",
        },
      ],
    },
  }

  const handleDownload = (file: string, title: string) => {
    const link = document.createElement("a")
    link.href = file
    link.download = file.split("/").pop() || "download"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const currentCategory = downloadCategories[activeCategory as keyof typeof downloadCategories]
  const CategoryIcon = currentCategory.icon

  return (
    <section id="downloads" className="py-20 bg-gradient-to-b from-[#FFFAF7] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#B71C1C] text-white px-4 py-2 rounded-full mb-4 font-bold text-sm">
            <Download className="w-4 h-4" />
            <span>Free Downloads</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Christmas Resources</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Download free Christmas templates, coloring pages, and stories for your family
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(downloadCategories).map(([key, category]) => {
            const Icon = category.icon
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-[#B71C1C] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.title}</span>
                <span className="text-xs opacity-75">({category.items.length})</span>
              </button>
            )
          })}
        </div>

        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <CategoryIcon className="w-8 h-8 text-[#B71C1C]" />
            <h3 className="font-serif text-3xl font-bold text-[#B71C1C]">{currentCategory.title}</h3>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">{currentCategory.description}</p>
        </div>

        {currentCategory.items.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {currentCategory.items.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#FFD700] overflow-hidden bg-white flex flex-col h-[520px]"
                >
                  <div className="relative h-48 bg-gray-100 overflow-hidden flex-shrink-0">
                    <Image
                      src={item.thumbnail || item.file || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  </div>
                  <CardContent className="p-6 bg-white flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold text-[#B71C1C] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{item.description}</p>
                    <Button
                      onClick={() => handleDownload(item.file, item.title)}
                      className="w-full bg-[#B71C1C] hover:bg-[#8B0000] text-white font-bold"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Now
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Coming soon! Check back for more downloads.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All resources are free to download and print for your family's Christmas celebrations
          </p>
        </div>
      </div>
    </section>
  )
}
