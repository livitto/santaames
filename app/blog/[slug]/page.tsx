"use client"

import { blogPosts } from "@/lib/blog-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const post = blogPosts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="container mx-auto px-4 py-12 md:py-16 mt-16">
        {/* Article Header */}
        <article className="max-w-3xl mx-auto">
          {/* Hero Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden mb-8 border-2 border-gray-200">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Metadata */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 font-medium mb-3">{post.date}</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#B71C1C] mb-4">{post.title}</h1>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-12 h-12 rounded-full bg-[#B71C1C] flex items-center justify-center text-2xl">🎅</div>
              <div>
                <p className="font-medium">Santaames</p>
                <p className="text-sm">Spreading Christmas Magic in Ames, Iowa</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-8 mb-6 text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Share and Related */}
          <div className="border-t-2 border-b-2 border-gray-200 py-8 my-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#B71C1C] mb-2">Share This Story</h3>
                <p className="text-gray-600">Spread the Christmas magic with your friends and family</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Facebook
                </button>
                <button className="px-4 py-2 bg-sky-400 text-white rounded-lg hover:bg-sky-500 transition-colors font-medium">
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
