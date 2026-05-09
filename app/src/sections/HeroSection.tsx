import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin } from 'lucide-react'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !textRef.current) return
      const scrollY = window.scrollY
      const heroHeight = heroRef.current.offsetHeight
      if (scrollY < heroHeight) {
        const progress = scrollY / heroHeight
        textRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
        textRef.current.style.opacity = `${1 - progress * 1.2}`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[700px] flex items-end pb-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Underwater Hockey"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001B2F] via-[#001B2F]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001B2F]/60 to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full"
      >
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A9B5]/20 border border-[#00A9B5]/30 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#4FF6FF] animate-pulse" />
            <span className="text-[#4FF6FF] text-xs font-medium tracking-wider uppercase">
              2026 International Tournament
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s', textShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
            SHANGHAI
            <br />
            <span className="text-gradient">UWH 2026</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Dive into Excellence | October 23rd - 25th | Shanghai, China
          </p>

          {/* Info pills */}
          <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Calendar className="w-4 h-4 text-[#00A9B5]" />
              <span className="text-white/80 text-sm">Oct 23-25, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <MapPin className="w-4 h-4 text-[#00A9B5]" />
              <span className="text-white/80 text-sm">Shanghai, China</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/registration" className="btn-filled inline-flex items-center gap-2">
              Register Now
            </Link>
            <Link to="/teams" className="btn-primary inline-flex items-center gap-2">
              View Teams
            </Link>
          </div>
        </div>
      </div>

    </section>
  )
}
