import { useEffect, useRef, useState } from 'react'
import {
  MapPin,
  Train,
  Plane,
  Bus,
  Globe,
  Coffee,
  Camera,
  UtensilsCrossed,
  Map,
} from 'lucide-react'

interface Attraction {
  name: string
  description: string
  image: string
  tag: string
}

const attractions: Attraction[] = [
  {
    name: 'The Bund',
    description:
      'Historic waterfront area with spectacular views of Shanghai skyline. The iconic colonial-era buildings on one side and the futuristic Pudong skyline on the other create a stunning contrast.',
    image: '/images/shanghai-bund.jpg',
    tag: 'Must See',
  },
  {
    name: 'Yu Garden',
    description:
      'Traditional Chinese garden dating back to the Ming Dynasty. A peaceful oasis in the heart of the city with classical pavilions, rockeries, and koi ponds.',
    image: '/images/shanghai-yuyuan.jpg',
    tag: 'Culture',
  },
  {
    name: 'Shanghai Tower',
    description:
      "China's tallest building offering breathtaking views from the observation deck. The twisting architectural design is iconic.",
    image: '/images/shanghai-tower.jpg',
    tag: 'Landmark',
  },
  {
    name: 'Nanjing Road',
    description:
      "Shanghai's premier shopping street, bustling with energy day and night. From luxury brands to local boutiques, it's a shopper's paradise.",
    image: '/images/card-nightlife.jpg',
    tag: 'Shopping',
  },
]

const foodExperiences = [
  {
    name: 'Xiaolongbao (Soup Dumplings)',
    description:
      'Shanghai most famous delicacy — delicate steamed dumplings filled with pork and hot soup.',
    image: '/images/shanghai-food.jpg',
  },
  {
    name: 'Local Night Markets',
    description:
      'Explore vibrant night markets offering street food, snacks, and a lively atmosphere.',
    image: '/images/card-shanghai.jpg',
  },
]

const transportOptions = [
  {
    icon: Plane,
    name: 'By Air',
    detail: 'Pudong (PVG) or Hongqiao (SHA) airports',
  },
  {
    icon: Train,
    name: 'By Train',
    detail: 'High-speed rail connects Shanghai to major cities',
  },
  {
    icon: Bus,
    name: 'Local Transport',
    detail: 'Extensive Metro system ( Lines 1, 2, 7, 14 near venue )',
  },
]

const tips = [
  {
    icon: Globe,
    title: 'Language',
    desc: 'English is widely spoken in tourist areas. Download a translation app for convenience.',
  },
  {
    icon: Coffee,
    title: 'Currency',
    desc: 'Chinese Yuan (CNY). Credit cards and mobile payments (WeChat/Alipay) are widely accepted.',
  },
  {
    icon: Camera,
    title: 'Best Time to Visit',
    desc: 'October offers pleasant weather (15-25°C) — perfect for exploring the city.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Dining',
    desc: 'From Michelin-starred restaurants to street food stalls, Shanghai has it all.',
  },
]

export default function VisitShanghai() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/shanghai-bund.jpg"
            alt="Shanghai"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001B2F] via-[#001B2F]/90 to-[#001B2F]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
            Travel Guide
          </span>
          <h1 className="text-5xl lg:text-7xl font-semibold text-white leading-tight mb-4">
            Visit <span className="text-gradient">Shanghai</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Experience one of the world most dynamic cities. From futuristic
            skylines to ancient gardens, Shanghai offers an unforgettable journey
            for every visitor.
          </p>
        </div>
      </section>

      {/* Welcome Orientation CityWalk */}
      <section className="py-16 section-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 rounded-2xl bg-white shadow-sm border border-[#00A9B5]/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#00A9B5]/10 flex items-center justify-center">
                <Map className="w-7 h-7 text-[#00A9B5]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#001B2F]">
                  Welcome Orientation <span className="text-[#00A9B5]">CityWalk</span>
                </h2>
                <p className="text-[#001B2F]/50 text-sm">
                  Guided tour for tournament participants
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center py-12 rounded-xl bg-[#001B2F]/5 border border-dashed border-[#001B2F]/10">
              <div className="text-center">
                <Map className="w-12 h-12 text-[#00A9B5]/30 mx-auto mb-3" />
                <p className="text-[#001B2F] font-semibold text-lg">
                  Oct 22, 23, 24
                </p>
                <p className="text-[#001B2F]/40 text-sm mt-1 max-w-md">
                  Detailed itinerary and registration information will be
                  published here as the tournament approaches. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section ref={sectionRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-3">
              Must-See <span className="text-gradient">Attractions</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Iconic landmarks and hidden gems that make Shanghai one of the
              world most exciting destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attr, i) => (
              <div
                key={attr.name}
                className={`group relative rounded-2xl overflow-hidden h-80 transition-all duration-500 ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <img
                  src={attr.image}
                  alt={attr.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001B2F] via-[#001B2F]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#00A9B5]/20 backdrop-blur-sm text-[#4FF6FF] text-xs font-medium border border-[#00A9B5]/30">
                    {attr.tag}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-[#4FF6FF] transition-colors">
                    {attr.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {attr.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food */}
      <section className="py-16 section-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
                Culinary Journey
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#001B2F] mb-6">
                Food & <span className="text-[#00A9B5]">Dining</span>
              </h2>
              <p className="text-[#001B2F]/60 leading-relaxed mb-8">
                Shanghai is a food lover&apos;s paradise. From world-class
                restaurants to humble street stalls, the city offers an
                incredible range of culinary experiences. Don&apos;t miss the
                chance to try authentic xiaolongbao, shengjianbao, and other
                local specialties.
              </p>
              <div className="space-y-4">
                {foodExperiences.map((food) => (
                  <div
                    key={food.name}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm"
                  >
                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-16 h-16 rounded-lg object-cover shrink-0"
                    />
                    <div>
                      <h4 className="text-[#001B2F] font-semibold text-sm mb-1">
                        {food.name}
                      </h4>
                      <p className="text-[#001B2F]/50 text-sm">
                        {food.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-96">
              <img
                src="/images/shanghai-food.jpg"
                alt="Shanghai Cuisine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B2F]/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-3">
              Getting <span className="text-gradient">Around</span>
            </h2>
            <p className="text-white/50">
              Shanghai has excellent international accessibility and a convenient
              public transportation system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {transportOptions.map((t) => {
              const Icon = t.icon
              return (
                <div
                  key={t.name}
                  className="text-center p-8 rounded-2xl card-surface glow-border"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#00A9B5]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#00A9B5]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{t.name}</h3>
                  <p className="text-white/50 text-sm">{t.detail}</p>
                </div>
              )
            })}
          </div>

          {/* Venue location */}
          <div className="p-6 rounded-2xl card-surface glow-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00A9B5]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#00A9B5]" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">
                  Tournament Venue
                </h3>
                <p className="text-white/60 text-sm mb-2">
                  Shanghai JingAn Sports Center — Located in the city centre
                  with easy access to attractions and transportation.
                </p>
                <p className="text-[#00A9B5] text-sm">
                  Closest Metro: Jing&apos;an Temple Station (Lines 2, 7, 14)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 section-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-[#001B2F] text-center mb-12">
            Practical <span className="text-[#00A9B5]">Tips</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip) => {
              const Icon = tip.icon
              return (
                <div
                  key={tip.title}
                  className="p-6 rounded-2xl bg-white shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00A9B5]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#00A9B5]" />
                  </div>
                  <h3 className="text-[#001B2F] font-semibold mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-[#001B2F]/50 text-sm leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
