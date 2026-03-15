import { Divider } from '../components/UI'

export default function Message() {
  return (
    <section
      className="relative z-10 py-20 px-6 text-center"
      style={{ borderTop: '1px solid rgba(249,168,212,0.12)' }}
    >
      <Divider />

      <div className="max-w-xl mx-auto my-12 relative">
        {/* Decorative opening quote */}
        <span
          className="font-playfair italic absolute -top-5 -left-2 select-none pointer-events-none"
          style={{
            fontSize: '120px',
            lineHeight: 0.6,
            color: 'rgba(249,168,212,0.07)',
          }}
        >
          "
        </span>

        <p
          className="font-cormorant text-violet-900 font-light relative z-10"
          style={{
            fontSize:      'clamp(26px, 3.5vw, 26px)',
            lineHeight:    2,
            letterSpacing: '0.03em',
          }}
        >
          Un momento especial<br />
          se vive mejor cuando<br />
          se comparte.<br />
          Por eso, te espero<br />
          para celebrar juntos<br />
          una noche única que<br />
          quedará por siempre<br />
          en mi corazón.
        </p>

        {/* Decorative closing quote */}
        <span
          className="font-playfair italic absolute -bottom-10 -right-2 select-none pointer-events-none"
          style={{
            fontSize: '120px',
            lineHeight: 0.6,
            color: 'rgba(249,168,212,0.07)',
          }}
        >
          "
        </span>
      </div>

      <Divider />
    </section>
  )
}
