"""DHR kılavuzu ekran görüntüleri — 1920x1080, YALNIZ OKUMA (yalnız sayfa açar, sekmeye tıklar; form göndermez).
Kullanım:  node scripts/manifest.mjs  &&  python -X utf8 scripts/ekran_al.py [ali|parla] [sayfa-id ...]
Giriş bilgisi: TEMP altındaki dhr_seed_kilavuz klasörü (kit.session) — şifre bu dosyada tutulmaz."""
import sys, os, json, re
from pathlib import Path
sys.path.insert(0, os.path.join(os.environ["TEMP"], "dhr_seed_kilavuz"))
from kit import session  # noqa: E402

KOK = Path(__file__).resolve().parent.parent
YASAK_URL = re.compile(r"timestamp|tubitak|technopark|damgala", re.I)  # bu adreslere hiç istek gitmez (GET dahil)
YASAK = re.compile(r"t[üu]b[iı]tak|zaman damga|damgala|timestamp|technopark|teknopark", re.I)
CLICK = r"""([label, prevVid]) => {
 const vis = e => { const r = e.getBoundingClientRect(); return r.width>0 && r.height>0 && getComputedStyle(e).visibility!=='hidden'; };
 const main = document.querySelector('main, .ant-layout-content') || document.body;
 const prev = prevVid ? document.querySelector('[data-rv="'+prevVid+'"]') : null;
 const lab = e => e.innerText.trim().split('\n')[0].replace(/\s*·\s*\d+$/, '').trim();
 const hedef = label.replace(/\s*·\s*\d+$/, '').trim();
 let c = [...main.querySelectorAll('.ant-tabs-tab')].filter(e => lab(e) === hedef).filter(e => vis(e.closest('.ant-tabs')));
 if (prevVid === '*') c = c;  // iç içe sekmede üst sekme belirtilmemişse her düzeyde ara
 else if (prev) c = c.filter(e => { const r = e.closest('.ant-tabs'); return r !== prev && prev.contains(r); });
 else c = c.filter(e => { const r = e.closest('.ant-tabs'); const p = r.parentElement.closest('.ant-tabs'); return !p || !main.contains(p); });
 if (!c.length) return null;
 const root = c[0].closest('.ant-tabs'); if (!root.dataset.rv) root.dataset.rv = 'r' + Math.random().toString(36).slice(2, 8);
 (c[0].querySelector('.ant-tabs-tab-btn') || c[0]).click(); return root.dataset.rv;
}"""


def bekle(p):
    try: p.wait_for_load_state("networkidle", timeout=15000)
    except Exception: pass
    for _ in range(24):
        if not p.evaluate("()=>[...document.querySelectorAll('.ant-spin-spinning,.ant-skeleton-active')].filter(e=>e.getBoundingClientRect().width>0).length"): break
        p.wait_for_timeout(500)
    p.wait_for_timeout(1500)


HEDEF = {}  # sayfa -> [ {islem, baslik, ekran, hedef} ]
for _f in (KOK / "src" / "data" / "isaretler" / "hedef").glob("*.json"):
    for _sayfa, _l in json.load(open(_f, encoding="utf-8")).items():
        HEDEF.setdefault(_sayfa, []).extend(_l)

OLC = r"""(h) => {
 const vis = e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== 'hidden'; };
 const m = document.querySelector('main, .ant-layout-content') || document.body;
 const panes = [...m.querySelectorAll('.ant-tabs-tabpane-active')].filter(vis);
 const derin = panes.filter(p => !panes.some(o => o !== p && p.contains(o)));
 const kap = derin.length ? derin[derin.length - 1] : m;
 const norm = v => (v || '').replace(/\s+/g, ' ').replace(/\s*\(\d+\)\s*$/, '').replace(/\s+\d+$/, '').trim().toLocaleLowerCase('tr');
 const tx = e => norm(e.innerText);
 const ilk = (kok, sec, f) => [...kok.querySelectorAll(sec)].filter(vis).find(f || (() => true));
 const t = h.tur, mt = norm(h.metin);
 const her = document.body;
 let el = null;
 if (t === 'buton') el = ilk(m, 'button, a.ant-btn, [role=button]', e => tx(e) === mt) || ilk(m, 'button, a.ant-btn', e => tx(e).startsWith(mt))
   || ilk(her, 'button, a, [role=button], .ant-menu-item, li', e => tx(e) === mt);
 else if (t === 'sekme') el = ilk(m, '.ant-tabs-tab, .ant-segmented-item', e => tx(e) === mt || tx(e).startsWith(mt));
 else if (t === 'tablo') el = ilk(kap, '.ant-table-wrapper, table') || ilk(m, '.ant-table-wrapper, table');
 else if (t === 'takvim') { el = ilk(kap, '.fc, .ant-picker-calendar, .rbc-calendar, [class*=calendar]') || ilk(m, '.fc, .ant-picker-calendar, .rbc-calendar, [class*=calendar]');
   if (!el) { const g = [...kap.querySelectorAll('*')].filter(vis).find(e => e.children.length === 0 && /^(pt|pzt|pts)$/i.test((e.textContent || '').trim()));
     let c = g; while (c && c !== kap && c.getBoundingClientRect().height < 200) c = c.parentElement; el = c && c !== kap ? c : null; } }
 else if (t === 'baslik') { const b = ilk(m, 'h1,h2,h3,h4,h5,.ant-card-head-title,.ant-typography', e => tx(e) === mt || tx(e).startsWith(mt));
   el = b ? (b.closest('.ant-card') || b.parentElement) : null; }
 else if (t === 'satir-simge') { const r = ilk(kap, 'tr.ant-table-row') || ilk(m, 'tr.ant-table-row');
   el = r ? [...r.querySelectorAll('button, a.ant-btn, [role=button]')].filter(vis)[(h.sira || 1) - 1] : null; }
 else el = ilk(m, '*', e => e.children.length === 0 && tx(e) === mt) || ilk(m, 'label, span, div', e => tx(e) === mt)
   || ilk(her, 'a, button, span, div, li', e => e.children.length <= 2 && tx(e) === mt);
 // Yedekler: düz yazı olarak duran başlık/buton; satırsız tabloda tablo; tablo/takvim yoksa boş-durum kartı veya en büyük kart
 const alan = e => { const r = e.getBoundingClientRect(); return r.width * r.height; };
 if (!el && mt && (t === 'buton' || t === 'baslik' || t === 'metin')) {
   const ad = [...m.querySelectorAll('*')].filter(e => !(e instanceof SVGElement) && vis(e) && (tx(e) === mt || (tx(e).startsWith(mt) && tx(e).length < mt.length + 40)));
   ad.sort((a, b) => alan(a) - alan(b)); el = ad[0] || null; }
 if (!el && mt && t === 'metin') {  // arama kutusu: yazı placeholder'da durur
   const pm = mt.replace(/[.…]+$/, '');
   const i = ilk(m, 'input[placeholder], textarea[placeholder]', e => norm(e.placeholder).replace(/[.…]+$/, '') === pm || norm(e.placeholder).startsWith(pm));
   el = i ? (i.closest('.ant-input-affix-wrapper, .ant-input-search, .ant-input-group-wrapper') || i) : null; }
 if (!el && t === 'satir-simge') el = ilk(kap, '.ant-table-wrapper, table') || ilk(m, '.ant-table-wrapper, table');
 if (el && (t === 'tablo' || t === 'takvim') && el.getBoundingClientRect().width < 300) el = null;  // ör. takvim simgesi
 if (!el && (t === 'tablo' || t === 'takvim')) {
   const bos = ilk(kap, '.ant-empty'); el = bos ? (bos.closest('.ant-card') || bos) : null;
   if (!el) { const k = [...kap.querySelectorAll('.ant-card')].filter(vis).sort((a, b) => alan(b) - alan(a)); el = k[0] || null; }
   if (!el) { const ka = alan(kap); const d = [...kap.querySelectorAll('div')].filter(e => vis(e) && e.getBoundingClientRect().height >= 150
       && e.getBoundingClientRect().width >= 600 && alan(e) < ka * 0.85).sort((a, b) => alan(b) - alan(a)); el = d[0] || null; } }
 if (!el) return null;
 const r = el.getBoundingClientRect();
 if (el.closest('header, .ant-layout-header') && r.bottom <= 64 && r.width > 4)  // üst çubuktaki öğe (dil, tema)
   return {x: Math.round(r.left), y: Math.round(Math.max(0, r.top)), w: Math.round(r.width), h: Math.round(r.height)};
 const x = Math.max(0, r.left), y = Math.max(0, r.top), x2 = Math.min(innerWidth, r.right), y2 = Math.min(innerHeight, r.bottom);
 const ust = 64;  // DHR üst çubuğu sabit; altında kalan kısım görünmez
 const yy = Math.max(y, r.top < ust ? ust : y);
 if (x2 - x < 6 || y2 - yy < 6) return {disari: true};
 const gorunen = y2 - yy, oran = gorunen / Math.max(1, r.height);
 if (oran < 0.6 && gorunen < 160) return {disari: true};
 return {x: Math.round(x), y: Math.round(yy), w: Math.round(x2 - x), h: Math.round(y2 - yy)};
}"""


KAYDIRICI = r"""() => {
 const m = document.querySelector('main, .ant-layout-content') || document.body;
 let el = m; while (el && el !== document.body) { const o = getComputedStyle(el).overflowY;
   if ((o === 'auto' || o === 'scroll') && el.scrollHeight > el.clientHeight + 4) break; el = el.parentElement }
 if (!el || el === document.body) el = document.scrollingElement;
 window.__kaydirici = el; return {top: el.scrollTop, max: el.scrollHeight - el.clientHeight, h: el.clientHeight};
}"""
EN_FAZLA_PARCA = 6
SATIR_BUTON = r"""(ad) => {  // tablodaki ilk satırda adı/etiketi verilen butona tıklar (yalnız görüntüleme butonları için)
 const r = [...document.querySelectorAll('main tr.ant-table-row')].find(e => e.getBoundingClientRect().width > 0); if (!r) return false;
 const b = [...r.querySelectorAll('button, a')].find(e => e.innerText.trim() === ad || e.getAttribute('aria-label') === ad || e.querySelector('[aria-label="' + ad + '"]'));
 if (!b) return false; b.click(); return true;
}"""


def parcali_cek(p, x, hedef_dosya, kayit, eksik, parca):
    """Sayfa tek ekrana sığmıyorsa aşağı kaydırarak en fazla 4 parça (1920x1080) çeker; işaretleri göründüğü parçaya yazar."""
    ekran_sekme = x["sekme"] or None
    bekleyen = [h for h in HEDEF.get(x["sayfa"], []) if (h.get("ekran") or None) == ekran_sekme]
    temel = x["dosya"].replace("public/", "", 1)
    k = p.evaluate(KAYDIRICI)
    if k["top"] > 0 and bekleyen:  # sekme üste kaydırıldıysa yukarıda kalan hedef var mı? varsa en üstten başla
        ust_kalan = any((lambda o: o is None or o.get("disari"))(p.evaluate(OLC, h["hedef"])) for h in bekleyen)
        if ust_kalan:
            p.evaluate("() => { window.__kaydirici.scrollTop = 0 }"); p.wait_for_timeout(500)
            if all((lambda o: o is None or o.get("disari"))(p.evaluate(OLC, h["hedef"])) for h in bekleyen):
                p.evaluate("(y) => { window.__kaydirici.scrollTop = y }", k["top"]); p.wait_for_timeout(300)  # üstte de yok: eski konum
            k = p.evaluate(KAYDIRICI)
    adim = max(400, k["h"] - 180)  # parçalar arasında ~180 px örtüşme
    konumlar = [k["top"]]
    while konumlar[-1] < k["max"] - 40 and len(konumlar) < EN_FAZLA_PARCA:
        konumlar.append(min(konumlar[-1] + adim, k["max"]))
    for i, poz in enumerate(konumlar):
        if i:
            p.evaluate("(y) => { window.__kaydirici.scrollTop = y }", poz); p.wait_for_timeout(700)
        yol = temel if i == 0 else temel[:-4] + f"-{i + 1}.png"
        liste, kalan = [], []
        for h in bekleyen:
            try: o = p.evaluate(OLC, h["hedef"])
            except Exception: o = None
            if o and not o.get("disari"): liste.append({"no": h["islem"], "baslik": h["baslik"], **o})
            else: kalan.append((h, o))
        bekleyen = [h for h, _ in kalan]
        kayit[yol] = sorted(liste, key=lambda z: z["no"])
        p.screenshot(path=str(hedef_dosya.parent / Path(yol).name), full_page=False)  # tam 1920x1080
    for h in bekleyen:
        eksik.append(f'{x["sayfa"]} › {ekran_sekme or "ana"} › {h["islem"]}. {h["baslik"]} (öğe bulunamadı)')
    # artık kullanılmayan eski parçaları temizle
    for j in range(len(konumlar) + 1, EN_FAZLA_PARCA + 1):
        eski = hedef_dosya.parent / (Path(temel).stem + f"-{j}.png")
        if eski.exists(): eski.unlink()
        kayit.pop(temel[:-4] + f"-{j}.png", None)
    if len(konumlar) > 1: parca[temel] = len(konumlar)
    else: parca.pop(temel, None)
    return len(konumlar)


ORTAK = json.load(open(os.path.join(os.environ["TEMP"], "dhr_seed_kilavuz", "ortak.json"), encoding="utf-8"))


def sayfa_ac(p, s, href):
    """Doğrudan adresle açılmayan (kayıt seçimi isteyen) sayfalar. Yalnız gezinme; kayıt göndermez."""
    if href == "/view-employee":
        p.goto(s.base_url + "/view-employee?id=" + ORTAK["ali_employee_id"], wait_until="domcontentloaded"); bekle(p); return
    if href == "/update-employee":
        p.goto(s.base_url + "/view-employee?id=" + ORTAK["ali_employee_id"], wait_until="domcontentloaded"); bekle(p)
        p.locator("main button", has_text="Çalışan İşlemleri").first.click(); p.wait_for_timeout(700)
        p.get_by_text("Çalışanı Düzenle", exact=True).first.click(); bekle(p); return
    if href == "/organizational-unit-management":
        p.goto(s.base_url + "/settings", wait_until="domcontentloaded"); bekle(p)
        p.evaluate("""async (id) => {
          const r = await fetch('/api/OrganizationalUnit/' + id, {credentials: 'include'}); const j = await r.json();
          const unit = j && (j.data || j);
          history.pushState({usr: unit, key: 'kilavuz', idx: (history.state?.idx || 0) + 1}, '', '/organizational-unit-management');
          dispatchEvent(new PopStateEvent('popstate', {state: history.state}));
        }""", ORTAK["unit_id"]); bekle(p); return
    p.goto(s.base_url + href, wait_until="domcontentloaded"); bekle(p)


def main():
    kim = sys.argv[1]
    sadece = set(sys.argv[2:])
    liste = [x for x in json.load(open(KOK / "scripts" / "ekranlar.json", encoding="utf-8"))
             if x["kim"] == kim and x.get("tur", "sekme") == "sekme" and (not sadece or x["sayfa"] in sadece) and not YASAK.search(x["sekme"] or "")]
    hata, eksik_isaret = [], []
    if os.environ.get("EKRAN_LISTE"):  # yalnız belirtilen [sayfa, sekme] ekranlarını yeniden çek
        secili = {(a, b or None) for a, b in json.load(open(os.environ["EKRAN_LISTE"], encoding="utf-8"))}
        liste = [x for x in liste if (x["sayfa"], x["sekme"] or None) in secili]
    konum_dosya = KOK / "src" / "data" / "isaretler" / "konum" / f"{kim}.json"
    konum_dosya.parent.mkdir(parents=True, exist_ok=True)
    kayit = json.load(open(konum_dosya, encoding="utf-8")) if konum_dosya.exists() else {}
    parca_dosya = KOK / "src" / "data" / "isaretler" / "parca" / f"{kim}.json"
    parca_dosya.parent.mkdir(parents=True, exist_ok=True)
    parca = json.load(open(parca_dosya, encoding="utf-8")) if parca_dosya.exists() else {}
    with session(kim) as s:
        p = s.page
        p.set_viewport_size({"width": 1920, "height": 1080})
        p.route(re.compile(r".*(timestamp|tubitak|technopark|damgala).*", re.I), lambda r: r.abort())
        for i, x in enumerate(liste, 1):
            if x["href"] == "/login":
                continue  # giriş ekranı oturum dışı alınır
            etiket = f'{x["sayfa"]} › {x["sekme"] or "ana"}'
            try:
                sayfa_ac(p, s, x["href"])
                yol_url = p.evaluate("location.pathname")
                govde = p.evaluate("(document.querySelector('main')||document.body).innerText.slice(0,400)")
                if yol_url in ("/not-found", "/token-error", "/login") or re.search(r"yetkiniz (yok|bulunmuyor)|403", govde, re.I):
                    hata.append(f"{etiket}: erişim yok ({yol_url})"); print("✗", etiket, "erişim yok", flush=True); continue
                prev, ok = None, True
                yol = x["sekme"].split(" > ") if x["sekme"] else []
                if yol and yol[0] == "Çalışan kartı":  # listedeki çalışanın detayını aç
                    p.locator("main").get_by_text(re.compile("Ali Öztürk")).first.click(); p.wait_for_timeout(900)
                    pg = p.get_by_role("button", name="Profili Görüntüle")
                    if pg.count(): pg.first.click()
                    bekle(p); yol = yol[1:]
                elif yol == ["Çalışan İşlemleri menüsü"]:  # yalnız menüyü açar
                    p.locator("main button", has_text="Çalışan İşlemleri").first.click(); p.wait_for_timeout(800); yol = []
                elif yol == ["İşten Çıkarılan Çalışan Detayları"]:  # satırdaki Detaylar (yalnız görüntüleme)
                    p.evaluate(SATIR_BUTON, "Detaylar"); bekle(p); yol = []
                elif yol == ["Anket Oluştur"]:  # ayrı sayfa; Gönder'e basılmaz
                    p.goto(s.base_url + "/create-survey", wait_until="domcontentloaded"); bekle(p); yol = []
                elif yol == ["Anket Sonuçları"]:  # Gönderilen Anketler'deki ilk anketin sonuç sayfası
                    p.evaluate(CLICK, ["Gönderilen Anketler", None]); bekle(p)
                    p.evaluate(SATIR_BUTON, "Sonuçlar"); bekle(p); yol = []
                elif yol == ["İşlemler menüsü"]:  # yalnız menüyü açar, hiçbir seçeneğe tıklamaz
                    p.locator("main button", has_text="İşlemler").first.click(); p.wait_for_timeout(800); yol = []
                elif yol == ["Onay Merkezi"]:
                    p.locator("main").get_by_text("Onay Merkezi", exact=True).first.scroll_into_view_if_needed(); p.wait_for_timeout(800); yol = []
                for lab in yol:
                    yeni = p.evaluate(CLICK, [lab, prev])
                    if not yeni and prev is None: yeni = p.evaluate(CLICK, [lab, "*"])
                    prev = yeni
                    if not prev: ok = False; break
                    bekle(p)
                if not ok:
                    hata.append(f"{etiket}: sekme bulunamadı"); print("✗", etiket, "sekme yok", flush=True); continue
                if prev:  # sekme içeriği görünsün: tıklanan sekme grubunu ekranın üstüne kaydır
                    p.evaluate("""(vid) => { const r = document.querySelector('[data-rv="'+vid+'"]'); if (!r) return;
                      r.scrollIntoView({block: 'start'}); const sc = (el) => { while (el && el !== document.body) { const o = getComputedStyle(el).overflowY;
                        if ((o === 'auto' || o === 'scroll') && el.scrollHeight > el.clientHeight) return el; el = el.parentElement } return window };
                      sc(r.parentElement).scrollBy(0, -90); }""", prev)
                    p.wait_for_timeout(600)
                hedef = KOK / x["dosya"]; hedef.parent.mkdir(parents=True, exist_ok=True)
                p.add_style_tag(content=".ant-message, .ant-notification, [role=alert], [class*=toast], [class*=Toast], [class*=sonner], [data-sonner-toaster], .notistack-SnackbarContainer, div[style*=\"z-index: 9999\"][style*=\"pointer-events: none\"] { display: none !important; }")  # hata bildirimleri görüntüye girmesin
                p.mouse.move(0, 0)
                n = parcali_cek(p, x, hedef, kayit, eksik_isaret, parca)
                print(f"✓ {i}/{len(liste)}", x["dosya"], f"({n} parça)" if n > 1 else "", flush=True)
            except Exception as e:
                hata.append(f"{etiket}: {str(e)[:120]}"); print("✗", etiket, str(e)[:120], flush=True)
            p.keyboard.press("Escape")
    print(f"{len(liste) - len(hata)}/{len(liste)} ekran alındı")
    for h in hata: print("✗", h)
    json.dump(hata, open(KOK / "scripts" / f"ekran_hata_{kim}.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    json.dump(kayit, open(konum_dosya, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    json.dump(parca, open(parca_dosya, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    json.dump(eksik_isaret, open(KOK / "scripts" / f"isaret_eksik_{kim}.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"işaretli ekran: {sum(1 for v in kayit.values() if v)} | konumu bulunamayan işaret: {len(eksik_isaret)}")


IZINLI = re.compile(r"(^|\s)(yeni|ekle|oluştur|talep et|talebi|ticket aç|ata|girişi|kayıt ekle|gönder|check-in|talip ol|itiraz et|tercih\w*|dışa aktar|belirt|yükle)(\s|$|\()", re.I)
YASAKLI = re.compile(r"onayla|reddet|\bsil\b|hesapla|sıfırla|onaya gönder|toplu|kopyala|üret|kesinleştir|kapat|iptal|indir|yayınla|çalıştır|eşitle|hatırlat|kaydet|uygula|sgk.?ya bildir|geri al|kilit|sonlandır|işten çıkar|kabul et", re.I)
PENCERE = ".ant-modal-wrap:not([style*='display: none']) .ant-modal-content, .ant-drawer-open .ant-drawer-content, .ant-modal-content"


def form_cek(kim, sadece):
    """Formu açan butona tıklar, açılan pencerenin 1920x1080 görüntüsünü alır, pencereyi kapatır. Hiçbir şey kaydetmez."""
    man = json.load(open(KOK / "scripts" / "ekranlar.json", encoding="utf-8"))
    formlar = [x for x in man if x["kim"] == kim and x.get("tur") == "islem-form" and (not sadece or x["sayfa"] in sadece)]
    sekme_href = {x["sayfa"]: x["href"] for x in man if x["kim"] == kim}
    sonuc, atla = [], []
    with session(kim) as s:
        p = s.page
        p.set_viewport_size({"width": 1920, "height": 1080})
        p.route(re.compile(r".*(timestamp|tubitak|technopark|damgala).*", re.I), lambda r: r.abort())
        # yazma isteklerini engelle: pencere açmak GET dışında istek gerektirmez
        p.route(re.compile(r".*"), lambda r: r.abort() if r.request.method not in ("GET", "HEAD", "OPTIONS") or YASAK_URL.search(r.request.url) else r.continue_())
        for x in formlar:
            h = next((h for h in HEDEF.get(x["sayfa"], []) if h["baslik"] == x["islem"]), None)
            metin = (h or {}).get("hedef", {}).get("metin", "") if (h or {}).get("hedef", {}).get("tur") == "buton" else ""
            if not metin or not IZINLI.search(metin):  # işaret hedefi yoksa adımlardaki buton adını kullan
                adaylar = []
                for a in x.get("adimlar", []):
                    adaylar += re.findall(r"[«\"“]([^»\"”]{2,40})[»\"”]", a)
                    adaylar += re.findall(r"((?:[A-ZÇĞİÖŞÜ+][\wçğıöşüÇĞİÖŞÜ'/&-]*\s?){1,5}?)\s+butonuna", a)
                aday = next((c.strip() for c in adaylar if IZINLI.search(c) and not YASAKLI.search(c)), "")
                if aday:
                    metin = aday
                    h = {"ekran": x["sekme"], "hedef": {"tur": "buton", "metin": aday}}
            if not metin or not IZINLI.search(metin) or YASAKLI.search(metin):
                atla.append(f'{x["sayfa"]} › {x["islem"]}: pencere açan buton yok ({metin or "-"})'); continue
            etiket = f'{x["sayfa"]} › {x["islem"]}'
            try:
                sayfa_ac(p, s, x["href"])
                yol = (h.get("ekran") or "").split(" > ") if h.get("ekran") else []
                prev = None
                for lab in yol:
                    prev = p.evaluate(CLICK, [lab, prev])
                    if not prev: raise Exception("sekme bulunamadı: " + lab)
                    bekle(p)
                url0 = p.url
                btn = p.locator("main button, main a.ant-btn").filter(has_text=re.compile(r"^s*" + re.escape(metin))).first
                if not btn.count(): btn = p.get_by_role("button", name=re.compile(re.escape(metin), re.I)).first
                btn.click(timeout=5000)
                try:
                    p.wait_for_function("""() => [...document.querySelectorAll('.ant-modal-content, .ant-drawer-content, [role=dialog]')]
                        .some(e => { const r = e.getBoundingClientRect(); return r.width > 50 && r.height > 50 && getComputedStyle(e).visibility !== 'hidden' })""", timeout=6000)
                except Exception:
                    if p.url == url0: raise Exception("pencere açılmadı")
                    bekle(p)
                p.wait_for_timeout(900); p.mouse.move(0, 0)
                hedef = KOK / x["dosya"]; hedef.parent.mkdir(parents=True, exist_ok=True)
                p.screenshot(path=str(hedef), full_page=False)
                sonuc.append(etiket); print("✓", etiket, flush=True)
            except Exception as e:
                atla.append(f"{etiket}: {str(e)[:100]}"); print("✗", etiket, str(e)[:100], flush=True)
            finally:
                try:
                    p.keyboard.press("Escape"); p.wait_for_timeout(300)
                    for kapat in p.locator(".ant-modal-close, .ant-drawer-close").all():
                        if kapat.is_visible(): kapat.click(timeout=1500)
                except Exception: pass
    print(f"{len(sonuc)} form alındı, {len(atla)} atlandı")
    json.dump(atla, open(KOK / "scripts" / f"form_atla_{kim}.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)


TIKLA = r"""([tur, deger, yasak]) => {  // tarif adımı: öğeyi bulur, yasaklı değilse tıklar
 const vis = e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== 'hidden'; };
 const n = v => (v || '').replace(/\s+/g, ' ').replace(/\s*\(\d+\)\s*$/, '').trim().toLocaleLowerCase('tr');
 const m = document.querySelector('main') || document.body, hed = n(String(deger));
 const alan = e => { const r = e.getBoundingClientRect(); return r.width * r.height; };
 let el = null;
 if (tur === 'buton') { const c = [...document.querySelectorAll('main button, main a.ant-btn, main [role=button], .ant-modal-content button, .ant-drawer-content button')].filter(vis);
   el = c.find(e => n(e.innerText) === hed) || c.find(e => n(e.innerText).startsWith(hed)) || c.find(e => n(e.getAttribute('aria-label')) === hed); }
 else if (tur === 'menu') { const c = [...document.querySelectorAll('.ant-dropdown:not(.ant-dropdown-hidden) .ant-dropdown-menu-item, .ant-dropdown:not(.ant-dropdown-hidden) li, [role=menuitem], .ant-select-dropdown:not(.ant-select-dropdown-hidden) .ant-select-item-option')].filter(vis);
   el = c.find(e => n(e.innerText) === hed) || c.find(e => n(e.innerText).startsWith(hed)); }
 else if (tur === 'satir' || tur === 'satir-simge') { const r = [...m.querySelectorAll('tr.ant-table-row')].find(vis);
   if (r) { const b = [...r.querySelectorAll('button, a')].filter(vis);
     el = tur === 'satir' ? b.find(e => n(e.innerText) === hed || n(e.getAttribute('aria-label')) === hed || e.querySelector('[aria-label="' + deger + '"]'))
                          : (b.filter(e => !n(e.innerText))[deger - 1] || b[deger - 1]); } }
 else if (tur === 'metin') {  // açık pencere varsa önce onun içinde ara
   const pen = [...document.querySelectorAll('.ant-modal-content, .ant-drawer-content')].filter(vis);
   for (const kok of [...pen.reverse(), m]) { const c = [...kok.querySelectorAll('*')].filter(e => vis(e) && n(e.innerText) === hed).sort((a, b) => alan(a) - alan(b));
     if (c.length) { el = c[0]; break; } } }
 if (!el) return {yok: true};
 const ad = ((el.innerText || '').trim() || el.getAttribute('aria-label') || el.querySelector('[aria-label]')?.getAttribute('aria-label') || '').slice(0, 60);
 if (new RegExp(yasak, 'i').test(ad)) return {yasak: ad};
 el.scrollIntoView({block: 'center'});
 const sec = el.closest('.ant-select');  // açılır liste farenin basılmasıyla açılır
 if (sec && !sec.closest('.ant-select-dropdown')) { (sec.querySelector('.ant-select-selector') || sec).dispatchEvent(new MouseEvent('mousedown', {bubbles: true})); return {ad}; }
 el.click(); return {ad};
}"""
PENCERE_VAR = """() => [...document.querySelectorAll('.ant-modal-content, .ant-drawer-content, [role=dialog], .ant-popover:not(.ant-popover-hidden) .ant-popover-inner')]
  .some(e => { const r = e.getBoundingClientRect(); return r.width > 50 && r.height > 50 && getComputedStyle(e).visibility !== 'hidden' })"""
PENCERE_SEKME = r"""(lab) => { const n = v => (v || '').replace(/\s+/g, ' ').replace(/\s*\(\d+\)\s*$/, '').trim().toLocaleLowerCase('tr');
 const c = [...document.querySelectorAll('.ant-modal-content .ant-tabs-tab, .ant-drawer-content .ant-tabs-tab')].filter(e => e.getBoundingClientRect().width > 0);
 const t = c.find(e => n(e.innerText) === n(lab)) || c.find(e => n(e.innerText).startsWith(n(lab))); if (!t) return false;
 (t.querySelector('.ant-tabs-tab-btn') || t).click(); return true; }"""


def tarif_cek(kim, sadece):
    """src/data/isaretler/form/*.json tariflerini uygular: formu açar, (sekmeleriyle) 1920x1080 çeker. Yazma istekleri engellidir."""
    man = json.load(open(KOK / "scripts" / "ekranlar.json", encoding="utf-8"))
    dosya_bul = {(x["sayfa"], x["islem"]): x for x in man if x.get("tur") == "islem-form" and x["kim"] == kim}
    tarifler = []
    for f in sorted((KOK / "src" / "data" / "isaretler" / "form").glob("*.json")):
        for sid, l in json.load(open(f, encoding="utf-8")).items():
            for t in l:
                x = dosya_bul.get((sid, t.get("baslik")))
                if x and not t.get("yok") and not t.get("oturumsuz") and (not sadece or sid in sadece) and (not os.environ.get("TARIF_YENI") or t.get("eskiGerekce")): tarifler.append((x, t))
    parca_dosya = KOK / "src" / "data" / "isaretler" / "parca" / f"{kim}.json"
    parca = json.load(open(parca_dosya, encoding="utf-8")) if parca_dosya.exists() else {}
    tamam, atla = 0, []
    with session(kim) as s:
        p = s.page
        p.set_viewport_size({"width": 1920, "height": 1080})
        p.route(re.compile(r".*(timestamp|tubitak|technopark|damgala).*", re.I), lambda r: r.abort())
        p.route(re.compile(r".*"), lambda r: r.abort() if r.request.method not in ("GET", "HEAD", "OPTIONS") or YASAK_URL.search(r.request.url) else r.continue_())
        for i, (x, t) in enumerate(tarifler, 1):
            etiket = f'{x["sayfa"]} › {x["islem"]}'
            try:
                sayfa_ac(p, s, x["href"]); prev = None
                ekran_yol = (t.get("ekran") or "").split(" > ") if t.get("ekran") else []
                if ekran_yol == ["Anket Oluştur"]:  # ayrı sayfa; Gönder'e basılmaz
                    p.goto(s.base_url + "/create-survey", wait_until="domcontentloaded"); bekle(p); ekran_yol = []
                for lab in ekran_yol:
                    prev = p.evaluate(CLICK, [lab, prev]) or (prev is None and p.evaluate(CLICK, [lab, "*"]))
                    if not prev: raise Exception("sekme yok: " + lab)
                    bekle(p)
                url0 = p.url
                for adim in t.get("ac", []):
                    (tur, deger), = adim.items()
                    if tur == "kart":
                        p.goto(s.base_url + "/view-employee?id=" + ORTAK["ali_employee_id"], wait_until="domcontentloaded"); bekle(p); url0 = p.url; continue
                    if tur == "git":  # başka sayfaya geç (ör. birim detayı); yalnız gezinme
                        sayfa_ac(p, s, deger); url0 = p.url; continue
                    if tur == "sekme":
                        if not (p.evaluate(PENCERE_SEKME, deger) if p.evaluate(PENCERE_VAR) else False) \
                           and not (p.evaluate(CLICK, [deger, None]) or p.evaluate(CLICK, [deger, "*"])): raise Exception("sekme yok: " + deger)
                        bekle(p); continue
                    if tur == "css":  # yazısız simge (üst çubuk vb.); seçiciyle tıklanır
                        p.locator(deger).first.click(timeout=5000); p.wait_for_timeout(900); continue
                    if tur == "dene":  # isteğe bağlı buton: adaylardan ilk bulunana tıklar, yoksa geçer
                        for ad in deger:
                            if not p.evaluate(TIKLA, ["buton", ad, YASAKLI.pattern]).get("yok"): p.wait_for_timeout(900); break
                        continue
                    # izinli: onay/ret gibi butonlar yalnız penceresini açmak için tıklanır; kayıt istekleri yukarıda engelli
                    yasak = r"(?!)" if t.get("izinli") else YASAKLI.pattern
                    if not t.get("izinli") and YASAKLI.search(str(deger)): raise Exception("yasaklı adım: " + str(deger))
                    r = p.evaluate(TIKLA, [tur, deger, yasak])
                    if r.get("yok"): raise Exception(f"{tur} bulunamadı: {deger}")
                    if r.get("yasak"): raise Exception("yasaklı öğe: " + r["yasak"])
                    p.wait_for_timeout(900 if tur in ("buton", "satir-simge") else 600)
                if not t.get("yerinde"):
                    try: p.wait_for_function(PENCERE_VAR, timeout=6000)
                    except Exception:
                        if p.url == url0: raise Exception("pencere açılmadı")
                    bekle(p)
                elif t.get("kaydir"):
                    p.evaluate("""(m) => { const n = v => (v||'').replace(/\\s+/g,' ').trim().toLocaleLowerCase('tr');
                      const e = [...document.querySelectorAll('main *')].find(e => e.children.length <= 2 && e.getBoundingClientRect().width > 0 && n(e.innerText) === n(m));
                      if (e) { e.scrollIntoView({block: 'start'}); let c = e.parentElement; while (c && c !== document.body) { const o = getComputedStyle(c).overflowY;
                        if ((o === 'auto' || o === 'scroll') && c.scrollHeight > c.clientHeight) { c.scrollBy(0, -110); break } c = c.parentElement } } }""", t["kaydir"])
                p.wait_for_timeout(700); p.mouse.move(0, 0)
                # engellenen kayıt isteklerinin "işlem gerçekleştirilemedi" bildirimleri görüntüye girmesin
                p.add_style_tag(content=".ant-message, .ant-notification, [role=alert], [class*=toast], [class*=Toast], [class*=sonner], [data-sonner-toaster], .notistack-SnackbarContainer, div[style*=\"z-index: 9999\"][style*=\"pointer-events: none\"] { display: none !important; }")
                hedef = KOK / x["dosya"]; hedef.parent.mkdir(parents=True, exist_ok=True)
                anahtar = x["dosya"].replace("public/", "", 1)
                sekmeler = t.get("pencereSekmeleri") or []
                n = 0
                if sekmeler:
                    for lab in sekmeler:
                        if not p.evaluate(PENCERE_SEKME, lab): continue
                        p.wait_for_timeout(900); n += 1
                        yol = hedef if n == 1 else hedef.with_name(hedef.stem + f"-{n}.png")
                        p.screenshot(path=str(yol), full_page=False)
                if n == 0:
                    p.screenshot(path=str(hedef), full_page=False); n = 1
                for j in range(n + 1, 17):  # eski fazla parçaları sil
                    e = hedef.with_name(hedef.stem + f"-{j}.png")
                    if e.exists(): e.unlink()
                if n > 1: parca[anahtar] = n
                else: parca.pop(anahtar, None)
                tamam += 1; print(f"✓ {i}/{len(tarifler)} {etiket}" + (f" ({n} sekme)" if n > 1 else ""), flush=True)
            except Exception as e:
                atla.append(f"{etiket}: {str(e)[:140]}"); print("✗", etiket, str(e)[:140], flush=True)
            finally:
                try:
                    p.keyboard.press("Escape"); p.wait_for_timeout(250)
                    for k in p.locator(".ant-modal-close, .ant-drawer-close").all():
                        if k.is_visible(): k.click(timeout=1500)
                except Exception: pass
    json.dump(parca, open(parca_dosya, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    json.dump(atla, open(KOK / "scripts" / f"tarif_atla_{kim}.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"{tamam}/{len(tarifler)} form alındı")


if __name__ == "__main__":
    if "--tarif" in sys.argv:
        args = [a for a in sys.argv[1:] if a != "--tarif"]
        tarif_cek(args[0], set(args[1:])); sys.exit(0)
    if "--form" in sys.argv:
        args = [a for a in sys.argv[1:] if a != "--form"]
        form_cek(args[0], set(args[1:])); sys.exit(0)
    main()
