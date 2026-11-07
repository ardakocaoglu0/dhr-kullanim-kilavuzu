// Modül içerikleri src/data/moduller/*.js dosyalarından toplanır.
// Her modül dosyası "export default [sayfa, sayfa, ...]" döner (şema: src/data/SEMA.md).

export const hesaplar = {
  ali: { ad: 'Ali Öztürk', rol: 'Çalışan ekranı' },
  parla: { ad: 'Parla Yılmaz', rol: 'Yönetici ekranı' },
}

export const gruplar = [
  // Sıra DHR menüsüyle aynı: Yönetim → Kişisel → Ayarlar (Başlarken yalnız kılavuza ait giriş bölümü)
  { id: 'baslarken', baslik: 'Başlarken', aciklama: 'Sisteme giriş ve genel arayüz.' },
  { id: 'yonetim', baslik: 'Yönetim', aciklama: 'Yöneticilerin ve İK ekibinin onay, takip ve tanım ekranları (DHR menüsünde "Yönetim").' },
  { id: 'kisisel', baslik: 'Kişisel', aciklama: 'Her çalışanın kendi talep ve bilgileri için kullandığı ekranlar (DHR menüsünde "Kişisel").' },
  { id: 'ayarlar', baslik: 'Ayarlar', aciklama: 'Organizasyon şeması, kullanıcılar ve yetkiler.' },
  // Mobil uygulama (DHR Mobil): sayfa id'leri "mobil-" ile başlar, platform: 'mobil'
  { id: 'mobil-baslarken', baslik: 'Mobil · Başlarken', aciklama: 'DHR Mobil uygulamasının kurulumu, girişi ve genel kullanımı.' },
  { id: 'mobil-kisisel', baslik: 'Mobil · Kişisel', aciklama: 'Çalışanların telefondan kendi talep ve bilgilerini yönettiği ekranlar.' },
  { id: 'mobil-yonetim', baslik: 'Mobil · Yönetim', aciklama: 'Yöneticilerin telefondan onay, takip ve yönetim işlemleri.' },
]

const dosyalar = import.meta.glob('./moduller/*.js', { eager: true })
const sira = Object.fromEntries(gruplar.map((g, i) => [g.id, i]))

// Ek sık sorulan sorular: src/data/sss/*.js → export default { 'sayfa-id': [{ soru, cevap }] }
// Sayfadaki mevcut sorulara eklenir; aynı soru iki kez görünmez.
const sssDosyalari = import.meta.glob('./sss/*.js', { eager: true })
const ekSss = {}
for (const m of Object.values(sssDosyalari))
  for (const [id, liste] of Object.entries(m.default || {})) (ekSss[id] ||= []).push(...liste)
const kucuk = (s) => s.toLocaleLowerCase('tr').replace(/\s+/g, ' ').trim()
function sssBirlestir(s) {
  if (!ekSss[s.id]) return s
  const gorulen = new Set((s.sss || []).map((q) => kucuk(q.soru)))
  const yeni = ekSss[s.id].filter((q) => !gorulen.has(kucuk(q.soru)) && gorulen.add(kucuk(q.soru)))
  return { ...s, sss: [...(s.sss || []), ...yeni] }
}

export const sayfalar = Object.values(dosyalar)
  .flatMap((m) => m.default || [])
  .map(sssBirlestir)
  .sort((a, b) => (sira[a.grup] ?? 9) - (sira[b.grup] ?? 9) || (a.sira ?? 99) - (b.sira ?? 99))

// Bağlantılı modüller: yalnız var olan hedef sayfalar gösterilir
import baglantiVerisi from './baglantilar.js'
const varOlan = new Set(sayfalar.map((s) => s.id))
export const baglantilar = Object.fromEntries(
  Object.entries(baglantiVerisi).map(([id, l]) => [id, l.filter((b) => varOlan.has(b.hedef) && b.hedef !== id)])
)
