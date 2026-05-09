import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'

const footerLinks = [
  {
    title: 'Tournament',
    links: [
      { name: 'Registration', path: '/registration' },
      { name: 'Teams', path: '/teams' },
    ],
  },
  {
    title: 'Information',
    links: [
      { name: 'Venue', path: '/venue' },
      { name: 'Visit Shanghai', path: '/visit-shanghai' },
      { name: 'Contact', path: '/registration' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#001019] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A9B5] to-[#008B8B] flex items-center justify-center">
                <span className="text-white font-bold">UWH</span>
              </div>
              <span className="text-white font-semibold">
                Shanghai Tournament
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Underwater Hockey Shanghai Tournament — an international
              competition bringing together the world&apos;s best underwater
              hockey athletes.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:shanghaiazuresuwh@163.com"
                className="flex items-center gap-2 text-white/50 hover:text-[#00A9B5] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                shanghaiazuresuwh@163.com
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                Shanghai JingAn Sports Center
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-white font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/50 hover:text-[#00A9B5] transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Organizers */}
          <div>
            <h3 className="text-white font-semibold mb-4">Organized By</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Shanghai Sports Federation</li>
              <li>CROS Bretagne</li>
              <li>Shanghai JiangAn Sports Federation</li>
              <li>FFESSM</li>
              <li className="pt-2 text-[#00A9B5]">Host: Shanghai Azures UWH Club</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; 2025-2026 Underwater Hockey Shanghai Tournament. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/30 text-xs hover:text-white/50 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-white/30 text-xs hover:text-white/50 cursor-pointer transition-colors">
              Terms and Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
