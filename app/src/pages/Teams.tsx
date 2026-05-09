import { useState } from 'react'
import { Search, Users, MapPin, Filter } from 'lucide-react'

interface Team {
  id: number
  name: string
  country: string
  description: string
  level: 'Elite' | 'Advanced' | 'Intermediate' | 'Beginner'
  players: number
}

const teams2026: Team[] = [
  {
    id: 1,
    name: 'Shanghai Azures',
    country: 'China',
    description: 'Host team from Shanghai with strong local talent and international experience.',
    level: 'Elite',
    players: 12,
  },
  {
    id: 2,
    name: 'TBD — Register Your Team',
    country: 'International',
    description: 'Team slots are now open for registration. Join us in Shanghai!',
    level: 'Elite',
    players: 0,
  },
  {
    id: 3,
    name: 'TBD — Register Your Team',
    country: 'International',
    description: 'Team slots are now open for registration. Join us in Shanghai!',
    level: 'Advanced',
    players: 0,
  },
  {
    id: 4,
    name: 'TBD — Youth Division',
    country: 'International',
    description: 'Youth division (ages 15-18) slots available. A new addition for 2026!',
    level: 'Beginner',
    players: 0,
  },
]

const teams2025: Team[] = [
  {
    id: 1,
    name: 'Shanghai Azures',
    country: 'China',
    description: 'Host team from Shanghai with strong local talent and international experience.',
    level: 'Elite',
    players: 12,
  },
  {
    id: 2,
    name: 'Singapore UWH',
    country: 'Singapore',
    description: 'Fast-improving team with young talented players making their mark in Asia.',
    level: 'Advanced',
    players: 12,
  },
]

const levels = ['All Levels', 'Elite', 'Advanced', 'Intermediate', 'Beginner']

export default function Teams() {
  const [search, setSearch] = useState('')
  const [levelFilter, setLevelFilter] = useState('All Levels')
  const [show2025, setShow2025] = useState(false)

  const currentTeams = show2025 ? teams2025 : teams2026

  const filtered = currentTeams.filter((team) => {
    const matchesSearch =
      search === '' ||
      team.name.toLowerCase().includes(search.toLowerCase()) ||
      team.country.toLowerCase().includes(search.toLowerCase())
    const matchesLevel =
      levelFilter === 'All Levels' || team.level === levelFilter
    return matchesSearch && matchesLevel
  })

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/card-game.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001B2F] via-[#001B2F]/95 to-[#001B2F]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
            Competitors
          </span>
          <h1 className="text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
            Participating <span className="text-gradient">Teams</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Meet the international teams competing in the Shanghai Underwater
            Hockey Tournament. From elite champions to rising stars.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search by team name or country"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#002A4E] border border-white/5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00A9B5]/50 text-sm"
              />
            </div>
            {/* Level filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="pl-10 pr-8 py-3 rounded-xl bg-[#002A4E] border border-white/5 text-white text-sm appearance-none focus:outline-none focus:border-[#00A9B5]/50 cursor-pointer"
              >
                {levels.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Toggle 2025/2026 */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setShow2025(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !show2025
                  ? 'bg-[#00A9B5] text-white'
                  : 'bg-white/5 text-white/50 hover:text-white'
              }`}
            >
              2026 Teams
            </button>
            <button
              onClick={() => setShow2025(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                show2025
                  ? 'bg-[#00A9B5] text-white'
                  : 'bg-white/5 text-white/50 hover:text-white'
              }`}
            >
              2025 Teams
            </button>
          </div>

          {/* Team cards */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((team) => (
                <div
                  key={team.id}
                  className="p-6 rounded-2xl card-surface glow-border group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00A9B5]/20 to-[#008B8B]/20 flex items-center justify-center text-2xl">
                      {team.name.charAt(0)}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        team.level === 'Elite'
                          ? 'bg-[#00A9B5]/10 text-[#00A9B5]'
                          : team.level === 'Advanced'
                          ? 'bg-purple-500/10 text-purple-400'
                          : 'bg-white/5 text-white/40'
                      }`}
                    >
                      {team.level}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-[#4FF6FF] transition-colors">
                    {team.name}
                  </h3>
                  <div className="flex items-center gap-1 text-white/40 text-sm mb-3">
                    <MapPin className="w-3 h-3" />
                    {team.country}
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {team.description}
                  </p>

                  {team.players > 0 && (
                    <div className="flex items-center gap-1 text-white/40 text-sm pt-4 border-t border-white/5">
                      <Users className="w-4 h-4" />
                      {team.players} players
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-white/30 text-lg">No teams found</p>
            </div>
          )}

          {/* CTA */}
          {!show2025 && (
            <div className="text-center mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#00A9B5]/10 to-transparent border border-[#00A9B5]/20">
              <p className="text-white mb-4">
                Don&apos;t see your team? Register your interest to participate!
              </p>
              <a href="/registration" className="btn-filled inline-flex">
                Register Your Team
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
