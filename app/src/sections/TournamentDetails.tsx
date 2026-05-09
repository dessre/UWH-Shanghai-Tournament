import { useEffect, useRef, useState } from 'react'
import { Calendar, MapPin, Users, Trophy } from 'lucide-react'

const details = [
  {
    icon: Calendar,
    label: 'Tournament Dates',
    value: 'October 23-25, 2026',
    sub: '3 days of competition',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Shanghai, China',
    sub: 'JingAn Sports Center',
  },
  {
    icon: Users,
    label: 'Eligibility',
    value: 'Open to International & Domestic Teams',
    sub: 'Adult + Youth divisions',
  },
  {
    icon: Trophy,
    label: 'Format',
    value: '6 v 6 Competition',
    sub: 'Club-based teams',
  },
]

export default function TournamentDetails() {
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-dark py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-3">
            <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
              2026 Tournament
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
              Tournament{' '}
              <span className="text-gradient">Details</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10 max-w-xl">
              The 2026 Shanghai Underwater Hockey Tournament welcomes both
              international and domestic teams. With the addition of a youth
              division, we are creating more opportunities for athletes of all
              ages to compete at the highest level.
            </p>

            {/* Detail cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className={`p-5 rounded-2xl card-surface glow-border transition-all duration-500 ${
                      visible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#00A9B5]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#00A9B5]" />
                      </div>
                      <span className="text-white/40 text-xs uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-white font-semibold text-lg">
                      {item.value}
                    </p>
                    <p className="text-white/40 text-sm mt-1">{item.sub}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/venue-center.jpg"
                alt="Shanghai JingAn Sports Center"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001B2F]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">
                  Shanghai JingAn Sports Center
                </p>
                <p className="text-white/60 text-sm">
                  Olympic-standard aquatic facilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
