import { useCountdown } from '../hooks/useCountdown'
import { SectionTitle } from '../components/UI'

const UNITS = [
  { key: 'days',    label: 'Días' },
  { key: 'hours',   label: 'Horas' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Seg' },
]

export default function Countdown() {
  const time = useCountdown('2026-10-10T20:00:00-03:00')

  return (
    <section
      id="countdown"
      className="relative z-10 py-20 px-6 text-center"
      style={{ borderTop: '1px solid rgba(249,168,212,0.12)' }}
    >
      <SectionTitle>Cuenta Regresiva</SectionTitle>
      <p className="text-violet-600 text-sm tracking-widest mb-12 uppercase">
        10 · Octubre · 2026
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        {UNITS.map(({ key, label }) => (
          <div
            key={key}
            className="rounded-2xl px-8 py-6 min-w-[88px] backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, rgba(244,114,182,0.1), rgba(232,121,249,0.05))',
              border:     '1px solid rgba(249,168,212,0.2)',
            }}
          >
            <div
              className="font-playfair font-bold leading-none text-violet-950"
              style={{ fontSize: 'clamp(36px, 8vw, 60px)' }}
            >
              {String(time[key]).padStart(2, '0')}
            </div>
            <div className="text-violet-600 text-xs tracking-widest uppercase mt-2">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
