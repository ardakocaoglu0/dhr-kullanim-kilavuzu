// İçerik kontrolü: id tekrarları, rapordaki gerçek sekmelerle eşleşmeyen ekran yolları, yasaklı kelimeler
import { readdirSync, readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import path from 'node:path'
const K = path.resolve('src/data/moduller')
const R = path.join(process.env.TEMP, 'dhr_seed_kilavuz', 'dogrulama')
const gercek = {}
for (const f of ['rapor_parla.json', 'rapor_ali.json']) for (const s of JSON.parse(readFileSync(path.join(R, f))).sayfalar) {
  const k = f.includes('ali') ? 'ali' : 'parla'
  gercek[k + s.href] = new Set((s.sekmeler || []).map((t) => (typeof t === "string" ? t : t.sekme || "").replace(/\s*·\s*\d+/g, '')))
}
const ids = {}; let top = { sayfa: 0, islem: 0, ekran: 0 }
for (const f of readdirSync(K)) {
  const txt = readFileSync(path.join(K, f), 'utf8')
  const yasak = txt.match(/\btest\b|t[üu]b[iı]tak|zaman damga|damgala|teknopark|technopark|endpoint|\/api\//gi)
  if (yasak) console.log('YASAK', f, [...new Set(yasak)])
  const m = (await import(pathToFileURL(path.join(K, f)).href)).default
  for (const s of m) {
    top.sayfa++; top.islem += (s.islemler || []).length; top.ekran += (s.ekranlar || []).length
    if (ids[s.id]) console.log('TEKRAR id', s.id); ids[s.id] = 1
    if (s.platform === 'mobil') continue // mobil sekmeler web tarama raporunda yok; eşleştirme yapılmaz
    const g = gercek[s.kim + s.href]
    const yollar = [...(s.ekranlar || []).map((e) => e.sekme), ...(s.islemler || []).map((x) => x.sekme)].filter(Boolean)
    const yok = [...new Set(yollar.map((y) => y.replace(/\s*·\s*\d+/g, '')))].filter((y) => !g || !g.has(y))
    if (yok.length) console.log('EŞLEŞMEYEN', f, s.id, s.kim, s.href, JSON.stringify(yok))
  }
}
console.log(top)
