'use client';

import { Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

type Overlay = 'snow' | 'springbok' | 'sa-flag' | 'easter' | null;

/** Check current date against the seasonal calendar */
function getScheduledOverlay(): Overlay {
  const d = new Date();
  const m = d.getMonth(); // 0-indexed
  const day = d.getDate();

  // Christmas & New Year: Dec 10 – Jan 5
  if ((m === 11 && day >= 10) || (m === 0 && day <= 5)) return 'snow';
  // Easter 2026: Apr 3–6
  if (m === 3 && day >= 2 && day <= 7) return 'easter';
  // Freedom Day: Apr 25–28
  if (m === 3 && day >= 25 && day <= 28) return 'sa-flag';
  // Youth Day: Jun 14–18
  if (m === 5 && day >= 14 && day <= 18) return 'sa-flag';
  // Springbok July home tests (whole month)
  if (m === 6) return 'springbok';
  // Women's Day: Aug 7–11
  if (m === 7 && day >= 7 && day <= 11) return 'sa-flag';
  // Springbok Aug tests: Aug 20–30
  if (m === 7 && day >= 20) return 'springbok';
  // Springbok Sep test: Sep 3–7
  if (m === 8 && day >= 3 && day <= 7) return 'springbok';
  // Heritage Day: Sep 22–26
  if (m === 8 && day >= 22 && day <= 26) return 'sa-flag';
  // Day of Reconciliation: Dec 14–17
  if (m === 11 && day >= 14 && day <= 17) return 'sa-flag';

  return null;
}

/* ───────────────────────── Snow ───────────────────────── */
function Snow() {
  const flakes = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 5 + 2,
        opacity: Math.random() * 0.5 + 0.3,
        dur: Math.random() * 8 + 8,
        delay: Math.random() * -15,
        sway: (Math.random() - 0.5) * 40,
      })),
    [],
  );

  return (
    <div className="fixed inset-0 z-[55] pointer-events-none overflow-hidden" aria-hidden="true">
      {flakes.map((f) => (
        <div
          key={f.id}
          className="absolute top-0 rounded-full bg-white seasonal-fall"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            animationDuration: `${f.dur}s`,
            animationDelay: `${f.delay}s`,
            '--fall-sway': `${f.sway}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ──────────────────── Springbok Green & Gold ──────────────────── */
function Springbok() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        dur: Math.random() * 12 + 10,
        delay: Math.random() * -10,
        color: Math.random() > 0.5 ? '#006B3F' : '#FFB81C',
        opacity: Math.random() * 0.25 + 0.1,
        sway: (Math.random() - 0.5) * 60,
      })),
    [],
  );

  return (
    <div className="fixed inset-0 z-[55] pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Shimmer bar */}
      <div
        className="absolute top-0 inset-x-0 h-1 seasonal-shimmer-bar"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #006B3F, #FFB81C, #006B3F, #FFB81C, #006B3F)',
          backgroundSize: '200% 100%',
        }}
      />
      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 rounded-full seasonal-fall"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            '--fall-sway': `${p.sway}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ──────────────────── SA Flag Colours ──────────────────── */
function SAFlag() {
  return (
    <div className="fixed top-0 inset-x-0 z-[55] pointer-events-none" aria-hidden="true">
      <div className="flex h-1.5 seasonal-flag-pulse">
        <div className="flex-1 bg-[#002395]" />
        <div className="flex-1 bg-[#DE3831]" />
        <div className="flex-1 bg-[#FFFFFF]" />
        <div className="flex-1 bg-[#007A4D]" />
        <div className="flex-1 bg-[#FFB612]" />
        <div className="flex-1 bg-[#000000]" />
      </div>
    </div>
  );
}

/* ──────────────────── Easter Pastels ──────────────────── */
function Easter() {
  const colors = ['#FFB7C5', '#E6E6FA', '#FFFACD', '#B2F5EA', '#FED7E2'];
  const petals = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 6 + 3,
        dur: Math.random() * 10 + 8,
        delay: Math.random() * -12,
        color: colors[i % colors.length],
        opacity: Math.random() * 0.4 + 0.2,
        sway: (Math.random() - 0.5) * 50,
      })),
    [],
  );

  return (
    <div className="fixed inset-0 z-[55] pointer-events-none overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 rounded-full seasonal-fall"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            '--fall-sway': `${p.sway}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ──────────────────── Controller ──────────────────── */
function OverlaySwitch() {
  const params = useSearchParams();
  const demo = params.get('overlay') as Overlay;
  const active = demo || getScheduledOverlay();

  if (!active) return null;

  switch (active) {
    case 'snow':
      return <Snow />;
    case 'springbok':
      return <Springbok />;
    case 'sa-flag':
      return <SAFlag />;
    case 'easter':
      return <Easter />;
    default:
      return null;
  }
}

export default function SeasonalOverlay() {
  return (
    <Suspense fallback={null}>
      <OverlaySwitch />
    </Suspense>
  );
}
