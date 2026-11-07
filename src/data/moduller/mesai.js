// Mesai Takibi (giriş-çıkış / devam) modülü
export default [
  // ───────────────────────────── YÖNETİM › MESAİ TAKİBİ ─────────────────────────────
  {
    id: 'mesai-takibi',
    grup: 'yonetim',
    sira: 40,
    baslik: 'Mesai Takibi',
    menu: 'Yönetim › Mesai Takibi',
    href: '/attendance-management',
    kim: 'parla',
    ozet:
      'Çalışanların giriş-çıkış kayıtlarını, QR kodlarını, ev konumlarını, kullanılan cihazları ve mesai düzeltme taleplerini tek ekrandan yönettiğiniz sayfadır. Yöneticiler ve İK kullanır.',

    ekranlar: [
      { sekme: null, aciklama: 'Sayfa açıldığında üstte QR Yönetimi, Sabit QR\'lar, Mesailer, Ev Konumları, Cihazlar ve Düzeltme Talepleri sekmeleri görünür.' },
      { sekme: 'QR Yönetimi', aciklama: 'Giriş QR ve Çıkış QR seçenekleriyle, çalışanların okutacağı anlık QR kodunun gösterildiği ekran. Tarayıcı konum izni yoksa "Yeniden İzin İste" uyarısı çıkar.' },
      { sekme: "Sabit QR'lar", aciklama: 'Kapıya, girişe asılabilecek kalıcı QR kodlarının listesi: Ad, Tür, Geçerlilik, Tolerans, Durum, Oluşturan, Oluşturulma Tarihi.' },
      { sekme: 'Mesailer > Günlük Mesailer', aciklama: 'Seçilen tarih aralığındaki giriş-çıkış kayıtları; üstte Toplam Gün, Ortalama Çalışma, Geç Kalış ve Eksik Gün kartları.' },
      { sekme: 'Mesailer > Ekip Mesaileri > Mesai Takvimi', aciklama: 'Ekibin günlük çalışma sürelerini hafta, ay veya çeyrek görünümünde renkli bir takvim olarak gösterir.' },
      { sekme: 'Mesailer > Ekip Mesaileri > Mesai Bakiyeleri', aciklama: 'Ay başından bugüne her çalışanın planlı, kayıtlı, geç ve kayıtsız günlerini, beklenen ve çalışılan saatini ve bakiyesini gösterir.' },
      { sekme: 'Ev Konumları > Konumlar', aciklama: 'Çalışanların uzaktan giriş için tanımladığı ev konumlarının listesi (sürüm, koordinat, tanımlanma tarihi).' },
      { sekme: 'Ev Konumları > Konum Değişim Talepleri > Bekleyen Talepler', aciklama: 'Çalışanların ev konumunu değiştirmek için gönderdiği ve onay bekleyen talepler.' },
      { sekme: 'Cihazlar > Yasaklı Cihazlar', aciklama: 'Birden fazla hesapla kullanıldığı için okutmaya kapatılan cihazlar.' },
      { sekme: 'Cihazlar > Eskiden Yasaklı', aciklama: 'Yasağı kaldırılmış cihazlar; kaldırılma tarihi ve kaldırma notuyla birlikte.' },
      { sekme: 'Cihazlar > Tüm Cihazlar', aciklama: 'QR okutmada kullanılmış bütün cihazlar ve durumları.' },
      { sekme: 'Cihazlar > Çalışan Cihazları', aciklama: 'Çalışan bazında kullanılan cihaz sayısı, yasaklı cihaz sayısı ve son okutma bilgisi.' },
      { sekme: 'Düzeltme Talepleri', aciklama: 'Çalışanların hatalı ya da eksik giriş-çıkış kayıtları için gönderdiği düzeltme talepleri; Tümü, Bekleyen, Onaylanan, Reddedilen ve İptal sayaçlarıyla.' },
      { sekme: 'Düzeltme Talepleri > Bekleyen', aciklama: 'Onayınızı bekleyen düzeltme talepleri.' },
    ],

    bolumler: [
      {
        baslik: 'Günlük mesai durumları',
        metin: 'Günlük Mesailer ve Mesai Takvimi\'nde her kayıt bir durumla gösterilir:',
        maddeler: [
          'Zamanında: Çalışan, çalışma saatinin başlangıcında veya öncesinde giriş yapmış.',
          'Geç: Giriş, çalışma saatinin başlangıcından sonra yapılmış.',
          'Eksik (çıkış yok): Giriş var ama çıkış okutulmamış.',
          'Kayıtsız: Planlı bir iş günü olduğu hâlde hiç giriş-çıkış kaydı yok.',
          'İzinli: O gün onaylı bir izin var.',
          'Plansız Çalışma: Vardiyası veya çalışma saati tanımı olmayan bir günde çalışılmış.',
          'Plan Yok: O gün için vardiya veya çalışma saati tanımı yok.',
        ],
      },
      {
        baslik: 'Giriş tipleri',
        metin: 'Günlük Mesailer listesindeki "Giriş Tipi" sütunu kaydın nasıl oluştuğunu gösterir:',
        maddeler: [
          'QR: Çalışan ekrandaki anlık QR\'ı veya sabit QR\'ı telefonuyla okuttu.',
          'Uzaktan: Çalışan, tanımlı ev konumundayken "Uzaktan Giriş" ile kayıt oluşturdu.',
          'Yönetici: Kayıt yönetici tarafından manuel mesai girişiyle eklendi.',
        ],
      },
      {
        baslik: 'Düzeltme talebi durumları',
        maddeler: [
          'Beklemede: Talep onay zincirindeki sıradaki onaylayıcıda bekliyor ("Mevcut Onaylayan" sütununda görünür).',
          'Onaylandı: Talep kabul edildi, mesai kaydı istenen saatlerle güncellendi.',
          'Reddedildi: Talep kabul edilmedi, kayıt değişmedi.',
          'İptal: Çalışan talebi onaylanmadan geri çekti.',
        ],
      },
      {
        baslik: 'Mesai bakiyesi nasıl hesaplanır?',
        metin:
          'Bakiye ayın başından bugüne kadar hesaplanır. Beklenen saat, planlı ve izinli olmayan günlerin plan süresidir (mola düşülür). Çalışılan saatten beklenen saat çıkarılır; fazla çalışma "+", eksik çalışma "−" olarak gösterilir. Örnek: Ali Öztürk 40sa beklenen, 40sa 27dk çalışılan → +27dk.',
      },
    ],

    islemler: [
      // ── QR Yönetimi
      {
        baslik: 'Giriş veya çıkış QR kodunu ekranda gösterme',
        kim: 'Yönetici',
        sekme: 'QR Yönetimi',
        aciklama: 'Ofis girişindeki bir ekranda veya tablette, çalışanların telefonla okutacağı anlık QR kodunu gösterir. Kod belirli aralıklarla kendiliğinden yenilenir, böylece fotoğrafı çekilip başka yerden okutulamaz.',
        adimlar: [
          'Mesai Takibi sayfasında QR Yönetimi sekmesini açın.',
          'Sabah girişleri için "Giriş QR", akşam çıkışları için "Çıkış QR" seçeneğini seçin.',
          'Tarayıcı konum izni isterse izin verin.',
          'Ekranda beliren QR kodunu çalışanların görebileceği şekilde açık bırakın.',
        ],
        sonuc: 'Çalışanlar kodu okuttuğunda giriş veya çıkış kaydı oluşur ve Günlük Mesailer listesine düşer.',
        notlar: [
          'Konum izni reddedilmişse "Konum izni gerekli" uyarısı görünür. Adres çubuğundaki kilit simgesinden siteye konum izni verip "Yeniden İzin İste" butonuna tıklayın.',
          'Aynı kod daha önce kullanıldıysa yeniden okutulamaz.',
        ],
      },
      {
        baslik: 'Konum iznini yeniden isteme',
        kim: 'Yönetici',
        sekme: 'QR Yönetimi',
        aciklama: 'Tarayıcı konum iznini reddettiyseniz QR kodu gösterilemez; izni yeniden istemek için kullanılır.',
        adimlar: [
          'Adres çubuğundaki kilit simgesine tıklayın ve konum iznini "İzin ver" yapın.',
          'Sayfadaki "Yeniden İzin İste" butonuna tıklayın.',
        ],
        sonuc: 'İzin verildiyse QR kodu ekranda görünür.',
      },

      // ── Sabit QR'lar
      {
        baslik: 'Sabit QR\'ları listeleme ve filtreleme',
        kim: 'Yönetici',
        sekme: "Sabit QR'lar",
        aciklama: 'Oluşturulmuş tüm kalıcı QR kodlarını görür, Durum filtresiyle yalnız aktif veya pasif olanları listelersiniz.',
        adimlar: [
          "Sabit QR'lar sekmesini açın.",
          'Üstteki "Durum" filtresinden Aktif veya Pasif seçin.',
          'Listede Ad, Tür, Geçerlilik, Tolerans, Durum, Oluşturan ve Oluşturulma Tarihi sütunlarını inceleyin.',
        ],
        sonuc: 'Filtreye uyan sabit QR\'lar sayfalı olarak listelenir (ör. "ataşehir – Giriş ve Çıkış – Sınırsız – 100 m – Aktif").',
      },
      {
        baslik: 'Yeni sabit QR oluşturma',
        kim: 'Yönetici',
        sekme: "Sabit QR'lar",
        aciklama: 'Ofis kapısına veya şube girişine asılacak, ekran gerektirmeyen kalıcı bir QR kodu oluşturur. Kod yalnız belirlediğiniz konumun çevresinde okutulabilir.',
        adimlar: [
          '"Yeni Sabit QR" butonuna tıklayın.',
          'QR\'a ayırt edici bir ad verin (ör. "Ataşehir Ofis Giriş").',
          'Türünü seçin: yalnız giriş, yalnız çıkış veya giriş ve çıkış.',
          'Konumu haritadan veya mevcut konumunuzdan belirleyin ve tolerans mesafesini (metre) girin.',
          'Geçerlilik süresini seçin (sınırsız veya belirli gün sayısı).',
          'Kaydedin; oluşan QR\'ı yazdırıp ilgili noktaya asın.',
        ],
        alanlar: [
          { ad: 'Ad', aciklama: 'QR\'ın listede görünecek adı.', zorunlu: true },
          { ad: 'Tür', aciklama: 'Giriş, Çıkış veya Giriş ve Çıkış.', zorunlu: true },
          { ad: 'Konum', aciklama: 'QR\'ın asılacağı yerin enlem/boylam bilgisi.', zorunlu: true },
          { ad: 'Tolerans', aciklama: 'Konumdan kaç metre uzakta okutulabileceği (ör. 100 m). Varsayılan değer otomatik gelir.', zorunlu: false },
          { ad: 'Geçerlilik', aciklama: 'Sınırsız ya da belirtilen gün sayısı kadar geçerli.', zorunlu: false },
        ],
        sonuc: 'Sabit QR "Aktif" durumda listeye eklenir; çalışanlar okuttuğunda giriş/çıkış kaydı oluşur.',
        notlar: ['Tolerans alanının dışında okutulan QR kabul edilmez.'],
      },
      {
        baslik: 'Sabit QR\'ı düzenleme',
        kim: 'Yönetici',
        sekme: "Sabit QR'lar",
        aciklama: 'Mevcut bir sabit QR\'ın adını, türünü, konumunu, toleransını veya geçerliliğini değiştirir.',
        adimlar: [
          'Listede ilgili satırın İşlemler sütunundaki düzenleme simgesine tıklayın.',
          'Değiştirmek istediğiniz alanları güncelleyin.',
          'Kaydedin.',
        ],
        sonuc: 'Değişiklikler kaydedilir; yeni okutmalar güncel ayarlara göre kontrol edilir.',
      },
      {
        baslik: 'Sabit QR\'ı aktif / pasif yapma',
        kim: 'Yönetici',
        sekme: "Sabit QR'lar",
        aciklama: 'Bir sabit QR\'ı silmeden geçici olarak kullanıma kapatır veya yeniden açar.',
        adimlar: [
          'İlgili satırın İşlemler sütunundaki aktif/pasif düğmesini kullanın.',
          'Onay penceresi çıkarsa onaylayın.',
        ],
        sonuc: 'Durum sütunu "Aktif" veya "Pasif" olarak güncellenir. Pasif QR okutulamaz.',
      },
      {
        baslik: 'Sabit QR\'ı silme',
        kim: 'Yönetici',
        sekme: "Sabit QR'lar",
        aciklama: 'Artık kullanılmayacak bir sabit QR\'ı listeden kaldırır.',
        adimlar: [
          'İlgili satırın İşlemler sütunundaki silme simgesine tıklayın.',
          'Onay penceresinde silmeyi onaylayın.',
        ],
        sonuc: 'QR listeden kaldırılır ve bir daha okutulamaz. Daha önce bu QR ile oluşan mesai kayıtları silinmez.',
        notlar: ['Geçici olarak kapatmak istiyorsanız silmek yerine pasif yapın.'],
      },

      // ── Mesailer > Günlük Mesailer
      {
        baslik: 'Günlük mesaileri görüntüleme ve filtreleme',
        kim: 'Yönetici',
        sekme: 'Mesailer > Günlük Mesailer',
        aciklama: 'Ekibinizin seçilen tarih aralığındaki giriş-çıkış saatlerini, çalışılan süreleri ve durumlarını listeler.',
        adimlar: [
          'Mesailer sekmesinde Günlük Mesailer alt sekmesini açın.',
          'Sol üstteki tarih alanlarından başlangıç ve bitiş tarihini seçin.',
          'İsterseniz "Çalışan" listesinden bir veya birden fazla kişi seçin.',
          'Sağdaki Tümü / Zamanında / Geç / Eksik seçeneklerinden biriyle listeyi daraltın.',
          'Listeyi güncellemek için "Yenile" butonuna tıklayın.',
        ],
        sonuc: 'Üstteki kartlarda Toplam Gün, Ortalama Çalışma, Geç Kalış ve Eksik Gün özetlenir; altta Personel No, Çalışan, Tarih, Giriş, Çıkış, Çalışılan, Giriş Tipi, QR ve Durum sütunları listelenir.',
      },
      {
        baslik: 'Mesai kaydının konumunu görüntüleme',
        kim: 'Yönetici',
        sekme: 'Mesailer > Günlük Mesailer',
        aciklama: 'Bir giriş-çıkış kaydının hangi konumdan yapıldığını kontrol eder.',
        adimlar: [
          'İlgili satırın İşlemler sütunundaki konum (harita iğnesi) simgesine tıklayın.',
          'Açılan pencerede giriş ve çıkış konumlarını inceleyin.',
        ],
        sonuc: 'Kaydın konumu haritada gösterilir.',
      },
      {
        baslik: 'Günlük mesaileri dışa aktarma',
        kim: 'Yönetici',
        sekme: 'Mesailer > Günlük Mesailer',
        aciklama: 'Seçilen tarih aralığı ve çalışanlara ait mesai raporunu dosya olarak indirir.',
        adimlar: [
          'Tarih aralığını ve gerekirse çalışanları seçin.',
          '"Dışa Aktar" butonuna tıklayın.',
          'Açılan pencerede raporda yer alacak sütunları, hafta sonlarının dahil edilip edilmeyeceğini ve özet eklenip eklenmeyeceğini seçin.',
          'Dosya biçimini seçip indirmeyi başlatın.',
        ],
        alanlar: [
          { ad: 'Tarih aralığı', aciklama: 'Raporun başlangıç ve bitiş tarihi.', zorunlu: true },
          { ad: 'Çalışanlar', aciklama: 'Boş bırakılırsa yetkiniz dahilindeki tüm çalışanlar.', zorunlu: false },
          { ad: 'Sütunlar', aciklama: 'Rapora eklenecek bilgiler.', zorunlu: false },
          { ad: 'Hafta sonlarını dahil et', aciklama: 'Hafta sonu günleri de rapora yazılır.', zorunlu: false },
          { ad: 'Özet ekle', aciklama: 'Kişi bazında toplamlar eklenir.', zorunlu: false },
          { ad: 'Dosya biçimi', aciklama: 'Excel veya PDF.', zorunlu: false },
        ],
        sonuc: 'Rapor dosyası bilgisayarınıza iner.',
        notlar: ['Seçeneklerin bir kısmı yetkinize bağlı olarak görünür.'],
      },

      // ── Mesailer > Ekip Mesaileri
      {
        baslik: 'Ekip mesai takvimini görüntüleme',
        kim: 'Yönetici',
        sekme: 'Mesailer > Ekip Mesaileri > Mesai Takvimi',
        aciklama: 'Ekipteki herkesin günlük çalışma süresini tek bakışta, renklendirilmiş takvim üzerinde gösterir.',
        adimlar: [
          'Mesailer > Ekip Mesaileri > Mesai Takvimi sekmesini açın.',
          'Üstten Hafta, Ay veya Çeyrek görünümünü seçin.',
          'Ok butonlarıyla dönemler arasında gezinin, "Bugün" ile güncel döneme dönün.',
          'Gerekirse "Durum" ve "Çalışan" filtrelerini kullanın.',
          'Gün hücresinin üzerine gelerek giriş-çıkış ayrıntısını görün.',
        ],
        sonuc: 'Her satırda çalışanın adı ve unvanı, her hücrede o günün çalışma süresi (ör. "8 sa 25 dk") görünür. Altta renklerin anlamı açıklanır: Zamanında, Geç, Eksik (çıkış yok), Kayıtsız, İzinli, Plansız Çalışma, Plan Yok.',
      },
      {
        baslik: 'Çalışanların takvim rengini belirleme',
        kim: 'Yönetici',
        sekme: 'Mesailer > Ekip Mesaileri > Mesai Takvimi',
        aciklama: 'Ekip takviminde çalışanları birbirinden kolay ayırt etmek için her çalışana bir renk atar.',
        adimlar: [
          'Takvimde çalışanın adına veya renk alanına tıklayın.',
          'Listeden bir renk seçin.',
          'Kaydedin.',
        ],
        sonuc: 'Seçilen renk, o çalışanın ekip takvimlerindeki görünümüne uygulanır. Rengi kaldırarak varsayılana dönebilirsiniz.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },
      {
        baslik: 'Mesai bakiyelerini görüntüleme',
        kim: 'Yönetici',
        sekme: 'Mesailer > Ekip Mesaileri > Mesai Bakiyeleri',
        aciklama: 'Ay başından bugüne kim fazla, kim eksik çalıştı sorusunu yanıtlar.',
        adimlar: [
          'Mesailer > Ekip Mesaileri > Mesai Bakiyeleri sekmesini açın.',
          '"Çalışan adı veya numarası" alanına arama yazın ya da "Departman" seçin.',
          '"Yenile" butonuna tıklayın.',
        ],
        sonuc: 'Sicil No, Çalışan, Planlı Gün, Kayıtlı Gün, Geç Gün, Kayıtsız Gün, Beklenen Saat, Çalışılan Saat ve Bakiye sütunları listelenir (ör. Parla Yılmaz: 40sa beklenen, 31sa 17dk çalışılan, −8sa 43dk).',
      },
      {
        baslik: 'Manuel mesai girişi yapma',
        kim: 'Yönetici',
        sekme: 'Mesailer > Ekip Mesaileri > Mesai Bakiyeleri',
        aciklama: 'QR okutulamadığı durumlarda (saha çalışması, turnike arızası vb.) bir veya birden fazla çalışan için elle giriş-çıkış kaydı ekler.',
        adimlar: [
          '"Manuel Mesai Girişi" butonuna tıklayın.',
          'Çalışan ya da çalışanları seçin.',
          'Tarihi seçin; sistem seçilen kişilerin o gün için mevcut kaydı olup olmadığını kontrol edip sizi uyarır.',
          'Giriş ve çıkış saatini girin.',
          'Gerekçeyi yazın ve kaydedin.',
        ],
        alanlar: [
          { ad: 'Çalışanlar', aciklama: 'Kaydın ekleneceği bir veya birden fazla kişi.', zorunlu: true },
          { ad: 'Tarih', aciklama: 'Kaydın ait olduğu gün.', zorunlu: true },
          { ad: 'Giriş Saati', aciklama: 'Ör. 08:45.', zorunlu: true },
          { ad: 'Çıkış Saati', aciklama: 'Ör. 18:00.', zorunlu: false },
          { ad: 'Gerekçe', aciklama: 'Ör. "Turnike arızası nedeniyle kayıt alınamadı."', zorunlu: false },
        ],
        sonuc: 'Kayıt Günlük Mesailer listesine "Yönetici" giriş tipiyle eklenir ve bakiyeler yeniden hesaplanır.',
      },

      // ── Ev Konumları
      {
        baslik: 'Çalışanların ev konumlarını görüntüleme',
        kim: 'Yönetici',
        sekme: 'Ev Konumları > Konumlar',
        aciklama: 'Uzaktan giriş için kullanılan ev konumlarını ve geçmiş sürümlerini listeler.',
        adimlar: [
          'Ev Konumları > Konumlar sekmesini açın.',
          'Yalnız son konumları görmek için "Yalnızca güncel sürüm" seçeneğini işaretli bırakın; geçmiş konumları da görmek için kaldırın.',
          'Personel No, Çalışan, Departman, Sürüm, Koordinat ve Tanımlanma sütunlarını inceleyin.',
          'Konumu haritada görmek için İşlemler sütunundaki simgeye tıklayın.',
        ],
        sonuc: 'Çalışan başına konum ve sürüm bilgisi listelenir (ör. Ali Öztürk – 1. sürüm – 41.004200, 29.045300).',
      },
      {
        baslik: 'Ev konumu değişim talebini onaylama',
        kim: 'Yönetici',
        sekme: 'Ev Konumları > Konum Değişim Talepleri > Bekleyen Talepler',
        aciklama: 'Taşınan veya konumunu güncellemek isteyen çalışanın talebini kabul eder.',
        adimlar: [
          'Konum Değişim Talepleri > Bekleyen Talepler sekmesini açın.',
          'Talep Tarihi, Taşınma ve Gerekçe bilgilerini inceleyin.',
          'İşlemler sütunundaki onay butonuna tıklayın.',
          'İsterseniz bir değerlendirme notu yazıp onaylayın.',
        ],
        alanlar: [{ ad: 'Not', aciklama: 'Çalışana iletilecek açıklama.', zorunlu: false }],
        sonuc: 'Talep "Onaylandı" durumuna geçer, çalışanın yeni konumu bir sonraki sürüm olarak kaydedilir ve uzaktan girişler bu konuma göre kontrol edilir.',
      },
      {
        baslik: 'Ev konumu değişim talebini reddetme',
        kim: 'Yönetici',
        sekme: 'Ev Konumları > Konum Değişim Talepleri > Bekleyen Talepler',
        aciklama: 'Uygun bulunmayan konum değişikliğini geri çevirir.',
        adimlar: [
          'Bekleyen Talepler listesinde ilgili satırı bulun.',
          'İşlemler sütunundaki ret butonuna tıklayın.',
          'Onay penceresinde reddetmeyi onaylayın.',
        ],
        sonuc: 'Talep "Reddedildi" durumuna geçer; çalışanın mevcut ev konumu değişmez.',
      },
      {
        baslik: 'Konum değişim taleplerini duruma göre listeleme',
        kim: 'Yönetici',
        sekme: 'Ev Konumları > Konum Değişim Talepleri',
        aciklama: 'Geçmiş talepleri incelemek için Bekleyen, Onaylanan, Reddedilen ve Tüm Talepler sekmeleri arasında geçiş yapılır.',
        adimlar: [
          'Konum Değişim Talepleri sekmesini açın.',
          'İlgili alt sekmeyi seçin (Bekleyen Talepler, Onaylanan Talepler, Reddedilen Talepler, Tüm Talepler).',
        ],
        sonuc: 'Seçilen duruma ait talepler listelenir. Eşleşen talep yoksa "Bu filtreyle eşleşen talep yok." mesajı görünür.',
      },

      // ── Cihazlar
      {
        baslik: 'Yasaklı cihazları görüntüleme',
        kim: 'Yönetici',
        sekme: 'Cihazlar > Yasaklı Cihazlar',
        aciklama: 'Aynı telefonla birden fazla hesabın QR okutması gibi şüpheli kullanımlarda sistem cihazı otomatik olarak yasaklar. Bu ekranda bu cihazları görürsünüz.',
        adimlar: [
          'Cihazlar > Yasaklı Cihazlar sekmesini açın.',
          'Yasaklanma Tarihi, Cihazı Önce Kullanan, Yasağı Tetikleyen, Cihaz Kodu, Hesap Sayısı, Okutma ve Son Okutan sütunlarını inceleyin.',
        ],
        sonuc: 'Okutmaya kapatılmış cihazlar listelenir. Yoksa "Yasaklı cihaz yok." mesajı görünür.',
      },
      {
        baslik: 'Cihaz yasağını kaldırma',
        kim: 'Yönetici',
        sekme: 'Cihazlar > Yasaklı Cihazlar',
        aciklama: 'Yanlışlıkla ya da haklı bir nedenle (ör. çalışanın telefonunu kısa süre bir iş arkadaşına vermesi) yasaklanan cihazı yeniden kullanıma açar.',
        adimlar: [
          'İlgili cihazın İşlemler sütunundaki yasağı kaldırma butonuna tıklayın.',
          'Açılan pencereye kaldırma nedenini not olarak yazın.',
          'Onaylayın.',
        ],
        alanlar: [{ ad: 'Kaldırma Notu', aciklama: 'Yasağın neden kaldırıldığı.', zorunlu: false }],
        sonuc: 'Cihaz yeniden QR okutabilir ve "Eskiden Yasaklı" listesine kaldırılma tarihi ve notuyla taşınır.',
      },
      {
        baslik: 'Eskiden yasaklı cihazları görüntüleme',
        kim: 'Yönetici',
        sekme: 'Cihazlar > Eskiden Yasaklı',
        aciklama: 'Yasağı kaldırılmış cihazların geçmişini gösterir.',
        adimlar: ['Cihazlar > Eskiden Yasaklı sekmesini açın.', 'Kaldırılma ve Kaldırma Notu sütunlarını inceleyin.'],
        sonuc: 'Yasağı kaldırılmış cihazlar listelenir. Yoksa "Daha önce yasaklanmış cihaz yok." mesajı görünür.',
      },
      {
        baslik: 'Tüm cihazları ve cihaz geçmişini görüntüleme',
        kim: 'Yönetici',
        sekme: 'Cihazlar > Tüm Cihazlar',
        aciklama: 'QR okutmada kullanılmış bütün cihazları ve her cihazın hangi hesaplarla, ne zaman kullanıldığını gösterir.',
        adimlar: [
          'Cihazlar > Tüm Cihazlar sekmesini açın.',
          'Cihaz Kodu, Hesap Sayısı, Okutma, Son Okutan ve Durum sütunlarını inceleyin.',
          'Ayrıntı için İşlemler sütunundaki simgeye tıklayın; cihazın okutma geçmişi zaman sırasıyla açılır.',
        ],
        sonuc: 'Cihaz listesi ve seçilen cihazın zaman çizelgesi görünür. Kayıt yoksa "Kayıtlı cihaz yok." mesajı çıkar.',
      },
      {
        baslik: 'Çalışan cihazlarını görüntüleme',
        kim: 'Yönetici',
        sekme: 'Cihazlar > Çalışan Cihazları',
        aciklama: 'Her çalışanın kaç farklı cihazdan okutma yaptığını ve yasaklı cihazı olup olmadığını gösterir.',
        adimlar: [
          'Cihazlar > Çalışan Cihazları sekmesini açın.',
          'Çalışan, Cihaz Sayısı, Yasaklı Cihaz, Okutma ve Son Okutma sütunlarını inceleyin.',
          'Çalışanın kullandığı cihazların listesi için İşlemler sütunundaki simgeye tıklayın.',
        ],
        sonuc: 'Çalışanın kullandığı cihazlar ayrıntılı olarak listelenir. Kayıt yoksa "Cihazdan okutma yapmış çalışan yok." mesajı görünür.',
      },

      // ── Düzeltme Talepleri
      {
        baslik: 'Düzeltme taleplerini listeleme, arama ve filtreleme',
        kim: 'Yönetici',
        sekme: 'Düzeltme Talepleri',
        aciklama: 'Çalışanların gönderdiği mesai düzeltme taleplerini durumlarına göre görüntüler.',
        adimlar: [
          'Düzeltme Talepleri sekmesini açın.',
          'Tümü, Bekleyen, Onaylanan, Reddedilen veya İptal sayaçlarından birine tıklayın.',
          'Arama alanı ve tarih/çalışan filtreleriyle listeyi daraltın.',
          'Tüm filtreleri sıfırlamak için "Filtreleri Temizle" butonuna tıklayın.',
          'Talebin ayrıntısı için satırdaki görüntüleme simgesine tıklayın.',
        ],
        sonuc: 'Çalışan, Tarih, Kayıttaki Saat, İstenen Saat, Gerekçe, Durum ve Mevcut Onaylayan sütunları listelenir (ör. Ali Öztürk – 28.10.2026 – 08:45–(çıkış yok) → 08:45–18:15 – "Çıkışta kart okutmayı unuttum.").',
      },
      {
        baslik: 'Düzeltme talebini onaylama veya reddetme',
        kim: 'Yönetici',
        sekme: 'Düzeltme Talepleri > Bekleyen',
        aciklama: 'Çalışanın eksik veya hatalı giriş-çıkış kaydını düzeltme isteğine karar verirsiniz.',
        adimlar: [
          'Bekleyen sayacına tıklayın.',
          'Kayıttaki Saat ile İstenen Saat\'i ve Gerekçe\'yi karşılaştırın.',
          'İşlemler sütunundaki onay veya ret butonuna tıklayın.',
          'Gerekirse bir açıklama yazın ve kararınızı onaylayın.',
        ],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Kararınıza ilişkin not; çalışan görür.', zorunlu: false }],
        sonuc: 'Onay akışında başka adım varsa talep bir sonraki onaylayıcıya düşer ve "Beklemede" kalır. Son onaylayıcı onayladığında talep "Onaylandı" olur ve mesai kaydı istenen saatlerle güncellenir. Reddedilirse "Reddedildi" olur, kayıt değişmez.',
        notlar: ['Yalnızca "Mevcut Onaylayan" sütununda pozisyonunuz görünen talepleri karara bağlayabilirsiniz.'],
      },
      {
        baslik: 'Düzeltme taleplerini toplu onaylama / reddetme',
        kim: 'Yönetici',
        sekme: 'Düzeltme Talepleri > Bekleyen',
        aciklama: 'Birden fazla bekleyen talebi tek seferde karara bağlar.',
        adimlar: [
          '"Toplu İşlem" butonuna tıklayın.',
          'Listede karar vermek istediğiniz talepleri işaretleyin.',
          'Onayla veya Reddet seçeneğini seçin, gerekirse açıklama yazın.',
          'İşlemi onaylayın.',
        ],
        sonuc: 'Seçilen taleplerin her biri tek tek onaylanmış/reddedilmiş gibi işlenir; akışta sonraki adım varsa sıradaki onaylayıcıya düşer.',
      },
      {
        baslik: 'Düzeltme taleplerini dışa aktarma',
        kim: 'Yönetici',
        sekme: 'Düzeltme Talepleri',
        aciklama: 'Filtrelediğiniz düzeltme taleplerini dosya olarak indirir.',
        adimlar: [
          'Durum, tarih, çalışan ve arama filtrelerini ayarlayın.',
          '"Dışa Aktar" butonuna tıklayın.',
          'Dosya biçimini seçin.',
        ],
        sonuc: 'Filtreye uyan talepler Excel veya PDF dosyası olarak iner.',
      },

      // ── Ayarlar (çalışma saatleri, eksik günler)
      {
        baslik: 'Çalışma saati türü tanımlama',
        kim: 'İK',
        sekme: null,
        aciklama: 'Birimde geçerli olacak standart çalışma saatlerini (ör. "Merkez Ofis 08:30–17:30") tanımlar. Geç kalma, eksik gün ve bakiye hesapları bu tanıma göre yapılır.',
        adimlar: [
          'Ayarlar › Organizasyon Şeması sayfasında birimin kutusuna tıklayıp Detayları Görüntüle seçeneğini seçin; İzin Yönetimi › Çalışma Saati Türleri sekmesinde Yeni Tür Ekle butonuna tıklayın.',
          'Ad, başlangıç ve bitiş saatini girin.',
          'Varsa mola başlangıç ve bitiş saatini girin.',
          'Çalışma günlerini seçin (ör. Pazartesi–Cuma) ve birimi belirleyin.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Ad', aciklama: 'Ör. "Merkez Ofis Standart".', zorunlu: true },
          { ad: 'Başlangıç Saati', aciklama: 'Ör. 08:30.', zorunlu: true },
          { ad: 'Bitiş Saati', aciklama: 'Ör. 17:30.', zorunlu: true },
          { ad: 'Mola Başlangıç / Bitiş', aciklama: 'Mola süresi beklenen saatten düşülür.', zorunlu: false },
          { ad: 'Çalışma Günleri', aciklama: 'Haftanın hangi günleri çalışıldığı.', zorunlu: false },
          { ad: 'Açıklama', aciklama: 'Kısa not.', zorunlu: false },
          { ad: 'Birim', aciklama: 'Tanımın geçerli olacağı birim.', zorunlu: false },
        ],
        sonuc: 'Çalışma saati türü kaydedilir; aynı yerden düzenlenebilir veya silinebilir. Birden fazla çalışan seçildiğinde ortak çalışma saati türleri otomatik bulunur.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.', 'Bu ayar Mesai Takibi sayfasında değil, birimin İzin Yönetimi › Çalışma Saati Türleri sekmesinde yapılır; ayrıntılar için Organizasyon Birim Yönetimi – Modül Ayarları sayfasına bakın.'],
      },
      {
        baslik: 'Çalışma süresi ayarlarını belirleme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Günlük/haftalık çalışma süresi sınırları gibi kuralları kurum geneli, birim veya çalışan düzeyinde ayarlar. Alt düzeyde ayar yoksa üst düzeydeki ayar geçerli olur.',
        adimlar: [
          'Ayarlar › Organizasyon Şeması sayfasında birimin kutusuna tıklayıp Detayları Görüntüle seçeneğini seçin; Vardiya › Çalışma Süresi sekmesini açın ve kapsamı seçin (birim veya çalışan).',
          'Değiştirmek istediğiniz ayarı bulun ve değerini girin.',
          'Kaydedin. Ayarı kaldırmak için silme simgesini kullanın; bu durumda üst düzeydeki değer geçerli olur.',
        ],
        alanlar: [
          { ad: 'Kapsam', aciklama: 'Ayarın uygulanacağı birim veya çalışan.', zorunlu: true },
          { ad: 'Değer', aciklama: 'Ayarın yeni değeri.', zorunlu: true },
        ],
        sonuc: 'Ayar kaydedilir; bir çalışan için geçerli olan son değer ekranda görüntülenebilir.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.', 'Bu ayar Mesai Takibi sayfasında değil, birimin Vardiya › Çalışma Süresi sekmesinde yapılır; ayrıntılar için Organizasyon Birim Yönetimi – Modül Ayarları sayfasına bakın. Çalışma süresi kaynağı, yasal sınırlar ve geç kalma toleransı burada ayarlanır.'],
      },
      {
        baslik: 'Eksik gün nedenlerini tanımlama',
        kim: 'İK',
        sekme: null,
        aciklama: 'Çalışanın eksik günleri için kullanılacak nedenleri (ör. "Ücretsiz izin", "Devamsızlık", "Rapor") ve bu nedenin maaşı etkileyip etkilemediğini tanımlar.',
        adimlar: [
          'Ayarlar › Organizasyon Şeması sayfasında birimin kutusuna tıklayıp Detayları Görüntüle seçeneğini seçin; Bordro Yönetimi › Eksik Gün Nedenleri sekmesinde Yeni Neden Ekle butonuna tıklayın.',
          'Kod ve ad girin, gerekirse açıklama yazın.',
          '"Maaşı etkiler" seçeneğini durumuna göre işaretleyin.',
          'Birimi seçip kaydedin.',
        ],
        alanlar: [
          { ad: 'Kod', aciklama: 'Bordroya aktarılacak kısa kod.', zorunlu: true },
          { ad: 'Ad', aciklama: 'Ör. "Devamsızlık".', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Kısa not.', zorunlu: false },
          { ad: 'Maaşı etkiler', aciklama: 'İşaretliyse bu nedenle girilen eksik günler ücretten düşülür.', zorunlu: false },
          { ad: 'Birim', aciklama: 'Nedenin geçerli olacağı birim; alt birimler de görür.', zorunlu: false },
        ],
        sonuc: 'Neden kaydedilir; düzenlenebilir, silinebilir veya birime özel tüm tanımlar topluca kaldırılabilir.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.', 'Bu ayar Mesai Takibi sayfasında değil, birimin Bordro Yönetimi › Eksik Gün Nedenleri sekmesinde yapılır; ayrıntılar için Organizasyon Birim Yönetimi – Modül Ayarları sayfasına bakın.'],
      },
      {
        baslik: 'Çalışana eksik gün girme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Eksik gün Mesai Takibi sayfasından girilmez. Çalışanın eksik günü ve nedeni, bordro döneminin puantajında girilir; bu bilgi bordroda ve SGK bildiriminde kullanılır.',
        adimlar: [
          'Bordro Yönetimi sayfasında Puantaj sekmesini açın ve dönemi seçin.',
          'Soldaki listeden çalışanı seçin.',
          'Gün ve saat bölümünde Eksik Gün alanına gün sayısını girin.',
          'Eksik gün nedenini seçin.',
          'Bu çalışanı kaydet butonuyla kaydedin.',
        ],
        alanlar: [
          { ad: 'Eksik Gün', aciklama: 'Çalışılmayan gün sayısı.', zorunlu: false },
          { ad: 'Eksik gün nedeni', aciklama: 'Eksik gün varsa tanımlı nedenlerden biri seçilir.', zorunlu: false },
        ],
        sonuc: 'Eksik gün çalışanın o dönemki puantajına kaydedilir ve bordro hesaplamasında kullanılır.',
        notlar: [
          'Bu işlem yetkinize bağlı olarak görünür.',
          'Giriş-çıkış kayıtları eksik günü kendiliğinden yazmaz. Birimde “QR Mesai Kayıtlarını Puantaja Dahil Et” açıksa puantaj, mesai takibindeki kayıtsız günleri eksik günle karşılaştırır ve uyuşmazlığı gösterir.',
          'Onaylanan ücretsiz veya raporlu izinler puantaja kendiliğinden gelir; bu günleri ayrıca elle girmeyin.',
          'Tamamlanmış, onayda bekleyen veya hesaplanan dönemin puantajı salt okunurdur; kapanmış bir ay için Ek / Fark Bordrosu kullanılır.',
        ],
      },
    ],

    sss: [
      {
        soru: 'Çalışan QR\'ı okuttu ama kayıt oluşmadı, neden olabilir?',
        cevap: 'Telefonun konum izni kapalı olabilir, çalışan sabit QR\'ın tolerans mesafesinin dışında olabilir, kod daha önce kullanılmış olabilir ya da cihaz yasaklı olabilir. Cihazlar sekmesinden cihazın durumunu kontrol edin.',
      },
      {
        soru: 'Giriş Tipi sütununda "Yönetici" yazıyor, bu ne demek?',
        cevap: 'Kayıt QR veya uzaktan giriş ile değil, Manuel Mesai Girişi ile ya da onaylanan bir düzeltme talebiyle oluşturulmuş demektir.',
      },
      {
        soru: 'Bir cihaz neden yasaklanır?',
        cevap: 'Aynı cihazla birden fazla çalışan hesabından okutma yapıldığında sistem, başkası adına giriş yapılmasını önlemek için cihazı otomatik olarak kapatır.',
      },
      {
        soru: 'Bakiye neden eksi görünüyor?',
        cevap: 'Çalışanın ay başından bugüne çalıştığı süre, planlanan süreden azdır. Kayıtsız günler veya çıkışı eksik günler bakiyeyi düşürür; düzeltme talebi onaylandığında bakiye yeniden hesaplanır.',
      },
    ],

    ipuclari: [
      'Ofis girişlerinde ekran kullanmak istemiyorsanız sabit QR yazdırıp asın; tolerans mesafesini binanın büyüklüğüne göre ayarlayın.',
      'Ay sonunda Mesai Bakiyeleri sekmesini kontrol edip eksik kayıtları düzelttikten sonra bordro işlemlerine geçin.',
      'Bekleyen düzeltme taleplerini düzenli olarak karara bağlayın; bekleyen talepler bakiyeleri ve eksik gün hesaplarını etkiler.',
    ],
  },

  // ───────────────────────────── KİŞİSEL › MESAİLERİM ─────────────────────────────
  {
    id: 'mesailerim',
    grup: 'kisisel',
    sira: 40,
    baslik: 'Mesailerim',
    menu: 'Kişisel › Mesailerim',
    href: '/my-attendances',
    kim: 'ali',
    ozet:
      'Günlük giriş-çıkışınızı yaptığınız, çalışma sürelerinizi ve geçmiş mesailerinizi gördüğünüz, hatalı kayıtlar için düzeltme talebi gönderdiğiniz sayfadır. Tüm çalışanlar kullanır.',

    ekranlar: [
      { sekme: null, aciklama: 'Sayfa açıldığında Bugünkü Mesaim sekmesi görünür; üstte Bugünkü Mesaim ve Mesai Geçmişim sekmeleri yer alır.' },
      { sekme: 'Bugünkü Mesaim', aciklama: 'Bugünkü Giriş ve Çıkış saatiniz, Çalışılan Süre ve Son 7 Gün özeti; sağ üstte "Uzaktan Giriş" ve "Ev Adresim" butonları.' },
      { sekme: 'Mesai Geçmişim', aciklama: 'Geçmiş mesailerinizi takvim veya tablo olarak gösterir; altta renklerin anlamını açıklayan Durum Açıklaması bulunur.' },
    ],

    bolumler: [
      {
        baslik: 'Takvimdeki durumlar',
        metin: 'Mesai Geçmişim takviminde her gün aşağıdaki durumlardan biriyle renklendirilir:',
        maddeler: [
          'Zamanında: Mesaiye zamanında başladınız.',
          'Geç: Girişiniz çalışma saatinin başlangıcından sonra.',
          'Devam Ediyor: Giriş yaptınız, henüz çıkış yapmadınız (bugün).',
          'Tamamlanmamış: Giriş var ama çıkış yok (geçmiş bir gün).',
          'Düzeltme bekliyor: Bu gün için gönderdiğiniz düzeltme talebi onay bekliyor.',
          'Eksik: Planlı bir iş günü olduğu hâlde kaydınız yok.',
          'Hafta Sonu: Hafta sonu günü.',
          'Plan Yok: O gün için vardiya veya çalışma saati tanımı yok.',
          'Kayıt Yok: Henüz kayıt oluşmamış gün.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Bugünkü mesaiyi görüntüleme',
        kim: 'Çalışan',
        sekme: 'Bugünkü Mesaim',
        aciklama: 'Bugün saat kaçta giriş-çıkış yaptığınızı, ne kadar çalıştığınızı ve son bir haftalık özetinizi gösterir.',
        adimlar: [
          'Kişisel › Mesailerim sayfasını açın.',
          'Bugünkü Mesaim sekmesinde Giriş, Çıkış ve Çalışılan Süre kartlarını inceleyin.',
          'Son 7 Gün bölümünde her günün çalışma süresine bakın.',
        ],
        sonuc: 'Ör. Giriş 08:55 (Zamanında), Çıkış 18:10, Çalışılan Süre 9h 15m.',
      },
      {
        baslik: 'QR okutarak giriş veya çıkış yapma',
        kim: 'Çalışan',
        sekme: 'Bugünkü Mesaim',
        aciklama: 'Ofisteki ekranda gösterilen ya da girişe asılmış QR kodunu telefonunuzla okutarak mesainizi başlatır veya bitirirsiniz.',
        adimlar: [
          'Telefonunuzda DHR\'a giriş yapın ve tarayıcıya konum izni verin.',
          'Ofisteki QR kodunu telefonunuzun kamerasıyla okutun.',
          'Açılan sayfada giriş veya çıkış işlemini onaylayın.',
        ],
        sonuc: 'Kaydınız oluşur; Giriş veya Çıkış kartında saat görünür. Sabit QR\'da konumunuz QR\'ın tolerans mesafesinin içinde olmalıdır.',
        notlar: [
          'Aynı telefonla başka bir çalışanın hesabından okutma yapılırsa cihaz okutmaya kapatılabilir.',
          'Kullanılmış veya süresi dolmuş bir QR tekrar okutulamaz.',
        ],
      },
      {
        baslik: 'Uzaktan giriş / çıkış yapma',
        kim: 'Çalışan',
        sekme: 'Bugünkü Mesaim',
        aciklama: 'Evden çalıştığınız günlerde, QR okutmadan, tanımlı ev konumunuzdan mesainizi başlatır veya bitirirsiniz.',
        adimlar: [
          'Bugünkü Mesaim sekmesinde sağ üstteki "Uzaktan Giriş" butonuna tıklayın.',
          'Tarayıcı konum izni isterse izin verin.',
          'Giriş veya çıkış işlemini onaylayın.',
        ],
        sonuc: 'Konumunuz kayıtlı ev konumunuzla eşleşiyorsa kayıt oluşur ve yöneticinizin listesinde "Uzaktan" giriş tipiyle görünür.',
        notlar: ['Önce "Ev Adresim" ile ev konumunuzu tanımlamış olmanız gerekir.', 'Bu işlem yetkinize bağlı olarak görünür.'],
      },
      {
        baslik: 'Ev konumunu ilk kez tanımlama',
        kim: 'Çalışan',
        sekme: 'Bugünkü Mesaim',
        aciklama: 'Uzaktan giriş yapabilmek için evinizin konumunu sisteme kaydeder.',
        adimlar: [
          'Evinizdeyken "Ev Adresim" butonuna tıklayın.',
          'Tarayıcı konum izni isterse izin verin.',
          'Haritada gösterilen konumu kontrol edip kaydedin.',
        ],
        sonuc: 'Konumunuz "1. sürüm" olarak kaydedilir ve yöneticinizin Ev Konumları listesinde görünür.',
      },
      {
        baslik: 'Ev konumu değişim talebi gönderme',
        kim: 'Çalışan',
        sekme: 'Bugünkü Mesaim',
        aciklama: 'Taşındığınızda veya konumunuz hatalı kaydedildiğinde yeni konumunuzu onaya gönderirsiniz.',
        adimlar: [
          'Yeni adresinizdeyken "Ev Adresim" butonuna tıklayın.',
          'Konum değişikliği talep seçeneğini kullanın.',
          'Haritadaki yeni konumu kontrol edin ve gerekçenizi yazın (ör. "Kadıköy\'e taşındım.").',
          'Talebi gönderin.',
        ],
        alanlar: [
          { ad: 'Konum', aciklama: 'Bulunduğunuz yerden otomatik alınır.', zorunlu: true },
          { ad: 'Gerekçe', aciklama: 'Değişikliğin nedeni.', zorunlu: false },
        ],
        sonuc: 'Talep yöneticinizin Konum Değişim Talepleri > Bekleyen Talepler listesine "Beklemede" olarak düşer. Onaylanana kadar eski konumunuz geçerlidir.',
      },
      {
        baslik: 'Mesai geçmişini takvim veya tablo olarak görüntüleme',
        kim: 'Çalışan',
        sekme: 'Mesai Geçmişim',
        aciklama: 'Geçmiş günlerdeki giriş-çıkış ve çalışma sürelerinizi inceler.',
        adimlar: [
          'Mesai Geçmişim sekmesini açın.',
          'Sağ üstten "Takvim" veya "Tablo" görünümünü seçin.',
          'Takvimde yıl ve ay seçin; "Ay" veya "Yıl" görünümüne geçin.',
          'Tablo görünümünde tarih aralığı seçip listeyi daraltın.',
          'Bir güne tıklayarak o günün ayrıntısını görün.',
        ],
        sonuc: 'Her gün çalışma süresi ve durum rengiyle gösterilir (ör. 02 Kasım – 9h 25m – Zamanında).',
      },
      {
        baslik: 'Mesai düzeltme talebi oluşturma',
        kim: 'Çalışan',
        sekme: 'Mesai Geçmişim',
        aciklama: 'Çıkış okutmayı unuttuğunuz, turnike arızası gibi nedenlerle kaydınız eksik veya hatalı olduğunda doğru saatleri onaya gönderirsiniz.',
        adimlar: [
          'Mesai Geçmişim takviminde ilgili güne tıklayın.',
          'Açılan pencerede düzeltme talebi seçeneğini kullanın.',
          'Doğru giriş ve çıkış saatini girin.',
          'Gerekçenizi yazın (ör. "Çıkışta kart okutmayı unuttum.").',
          'Talebi gönderin.',
        ],
        alanlar: [
          { ad: 'Tarih', aciklama: 'Düzeltilecek gün; seçtiğiniz günden gelir.', zorunlu: true },
          { ad: 'Giriş Saati', aciklama: 'Ör. 08:45.', zorunlu: false },
          { ad: 'Çıkış Saati', aciklama: 'Ör. 18:15.', zorunlu: false },
          { ad: 'Gerekçe', aciklama: 'Düzeltmenin nedeni. Onaylayıcının hızlı karar verebilmesi için doldurmanız önerilir.', zorunlu: false },
        ],
        sonuc: 'Talep "Beklemede" durumuyla onay zincirindeki ilk onaylayıcıya (genellikle birim yöneticiniz) düşer. Takvimde o gün "Düzeltme bekliyor" olarak görünür. Onaylanınca kaydınız istenen saatlerle güncellenir.',
      },
      {
        baslik: 'Düzeltme taleplerimi görüntüleme ve iptal etme',
        kim: 'Çalışan',
        sekme: 'Mesai Geçmişim',
        aciklama: 'Gönderdiğiniz düzeltme taleplerinin durumunu takip eder, henüz karara bağlanmamış bir talebi geri çekersiniz.',
        adimlar: [
          '"Düzeltme bekliyor" olarak işaretli güne tıklayın.',
          'Talebin durumunu ve onaylayıcısını inceleyin.',
          'Vazgeçtiyseniz iptal butonuna tıklayıp onaylayın.',
        ],
        sonuc: 'İptal edilen talep "İptal" durumuna geçer, onaylayıcının listesinden kalkar; gün eski durumuna döner.',
        notlar: ['Onaylanmış veya reddedilmiş talepler iptal edilemez.'],
      },
      {
        baslik: 'Mesai geçmişini dışa aktarma',
        kim: 'Çalışan',
        sekme: 'Mesai Geçmişim',
        aciklama: 'Seçtiğiniz tarih aralığındaki mesai kayıtlarınızı dosya olarak indirir.',
        adimlar: [
          'Sol üstteki tarih alanlarından başlangıç ve bitiş tarihini seçin.',
          '"Dışa Aktar" butonuna tıklayın.',
          'Açılan listeden dosya biçimini seçin.',
        ],
        sonuc: 'Mesai kayıtlarınız Excel veya PDF olarak bilgisayarınıza iner.',
      },
      {
        baslik: 'Çalışma saati türümü görüntüleme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Size tanımlı çalışma başlangıç-bitiş saatini ve molanızı görürsünüz; "Zamanında" ve "Geç" durumları bu saate göre belirlenir.',
        adimlar: ['Bugünkü Mesaim sekmesinde başlığın yanındaki bilgi simgesine tıklayın.'],
        sonuc: 'Geçerli çalışma saatiniz gösterilir.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },
    ],

    sss: [
      {
        soru: 'Çıkış okutmayı unuttum, ne yapmalıyım?',
        cevap: 'Mesai Geçmişim takviminde ilgili güne tıklayıp doğru çıkış saatiyle düzeltme talebi gönderin. Yöneticiniz onayladığında kaydınız düzelir.',
      },
      {
        soru: '"Uzaktan Giriş" butonu çalışmıyor.',
        cevap: 'Önce "Ev Adresim" ile ev konumunuzu tanımlayın ve tarayıcıya konum izni verin. Kayıtlı konumunuzdan tolerans mesafesinden uzaktaysanız kaydınız yine de oluşturulur, ancak yöneticinize "uzak" olarak görünür.',
      },
      {
        soru: 'Neden "Geç" görünüyorum?',
        cevap: 'Girişiniz size tanımlı çalışma saatinin başlangıcından sonra yapılmıştır. Hatalı olduğunu düşünüyorsanız düzeltme talebi gönderebilirsiniz.',
      },
    ],

    ipuclari: [
      'QR okutmadan önce telefonunuzun konum servisinin açık olduğundan emin olun.',
      'Kendi telefonunuz dışında bir cihazla okutma yapmayın; başkasının cihazıyla okutma cihazın kapatılmasına yol açabilir.',
      'Eksik giriş-çıkış kayıtlarınızı ay bitmeden düzeltme talebiyle tamamlayın. Biriminizde mesai kayıtları bordro kontrolüne dahilse, kayıtsız günler puantajdaki eksik günle karşılaştırılır.',
    ],
  },
]
