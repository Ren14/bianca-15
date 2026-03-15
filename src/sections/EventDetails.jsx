import { SectionTitle, InfoCard } from '../components/UI'

const EVENT_DETAILS = [
  { icon: '📅', title: 'Fecha',      value: 'Domingo 19 de Abril, 2026' },
  { icon: '🕘', title: 'Hora',       value: '21:30 hs' },
  { icon: '📍', title: 'Lugar',      value: 'La Tranquera 1 Eventos' },
  { icon: '🤵', title: 'Dress Code', value: 'Elegante Sport con un toque de brillo' },
]

const MAPS_URL = 'https://maps.app.goo.gl/zyyHeu7sXkpXYtNS8'

export default function EventDetails() {
  return (
    <section
      id="evento"
      className="relative z-10 py-20 px-6 text-center"
      style={{ borderTop: '1px solid rgba(249,168,212,0.12)' }}
    >
      <SectionTitle>El Gran Evento</SectionTitle>

      <div className="flex flex-wrap gap-5 justify-center max-w-3xl mx-auto mt-10">
        {EVENT_DETAILS.map((d) => (
          <InfoCard key={d.title} {...d} />
        ))}
      </div>

      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 mt-10 px-9 py-4 rounded-full font-semibold text-sm uppercase tracking-widest transition-all hover:scale-105"
        style={{
          border:     '2px solid rgba(109,40,217,0.3)',
          color:      '#6d28d9',
          background: 'rgba(249,168,212,0.05)',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(249,168,212,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(249,168,212,0.05)')}
      >
        📍 Ver en Google Maps
      </a>
    </section>
  )
}
