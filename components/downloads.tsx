"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Download, BookOpen, Scroll, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Downloads() {
  const downloads = [
    {
      title: "Christmas Coloring Book",
      description: "Fun holiday-themed coloring pages featuring Santa, reindeer, and winter scenes",
      icon: BookOpen,
      file: "/downloads/coloring-book.pdf", // Placeholder - to be uploaded
      color: "from-[#B71C1C] to-[#8B0000]",
    },
    {
      title: "Santa's Story",
      description: "A magical tale about Santa's journey and the spirit of Christmas",
      icon: Scroll,
      file: "/downloads/santa-story.pdf", // Placeholder - to be uploaded
      color: "from-[#2E7D32] to-[#1B5E20]",
    },
    {
      title: "Santa Wishes List",
      description: "A special wish list template for children to write their Christmas dreams",
      icon: Star,
      file: "/downloads/santa-wishes.pdf", // Placeholder - to be uploaded
      color: "from-[#FFD700] to-[#FFA000]",
    },
  ]

  const handleDownload = (file: string, title: string) => {
    // Placeholder function - will work once files are uploaded
    console.log(`Downloading: ${title} from ${file}`)
    // In production, this will trigger the actual download
    // window.open(file, '_blank')
  }

  return (
    <section id="downloads" className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#B71C1C] text-white px-4 py-2 rounded-full mb-4 font-bold text-sm">
            <Download className="w-4 h-4" />
            <span>Free Downloads</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">Holiday Fun for Kids</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Download free coloring books, stories, and activities to keep the Christmas magic alive at home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {downloads.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#FFD700] overflow-hidden bg-white"
              >
                <div
                  className={`h-32 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors" />
                  <Icon className="w-16 h-16 text-white relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="font-serif text-xl font-bold text-[#B71C1C] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <Button
                    onClick={() => handleDownload(item.file, item.title)}
                    className="w-full bg-[#B71C1C] hover:bg-[#8B0000] text-white font-bold"
                    disabled={true}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Coming Soon
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-2">Files will be available soon</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            All downloads are free and perfect for keeping kids entertained during the holiday season
          </p>
        </div>
      </div>
    </section>
  )
}
