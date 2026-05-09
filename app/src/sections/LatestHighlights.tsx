import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Dumbbell, Music, Newspaper, ArrowRight } from 'lucide-react'
import { highlights } from '../data/highlights.tsx'

const categories = [
  { id: 'all', label: 'All', icon: Newspaper },
  { id: 'merchandise', label: 'Merchandise', icon: ShoppingBag },
  { id: 'training', label: 'Training', icon: Dumbbell },
  { id: 'events', label: 'Events', icon: Music },
  { id: 'news', label: 'News', icon: Newspaper },
] as const

const parseDate = (dateStr: string): Date => {
  const match = dateStr.match(/(\w{3})\s*(\d{1,2})?\s*,?\s*(\d{4})/)
  if (match) {
    const month = match[1]
    const day = match[2] ? parseInt(match[2], 10) : 1
    const year = parseInt(match[3], 10)
    const monthIndex = new Date(`${month} 1, ${year}`).getMonth()
    return new Date(year, monthIndex, day)
  }
  return new Date(dateStr)
}

export default function LatestHighlights() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filtered = useMemo(() => {
    const now = new Date()
    const currentMonth = now.getMonth()
    const currentYear = now.getFullYear()

    const highlightsByDate = highlights.filter((h) => {
      const cardDate = parseDate(h.date)
      const cardMonth = cardDate.getMonth()
      const cardYear = cardDate.getFullYear()

      if (cardYear < currentYear) return true
      if (cardYear === currentYear && cardMonth <= currentMonth) return true
      return false
    })

    return activeFilter === 'all'
      ? highlightsByDate
      : highlightsByDate.filter((h) => h.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="section-sand py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
              Stay Updated
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#001B2F] leading-tight">
              Latest <span className="text-[#00A9B5]">Highlights</span>
            </h2>
            <p className="text-[#001B2F]/60 mt-3 max-w-lg">
              Everything you need to know about the upcoming tournament —
              merchandise, training sessions, cultural events, and more.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === cat.id
                      ? 'bg-[#001B2F] text-white shadow-lg'
                      : 'bg-[#001B2F]/5 text-[#001B2F]/60 hover:bg-[#001B2F]/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {filtered.map((card, index) => {
            const colSpan =
              card.size === 'large'
                ? 'md:col-span-2 md:row-span-2'
                : card.size === 'medium'
                ? 'md:col-span-1 md:row-span-2'
                : ''

            const CardWrapper = ({ children }: { children: React.ReactNode }) => (
                  <Link
                    to={`/highlight/${card.id}`}
                    className={`group relative rounded-2xl overflow-hidden cursor-pointer ${colSpan}`}
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    {children}
                  </Link>
                )

            return (
              <CardWrapper key={card.id}>
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001B2F] via-[#001B2F]/40 to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium border border-white/10 capitalize">
                      {card.category}
                    </span>
                  </div>

                  {/* Date */}
                  <span className="text-[#4FF6FF] text-xs font-medium mb-2">
                    {card.date}
                  </span>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-lg leading-snug mb-2 group-hover:text-[#4FF6FF] transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Description - only on larger cards */}
                  {(card.size === 'large' || card.size === 'medium') && (
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-2 mb-3">
                      {card.shortDescription}
                    </p>
                  )}

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-[#00A9B5] text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00A9B5]/40 rounded-2xl transition-colors duration-300" />
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
