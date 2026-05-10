import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#001019] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00A9B5] to-[#008B8B] flex items-center justify-center">
                <span className="text-white font-bold text-sm">UWH</span>
              </div>
              <span className="text-white font-semibold">Shanghai Tournament</span>
            </div>
            <p className="text-white/40 text-xs leading-relaxed max-w-sm">
              Underwater Hockey Shanghai Tournament — an international competition
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:shanghaiazuresuwh@163.com"
              className="flex items-center gap-2 text-white/50 hover:text-[#00A9B5] transition-colors"
            >
              <Mail className="w-4 h-4" />
              shanghaiazuresuwh@163.com
            </a>
            <div className="flex items-center gap-2 text-white/50">
              <MapPin className="w-4 h-4 shrink-0" />
              Shanghai JingAn Sports Center
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
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
