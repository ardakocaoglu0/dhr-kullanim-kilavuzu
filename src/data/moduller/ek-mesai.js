// Ek Mesai (fazla çalışma) modülü — yönetici ve çalışan sayfaları
export default [
  {
    id: 'ek-mesai-yonetimi',
    grup: 'yonetim',
    sira: 80,
    baslik: 'Ek Mesai Yönetimi',
    menu: 'Yönetim › Ek Mesai Yönetimi',
    href: '/overtime-request-management',
    kim: 'parla',
    ozet:
      'Yöneticilerin ve İK’nın ekibindeki ek mesai taleplerini görüp onayladığı ya da reddettiği, ekip takvimini, raporları ve çalışan bazında ek mesai özetini izlediği sayfadır.',

    ekranlar: [
      {
        sekme: null,
        aciklama:
          'Sayfa “Talepler” sekmesiyle açılır. Üstte arama, departman ve tarih aralığı filtreleri ile “Toplu İşlem”, “Filtreleri Temizle” ve “Dışa Aktar” butonları; altında Toplam Ek Mesailer, Onaylanan Ek Mesailer, Bekleyen Onaylar ve Reddedilen Ek Mesailer kartları ile talep listesi yer alır.',
      },
      {
        sekme: 'Talepler > Bekleyen Talepler',
        aciklama:
          'Yalnız onayınızı bekleyen talepler listelenir. Her satırda onay (✓), ret (✕) ve detay (göz) butonları bulunur.',
      },
      {
        sekme: 'Ekip Ek Mesaileri > Ek Mesai Takvimi',
        aciklama:
          'Ekibinizin ek mesaileri çalışan bazında takvim üzerinde gösterilir. Hafta / Ay / Çeyrek görünümleri, “Bugün” butonu ve ek mesai türüne göre filtre bulunur.',
      },
      {
        sekme: 'Ekip Ek Mesaileri > Tüm Talepler',
        aciklama:
          'Ekibinizdeki tüm ek mesai talepleri; Çalışan, Ek Mesai Türü, Talep Tarihi, Tarih Aralığı, Saat, Mevcut Onaylayan, İlerleme, Açıklama ve Durum sütunlarıyla listelenir.',
      },
      {
        sekme: 'Ekip Ek Mesaileri > Bekleyen Talepler',
        aciklama: 'Ekipte onay sürecinde olan talepler ve her birinin hangi onay adımında olduğu görünür.',
      },
      {
        sekme: 'Raporlar',
        aciklama:
          'Departman bazında bu ay ve önceki ay ek mesai karşılaştırması ile “En Çok Ek Mesai Yapan Çalışanlar” listesi (Haftalık / Aylık / Yıllık / Tümü) yer alır.',
      },
      {
        sekme: 'Çalışan Ek Mesaileri > Ek Mesai Özeti',
        aciklama:
          'Her çalışanın ek mesai türlerine göre kullanılan ve bekleyen sürelerini gösteren özet tablo; “Güncel / Dönem” seçimi, “Dışa Aktar” ve “Ek Mesai Girişi Ekle” butonları bulunur.',
      },
    ],

    bolumler: [
      {
        baslik: 'Talep durumları',
        metin: 'Bir ek mesai talebi onay akışı boyunca şu durumlardan birinde bulunur:',
        maddeler: [
          'Beklemede: Talep onay akışındadır; “Mevcut Onaylayan” sütununda sıradaki onaylayıcı görünür.',
          'Onaylandı: Tüm onay adımları tamamlanmıştır (ör. “1/1 adım”).',
          'Reddedildi: Talep bir adımda reddedilmiştir (ör. “1. adımda reddedildi”).',
          'İptal edildi: Talep, onaylanmadan önce çalışan tarafından geri çekilmiştir.',
        ],
      },
      {
        baslik: 'Ek mesai türleri',
        metin:
          'Her ek mesai bir türe bağlıdır. Tür; ücret katsayısını veya izin olarak karşılanma oranını belirler. Sistemde tanımlı türlere örnekler:',
        maddeler: [
          'Hafta İçi Fazla Çalışma (%50)',
          'Fazla Sürelerle Çalışma (%25)',
          'Cumartesi Mesaisi',
          'Hafta Tatili Mesaisi',
          'Gece Mesaisi',
          'Ulusal Bayram ve Genel Tatil',
        ],
      },
      {
        baslik: 'Onay akışı',
        metin:
          'Talepler, çalışanın biriminde tanımlı onay adımlarına göre sırayla ilerler. Örneğin Ali Öztürk’ün talebi önce yöneticisi Parla Yılmaz’a düşer; Parla Yılmaz’ın kendi talebi ise İK Müdürü’ne gider. “İlerleme” sütunu kaç adımın tamamlandığını gösterir.',
      },
    ],

    islemler: [
      {
        baslik: 'Ek mesai taleplerini görüntüleme',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Onay yetkiniz olan tüm ek mesai taleplerini özet kartlar ve liste halinde görürsünüz.',
        adimlar: [
          'Sol menüden Yönetim › Ek Mesai Yönetimi’ni açın.',
          '“Talepler” sekmesinde üstteki kartlardan toplam, onaylanan, bekleyen ve reddedilen talep sayılarını izleyin.',
          'Alt sekmelerden (Tüm Talepler, Bekleyen Talepler, Onaylanan Talepler, Reddedilen Talepler) birini seçerek listeyi daraltın.',
          'Listede Çalışan, Tarih, Departman, Tür, Süre, Durum ve Mevcut Onaylayan bilgilerini inceleyin.',
        ],
        notlar: ['Tarih ve Süre sütun başlıklarına tıklayarak listeyi sıralayabilirsiniz.'],
      },
      {
        baslik: 'Talepleri arama ve filtreleme',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Belirli bir çalışanın, departmanın veya tarih aralığının taleplerini bulmanızı sağlar.',
        adimlar: [
          'Arama kutusuna çalışan adını veya numarasını yazın.',
          '“Departman seçin” listesinden bir departman seçin.',
          'Başlangıç ve Bitiş Tarihi alanlarından tarih aralığını belirleyin.',
          'Tüm filtreleri sıfırlamak için “Filtreleri Temizle” butonuna tıklayın.',
        ],
        alanlar: [
          { ad: 'Çalışan adı veya numarası', aciklama: 'Aranacak çalışanın adı ya da sicil numarası.', zorunlu: false },
          { ad: 'Departman', aciklama: 'Listelenecek departman.', zorunlu: false },
          { ad: 'Başlangıç / Bitiş Tarihi', aciklama: 'Ek mesai tarihinin aralığı.', zorunlu: false },
        ],
        sonuc: 'Liste ve özet kartlar seçtiğiniz kriterlere göre güncellenir.',
      },
      {
        baslik: 'Talep detayını görüntüleme',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Talebin tarih, saat, mola, tür, açıklama ve onay adımlarını ayrıntılı görürsünüz.',
        adimlar: [
          'Listede ilgili talebin satırındaki göz simgeli “Detaylar” butonuna tıklayın.',
          'Açılan pencerede talep bilgilerini ve onay geçmişini inceleyin.',
        ],
      },
      {
        baslik: 'Talebi PDF olarak indirme',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Tek bir ek mesai talebini PDF belge olarak indirirsiniz.',
        adimlar: [
          'Talebin “Detaylar” penceresini açın.',
          'Pencerede yer alan PDF indirme seçeneğine tıklayın.',
        ],
        sonuc: 'Talep bilgilerini içeren PDF dosyası bilgisayarınıza iner.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },
      {
        baslik: 'Ek mesai talebini onaylama',
        kim: 'Yönetici',
        sekme: 'Talepler > Bekleyen Talepler',
        aciklama: 'Onayınızı bekleyen bir ek mesai talebini kabul edersiniz.',
        adimlar: [
          '“Bekleyen Talepler” alt sekmesini açın.',
          'İlgili satırdaki yeşil onay (✓) butonuna tıklayın.',
          'Açılan pencerede gerekiyorsa açıklama yazın ve karşılık şeklini (ücret ya da izin) kontrol edin.',
          '“Onayla” butonuyla işlemi tamamlayın.',
        ],
        alanlar: [
          { ad: 'Açıklama', aciklama: 'Onayla ilgili notunuz.', zorunlu: false },
          { ad: 'Karşılık şekli', aciklama: 'Ek mesainin ücret olarak mı, izin olarak mı karşılanacağı.', zorunlu: false },
          { ad: 'Çalışma saati türü', aciklama: 'Ek mesainin hangi çalışma saati düzenine işleneceği.', zorunlu: false },
        ],
        sonuc:
          'Akışta başka adım varsa talep bir sonraki onaylayıcıya düşer ve “Beklemede” kalır; son adımsa durumu “Onaylandı” olur ve çalışanın ek mesai özetine işlenir. Ek mesai türü izin karşılıklıysa, türde seçili izin türüne izin katsayısına göre izin hakkı kendiliğinden yazılır; bu hak çalışanın onayına gitmez ve İzin Yönetimi › İzin Bakiyeleri\'nde görünür (bu günleri ayrıca elle eklemeyin). Ücret karşılıklıysa ve birimde “Ek Mesaileri Bordroya Dahil Et” açıksa ek mesai, ait olduğu ayın bordro puantajına kendiliğinden gelir. O çalışanın puantajı daha önce kaydedildiyse ve yeni ek mesai görünmüyorsa Bordro Yönetimi › Puantaj\'da çalışanın puantajını sıfırlayıp yeniden kaydedin.',
      },
      {
        baslik: 'Ek mesai talebini reddetme',
        kim: 'Yönetici',
        sekme: 'Talepler > Bekleyen Talepler',
        aciklama: 'Uygun bulmadığınız bir ek mesai talebini gerekçesiyle reddedersiniz.',
        adimlar: [
          '“Bekleyen Talepler” alt sekmesini açın.',
          'İlgili satırdaki kırmızı ret (✕) butonuna tıklayın.',
          'Açılan pencereye ret gerekçesini yazın.',
          '“Reddet” butonuyla işlemi tamamlayın.',
        ],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Ret gerekçesi; çalışan bu notu görür.', zorunlu: false }],
        sonuc: 'Talebin durumu “Reddedildi” olur, akış durur ve “İlerleme” sütununda hangi adımda reddedildiği görünür.',
      },
      {
        baslik: 'Toplu onay / ret (Toplu İşlem)',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Birden fazla bekleyen talebi tek seferde onaylar veya reddedersiniz.',
        adimlar: [
          'Sağ üstteki “Toplu İşlem” butonuna tıklayın.',
          'Listeden işlem yapmak istediğiniz bekleyen talepleri seçin.',
          'Onaylama ya da reddetme seçeneğini belirleyin, gerekiyorsa açıklama yazın.',
          'İşlemi onaylayın.',
        ],
        sonuc: 'Seçilen taleplerin her biri için onay veya ret ayrı ayrı uygulanır; durumlar listede güncellenir.',
        notlar: ['“Toplu İşlem” butonu “Ekip Ek Mesaileri” sekmesinde de bulunur.'],
      },
      {
        baslik: 'Talep listesini dışa aktarma',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Onay listenizdeki talepleri dosya olarak indirirsiniz.',
        adimlar: [
          '“Dışa Aktar” butonuna tıklayın.',
          'Açılan pencerede durum, onay durumu, çalışan, tarih aralığı ve ek mesai türü seçimlerini yapın.',
          'Dosya biçimini seçip indirmeyi başlatın.',
        ],
        alanlar: [
          { ad: 'Durum', aciklama: 'Beklemede, Onaylandı, Reddedildi gibi talep durumları.', zorunlu: false },
          { ad: 'Çalışanlar', aciklama: 'Rapora alınacak çalışanlar.', zorunlu: false },
          { ad: 'Başlangıç / Bitiş Tarihi', aciklama: 'Raporlanacak tarih aralığı.', zorunlu: false },
          { ad: 'Ek Mesai Türü', aciklama: 'Yalnız seçilen türlerin aktarılması.', zorunlu: false },
          { ad: 'Dosya biçimi', aciklama: 'İndirilecek dosyanın biçimi (ör. Excel).', zorunlu: false },
        ],
        sonuc: 'Seçtiğiniz ölçütlere uyan talepler dosya olarak bilgisayarınıza iner.',
      },
      {
        baslik: 'Ekip ek mesai takvimini görüntüleme',
        kim: 'Yönetici',
        sekme: 'Ekip Ek Mesaileri > Ek Mesai Takvimi',
        aciklama: 'Ekibinizin hangi gün ne kadar ek mesai yaptığını takvim üzerinde görürsünüz.',
        adimlar: [
          '“Ekip Ek Mesaileri” sekmesini, ardından “Ek Mesai Takvimi” alt sekmesini açın.',
          'Hafta, Ay veya Çeyrek görünümünü seçin; “Bugün” ile güncel tarihe dönün.',
          '“Ek mesai türüne göre filtrele” alanından yalnız belirli türleri gösterin.',
          'Takvimdeki bir kayda tıklayarak ayrıntısını görün.',
        ],
        notlar: ['Gösterge alanındaki renkler ek mesai türlerini, kesik çizgili kutular bekleyen talepleri gösterir.'],
      },
      {
        baslik: 'Ekip taleplerini listeleme ve filtreleme',
        kim: 'Yönetici',
        sekme: 'Ekip Ek Mesaileri > Tüm Talepler',
        aciklama: 'Ekibinizdeki tüm talepleri onay ilerlemesi ve açıklamalarıyla birlikte izlersiniz.',
        adimlar: [
          '“Ekip Ek Mesaileri” sekmesinde “Tüm Talepler” veya “Bekleyen Talepler” alt sekmesini açın.',
          '“Çalışan adı veya numarası” ve “Departman seçin” alanlarıyla listeyi daraltın.',
          '“İlerleme” sütununda talebin kaç onay adımını geçtiğini, “Mevcut Onaylayan” sütununda kimde beklediğini görün.',
          'Onayınızı bekleyen satırlarda onay (✓) ya da ret (✕) butonlarını kullanın.',
        ],
      },
      {
        baslik: 'Departman ek mesai raporunu inceleme',
        kim: 'Yönetici',
        sekme: 'Raporlar',
        aciklama: 'Departmanların bu ayki ve önceki ayki ek mesai sürelerini karşılaştırırsınız.',
        adimlar: [
          '“Raporlar” sekmesini açın.',
          '“Departman seçin” alanından bir departman seçin.',
          'Departman, Bu Ay, Önceki Ay ve Çalışanlar kartlarını ve “Departman Ek Mesai Karşılaştırması (Bu Ay vs Önceki Ay)” grafiğini inceleyin.',
        ],
        notlar: ['Seçilen dönemde onaylanmış ek mesai yoksa grafikte “Kayıt bulunamadı” yazar.'],
      },
      {
        baslik: 'En çok ek mesai yapan çalışanları görme',
        kim: 'Yönetici',
        sekme: 'Raporlar',
        aciklama: 'Belirli bir dönemde en fazla ek mesai yapan çalışanları sıralı olarak görürsünüz.',
        adimlar: [
          '“Raporlar” veya “Çalışan Ek Mesaileri” sekmesindeki “En Çok Ek Mesai Yapan Çalışanlar” bölümüne gidin.',
          'Haftalık, Aylık, Yıllık veya Tümü seçeneklerinden birini seçin.',
          'Her çalışanın giriş sayısını ve toplam süresini inceleyin.',
        ],
      },
      {
        baslik: 'Çalışan ek mesai özetini görüntüleme',
        kim: 'Yönetici',
        sekme: 'Çalışan Ek Mesaileri > Ek Mesai Özeti',
        aciklama: 'Her çalışanın ek mesai türlerine göre kullanılan ve bekleyen sürelerini tek tabloda görürsünüz.',
        adimlar: [
          '“Çalışan Ek Mesaileri” sekmesini açın.',
          '“Çalışan No veya Ad Soyad” kutusuyla çalışan arayın.',
          '“Güncel” ya da “Dönem” seçeneğiyle görüntülenecek zamanı belirleyin; Dönem seçildiğinde ay ve yıl seçin.',
          'Kullanılan ve Bekleyen sütunlarındaki bilgi simgesine gelerek ayrıntıyı görün.',
          'Satırdaki göz butonuyla çalışanın ek mesai kayıtlarını açın.',
        ],
      },
      {
        baslik: 'Tamamlanan ek mesaileri dışa aktarma',
        kim: 'Yönetici',
        sekme: 'Çalışan Ek Mesaileri > Ek Mesai Özeti',
        aciklama: 'Onaylanmış (tamamlanmış) ek mesaileri ay, yıl ve birim bazında dosyaya aktarırsınız.',
        adimlar: [
          '“Çalışan Ek Mesaileri” sekmesinde “Dışa Aktar” butonuna tıklayın.',
          'Ay, yıl, birim ve gerekiyorsa çalışan seçin.',
          'Dosya biçimini seçip indirmeyi başlatın.',
        ],
        alanlar: [
          { ad: 'Ay / Yıl', aciklama: 'Raporlanacak dönem.', zorunlu: false },
          { ad: 'Birim', aciklama: 'Raporlanacak organizasyon birimi.', zorunlu: false },
          { ad: 'Çalışanlar', aciklama: 'Yalnız seçilen çalışanların aktarılması.', zorunlu: false },
        ],
        sonuc: 'Tamamlanan ek mesailer dosya olarak bilgisayarınıza iner.',
      },
      {
        baslik: 'Çalışanlar adına ek mesai girişi ekleme',
        kim: 'Yönetici',
        sekme: 'Çalışan Ek Mesaileri > Ek Mesai Özeti',
        aciklama:
          'Bir veya birden fazla çalışan için yönetici olarak ek mesai kaydı oluşturursunuz (ör. hafta sonu yapılan toplu çalışma).',
        adimlar: [
          '“Çalışan Ek Mesaileri” sekmesinde “Ek Mesai Girişi Ekle” butonuna tıklayın.',
          'Ek mesai yapılacak çalışanları seçin.',
          'Ek mesai türünü, başlığı ve açıklamayı girin.',
          'Ek mesai günlerini; her gün için başlangıç-bitiş saatini ve mola süresini ekleyin.',
          'Gerekiyorsa belirli bir çalışan için farklı gün/saat tanımlayın.',
          'Sistemin hesapladığı süre önizlemesini kontrol edip kaydedin.',
        ],
        alanlar: [
          { ad: 'Çalışanlar', aciklama: 'Ek mesai girilecek kişiler.', zorunlu: true },
          { ad: 'Ek Mesai Türü', aciklama: 'Ör. Hafta Tatili Mesaisi.', zorunlu: true },
          { ad: 'Başlık', aciklama: 'Kısa tanım, ör. “Yıl sonu kapanış çalışması”.', zorunlu: false },
          { ad: 'Açıklama', aciklama: 'Yapılan işin özeti.', zorunlu: false },
          { ad: 'Gün, başlangıç ve bitiş saati', aciklama: 'Her ek mesai günü için çalışma aralığı.', zorunlu: true },
          { ad: 'Mola süresi (dk)', aciklama: 'Süreden düşülecek mola.', zorunlu: false },
          { ad: 'Karşılık şekli', aciklama: 'Ücret ya da izin olarak karşılanma.', zorunlu: false },
          { ad: 'Çalışma saati türü', aciklama: 'Kaydın işleneceği çalışma saati düzeni.', zorunlu: false },
        ],
        sonuc: 'Seçilen her çalışan için ek mesai kaydı oluşur ve ek mesai özetine yansır.',
        notlar: [
          'Yalnız seçilen çalışanların hepsinde ortak tanımlı ek mesai türleri listelenir.',
          'Bu işlem yetkinize bağlı olarak görünür.',
        ],
      },
      {
        baslik: 'Tek bir çalışana ek mesai atama',
        kim: 'Yönetici',
        sekme: 'Çalışan Ek Mesaileri > Ek Mesai Özeti',
        aciklama: 'Belirli bir çalışana, onun adına ek mesai kaydı atarsınız.',
        adimlar: [
          'Çalışanın satırındaki göz butonuyla kayıtlarını açın.',
          'Ek mesai ekleme seçeneğine tıklayın.',
          'Tür, tarih, saat, mola ve karşılık şeklini girin.',
          'Kaydedin.',
        ],
        sonuc: 'Ek mesai çalışanın kayıtlarına eklenir.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },
      {
        baslik: 'Ek mesai gününü düzenleme',
        kim: 'İK',
        sekme: 'Çalışan Ek Mesaileri > Ek Mesai Özeti',
        aciklama: 'Kaydedilmiş bir ek mesainin tek bir gününün saatini, molasını veya türünü düzeltirsiniz.',
        adimlar: [
          'Çalışanın ek mesai kayıtlarını açın.',
          'Düzeltmek istediğiniz günün düzenleme seçeneğine tıklayın.',
          'Başlangıç-bitiş saatini, mola süresini veya ek mesai türünü güncelleyin.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Başlangıç / Bitiş', aciklama: 'Günün yeni çalışma aralığı.', zorunlu: true },
          { ad: 'Mola süresi (dk)', aciklama: 'Düşülecek mola.', zorunlu: true },
          { ad: 'Ek Mesai Türü', aciklama: 'Gerekirse farklı tür.', zorunlu: false },
        ],
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },
      {
        baslik: 'Ek mesai kaydını veya tek bir gününü silme',
        kim: 'İK',
        sekme: 'Çalışan Ek Mesaileri > Ek Mesai Özeti',
        aciklama: 'Hatalı girilmiş bir ek mesai talebini tamamen veya yalnız bir gününü kaldırırsınız.',
        adimlar: [
          'Çalışanın ek mesai kayıtlarını açın.',
          'Silmek istediğiniz kaydın ya da günün silme seçeneğine tıklayın.',
          'Sistem, silmenin izin bakiyesi ve bordro üzerindeki etkisini gösterir; bu bilgiyi okuyun.',
          'Gerekiyorsa “izne yansıyanı geri al” ve “bordroya yansıyanı geri al” seçeneklerini işaretleyin.',
          'Silmeyi onaylayın.',
        ],
        sonuc: 'Kayıt silinir; seçtiğiniz geri alma seçeneklerine göre izin bakiyesi ve bordro yansıması da düzeltilir.',
        notlar: ['Silme işlemi geri alınamaz; onaylamadan önce etki bilgisini mutlaka okuyun.', 'Bu işlem yetkinize bağlı olarak görünür.'],
      },
      {
        baslik: 'Ek mesai türlerini tanımlama ve düzenleme',
        kim: 'İK',
        sekme: null,
        aciklama:
          'Hafta İçi Fazla Çalışma (%50) gibi ek mesai türlerini oluşturur, ücret katsayısını veya izin karşılığını belirlersiniz.',
        adimlar: [
          'Ayarlar › Organizasyon Şeması sayfasında birimin kutusuna tıklayıp Detayları Görüntüle seçeneğini seçin; Ek Mesai Yönetimi › Ek Mesai Türleri sekmesini açın.',
          'Yeni tür eklemek için ekleme butonuna, mevcut türü değiştirmek için ilgili satırın düzenleme butonuna tıklayın.',
          'Tür adını, açıklamasını ve hesap birimini girin.',
          'Ücret karşılığı verilecekse katsayıyı (ör. 1,5), izin karşılığı verilecekse izin türünü ve izin katsayısını belirleyin.',
          'Gerekiyorsa saat aralığına göre farklı katsayılar tanımlayın.',
          'Kaydedin. Kullanılmayan bir türü silme butonuyla kaldırabilirsiniz.',
        ],
        alanlar: [
          { ad: 'Ad', aciklama: 'Ör. “Hafta İçi Fazla Çalışma (%50)”.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Türün ne zaman kullanılacağı.', zorunlu: false },
          { ad: 'Hesap birimi', aciklama: 'Sürenin saat ya da gün olarak hesaplanması.', zorunlu: false },
          { ad: 'Mesai başlangıç / bitiş saati', aciklama: 'Türün geçerli olduğu saat aralığı (ör. gece mesaisi için).', zorunlu: false },
          { ad: 'Ücret karşılığı ve katsayı', aciklama: 'Ek mesainin ücrete yansıması ve çarpanı.', zorunlu: false },
          { ad: 'Saatlik katsayı aralıkları', aciklama: 'Belirli saatlerden sonra farklı çarpan uygulanması.', zorunlu: false },
          { ad: 'İzin karşılığı, izin türü ve katsayı', aciklama: 'Ek mesainin izin hakkına dönüştürülmesi.', zorunlu: false },
          { ad: 'Birim', aciklama: 'Türün geçerli olduğu organizasyon birimi.', zorunlu: false },
        ],
        sonuc: 'Tanımlanan tür, ilgili birimdeki çalışanların ek mesai taleplerinde seçilebilir hale gelir.',
        notlar: [
          'Ek mesai türleri Ek Mesai Yönetimi sayfasında değil, birimin Ek Mesai Yönetimi › Ek Mesai Türleri sekmesinde tanımlanır; ayrıntılı anlatım Organizasyon Birim Yönetimi – Modül Ayarları sayfasındadır.',
          'Bu işlem yetkinize bağlı olarak görünür.',
        ],
      },
    ],

    sss: [
      {
        soru: 'Bir talebi neden onaylayamıyorum?',
        cevap:
          'Onay ve ret butonları yalnız “Mevcut Onaylayan” sizseniz görünür. Talep başka bir onay adımında bekliyorsa yalnız detayını görebilirsiniz.',
      },
      {
        soru: 'Onayladığım talep neden hâlâ “Beklemede”?',
        cevap: 'Birimin onay akışında sizden sonra başka bir adım varsa talep sıradaki onaylayıcıya geçer ve son adım tamamlanana kadar “Beklemede” kalır.',
      },
      {
        soru: 'Kendi ek mesai talebim bu listede neden görünüyor?',
        cevap: '“Ekip Ek Mesaileri” sekmesi sizin talebinizi de gösterir; ancak onayı kendi yöneticinize (ör. İK Müdürü) düşer.',
      },
    ],

    ipuclari: [
      'Gün sonunda “Bekleyen Talepler” alt sekmesini kontrol ederek bekleyen onay bırakmayın.',
      'Çok sayıda talep varsa “Toplu İşlem” ile tek seferde onaylayabilirsiniz.',
      'Ay sonu bordro hazırlığından önce “Çalışan Ek Mesaileri” sekmesinden dönem özetini dışa aktarın.',
    ],
  },

  {
    id: 'ek-mesailerim',
    grup: 'kisisel',
    sira: 70,
    baslik: 'Ek Mesailerim',
    menu: 'Kişisel › Ek Mesailerim',
    href: '/my-overtimes',
    kim: 'ali',
    ozet:
      'Çalışanların ek mesai talebi oluşturduğu, aylık ek mesai özetini ve takvimini izlediği, taleplerinin onay durumunu takip ettiği sayfadır.',

    ekranlar: [
      {
        sekme: null,
        aciklama:
          'Sayfa “Ek Mesai Çizelgesi” sekmesiyle açılır. “Aylık Özet” kartında her ek mesai türü için Toplam Ek Mesai, Onaylandı, Onay Beklemede ve Reddedildi süreleri; altında aylık “Ek Mesai” takvimi ve sağ üstte “Yeni Giriş” butonu bulunur.',
      },
      {
        sekme: 'Onay Geçmişi',
        aciklama:
          'Onay Beklemede, Onaylandı ve Reddedildi sayı kartları; Ay ve Yıl filtreleri, “Dışa Aktar” butonu ve Tarih, Tür, Süre, Durum, İşlemler sütunlarından oluşan talep listesi yer alır.',
      },
    ],

    bolumler: [
      {
        baslik: 'Talep durumları',
        maddeler: [
          'Beklemede: Talebiniz yöneticinizin onayındadır; bu aşamada iptal edebilirsiniz.',
          'Onaylandı: Ek mesainiz kabul edilmiş ve özetinize işlenmiştir. İzin karşılıklı ek mesailerde izin hakkınız bakiyenize kendiliğinden yazılır; ücret karşılıklı ek mesailer biriminizin ayarına göre o ayın bordrosuna yansır.',
          'Reddedildi: Talebiniz reddedilmiştir; ret gerekçesini detaydan görebilirsiniz.',
          'İptal edildi: Talebinizi onaylanmadan önce geri çektiniz.',
        ],
      },
      {
        baslik: 'Takvimdeki gösterim',
        metin:
          'Takvimde her ek mesai, türünün rengiyle “Tür · süre” biçiminde görünür (ör. “Hafta İçi Fazla Çalışma (%50) · 2 sa”). Kesik çizgili kutular onay bekleyen kayıtlardır. Alttaki “Açıklama” bölümü renklerin hangi türe ait olduğunu gösterir.',
      },
    ],

    islemler: [
      {
        baslik: 'Aylık ek mesai özetini görüntüleme',
        kim: 'Çalışan',
        sekme: 'Ek Mesai Çizelgesi',
        aciklama: 'Ay içinde yaptığınız ek mesailerin türlere göre toplamını görürsünüz.',
        adimlar: [
          'Sol menüden Kişisel › Ek Mesailerim’i açın.',
          '“Ek Mesai Çizelgesi” sekmesindeki “Aylık Özet” kartlarını inceleyin.',
          'Her tür için Toplam Ek Mesai, Onaylandı, Onay Beklemede ve Reddedildi sürelerine bakın.',
        ],
      },
      {
        baslik: 'Ek mesai takvimini kullanma',
        kim: 'Çalışan',
        sekme: 'Ek Mesai Çizelgesi',
        aciklama: 'Ek mesailerinizi aylık takvim üzerinde gün gün görürsünüz.',
        adimlar: [
          '“Ek Mesai” takviminde ay adının yanındaki “Önceki ay” ve “Sonraki ay” oklarıyla aylar arasında gezinin.',
          '“Bugün” butonuyla içinde bulunduğunuz aya dönün.',
          'Takvimdeki bir kayda tıklayarak ayrıntısını açın.',
        ],
      },
      {
        baslik: 'Yeni ek mesai talebi oluşturma',
        kim: 'Çalışan',
        sekme: 'Ek Mesai Çizelgesi',
        aciklama: 'Yaptığınız ya da yapacağınız fazla çalışma için onaya talep gönderirsiniz.',
        adimlar: [
          'Sağ üstteki “Yeni Giriş” butonuna veya takvimde ilgili günün “+” kutusuna tıklayın.',
          'Ek mesai türünü seçin (ör. Hafta İçi Fazla Çalışma (%50)).',
          'Tarihi, başlangıç ve bitiş saatini, varsa mola süresini girin; birden çok gün için gün ekleyin.',
          'Başlık ve yapılan işi anlatan açıklamayı yazın.',
          'Sistemin hesapladığı toplam süreyi kontrol edin.',
          'Kaydederek talebi gönderin.',
        ],
        alanlar: [
          { ad: 'Ek Mesai Türü', aciklama: 'Biriminiz için tanımlı türlerden biri.', zorunlu: true },
          { ad: 'Tarih', aciklama: 'Ek mesai yapılan gün.', zorunlu: true },
          { ad: 'Başlangıç / Bitiş saati', aciklama: 'Ör. 18:00 - 21:00.', zorunlu: true },
          { ad: 'Mola süresi (dk)', aciklama: 'Süreden düşülecek mola.', zorunlu: false },
          { ad: 'Başlık', aciklama: 'Kısa tanım.', zorunlu: false },
          {
            ad: 'Açıklama',
            aciklama: 'Yapılan iş, ör. “Ekim ayı süreç analiz raporu ve iyileştirme önerileri hazırlandı.”',
            zorunlu: false,
          },
        ],
        sonuc:
          'Talep “Beklemede” durumunda oluşur ve biriminizin onay akışındaki ilk onaylayıcıya (ör. Ali Öztürk için Parla Yılmaz) düşer. Takvimde kesik çizgili olarak görünür.',
        notlar: [
          'Aynı saatlerde başka bir ek mesai kaydınız varsa sistem uyarı verir.',
          'Hafta sonu ve tatil günlerinde “+” kutusu görünmeyebilir; bu durumda “Yeni Giriş” butonunu kullanın.',
        ],
      },
      {
        baslik: 'Onay geçmişini görüntüleme ve filtreleme',
        kim: 'Çalışan',
        sekme: 'Onay Geçmişi',
        aciklama: 'Gönderdiğiniz tüm taleplerin durumunu tek listede izlersiniz.',
        adimlar: [
          '“Onay Geçmişi” sekmesini açın.',
          'Üstteki kartlardan bekleyen, onaylanan ve reddedilen talep sayısını görün.',
          '“Ay” ve “Yıl” seçimleriyle listeyi daraltın.',
          '“Tarih” sütun başlığına tıklayarak sıralamayı değiştirin.',
        ],
      },
      {
        baslik: 'Talep detayını görüntüleme',
        kim: 'Çalışan',
        sekme: 'Onay Geçmişi',
        aciklama: 'Talebin ayrıntılarını, onay adımlarını ve varsa ret gerekçesini görürsünüz.',
        adimlar: [
          'İlgili satırdaki göz simgeli butona tıklayın.',
          'Açılan pencerede talep bilgilerini ve onay geçmişini inceleyin.',
        ],
      },
      {
        baslik: 'Bekleyen talebi düzenleme',
        kim: 'Çalışan',
        sekme: 'Onay Geçmişi',
        aciklama: 'Henüz onaylanmamış bir talebin tarih, saat, tür veya açıklamasını düzeltirsiniz.',
        adimlar: [
          'Takvimde ya da Onay Geçmişi listesinde “Beklemede” durumundaki talebi açın.',
          'Düzenleme seçeneğine tıklayın.',
          'Değiştirmek istediğiniz alanları güncelleyin ve süre önizlemesini kontrol edin.',
          'Kaydedin.',
        ],
        sonuc: 'Talep güncellenmiş bilgilerle “Beklemede” olarak onay akışında kalır.',
        notlar: [
          'Onaylanmış veya reddedilmiş talepler düzenlenemez.',
          'Bu işlem yetkinize bağlı olarak görünür.',
        ],
      },
      {
        baslik: 'Bekleyen talebi iptal etme',
        kim: 'Çalışan',
        sekme: 'Onay Geçmişi',
        aciklama: 'Artık gerekmeyen ya da hatalı girdiğiniz bir talebi geri çekersiniz.',
        adimlar: [
          '“Onay Geçmişi” sekmesinde “Beklemede” durumundaki talebi bulun.',
          'Satırdaki kırmızı çöp kutusu simgeli butona tıklayın.',
          'Açılan onay penceresinde işlemi onaylayın.',
        ],
        sonuc: 'Talep onay akışından çıkar, onaylayıcının listesinden kalkar ve aylık özetteki bekleyen süreniz düşer.',
        notlar: ['Çöp kutusu butonu yalnız onay bekleyen taleplerde görünür; onaylanan veya reddedilen talepler iptal edilemez.'],
      },
      {
        baslik: 'Talebi PDF olarak indirme',
        kim: 'Çalışan',
        sekme: 'Onay Geçmişi',
        aciklama: 'Bir ek mesai talebinizi PDF belge olarak indirirsiniz.',
        adimlar: ['Talebin detay penceresini açın.', 'PDF indirme seçeneğine tıklayın.'],
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },
      {
        baslik: 'Ek mesailerimi dışa aktarma',
        kim: 'Çalışan',
        sekme: 'Onay Geçmişi',
        aciklama: 'Tamamlanan ek mesailerinizi seçtiğiniz ay ve yıl için dosya olarak indirirsiniz.',
        adimlar: [
          '“Onay Geçmişi” sekmesinde “Ay” ve “Yıl” seçin.',
          '“Dışa Aktar” butonuna tıklayın.',
          'Dosya biçimini seçip indirmeyi başlatın.',
        ],
        sonuc: 'Seçtiğiniz döneme ait onaylanmış ek mesailer dosya olarak bilgisayarınıza iner.',
      },
    ],

    sss: [
      {
        soru: 'Talebim kime gidiyor?',
        cevap: 'Biriminizde tanımlı onay akışına göre önce yöneticinize gider. Detay penceresinde hangi adımda olduğunu görebilirsiniz.',
      },
      {
        soru: 'Ek mesai türü listesinde istediğim tür yok, ne yapmalıyım?',
        cevap: 'Listede yalnız biriminiz için tanımlı türler görünür. Eksik tür için İK birimiyle iletişime geçin.',
      },
      {
        soru: 'Reddedilen talebimi tekrar gönderebilir miyim?',
        cevap: 'Reddedilen talep değiştirilemez; gerekçeyi okuyup düzeltilmiş bilgilerle “Yeni Giriş” ile yeni talep oluşturabilirsiniz.',
      },
    ],

    ipuclari: [
      'Ek mesainizi yaptığınız gün girin; açıklamaya yaptığınız işi kısaca yazmak onayı hızlandırır.',
      'Takvimdeki boş günlerde “+” kutusuna tıklayarak tarih seçilmiş halde hızlıca talep açabilirsiniz.',
      'Ay sonunda Aylık Özet’teki “Onay Beklemede” süresini kontrol edin; bekleyen talepler için yöneticinizi hatırlatın.',
    ],
  },
]
