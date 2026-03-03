'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HERO_SLIDES, DEALER } from '@/lib/constants';

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(new Array(HERO_SLIDES.length).fill(false));

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const markLoaded = (idx: number) => {
    setLoaded((prev) => {
      const copy = [...prev];
      copy[idx] = true;
      return copy;
    });
  };

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative h-[85vh] min-h-[500px] max-h-[800px] bg-suzuki-blue overflow-hidden">
      {/* Background images — all rendered, only active one visible */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={`Suzuki ${s.model}`}
            fill
            className={`object-cover transition-all duration-1000 ${
              loaded[i] ? 'blur-0 scale-100' : 'blur-lg scale-105'
            }`}
            sizes="100vw"
            priority={i === 0}
            onLoad={() => markLoaded(i)}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16 md:pb-20">
        <div className="max-w-2xl">
          <p className="text-suzuki-teal font-semibold text-sm uppercase tracking-wider mb-2 animate-[fadeUp_0.6s_ease]">
            {DEALER.tagline}
          </p>
          <h1
            key={current}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 animate-[fadeUp_0.6s_ease_0.1s_both]"
          >
            Suzuki {slide.model}
          </h1>
          <p
            key={`tag-${current}`}
            className="text-xl md:text-2xl text-white/80 font-light mb-8 animate-[fadeUp_0.6s_ease_0.2s_both]"
          >
            {slide.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 animate-[fadeUp_0.6s_ease_0.3s_both]">
            <Link
              href={slide.href}
              className="bg-suzuki-red hover:bg-suzuki-red-dark text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-suzuki-red/30 text-center"
            >
              Explore {slide.model}
            </Link>
            <Link
              href="/new"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all text-center"
            >
              View All Models
            </Link>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-8">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current
                  ? 'w-10 bg-suzuki-red'
                  : 'w-6 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
