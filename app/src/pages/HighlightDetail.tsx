import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ShoppingBag, Dumbbell, Music, Newspaper, Calendar, Tag } from 'lucide-react'

interface HighlightCard {
  id: number
  title: string
  description: string
  image: string
  category: 'merchandise' | 'training' | 'events' | 'news'
  date: string
  size: 'large' | 'medium' | 'small'
  link?: string
  anchor?: string
}

const highlights: HighlightCard[] = [
  {
    id: 1,
    title: '2026 Tournament Merchandise Collection',
    description: 'Exclusive UWH Shanghai 2026 apparel, towels, and accessories now available for pre-order. Limited edition designs featuring our signature underwater art theme.',
    image: '/images/card-merch.jpg',
    category: 'merchandise',
    date: 'Apr 2026',
    size: 'large',
  },
  {
    id: 2,
    title: 'Pre-Tournament Pool Sessions',
    description: 'Open warm-up training at Shanghai JingAn Sports Center pool every weekend in September. Free for all registered teams. Sessions are available on Saturdays and Sundays from 9:00 AM to 5:00 PM. Advanced booking is recommended to secure your slot.',
    image: '/images/card-pool.jpg',
    category: 'training',
    date: 'Sep 2026',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Shanghai Night Tour for Athletes',
    description: 'A special guided evening tour of The Bund and Lujiazui skyline exclusively for tournament participants and their families. Experience Shanghai\'s breathtaking night views and vibrant atmosphere.',
    image: '/images/card-shanghai.jpg',
    category: 'events',
    date: 'Oct 2026',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Youth Division Added for 2026',
    description: 'We are excited to announce a new youth division (ages 15-18) for the 2026 tournament, expanding opportunities for young athletes. This division will feature its own dedicated matches and awards.',
    image: '/images/card-game.jpg',
    category: 'news',
    date: 'Mar 2026',
    size: 'small',
  },
  {
    id: 5,
    title: 'Welcome Banquet at Yu Garden',
    description: 'Experience authentic Shanghai cuisine at our traditional welcome banquet in the historic Yu Garden area. This special event will feature local delicacies and cultural performances.',
    image: '/images/shanghai-food.jpg',
    category: 'events',
    date: 'Oct 24, 2026',
    size: 'small',
  },
  {
    id: 6,
    title: 'Awards Ceremony & After Party',
    description: 'Join us for the grand awards ceremony followed by a celebration at one of Shanghai premier waterfront venues. Celebrate the tournament champions and enjoy an evening of entertainment.',
    image: '/images/card-award.jpg',
    category: 'events',
    date: 'Oct 25, 2026',
    size: 'large',
  },
  {
    id: 7,
    title: 'Team Registration Opens',
    description: 'Early bird registration is now open for the 2026 Shanghai UWH Tournament. Secure your spot before July 31st for special rates. Limited spots available, so register early!',
    image: '/images/card-nightlife.jpg',
    category: 'news',
    date: 'Mar 2026',
    size: 'small',
  },
]

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
              {highlight.description}
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