import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrolled  = window.scrollY
      const total     = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[90]"
      style={{ height: '3px', background: 'rgba(249,168,212,0.15)' }}
    >
      <div
        style={{
          height:     '100%',
          width:      `${progress}%`,
          background: 'linear-gradient(90deg, #f472b6, #e879f9, #c084fc)',
          boxShadow:  '0 0 8px rgba(244,114,182,0.6)',
          transition: 'width 0.05s linear',
        }}
      />
    </div>
  )
}
