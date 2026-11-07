import { useEffect, useState } from 'react'
import './mobil.css'

// Web ekran görüntüleri 1920x1080 alınır; çerçeve 16:9 oranını korur.
// Mobil sayfaların (id "mobil-" ile başlar) görüntüleri dikey telefon çerçevesinde gösterilir.
const mobilMi = (src) => /(^|\/)ekranlar\/mobil-/.test(src || '')

// İşaret katmanı: konumlar 1920x1080 görüntü üzerinde; yüzde olarak yerleştirilir.
function IsaretKatmani({ isaretler }) {
  if (!isaretler?.length) return null
  const git = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return (
    <div className="isaret-katman" aria-hidden="false">
      {isaretler.map((i) => (
        <div key={i.no} className="isaret-cerceve" title={i.no + '. ' + i.baslik}
          style={{ left: (i.x / 19.2) + '%', top: (i.y / 10.8) + '%', width: (i.w / 19.2) + '%', height: (i.h / 10.8) + '%' }}>
          <button type="button" className="isaret-rozet" onClick={(e) => { e.stopPropagation(); git(i.hedefId) }}
            aria-label={i.no + '. işleme git: ' + i.baslik}>{i.no}</button>
        </div>
      ))}
    </div>
  )
}

export default function Ekran({ src: anaSrc, baslik, aciklama, kucuk, isaretler: anaIsaret, parcalar, gizleYoksa }) {
  // Çok parçalı ekran (sayfa tek görüntüye sığmıyorsa): kaydırmalı galeri
  const [sira, setSira] = useState(0)
  const cok = parcalar?.length > 1
  const src = cok ? parcalar[sira].src : anaSrc
  const isaretler = cok ? parcalar[sira].isaretler : anaIsaret
  const git = (d) => setSira((v) => (v + d + parcalar.length) % parcalar.length)
  const [yok, setYok] = useState(false)
  const [buyuk, setBuyuk] = useState(false)
  useEffect(() => { setYok(false) }, [src])
  const [dokunX, setDokunX] = useState(null)

  useEffect(() => {
    if (!buyuk) return
    const tus = (e) => e.key === 'Escape' && setBuyuk(false)
    window.addEventListener('keydown', tus)
    return () => window.removeEventListener('keydown', tus)
  }, [buyuk])

  if (yok && gizleYoksa) return null
  const gorsel = yok ? (
    <div className="ekran-bos">
      <strong>Ekran görüntüsü hazırlanıyor</strong>
      <span>{src}</span>
    </div>
  ) : null

  const lightbox = buyuk && (
    <div className="lightbox" onClick={() => setBuyuk(false)} role="dialog" aria-label={baslik}>
      <img src={src} alt={baslik} />
      <button className="lightbox-kapat" aria-label="Kapat">×</button>
    </div>
  )

  // Telefon çerçevesi: mobil görüntüler dikey (ör. 1080x2400) alınır.
  if (mobilMi(src)) {
    return (
      <figure className={'ekran ekran-mobil' + (kucuk ? ' ekran-islem' : '')}>
        <div className="telefon">
          <span className="telefon-centik" />
          <div className="telefon-ekran">
            {gorsel || (
              <img src={src} alt={baslik} width="1080" height="2400" loading="lazy"
                onError={() => setYok(true)} onClick={() => setBuyuk(true)} />
            )}
          </div>
        </div>
        <figcaption>
          <span className="telefon-baslik">{baslik}</span>
          {aciklama && <span>{aciklama}</span>}
        </figcaption>
        {lightbox}
      </figure>
    )
  }

  return (
    <figure className={'ekran' + (kucuk ? ' ekran-islem' : '') + (cok ? ' ekran-cok' : '')}
      tabIndex={cok ? 0 : undefined}
      onKeyDown={cok ? (e) => { if (e.key === 'ArrowRight') git(1); if (e.key === 'ArrowLeft') git(-1) } : undefined}>
      <div className="tarayici">
        <span className="nokta" /><span className="nokta" /><span className="nokta" />
        <span className="tarayici-baslik">{baslik}</span>
        {cok && <span className="parca-sayac">{sira + 1} / {parcalar.length}</span>}
      </div>
      <div className="ekran-kutu"
        onTouchStart={cok ? (e) => setDokunX(e.touches[0].clientX) : undefined}
        onTouchEnd={cok ? (e) => { if (dokunX == null) return; const d = e.changedTouches[0].clientX - dokunX; if (Math.abs(d) > 40) git(d < 0 ? 1 : -1); setDokunX(null) } : undefined}>
        {gorsel || (
          <img
            src={src}
            alt={baslik}
            width="1920"
            height="1080"
            loading="lazy"
            onError={() => setYok(true)}
            onClick={() => setBuyuk(true)}
          />
        )}
        {!gorsel && <IsaretKatmani isaretler={isaretler} />}
        {cok && (
          <>
            <button type="button" className="parca-ok sol" onClick={() => git(-1)} aria-label="Önceki görüntü">‹</button>
            <button type="button" className="parca-ok sag" onClick={() => git(1)} aria-label="Sonraki görüntü">›</button>
          </>
        )}
      </div>
      {cok && (
        <div className="parca-noktalar" role="tablist" aria-label="Ekran parçaları">
          {parcalar.map((_, i) => (
            <button key={i} type="button" role="tab" aria-selected={i === sira} aria-label={(i + 1) + '. görüntü'}
              className={'parca-nokta' + (i === sira ? ' secili' : '')} onClick={() => setSira(i)} />
          ))}
          <span className="parca-ipucu">Sayfanın devamı için kaydırın</span>
        </div>
      )}
      {aciklama && <figcaption>{aciklama}</figcaption>}
      {lightbox}
    </figure>
  )
}
