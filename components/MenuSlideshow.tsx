'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export interface Dish {
  name: string;
  description: string;
  image: string;
  tag?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  dishes: Dish[];
}

export default function MenuSlideshow({ title, subtitle, dishes }: Props) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index: number) => {
    if (index === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
      setProgress(0);
    }, 400);
  }, [current]);

  const goNext = useCallback(() => goTo(current === dishes.length - 1 ? 0 : current + 1), [current, dishes.length, goTo]);
  const goPrev = () => goTo(current === 0 ? dishes.length - 1 : current - 1);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { goNext(); return 0; }
        return p + 1;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [current, goNext]);

  const dish = dishes[current];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#071a08' }}>

      {/* Progress bar */}
      <div className="w-full h-0.5" style={{ backgroundColor: 'rgba(75,175,80,0.1)' }}>
        <div
          className="h-full"
          style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #4CAF50, #FDD835)', transition: 'width 0.06s linear' }}
        />
      </div>

      {/* Top nav */}
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <Link
          href="/menu"
          className="text-sm flex items-center gap-2 transition-colors"
          style={{ color: '#4CAF50', fontFamily: 'var(--font-playfair)' }}
        >
          ← Back to Menus
        </Link>

        <div className="text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-1" style={{ color: '#4CAF50', fontFamily: 'var(--font-playfair)' }}>
            {subtitle ?? 'Signature Dishes'}
          </p>
          <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
            {title}
          </h1>
        </div>

        <span className="text-sm" style={{ color: 'rgba(139,195,74,0.5)', fontFamily: 'var(--font-playfair)' }}>
          <span className="text-2xl font-bold" style={{ color: '#FDD835' }}>{String(current + 1).padStart(2, '0')}</span>
          {' '}/{' '}{String(dishes.length).padStart(2, '0')}
        </span>
      </div>

      {/* Main layout */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-6 pb-10 gap-6">

        {/* Sidebar */}
        <div className="hidden lg:flex flex-col gap-1 w-52 shrink-0 pt-2">
          {dishes.map((d, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 rounded-lg"
              style={{
                backgroundColor: i === current ? 'rgba(46,125,50,0.2)' : 'transparent',
                borderLeft: `2px solid ${i === current ? '#FDD835' : 'transparent'}`,
              }}
            >
              <div
                className="w-10 h-10 rounded bg-center bg-cover shrink-0"
                style={{ backgroundImage: `url('${d.image}')`, opacity: i === current ? 1 : 0.5 }}
              />
              <span
                className="text-xs leading-snug"
                style={{
                  color: i === current ? '#FDD835' : 'rgba(139,195,74,0.6)',
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: i === current ? 700 : 400,
                }}
              >
                {d.name}
              </span>
            </button>
          ))}
        </div>

        {/* Center content */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden w-full" style={{ height: '380px' }}>
            <div
              className="absolute inset-0 bg-center bg-cover transition-opacity duration-500"
              style={{
                backgroundImage: `url('${dish.image}')`,
                opacity: fading ? 0 : 1,
              }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(7,26,8,0.9) 0%, rgba(7,26,8,0.1) 60%, transparent 100%)' }}
            />
            {dish.tag && (
              <span
                className="absolute top-5 left-5 text-xs px-3 py-1 font-semibold tracking-wide"
                style={{ backgroundColor: '#FDD835', color: '#2E7D32', fontFamily: 'var(--font-playfair)', borderRadius: '2px' }}
              >
                {dish.tag}
              </span>
            )}
            {/* Dish name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair)', opacity: fading ? 0 : 1, transition: 'opacity 0.4s' }}
              >
                {dish.name}
              </h2>
            </div>
          </div>

          {/* Description card */}
          <div
            className="rounded-xl p-6"
            style={{
              backgroundColor: 'rgba(46,125,50,0.1)',
              border: '1px solid rgba(75,175,80,0.15)',
              opacity: fading ? 0 : 1,
              transition: 'opacity 0.4s',
            }}
          >
            <div className="w-8 h-px mb-4" style={{ background: 'linear-gradient(90deg, #4CAF50, #FDD835)' }} />
            <p className="text-base leading-relaxed" style={{ color: 'rgba(139,195,74,0.85)', fontFamily: 'var(--font-playfair)' }}>
              {dish.description}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={goPrev}
              className="w-11 h-11 rounded-full flex items-center justify-center text-xl transition-all hover:scale-110"
              style={{ border: '1px solid rgba(75,175,80,0.3)', color: '#8BC34A', backgroundColor: 'rgba(46,125,50,0.1)' }}
            >
              ‹
            </button>
            <div className="flex gap-2">
              {dishes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    backgroundColor: i === current ? '#FDD835' : 'rgba(139,195,74,0.2)',
                  }}
                />
              ))}
            </div>
            <button
              onClick={goNext}
              className="w-11 h-11 rounded-full flex items-center justify-center text-xl transition-all hover:scale-110"
              style={{ border: '1px solid rgba(75,175,80,0.3)', color: '#8BC34A', backgroundColor: 'rgba(46,125,50,0.1)' }}
            >
              ›
            </button>
          </div>
        </div>

        {/* Right spacer */}
        <div className="hidden lg:block w-52 shrink-0" />
      </div>

      {/* Mobile thumbnails */}
      <div className="lg:hidden flex gap-3 overflow-x-auto px-6 pb-8">
        {dishes.map((d, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex flex-col items-center gap-2 shrink-0 transition-all"
          >
            <div
              className="w-16 h-16 rounded-lg bg-center bg-cover"
              style={{
                backgroundImage: `url('${d.image}')`,
                border: i === current ? '2px solid #FDD835' : '2px solid transparent',
                opacity: i === current ? 1 : 0.5,
              }}
            />
            <span className="text-xs" style={{ color: i === current ? '#FDD835' : '#8BC34A', fontFamily: 'var(--font-playfair)' }}>
              {d.name.split(' ')[0]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
