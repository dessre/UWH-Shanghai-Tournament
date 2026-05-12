import { useState } from 'react'
import { Plus, Minus, Users, Award, ClipboardList, Shield } from 'lucide-react'

interface Guideline {
  id: string
  icon: React.ElementType
  title: string
  content: string
}

const guidelines: Guideline[] = [
  {
    id: 'format',
    icon: Users,
    title: 'Competition Format',
    content:
      'The tournament follows a 6 v 6 format. Teams are formed by clubs, divided into men\'s and women\'s teams to compete in the corresponding categories. If clubs do not have enough players, they may form joint teams with other clubs. A new Youth Division (ages 10-14) has been added for the 2026 tournament.',
  },
  {
    id: 'awards',
    icon: Award,
    title: 'Awards & Prizes',
    content:
      'Each category will have champions, runners-up, and third-place finishers. Winners will receive trophies, medals, and cash prizes. Special awards include Best Goalkeeper, Top Scorer, and Fair Play Award.',
  },
  {
    id: 'registration',
    icon: ClipboardList,
    title: 'Welcome Orientation City Walk',
    content:
      'Awaiting Updates',
  },
  {
    id: 'eligibility',
    icon: Shield,
    title: 'Player Eligibility',
    content:
      'Athletes in the adult division must be at least 15 years old as of October 25, 2026. Youth division athletes must be between 15 and 18 years old. All participants must be registered members of their respective clubs and hold valid underwater hockey competition licenses.',
  },
]

export default function CompetitionGuidelines() {
  const [openId, setOpenId] = useState<string>('format')

  const toggle = (id: string) => {
    setOpenId(openId === id ? '' : id)
  }

  return (
    <section className="section-dark py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
            Rules & Info
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Competition{' '}
            <span className="text-gradient">Guidelines</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Everything you need to know about participating in the 2026 Shanghai
            UWH Tournament.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {guidelines.map((item) => {
            const Icon = item.icon
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#002A4E] border border-[#00A9B5]/20'
                    : 'bg-[#002A4E]/50 border border-transparent hover:border-white/5'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? 'bg-[#00A9B5]/20' : 'bg-white/5'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isOpen ? 'text-[#00A9B5]' : 'text-white/40'
                        }`}
                      />
                    </div>
                    <span
                      className={`font-semibold text-lg transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-white/70'
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#00A9B5] rotate-0'
                        : 'bg-white/5 rotate-0'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-white/60" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-white/60 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
