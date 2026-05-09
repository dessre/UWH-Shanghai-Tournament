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
    size: 'large',
  },
  {
    id: 2,
    title: 'Pre-Tournament Pool Sessions',
    shortDescription: 'Open warm-up training at Shanghai JingAn Sports Center pool every weekend in September. Free for all registered teams.',
    fullDescription: (
      <>
        Open warm-up training at Shanghai JingAn Sports Center pool every weekend in September. Free for all registered teams. Sessions are available on Saturdays and Sundays from 9:00 AM to 5:00 PM. Advanced booking is recommended to secure your slot. Please visit the{' '}
        <Link to="/venue#pool-sessions" className="text-[#4FF6FF] hover:underline">venue page</Link>{' '}
        for more details.
      </>
    ),
    image: '/images/card-pool.jpg',
    category: 'training',
    date: 'Sep 2026',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Shanghai Night Tour for Athletes',
    shortDescription: 'A special guided evening tour of The Bund and Lujiazui skyline exclusively for tournament participants and their families.',
    fullDescription: 'A special guided evening tour of The Bund and Lujiazui skyline exclusively for tournament participants and their families. Experience Shanghai\'s breathtaking night views and vibrant atmosphere.',
    image: '/images/card-shanghai.jpg',
    category: 'events',
    date: 'Oct 2026',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Youth Division Added for 2026',
    shortDescription: 'We are excited to announce a new youth division (ages 15-18) for the 2026 tournament, expanding opportunities for young athletes.',
    fullDescription: 'We are excited to announce a new youth division (ages 15-18) for the 2026 tournament, expanding opportunities for young athletes. This division will feature its own dedicated matches and awards.',
    image: '/images/card-game.jpg',
    category: 'news',
    date: 'Mar 2026',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Welcome Orientation CityWalk',
    shortDescription: 'Explore Shanghai while meeting others.',
    fullDescription: (
      <>
        Welcome walk | Central Shanghai, Early Evening. Open to all participants: athletes, referees, and tournament staff. Route covers the hotel district and nearby riverfront. Explore Shanghai at its liveliest while meeting the faces behind the tournament - a relaxed way to connect before game day.{' '}
        <Link to="/visit-shanghai#citywalk" className="text-[#4FF6FF] hover:underline">Learn more</Link>
      </>
    ),
    image: '/images/shanghai-food.jpg',
    category: 'events',
    date: 'Oct 24, 2026',
    size: 'medium',
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
    shortDescription: 'Early bird registration is now open for the 2026 Shanghai UWH Tournament. Secure your spot before July 31st for special rates.',
    fullDescription: 'Early bird registration is now open for the 2026 Shanghai UWH Tournament. Secure your spot before July 31st for special rates. Limited spots available, so register early!',
    image: '/images/card-nightlife.jpg',
    category: 'news',
    date: 'Apr 2026',
    size: 'medium',
  },
    {
    id: 8,
    title: 'Team xxRegistration Opens',
    shortDescription: 'Early bird registration is now open for the 2026 Shanghai UWH Tournament. Secure your spot before July 31st for special rates.',
    fullDescription: 'Early bird registration is now open for the 2026 Shanghai UWH Tournament. Secure your spot before July 31st for special rates. Limited spots available, so register early!',
    image: '/images/card-nightlife.jpg',
    category: 'news',
    date: 'Apr 2026',
    size: 'medium',
  },
]