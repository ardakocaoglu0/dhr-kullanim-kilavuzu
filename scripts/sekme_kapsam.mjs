// Menüdeki her sekme kılavuzda (ekran listesi, işlem sekmesi ya da metin içinde) geçiyor mu?
import { readdirSync, readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import path from 'node:path'
const K = path.resolve('src/data/moduller'), R = path.join(process.env.TEMP, 'dhr_seed_kilavuz', 'dogrulama')
const temiz = (t) => t.replace(/\s*·\s*\d+/g, '').trim()
const sayfa = {}
for (const f of readdirSync(K)) for (const s of (await import(pathToFileURL(path.join(K, f)).href)).default)
  sayfa[s.kim + s.href] = { s, yollar: new Set([...(s.ekranlar || []).map((e) => e.sekme), ...(s.islemler || []).map((x) => x.sekme)].filter(Boolean).map(temiz)), metin: JSON.stringify(s) }
const DURUM = /^(Tüm|Tümü|Bekleyen|Onaylanan|Reddedilen|İptal|Devam Eden|Tamamlanan|Onay Bekleyen|Kesinleşen|Geciken)/
let top = 0, ok = 0; const eksik = []
for (const [kim, f] of [['parla', 'rapor_parla.json'], ['ali', 'rapor_ali.json']]) for (const r of JSON.parse(readFileSync(path.join(R, f))).sayfalar) {
  const g = sayfa[kim + r.href]
  if (!g) { eksik.push(`${kim} ${r.href} — SAYFA YOK`); continue }
  for (const t of r.sekmeler || []) {
    const yol = temiz(t.sekme || t), son = yol.split(' > ').pop()
    if (/zaman damga/i.test(yol) || /Demo Veri/.test(yol)) continue
    top++
    if (g.yollar.has(yol) || (DURUM.test(son) && g.metin.includes(son)) || g.metin.includes(son)) ok++
    else eksik.push(`${kim} ${g.s.id} › ${yol}`)
  }
}
console.log(`${ok}/${top} sekme kılavuzda geçiyor`); eksik.forEach((e) => console.log('✗', e))
