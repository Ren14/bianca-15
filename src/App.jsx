import { useState, useRef, useEffect } from 'react'
import bgMusic      from './assets/music/background.mp3'
import foto1        from './assets/photos/foto1.png'
import foto2        from './assets/photos/foto2.png'
import foto3        from './assets/photos/foto3.png'
import foto4        from './assets/photos/foto4.png'
import foto5        from './assets/photos/foto5.png'
import foto6        from './assets/photos/foto6.png'
import Particles    from './components/Particles'
import MusicButton      from './components/MusicButton'
import ScrollProgress   from './components/ScrollProgress'
import Footer       from './components/Footer'
import Hero         from './sections/Hero'
import Countdown    from './sections/Countdown'
import Message      from './sections/Message'
import EventDetails from './sections/EventDetails'
import Gallery      from './sections/Gallery'
import GiftInfo     from './sections/GiftInfo'
import RSVP         from './sections/RSVP'

const PHOTO_SRCS = [foto1, foto2, foto3, foto4, foto5, foto6]

// ── Pantalla de carga ────────────────────────────────
function LoadingScreen({ progress }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6"
      style={{ background: 'linear-gradient(160deg, #fff5f8 0%, #fdf0f5 50%, #fff5f8 100%)' }}
    >
      <div
        className="text-5xl"
        style={{ animation: 'pulse 1.5s ease-in-out infinite' }}
      >
        🌸
      </div>

      <p
        className="font-cormorant text-violet-700 tracking-widest"
        style={{ fontSize: '1.3rem' }}
      >
        Preparando tu invitación...
      </p>

      {/* Barra de progreso */}
      <div
        className="rounded-full overflow-hidden"
        style={{ width: '180px', height: '4px', background: 'rgba(244,114,182,0.2)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width:      `${progress}%`,
            background: 'linear-gradient(90deg, #f472b6, #e879f9)',
          }}
        />
      </div>

      <p className="font-montserrat text-violet-400 text-xs tracking-widest">
        {progress}%
      </p>
    </div>
  )
}

// ── Splash ───────────────────────────────────────────
function Splash({ onEnter }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8"
      style={{ background: 'linear-gradient(160deg, #fff5f8 0%, #fdf0f5 50%, #fff5f8 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width:      `${Math.random() * 4 + 2}px`,
              height:     `${Math.random() * 4 + 2}px`,
              top:        `${Math.random() * 100}%`,
              left:       `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#f472b6' : '#e879f9',
              animation:  `pulse ${Math.random() * 2 + 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="text-center px-6">
        <p className="text-violet-600 tracking-[0.3em] text-sm uppercase mb-3 font-montserrat">
          Te invitamos a celebrar
        </p>
        <h1
          className="text-6xl sm:text-7xl mb-2"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            background: 'linear-gradient(135deg, #f9a8d4, #e879f9, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Delfi
        </h1>
        <p className="text-violet-700 font-montserrat text-sm tracking-widest">
          sus 15 años 🌸
        </p>
      </div>

      <button
        onClick={onEnter}
        className="px-10 py-4 rounded-full text-white font-bold tracking-widest uppercase text-sm transition-transform hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #f472b6, #e879f9, #c084fc)',
          border:     'none',
          boxShadow:  '0 8px 30px rgba(244,114,182,0.45)',
          fontFamily: 'Montserrat, sans-serif',
          cursor:     'pointer',
        }}
      >
        ✨ Entrar a la invitación
      </button>
    </div>
  )
}

// ── App ──────────────────────────────────────────────
export default function App() {
  const [loading,  setLoading]  = useState(true)
  const [progress, setProgress] = useState(0)
  const [entered,  setEntered]  = useState(false)
  const [playing,  setPlaying]  = useState(false)
  const audioRef = useRef(null)

  // Precarga de todos los assets
  useEffect(() => {
    const total = PHOTO_SRCS.length + 1 // fotos + audio
    let loaded = 0

    const tick = () => {
      loaded += 1
      setProgress(Math.round((loaded / total) * 100))
      if (loaded >= total) setLoading(false)
    }

    // Precargar imágenes
    PHOTO_SRCS.forEach(src => {
      const img = new Image()
      img.onload  = tick
      img.onerror = tick
      img.src     = src
    })

    // Precargar audio
    const audio = new Audio(bgMusic)
    audio.loop        = true
    audio.volume      = 0.5
    audio.currentTime = 10
    audio.oncanplaythrough = tick
    audio.onerror          = tick
    audio.load()
    audioRef.current = audio

    // Timeout de seguridad: 10 segundos máximo
    const timeout = setTimeout(() => setLoading(false), 10000)
    return () => clearTimeout(timeout)
  }, [])

  // Bloquea scroll mientras loading o splash están visibles
  useEffect(() => {
    document.body.style.overflow = entered ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [entered])

  const handleEnter = () => {
    const audio = audioRef.current
    if (audio) {
      audio.play()
        .then(() => setPlaying(true))
        .catch(() => {})
    }
    setEntered(true)
  }

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }

  return (
    <>
      {loading  && <LoadingScreen progress={progress} />}
      {!loading && !entered && <Splash onEnter={handleEnter} />}

      <div
        className="relative min-h-screen font-montserrat text-violet-900"
        style={{
          background: 'linear-gradient(160deg, #fff5f8 0%, #fdf0f5 40%, #fff5f8 70%, #fff5f8 100%)',
        }}
      >
        <ScrollProgress />
        <Particles />
        <MusicButton playing={playing} onToggle={toggleMusic} />
        <Hero />
        <Countdown />
        <Message />
        <EventDetails />
        <Gallery />
        <GiftInfo />
        <RSVP />
        <Footer />
      </div>
    </>
  )
}
