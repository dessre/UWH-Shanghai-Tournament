import { Link } from 'react-router-dom'

export interface HighlightCard {
  id: number
  title: string
  shortDescription: string
  fullDescription: React.ReactNode
  image: string
  category: 'merchandise' | 'training' | 'events' | 'news'
  date: string
  size: 'large' | 'medium' | 'small'
  pinned?: boolean
}

export const highlights: HighlightCard[] = [
  {
    id: 1,
    title: '2026 Tournament Merchandise Collection',
    shortDescription: 'Exclusive UWH Shanghai 2026 apparel, towels, and accessories now available for pre-order. Limited edition designs featuring our signature underwater art theme.',
    fullDescription: 'Exclusive UWH Shanghai 2026 apparel, towels, and accessories now available for pre-order. Limited edition designs featuring our signature underwater art theme.',
    image: '/images/card-merch.jpg',
    category: 'merchandise',
    date: 'Apr 2026',
    size: 'small',
  },
  {
    id: 2,
    title: 'Venue Early Access Details',
    shortDescription: 'Wednesday, October 21st & Thursday, October 22nd, 2026. Daily training sessions: Morning 09:00-11:00, Afternoon 14:00-16:00, Evening 18:00-20:00.',
    fullDescription: (
      <>
        <h3 className="text-xl font-semibold text-white mb-3">Venue Early Access Details</h3>
        <p className="text-white/80 mb-4">
          Get ready for the tournament with exclusive early access to the venue. Open warm-up training at the pool for all registered teams.
        </p>
        <div className="mb-4">
          <p className="text-white font-medium mb-1">Opening Dates</p>
          <p className="text-white/80">Wednesday, October 21st & Thursday, October 22nd, 2026</p>
        </div>
        <div className="mb-4">
          <p className="text-white font-medium mb-1">Daily Training Sessions</p>
          <ul className="list-disc pl-5 text-white/80 space-y-1">
            <li>Morning: 09:00 - 11:00</li>
            <li>Afternoon: 14:00 - 16:00</li>
            <li>Evening: 18:00 - 20:00</li>
          </ul>
        </div>
        <p className="text-white/80">
          Advanced booking is recommended to secure your slot. Please visit the{' '}
          <Link to="/venue#pool-sessions" className="text-[#4FF6FF] hover:underline">venue page</Link>{' '}
          for more details.
        </p>
      </>
    ),
    image: '/images/the-pool-2.jpg',
    category: 'training',
    date: 'Oct 21-22, 2026',
    size: 'medium',
    pinned: true,
  },
  {
    id: 3,
    title: 'Welcome Orientation CityWalk - Free for All',
    shortDescription: 'Explore Shanghai while meeting others.',
    fullDescription: (
      <>
        Welcome walk | Central Shanghai, Early Evening. Open to all participants: athletes, referees, and tournament staff. Route covers the hotel district and nearby riverfront. Explore Shanghai at its liveliest while meeting the faces behind the tournament - a relaxed way to connect before game day.{' '}
        <Link to="/visit-shanghai#citywalk" className="text-[#4FF6FF] hover:underline">Learn more</Link>
        <img
          src="/images/QR_KM.png"
          alt="QR code for Welcome Orientation CityWalk registration"
          className="mt-6 w-40 h-40 rounded-lg"
        />
      </>
    ),
    image: '/images/card-shanghai.jpg',
    category: 'events',
    date: 'Oct 21-22, 2026',
    size: 'large',
    pinned: true,
  },
  {
    id: 4,
    title: 'Youth Division Added for 2026',
    shortDescription: 'We are excited to announce a new youth division (ages 10-14) for the 2026 tournament, expanding opportunities for young athletes.',
    fullDescription: 'We are excited to announce a new youth division (ages 10-14) for the 2026 tournament, expanding opportunities for young athletes. This division will feature its own dedicated matches and awards.',
    image: '/images/youth-division.jpg',
    category: 'news',
    date: 'Mar 2026',
    size: 'small',
  },
  {
    id: 5,
    title: 'Custom Shanghai CityWalk & Travel',
    shortDescription: 'Looking for customized Shanghai citywalk routes or travel plans? We design personalized walking tours just for you.',
    fullDescription: (
      <>
        Want to explore more of Shanghai beyond the tournament? We offer customized citywalk routes and travel recommendations tailored to your interests—historic lanes, modern architecture, local food, hidden neighborhoods, and more. Scan the QR code to contact our team and plan your personalized Shanghai experience.
        <img
          src="/images/QR_KM.png"
          alt="QR code to contact us for customized Shanghai citywalk routes"
          className="mt-6 w-40 h-40 rounded-lg"
        />
      </>
    ),
    image: '/images/shanghai-flower.jpg',
    category: 'events',
    date: 'Oct, 2026',
    size: 'small',
    pinned: true,
  },
  {
    id: 6,
    title: 'Awards Ceremony & After Party',
    shortDescription: 'Join us for the grand awards ceremony followed by a celebration at one of Shanghai premier waterfront venues.',
    fullDescription: 'Join us for the grand awards ceremony followed by a celebration at one of Shanghai premier waterfront venues. Celebrate the tournament champions and enjoy an evening of entertainment.',
    image: '/images/card-award.jpg',
    category: 'events',
    date: 'Oct 25, 2026',
    size: 'large',
  },
  {
    id: 7,
    title: 'Team Registration Opens',
    shortDescription: 'Early bird registration is now open for the 2026 Shanghai UWH Tournament. Secure your spot before August 15th for special rates.',
    fullDescription: 'Early bird registration is now open for the 2026 Shanghai UWH Tournament. Secure your spot before August 15th for special rates. Limited spots available, so register early!',
    image: '/images/card-nightlife.jpg',
    category: 'news',
    date: 'Apr 2026',
    size: 'small',
  },

]