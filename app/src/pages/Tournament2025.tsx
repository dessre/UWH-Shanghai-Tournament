import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Users, Award, ArrowLeft, Check } from 'lucide-react'

const stats = [
  { label: 'Teams', value: '6+' },
  { label: 'Countries', value: '4' },
  { label: 'Players', value: '72+' },
  { label: 'Matches', value: '20+' },
]

const teams = [
  { name: 'Shanghai Azures', country: 'China', role: 'Host' },
  { name: 'Singapore UWH', country: 'Singapore', role: 'Participant' },
  { name: 'International Teams', country: 'Various', role: 'Participants' },
]

const highlights = [
  {
    title: 'Opening Ceremony',
    desc: 'A spectacular opening ceremony welcomed athletes from around the world, featuring cultural performances and the parade of nations.',
    image: '/images/card-game.jpg',
  },
  {
    title: 'Intense Competition',
    desc: 'Two days of fierce but friendly competition in the Olympic-standard pool at Shanghai JingAn Sports Center.',
    image: '/images/card-pool.jpg',
  },
  {
    title: 'Award Ceremony',
    desc: 'Winners were celebrated with trophies, medals, and prizes at the stunning awards ceremony.',
    image: '/images/card-award.jpg',
  },
  {
    title: 'Shanghai Experience',
    desc: 'Participants explored the best of Shanghai — from The Bund to Yu Garden and beyond.',
    image: '/images/card-shanghai.jpg',
  },
]

const rules2025 = [
  'Each club team may register one team manager, one captain, and one coach',
  'Each team can register 6-12 players',
  'All participating players must purchase their own competition insurance',
  'Athletes must be at least 15 years old as of October 26, 2025',
  'Teams are formed by clubs, divided into men\'s and women\'s categories',
  'Joint teams allowed if clubs do not have enough players',
]

export default function Tournament2025() {
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
            src="/images/hero-bg.jpg"
            alt="2025 Tournament"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001B2F] via-[#001B2F]/90 to-[#001B2F]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#00A9B5] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to 2026 Tournament
          </Link>
          <div className="max-w-3xl">
            <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
              Previous Event
            </span>
            <h1 className="text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
              2025 <span className="text-gradient">Tournament</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Looking back at our inaugural international tournament that brought
              together underwater hockey teams from across the globe to Shanghai.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Calendar className="w-4 h-4 text-[#00A9B5]" />
                <span className="text-white/80 text-sm">Oct 25-26, 2025</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-4 h-4 text-[#00A9B5]" />
                <span className="text-white/80 text-sm">Shanghai, China</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Users className="w-4 h-4 text-[#00A9B5]" />
                <span className="text-white/80 text-sm">
                  Open to International Teams
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={sectionRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center p-6 rounded-2xl card-surface glow-border transition-all duration-500 ${
                  visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p className="text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-semibold text-white mb-8">
            Tournament <span className="text-gradient">Highlights</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl overflow-hidden h-64"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001B2F] via-[#001B2F]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-semibold text-xl mb-1 group-hover:text-[#4FF6FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">
                2025 Competition{' '}
                <span className="text-gradient">Rules</span>
              </h2>
              <ul className="space-y-4">
                {rules2025.map((rule) => (
                  <li key={rule} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00A9B5]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#00A9B5]" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">
                      {rule}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-white mb-6">
                Participating <span className="text-gradient">Teams</span>
              </h2>
              <div className="space-y-3">
                {teams.map((team) => (
                  <div
                    key={team.name}
                    className="flex items-center justify-between p-4 rounded-xl card-surface glow-border"
                  >
                    <div>
                      <p className="text-white font-medium">{team.name}</p>
                      <p className="text-white/40 text-sm">{team.country}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#00A9B5]/10 text-[#00A9B5] text-xs font-medium">
                      {team.role}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#00A9B5]/10 to-transparent border border-[#00A9B5]/20">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-[#00A9B5]" />
                  <span className="text-white font-semibold">
                    Chief Referee
                  </span>
                </div>
                <p className="text-white font-medium text-lg">Helen Canavan</p>
                <p className="text-white/50 text-sm">
                  Chief Referee & Training Director — overseeing fair play and
                  providing referee training guidance throughout the tournament.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
            Ready for <span className="text-gradient">2026?</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">
            Join us for an even bigger and better tournament in 2026 with the
            addition of a youth division and expanded programming.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/registration" className="btn-filled">
              Register for 2026
            </Link>
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
