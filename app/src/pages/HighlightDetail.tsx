import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ShoppingBag, Dumbbell, Music, Newspaper, Calendar, Tag } from 'lucide-react'
import { highlights } from '../data/highlights.tsx'

const categoryIcons = {
  merchandise: ShoppingBag,
  training: Dumbbell,
  events: Music,
  news: Newspaper,
}

const categoryLabels = {
  merchandise: 'Merchandise',
  training: 'Training',
  events: 'Events',
  news: 'News',
}

export default function HighlightDetail() {
  const { id } = useParams<{ id: string }>()
  const highlight = highlights.find((h) => h.id === parseInt(id || '0'))

  if (!highlight) {
    return (
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white mb-4">Highlight Not Found</h1>
            <p className="text-white/50 mb-8">The highlight you are looking for does not exist.</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00A9B5] text-white font-medium hover:bg-[#00A9B5]/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const CategoryIcon = categoryIcons[highlight.category]

  return (
    <main className="pt-16">
      <article className="max-w-4xl mx-auto">
        <section className="relative h-80 lg:h-96 overflow-hidden">
          <img
            src={highlight.image}
            alt={highlight.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B2F] via-[#001B2F]/60 to-transparent" />
          
          <div className="absolute inset-0 px-4 sm:px-6 flex flex-col justify-end pb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium border border-white/10">
                <CategoryIcon className="w-3 h-3" />
                {categoryLabels[highlight.category]}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-white leading-tight">
              {highlight.title}
            </h1>
          </div>
        </section>

        <section className="px-4 sm:px-6 py-8 lg:py-12">
          <div className="flex items-center gap-4 mb-8 text-sm">
            <span className="flex items-center gap-1.5 text-[#00A9B5]">
              <Calendar className="w-4 h-4" />
              {highlight.date}
            </span>
            <span className="flex items-center gap-1.5 text-[#00A9B5]">
              <Tag className="w-4 h-4" />
              {categoryLabels[highlight.category]}
            </span>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-white/80 leading-relaxed text-lg">
              {highlight.fullDescription}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#00A9B5] hover:text-[#4FF6FF] transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Highlights
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}