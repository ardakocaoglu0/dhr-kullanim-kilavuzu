// Ekran görüntüsü işaretleri (A stili: kırmızı çerçeve + numara rozeti) ve çok parçalı ekranlar.
// scripts/ekran_al.py üretir:
//   isaretler/konum/*.json : { "ekranlar/<sayfa>/<dosya>.png": [{ no, baslik, x, y, w, h }] }  (1920x1080 piksel)
//   isaretler/parca/*.json : { "ekranlar/<sayfa>/<dosya>.png": 3 }  → <dosya>.png, <dosya>-2.png, <dosya>-3.png
import { slug } from '../lib/slug.js'

const birlestir = (dosyalar) => {
  const t = {}
  for (const m of Object.values(dosyalar)) Object.assign(t, m.default || m)
  return t
}
const konum = birlestir(import.meta.glob('./isaretler/konum/*.json', { eager: true }))
const parca = birlestir(import.meta.glob('./isaretler/parca/*.json', { eager: true }))

export function isaretAl(yol) {
  return (konum[yol] || []).map((i) => ({ ...i, hedefId: slug(i.baslik) }))
}

// Bir ekranın tüm parçaları: [{ src, isaretler }]
export function ekranParcalari(yol) {
  const n = parca[yol] || 1
  return Array.from({ length: n }, (_, i) => {
    const src = i === 0 ? yol : yol.replace(/\.png$/, `-${i + 1}.png`)
    return { src, isaretler: isaretAl(src) }
  })
}
