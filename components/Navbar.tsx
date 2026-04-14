'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const packageItems = [
  { label: 'Weddings', href: '/packages/weddings' },
  { label: 'Corporate Events', href: '/packages/corporate' },
  { label: 'Private Celebrations', href: '/packages/private' },
  { label: 'Event Gallery', href: '/packages/gallery' },
];

const links = [
  { href: '/venues', label: 'Venues' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPackagesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(7,26,8,0.97)' : '#071a08',
        borderBottom: '1px solid rgba(75,175,80,0.12)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/GourmetGo logo with green swoosh.png" alt="GourmetGo" width={120} height={48} priority />
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm tracking-wide group transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-playfair)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            >
              {label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: '#FDD835' }}
              />
            </Link>
          ))}

          {/* Packages dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setPackagesOpen(o => !o)}
              className="relative text-sm tracking-wide group flex items-center gap-1.5 transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-playfair)' }}
            >
              Packages
              <svg
                className="w-3 h-3 transition-transform duration-200"
                style={{ transform: packagesOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: '#FDD835' }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: '#FDD835' }}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 py-2 rounded-lg overflow-hidden transition-all duration-200"
              style={{
                backgroundColor: '#0a1f0b',
                border: '1px solid rgba(75,175,80,0.2)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
                opacity: packagesOpen ? 1 : 0,
                transform: packagesOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-6px)',
                pointerEvents: packagesOpen ? 'auto' : 'none',
              }}
            >
              {/* Arrow tip */}
              <div
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
                style={{ backgroundColor: '#0a1f0b', border: '1px solid rgba(75,175,80,0.2)', borderBottom: 'none', borderRight: 'none' }}
              />
              {packageItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="w-full block px-5 py-3 text-sm transition-all duration-150"
                  style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'var(--font-playfair)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(46,125,50,0.25)';
                    (e.currentTarget as HTMLElement).style.color = '#FDD835';
                    (e.currentTarget as HTMLElement).style.paddingLeft = '24px';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)';
                    (e.currentTarget as HTMLElement).style.paddingLeft = '20px';
                  }}
                  onClick={() => setPackagesOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 text-sm px-5 py-2 rounded-sm font-semibold tracking-wide transition-all duration-200"
          style={{
            backgroundColor: '#2E7D32',
            color: '#FDD835',
            fontFamily: 'var(--font-playfair)',
            border: '1px solid rgba(75,175,80,0.3)',
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
          Book Now
        </Link>

      </div>
    </nav>
  );
}
