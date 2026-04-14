'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80',
    label: 'Wedding Venues',
  },
  {
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80',
    label: 'Gourmet Food',
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80',
    label: 'Fine Dining',
  },
  {
    url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=80',
    label: 'Special Occasions',
  },
  {
    url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1600&q=80',
    label: 'Signature Dishes',
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % slides.length);
        setFading(false);
      }, 700);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '520px' }}>
      {/* Sliding background images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-center bg-cover transition-opacity duration-700"
          style={{
            backgroundImage: `url('${slide.url}')`,
            opacity: i === current ? (fading ? 0 : 1) : 0,
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dark green overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(7,26,8,0.65) 0%, rgba(15,45,17,0.8) 60%, rgba(7,26,8,0.95) 100%)' }}
      />

      {/* Text content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        {/* Slide label pill */}
        <span
          className="text-xs tracking-[0.4em] uppercase font-semibold mb-4 px-4 py-1.5 rounded-full transition-all duration-500"
          style={{
            color: '#8BC34A',
            border: '1px solid rgba(139,195,74,0.3)',
            fontFamily: 'var(--font-playfair)',
          }}
        >
          {slides[current].label}
        </span>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          We&apos;ll Help Create the<br />
          <span style={{ color: '#FDD835' }}>Perfect Menu</span>{' '}
          <span className="text-white">for Your Event</span>
        </h1>

        <div className="w-16 h-0.5 mx-auto mt-6" style={{ background: 'linear-gradient(90deg, #4CAF50, #FDD835)' }} />

        <p
          className="mt-5 text-lg max-w-xl mx-auto"
          style={{ color: '#8BC34A', fontFamily: 'var(--font-playfair)' }}
        >
          Choose a category below and explore our signature dishes crafted with passion.
        </p>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              backgroundColor: i === current ? '#FDD835' : 'rgba(139,195,74,0.35)',
            }}
          />
        ))}
      </div>

      {/* Slide label bottom-right */}
      <div className="absolute bottom-6 right-8 z-20">
        <span
          className="text-xs tracking-widest"
          style={{ color: 'rgba(139,195,74,0.5)', fontFamily: 'var(--font-playfair)' }}
        >
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
