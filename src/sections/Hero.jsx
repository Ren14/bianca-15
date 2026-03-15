import { useState, useEffect } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 z-10">

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div
        className={visible ? 'animate-fade-in-up' : 'opacity-0'}
        style={{ animationDelay: '0.2s' }}
      >
        {/* Crown */}
        <div className="text-5xl mb-4" style={{ filter: 'drop-shadow(0 0 12px rgba(249,168,212,0.6))' }}>
          👑
        </div>

        {/* Subtitle top */}
        <p className="font-cormorant text-violet-600 uppercase tracking-widest text-sm mb-5 font-light">
          Te invita a celebrar sus
        </p>

        {/* Big 15 */}
        <div
          className="font-playfair font-bold leading-none mb-2 animate-shimmer gradient-text-15"
          style={{ fontSize: 'clamp(110px, 22vw, 200px)' }}
        >
          15
        </div>

        {/* Name */}
        <h1
          className="font-playfair font-bold italic mb-2 tracking-tight"
          style={{
            fontSize: 'clamp(32px, 8vw, 72px)',
            background: 'linear-gradient(135deg, #4c1d95, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Bianca Nacif
        </h1>

        {/* Event name */}
        <p className="font-cormorant text-violet-700 uppercase tracking-widest mb-12"
           style={{ fontSize: 'clamp(14px, 3vw, 20px)' }}>
          ✦ Tirada de Bianca ✦
        </p>

        {/* CTA */}
        <a
          href="#countdown"
          className="inline-block px-10 py-4 rounded-full font-semibold text-white uppercase tracking-widest text-sm transition-transform hover:scale-105"
          style={{
            background:  'linear-gradient(135deg, #f472b6, #e879f9)',
            boxShadow:   '0 8px 32px rgba(244,114,182,0.4)',
            letterSpacing: '0.1em',
          }}
        >
          Ver invitación
        </a>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1 text-violet-500 opacity-60">
        <span className="text-xs uppercase tracking-widest">Deslizá</span>
        <span className="text-xl">↓</span>
      </div>
    </section>
  )
}
