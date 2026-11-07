// Kenar menü simgeleri (çizgi stili, DHR menüsüne benzer). Ad → SVG yolları.
const P = {
  ev: 'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  giris: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3',
  arayuz: 'M3 4h18v16H3zM3 9h18M9 9v11',
  panel: 'M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z',
  kisi: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  kisiler: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  klasor: 'M3 6a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  takvim: 'M4 5h16v16H4zM4 10h16M8 3v4M16 3v4',
  saat: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  kutu: 'M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8',
  depo: 'M3 21V8l9-5 9 5v13M7 21v-8h10v8M7 17h10',
  gorev: 'M9 11l3 3 8-8M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9',
  kronometre: 'M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 10v4l2 2M10 2h4',
  lira: 'M8 4v16M8 9l8-3M8 14l8-3M8 20c5 0 9-3 9-8',
  fis: 'M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2zM9 8h6M9 12h6',
  grafik: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  kupa: 'M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3',
  ucak: 'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z',
  kisiEkle: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6',
  vardiya: 'M4 5h16v16H4zM4 10h16M8 3v4M16 3v4M12 13v3l2 1',
  otobus: 'M5 17h14V6a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3zM5 11h14M7 20v-3M17 20v-3M8 14h.01M16 14h.01',
  ayar: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
  belge: 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 13h8M8 17h5',
  kitap: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5',
  ok: 'm6 9 6 6 6-6',
  ara: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3',
  telefon: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2',
  bilgisayar: 'M3 4h18v12H3zM8 20h8M12 16v4',
}

// Kılavuz sayfası → simge
export const sayfaSimgesi = {
  'sisteme-giris': 'giris', 'genel-arayuz': 'arayuz',
  'kontrol-panelim': 'panel', bilgilerim: 'kisi', dokumanlarim: 'klasor', izinlerim: 'takvim',
  mesailerim: 'saat', zimmetlerim: 'kutu', gorevlerim: 'gorev', 'ek-mesailerim': 'kronometre',
  bordrom: 'lira', masraflarim: 'fis', performansim: 'kupa', seyahatlerim: 'ucak', vardiyalarim: 'vardiya',
  'kontrol-paneli': 'panel', 'calisan-yonetimi': 'kisiler', 'dokuman-yonetimi': 'klasor', 'izin-yonetimi': 'takvim',
  'mesai-takibi': 'saat', 'zimmet-yonetimi': 'kutu', 'stok-yonetimi': 'depo', 'gorev-yonetimi': 'gorev',
  'ek-mesai-yonetimi': 'kronometre', 'bordro-yonetimi': 'lira', 'masraf-yonetimi': 'fis', 'butce-planlama': 'grafik',
  'performans-yonetimi': 'kupa', 'seyahat-yonetimi': 'ucak', 'ise-giris-cikis': 'kisiEkle', 'vardiya-yonetimi': 'vardiya',
  'servis-yonetimi': 'otobus', ayarlar: 'ayar',
  // Ek sayfalar
  'birim-yonetimi-genel': 'depo', 'birim-yonetimi-moduller': 'ayar', 'ozluk-islemleri': 'belge',
  'calisan-disa-aktarma': 'belge', 'calisani-goruntule': 'kisi', 'calisani-duzenle': 'kisi',
  'isten-cikarma-yonetimi': 'kisiler', 'bilgilerimi-duzenle': 'kisi', 'calisan-geri-bildirimi': 'kisiler',
  duyurular: 'belge', anketler: 'gorev',
}

// Mobil sayfalar: "mobil-<ad>" → web karşılığının simgesi; özel olanlar aşağıda
const mobilOzel = {
  'kurulum-giris': 'telefon', 'genel-arayuz': 'telefon', 'ana-sayfa': 'panel', profilim: 'kisi',
  avanslarim: 'lira', egitimlerim: 'kitap', 'anket-duyuru': 'belge', onaylar: 'gorev',
  'avans-yonetimi': 'lira', 'zimmet-stok-yonetimi': 'kutu', 'egitim-yonetimi': 'kitap', 'duyuru-anket-yonetimi': 'belge',
}
for (const [k, v] of Object.entries({ ...sayfaSimgesi, ...mobilOzel })) sayfaSimgesi['mobil-' + k] = v

export const grupSimgesi = {
  baslarken: 'kitap', kisisel: 'kisi', yonetim: 'kisiler', ayarlar: 'ayar',
  'mobil-baslarken': 'kitap', 'mobil-kisisel': 'kisi', 'mobil-yonetim': 'kisiler',
}

export default function Simge({ ad, boyut = 18 }) {
  return (
    <svg className="simge" width={boyut} height={boyut} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[ad] || P.belge} />
    </svg>
  )
}
