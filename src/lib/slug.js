// scripts/ekran_al.py içindeki slug() ile birebir aynı kalmalı
const TR = { ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u', İ: 'i' }
export function slug(x) {
  let s = (x || '').replace(/\s*·\s*\d+/g, '').replace(/[İ]/g, 'i').toLowerCase()
  s = s.replace(/[çğıöşü]/g, (c) => TR[c] || c)
  return s.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'ana'
}

export function ekranYolu(sayfaId, sekme) {
  return `ekranlar/${sayfaId}/${sekme ? slug(sekme) : 'ana'}.png`
}

// Her işlem için ekran görüntüsü yerleri (resimler sonra alınacak). Manifest betiği de bunu kullanır.
//  - ekran : işlemin yapıldığı ekran / açılan pencere
//  - form  : formun doldurulmuş hali (alan tablosu olan işlemlerde)
//  - sonuc : işlem tamamlandıktan sonraki görünüm (alan tablosu olan işlemlerde)
// İşlemde "ekranlar: [{ tur, aciklama }]" verilirse varsayılanın yerine o kullanılır.
export function islemEkranlari(sayfa) {
  const goruldu = {}
  return (sayfa.islemler || []).map((x) => {
    let k = 'islem-' + slug(x.baslik).slice(0, 50)
    goruldu[k] = (goruldu[k] || 0) + 1
    if (goruldu[k] > 1) k += '-' + goruldu[k]
    const liste = x.ekranlar || [
      { tur: 'ekran', aciklama: 'İşlemin yapıldığı ekran' },
      ...(x.alanlar?.length ? [
        { tur: 'form', aciklama: 'Formun doldurulmuş hali' },
        { tur: 'sonuc', aciklama: 'İşlem tamamlandıktan sonraki görünüm' },
      ] : []),
    ]
    return liste.map((e) => ({ ...e, yol: `ekranlar/${sayfa.id}/${k}${e.tur === 'ekran' ? '' : '-' + e.tur}.png` }))
  })
}
