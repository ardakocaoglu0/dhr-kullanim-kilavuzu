import { Link, useParams } from 'react-router-dom'
import { gruplar, sayfalar, hesaplar, baglantilar } from '../data/kilavuz.js'
import Simge, { sayfaSimgesi } from './Simge.jsx'
import { ekranYolu, slug, islemEkranlari } from '../lib/slug.js'
import Ekran from './Ekran.jsx'
import Bulunamadi from './Bulunamadi.jsx'
import { isaretAl, ekranParcalari } from '../data/isaretler.js'
import { islemGorselleri } from '../data/islemGorsel.js'

const ok = (s) => (s || '').replace(/\s*·\s*\d+/g, '').split(' > ').join(' › ')

function Islem({ s, x, no, gorsel }) {
  const b = `${s.baslik} › ${x.baslik}`
  return (
    <section className="islem" id={slug(x.baslik)}>
      <h3>
        <span className="islem-no">{no}</span>
        {x.baslik}
        {x.kim && <span className="islem-kim">{x.kim}</span>}
      </h3>
      {x.sekme && <div className="islem-yer">Sekme: {ok(x.sekme)}</div>}
      {x.aciklama && <p>{x.aciklama}</p>}
      {x.adimlar?.length > 0 && (
        <ol className="adimlar">{x.adimlar.map((a, i) => <li key={i}>{a}</li>)}</ol>
      )}
      {gorsel?.ekran && (
        <Ekran key={gorsel.ekran.src + no} src={gorsel.ekran.src} isaretler={gorsel.ekran.isaretler} baslik={b}
          aciklama={gorsel.ekran.isaretler.length ? `İşlemin yapıldığı yer ${no} numarayla işaretli.` : 'İşlemin yapıldığı ekran'} kucuk gizleYoksa />
      )}
      {x.alanlar?.length > 0 && (
        <table className="alanlar">
          <thead><tr><th>Alan</th><th>Açıklama</th><th>Zorunlu</th></tr></thead>
          <tbody>
            {x.alanlar.map((a, i) => (
              <tr key={i}><td>{a.ad}</td><td>{a.aciklama}</td><td>{a.zorunlu ? 'Evet' : 'Hayır'}</td></tr>
            ))}
          </tbody>
        </table>
      )}
      {gorsel?.form && <Ekran key={gorsel.form.src} src={gorsel.form.src} baslik={b} kucuk gizleYoksa
        parcalar={ekranParcalari(gorsel.form.src)}
        aciklama={ekranParcalari(gorsel.form.src).length > 1 ? 'Açılan form penceresi (sekmeleri için kaydırın)' : 'Açılan form penceresi'} />}
      {x.sonuc && <p className="islem-sonuc"><b>Sonuç:</b> {x.sonuc}</p>}
      {gorsel?.sonuc && <Ekran key={gorsel.sonuc.src + 's'} src={gorsel.sonuc.src} baslik={b} aciklama="Kaydın listede görünümü (demo verisinden örnek)" kucuk gizleYoksa />}
      {x.notlar?.length > 0 && (
        <ul className="islem-not">{x.notlar.map((n, i) => <li key={i}>{n}</li>)}</ul>
      )}
    </section>
  )
}

export default function Sayfa() {
  const { id } = useParams()
  const i = sayfalar.findIndex((s) => s.id === id)
  if (i < 0) return <Bulunamadi />
  const s = sayfalar[i]
  const grup = gruplar.find((g) => g.id === s.grup)
  const onceki = sayfalar[i - 1]
  const sonraki = sayfalar[i + 1]
  const [ilk, ...sekmeler] = s.ekranlar || []
  const islemler = s.islemler || []
  const iGorsel = islemGorselleri(s)

  return (
    <article className="makale">
      <div className="kirinti">{grup?.baslik}</div>
      <h1>{s.baslik}</h1>
      <div className="etiketler">
        {s.menu && <span className="etiket menu-yolu">Menü: {s.menu}</span>}
        {s.kim && <span className={'etiket rol-' + s.kim}>{hesaplar[s.kim]?.rol}</span>}
      </div>
      <p className="ozet">{s.ozet}</p>

      {ilk && (
        <Ekran key={ekranYolu(s.id, ilk.sekme)} src={ekranYolu(s.id, ilk.sekme)}
          baslik={s.baslik + (ilk.sekme ? ' › ' + ok(ilk.sekme) : '')} aciklama={ilk.aciklama}
          isaretler={isaretAl(ekranYolu(s.id, ilk.sekme))} parcalar={ekranParcalari(ekranYolu(s.id, ilk.sekme))} />
      )}

      {islemler.length > 0 && (
        <nav className="icindekiler">
          <strong>Bu sayfadaki işlemler</strong>
          <ol>
            {islemler.map((x) => (
              <li key={x.baslik}><a href={'#/' + s.id} onClick={(e) => { e.preventDefault(); document.getElementById(slug(x.baslik))?.scrollIntoView({ behavior: 'smooth' }) }}>{x.baslik}</a></li>
            ))}
          </ol>
        </nav>
      )}

      {s.bolumler?.map((b) => (
        <section key={b.baslik}>
          <h2>{b.baslik}</h2>
          {b.metin && <p>{b.metin}</p>}
          {b.adimlar && <ol className="adimlar">{b.adimlar.map((a, k) => <li key={k}>{a}</li>)}</ol>}
          {b.maddeler && <ul>{b.maddeler.map((a, k) => <li key={k}>{a}</li>)}</ul>}
        </section>
      ))}

      {islemler.length > 0 && (
        <section>
          <h2>İşlemler</h2>
          {islemler.map((x, k) => <Islem key={s.id + k} s={s} x={x} no={k + 1} gorsel={iGorsel[k]} />)}
        </section>
      )}

      {sekmeler.length > 0 && (
        <section>
          <h2>Sekmeler</h2>
          {sekmeler.map((e) => (
            <div className="sekme" key={s.id + e.sekme}>
              <h3>{ok(e.sekme)}</h3>
              <p>{e.aciklama}</p>
              {e.gorselNotu ? <p className="ekran-not">{e.gorselNotu}</p> : <Ekran key={ekranYolu(s.id, e.sekme)} src={ekranYolu(s.id, e.sekme)} baslik={s.baslik + ' › ' + ok(e.sekme)}
                isaretler={isaretAl(ekranYolu(s.id, e.sekme))} parcalar={ekranParcalari(ekranYolu(s.id, e.sekme))} />}
            </div>
          ))}
        </section>
      )}

      {baglantilar[s.id]?.length > 0 && (
        <section>
          <h2>Bağlantılı modüller</h2>
          <p className="soluk-not">Bu sayfadaki işlemlerin etkilediği veya bu sayfayı besleyen diğer modüller:</p>
          <div className="baglantilar">
            {baglantilar[s.id].map((b) => {
              const h = sayfalar.find((x) => x.id === b.hedef)
              return (
                <Link key={b.hedef} to={'/' + b.hedef} className="baglanti">
                  <Simge ad={sayfaSimgesi[b.hedef]} />
                  <span><strong>{h.baslik}</strong><span>{b.aciklama}</span></span>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      {s.sss?.length > 0 && (
        <section>
          <h2>Sık sorulan sorular</h2>
          {s.sss.map((q) => (
            <details className="sss" key={q.soru}>
              <summary>{q.soru}</summary>
              <p>{q.cevap}</p>
            </details>
          ))}
        </section>
      )}

      {s.ipuclari?.length > 0 && (
        <aside className="ipucu">
          <strong>İpuçları</strong>
          <ul>{s.ipuclari.map((t) => <li key={t}>{t}</li>)}</ul>
        </aside>
      )}

      <nav className="sayfa-gecis">
        {onceki ? <Link to={'/' + onceki.id}>← {onceki.baslik}</Link> : <span />}
        {sonraki ? <Link to={'/' + sonraki.id}>{sonraki.baslik} →</Link> : <span />}
      </nav>
    </article>
  )
}
