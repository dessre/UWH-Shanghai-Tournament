import { useState } from 'react'
import { MapPin, Waves, Utensils, Train, Hotel, Bus, Clock, ChevronDown, X } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/the-pool-2.jpg',
    alt: 'Shanghai JingAn Sports Center',
    title: 'Shanghai JingAn Sports Center',
    featured: true,
  },
  {
    src: '/images/water-quality.jpg',
    alt: 'Competition-grade Water Quality.',
    title: 'Competition-grade Water Quality',
    featured: false,
    featuredVertical: true,
  },
  {
    src: '/images/during-competition-1.jpg',
    alt: 'Underwater hockey competition',
    title: 'Competition Action',
    featured: false,
  },
  {
    src: '/images/during-competition-2.jpg',
    alt: 'Underwater hockey competition',
    title: 'Competition Action',
    featured: false,
  },
  {
    src: '/images/opening-ceremony.jpg',
    alt: 'Opening Ceremony',
    title: 'Opening Ceremony',
    featured: false,
  },
  {
    src: '/images/final-day.jpg',
    alt: 'Final Day',
    title: 'Final Day',
    featured: false,
  },
  {
    src: '/images/the-pool-3.jpg',
    alt: 'Preparation day',
    title: 'Preparation Session',
    featured: false,
  },
  {
    src: '/images/during-competition-3.jpg',
    alt: 'Competition Action',
    title: 'Competition Action',
    featured: false,
  },
]

const hotelGalleryImages = [
  {
    src: '/images/hotel.webp',
    alt: 'Yunfeng Grand Hotel',
    title: 'Yunfeng Grand Hotel',
    featured: true,
  },
  {
    src: '/images/hotel-entry.webp',
    alt: 'Hotel Entry',
    title: 'Hotel Entry',
    featured: false,
  },
  {
    src: '/images/hotel-lobby.webp',
    alt: 'Hotel Lobby',
    title: 'Hotel Lobby',
    featured: false,
  },
  {
    src: '/images/hotel-restaurant.webp',
    alt: 'Hotel Restaurant',
    title: 'Hotel Restaurant',
    featured: false,
  },
  {
    src: '/images/hotel-room.webp',
    alt: 'Hotel Room',
    title: 'Hotel Room',
    featured: false,
  },
  {
    src: '/images/1.jpg',
    alt: 'Gala Dinner',
    title: 'Gala Dinner',
    featured: false,
  },
  {
    src: '/images/2.jpg',
    alt: 'Gala dinner celebration',
    title: 'Celebration',
    featured: false,
  },
  {
    src: '/images/3.jpg',
    alt: 'Gala Dinner',
    title: 'Gala Dinner',
    featured: false,
  },
]

interface GalleryProps {
  images: typeof galleryImages
  title: string
  subtitle: string
}

function ExpandableGallery({ images, title, subtitle }: GalleryProps) {
  const [showAll, setShowAll] = useState(false)
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)
  const displayImages = showAll ? images : images.slice(0, 4)

  return (
    <>
      <div className="text-center mb-12">
        <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
          Gallery
        </span>
        <h2 className="text-3xl font-semibold text-white mb-4">
          {title.split(' ').map((word, i) => (
            i === title.split(' ').length - 1 ? (
              <span key={i} className="text-gradient">{word}</span>
            ) : (
              <span key={i}>{word} </span>
            )
          ))}
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayImages.map((image, index) => (
          <GalleryImage
            key={index}
            image={image}
            layout="vertical"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {images.length > 5 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00A9B5]/10 text-[#00A9B5] hover:bg-[#00A9B5]/20 transition-colors font-medium text-sm"
          >
            {showAll ? (
              <>
                <X className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                View More ({images.length - 5} more photos)
              </>
            )}
          </button>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[80vh]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </>
  )
}

interface GalleryImageProps {
  image: {
    src: string
    alt: string
    title: string
    featured: boolean
    featuredVertical?: boolean
  }
  layout?: 'horizontal' | 'vertical'
  onClick?: () => void
}

function GalleryImage({ image, layout = 'horizontal', onClick }: GalleryImageProps) {
  const { src, alt, title, featured, featuredVertical } = image

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    const sibling = target.previousElementSibling
    if (sibling) {
      sibling.remove()
    }
  }

  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden group cursor-pointer
        ${featured
          ? layout === 'vertical'
            ? 'col-span-2 md:col-span-3 lg:col-span-2 row-span-2 h-64 md:h-80 lg:h-96'
            : 'row-span-2 h-full'
          : featuredVertical
            ? 'row-span-2 h-80 md:h-96'
            : 'h-40 md:h-48'
        }
      `}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00A9B5]/20 to-transparent" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        onLoad={handleImageLoad}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-medium text-sm drop-shadow-lg">{title}</p>
      </div>
    </div>
  )
}

const poolFeatures = [
  {
    icon: Waves,
    title: 'Olympic-Standard Pool',
    desc: '50m swimming pool with adjustable depth, perfect for underwater hockey competitions.',
  },
  {
    icon: MapPin,
    title: 'City-Centered Location',
    desc: 'Located in the heart of Shanghai with easy access to attractions and transportation.',
  },
  {
    icon: Utensils,
    title: 'On-Site Dining',
    desc: 'International cuisine and dietary accommodations available on site.',
  },
]

const hotelInfo = {
  name: 'Yunfeng Grand Hotel',
  role: 'Tournament Partner Hotel',
  address: "1700 West Beijing Road, Jing'an District, Shanghai",
  addressCn: '静安区北京西路1700号',
  transport: [
    { icon: Train, label: 'Closest Metro', detail: "Jing'an Temple Station (Lines 2, 7, 14)" },
    { icon: Bus, label: 'By Car', detail: 'Driving distance to pool ~ 10min' },
    { icon: MapPin, label: 'Walking', detail: 'Walking distance to pool ~ 30min' },
  ],
}

const attractions = [
  {
    name: 'The Bund',
    desc: 'Historic waterfront with spectacular skyline views',
    distance: '2.5 km from hotel',
    travelTime: '15 min by Metro (Line 2)',
  },
  {
    name: 'Yu Garden',
    desc: 'Traditional Chinese garden from the Ming Dynasty',
    distance: '3.8 km from hotel',
    travelTime: '20 min by Metro (Line 10)',
  },
  {
    name: 'Shanghai Tower',
    desc: "China's tallest building with breathtaking views",
    distance: '4.2 km from hotel',
    travelTime: '25 min by Metro (Line 2)',
  },
]

export default function Venue() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="/images/the-pool-1.jpg"
            alt="Shanghai JingAn Sports Center"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B2F] via-[#001B2F]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
            Location
          </span>
          <h1 className="text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
            Venue & <span className="text-gradient">Accommodation</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            World-class facilities at the Shanghai JingAn Sports Center,
            featuring Olympic-standard pools designed for international
            underwater hockey competition.
          </p>
        </div>
      </section>

      {/* Pool Specs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">
                World-Class <span className="text-gradient">Facilities</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                The 2026 Underwater Hockey Shanghai Tournament will be held at Shanghai JingAn Sports Center. The venue features Olympic-standard pools with a world-class water renewal system, ensuring championship-level water quality and an optimal playing environment.
              </p>
              <div className="space-y-4">
                {poolFeatures.map((f) => {
                  const Icon = f.icon
                  return (
                    <div
                      key={f.title}
                      className="flex items-start gap-4 p-4 rounded-xl card-surface glow-border"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#00A9B5]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#00A9B5]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          {f.title}
                        </h4>
                        <p className="text-white/50 text-sm">{f.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-96">
              <img
                src="/images/the-pool-1.jpg"
                alt="Sports Center"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ExpandableGallery
            images={galleryImages}
            title="Venue & Competition"
            subtitle="Take a closer look at our world-class facilities and moments from previous tournaments."
          />
        </div>
      </section>

      {/* Pre-Tournament Pool Sessions */}
      <section id="pool-sessions" className="py-16 section-sand scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-8 rounded-2xl bg-white shadow-sm border border-[#00A9B5]/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#00A9B5]/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-[#00A9B5]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#001B2F]">
                  Pre-Tournament Pool <span className="text-[#00A9B5]">Sessions</span>
                </h2>
                <p className="text-[#001B2F]/50 text-sm">
                  Warm-up training schedule for registered teams
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center py-12 rounded-xl bg-[#001B2F]/5 border border-dashed border-[#001B2F]/10">
              <div className="text-center">
                <Clock className="w-12 h-12 text-[#00A9B5]/30 mx-auto mb-3" />
                <p className="text-[#001B2F] font-semibold text-lg">
                  Awaiting Updates
                </p>
                <p className="text-[#001B2F]/40 text-sm mt-1 max-w-md">
                  Specific warm-up training session times and dates will be
                  published here as the tournament approaches. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel */}
      <section className="py-16 section-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
                Accommodation
              </span>
              <h2 className="text-3xl font-semibold text-[#001B2F] mb-6">
                Tournament Partner <span className="text-[#00A9B5]">Hotel</span>
              </h2>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00A9B5]/10 flex items-center justify-center">
                    <Hotel className="w-6 h-6 text-[#00A9B5]" />
                  </div>
                  <div>
                    <h3 className="text-[#001B2F] font-semibold">
                      {hotelInfo.name}
                    </h3>
                    <span className="text-[#00A9B5] text-xs font-medium">
                      {hotelInfo.role}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-[#001B2F]/60 text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#00A9B5]" />
                    {hotelInfo.address}
                  </p>
                  <p className="text-[#001B2F]/40 text-sm pl-6">
                    {hotelInfo.addressCn}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#001B2F]/5">
                  <p className="text-[#001B2F]/70 text-sm mb-3 font-medium">
                    Location & Directions
                  </p>
                  <div className="space-y-2">
                    {hotelInfo.transport.map((t) => {
                      const Icon = t.icon
                      return (
                        <div
                          key={t.label}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Icon className="w-4 h-4 text-[#00A9B5] shrink-0" />
                          <span className="text-[#001B2F]/50">
                            {t.label}:
                          </span>
                          <span className="text-[#001B2F]">{t.detail}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <p className="text-amber-700 text-sm">
                  <span className="font-semibold">Important:</span> The Combo
                  Plan includes accommodation and round-trip bus between hotel
                  and venue. The deadline for this deal is July 31, 2026.
                </p>
              </div>
            </div>

            {/* Discover Shanghai */}
            <div>
              <h3 className="text-[#001B2F] font-semibold text-xl mb-6">
                Discover Shanghai
              </h3>
              <p className="text-[#001B2F]/60 mb-6">
                Between matches, explore Shanghai&apos;s vibrant culture,
                cuisine, and attractions. The tournament venue is strategically
                located with easy access to the city&apos;s most famous
                landmarks.
              </p>

              <div className="space-y-4">
                {attractions.map((spot) => (
                  <div
                    key={spot.name}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#00A9B5]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#00A9B5]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#001B2F] font-medium">{spot.name}</p>
                      <p className="text-[#001B2F]/50 text-sm">{spot.desc}</p>
                      <p className="text-[#00A9B5]/70 text-xs mt-1">
                        {spot.distance} · {spot.travelTime}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-[#00A9B5]/5 border border-[#00A9B5]/10">
                <p className="text-[#001B2F]/60 text-sm">
                  The tournament organizing committee offers assistance with
                  local transportation arrangements and accommodation bookings.
                  Please{' '}
                  <a
                    href="/registration"
                    className="text-[#00A9B5] hover:underline"
                  >
                    contact us
                  </a>{' '}
                  for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel & Gala Photo Gallery */}
      <section className="py-16 bg-[#001B2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ExpandableGallery
            images={hotelGalleryImages}
            title="Hotel & Gala Dinner"
            subtitle="Explore our partner hotel facilities and memorable moments from last year's gala dinner."
          />
        </div>
      </section>
    </main>
  )
}
