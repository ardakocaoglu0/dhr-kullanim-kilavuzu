import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { gruplar, sayfalar } from '../data/kilavuz.js'
import Simge, { sayfaSimgesi, grupSimgesi } from './Simge.jsx'
import './anasayfa.css'

// Web / Mobil seçimi kenar çubuğuyla ortaktır (localStorage + olay)
const PLATFORM_ANAHTAR = 'kilavuz-platform'
const platformOku = () => {
  try { return localStorage.getItem(PLATFORM_ANAHTAR) === 'mobil' ? 'mobil' : 'web' } catch { return 'web' }
}
const grupPlatformu = (g) => (g.id.startsWith('mobil-') ? 'mobil' : 'web')
const sayfaPlatformu = (s) => (s.platform === 'mobil' ? 'mobil' : 'web')
const grupAdi = (g) => g.baslik.replace(/^Mobil · /, '')

const PLATFORMLAR = [
  { id: 'web', ad: 'Web kılavuzu', simge: 'bilgisayar', alt: 'Tarayıcıdan DHR' },
  { id: 'mobil', ad: 'Mobil kılavuz', simge: 'telefon', alt: 'DHR Mobil uygulaması' },
]

// "Nereden başlamalı?" kartları: rol → ilk okunacak sayfa
const BASLANGIC = {
  web: [
    { id: 'sisteme-giris', baslik: 'İlk kez giriş yapıyorum', metin: 'Giriş, şifre işlemleri ve ekranın genel düzeni.', simge: 'giris' },
    { id: 'izinlerim', baslik: 'Çalışanım', metin: 'İzin, mesai, masraf ve diğer taleplerinizi oluşturun.', simge: 'kisi' },
    { id: 'kontrol-paneli', baslik: 'Yöneticiyim / İK', metin: 'Onay bekleyenleri, ekibinizi ve raporları izleyin.', simge: 'kisiler' },
  ],
  mobil: [
    { id: 'mobil-kurulum-giris', baslik: 'Uygulamayı kuruyorum', metin: 'Kurum bağlantısı, giriş ve iki adımlı doğrulama.', simge: 'telefon' },
    { id: 'mobil-izinlerim', baslik: 'Çalışanım', metin: 'Telefondan izin, mesai ve diğer taleplerinizi yönetin.', simge: 'kisi' },
    { id: 'mobil-onaylar', baslik: 'Yöneticiyim', metin: 'Bekleyen talepleri telefondan onaylayın veya reddedin.', simge: 'gorev' },
  ],
}

const say = (liste, f) => liste.reduce((t, s) => t + (f(s) || 0), 0)

export default function AnaSayfa() {
  const [platform, setPlatform] = useState(platformOku)

  useEffect(() => {
    const f = (e) => (e.detail === 'web' || e.detail === 'mobil') && setPlatform(e.detail)
    window.addEventListener(PLATFORM_ANAHTAR, f)
    return () => window.removeEventListener(PLATFORM_ANAHTAR, f)
  }, [])

  const sec = (p) => {
    setPlatform(p)
    try { localStorage.setItem(PLATFORM_ANAHTAR, p) } catch { /* gizli pencere */ }
    window.dispatchEvent(new CustomEvent(PLATFORM_ANAHTAR, { detail: p }))
  }

  const sayfaSayisi = { web: 0, mobil: 0 }
  for (const s of sayfalar) sayfaSayisi[sayfaPlatformu(s)]++
  const secili = sayfalar.filter((s) => sayfaPlatformu(s) === platform)
  const istatistik = [
    { deger: secili.length, ad: 'sayfa' },
    { deger: say(secili, (s) => s.islemler?.length), ad: 'adım adım işlem' },
    { deger: say(secili, (s) => s.sss?.length), ad: 'sık sorulan soru' },
  ]
  const gorunenGruplar = gruplar.filter((g) => grupPlatformu(g) === platform)
  const baslangic = BASLANGIC[platform].filter((b) => sayfalar.some((s) => s.id === b.id))

  return (
    <article className="makale anasayfa">
      <header className="as-ust">
        <span className="as-etiket">D1 Tech · İnsan Kaynakları</span>
        <h1>DHR Kullanım Kılavuzu</h1>
        <p className="as-giris">
          İzin, mesai, bordro, masraf, performans ve diğer insan kaynakları işlemlerini adım adım ve ekran görüntüleriyle
          anlatır. Bilgisayardan mı telefondan mı kullandığınızı seçin; bölümler DHR menüsüyle aynı sıradadır.
        </p>
        <ul className="as-sayilar" aria-label="Kılavuz özeti">
          {istatistik.map((x) => (
            <li key={x.ad}><b>{x.deger.toLocaleString('tr-TR')}</b><span>{x.ad}</span></li>
          ))}
        </ul>
      </header>

      <div className="as-platformlar" role="tablist" aria-label="Kılavuz türü">
        {PLATFORMLAR.map((p) => (
          <button key={p.id} type="button" role="tab" aria-selected={platform === p.id}
            className={'as-platform' + (platform === p.id ? ' secili' : '')} onClick={() => sec(p.id)}>
            <span className="as-platform-simge"><Simge ad={p.simge} boyut={22} /></span>
            <span className="as-platform-metin">
              <strong>{p.ad}</strong>
              <small>{p.alt} · {sayfaSayisi[p.id]} sayfa</small>
            </span>
            <span className="as-platform-isaret" aria-hidden="true" />
          </button>
        ))}
      </div>

      {baslangic.length > 0 && (
        <section className="as-bolum">
          <h2 className="as-bolum-baslik">Nereden başlamalı?</h2>
          <div className="as-baslangic">
            {baslangic.map((b) => (
              <Link key={b.id} to={'/' + b.id} className="as-baslangic-kart">
                <span className="as-kutu-simge"><Simge ad={b.simge} boyut={20} /></span>
                <strong>{b.baslik}</strong>
                <span>{b.metin}</span>
                <em>Okumaya başla →</em>
              </Link>
            ))}
          </div>
        </section>
      )}

      {gorunenGruplar.map((g) => {
        const liste = secili.filter((s) => s.grup === g.id)
        if (!liste.length) return null
        return (
          <section key={g.id} className="as-bolum" id={'grup-' + g.id}>
            <div className="as-grup-ust">
              <span className="as-kutu-simge"><Simge ad={grupSimgesi[g.id] || 'kitap'} boyut={20} /></span>
              <div>
                <h2 className="as-bolum-baslik">{grupAdi(g)} <span className="as-adet">{liste.length}</span></h2>
                {g.aciklama && <p className="as-grup-aciklama">{g.aciklama}</p>}
              </div>
            </div>
            <div className="as-kartlar">
              {liste.map((s) => (
                <Link key={s.id} to={'/' + s.id} className="as-kart">
                  <span className="as-kart-simge"><Simge ad={sayfaSimgesi[s.id] || 'belge'} boyut={18} /></span>
                  <span className="as-kart-metin">
                    <strong>{s.baslik}</strong>
                    <span>{s.ozet}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </article>
  )
}
