// Modül dosyalarından ekran görüntüsü listesini üretir → scripts/ekranlar.json (web)
// Mobil sayfalar (platform: 'mobil') ayrı listeye yazılır → scripts/ekranlar_mobil.json
// (ekran_al.py yalnız web listesini okur; mobil görüntüler telefondan/emülatörden alınır)
import { readdirSync, writeFileSync } from 'node:fs'
import { pathToFileURL, fileURLToPath } from 'node:url'
import path from 'node:path'
import { slug, islemEkranlari } from '../src/lib/slug.js'

const kok = path.dirname(fileURLToPath(import.meta.url))
const klasor = path.join(kok, '..', 'src', 'data', 'moduller')
const liste = []
const mobil = []
for (const f of readdirSync(klasor).filter((x) => x.endsWith('.js'))) {
  const m = await import(pathToFileURL(path.join(klasor, f)).href)
  for (const s of m.default) {
    const hedef = s.platform === 'mobil' ? mobil : liste
    const ek = s.platform === 'mobil' ? { rota: s.rota || null } : {}
    const yollar = new Set()
    const notlu = new Set((s.ekranlar || []).filter((e) => e.gorselNotu).map((e) => e.sekme))  // demo hesaplarıyla alınamayan ekranlar
    for (const e of s.ekranlar || []) if (!e.gorselNotu) yollar.add(e.sekme || null)
    for (const x of s.islemler || []) if (x.sekme && !notlu.has(x.sekme)) yollar.add(x.sekme)
    for (const sekme of yollar)
      hedef.push({ tur: 'sekme', sayfa: s.id, kim: s.kim, href: s.href, ...ek, sekme, dosya: `public/ekranlar/${s.id}/${sekme ? slug(sekme) : 'ana'}.png` })
    // İşlem ekranları: yakalama için işlemin sekmesi + adımları bilgi olarak eklenir (pencere açma adımları elle/ajanla tamamlanacak)
    islemEkranlari(s).forEach((ekr, i) => {
      const x = s.islemler[i]
      for (const e of ekr) hedef.push({ tur: 'islem-' + e.tur, sayfa: s.id, kim: s.kim, href: s.href, ...ek, sekme: x.sekme || null,
        islem: x.baslik, adimlar: x.adimlar || [], dosya: 'public/' + e.yol })
    })
  }
}
writeFileSync(path.join(kok, 'ekranlar.json'), JSON.stringify(liste, null, 1))
writeFileSync(path.join(kok, 'ekranlar_mobil.json'), JSON.stringify(mobil, null, 1))
const say = (l) => l.reduce((a, x) => ((a[x.tur] = (a[x.tur] || 0) + 1), a), {})
console.log(liste.length, 'web ekran', say(liste))
console.log(mobil.length, 'mobil ekran', say(mobil))
