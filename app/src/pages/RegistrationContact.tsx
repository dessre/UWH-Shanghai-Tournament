import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  Shirt,
  Hotel,
  Bus,
  UtensilsCrossed,
  Plus,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const plans = [
  {
    name: 'Basic Plan',
    priceEarly: { cny: 'TBC', eur: 'TBC' },
    priceNormal: { cny: 'TBC', eur: 'TBC' },
    earlyDeadline: 'July 31, 2026',
    normalDeadline: 'September 15, 2026',
    color: 'from-[#00A9B5]/20 to-[#00A9B5]/5',
    borderColor: 'border-[#00A9B5]/30',
    features: [
      { icon: Check, text: "1 person's registration fee" },
      { icon: Shirt, text: '1 event T-shirt' },
      { icon: UtensilsCrossed, text: 'Lunches on October 23-25, 2026' },
    ],
  },
  {
    name: 'Combo Plan',
    price: { cny: 'TBC', eur: 'TBC' },
    deadline: 'July 31, 2026',
    color: 'from-[#4FF6FF]/20 to-[#4FF6FF]/5',
    borderColor: 'border-[#4FF6FF]/30',
    popular: true,
    features: [
      { icon: Check, text: "1 person's registration fee" },
      { icon: Shirt, text: '1 event T-shirt' },
      { icon: Hotel, text: 'Accommodation (twin room) & breakfast for 3 nights' },
      { icon: Bus, text: 'Round-trip bus between hotel and venue' },
      { icon: UtensilsCrossed, text: 'Post-event banquet' },
      { icon: UtensilsCrossed, text: 'Lunches on October 23-25, 2026' },
    ],
  },
]

const addOns = [
  {
    name: 'Accommodation + Bus + Breakfast',
    price: 'TBC',
  },
  {
    name: 'Post-event banquet',
    price: 'TBC',
  },
]

export default function RegistrationContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/card-pool.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001B2F] via-[#001B2F]/95 to-[#001B2F]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-[#00A9B5] text-xs font-medium tracking-[0.15em] uppercase mb-3 block">
            Join Us
          </span>
          <h1 className="text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4">
            Registration & <span className="text-gradient">Contact</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Register your team for the 2026 Shanghai UWH Tournament or reach out
            to us with any questions.
          </p>
        </div>
      </section>

      {/* Registration Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-3">
              Registration <span className="text-gradient">Options</span>
            </h2>
            <p className="text-white/50">
              Choose the plan that works best for you and your team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 border ${plan.borderColor} bg-gradient-to-br ${plan.color}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#00A9B5] to-[#4FF6FF] text-[#001B2F] text-xs font-bold">
                    RECOMMENDED
                  </div>
                )}
                <h3 className="text-white font-semibold text-xl mb-4">
                  {plan.name}
                </h3>

                {'priceEarly' in plan ? (
                  <div className="space-y-3 mb-6">
                    <div className="p-4 rounded-xl bg-[#001B2F]/50">
                      <p className="text-white/50 text-sm mb-1">
                        Early bird price (until {plan.earlyDeadline})
                      </p>
                      <p className="text-white font-bold text-2xl">
                        CNY {(plan.priceEarly as { cny: string }).cny} / €{' '}
                        {(plan.priceEarly as { eur: string }).eur}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#001B2F]/30">
                      <p className="text-white/50 text-sm mb-1">
                        Normal price (until {plan.normalDeadline})
                      </p>
                      <p className="text-white font-bold text-2xl">
                        CNY {(plan.priceNormal as { cny: string }).cny} / €{' '}
                        {(plan.priceNormal as { eur: string }).eur}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-[#001B2F]/50 mb-6">
                    <p className="text-white/50 text-sm mb-1">
                      Price (until {plan.deadline})
                    </p>
                    <p className="text-white font-bold text-2xl">
                      CNY {(plan.price as { cny: string }).cny} / €{' '}
                      {(plan.price as { eur: string }).eur}
                    </p>
                  </div>
                )}

                <ul className="space-y-3">
                  {plan.features.map((f) => {
                    const Icon = f.icon
                    return (
                      <li
                        key={f.text}
                        className="flex items-center gap-3 text-white/70 text-sm"
                      >
                        <Icon className="w-4 h-4 text-[#00A9B5] shrink-0" />
                        {f.text}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-white font-semibold text-xl mb-4 flex items-center gap-2">
              <Plus className="w-5 h-5 text-[#00A9B5]" />
              Optional Add-ons
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="p-4 rounded-xl card-surface glow-border"
                >
                  <p className="text-white font-medium text-sm mb-1">
                    {addon.name}
                  </p>
                  <p className="text-[#00A9B5] text-sm">{addon.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 section-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-semibold text-[#001B2F] mb-6">
                Get in <span className="text-[#00A9B5]">Touch</span>
              </h2>
              <p className="text-[#001B2F]/60 mb-8">
                We are here to answer any questions about the 2026 Underwater
                Hockey Shanghai Tournament. Reach out through any of the
                following methods.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00A9B5]/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#00A9B5]" />
                  </div>
                  <div>
                    <p className="text-[#001B2F] font-semibold mb-1">Email</p>
                    <a
                      href="mailto:shanghaiazuresuwh@163.com"
                      className="text-[#001B2F]/60 hover:text-[#00A9B5] transition-colors"
                    >
                      shanghaiazuresuwh@163.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00A9B5]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#00A9B5]" />
                  </div>
                  <div>
                    <p className="text-[#001B2F] font-semibold mb-1">
                      Tournament Office
                    </p>
                    <p className="text-[#001B2F]/60 text-sm">
                      Shanghai JingAn Sports Federation
                      <br />
                      728 Changping Road
                      <br />
                      JingAn Area, Shanghai, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00A9B5]/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#00A9B5]" />
                  </div>
                  <div>
                    <p className="text-[#001B2F] font-semibold mb-1">
                      Response Time
                    </p>
                    <p className="text-[#001B2F]/60 text-sm">
                      We aim to respond to all inquiries within 48 hours during
                      business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12 p-6 rounded-2xl bg-[#001B2F]/5 border border-[#001B2F]/10">
                <h3 className="text-[#001B2F] font-semibold mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-[#001B2F]/60 text-sm mb-4">
                  Can&apos;t find the answer you&apos;re looking for? Check our
                  comprehensive rules page for more information.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1 text-[#00A9B5] text-sm font-medium hover:underline"
                >
                  View Tournament Rules
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-[#001B2F]/5">
              <h3 className="text-[#001B2F] font-semibold text-xl mb-6">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#00A9B5]/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-[#00A9B5]" />
                  </div>
                  <h4 className="text-[#001B2F] font-semibold text-lg mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-[#001B2F]/60 text-sm">
                    We&apos;ll get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#001B2F]/70 text-sm font-medium mb-1.5">
                      Your Name *
                    </label>
                    <Input
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="border-[#001B2F]/10 focus:border-[#00A9B5] focus:ring-[#00A9B5]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[#001B2F]/70 text-sm font-medium mb-1.5">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border-[#001B2F]/10 focus:border-[#00A9B5] focus:ring-[#00A9B5]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[#001B2F]/70 text-sm font-medium mb-1.5">
                      Subject *
                    </label>
                    <Input
                      required
                      placeholder="Enter message subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="border-[#001B2F]/10 focus:border-[#00A9B5] focus:ring-[#00A9B5]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[#001B2F]/70 text-sm font-medium mb-1.5">
                      Message *
                    </label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Enter your message here"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="border-[#001B2F]/10 focus:border-[#00A9B5] focus:ring-[#00A9B5]/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#00A9B5] to-[#008B8B] text-white font-medium hover:shadow-lg hover:shadow-[#00A9B5]/20 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
