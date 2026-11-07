import { useEffect, useMemo, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { gruplar, sayfalar } from '../data/kilavuz.js'
import Simge, { sayfaSimgesi, grupSimgesi } from './Simge.jsx'
import './mobil.css'

const kucuk = (s) => s.toLocaleLowerCase('tr')
const ANAHTAR = 'kilavuz-kapali-gruplar'
const PLATFORM_ANAHTAR = 'kilavuz-platform'

// Web / Mobil: mobil gruplar "mobil-" ile başlar, mobil sayfalarda platform: 'mobil'
const grupPlatformu = (g) => (g.id.startsWith('mobil-') ? 'mobil' : 'web')
const sayfaPlatformu = (s) => (s?.platform === 'mobil' ? 'mobil' : 'web')
const grupAdi = (g) => g.baslik.replace(/^Mobil\s*·\s*/, '')
const SEKMELER = [
  { id: 'web', ad: 'Web', simge: 'bilgisayar' },
  { id: 'mobil', ad: 'Mobil', simge: 'telefon' },
]

function oku() {
  try { return JSON.parse(localStorage.getItem(ANAHTAR)) || {} } catch { return {} }
}
function platformOku() {
  try { return localStorage.getItem(PLATFORM_ANAHTAR) === 'mobil' ? 'mobil' : 'web' } catch { return 'web' }
}

export default function Kenar({ acik, kapat }) {
  const [ara, setAra] = useState('')
  const [kapali, setKapali] = useState(oku)
  const konum = useLocation()
  const aktifId = konum.pathname.slice(1)
  const aktifSayfa = sayfalar.find((s) => s.id === aktifId)
  const aktifGrup = aktifSayfa?.grup
  const [platform, setPlatform] = useState(() => (aktifSayfa ? sayfaPlatformu(aktifSayfa) : platformOku()))

  useEffect(() => {
    try { localStorage.setItem(ANAHTAR, JSON.stringify(kapali)) } catch { /* gizli pencere */ }
  }, [kapali])

  useEffect(() => {
    try { localStorage.setItem(PLATFORM_ANAHTAR, platform) } catch { /* gizli pencere */ }
    window.dispatchEvent(new CustomEvent(PLATFORM_ANAHTAR, { detail: platform }))
  }, [platform])

  // Ana sayfadaki Web / Mobil seçimiyle eşleşir
  useEffect(() => {
    const f = (e) => (e.detail === 'web' || e.detail === 'mobil') && setPlatform(e.detail)
    window.addEventListener(PLATFORM_ANAHTAR, f)
    return () => window.removeEventListener(PLATFORM_ANAHTAR, f)
  }, [])

  // Açılan sayfa hangi platformdaysa menü o sekmeye geçer
  useEffect(() => {
    if (aktifSayfa) setPlatform(sayfaPlatformu(aktifSayfa))
  }, [aktifId])

  // Aktif sayfayı menüde görünür alana getir
  useEffect(() => {
    const t = setTimeout(() => document.querySelector('.kenar-liste .kenar-link.active')?.scrollIntoView({ block: 'nearest' }), 50)
    return () => clearTimeout(t)
  }, [aktifId, platform])

  const sonuc = useMemo(() => {
    const q = kucuk(ara.trim())
    if (!q) return null
    return sayfalar.filter((s) => sayfaPlatformu(s) === platform &&
      kucuk([s.baslik, s.ozet, s.menu, ...(s.ekranlar || []).map((e) => e.sekme || ''), ...(s.islemler || []).map((x) => x.baslik)].join(' ')).includes(q)
    )
  }, [ara, platform])

  const gorunenGruplar = gruplar.filter((g) => grupPlatformu(g) === platform)
  const sayilar = useMemo(() => ({
    web: sayfalar.filter((s) => sayfaPlatformu(s) === 'web').length,
    mobil: sayfalar.filter((s) => sayfaPlatformu(s) === 'mobil').length,
  }), [])

  const Link = ({ s }) => (
    <NavLink to={'/' + s.id} className="kenar-link" onClick={() => setAra('')}>
      <Simge ad={sayfaSimgesi[s.id]} />
      <span className="kenar-metin">
        {s.baslik}
        {sonuc && <small>{s.menu}</small>}
      </span>
    </NavLink>
  )

  return (
    <>
      <div className={'perde' + (acik ? ' gorunur' : '')} onClick={kapat} />
      <nav className={'kenar' + (acik ? ' acik' : '')} aria-label="Kılavuz içindekiler">
        <a href="#/" className="kenar-logo" aria-label="DHR Kullanım Kılavuzu ana sayfa">
          <img className="logo-acik" src="logo/d1tech-logo.webp" alt="D1 Tech" />
          <img className="logo-koyu" src="logo/d1tech-logo-beyaz.webp" alt="D1 Tech" />
        </a>
        <div className="kenar-alt-baslik">DHR Kullanım Kılavuzu</div>

        <div className="platform-sekme" role="tablist" aria-label="Kılavuz türü">
          {SEKMELER.map((p) => (
            <button key={p.id} role="tab" aria-selected={platform === p.id}
              className={'platform-dugme' + (platform === p.id ? ' secili' : '')}
              onClick={() => setPlatform(p.id)}>
              <Simge ad={p.simge} boyut={16} />
              <span>{p.ad}</span>
              <span className="platform-sayi">{sayilar[p.id]}</span>
            </button>
          ))}
        </div>

        <label className="arama-kutu">
          <Simge ad="ara" boyut={16} />
          <input type="search" placeholder={platform === 'mobil' ? 'Mobil kılavuzda ara…' : 'Web kılavuzunda ara…'}
            value={ara} onChange={(e) => setAra(e.target.value)} />
        </label>

        <div className="kenar-liste">
          {sonuc ? (
            <div className="grup">
              <div className="grup-baslik sabit">{sonuc.length} sonuç</div>
              {sonuc.map((s) => <Link key={s.id} s={s} />)}
            </div>
          ) : (
            <>
              <NavLink to="/" end className="kenar-link">
                <Simge ad="ev" /><span className="kenar-metin">Ana Sayfa</span>
              </NavLink>
              {gorunenGruplar.map((g) => {
                const liste = sayfalar.filter((s) => s.grup === g.id)
                const kapaliMi = kapali[g.id] && aktifGrup !== g.id
                return (
                  <div className={'grup' + (aktifGrup === g.id ? ' aktif-grup' : '')} key={g.id}>
                    <button className="grup-baslik" aria-expanded={!kapaliMi}
                      onClick={() => setKapali((k) => ({ ...k, [g.id]: !kapaliMi }))}>
                      <Simge ad={grupSimgesi[g.id]} />
                      <span>{grupAdi(g)}</span>
                      <span className="grup-sayi">{liste.length}</span>
                      <span className={'grup-ok' + (kapaliMi ? '' : ' acik')}><Simge ad="ok" boyut={14} /></span>
                    </button>
                    {!kapaliMi && <div className="grup-icerik">{liste.map((s) => <Link key={s.id} s={s} />)}</div>}
                  </div>
                )
              })}
            </>
          )}
        </div>

        <div className="kenar-alt">DHR ©{new Date().getFullYear()} D1-Tech</div>
      </nav>
    </>
  )
}
