import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Kenar from './components/Kenar.jsx'
import AnaSayfa from './components/AnaSayfa.jsx'
import Sayfa from './components/Sayfa.jsx'
import Bulunamadi from './components/Bulunamadi.jsx'

// Açık / koyu tema (DHR'daki ay-güneş butonu gibi). İlk değer index.html'deki betikten gelir.
function TemaDugme() {
  const [tema, setTema] = useState(() => document.documentElement.dataset.theme || 'light')
  useEffect(() => {
    document.documentElement.dataset.theme = tema
    try { localStorage.setItem('kilavuz-tema', tema) } catch (e) { /* gizli pencere */ }
  }, [tema])
  const koyu = tema === 'dark'
  return (
    <button className="tema-dugme" onClick={() => setTema(koyu ? 'light' : 'dark')}
      aria-label={koyu ? 'Açık temaya geç' : 'Koyu temaya geç'} title={koyu ? 'Açık tema' : 'Koyu tema'}>
      {koyu ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
      )}
    </button>
  )
}

export default function App() {
  const [menuAcik, setMenuAcik] = useState(false)
  const konum = useLocation()

  useEffect(() => {
    setMenuAcik(false)
    window.scrollTo(0, 0)
  }, [konum.pathname])

  return (
    <div className="duzen">
      <header className="ust">
        <button className="menu-dugme" aria-label="Menüyü aç" onClick={() => setMenuAcik((v) => !v)}>
          <span /><span /><span />
        </button>
        <a href="#/" className="logo" aria-label="Ana sayfa">
          <img className="logo-acik" src="logo/d1tech-logo.webp" alt="D1 Tech" />
          <img className="logo-koyu" src="logo/d1tech-logo-beyaz.webp" alt="D1 Tech" />
        </a>
        <div className="ust-baslik">
          <strong>DHR Kullanım Kılavuzu</strong>
          <span>Ekran ekran tüm işlemler</span>
        </div>
        <TemaDugme />
      </header>
      <Kenar acik={menuAcik} kapat={() => setMenuAcik(false)} />
      <main className="icerik">
        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/:id" element={<Sayfa />} />
          <Route path="*" element={<Bulunamadi />} />
        </Routes>
      </main>
    </div>
  )
}
