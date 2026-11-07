# Kılavuz içerik şeması

Her modül bir dosyadır: `src/data/moduller/<modul>.js`. Dosya bir sayfa dizisi döner:

```js
export default [
  {
    id: 'izinlerim',              // benzersiz, küçük harf, Türkçe karaktersiz, tireli (URL olur: #/izinlerim)
    grup: 'kisisel',              // 'baslarken' | 'kisisel' | 'yonetim' | 'ayarlar'
    sira: 40,                     // grup içi sıra (görev tanımında verilir)
    baslik: 'İzinlerim',          // DHR menüsündeki adıyla birebir
    menu: 'Kişisel › İzinlerim',  // menü yolu
    href: '/my-leaves',           // DHR adresi (ekran görüntüsü betiği kullanır)
    kim: 'ali',                   // ekran görüntüsü hangi hesapla: 'ali' (çalışan) | 'parla' (yönetici)
    ozet: '1-2 cümle: sayfa ne işe yarar, kim kullanır.',

    // Ekran görüntüleri listesi (resimler en son eklenecek). İlki ana görünüm (sekme: null).
    ekranlar: [
      { sekme: null, aciklama: 'Sayfa açıldığında görünen…' },
      { sekme: 'Talepler > Bekleyen Talepler', aciklama: 'Bu sekmede…' },   // iç içe sekme ' > ' ile
    ],

    // Kavramlar / durumlar (isteğe bağlı)
    bolumler: [ { baslik: 'Talep durumları', metin: 'kısa giriş', maddeler: ['Beklemede: …'] } ],

    // SAYFADAKİ TÜM İŞLEMLER tek tek. Her API yeteneği kullanıcı diliyle bir işlem olur.
    islemler: [
      {
        baslik: 'Yeni izin talebi oluşturma',
        kim: 'Çalışan',                 // 'Çalışan' | 'Yönetici' | 'İK' | 'Herkes'
        sekme: null,                    // işlemin yapıldığı sekme yolu (varsa)
        aciklama: 'Ne işe yarar, ne zaman kullanılır.',
        adimlar: ['…', '…'],
        alanlar: [ { ad: 'İzin Türü', aciklama: '…', zorunlu: true } ],
        sonuc: 'Ne olur (durum, kime düşer).',
        notlar: ['Kısıt / uyarı'],
      },
    ],

    sss: [ { soru: '…?', cevap: '…' } ],
    ipuclari: ['…'],
  },
]
```

Kurallar
- Sade Türkçe, kullanıcıya hitap ("tıklayın", "seçin"). API adı, endpoint, kod terimi YOK.
- Buton/alan/sekme adları DHR arayüzündeki Türkçe etiketlerle aynı olmalı. Emin olmadığınız buton adını uydurmayın; konumla tarif edin ("sağ üstteki ekleme butonu").
- Zaman Damgası, TÜBİTAK, Teknopark, Damgala konularına hiç değinmeyin.
- Dosya geçerli bir ES modülü olmalı.

## Mobil uygulama sayfaları (DHR Mobil)
- Dosyalar: `src/data/moduller/mobil-*.js`. Sayfa id'leri `mobil-` ile başlar (ör. `mobil-izinlerim`).
- Gruplar: `'mobil-baslarken' | 'mobil-kisisel' | 'mobil-yonetim'`.
- Ek alanlar: `platform: 'mobil'` (zorunlu), `rota: '/leave'` (uygulama içi rota), `href: null`.
- `menu`: kullanıcının ekrana ulaştığı yol, ör. `'Mobil › Menü › İzinlerim'`.
- Ekran görüntüleri aynı klasör düzeninde (`public/ekranlar/mobil-<ad>/<sekme>.png`), **dikey** alınır
  (ör. 1080x2340). Site bunları telefon çerçevesinde gösterir.
- `scripts/manifest.mjs` mobil sayfaları web listesine (`ekranlar.json`) koymaz; `ekranlar_mobil.json`
  dosyasına yazar. `ekran_al.py` yalnız web listesini kullanır.
- Adımlar mobil diliyle yazılır: "dokunun", "kaydırın", "aşağı çekerek yenileyin".
