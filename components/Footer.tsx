'use client';

import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '/venues', label: 'Venues' },
  { href: '/menu', label: 'Menu' },
  { href: '/packages', label: 'Packages' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const menuLinks = [
  { href: '/menu/wedding', label: 'Wedding Menus' },
  { href: '/menu/corporate', label: 'Corporate Menus' },
  { href: '/menu/special-occasions', label: 'Special Occasions' },
  { href: '/menu/full-service', label: 'Full Service Experience' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#050f06', borderTop: '1px solid rgba(75,175,80,0.12)' }}>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand column */}
        <div className="flex flex-col gap-5">
          <Image src="/GourmetGo logo with green swoosh.png" alt="GourmetGo" width={90} height={36} />
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-playfair)' }}>
            Crafting unforgettable dining experiences for weddings, corporate events, and every special occasion.
          </p>
          <div className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #4CAF50, #FDD835)' }} />
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: '#4CAF50', fontFamily: 'var(--font-playfair)' }}>
            Navigation
          </h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-playfair)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FDD835')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menus */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: '#4CAF50', fontFamily: 'var(--font-playfair)' }}>
            Our Menus
          </h4>
          <ul className="flex flex-col gap-3">
            {menuLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-playfair)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FDD835')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: '#4CAF50', fontFamily: 'var(--font-playfair)' }}>
            Get In Touch
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-playfair)' }}>
              📍 123 Gourmet Street, Food City
            </li>
            <li className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-playfair)' }}>
              📞 +1 (555) 123-4567
            </li>
            <li className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-playfair)' }}>
              ✉️ hello@gourmetgo.com
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 text-xs px-4 py-2.5 font-semibold tracking-widest uppercase transition-all duration-200 self-start"
            style={{
              backgroundColor: '#2E7D32',
              color: '#FDD835',
              fontFamily: 'var(--font-playfair)',
              border: '1px solid rgba(75,175,80,0.3)',
              borderRadius: '2px',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#FDD835';
              (e.currentTarget as HTMLElement).style.color = '#2E7D32';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#2E7D32';
              (e.currentTarget as HTMLElement).style.color = '#FDD835';
            }}
          >
            Book Now →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ borderTop: '1px solid rgba(75,175,80,0.08)' }}
      >
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-playfair)' }}>
          &copy; {new Date().getFullYear()} GourmetGo. All rights reserved.
        </p>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#4CAF50' }} />
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-playfair)' }}>
            Premium Catering Services
          </p>
        </div>
      </div>

    </footer>
  );
}
