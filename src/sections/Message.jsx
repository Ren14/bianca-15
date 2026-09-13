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
          Cada estrella tiene su momento para brillar.<br />
          Esta noche es el mío, <br />
          y quiero compartirla con quienes me acompañan <br /> 
          día a día.<br />
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
