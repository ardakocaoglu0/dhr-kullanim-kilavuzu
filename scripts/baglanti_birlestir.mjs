// İnceleme çıktılarındaki *-baglantilar.json dosyalarını src/data/baglantilar.js içine birleştirir.
// Kullanım: node scripts/baglanti_birlestir.mjs <klasör>
import fs from 'node:fs'
import path from 'node:path'
const klasor = process.argv[2]
const sonuc = {}
for (const f of fs.readdirSync(klasor).filter((x) => x.endsWith('-baglantilar.json'))) {
  const veri = JSON.parse(fs.readFileSync(path.join(klasor, f), 'utf8'))
  for (const [id, liste] of Object.entries(veri)) {
    sonuc[id] ||= []
    for (const b of liste) if (b?.hedef && b?.aciklama && !sonuc[id].some((x) => x.hedef === b.hedef)) sonuc[id].push({ hedef: b.hedef, aciklama: b.aciklama.trim() })
  }
}
const say = Object.values(sonuc).reduce((t, l) => t + l.length, 0)
const metin = '// Modüller arası veri akışı: { \'sayfa-id\': [{ hedef, aciklama }] }\n// Entegrasyon incelemesinden üretildi (scripts/baglanti_birlestir.mjs). Elle de düzenlenebilir.\nexport default ' + JSON.stringify(sonuc, null, 2) + '\n'
fs.writeFileSync('src/data/baglantilar.js', metin)
console.log(Object.keys(sonuc).length, 'sayfa,', say, 'bağlantı')
