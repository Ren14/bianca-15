const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left:     `${Math.random() * 100}%`,
  duration: `${4 + Math.random() * 8}s`,
  delay:    `${Math.random() * 6}s`,
  size:     `${4 + Math.random() * 8}px`,
  opacity:  0.3 + Math.random() * 0.5,
}))

export default function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0 rounded-full animate-float-up"
          style={{
            left:              p.left,
            width:             p.size,
            height:            p.size,
            opacity:           p.opacity,
            background:        'radial-gradient(circle, #f9a8d4, #e879f9)',
            animationDuration: p.duration,
            animationDelay:    p.delay,
          }}
        />
      ))}
    </div>
  )
}
