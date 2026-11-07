// Mobil uygulama: Kişisel grubu 1 (Ana Sayfa, Profilim, İzinlerim, Mesailerim, Vardiyalarım, Ek Mesailerim)

export default [
  // ───────────────────────────── ANA SAYFA ─────────────────────────────
  {
    id: 'mobil-ana-sayfa',
    grup: 'mobil-kisisel',
    sira: 10,
    platform: 'mobil',
    rota: '/',
    href: null,
    kim: 'ali',
    baslik: 'Ana Sayfa Ekranı',
    menu: 'Mobil › Ana Sayfa',
    ozet:
      'Uygulamayı açtığınızda karşınıza çıkan ekrandır. Kişisel bilgi kartınız, modül kısayollarınız ve izin, vardiya, talep, duyuru gibi özet kartlarınız tek kaydırmada burada toplanır. Yönetici yetkisi olanlar aynı ekranda ayrıca Yönetim paneline geçebilir.',

    ekranlar: [
      { sekme: null, aciklama: 'Üstte tarih, selamlama ("Merhaba 👋") ve günün sözü; altında kişisel bilgi kartı, Kısayollar şeridi ve özet kartları aşağı doğru sıralanır.' },
      { sekme: 'Kişisel', aciklama: 'Kendi kartlarınız: Onaylanan İzinler, Bekleyen İzinler, Onaylanan Dokümanlar, Bekleyen Dokümanlar sayaçları; İşe Giriş / Çıkış süreciniz; Vardiyam; "Bugün nasıl hissediyorsun?" kartı; izin durumu; talepleriniz; duyurular; yaklaşan doğum günleri.' },
      { sekme: 'Yönetim', aciklama: 'Yönetici yetkisi olanlarda üstteki Yönetim / Kişisel anahtarıyla açılan yönetim paneli. Bu panel Yönetim sayfalarında anlatılır.' },
      { sekme: 'Kısayollar', aciklama: 'Kişisel bilgi kartının altındaki yatay şerit; yetkili olduğunuz kişisel modüllerin kısayolları ve en sonda Tümünü Gör bağlantısı.' },
      { sekme: 'Talep Merkezi · Taleplerim', aciklama: 'İzin, doküman ve masraf taleplerinizi tek listede gösteren kart; üstte Beklemede, Onaylandı ve Toplam kutuları, altında İzin / Doküman / Masraf süzgeçleri bulunur.' },
      { sekme: 'Bugün nasıl hissediyorsun?', aciklama: 'Beş emojili günlük ruh hali kartı; altında son 7 günlük kişisel trend ve Geçmiş yanıtlarım bağlantısı yer alır.' },
      { sekme: 'Pozisyon Şeması', aciklama: 'Departmanınızın organizasyon şemasını gösteren kart; Departman seçiniz alanı, yakınlaştırma düğmeleri ve Beni ortala düğmesi bulunur.' },
    ],

    bolumler: [
      {
        baslik: 'Kartların görünürlüğü',
        metin: 'Ana Sayfa\'daki kartlar yetkinize ve kurumunuzun açtığı özelliklere göre değişir. Bir kartı göremiyorsanız o modül için yetkiniz veya özelliğiniz açık değildir.',
        maddeler: [
          'Onaylanan İzinler / Bekleyen İzinler ve İzin Durumu: İzinlerim yetkisi olanlarda görünür.',
          'Onaylanan Dokümanlar / Bekleyen Dokümanlar ve Doküman Durumu: Dokümanlarım yetkisi olanlarda görünür.',
          'Masraf Durumu: Masraflarım yetkisi olanlarda görünür.',
          'Vardiyam: Vardiyalarım yetkisi olanlarda görünür.',
          'Duyurular: Duyuruları görme yetkisi olanlarda görünür.',
          'İşe Giriş / Çıkış süreci kartı: Yalnız devam eden bir işe giriş veya işten çıkış süreciniz varsa görünür.',
          'Yönetim anahtarı: Yönetim paneli yetkisi olan kullanıcılarda üstte Yönetim ve Kişisel sekmeleri belirir; yetkisi olmayanlar yalnız kişisel paneli görür.',
        ],
      },
      {
        baslik: 'Talep durumları',
        metin: 'Talep Merkezi ve izin kartlarında şu durumlar kullanılır:',
        maddeler: [
          'Beklemede: Talep onaylayıcıda bekliyor; "Mevcut Onaylayan" satırında kimde olduğu yazar.',
          'Onaylandı: Talep onaylandı.',
          'Reddedildi: Talep reddedildi.',
          'İptal Edildi: Talep geri çekildi.',
        ],
      },
      {
        baslik: 'Kart düzeni',
        metin: 'Kartların sırası ve görünürlüğü mobilde değiştirilemez. Panel düzenini web\'de belirlediyseniz telefon o düzeni aynen okur.',
        maddeler: ['Kart düzenini değiştirmek için web\'deki Kontrol Panelim sayfasını kullanın.'],
      },
    ],

    islemler: [
      {
        baslik: 'Ana Sayfa\'yı yenileme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Kartlardaki bilgileri güncel hâle getirir.',
        adimlar: [
          'Ana Sayfa\'da ekranın en üstündeyken parmağınızı aşağı doğru çekin.',
          'Yenileme göstergesi kaybolana kadar bekleyin.',
        ],
        sonuc: 'Tüm kartlar yeniden yüklenir.',
        notlar: ['İnternet yoksa kartlar son yüklenen hâliyle kalır.'],
      },
      {
        baslik: 'Kişisel bilgi kartını inceleme ve telefon kopyalama',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Sicil numaranızı, işe başlama ve doğum tarihinizi, departmanınızı, telefonunuzu ve pozisyonunuzu tek kartta görürsünüz.',
        adimlar: [
          'Ana Sayfa\'da selamlama bölümünün altındaki kişisel bilgi kartına bakın.',
          'Telefon numaranızı kopyalamak için numaranın yanındaki kopyala simgesine dokunun.',
          'Tüm bilgilerinize gitmek için selamlama bölümüne veya karta dokunun.',
        ],
        sonuc: 'Telefon panoya kopyalanır ve "Kopyalandı" yazısı görünür; karta dokununca Bilgilerim ekranı açılır.',
      },
      {
        baslik: 'Modül kısayollarını kullanma',
        kim: 'Çalışan',
        sekme: 'Kısayollar',
        aciklama: 'Sık kullandığınız kişisel modüllere (İzinlerim, Mesailerim, Vardiyalarım gibi) tek dokunuşla ulaşırsınız.',
        adimlar: [
          'Kısayollar şeridinde modül simgelerini sağa-sola kaydırarak gezinin.',
          'Açmak istediğiniz modülün simgesine dokunun.',
          'Tüm modülleri görmek için şeridin sonundaki Tümünü Gör bağlantısına dokunun.',
        ],
        sonuc: 'İlgili modül ekranı açılır; Tümünü Gör ise Modüller sekmesine götürür.',
        notlar: ['Şeritte yalnız yetkili olduğunuz modüller görünür; hiç yetkiniz yoksa Kısayollar bölümü hiç çizilmez.'],
      },
      {
        baslik: 'İzin ve doküman sayaçlarından ilgili sayfaya gitme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Onaylanan İzinler, Bekleyen İzinler, Onaylanan Dokümanlar ve Bekleyen Dokümanlar kutuları taleplerinizin sayısını gösterir.',
        adimlar: [
          'Sayaç kutularından birine dokunun.',
        ],
        sonuc: 'İzin sayaçları İzinlerim ekranını, doküman sayaçları Dokümanlarım ekranını açar.',
      },
      {
        baslik: 'İzin durumunu görme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'İzin Durumu kartında izin türü bazında bakiyenizi ve son izin taleplerinizi görürsünüz.',
        adimlar: [
          'Ana Sayfa\'da İzin Durumu kartına kadar kaydırın.',
          '"İzin Bakiyesi" bölümünde her izin türü için Toplam, Kullanılan ve Kalan günlerinizi okuyun.',
          '"Son İzin Talepleri" bölümünde son taleplerinizin tarihlerine ve durumlarına bakın.',
        ],
        sonuc: 'Bakiyeniz ve son talepleriniz özet olarak görünür.',
        notlar: ['Ayrıntı, yeni talep ve iptal işlemleri için İzinlerim ekranını kullanın.'],
      },
      {
        baslik: 'Vardiyamı görme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Bugünkü vardiyanızı, giriş-çıkış saatlerinizi ve sıradaki vardiyanızı gösterir.',
        adimlar: [
          'Vardiyam kartına bakın.',
          'Vardiyanız yoksa "Bugün vardiyanız yok." yazar; altında sıradaki vardiya bilgisi bulunur.',
          'Kart yüklenemezse Tekrar dene butonuna dokunun.',
        ],
        sonuc: 'Bugünkü vardiya adı, saat aralığı ve (varsa) Giriş / Çıkış saatleriniz görünür.',
      },
      {
        baslik: 'Talep Merkezi\'nde taleplerimi süzme ve inceleme',
        kim: 'Çalışan',
        sekme: 'Talep Merkezi · Taleplerim',
        aciklama: 'İzin, doküman ve masraf taleplerinizi tek yerden izlersiniz.',
        adimlar: [
          'Beklemede, Onaylandı veya Toplam kutusuna dokunarak duruma göre süzün.',
          'İzin, Doküman veya Masraf düğmeleriyle talep türüne göre daraltın.',
          'Bir talebe dokunarak ilgili modülde ayrıntısını açın.',
        ],
        sonuc: 'Liste seçtiğiniz süzgeçlere göre değişir. Talebiniz yoksa "Henüz talebiniz yok." yazar.',
      },
      {
        baslik: 'Duyuruları okuma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Size gönderilen son duyuruları görürsünüz; okunmamış duyuru sayısı kartın üstünde yazar.',
        adimlar: [
          'Duyurular kartında bir duyuruya dokunun.',
          'Tüm duyurular için kartın Tümünü Gör bağlantısına dokunun.',
        ],
        sonuc: 'Duyuru ayrıntısı açılır. "Önemli duyuru" ve "Okuma onayı" etiketleri ilgili duyuruların üzerinde görünür.',
      },
      {
        baslik: 'Günlük ruh halini paylaşma',
        kim: 'Çalışan',
        sekme: 'Bugün nasıl hissediyorsun?',
        aciklama: 'Her gün bir emoji seçerek ruh halinizi paylaşırsınız; yanıt isteğe bağlıdır.',
        adimlar: [
          '"Bugün nasıl hissediyorsun?" kartında beş emojiden (Çok kötü, Kötü, Normal, İyi, Harika) birine dokunun.',
          'Aynı gün fikrinizi değiştirirseniz başka bir emojiye dokunmanız yeterlidir.',
          'Geçmişe bakmak için Geçmiş yanıtlarım bağlantısına dokunun; Son 7 gün, Son 30 gün veya Özel aralık seçin.',
        ],
        alanlar: [
          { ad: 'Özel aralık', aciklama: 'Başlangıç tarihi ve Bitiş tarihi seçilir; aralık sınırlıdır ve aşılırsa uyarı görünür.', zorunlu: false },
        ],
        sonuc: 'Yanıtınız kaydedilir, kartta "Bugün: ..." görünür ve art arda yanıt verdiğiniz günler seri olarak sayılır. Geçmişte Dönem ortalaması, Yanıt verilen gün, Kişisel trend ve Emoji dağılımı görünür.',
        notlar: [
          'Yanıtlarınız yalnız size görünür.',
          'Bu kart yalnız kurumunuzda özellik açıksa görünür.',
        ],
      },
      {
        baslik: 'İzindeki ekip arkadaşlarını görme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: '"Şu Anda İzinde Olan Ekip Arkadaşlarım" kartı bugün izinde olan veya yakında izne çıkacak arkadaşlarınızı listeler.',
        adimlar: [
          'Karttaki bir kişiye dokunun.',
          'Açılan pencerede izin tarih aralığını ve "İşe dönüş" tarihini okuyun.',
        ],
        sonuc: 'Bugün izinde olanlar "İzinde", yakında başlayacaklar "Yarın başlıyor" veya "N gün sonra" etiketiyle görünür.',
        notlar: ['Bu kart yalnız kurumunuzda özellik açıksa görünür. İzinde kimse yoksa "Bu dönemde izinde olan ekip arkadaşın yok." yazar.'],
      },
      {
        baslik: 'Yaklaşan doğum günlerine bakma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Yaklaşan Doğum Günleri kartı iş arkadaşlarınızın doğum günlerini gösterir.',
        adimlar: [
          'Kartta kişinin adına ve tarihine bakın; bugün doğum günü olanlar "Bugün doğum günü!" ile belirtilir.',
          'Çalışan bilgilerini açmak için satıra dokunun.',
        ],
        sonuc: 'Kişinin bilgi ekranı açılır.',
        notlar: ['Satıra dokunma yalnız çalışan temel bilgilerini görme yetkisi olanlarda çalışır. Yaklaşan doğum günü yoksa "Yaklaşan doğum günü yok" yazar.'],
      },
      {
        baslik: 'Pozisyon şemasını inceleme',
        kim: 'Çalışan',
        sekme: 'Pozisyon Şeması',
        aciklama: 'Departmanınızdaki çalışanları organizasyon şeması olarak görürsünüz.',
        adimlar: [
          'Pozisyon Şeması kartında gerekirse "Departman seçiniz" alanından departman seçin.',
          'Şemayı Yakınlaştır ve Uzaklaştır düğmeleriyle büyütüp küçültün; sürükleyerek gezin.',
          'Kendi konumunuza dönmek için Beni ortala düğmesine dokunun.',
          'Bir çalışanın kutusuna dokunarak bilgilerini açın.',
        ],
        sonuc: 'Şema seçtiğiniz departmana göre çizilir. Gösterilecek çalışan yoksa uyarı yazar.',
        notlar: [
          'Çalışan bilgilerini açma yalnız çalışan temel bilgilerini görme yetkisi olanlarda çalışır.',
          'Şema Sorunları ve Bağlantısız Çalışanlar bölümleri yalnız ayar yetkisi olan kullanıcılarda görünür.',
        ],
      },
      {
        baslik: 'Yönetim ve Kişisel panelleri arasında geçiş',
        kim: 'Yönetici',
        sekme: 'Yönetim',
        aciklama: 'Yönetici yetkisi olan kullanıcılar aynı ekranda iki panel arasında geçiş yapar.',
        adimlar: [
          'Ana Sayfa\'nın üstündeki Yönetim veya Kişisel sekmesine dokunun ya da ekranı yana kaydırın.',
        ],
        sonuc: 'Seçilen panel açılır.',
        notlar: ['Bu işlem yalnız her iki panele yetkisi olan kullanıcılarda görünür. Yönetim paneli Yönetim sayfalarında anlatılır.'],
      },
    ],

    sss: [
      {
        soru: 'Ana Sayfa\'da bazı kartları göremiyorum.',
        cevap: 'Kartlar yetkinize ve kurumunuzun açtığı özelliklere göre listelenir. Örneğin izin kartı için İzinlerim yetkisi gerekir. Eksik bir kart varsa İK birimine başvurun.',
      },
      {
        soru: 'Kartların sırasını telefondan değiştirebilir miyim?',
        cevap: 'Hayır. Kart düzeni mobilde değiştirilemez; telefon, web\'de belirlenmiş düzeni gösterir.',
      },
      {
        soru: 'Bilgiler güncel görünmüyor.',
        cevap: 'Ekranın en üstündeyken parmağınızı aşağı çekerek sayfayı yenileyin.',
      },
      {
        soru: 'Ruh hali kartı ne işe yarar?',
        cevap: 'Her gün isteğe bağlı olarak ruh halinizi paylaşırsınız. Yanıtlarınız yalnız size görünür; geçmişinizi ve kişisel trendinizi karttan izleyebilirsiniz.',
      },
    ],

    ipuclari: [
      'Aynı kartların web karşılığı Kişisel › Kontrol Panelim sayfasındadır.',
      'Sık kullandığınız bir modüle Kısayollar şeridinden tek dokunuşla ulaşın.',
      'Günlük işlerinize başlamadan önce Talep Merkezi\'ndeki Beklemede kutusuna göz atın.',
      'Alt çubuktaki + düğmesiyle yeni talep açma ve QR okutma gibi işlemleri Ana Sayfa\'dan ayrılmadan başlatabilirsiniz.',
    ],
  },

  // ───────────────────────────── PROFİLİM ─────────────────────────────
  {
    id: 'mobil-profilim',
    grup: 'mobil-kisisel',
    sira: 20,
    platform: 'mobil',
    rota: '/profile',
    href: null,
    kim: 'ali',
    baslik: 'Profilim',
    menu: 'Mobil › Profil',
    ozet:
      'Profil sekmesi hesabınızın kontrol merkezidir: fotoğrafınızı değiştirir, şifrenizi ve iki adımlı doğrulamanızı yönetir, dil, tema ve bildirim tercihlerinizi ayarlar, oturumu kapatırsınız. Buradan Bilgilerim (kişisel ve kariyer bilgileriniz, kayıtlarınız) ve işe giriş / çıkış sürecinizi izlediğiniz Sürecim ekranları da açılır.',

    ekranlar: [
      { sekme: null, aciklama: 'Üstte fotoğrafınız, adınız ve pozisyon bilgisi; altında Hesap ve Güvenlik, Tercihler, Bildirimler, Yasal ve Destek, Hakkında bölümleri ve Çıkış Yap satırı yer alır.' },
      { sekme: 'Bilgilerim > Kişisel Bilgiler', aciklama: 'Temel Bilgiler (ad soyad, personel numarası, durum, cinsiyet, doğum tarihi, şirkette başlama tarihi, iş ve şahsi e-posta, telefon) ve İletişim Bilgileri ile kurumun tanımladığı ek bilgi alanları.' },
      { sekme: 'Bilgilerim > Kariyer', aciklama: 'Departman, pozisyon, rol ve pozisyona başlama tarihi; altında Sözleşmeler ve Pozisyon Geçmişi satırları.' },
      { sekme: 'Bilgilerim > İzin Talepleri', aciklama: 'İzin taleplerinizin ve izin bakiyenizin özeti (Toplam Hak Edilen, Kullanılan, Süresi Dolan, Kullanılabilir Bakiye).' },
      { sekme: 'Bilgilerim > Ek Mesai Talepleri', aciklama: 'Ek mesai kayıtlarınız; Ay ve Yıl seçimiyle dönem özeti (Toplam Ek Mesai, Onaylandı, Onay Beklemede).' },
      { sekme: 'Bilgilerim > Zimmetler', aciklama: 'Üzerinize kayıtlı zimmetler.' },
      { sekme: 'Bilgilerim > Seyahatler', aciklama: 'Seyahat talepleriniz.' },
      { sekme: 'Bilgilerim > Masraflar', aciklama: 'Masraf talepleriniz; Tümü, Beklemede, Onaylandı, Reddedildi süzgeçleri.' },
      { sekme: 'Bilgilerim > Eğitimler', aciklama: 'Eğitim ve sertifika kayıtlarınız.' },
      { sekme: 'Bilgilerim > Görevler', aciklama: 'Görevleriniz; Dönem seçimiyle ay ay listelenir.' },
      { sekme: 'Bilgilerim > Puantaj', aciklama: 'Tarih, Giriş, Çıkış ve Çalışma Süresi bilgileri.' },
      { sekme: 'Bilgilerim > Doküman Talepleri', aciklama: 'Dokümanlarla ilgili talepleriniz ve durumları.' },
      { sekme: 'Bilgilerim > Dokümanlar', aciklama: 'Size ait dokümanlar.' },
      { sekme: 'Bilgilerim > Çalışan Uyarıları', aciklama: 'Hakkınızda düzenlenmiş uyarı kayıtları; satıra dokununca Uyarı Detayları açılır.' },
      { sekme: 'Sürecim > Sürecim', aciklama: 'Devam eden işe giriş / çıkış sürecinizin özeti, Form Maddelerim, zimmetler ve anketler.' },
      { sekme: 'Sürecim > Geçmiş', aciklama: 'Tamamlanan işe giriş / çıkış süreçleriniz.' },
    ],

    bolumler: [
      {
        baslik: 'Profil sekmesindeki bölümler',
        metin: 'Profil ekranı beş bölümden oluşur:',
        maddeler: [
          'Hesap ve Güvenlik: Bilgilerim, Şifre Değiştir ve İki Adımlı Doğrulama satırları. Bilgilerim yetkisi olmayan kullanıcılarda bu bölüm görünmez.',
          'Tercihler: Dil ve Tema.',
          'Bildirimler: Bildirim Ayarları ve Takvim Entegrasyonu.',
          'Yasal ve Destek: Gizlilik Politikası ve Kullanım Koşulları (kurum bağlantı verdiyse) ile Sistem Geri Bildirimi.',
          'Hakkında: DHR Nedir? bilgisi ve Sürüm satırı; ardından Çıkış Yap.',
        ],
      },
      {
        baslik: 'Şifre gereksinimleri',
        metin: 'Yeni şifreniz şu kurallara uymalıdır:',
        maddeler: [
          'En az 8 karakter uzunluğunda olmalıdır.',
          'En az bir büyük harf (A-Z) içermelidir.',
          'En az bir küçük harf (a-z) içermelidir.',
          'En az bir rakam ve bir özel karakter (@$!%*?&) içermelidir.',
          'Yeni şifre mevcut şifrenizle aynı olamaz.',
        ],
      },
      {
        baslik: 'Sürecim ekranındaki madde durumları',
        metin: 'İşe giriş / çıkış sürecinizdeki her madde şu durumlardan birinde görünür:',
        maddeler: [
          'Bekliyor: Sizden bir işlem bekleniyor.',
          'İncelemede: Gönderdiğiniz madde İK incelemesinde.',
          'Düzeltme istendi: İK maddeyi düzeltmeniz için geri gönderdi; "İK\'nın notu" bölümünü okuyun.',
          'Tamamlandı: Madde kabul edildi.',
          'Uygulanmaz: Madde sizin için geçerli değil.',
          'Zorunlu etiketi, o maddenin tamamlanmadan süreci bitirmeyeceğini gösterir; Bilgilendirme maddeleri yalnızca okunur.',
        ],
      },
      {
        baslik: 'Yetkiye bağlı sekmeler',
        metin: 'Bilgilerim ekranındaki sekmeler yetkinize göre listelenir.',
        maddeler: [
          'Kişisel Bilgiler ve Kariyer: Bilgilerim yetkisi olan herkeste görünür.',
          'İzin Talepleri, Ek Mesai Talepleri, Zimmetler, Seyahatler, Masraflar, Eğitimler, Görevler, Puantaj, Doküman Talepleri ve Dokümanlar: İlgili modülü görme yetkiniz varsa görünür.',
          'Performans sekmesi yalnız kurumunuzda ilgili entegrasyon açıksa görünür.',
          'Çalışan Uyarıları: Sekme adının yanında kayıt sayısı rozet olarak gösterilir.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Profil fotoğrafını değiştirme veya kaldırma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Profil fotoğrafınız uygulamada ve giriş ekranında görünür.',
        adimlar: [
          'Profil sekmesinde fotoğrafınıza (veya "Fotoğrafı değiştir" bağlantısına) dokunun.',
          'Açılan listeden Galeriden seç\'e dokunun ve telefonunuzdan bir görsel seçin.',
          'Fotoğrafı silmek için Fotoğrafı Kaldır\'a dokunun.',
        ],
        sonuc: 'Fotoğraf güncellenir ("Güncelleniyor…" göstergesi görünür) ve her yerde yeni hâliyle gösterilir.',
        notlar: [
          'Yalnız JPEG, PNG veya WebP görseller kullanılabilir; boyut sınırı aşılırsa "Görsel en fazla … MB olabilir." uyarısı görünür.',
          'Galeriye erişim izni verilmemişse "Fotoğraf kitaplığı izni gerekli." uyarısı görünür.',
          'Fotoğraf yüklüyse profil sayfasındaki önizleme seçeneğiyle Profil Resmi Önizlemesi açılabilir.',
          'Bu işlem Bilgilerim yetkisi olan kullanıcılarda kullanılabilir.',
        ],
      },
      {
        baslik: 'Şifre değiştirme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Hesap şifrenizi yenilersiniz.',
        adimlar: [
          'Profil sekmesinde Hesap ve Güvenlik bölümünden Şifre Değiştir satırına dokunun.',
          'Mevcut Şifre alanına şu anki şifrenizi yazın.',
          'Yeni Şifre alanına yeni şifrenizi yazın; Şifre Gereksinimleri listesine göre kontrol edin.',
          'Yeni şifre (tekrar) alanına yeni şifrenizi yeniden yazın.',
          'Şifreyi değiştir butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Mevcut Şifre', aciklama: 'Şu anki şifreniz.', zorunlu: true },
          { ad: 'Yeni Şifre', aciklama: 'En az 8 karakter; büyük harf, küçük harf, rakam ve özel karakter içermeli.', zorunlu: true },
          { ad: 'Yeni şifre (tekrar)', aciklama: 'Yeni şifrenin aynısı.', zorunlu: true },
        ],
        sonuc: '"Şifreniz değiştirildi" mesajı görünür. Güvenliğiniz için tüm cihazlardaki oturumlarınız kapatılır; yeni şifrenizle tekrar giriş yapmanız gerekir.',
        notlar: [
          'Şifreler eşleşmezse "Şifreler eşleşmiyor", yeni şifre mevcut şifreyle aynıysa "Yeni şifre mevcut şifre ile aynı olamaz." uyarısı görünür.',
        ],
      },
      {
        baslik: 'İki adımlı doğrulama ayarlarını açma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Hesabınızın iki adımlı doğrulama durumunu görür ve yönetirsiniz.',
        adimlar: [
          'Hesap ve Güvenlik bölümünden İki Adımlı Doğrulama satırına dokunun.',
        ],
        sonuc: 'Durum (Etkin / Devre Dışı) ve Authenticator Uygulaması ile E-posta ile Kod seçenekleri görünür.',
        notlar: ['Etkinleştirme, kapatma ve kurtarma kodları adım adım Kurulum ve Giriş sayfasında anlatılmıştır.'],
      },
      {
        baslik: 'Dil, tema, bildirim ve takvim ayarlarına gitme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Tercihlerinizi Profil sekmesindeki satırlardan yönetirsiniz.',
        adimlar: [
          'Tercihler bölümünden Dil veya Tema satırına dokunup seçiminizi yapın.',
          'Bildirimler bölümünden Bildirim Ayarları veya Takvim Entegrasyonu satırına dokunun.',
        ],
        sonuc: 'İlgili seçim penceresi veya ayar ekranı açılır. Bildirimler satırının sağında bildirim durumu (Açık, Kapalı, İzin Verilmedi) görünür.',
        notlar: ['Bu ayarların ayrıntıları Genel Arayüz ve Gezinme sayfasında anlatılmıştır.'],
      },
      {
        baslik: 'Gizlilik Politikası, Kullanım Koşulları ve sistem geri bildirimi',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Yasal metinlere ulaşır veya sistem hakkında geri bildirim gönderirsiniz.',
        adimlar: [
          'Yasal ve Destek bölümünden Gizlilik Politikası veya Kullanım Koşulları satırına dokunun.',
          'Geri bildirim için Sistem Geri Bildirimi satırına dokunun.',
        ],
        sonuc: 'Yasal metinler tarayıcıda açılır; geri bildirim formu uygulama içinde açılır.',
        notlar: [
          'Gizlilik Politikası ve Kullanım Koşulları satırları yalnız kurumunuz bağlantı tanımladıysa görünür; açılamazsa "Bağlantı açılamadı." uyarısı çıkar.',
        ],
      },
      {
        baslik: 'Uygulama sürümünü kopyalama ve DHR hakkında bilgi alma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Destek ekibine bildirmeniz gerektiğinde sürüm bilgisini kopyalarsınız.',
        adimlar: [
          'Hakkında bölümünde Sürüm satırına dokunun.',
          'DHR Nedir? satırına dokunarak kısa tanıtımı okuyun.',
        ],
        sonuc: 'Sürüm bilgisi panoya kopyalanır ve satırda kısa süre "Kopyalandı" yazar.',
      },
      {
        baslik: 'Oturumu kapatma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Hesabınızdan çıkış yaparsınız.',
        adimlar: [
          'Hakkında bölümünün altındaki Çıkış Yap satırına dokunun.',
          'Onay penceresinde "Oturumu kapatmak istediğinize emin misiniz?" sorusuna Çıkış Yap butonuyla yanıt verin.',
        ],
        sonuc: 'Oturum kapanır ve giriş ekranı açılır.',
      },
      {
        baslik: 'Kişisel bilgilerimi görüntüleme',
        kim: 'Çalışan',
        sekme: 'Bilgilerim > Kişisel Bilgiler',
        aciklama: 'Şirket kayıtlarındaki kişisel, iletişim ve kariyer bilgilerinizi görürsünüz.',
        adimlar: [
          'Profil sekmesinde Hesap ve Güvenlik bölümünden Bilgilerim satırına dokunun (Modüller ekranında Kişisel bölümündeki Bilgilerim kartı ve Ana Sayfa\'daki kişisel bilgi kartı da aynı ekranı açar).',
          'Kişisel Bilgiler sekmesinde Temel Bilgiler, İletişim Bilgileri ve ek bilgi alanlarını inceleyin.',
          'Kariyer sekmesinde departman, pozisyon ve rolünüzü görün.',
          'Sözleşmeler veya Pozisyon Geçmişi satırına dokunarak kayıtları alt pencerede açın.',
        ],
        sonuc: 'Bilgileriniz salt okunur olarak görüntülenir.',
        notlar: [
          'Sözleşme yoksa "Aktif sözleşme yok", pozisyon atanmadıysa "Atanmış pozisyon yok" yazar.',
          'Sayfayı yenilemek için ekranı aşağı çekin.',
        ],
      },
      {
        baslik: 'Bilgilerimi düzenleme',
        kim: 'Çalışan',
        sekme: 'Bilgilerim > Kişisel Bilgiler',
        aciklama: 'İzin verilen kişisel bilgi alanlarınızı ve belgelerinizi güncellersiniz.',
        adimlar: [
          'Bilgilerim ekranında Bilgilerimi Düzenle butonuna dokunun.',
          'Düzenlemek istediğiniz alanları değiştirin; dosya gereken alanlarda Dosya Yükle ile belge ekleyin.',
          'Birden fazla satırlı alanlarda Yeni Satır Ekle ile satır ekleyin, gereksiz satırı Kaldır ile silin.',
          'Kaydet butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Kurumun tanımladığı alanlar', aciklama: 'Hangi alanların düzenlenebileceği kurumunuzun ayarına ve yetkinize bağlıdır; zorunlu alanlar boş bırakılamaz.', zorunlu: false },
          { ad: 'Dosya Yükle', aciklama: 'Belge isteyen alanlarda dosya sayısı, türü ve boyutu kurallara uymalıdır.', zorunlu: false },
        ],
        sonuc: '"Bilgiler kaydedildi." uyarısı görünür; belge yükleyen alanlar onay sürecine gönderilir ("Dosyalar onaya gönderildi.").',
        notlar: [
          'Temel ve organizasyon bilgileri salt okunurdur; değişiklik için İK ile iletişime geçin.',
          'Bir alan için açık doküman talebi varsa yeni dosya yükleyemezsiniz; Talebi Görüntüle ile talebe gidin.',
          'Vazgeçerseniz İptal\'e dokunun; kaydedilmemiş değişiklikler için onay sorulur.',
          'Ayrıca bu düğme yalnız çalışma durumunuz uygunsa ve düzenleme yetkiniz varsa görünür.',
        ],
      },
      {
        baslik: 'Kayıtlarımı sekmelerden inceleme',
        kim: 'Çalışan',
        sekme: 'Bilgilerim > İzin Talepleri',
        aciklama: 'İzin, ek mesai, zimmet, seyahat, masraf, eğitim, görev, puantaj ve doküman kayıtlarınızı tek profilden izlersiniz.',
        adimlar: [
          'Bilgilerim ekranının üstündeki sekme şeridini kaydırarak ilgili sekmeyi seçin.',
          'İzin, ek mesai ve masraf sekmelerinde durum süzgecini kullanın.',
          'Ek Mesai Talepleri sekmesinde Ay ve Yıl seçimiyle dönemi değiştirin.',
          'Görevler sekmesinde Dönem alanıyla ayı seçin.',
          'Bir kayda dokunarak ayrıntısını açın.',
        ],
        sonuc: 'Seçtiğiniz sekmede kayıtlar listelenir; kayıt yoksa "Görüntülenecek kayıt bulunmuyor." yazar.',
        notlar: [
          'Doküman Talepleri sekmesinde Dışa Aktar ile talepleri dosya olarak alabilirsiniz.',
          'Dokümanlar sekmesinde yetkiniz varsa çalışma belgenizi (PDF) İndir ile alabilirsiniz.',
          'Bazı sekmelerde yeni kayıt açma düğmeleri (ör. Yeni Talep, masraf ekleme) bulunur; bunlar ilgili modülün formunu açar.',
        ],
      },
      {
        baslik: 'Çalışan uyarısı ayrıntısını görme',
        kim: 'Çalışan',
        sekme: 'Bilgilerim > Çalışan Uyarıları',
        aciklama: 'Hakkınızda düzenlenmiş uyarıları ve resmi belgelerini görürsünüz.',
        adimlar: [
          'Çalışan Uyarıları sekmesini açın.',
          'Bir uyarı satırına dokunun.',
          'Uyarı Detayları penceresinde Kod, Ceza Türü, Ceza Detayları, Uyarı Tarihi, Bitiş Tarihi ve Resmi Belgeler bilgilerini okuyun.',
        ],
        sonuc: 'Uyarı bilgileri salt okunur görüntülenir. Kayıt yoksa "Henüz uyarı kaydı bulunmuyor" yazar.',
      },
      {
        baslik: 'İşe giriş / çıkış sürecimi izleme',
        kim: 'Çalışan',
        sekme: 'Sürecim > Sürecim',
        aciklama: 'İşe giriş veya işten çıkış sürecinizdeki durumunuzu, sizden beklenen maddeleri, zimmetleri ve anketleri görürsünüz.',
        adimlar: [
          'Süreciniz varsa Ana Sayfa\'daki süreç kartına dokunun.',
          'Süreç özetinde İlerleme, Son tarih ve Sıradaki madde bilgilerine bakın.',
          'Form Maddelerim bölümünde maddelerinizin durumunu görün.',
          'Teslim Alınacak Zimmetler veya İade Edilecek Zimmetler bölümünden zimmetlerinizi kontrol edin; Zimmetlerime Git ile zimmet ekranına geçin.',
          'Anketler bölümündeki Anketlerime Git ile anketlerinize ulaşın.',
        ],
        sonuc: 'Sürecinizin ilerlemesi ve sizden beklenenler görünür.',
        notlar: [
          'Devam eden bir süreciniz yoksa "Devam eden bir işe giriş / çıkış süreciniz bulunmuyor." yazar.',
          'Bu ekran yalnız ilgili yetkisi olan çalışanlarda görünür.',
        ],
      },
      {
        baslik: 'Süreç maddesini doldurma ve gönderme',
        kim: 'Çalışan',
        sekme: 'Sürecim > Sürecim',
        aciklama: 'Sizden istenen bilgileri yazar, belge yükler veya bilgilendirme maddelerini okundu olarak işaretlersiniz.',
        adimlar: [
          'Form Maddelerim bölümünde bir maddeyi açın (düzeltme istenen madde en üstte görünür).',
          'Bilgiyi yazın, Evet / Hayır seçin veya tarih / sayı girin.',
          'Belge isteniyorsa Belge Yükle (daha önce yüklediyseniz Belgeyi Değiştir) ile dosya ekleyin.',
          'Bilgilendirme ve kontrol maddelerinde Okudum veya Tamamladım butonuna dokunun.',
          'Gönder · N madde butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Madde değeri', aciklama: 'Maddenin türüne göre metin, Evet / Hayır, tarih, sayı veya e-posta. Zorunlu maddelerde değer girilmelidir.', zorunlu: true },
          { ad: 'Belge', aciklama: 'Belge isteyen maddelerde PDF, JPG, PNG, HEIC, Word veya Excel dosyası; en fazla 50 MB.', zorunlu: false },
        ],
        sonuc: '"Gönderildi. İK incelemesi bekleniyor." uyarısı görünür ve madde İncelemede durumuna geçer. İK düzeltme isterse madde Düzeltme istendi olarak geri gelir.',
        notlar: [
          'Başka bir maddeye bağlı madde, önce o madde doldurulmadan açılmaz ("Önce … doldurulmalı.").',
          'Değer doğruysa ve yalnız yeniden göndermek istiyorsanız "Değer doğru, aynen yeniden gönder" seçeneğini kullanın.',
          'Süreç kapandıysa gönderim yapılamaz.',
        ],
      },
      {
        baslik: 'Geçmiş süreçlerimi görme',
        kim: 'Çalışan',
        sekme: 'Sürecim > Geçmiş',
        aciklama: 'Tamamlanan işe giriş / çıkış süreçlerinizi ve sonradan gelen anketlerinizi listeler.',
        adimlar: [
          'Sürecim ekranında Geçmiş sekmesine dokunun.',
          'Ayrıntı için listeden bir sürece dokunun.',
        ],
        sonuc: 'Seçilen sürecin ayrıntısı açılır. Süreç yoksa "Henüz bir işe giriş / çıkış süreciniz yok." yazar.',
      },
    ],

    sss: [
      {
        soru: 'Profil sekmesinde Hesap ve Güvenlik bölümü neden yok?',
        cevap: 'Bu bölüm Bilgilerim yetkisine bağlıdır. Yetkiniz yoksa Bilgilerim, Şifre Değiştir ve İki Adımlı Doğrulama satırları görünmez; İK birimine başvurun.',
      },
      {
        soru: 'Şifremi değiştirince neden oturumum kapandı?',
        cevap: 'Güvenliğiniz için şifre değişince tüm cihazlardaki oturumlar kapatılır. Yeni şifrenizle yeniden giriş yapmanız yeterlidir.',
      },
      {
        soru: 'Ad, departman gibi bilgilerimi düzenleyemiyorum.',
        cevap: 'Temel ve organizasyon bilgileri salt okunurdur. Değişiklik için İK ile iletişime geçin.',
      },
      {
        soru: 'Bilgilerim\'de bazı sekmeler eksik.',
        cevap: 'Sekmeler yetkinize göre listelenir. İzin, masraf, zimmet gibi sekmeler ilgili modülü görme yetkiniz varsa görünür.',
      },
    ],

    ipuclari: [
      'Aynı bilgiler web\'de Kişisel › Bilgilerim sayfasında da görünür.',
      'Güvenliğiniz için iki adımlı doğrulamayı açın ve kurtarma kodlarınızı güvenli yerde saklayın.',
      'Bilgilerim ekranında sekme şeridini sağa-sola kaydırarak tüm sekmelere ulaşın; ekranı aşağı çekerek açık sekmeyi yenileyin.',
      'Sürecim ekranında düzeltme istenen maddeler en üstte görünür; önce onları tamamlayın.',
    ],
  },

  // ───────────────────────────── İZİNLERİM ─────────────────────────────
  {
    id: 'mobil-izinlerim',
    grup: 'mobil-kisisel',
    sira: 30,
    platform: 'mobil',
    rota: '/leave',
    href: null,
    kim: 'ali',
    baslik: 'İzinlerim',
    menu: 'Mobil › Modüller › Kişisel › İzinlerim',
    ozet:
      'İzin bakiyenizi görür, yeni izin talebi oluşturur, taleplerinizin onay durumunu izler ve bekleyen talebinizi iptal edersiniz. İzin takvimi, resmi tatiller, tahmini bakiye ve izin talepleriniz için dışa aktarma da bu ekrandadır. Yöneticinizin veya İK\'nın bakiyenizde yaptığı değişiklikleri de buradan onaylarsınız.',

    ekranlar: [
      { sekme: null, aciklama: 'Üstte İzin Bakiyesi (izin türü bazında Toplam, Kullanılan, Kalan) ve Tahmini Bakiye, Takvim, Tatiller düğmeleri; altında Talepler başlığı, Dışa Aktar düğmesi ve durum sekmeleri bulunur. Sekme şeridinin Tüm İzin Talepleri sekmesi açılır.' },
      { sekme: 'Tüm İzin Talepleri', aciklama: 'Tüm izin talepleriniz kart olarak listelenir; sekme üzerinde talep sayısı gösterilir.' },
      { sekme: 'Bekleyen Talepler', aciklama: 'Henüz onay sürecinde olan talepleriniz.' },
      { sekme: 'Onaylanan Talepler', aciklama: 'Onaylanmış izinleriniz.' },
      { sekme: 'Reddedilen Talepler', aciklama: 'Reddedilen taleplerinizin listesi.' },
      { sekme: 'Değişiklik Onayları', aciklama: 'İzin bakiyenizde yapılan ve onayınızı bekleyen değişiklikler; Bekleyen ve Tümü süzgeçleri vardır. Sekme üzerinde bekleyen değişiklik sayısı görünür.' },
      { sekme: 'Takvim', aciklama: 'Aylık izin takvimi; izin ve resmî tatil günleri işaretlidir, bir güne dokununca o günün kayıtları listelenir.' },
      { sekme: 'Tatiller', aciklama: 'Tatiller ve Önemli Günler listesi.' },
      { sekme: 'Tahmini Bakiye', aciklama: 'İleri Tarihli İzin Bakiyesi penceresi: Hedef Tarih, İzin Türleri ve Hesapla.' },
      { sekme: 'İzin Detayları', aciklama: 'Bir talebe dokununca açılan pencere: izin türü, durum, tarih aralığı, süre, açıklama, ekler, Onay Akışı ve günlük ayrıntı.' },
    ],

    bolumler: [
      {
        baslik: 'Talep durumları',
        metin: 'Taleplerinizin durumu rozetle gösterilir:',
        maddeler: [
          'Beklemede: Talep onaylayıcıda. Ayrıntı penceresindeki Onay Akışı kimin onayında olduğunu gösterir.',
          'Onaylandı: Tüm onaylar tamamlandı; izin günleri bakiyenizden düşülür.',
          'Reddedildi: Onaylayan talebi reddetti.',
          'İptal Edildi: Talep geri çekildi (iptal edilen talepler yalnız Tüm İzin Talepleri sekmesinde görünür).',
        ],
      },
      {
        baslik: 'Bakiye bilgisi',
        metin: 'İzin Bakiyesi bölümünde her izin türü için üç değer yer alır:',
        maddeler: [
          'Toplam: O türde tanımlı toplam hakkınız.',
          'Kullanılan: Onaylanmış izinlerle kullandığınız gün.',
          'Kalan: Kullanabileceğiniz gün sayısı.',
        ],
      },
      {
        baslik: 'Değişiklik onayları',
        metin: 'Yönetici veya İK, bakiyenizde elle değişiklik yaptığında (örneğin izin günü ekleme, kullanılan izin düzenleme) birim ayarı gerektiriyorsa değişiklik önce sizin onayınıza düşer.',
        maddeler: [
          'Değişiklik türleri arasında kullanılan izin ekleme / düzenleme / silme, hakediş ekleme / düzenleme / silme ve izin talebi düzenleme / silme bulunur.',
          'Durumlar: İşlendi, Onay bekliyor, Onaylandı, Zorunlu onaylandı, Zorunlu reddedildi, Reddedildi, Geri çekildi, Uygulanamadı.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'İzin bakiyesini görüntüleme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'İzin türü bazında toplam, kullanılan ve kalan günlerinizi görürsünüz.',
        adimlar: [
          'Alt çubuktaki Modüller sekmesinden Kişisel bölümündeki İzinlerim kartına dokunun.',
          'İzin Bakiyesi bölümünde her izin türünün Toplam, Kullanılan ve Kalan değerlerine bakın.',
        ],
        sonuc: 'Güncel bakiyeniz görünür.',
        notlar: ['Alt çubuktaki + düğmesinden Yeni İzin Talebi ve (onay yetkiniz yoksa) çubuktaki İzinlerim kısayolu da bu ekrana götürür.'],
      },
      {
        baslik: 'Talepleri durumuna göre listeleme',
        kim: 'Çalışan',
        sekme: 'Tüm İzin Talepleri',
        aciklama: 'Taleplerinizi duruma göre süzersiniz.',
        adimlar: [
          'Talepler başlığının altındaki sekme şeridinden Tüm İzin Talepleri, Bekleyen Talepler, Onaylanan Talepler veya Reddedilen Talepler\'e dokunun (ya da ekranı yana kaydırın).',
          'Listeyi yenilemek için ekranı aşağı çekin.',
        ],
        sonuc: 'Seçtiğiniz duruma ait talepler listelenir. Talep yoksa "Henüz izin talebiniz yok" veya "Bu durumda izin talebi yok" yazar.',
      },
      {
        baslik: 'Yeni izin talebi oluşturma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'İzin talebinizi oluşturup onaya gönderirsiniz.',
        adimlar: [
          'İzinlerim ekranında (veya alt çubuktaki + düğmesinden) Yeni Talep\'e dokunun; Yeni İzin Talebi formu açılır.',
          'İzin Türü alanına dokunup listeden türü seçin; seçtikten sonra formun geri kalanı görünür.',
          'Gerekirse Vekil Çalışan (İsteğe Bağlı) alanından vekilinizi seçin.',
          'Tarih Aralığı için Başlangıç Tarihi ve Bitiş Tarihi\'ni seçin.',
          'Saatli izin türlerinde Başlangıç Saati ve Bitiş Saati\'ni seçin.',
          'Çalışma Saati Türü alanından çalışma saati türünü seçin.',
          'İzin türü belge kabul ediyorsa Ekler alanında Dosya Yükle ile belge ekleyin.',
          'Açıklama alanına izin gerekçenizi yazın.',
          'Gönder butonuna dokunun.',
          'Açılan İzin Hesaplama Önizlemesi\'nde süreyi ve bakiyenizi kontrol edip Onayla\'ya dokunun; değiştirmek için Düzenle\'ye dokunun.',
        ],
        alanlar: [
          { ad: 'İzin Türü', aciklama: 'Talep edilecek izin türü; her tür için Ücretli İzin veya Ücretsiz İzin bilgisi listede görünür.', zorunlu: true },
          { ad: 'Vekil Çalışan (İsteğe Bağlı)', aciklama: 'İzniniz süresince yerinize bakacak çalışan.', zorunlu: false },
          { ad: 'Tarih Aralığı (Başlangıç / Bitiş Tarihi)', aciklama: 'İznin başlangıç ve bitiş günleri. Bitiş, başlangıçtan önce seçilirse başlangıç tarihine eşitlenir.', zorunlu: true },
          { ad: 'Başlangıç Saati / Bitiş Saati', aciklama: 'Yalnız saatli izin türlerinde görünür. Aynı gün için bitiş saati başlangıçtan sonra olmalıdır.', zorunlu: true },
          { ad: 'Çalışma Saati Türü', aciklama: 'Süre hesabının dayanağı olan çalışma saati düzeni. Tek seçenek varsa kendiliğinden seçilir.', zorunlu: true },
          { ad: 'Ekler', aciklama: 'Yalnız belge yükleme açık olan izin türlerinde görünür; bazı türlerde zorunludur.', zorunlu: false },
          { ad: 'Açıklama', aciklama: 'İzin gerekçesi.', zorunlu: true },
        ],
        sonuc: '"İzin talebi başarıyla oluşturuldu" mesajı görünür; talep Beklemede durumuyla listeye düşer ve onay akışındaki ilk onaylayıcıya gider.',
        notlar: [
          'Eksik alanlarda ilgili alanın altında uyarı çıkar (örneğin "Lütfen bir izin türü seçin", "Lütfen bir açıklama belirtin").',
          'Seçili tarihlerde çakışan bir izin veya ek mesai varsa önizlemede uyarı görünür; talep gönderilemez.',
          'İzin süresi 0 gün olarak hesaplanıyorsa (örneğin resmi tatil veya çalışma günü dışı seçildiğinde) talep gönderilemez.',
          'Biriminiz için izin onay akışı tanımlı değilse talep açılamaz; İK ile iletişime geçin.',
          'Vazgeçmek için İptal\'e dokunun; doldurduğunuz bilgiler için çıkış onayı istenebilir.',
        ],
      },
      {
        baslik: 'Manuel izin girişi (gün gün saat girme)',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Bazı izin türlerinde tarih aralığı yerine her gün için ayrı saat ve süre girersiniz.',
        adimlar: [
          'Yeni İzin Talebi formunda manuel girişli bir izin türü seçin.',
          'Tarih Aralığı yerine görünen Tarihleri Seç kartına dokunun.',
          'Takvimden izin günlerini işaretleyin.',
          'Her gün için Başlangıç Saati, Bitiş Saati ve Süre (Gün) alanlarını doldurun; Tam Gün veya Yarım Gün seçebilirsiniz.',
          'Kaydet\'e dokunun ve formu normal şekilde tamamlayıp gönderin.',
        ],
        alanlar: [
          { ad: 'Başlangıç Saati / Bitiş Saati', aciklama: 'Üstteki satırda girdiğiniz saatler alttaki boş satırlara kendiliğinden uygulanır. Bitiş başlangıçtan erkense izin ertesi güne uzanır.', zorunlu: true },
          { ad: 'Süre (Gün)', aciklama: 'Tam Gün veya Yarım Gün.', zorunlu: true },
        ],
        sonuc: 'Seçilen günler özet olarak ("N gün seçildi (Toplam: X gün)") forma yazılır.',
        notlar: ['Bir günü listeden çıkarmak için Tarihi Kaldır\'a dokunun. Hiç tarih seçilmediyse "Henüz tarih seçilmedi" yazar.'],
      },
      {
        baslik: 'Talep ayrıntısını görme',
        kim: 'Çalışan',
        sekme: 'Tüm İzin Talepleri',
        aciklama: 'Talebin tüm bilgilerini ve onay sürecini görürsünüz.',
        adimlar: [
          'Listedeki bir talep kartına dokunun.',
          'İzin Detayları penceresinde izin türü, durum, talep tarihi, tarih aralığı, süre, kalan günler, vekil, çalışma saati türü ve açıklamayı okuyun.',
          'Onay Akışı bölümünde hangi adımda kimin karar verdiğini görün.',
          'Ekli belgeniz varsa Belgeleri İndir\'e dokunarak indirin.',
          'Günlük süre ayrıntısı için "İzin günleri detayı" bölümüne bakın.',
        ],
        sonuc: 'Talep bilgileri görüntülenir.',
      },
      {
        baslik: 'Bekleyen talebi iptal etme',
        kim: 'Çalışan',
        sekme: 'Bekleyen Talepler',
        aciklama: 'Henüz onaylanmamış bir talebi geri çekersiniz.',
        adimlar: [
          'Bekleyen talebin ayrıntı penceresini açın.',
          'Talebi İptal Et butonuna dokunun.',
          '"Bu talep iptal edilecek. Bu işlem geri alınamaz." uyarısında Evet, iptal et\'e dokunun (vazgeçmek için Talebi koru).',
        ],
        sonuc: 'Talep İptal Edildi durumuna geçer ve izin günleri bakiyenizden düşülmez.',
        notlar: ['Yalnız Beklemede durumundaki talepler iptal edilebilir; onaylanmış izni iptal ettirmek için yöneticinize başvurun.'],
      },
      {
        baslik: 'İzin çıktısı (izin formu) alma',
        kim: 'Çalışan',
        sekme: 'Onaylanan Talepler',
        aciklama: 'Onaylanan bir izin için imzalanacak izin formunu alırsınız.',
        adimlar: [
          'Onaylanmış talebin ayrıntı penceresini açın.',
          'İzin Çıktısı butonuna dokunun.',
          '"Bu belgeyi imzalayıp İK yöneticinize göndermeniz gerekmektedir." uyarısında Devam Et\'e dokunun.',
        ],
        sonuc: 'İzin formu dosya olarak hazırlanır; yazdırıp imzalayarak İK yöneticinize iletin.',
        notlar: ['Bu seçenek yalnız onaylanmış taleplerde görünür.'],
      },
      {
        baslik: 'İzin taleplerini dışa aktarma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Talepler listesini PDF veya Excel dosyası olarak alırsınız.',
        adimlar: [
          'Talepler başlığının yanındaki Dışa Aktar düğmesine dokunun.',
          'Gerekirse Durum Filtresi ve İzin Türü Filtresi\'ni seçin.',
          'İsterseniz Tarih Aralığı için Başlangıç Tarihi ve Bitiş Tarihi seçin (Temizle ile kaldırın).',
          'Dosya Formatı olarak PDF veya Excel\'i seçin ve dışa aktarın.',
        ],
        sonuc: 'Dosya hazırlanır ve paylaşma / kaydetme seçenekleri açılır.',
        notlar: [
          'Hiçbir süzgeç seçmezseniz tüm veriler dışa aktarılır; tarih aralığı izin tarihlerine göre süzer.',
          'Süzgece uyan kayıt yoksa "Bu filtrelere uyan kayıt yok." uyarısı görünür.',
        ],
      },
      {
        baslik: 'İzin takvimini görme',
        kim: 'Çalışan',
        sekme: 'Takvim',
        aciklama: 'İzinlerinizi ve resmî tatilleri ay ay takvimde görürsünüz.',
        adimlar: [
          'İzin Bakiyesi bölümünün altındaki Takvim düğmesine dokunun.',
          'Önceki Ay ve Sonraki ay oklarıyla aylar arasında gezinin.',
          'Bir güne dokunarak o günün kayıtlarını listeleyin.',
        ],
        sonuc: 'Seçtiğiniz günün izin ve tatil kayıtları gösterilir; kayıt yoksa "Bu günde kayıt yok." yazar.',
      },
      {
        baslik: 'Tatilleri görme',
        kim: 'Çalışan',
        sekme: 'Tatiller',
        aciklama: 'Biriminizde geçerli resmî tatilleri ve önemli günleri listeler.',
        adimlar: [
          'Tatiller düğmesine dokunun.',
          'Listeyi inceleyin.',
        ],
        sonuc: 'Tatiller ve Önemli Günler penceresinde resmî tatiller görünür; yoksa "Resmî tatil bulunamadı." yazar.',
      },
      {
        baslik: 'Tahmini (ileri tarihli) bakiye hesaplama',
        kim: 'Çalışan',
        sekme: 'Tahmini Bakiye',
        aciklama: 'İleri bir tarihte izin bakiyenizin ne olacağını hesaplarsınız.',
        adimlar: [
          'İzin Bakiyesi başlığının yanındaki Tahmini Bakiye düğmesine dokunun.',
          'Hedef Tarih alanından bakiyeyi görmek istediğiniz tarihi seçin.',
          'İzin Türleri alanından bir veya birkaç izin türü seçin.',
          'Hesapla butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Hedef Tarih', aciklama: 'Bakiyeyi görmek istediğiniz tarih; bugünden en fazla 1 yıl önce veya sonra olabilir.', zorunlu: true },
          { ad: 'İzin Türleri', aciklama: 'Hesaplanacak izin türleri.', zorunlu: true },
        ],
        sonuc: 'Her tür için Bugünkü Bakiye, Hakediş, Planlanan Kullanım, Devir / İmha ve Tahmini Bakiye değerleri tablo hâlinde görünür.',
        notlar: [
          'Sonuç yaklaşıktır: bugünkü izin kuralları, kıdeminiz ve pozisyonunuz esas alınır; kurallar veya pozisyonunuz değişirse gerçekleşen bakiye farklı olabilir.',
          'Tarih veya tür seçilmezse "Lütfen bir hedef tarih seçin." / "Lütfen en az bir izin türü seçin." uyarısı görünür.',
        ],
      },
      {
        baslik: 'Bakiye değişikliğini onaylama',
        kim: 'Çalışan',
        sekme: 'Değişiklik Onayları',
        aciklama: 'Yönetici veya İK\'nın bakiyenizde yaptığı değişikliği onaylarsınız.',
        adimlar: [
          'Değişiklik Onayları sekmesini açın (Bekleyen veya Tümü süzgecini seçebilirsiniz).',
          'Değişikliğin kartına dokunup Değişiklik Detayı penceresini açın; değişiklik türü, özet, değiştiren ve tarih bilgilerini inceleyin.',
          'Onayla butonuna dokunun.',
          'İsterseniz Onay notu (isteğe bağlı) alanına not yazın ve onaylayın.',
        ],
        alanlar: [
          { ad: 'Onay notu (isteğe bağlı)', aciklama: 'Onay ile birlikte iletilen kısa not.', zorunlu: false },
        ],
        sonuc: '"Değişiklik onaylandı ve işlendi." mesajı görünür ve bakiyenize yansır.',
        notlar: [
          'Değişiklik uygulanamazsa "Değişiklik uygulanamadı: …" uyarısı nedeniyle birlikte gösterilir.',
          'Onayınızı bekleyen değişiklik yoksa "Onayınızı bekleyen değişiklik yok." yazar.',
        ],
      },
      {
        baslik: 'Bakiye değişikliğini reddetme',
        kim: 'Çalışan',
        sekme: 'Değişiklik Onayları',
        aciklama: 'Doğru bulmadığınız bir bakiye değişikliğini gerekçesiyle reddedersiniz.',
        adimlar: [
          'Değişiklik Detayı penceresini açın.',
          'Reddet butonuna dokunun.',
          'Red gerekçesi alanına gerekçenizi yazın.',
          'Reddet butonuyla işlemi tamamlayın.',
        ],
        alanlar: [
          { ad: 'Red gerekçesi', aciklama: 'Değişikliği neden reddettiğiniz.', zorunlu: true },
        ],
        sonuc: '"Değişiklik reddedildi." mesajı görünür; bakiyeniz değişmez.',
        notlar: ['Gerekçe boş bırakılırsa ret işlemi tamamlanmaz.'],
      },
    ],

    sss: [
      {
        soru: 'İzin talebim neden hâlâ Beklemede görünüyor?',
        cevap: 'Onay akışında birden fazla adım olabilir. Talep ayrıntısındaki Onay Akışı bölümünde sıranın kimde olduğunu görebilirsiniz.',
      },
      {
        soru: 'Onaylanmış izni iptal edebilir miyim?',
        cevap: 'Hayır. Yalnız Beklemede olan talepler iptal edilebilir. Onaylanmış izin için yöneticinize başvurun.',
      },
      {
        soru: 'İzin türü listesinde aradığım tür yok.',
        cevap: 'Listede biriminizde ve profilinizde kullanıma açık izin türleri görünür. Eksik bir tür için İK ile görüşün.',
      },
      {
        soru: 'Talep gönderirken neden "Biriminiz için izin onay akışı tanımlı değil" uyarısı alıyorum?',
        cevap: 'Biriminizde izin onay akışı henüz tanımlanmamıştır. İK biriminize bildirin; akış tanımlanana kadar talep açılamaz.',
      },
      {
        soru: 'Tahmini bakiye neden gerçekleşen bakiyeden farklı çıktı?',
        cevap: 'Hesaplama bugünkü kurallara ve mevcut pozisyonunuza göre yapılan bir tahmindir. İzin planınız veya kurallar değişirse sonuç farklılaşır.',
      },
    ],

    ipuclari: [
      'Aynı talepler web\'de Kişisel › İzinlerim sayfasında da görünür.',
      'İzin talebi vermeden önce Takvim düğmesiyle tatil günlerini kontrol edin.',
      'Uzun izin planlarken Tahmini Bakiye ile hedef tarihteki bakiyenizi önceden görün.',
      'Rapor gibi belge isteyen izin türlerinde belgenizi talep sırasında ekleyin; sonradan eklenemez.',
      'Onaylanan izin için İzin Çıktısı alıp imzalayarak İK\'ya iletmeyi unutmayın.',
    ],
  },

  // ───────────────────────────── MESAİLERİM ─────────────────────────────
  {
    id: 'mobil-mesailerim',
    grup: 'mobil-kisisel',
    sira: 40,
    platform: 'mobil',
    rota: '/attendance',
    href: null,
    kim: 'ali',
    baslik: 'Mesailerim',
    menu: 'Mobil › Modüller › Kişisel › Mesailerim',
    ozet:
      'QR kod okutarak mesai girişi ve çıkışı yaparsınız, günün çalışma özetinizi ve geçmiş mesai kayıtlarınızı görürsünüz. Kurumunuzda açıksa uzaktan giriş yapabilir, ev konumunuzu tanımlayabilir ve çıkışını okutamadığınız günler için düzeltme talebi oluşturabilirsiniz.',

    ekranlar: [
      { sekme: null, aciklama: 'Ekran açıldığında Bugünkü Mesaim sekmesi gelir; yetkinize göre iki sekmeden yalnız biri de görünebilir.' },
      { sekme: 'Bugünkü Mesaim', aciklama: 'Giriş, Çıkış ve Çalışılan Süre kutuları; Son 7 Gün çubuk grafiği; (açıksa) Uzaktan Giriş ve Ev Adresim butonları; en altta "QR okut — giriş yap" veya "QR okut — çıkış yap" butonu.' },
      { sekme: 'Mesai Geçmişim', aciklama: 'Seçilen tarih aralığındaki günlük mesai kayıtları; Liste ve Takvim görünümü, filtre ve Dışa Aktar düğmeleri bulunur.' },
      { sekme: 'Mesai Geçmişim > Takvim', aciklama: 'Aylık takvim görünümü; üstte Toplam Gün, Ortalama Çalışma, Geç Kalış ve Eksik Gün özet kutuları, günler durumlarına göre renklidir.' },
      { sekme: 'Mesai Detayı', aciklama: 'Bir güne dokununca açılan pencere: Tarih, Giriş, Çıkış, Çalışılan Süre, Durum ve (varsa) düzeltme talebi bilgisi.' },
      { sekme: 'QR Okut', aciklama: 'Kamera ekranı; "Kamerayı giriş QR koduna doğrultun" (veya çıkış) yazısı görünür.' },
      { sekme: 'Uzaktan Mesai', aciklama: 'Konumunuzu, ev konumunuza uzaklığınızı ve Giriş Yap / Çıkış Yap butonunu gösteren pencere.' },
      { sekme: 'Ev Adresim', aciklama: 'Tanımlı ev konumunuzu gösteren veya yeni konumu tanımlatan pencere.' },
      { sekme: 'Düzeltme Talebi', aciklama: 'Giriş Saati, Çıkış Saati ve Gerekçe alanlı form penceresi.' },
    ],

    bolumler: [
      {
        baslik: 'Gün durumları',
        metin: 'Mesai Geçmişim\'de her gün bir durumla işaretlenir:',
        maddeler: [
          'Zamanında: Giriş planlanan saatte yapıldı.',
          'Geç: Giriş planlanan saatten sonra yapıldı.',
          'Eksik: Gün için mesai kaydı yok.',
          'Tamamlanmamış: Giriş var, çıkış yok.',
          'Devam Ediyor: Bugünkü mesainiz sürüyor.',
          'Hafta Sonu / Plan Yok: O gün için çalışma planı bulunmuyor.',
          'Düzeltme Bekliyor: Bu gün için gönderdiğiniz düzeltme talebi onayda.',
        ],
      },
      {
        baslik: 'Kayıt yöntemleri',
        metin: 'Kaydın nasıl oluştuğu mesai kayıtlarında belirtilir:',
        maddeler: [
          'QR: QR kod okutarak yapılan giriş / çıkış.',
          'Uzaktan: Uzaktan giriş / çıkış (kurumunuzda açıksa).',
          'Yönetici: Yöneticinizin sizin adınıza girdiği kayıt.',
          'Entegrasyon: Başka bir sistemden gelen kayıt.',
          'Vardiya ekranı: Vardiyalarım ekranından yapılan kayıt.',
        ],
      },
      {
        baslik: 'İzinler',
        metin: 'Mesai özelliklerinin görünmesi için gereken yetkiler:',
        maddeler: [
          'Bugünkü Mesaim sekmesi: Mesaimi görme yetkisi gerekir.',
          'Mesai Geçmişim sekmesi: Mesai geçmişimi görme yetkisi gerekir.',
          'Uzaktan Giriş ve Ev Adresim butonları yalnız kurumunuz uzaktan mesaiyi açtıysa görünür.',
          'QR okutma için telefonunuzda kamera ve konum izni verilmelidir.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Günlük mesai özetini görme',
        kim: 'Çalışan',
        sekme: 'Bugünkü Mesaim',
        aciklama: 'Bugünkü giriş ve çıkış saatinizi, çalıştığınız süreyi ve son 7 günlük çalışmanızı görürsünüz.',
        adimlar: [
          'Alt çubuktaki Modüller sekmesinden Kişisel bölümündeki Mesailerim kartına dokunun.',
          'Bugünkü Mesaim sekmesindeki Giriş, Çıkış ve Çalışılan Süre kutularına bakın.',
          'Son 7 Gün grafiğinde günlük çalışma sürenizi inceleyin.',
          'Ekranı aşağı çekerek verileri yenileyin.',
        ],
        sonuc: 'Giriş yapmadıysanız "Henüz giriş yapmadınız", çıkış yapmadıysanız "Çıkış yapılmadı" yazar. Mesainiz sürüyorsa Çalışılan Süre "canlı" olarak artar.',
        notlar: ['Bugün giriş yapmadıysanız "Bugün henüz giriş yapmadınız. Lütfen giriş QR kodunu okutun." uyarısı görünür.'],
      },
      {
        baslik: 'QR kodla giriş yapma',
        kim: 'Çalışan',
        sekme: 'Bugünkü Mesaim',
        aciklama: 'İş yerindeki mesai QR kodunu okutarak girişinizi kaydedersiniz.',
        adimlar: [
          'Bugünkü Mesaim sekmesinin altındaki "QR okut — giriş yap" butonuna dokunun.',
          'İstenirse kamera ve konum erişimine izin verin (Kameraya izin ver, Konuma izin ver).',
          'Kamerayı ekrandaki veya duvardaki giriş QR koduna doğrultun.',
          'Doğrulama bitene kadar bekleyin ("Doğrulanıyor…").',
        ],
        sonuc: '"QR ile giriş kaydedildi" yazısı görünür ve girişiniz Bugünkü Mesaim\'e yansır.',
        notlar: [
          'Ekranda gösterilen QR kodun süresi çok kısadır; "QR kodun süresi doldu. Ekrandaki güncel kodu okutun." uyarısı çıkarsa güncel kodu okutun.',
          '"Bu QR diğer yön (giriş/çıkış) için." uyarısı yanlış türde kod okuttuğunuzu, "Bu QR farklı bir sunucuya ait." uyarısı başka bir kuruma ait kod okuttuğunuzu gösterir.',
          'Hem giriş hem çıkış için tanımlı sabit QR kodlarda "Giriş mi, Çıkış mı?" sorusu çıkar; doğru olanı seçip Onayla\'ya dokunun. Tek yönlü kodlarda kayıt doğrudan yapılır.',
          'Başarısız olursanız Tekrar tara butonuyla yeniden deneyin.',
          'Kamera izni reddedildiyse "Uygulama ayarlarını aç" ile cihaz ayarlarından izin verin.',
          'Konum alınamazsa Tekrar dene\'ye dokunun; açık bir alana geçip konum servisinin açık olduğundan emin olun.',
          'Bugünkü giriş ve çıkışınız tamamlandıysa "Bugünkü giriş ve çıkışınız tamamlanmış. Okutulacak bir QR kalmadı." yazar ve QR butonu görünmez.',
        ],
      },
      {
        baslik: 'QR kodla çıkış yapma',
        kim: 'Çalışan',
        sekme: 'Bugünkü Mesaim',
        aciklama: 'Mesai bitişinde çıkış QR kodunu okutarak çıkışınızı kaydedersiniz.',
        adimlar: [
          'Girişinizi yaptıktan sonra "QR okut — çıkış yap" butonuna dokunun.',
          'Kamerayı çıkış QR koduna doğrultun.',
        ],
        sonuc: '"QR ile çıkış kaydedildi" yazısı görünür.',
        notlar: ['Çıkışı okutmayı unutursanız ertesi günlerde Mesai Geçmişim\'den düzeltme talebi oluşturabilirsiniz.'],
      },
      {
        baslik: 'Uzaktan giriş / çıkış yapma',
        kim: 'Çalışan',
        sekme: 'Uzaktan Mesai',
        aciklama: 'Uzaktan çalışırken konumunuzu doğrulayarak giriş veya çıkış kaydedersiniz.',
        adimlar: [
          'Bugünkü Mesaim sekmesinde Uzaktan Giriş butonuna dokunun.',
          'Konumunuz alınana kadar bekleyin ("Konum alınıyor...").',
          'Şu anki konumunuzu ve Ev konumuna uzaklık bilgisini kontrol edin.',
          'Giriş Yap (çıkışta Çıkış Yap) butonuna dokunun.',
        ],
        sonuc: '"Kayıt başarıyla alındı." uyarısı görünür ve kaydınız Uzaktan olarak işlenir.',
        notlar: [
          'Bu butonlar yalnız kurumunuz uzaktan mesaiyi açtıysa görünür.',
          'Ev konumunuz tanımlı değilse "Ev konumunuz tanımlı değil" uyarısı görünür; önce Ev Adresim\'i tanımlayın.',
          'Ev konumunuzdan toleransın dışındaysanız "Ev konumunuzdan uzaktasınız" uyarısı çıkar; kaydınız yine oluşur ancak yöneticinize uzak olarak görünür.',
        ],
      },
      {
        baslik: 'Ev konumunu tanımlama',
        kim: 'Çalışan',
        sekme: 'Ev Adresim',
        aciklama: 'Uzaktan giriş yapabilmek için ev konumunuzu bir kez tanımlarsınız.',
        adimlar: [
          'Bugünkü Mesaim sekmesinde Ev Adresim butonuna dokunun.',
          '"Ev konumunuzu tanımlayın" ekranında haritadaki konumun evinizde olduğundan emin olun.',
          'Evet, ev adresim bu butonuna dokunun.',
        ],
        sonuc: '"Ev konumunuz kaydedildi." uyarısı görünür; konum 1. sürüm olarak tanımlanır.',
        notlar: ['Konumu onayladıktan sonra değiştirmek için talep oluşturmanız gerekir.'],
      },
      {
        baslik: 'Ev konumu değişikliği talep etme',
        kim: 'Çalışan',
        sekme: 'Ev Adresim',
        aciklama: 'Taşındığınızda ev konumunuzun güncellenmesini istersiniz.',
        adimlar: [
          'Ev Adresim penceresinde Değiştir butonuna dokunun.',
          'Yeni konumunuzun şu anki konumunuzdan alındığını okuyun.',
          'Konumu neden değiştirmek istediğinizi açıklama alanına yazın.',
          'Talep Oluştur butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Gerekçe', aciklama: 'Konumu neden değiştirmek istediğiniz.', zorunlu: true },
        ],
        sonuc: '"Konum değişim talebiniz oluşturuldu. Onaylanınca geçerli olacak." uyarısı görünür. Talebiniz onaylanana kadar mevcut ev konumunuz geçerli kalır; Bekleyen konum değişim talebiniz var kartı görünür.',
        notlar: ['Gerekçe boşsa "Lütfen değişiklik gerekçesini yazın." uyarısı görünür.'],
      },
      {
        baslik: 'Mesai geçmişini görüntüleme ve süzme',
        kim: 'Çalışan',
        sekme: 'Mesai Geçmişim',
        aciklama: 'Geçmiş giriş-çıkış, geç kalma ve eksik gün kayıtlarınızı tarih aralığına göre incelersiniz.',
        adimlar: [
          'Mesai Geçmişim sekmesini açın.',
          'Tarih aralığını değiştirmek için filtre düğmesine dokunun; Başlangıç Tarihi ve Bitiş Tarihi seçip uygulayın.',
          'Liste görünümünde günlere göre kartları kaydırın; her kartta Giriş, Çıkış ve Çalışılan bilgisi yer alır.',
          'Takvim görünümüne geçmek için görünüm düğmesine dokunun.',
        ],
        sonuc: 'Seçilen aralıktaki kayıtlar görünür. Kayıt yoksa "Bu aralıkta mesai kaydı bulunamadı." yazar.',
        notlar: ['Varsayılan aralık içinde bulunduğunuz aydır.'],
      },
      {
        baslik: 'Mesai detayını açma',
        kim: 'Çalışan',
        sekme: 'Mesai Geçmişim',
        aciklama: 'Bir günün tüm mesai bilgilerini görürsünüz.',
        adimlar: [
          'Listedeki gün kartına (veya takvimde ilgili güne) dokunun.',
          'Mesai Detayı penceresinde Tarih, Giriş, Çıkış, Çalışılan Süre ve Durum bilgilerini okuyun.',
        ],
        sonuc: 'Günün ayrıntısı görüntülenir.',
      },
      {
        baslik: 'Çıkış için düzeltme talebi oluşturma',
        kim: 'Çalışan',
        sekme: 'Mesai Detayı',
        aciklama: 'Girişinizi yapıp çıkışınızı okutamadığınız geçmiş günler için yöneticinizden düzeltme istersiniz.',
        adimlar: [
          'Mesai Geçmişim\'de çıkışı eksik olan günün detayını açın.',
          'Düzeltme Talebi butonuna dokunun.',
          'Giriş Saati ve Çıkış Saati\'ni seçin.',
          'Gerekçe alanına çıkışı neden okutamadığınızı yazın.',
          'Gönder butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Giriş Saati', aciklama: 'Düzeltilmiş giriş saati.', zorunlu: true },
          { ad: 'Çıkış Saati', aciklama: 'Düzeltilmiş çıkış saati; giriş saatiyle aynı olamaz. Çıkış girişten önce seçilirse çıkış ertesi güne yazılır.', zorunlu: true },
          { ad: 'Gerekçe', aciklama: 'Çıkışı neden okutamadığınız (en fazla 500 karakter).', zorunlu: true },
        ],
        sonuc: '"Düzeltme talebiniz yöneticinizin onayına gönderildi." mesajı görünür; gün Düzeltme Bekliyor durumuna geçer.',
        notlar: [
          'Düzeltme Talebi butonu yalnız geçmiş günlerde, girişi olup çıkışı olmayan ve bekleyen talebi bulunmayan günlerde görünür.',
          'Alanlar boşsa "Giriş saati zorunludur.", "Çıkış saati zorunludur.", "Gerekçe zorunludur." uyarıları görünür.',
        ],
      },
      {
        baslik: 'Düzeltme talebini görme ve iptal etme',
        kim: 'Çalışan',
        sekme: 'Mesai Detayı',
        aciklama: 'Gönderdiğiniz düzeltme talebinin durumunu izler, gerekirse geri çekersiniz.',
        adimlar: [
          'Düzeltme Bekliyor durumundaki günün detayını açın.',
          'Düzeltme Talebi bölümünde durumu (Bekliyor, Onaylandı, Reddedildi, İptal Edildi), İstenen Saat ve Kayıttaki Saat bilgilerini okuyun; reddedildiyse Red Gerekçesi görünür.',
          'Geri çekmek için Talebi İptal Et butonuna dokunun ve onaylayın.',
        ],
        sonuc: '"Düzeltme talebi iptal edildi." uyarısı görünür; gün için yeniden talep açabilirsiniz.',
        notlar: ['Yalnız bekleyen talepler iptal edilebilir.'],
      },
      {
        baslik: 'Mesai geçmişini dışa aktarma',
        kim: 'Çalışan',
        sekme: 'Mesai Geçmişim',
        aciklama: 'Geçmiş mesai kayıtlarınızı dosya olarak alırsınız.',
        adimlar: [
          'Mesai Geçmişim sekmesinde Dışa Aktar düğmesine dokunun.',
          'Dosya biçimini (PDF veya Excel) seçin.',
          'Dışa aktarmayı onaylayın.',
        ],
        sonuc: 'Seçili tarih aralığındaki kayıtlar dosya olarak hazırlanır. Kayıt yoksa dışa aktarılacak veri olmadığı uyarısı çıkar.',
      },
    ],

    sss: [
      {
        soru: 'QR kodu okutamıyorum, ne yapmalıyım?',
        cevap: 'Önce kamera ve konum izninin açık olduğunu, internet bağlantınızın bulunduğunu ve doğru yönün (giriş / çıkış) kodunu okuttuğunuzu kontrol edin. Süre dolduysa ekrandaki güncel kodu okutun.',
      },
      {
        soru: 'Çıkışımı okutmayı unuttum.',
        cevap: 'Ertesi gün Mesai Geçmişim\'den ilgili günün detayını açıp Düzeltme Talebi oluşturun. Talebiniz yöneticinizin onayına gider.',
      },
      {
        soru: 'Uzaktan Giriş butonu neden görünmüyor?',
        cevap: 'Bu özellik kurumunuz tarafından açıldığında görünür. Açık değilse İK birimine sorun.',
      },
      {
        soru: 'Neden bir QR butonu görünmüyor?',
        cevap: 'Bugünkü giriş ve çıkışınız tamamlandıysa okutulacak QR kalmadığı için buton gizlenir.',
      },
    ],

    ipuclari: [
      'Alt çubuktaki + düğmesinden (veya onay yetkiniz yoksa çubuktaki QR kısayolundan) Mesailerim\'e girmeden doğrudan QR okutabilirsiniz.',
      'Uygulama güncel değilse bile "Güncelleme gerekli" ekranındaki QR ile giriş / çıkış butonuyla mesai kaydınızı yapabilirsiniz.',
      'QR kodun süresi çok kısadır; okutmaya hazır olduğunuzda butona dokunun.',
      'Aynı mesai kayıtları web\'de Kişisel altında da izlenir.',
    ],
  },

  // ───────────────────────────── VARDİYALARIM ─────────────────────────────
  {
    id: 'mobil-vardiyalarim',
    grup: 'mobil-kisisel',
    sira: 50,
    platform: 'mobil',
    rota: '/shift',
    href: null,
    kim: 'ali',
    baslik: 'Vardiyalarım',
    menu: 'Mobil › Modüller › Kişisel › Vardiyalarım',
    ozet:
      'Size atanan vardiyaları takvimde ve liste olarak görür, biriminizin kullandığı yolla vardiya girişi ve çıkışı yaparsınız. Vardiyanızı iş arkadaşınızla değiştirme, devretme veya bırakma talebi oluşturabilir, size gelen talepleri yanıtlayabilir, açık vardiyalara talip olabilir ve çalışamayacağınız günleri bildirebilirsiniz.',

    ekranlar: [
      { sekme: null, aciklama: 'Ekran açıldığında üstte Bugün · tarih kartı, altında sekme şeridi bulunur; bildirimden gelinmediyse Takvim sekmesi açılır. Sekme şeridinin yanında Tercihlerim (ayar) düğmesi yer alır.' },
      { sekme: 'Bugün kartı', aciklama: 'Günün vardiyası (adı ve saat aralığı), Giriş / Çıkış saatleriniz, durum ve giriş-çıkış butonu. Kartlar arasında kaydırarak Sıradaki vardiya ve Bu ay özetini de görürsünüz.' },
      { sekme: 'Takvim', aciklama: 'Geçmiş ve gelecek vardiyalarınızın aylık takvimi; izin, resmi tatil ve yarım gün tatiller de gösterilir. Bir güne dokununca o günün kayıtları listelenir; ay özeti Planlı, Çalışılan, Geç kalma ve İzin değerlerini verir.' },
      { sekme: 'Yaklaşan', aciklama: 'Önümüzdeki 30 günün vardiyaları liste olarak.' },
      { sekme: 'Taleplerim', aciklama: 'Vardiya değişim taleplerinizin listesi; Gönderdiklerim ve Gelenler görünümleri vardır.' },
      { sekme: 'Taleplerim > Gelenler', aciklama: 'İş arkadaşlarınızdan size gelen ve kararınızı bekleyen talepler.' },
      { sekme: 'Açık Vardiyalar', aciklama: 'Eksik kalan, talip olunabilecek vardiyalar; her birinde Uygun / Uygun değil durumu görünür.' },
      { sekme: 'Tercihlerim', aciklama: 'Çalışamayacağım haftanın günleri, çalışamayacağım tarihler, tercih ettiğim vardiyalar ve not alanları.' },
      { sekme: 'Vardiya Değişim Talebi', aciklama: 'Üç adımlı form: Tür, Seçim, Gönder.' },
    ],

    bolumler: [
      {
        baslik: 'Vardiya durumları',
        metin: 'Atanan vardiyalar şu durumlarla gösterilir:',
        maddeler: [
          'Planlı: Vardiya henüz gerçekleşmedi.',
          'Giriş Yapıldı: Vardiyaya giriş kaydedildi.',
          'Çıkış Yapıldı: Vardiya tamamlandı.',
          'Gelmedi: Vardiya için giriş kaydı oluşmadı.',
          'İptal Edildi: Vardiya iptal edildi.',
          'Yer Değiştirildi: Vardiya bir değişim talebiyle başka çalışana geçti.',
        ],
      },
      {
        baslik: 'Talep türleri ve durumları',
        metin: 'Vardiya değişikliği için üç tür talep açabilirsiniz; açık vardiyaya talip olmak da talep sayılır.',
        maddeler: [
          'Yer Değiştirme: Vardiyanızı bir iş arkadaşınızın vardiyasıyla değiştirirsiniz.',
          'Devretme: Vardiyanızı bir iş arkadaşınız devralır.',
          'Bırakma: Vardiyanızı bırakırsınız; onaylanırsa açık vardiya olur.',
          'Açık Vardiyaya Talip: Eksik kalan bir vardiyaya başvurursunuz.',
          'Durumlar: Beklemede, İş Arkadaşı Kabul Etti, Yönetici Onayladı, Reddedildi, Uygulandı, Süresi Doldu, İptal Edildi.',
        ],
      },
      {
        baslik: 'Talep açılamayan durumlar',
        metin: 'Vardiya için talep açma butonu şu durumlarda kapalıdır:',
        maddeler: [
          'Vardiya planlı değilse: "Yalnız planlı vardiya için talep açılabilir."',
          'Vardiya başladıysa: "Vardiya başladı; talep açılamaz."',
          'Son başvuru süresi geçtiyse: "Son başvuru süresi doldu; talep açılamaz."',
          'Aynı vardiya için açık bir talep varsa: ikinci talep açılamaz; Talebi Görüntüle ile mevcut talebe gidin.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Bugünkü vardiyayı ve sıradaki vardiyayı görme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Günün vardiyasını, giriş-çıkış saatlerinizi ve ardından gelen vardiyayı görürsünüz.',
        adimlar: [
          'Alt çubuktaki Modüller sekmesinden Kişisel bölümündeki Vardiyalarım kartına dokunun.',
          'Bugün kartına bakın: vardiya adı, saat aralığı ve durum görünür.',
          'Sıradaki vardiya ve Bu ay kartlarını görmek için kartı yana kaydırın.',
          'Ekranı aşağı çekerek verileri yenileyin.',
        ],
        sonuc: 'Bugün vardiyanız yoksa "Bugün vardiyanız yok." yazar; Bu ay kartında Planlı, Çalışılan, Geç kalma ve İzin değerleri görünür.',
        notlar: ['Sıradaki vardiya kartındaki Takvime Ekle butonuyla vardiyanızı telefonunuzun takvimine ekleyebilirsiniz; olmazsa "Takvim dosyası indirilemedi." uyarısı çıkar.'],
      },
      {
        baslik: 'Vardiya girişi ve çıkışı yapma',
        kim: 'Çalışan',
        sekme: 'Bugün kartı',
        aciklama: 'Vardiyanıza biriminizin belirlediği yolla giriş ve çıkış kaydedersiniz.',
        adimlar: [
          'Bugün kartında görünen butona dokunun: QR ile Giriş Yap, Uzaktan Giriş Yap veya Giriş Yap (çıkışta ilgili Çıkış karşılıkları).',
          'QR yönteminde kameranızla QR kodu okutun; uzaktan yöntemde konumunuzun alınmasını bekleyin.',
          'Kendi ekranından yapılan kayıtta "Giriş yapmak istiyor musunuz?" (veya çıkış) sorusunu onaylayın; vazgeçmek için Vazgeç\'e dokunun.',
        ],
        sonuc: 'Giriş / Çıkış saatiniz karta yazılır; kayıt tamamlanınca "Bugünkü kayıt tamam." görünür. Geç kaldıysanız "N dk geç" bilgisi görünür.',
        notlar: [
          'Hangi yöntemin kullanılacağı birim ayarına bağlıdır; yöntem uygun değilse buton görünmez.',
          'Kartta "Giriş için son saat" veya "Giriş penceresi açılışı" bilgisi giriş yapabileceğiniz zaman aralığını gösterir; pencere dışında giriş yapılamaz.',
          '"Bu vardiyanın giriş-çıkışı yöneticiniz ya da entegrasyon tarafından kaydedilir." yazıyorsa sizin yapacağınız bir işlem yoktur.',
        ],
      },
      {
        baslik: 'Vardiya takvimini görme',
        kim: 'Çalışan',
        sekme: 'Takvim',
        aciklama: 'Geçmiş ve gelecek vardiyalarınızı izin ve tatillerle birlikte aylık görürsünüz.',
        adimlar: [
          'Takvim sekmesine dokunun.',
          'Aylar arasında gezinin; Bugün butonuyla güncel güne dönün.',
          'Bir güne dokunarak o günün vardiya, izin veya tatil kayıtlarını listeleyin.',
          'Bir vardiya kaydına dokunarak ayrıntısını açın.',
        ],
        sonuc: 'Günün kayıtları listelenir; kayıt yoksa "Bu günde vardiya, izin ya da tatil yok." yazar.',
      },
      {
        baslik: 'Yaklaşan vardiyaları listeleme',
        kim: 'Çalışan',
        sekme: 'Yaklaşan',
        aciklama: 'Önümüzdeki 30 gündeki vardiyalarınızı tek listede görürsünüz.',
        adimlar: [
          'Yaklaşan sekmesine dokunun.',
          'Listeden bir vardiyaya dokunarak ayrıntıyı açın.',
        ],
        sonuc: 'Vardiya ayrıntısı penceresi açılır. Vardiya yoksa "Önümüzdeki 30 günde vardiyanız yok." yazar.',
      },
      {
        baslik: 'Vardiya ayrıntısını görme',
        kim: 'Çalışan',
        sekme: 'Yaklaşan',
        aciklama: 'Bir vardiyanın tarihini, saatini, durumunu ve giriş-çıkış kayıtlarını görürsünüz.',
        adimlar: [
          'Takvim veya Yaklaşan sekmesinde vardiyaya dokunun.',
          'Durum, Tarih, Saat, Giriş / Çıkış, Süre, Geç Kalma, Fazla Mesai ve Resmi Tatil bilgilerini okuyun.',
        ],
        sonuc: 'Vardiya bilgileri görüntülenir. Açık talebiniz varsa Talebi Görüntüle butonu, değişiklik yapılabiliyorsa Değişiklik Talebi butonu görünür.',
      },
      {
        baslik: 'Vardiya değişim talebi oluşturma',
        kim: 'Çalışan',
        sekme: 'Vardiya Değişim Talebi',
        aciklama: 'Vardiyanızı iş arkadaşınızla değiştirmek, ona devretmek veya bırakmak için talep açarsınız.',
        adimlar: [
          'Takvim veya Yaklaşan sekmesinde ilgili vardiyaya dokunun ve Değişiklik Talebi butonuna dokunun.',
          '1. adım (Tür): "Ne yapmak istiyorsunuz?" sorusunda Yer Değiştir, Devret veya Bırak seçeneklerinden birini seçin ve İleri\'ye dokunun.',
          '2. adım (Seçim): Yer değiştirmede iş arkadaşınızın vardiyasını, devretmede vardiyayı devralacak iş arkadaşınızı seçin; bırakmada bu adım bilgi içindir. Renkli hücreler kurallara uyan seçeneklerdir; gri hücreye dokununca gerekçeyi görürsünüz. Haftalar arasında Önceki hafta / Sonraki hafta oklarıyla geçin.',
          '3. adım (Gönder): Özeti ve Onay sırasını kontrol edin; isterseniz not yazın.',
          'Talebi Gönder butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Talep Türü', aciklama: 'Yer Değiştir, Devret veya Bırak.', zorunlu: true },
          { ad: 'İş Arkadaşı / Vardiya seçimi', aciklama: 'Yer değiştirmede iş arkadaşının vardiyası, devretmede iş arkadaşı seçilir.', zorunlu: true },
          { ad: 'Not', aciklama: 'İsteğe bağlı açıklama (en fazla 1024 karakter).', zorunlu: false },
        ],
        sonuc: 'Talep Beklemede durumuyla Taleplerim › Gönderdiklerim\'e düşer; önce iş arkadaşınıza, ardından biriminizin vardiya onay akışındaki onaylayıcılara gider. Sonuçlanmazsa talep vardiya başlangıcında düşer.',
        notlar: [
          'Talep kurallara uymuyorsa "Talep şu kurallara uymuyor" başlığı altında nedenler listelenir.',
          'Biriminizde seçilen tarihler için iş arkadaşı yoksa "Biriminizde bu tarihler için iş arkadaşı bulunamadı." yazar.',
          'Vazgeçmek için Vazgeç\'e (ilk adımda) veya Geri\'ye dokunun.',
        ],
      },
      {
        baslik: 'Gönderdiğim talepleri izleme ve iptal etme',
        kim: 'Çalışan',
        sekme: 'Taleplerim',
        aciklama: 'Gönderdiğiniz değişim taleplerinin durumunu görür, gerekirse iptal edersiniz.',
        adimlar: [
          'Taleplerim sekmesinde Gönderdiklerim görünümünü seçin.',
          'Bir talebe dokunarak Vardiya Talebi penceresini açın; durum, talep türü, vardiyanız, karşılığında vardiya, Şu An Bekleyen ve Son Geçerlilik bilgilerini inceleyin.',
          'Onay akışı bölümünden iş arkadaşınızın ve onaylayıcıların kararlarını görün.',
          'İptal için Talebi İptal Et\'e dokunup soruyu onaylayın.',
        ],
        sonuc: 'İptal edilen talep İptal Edildi durumuna geçer ve vardiyanız eski hâlinde kalır.',
        notlar: [
          'Talep sonuçlanınca Karar Notu görünür.',
          'Vardiya Talebi Çıktısı seçeneği, çıktı alınabilen taleplerde ayrıntı penceresinde görünür.',
          'Gönderdiğiniz talep yoksa "Gönderdiğiniz vardiya değişim talebi yok." yazar.',
        ],
      },
      {
        baslik: 'Gelen talebi kabul etme veya reddetme',
        kim: 'Çalışan',
        sekme: 'Taleplerim > Gelenler',
        aciklama: 'İş arkadaşınızın size yönelttiği yer değiştirme veya devretme talebine yanıt verirsiniz.',
        adimlar: [
          'Taleplerim sekmesinde Gelenler görünümünü seçin; "Kararınızı bekliyor" etiketli talepleri bulun.',
          'Talebe dokunarak Talep Eden, Talep Edenin Vardiyası ve Karşılığında bilgilerini inceleyin.',
          'Kabul etmek için Kabul Et\'e dokunup "Bu talebi kabul etmek istiyor musunuz?" sorusunu onaylayın.',
          'Reddetmek için Reddet\'e dokunun, Ret gerekçesi yazın ve onaylayın.',
        ],
        alanlar: [
          { ad: 'Ret gerekçesi', aciklama: 'Talebi neden reddettiğiniz (en çok 1024 karakter).', zorunlu: true },
        ],
        sonuc: 'Kabul ederseniz talep durumu İş Arkadaşı Kabul Etti olur ve yönetici onayına geçer; reddederseniz talep Reddedildi olur.',
        notlar: [
          'Gerekçe boşsa "Lütfen ret gerekçesi girin." uyarısı görünür.',
          'Size gelen talep yoksa "Size gelen vardiya değişim talebi yok." yazar.',
        ],
      },
      {
        baslik: 'Açık vardiyaya talip olma',
        kim: 'Çalışan',
        sekme: 'Açık Vardiyalar',
        aciklama: 'Eksik kalan vardiyalara başvurursunuz.',
        adimlar: [
          'Açık Vardiyalar sekmesini açın.',
          'Vardiyaya dokunarak ayrıntısını açın; Uygun veya Uygun değil durumunu ve Eksik bilgisini kontrol edin.',
          'Talip Ol butonuna dokunun.',
          'Açılan Açık Vardiyaya Talip Ol penceresinde talebinizi onaylayın.',
        ],
        sonuc: '"Talebiniz gönderildi." uyarısı görünür; talep biriminizin onay akışına girer ve onaylanınca vardiya size atanır. Vardiya "Talip oldunuz" olarak işaretlenir.',
        notlar: [
          'Uygun değil görünen vardiyalara talip olunamaz.',
          'Açık vardiya yoksa "Şu anda açık vardiya yok." yazar.',
        ],
      },
      {
        baslik: 'Çalışma tercihlerimi bildirme',
        kim: 'Çalışan',
        sekme: 'Tercihlerim',
        aciklama: 'Çalışamayacağınız günleri ve tercih ettiğiniz vardiyaları planlamacıya bildirirsiniz.',
        adimlar: [
          'Sekme şeridinin yanındaki ayar (Tercihlerim) düğmesine dokunun.',
          'Çalışamayacağım haftanın günleri bölümünden günleri seçin.',
          'Çalışamayacağım tarihler için Tarih ekle\'ye dokunup tarih seçin.',
          'Tercih ettiğim vardiyalar bölümünden vardiyaları işaretleyin.',
          'İsteğe bağlı not yazıp kaydedin.',
        ],
        alanlar: [
          { ad: 'Çalışamayacağım haftanın günleri', aciklama: 'Her hafta çalışamayacağınız günler.', zorunlu: false },
          { ad: 'Çalışamayacağım tarihler', aciklama: 'Belirli tarihler.', zorunlu: false },
          { ad: 'Tercih ettiğim vardiyalar', aciklama: 'Atanmasını istediğiniz vardiya şablonları.', zorunlu: false },
          { ad: 'Not', aciklama: 'En fazla 1024 karakter.', zorunlu: false },
        ],
        sonuc: '"Tercihleriniz kaydedildi." uyarısı görünür.',
        notlar: ['Planlama yapılırken bu tercihler uyarı olarak görünür; vardiya atanmasını engellemez.'],
      },
    ],

    sss: [
      {
        soru: 'Vardiya girişi butonu neden görünmüyor?',
        cevap: 'Butonlar vardiyanız için tanımlı kayıt yöntemine ve giriş penceresine göre görünür. Pencere açılmadıysa karttaki "Giriş penceresi açılışı" saatini bekleyin; yöntem yönetici veya entegrasyonsa kayıt sizin adınıza yapılır.',
      },
      {
        soru: 'Vardiya değişim talebi neden açılamıyor?',
        cevap: 'Vardiya planlı olmalı, başlamamış olmalı, son başvuru süresi geçmemiş olmalı ve aynı vardiya için açık bir talep bulunmamalıdır. Gerekçe ekranda yazar.',
      },
      {
        soru: 'Bıraktığım vardiyaya ne olur?',
        cevap: 'Talep onaylanırsa vardiya açık vardiya olur ve uygun iş arkadaşlarınıza duyurulur.',
      },
      {
        soru: 'Tercihlerim planlamayı bağlar mı?',
        cevap: 'Hayır. Tercihler planlama sırasında yalnızca uyarı olarak görünür; vardiya atanmasını engellemez.',
      },
    ],

    ipuclari: [
      'Vardiya değiştirmeden önce Yaklaşan sekmesinde iş arkadaşınızla uyumlu günleri kontrol et; renkli hücreler kurallara uyan seçeneklerdir.',
      'Sıradaki vardiya kartındaki Takvime Ekle ile vardiyanızı telefon takviminize ekleyerek hatırlatma kurabilirsiniz.',
      'Bildirim gelen bir talebe dokunduğunuzda doğrudan o talebin ayrıntısı açılır.',
      'Aynı vardiyalar web\'de Kişisel altındaki vardiya sayfalarında da görünür.',
    ],
  },

  // ───────────────────────────── EK MESAİLERİM ─────────────────────────────
  {
    id: 'mobil-ek-mesailerim',
    grup: 'mobil-kisisel',
    sira: 60,
    platform: 'mobil',
    rota: '/overtime',
    href: null,
    kim: 'ali',
    baslik: 'Ek Mesailerim',
    menu: 'Mobil › Modüller › Kişisel › Ek Mesailerim',
    ozet:
      'Ek mesai girişlerinizi oluşturur, düzenler, onay durumlarını takip eder ve geçmiş onaylarınızı incelersiniz. Bir girişte birden fazla gün seçebilir, her gün için saat aralığı ve mola girebilirsiniz.',

    ekranlar: [
      { sekme: null, aciklama: 'Ek Mesai Çizelgesi sekmesi açılır; altta Yeni Giriş butonu bulunur.' },
      { sekme: 'Ek Mesai Çizelgesi', aciklama: 'Üstte Aylık Özet kartı, altında ay takvimi; bir güne dokununca o günün ek mesai kayıtları ve resmî tatil bilgisi listelenir. Takvimde ay okları ve gün işaretleri vardır.' },
      { sekme: 'Onay Geçmişi', aciklama: 'Geçmiş ek mesai taleplerinizin onay durumları; Ay ve Yıl süzgeçleri, durum sayıları ve Dışa Aktar düğmesi vardır.' },
      { sekme: 'Ek Mesai Detayları', aciklama: 'Bir kayda dokununca açılan pencere: Ek Mesai Türü, Tarih Aralığı, Süre, Açıklama, Onay İş Akışı ve butonlar.' },
      { sekme: 'Yeni Ek Mesai Girişi', aciklama: 'Çalışma Saati Türü, Ek Mesai Tipi, Tarihleri Seç ve Açıklama alanlarının bulunduğu form; üstte yıllık ek mesai kotası bilgisi yer alır.' },
      { sekme: 'Ek Mesai Günleri', aciklama: 'Tarihleri Seç\'e dokununca açılan pencere: takvim ve seçilen günlerin saat / mola satırları.' },
      { sekme: 'Ek Mesai Önizlemesi', aciklama: 'Göndermeden önce toplam saati ve günlük kırılımı gösteren onay penceresi.' },
    ],

    bolumler: [
      {
        baslik: 'Talep durumları',
        metin: 'Ek mesai kayıtlarınız şu durumlarla görünür:',
        maddeler: [
          'Onay Beklemede: Kayıt onaylayıcıda.',
          'Onaylandı: Kayıt onaylandı; onaylanan giriş düzenlenemez ve silinemez.',
          'Reddedildi: Onaylayan reddetti; kaydı düzenleyip yeniden gönderebilir veya silebilirsiniz.',
          'İptal Edildi: Talep geri çekildi; düzenleyebilir veya silebilirsiniz.',
        ],
      },
      {
        baslik: 'Süre türleri ve kota',
        metin: 'Ek mesai süresi Tam Gün, Yarım Gün veya Saatlik olabilir.',
        maddeler: [
          'Giriş formunun üstündeki bilgi kutusu "Bu yıl kullanılan ek mesai: X / Y" ve "Kalan: Z" bilgisini gösterir.',
          'Kota eşiğe yaklaşırsa kutu uyarı, aşılırsa hata rengine döner.',
          'Aynı güne daha önce girilmiş ek mesai veya izinli saatleriniz varsa form sizi uyarır; izinli saatlere ek mesai girilemez.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Aylık özeti ve çizelgeyi görme',
        kim: 'Çalışan',
        sekme: 'Ek Mesai Çizelgesi',
        aciklama: 'Bu ayki ek mesainizi ve gün gün kayıtlarınızı takvimde görürsünüz.',
        adimlar: [
          'Alt çubuktaki Modüller sekmesinden Kişisel bölümündeki Ek Mesailerim kartına dokunun.',
          'Aylık Özet kartında toplam ek mesai bilgisine bakın.',
          'Takvimde önceki / sonraki ay oklarıyla gezinin.',
          'Bir güne dokunarak o günün ek mesai kayıtlarını görün.',
        ],
        sonuc: 'Seçilen günün kayıtları ve (varsa) resmî tatil bilgisi listelenir. Kayıt yoksa "Ek mesai girişi yok" yazar.',
        notlar: ['Alt çubuktaki + düğmesinden de Yeni Ek Mesai Girişi\'ni doğrudan açabilirsiniz.'],
      },
      {
        baslik: 'Yeni ek mesai girişi oluşturma',
        kim: 'Çalışan',
        sekme: 'Yeni Ek Mesai Girişi',
        aciklama: 'Bir veya birden fazla gün için ek mesai girişi yapar ve onaya gönderirsiniz.',
        adimlar: [
          'Ek Mesailerim ekranında Yeni Giriş butonuna dokunun.',
          'Üstteki kota bilgisini ve olası uyarıları (aynı gün kaydı, izinli saat) okuyun.',
          'Çalışma Saati Tipi alanından türü seçin.',
          'Ek Mesai Tipi alanından ek mesai tipini seçin.',
          'Tarihleri Seç alanına dokunun; takvimden günleri işaretleyin.',
          'Her gün için başlangıç ve bitiş saatini, gerekirse mola süresini (saat ve dakika) girin; Kaydet\'e dokunun.',
          'Açıklama alanına gerekçenizi yazın.',
          'Kaydet butonuna dokunun.',
          'Ek Mesai Önizlemesi\'nde Toplam Saat ve Günlük kırılımı kontrol edip Onayla ve Gönder\'e dokunun (değiştirmek için Düzenle).',
        ],
        alanlar: [
          { ad: 'Çalışma Saati Tipi', aciklama: 'Yalnız varsayılan molayı belirler; mola gün satırında değiştirilebilir. Tek seçenek varsa kendiliğinden seçilir.', zorunlu: false },
          { ad: 'Ek Mesai Tipi', aciklama: 'Kurumda tanımlı ek mesai tipleri listelenir.', zorunlu: true },
          { ad: 'Tarihleri Seç', aciklama: 'En az bir gün seçilmeli; tüm günlerin saatleri geçerli ve birbiriyle çakışmaz olmalıdır. Başlangıç ve bitiş saati aynı olamaz.', zorunlu: true },
          { ad: 'Mola', aciklama: 'Her gün satırında saat ve dakika olarak girilir; Molayı kaldır ile silinir. Net Saat satırı mola düşülmüş süreyi gösterir.', zorunlu: false },
          { ad: 'Açıklama', aciklama: 'Ek mesai gerekçesi.', zorunlu: true },
        ],
        sonuc: '"Ek mesai talebiniz gönderilmiştir" mesajı görünür; kayıt Onay Beklemede durumuyla listeye düşer ve onay akışındaki ilk onaylayıcıya gider.',
        notlar: [
          'Bitiş saati başlangıçtan erkense mesai gece yarısını geçip ertesi güne uzar; önizlemede bu belirtilir.',
          'Günlük çalışma süresi, dinlenme, gece çalışması, ardışık gün ve haftalık dinlenme sınırlarını aşan girişlerde önizlemede kural uyarısı görünür.',
          'Eksik alanlarda "Ek mesai tipi seçiniz", "En az bir gün seçin…" ve "Açıklama zorunludur" uyarıları çıkar.',
          'Aynı günde başka bir giriş veya izinli saat varsa formun üstünde uyarı gösterilir; izinli saatlere ek mesai girilemez.',
          'Vazgeçmek için İptal\'e dokunun; doldurduğunuz bilgiler için çıkış onayı istenebilir.',
        ],
      },
      {
        baslik: 'Ek mesai kaydının ayrıntısını görme',
        kim: 'Çalışan',
        sekme: 'Ek Mesai Çizelgesi',
        aciklama: 'Bir kaydın tüm bilgilerini ve onay akışını görürsünüz.',
        adimlar: [
          'Çizelgede bir güne dokunup kayda dokunun (veya Onay Geçmişi sekmesinde listeden kayda dokunun).',
          'Ek Mesai Detayları penceresinde tür, tarih aralığı, süre, açıklama, durum ve onay tarihini okuyun.',
          'Onay İş Akışı bölümünde adım, onaylayan, durum, tarih ve açıklamaları görün.',
        ],
        sonuc: 'Kayıt bilgileri görüntülenir.',
      },
      {
        baslik: 'Ek mesai girişini düzenleme',
        kim: 'Çalışan',
        sekme: 'Ek Mesai Detayları',
        aciklama: 'Bekleyen, reddedilen veya iptal edilen bir girişi değiştirip yeniden gönderirsiniz.',
        adimlar: [
          'Kaydın Ek Mesai Detayları penceresini açın.',
          'Ek Mesai Girişini Düzenle butonuna dokunun.',
          'Alanları değiştirin; Kaydet\'e dokunun.',
          'Önizlemede Onayla ve Gönder\'e dokunun.',
        ],
        sonuc: '"Ek mesai girişi başarıyla güncellendi" mesajı görünür.',
        notlar: ['Onaylanmış giriş düzenlenemez: "Onaylanmış ek mesai girişi düzenlenemez."'],
      },
      {
        baslik: 'Bekleyen ek mesai talebini iptal etme',
        kim: 'Çalışan',
        sekme: 'Ek Mesai Detayları',
        aciklama: 'Henüz onaylanmamış talebi geri çekersiniz.',
        adimlar: [
          'Beklemedeki kaydın Ek Mesai Detayları penceresini (veya Onay Geçmişi\'ndeki kartı) açın.',
          'Talebi İptal Et butonuna dokunun.',
          '"Ek mesai talebiniz iptal edilecek. Bu işlem geri alınamaz." uyarısında Talebi İptal Et\'e dokunun (vazgeçmek için Talebi koru).',
        ],
        sonuc: '"Talep iptal edildi." mesajı görünür ve kayıt İptal Edildi durumuna geçer.',
        notlar: ['Yalnız Onay Beklemede durumundaki talepler iptal edilebilir.'],
      },
      {
        baslik: 'Ek mesai girişini silme',
        kim: 'Çalışan',
        sekme: 'Ek Mesai Detayları',
        aciklama: 'Bekleyen, reddedilen veya iptal edilen bir girişi tamamen kaldırırsınız.',
        adimlar: [
          'Kaydın Ek Mesai Detayları penceresini açın.',
          'Sil butonuna dokunun.',
          '"Bu ek mesai kaydını silmek istediğinizden emin misiniz? Bu işlem geri alınamaz." uyarısında Sil\'e dokunun (vazgeçmek için Vazgeç).',
        ],
        sonuc: '"Ek mesai girişi başarıyla silindi" mesajı görünür.',
        notlar: ['Onaylanmış girişler silinemez.'],
      },
      {
        baslik: 'Ek mesai PDF çıktısı alma',
        kim: 'Çalışan',
        sekme: 'Ek Mesai Detayları',
        aciklama: 'Bir ek mesai kaydı için belge çıktısı alırsınız.',
        adimlar: [
          'Kaydın Ek Mesai Detayları penceresini açın.',
          'PDF butonuna dokunun.',
        ],
        sonuc: 'PDF hazırlanır ve paylaşma / kaydetme seçenekleri açılır.',
        notlar: ['Oluşturulamazsa "PDF oluşturulamadı." uyarısı görünür.'],
      },
      {
        baslik: 'Onay geçmişini süzme ve dışa aktarma',
        kim: 'Çalışan',
        sekme: 'Onay Geçmişi',
        aciklama: 'Geçmiş talepleri ay, yıl ve duruma göre inceler, onaylanan ek mesaileri dosya olarak alırsınız.',
        adimlar: [
          'Onay Geçmişi sekmesini açın.',
          'Ay ve Yıl alanlarından dönemi seçin (Tümü ile süzgeci kaldırabilirsiniz).',
          'Durum sayılarına (Onay Beklemede, Onaylandı, Reddedildi, İptal Edildi) bakın ve gerekirse duruma göre süzün.',
          'Bir talebe dokunarak ayrıntısını açın.',
          'Excel dosyası almak için Dışa Aktar düğmesine dokunun.',
        ],
        sonuc: 'Seçilen döneme ait kayıtlar listelenir; Dışa Aktar onaylanan ek mesaileri dosya olarak verir.',
        notlar: [
          'Onaylanmış kayıt yoksa "dışa aktarılacak veri yok" uyarısı görünür.',
          'Kayıt yoksa "Ek mesai girişi yok" veya "Bu durumda ek mesai talebi yok" yazar.',
        ],
      },
    ],

    sss: [
      {
        soru: 'Onaylanan ek mesai girişimi neden düzenleyemiyorum?',
        cevap: 'Onaylanmış girişler düzenlenemez ve silinemez. Bir hata varsa yöneticinize veya İK birimine başvurun.',
      },
      {
        soru: 'Ek mesai girerken neden "izinli saatleriniz var" uyarısı alıyorum?',
        cevap: 'Seçtiğiniz tarihte izinli olduğunuz saatler vardır; izinli saatlere ek mesai girilemez. Saat aralığını izin dışındaki saatlere göre değiştirin.',
      },
      {
        soru: 'Yıllık kotamı nereden görürüm?',
        cevap: 'Yeni Ek Mesai Girişi formunun en üstündeki "Bu yıl kullanılan ek mesai" kutusunda kullanılan ve kalan süre yazar.',
      },
      {
        soru: 'Bir kayıt reddedildi, ne yapmalıyım?',
        cevap: 'Ayrıntı penceresinden onay akışındaki açıklamayı okuyun; Ek Mesai Girişini Düzenle ile düzeltip yeniden gönderebilir veya kaydı silebilirsiniz.',
      },
    ],

    ipuclari: [
      'Aynı talepler web\'de Kişisel › Ek Mesailerim sayfasında da görünür.',
      'Birden çok günü tek girişte toplayın: Tarihleri Seç penceresinde ilk günün saatlerini girince alttaki günlere kolayca uygulayabilirsiniz.',
      'Gece yarısını geçen mesailerde bitiş saatini ertesi güne uzanacak şekilde girin; önizleme bunu belirtir.',
      'Alt çubuktaki + düğmesiyle yeni ek mesai girişini Ek Mesailerim\'e girmeden başlatabilirsiniz.',
    ],
  },
]
