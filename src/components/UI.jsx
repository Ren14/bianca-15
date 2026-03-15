/* ── SectionTitle ────────────────────────────────── */
export function SectionTitle({ children }) {
  return (
    <h2 className="font-playfair gradient-text-pink text-[3rem] font-bold mb-4 tracking-tight">
      {children}
    </h2>
  )
}

/* ── Divider ─────────────────────────────────────── */
export function Divider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="h-px w-16"
           style={{ background: 'linear-gradient(to right, transparent, #f9a8d4)' }} />
      <span className="mx-3 text-pink-300 text-lg">✦</span>
      <div className="h-px w-16"
           style={{ background: 'linear-gradient(to left, transparent, #f9a8d4)' }} />
    </div>
  )
}

/* ── InfoCard ─────────────────────────────────────── */
export function InfoCard({ icon, title, value }) {
  return (
    <div
      className="flex-1 rounded-2xl p-7 text-center backdrop-blur-md"
      style={{
        minWidth:   '180px',
        maxWidth:   '240px',
        background: 'linear-gradient(135deg, rgba(244,114,182,0.08), rgba(232,121,249,0.04))',
        border:     '1px solid rgba(249,168,212,0.18)',
      }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-violet-500 tracking-widest uppercase mb-2" style={{ fontSize: '0.9rem' }}>{title}</div>
      <div className="font-cormorant text-violet-900 font-semibold" style={{ fontSize: '1.35rem' }}>{value}</div>
    </div>
  )
}
