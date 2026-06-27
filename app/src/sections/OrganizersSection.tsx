import { useEffect, useRef, useState } from 'react'

interface Organizer {
  name: string
  role: string
  category: 'authority' | 'organizer' | 'host' | 'venue'
  initials: string
  color: string
  logo?: string
}

const organizers: Organizer[] = [
  { name: 'Shanghai Sports Federation', role: 'Supervisory Authority', category: 'authority', initials: 'SSF', color: 'from-[#00A9B5] to-[#008B8B]', logo: '/images/logos/logo-shanghai-sports-federation.jpg' },
  { name: 'CROS Bretagne', role: 'Supervisory Authority', category: 'authority', initials: 'CROS', color: 'from-[#4FF6FF] to-[#00A9B5]', logo: '/images/logos/logo-cros-bretagne.jpg' },
  { name: 'Shanghai JiangAn Sports Federation', role: 'Organizer', category: 'organizer', initials: 'SJSF', color: 'from-purple-500 to-indigo-500', logo: '/images/logos/logo-shanghai-jiang-an-sports-federation.png' },
  { name: 'FFESSM', role: 'Organizer', category: 'organizer', initials: 'FFE', color: 'from-amber-500 to-orange-500', logo: '/images/logos/logo-ffessm.png' },
  { name: 'Shanghai Azures UWH Club', role: 'Host Club', category: 'host', initials: 'SAU', color: 'from-emerald-500 to-teal-500', logo: '/images/logos/logo-shanghai-azures-uwh-club.png' },
  { name: 'Shanghai JingAn Sports Center', role: 'Venue Sponsor', category: 'venue', initials: 'SJSC', color: 'from-rose-500 to-pink-500', logo: '/images/logos/logo-shanghai-jing-an-sports-center.png' },
]

const sponsors = [
  'Shanghai JingAn Sports Center',
  'Shanghai Tourism Board',
  'Mysterious Guest',
  'FFESSM',
]

export default function OrganizersSection() {
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
        {/* Organizers */}
        <div className="text-center mb-16">
          <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
            Partners
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Organized & <span className="text-gradient">Hosted By</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {organizers.map((org, i) => (
            <div
              key={org.name}
              className={`p-6 rounded-2xl card-surface glow-border text-center transition-all duration-500 ${
                visible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Logo */}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden`}>
                <img
                  src={org.logo}
                  alt={org.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                  org.category === 'authority'
                    ? 'bg-[#00A9B5]/10 text-[#00A9B5]'
                    : org.category === 'organizer'
                    ? 'bg-purple-500/10 text-purple-400'
                    : org.category === 'venue'
                    ? 'bg-rose-500/10 text-rose-400'
                    : 'bg-amber-500/10 text-amber-400'
                }`}
              >
                {org.role}
              </div>
              <h3 className="text-white font-semibold text-lg">{org.name}</h3>
            </div>
          ))}
        </div>

        {/* Key dates */}
        <div
          className={`max-w-3xl mx-auto mb-20 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <h3 className="text-center text-white font-semibold text-2xl mb-8">
            Key Dates to Remember
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#00A9B5]/10 to-transparent border border-[#00A9B5]/20">
              <p className="text-[#00A9B5] font-semibold text-2xl mb-1">
                August 15
              </p>
              <p className="text-white/60 text-sm">Early Bird Deadline</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#00A9B5]/10 to-transparent border border-[#00A9B5]/20">
              <p className="text-[#00A9B5] font-semibold text-2xl mb-1">
                September 25
              </p>
              <p className="text-white/60 text-sm">Registration Deadline</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#4FF6FF]/10 to-transparent border border-[#4FF6FF]/20">
              <p className="text-[#4FF6FF] font-semibold text-2xl mb-1">
                Oct 23-25
              </p>
              <p className="text-white/60 text-sm">Tournament Days</p>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#001B2F] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#001B2F] to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map(
              (sponsor, i) => (
                <span
                  key={i}
                  className="inline-flex items-center mx-8 text-white/20 hover:text-white/40 transition-colors text-lg font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00A9B5]/40 mr-4" />
                  {sponsor}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
