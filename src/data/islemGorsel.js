// İşlem kartlarındaki görseller (yeni dosya gerektirmeden doldurulur):
//  - ekran : işlemin numarasının bulunduğu ekran parçası, üzerinde YALNIZ o işlemin işareti
//            (işareti yoksa işlemin sekmesinin / sayfanın ana ekranı)
//  - form  : scripts/ekran_al.py --form ile alınan pencere görüntüsü (yoksa gösterilmez)
//  - sonuc : kaydın düştüğü liste ekranı (ör. "… > Bekleyen Talepler"); uygun ekran yoksa gösterilmez
import { ekranYolu, islemEkranlari } from '../lib/slug.js'
import { isaretAl } from './isaretler.js'

const konumlar = Object.assign({}, ...Object.values(import.meta.glob('./isaretler/konum/*.json', { eager: true })).map((m) => m.default || m))
const temizle = (v) => (v || '').replace(/\s*·\s*\d+/g, '').trim()

export function islemGorselleri(s) {
  const yollar = Object.keys(konumlar).filter((y) => y.startsWith(`ekranlar/${s.id}/`))
  const ekranSekmeleri = (s.ekranlar || []).map((e) => e.sekme || null)
  const varMi = (sekme) => ekranSekmeleri.some((e) => temizle(e) === temizle(sekme))
  const formlar = islemEkranlari(s)

  return (s.islemler || []).map((x, k) => {
    const no = k + 1
    // 1) işlem ekranı
    const isaretYolu = yollar.find((y) => (konumlar[y] || []).some((i) => i.no === no))
    const sekmeYolu = x.sekme && varMi(x.sekme) ? ekranYolu(s.id, x.sekme) : ekranYolu(s.id, ekranSekmeleri[0])
    const ekran = isaretYolu
      ? { src: isaretYolu, isaretler: isaretAl(isaretYolu).filter((i) => i.no === no) }
      : { src: sekmeYolu, isaretler: [] }
    // 2) form penceresi
    const f = formlar[k].find((e) => e.tur === 'form')
    const form = f ? { src: f.yol } : null
    // 3) sonuç: aynı sekme grubundaki "Bekleyen…" listesi, yoksa yok
    let sonuc = null
    if (f) {
      const kok = temizle(x.sekme || ekranSekmeleri.find(Boolean) || '').split(' > ')[0]
      const aday = ekranSekmeleri.find((e) => e && /Bekleyen|Onay Bekleyen|Onayımı Bekleyen/i.test(e) && (!kok || temizle(e).startsWith(kok)))
        || ekranSekmeleri.find((e) => e && /Bekleyen/i.test(e))
      const yol = aday ? ekranYolu(s.id, aday) : null
      if (yol && yol !== ekran.src) sonuc = { src: yol }
    }
    return { ekran, form, sonuc }
  })
}
