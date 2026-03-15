export default function MusicButton({ playing, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={playing ? 'Pausar música' : 'Reproducir música'}
      className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center text-xl border-none transition-transform hover:scale-110 animate-pulse-glow"
      style={{
        background: 'linear-gradient(135deg, #f472b6, #e879f9)',
        cursor: 'pointer',
      }}
    >
      {playing ? '⏸' : '🎵'}
    </button>
  )
}
