import Link from 'next/link';
import HeroSlideshow from '@/components/HeroSlideshow';

const menus = [
  {
    title: 'Wedding Menus',
    slug: 'wedding',
    tag: 'Most Popular',
    description: 'Elegant multi-course dining crafted for your most special day.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
  },
  {
    title: 'Corporate Menus',
    slug: 'corporate',
    tag: null,
    description: 'Professional catering for meetings, conferences, and corporate events.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
  },
  {
    title: 'Special Occasions',
    slug: 'special-occasions',
    tag: null,
    description: 'Birthdays, anniversaries, graduations — every milestone deserves the best.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
  },
  {
    title: 'Full Service Experience',
    slug: 'full-service',
    tag: 'Premium',
    description: 'End-to-end luxury catering with staff, setup, and a bespoke menu.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#071a08' }}>

      {/* Hero slideshow */}
      <HeroSlideshow />

      {/* Section header */}
      <div className="text-center py-16 px-4">
        <span
          className="text-xs tracking-[0.4em] uppercase"
          style={{ color: '#4CAF50', fontFamily: 'var(--font-playfair)' }}
        >
          Our Menus
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold text-white mt-3"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Choose Your Experience
        </h2>
        <div className="w-12 h-px mx-auto mt-5" style={{ background: 'linear-gradient(90deg, #4CAF50, #FDD835)' }} />
      </div>

      {/* Menu cards */}
      <div className="container mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
        style={{ backgroundColor: 'rgba(75,175,80,0.1)', border: '1px solid rgba(75,175,80,0.1)', borderRadius: '16px', overflow: 'hidden' }}
      >
        {menus.map((menu) => (
          <Link
            key={menu.slug}
            href={`/menu/${menu.slug}`}
            className="group relative flex flex-col overflow-hidden"
            style={{ backgroundColor: '#0a1f0b' }}
          >
            {/* Photo */}
            <div className="relative overflow-hidden" style={{ height: '260px' }}>
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${menu.image}')` }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(7,26,8,0.95) 0%, rgba(7,26,8,0.3) 60%, transparent 100%)' }}
              />
              {/* Tag */}
              {menu.tag && (
                <span
                  className="absolute top-4 left-4 text-xs px-3 py-1 font-semibold tracking-wide"
                  style={{
                    backgroundColor: '#FDD835',
                    color: '#2E7D32',
                    fontFamily: 'var(--font-playfair)',
                    borderRadius: '2px',
                  }}
                >
                  {menu.tag}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 gap-3" style={{ borderTop: '1px solid rgba(75,175,80,0.12)' }}>
              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {menu.title}
              </h3>
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: 'rgba(139,195,74,0.7)', fontFamily: 'var(--font-playfair)' }}
              >
                {menu.description}
              </p>
              <div className="flex items-center gap-2 pt-2" style={{ borderTop: '1px solid rgba(75,175,80,0.1)' }}>
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: '#FDD835', fontFamily: 'var(--font-playfair)' }}
                >
                  View Menu
                </span>
                <span
                  className="text-xs transition-transform duration-300 group-hover:translate-x-1 inline-block"
                  style={{ color: '#FDD835' }}
                >
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
