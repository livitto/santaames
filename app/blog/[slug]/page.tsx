import { blogPosts } from "@/lib/blog-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

export const generateStaticParams = async () => {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find((p) => p.id === params.slug)
  return {
    title: post?.title || "Blog Post",
    description: post?.excerpt || "Read our latest story",
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  const getShareUrl = () => {
    return typeof window !== "undefined" ? window.location.href : ""
  }

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(`Check out this story: ${post.title} - Santaames`)}`

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
                <a
                  href={facebookShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Facebook
                </a>
                <a
                  href={twitterShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-sky-400 text-white rounded-lg hover:bg-sky-500 transition-colors font-medium"
                >
                  Twitter / X
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
