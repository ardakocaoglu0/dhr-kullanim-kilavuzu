// Görev modülü: Görev Yönetimi (yönetici) ve Görevlerim (çalışan)
const YETKI = 'Bu işlem yetkinize bağlı olarak görünür.'

export default [
  {
    id: 'gorev-yonetimi',
    grup: 'yonetim',
    sira: 70,
    baslik: 'Görev Yönetimi',
    menu: 'Yönetim › Görev Yönetimi',
    href: '/task-management',
    kim: 'parla',
    ozet:
      'Ekibinizin günlük görev kayıtlarını takvim üzerinde izlediğiniz, çalışanlara görev atadığınız ve onayınıza gelen görev günlerini onaylayıp reddettiğiniz sayfadır. Yöneticiler ve yetkili İK kullanıcıları kullanır.',

    ekranlar: [
      {
        sekme: null,
        aciklama:
          'Sayfa Takvim sekmesiyle açılır. Üstte Görevlerim, Çalışan Seç, ay seçici (ör. Kasım 2026), Görev Ata ve Dışa Aktar butonları bulunur.',
      },
      {
        sekme: 'Takvim',
        aciklama:
          'Seçilen çalışanların görevleri haftalık takvimde, saat bazlı olarak gösterilir. Her çalışan kendi rengiyle listelenir (ör. Ali Öztürk). Görev kutusunda başlık ve saat aralığı yer alır (ör. "Analiz ekibi koordinasyon toplantısı, 09:30 - 11:00").',
      },
      {
        sekme: 'Talepler',
        aciklama:
          'Görev Talepleri listesi. Üstte arama, Departman ve Tüm kategoriler filtreleri, Toplu İşlem, Filtreleri Temizle ve Dışa Aktar butonları; altında Toplam Talep, Onaylanan, Bekleyen ve Reddedilen sayı kartları; ardından Tümü, Bekleyen, Onaylanan, Reddedilen ve İptal Edildi alt sekmeleri yer alır.',
      },
      {
        sekme: 'Talepler > Bekleyen',
        aciklama:
          'Onay bekleyen görev günleri. Her satırda onay (yeşil tik), ret (kırmızı çarpı) ve detay (göz) butonları bulunur; Mevcut Onaylayan sütunu talebin kimde beklediğini gösterir (ör. Parla Yılmaz, Kurumsal Çözümler Müdürü).',
      },
    ],

    bolumler: [
      {
        baslik: 'Talep listesi sütunları',
        metin: 'Görev Talepleri tablosunda şu bilgiler yer alır:',
        maddeler: [
          'Çalışan: Talebi oluşturan çalışan ve unvanı (ör. Ali Öztürk, Kıdemli İş Analisti).',
          'Kategori: Görevin kategorisi (ör. Uzaktan Çalışma, Ofisten Çalışma, Eğitim, Toplantı).',
          'Başlık: Görevin kısa adı.',
          'Tarihler: Görevin günü ve süresi (ör. 09.11 · 1 gün).',
          'Saat: Toplam çalışma süresi (ör. 3 sa).',
          'Talep Tarihi: Kaydın oluşturulduğu tarih ve saat.',
          'Genel Durum: Talebin son durumu.',
          'Mevcut Onaylayan: Talebin şu anda onayını bekleyen kişi.',
          'İşlemler: Onayla, Reddet ve detay butonları.',
        ],
      },
      {
        baslik: 'Talep durumları',
        metin: 'Bir görev günü talebi şu durumlardan birinde bulunur:',
        maddeler: [
          'Beklemede: Onay akışındaki sıradaki kişinin kararını bekliyor.',
          'Onaylandı: Tüm onay adımları tamamlandı; görev kesinleşti.',
          'Reddedildi: Onaylayanlardan biri talebi reddetti.',
          'İptal Edildi: Çalışan bekleyen talebini geri çekti.',
        ],
      },
      {
        baslik: 'Kavramlar',
        maddeler: [
          'Görev kategorisi: Görevin türü (ör. Toplantı, Eğitim). Her kategori için renk, dosya ekleme, adım kullanımı ve çalışanın kendisinin kayıt girip giremeyeceği ayrı ayrı belirlenir.',
          'Görev akışı: Bir kategorideki görev günlerinin hangi pozisyonlar tarafından, hangi sırayla onaylanacağını belirler.',
          'Adım: Bir görevi alt işlere bölmek için kullanılır; her adıma bir veya birkaç kişi atanabilir ve adımın durumu ayrıca güncellenir.',
          'Takvim rengi: Takvimde her çalışanın görevlerinin hangi renkle gösterileceği.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Ekip takvimini görüntüleme',
        kim: 'Yönetici',
        sekme: 'Takvim',
        aciklama: 'Ekibinizdeki çalışanların görevlerini haftalık takvim üzerinde görürsünüz.',
        adimlar: [
          'Yönetim › Görev Yönetimi sayfasını açın; Takvim sekmesi açık gelir.',
          'Üstteki Çalışan Seç alanından görmek istediğiniz çalışanları seçin.',
          'Ay seçiciden ayı belirleyin (ör. Kasım 2026).',
          'Takvimin solundaki görünüm listesinden Haftalık görünümü seçin; ok butonlarıyla önceki ve sonraki haftaya geçin.',
          'Görevleri saat dilimlerine yerleşmiş görmek için Saat Bazlı kutusunu işaretli tutun.',
        ],
        sonuc: 'Seçilen çalışanların görevleri, her çalışan kendi renginde olacak şekilde takvimde listelenir.',
        notlar: ['Yalnızca yönetiminizdeki birimlerin çalışanlarını görebilirsiniz.'],
      },
      {
        baslik: 'Görev detayını görüntüleme',
        kim: 'Yönetici',
        sekme: 'Takvim',
        aciklama: 'Bir görev gününün açıklamasını, saat aralıklarını, adımlarını, eklerini ve atanmış çalışanlarını incelersiniz.',
        adimlar: [
          'Takvimde görev kutusuna ya da Talepler listesinde satırdaki detay (göz) butonuna tıklayın.',
          'Açılan pencerede görev bilgilerini, adımları ve onay geçmişini inceleyin.',
          'Ek dosya varsa dosya adına tıklayarak indirin.',
        ],
        sonuc: 'Görevin tüm ayrıntıları tek pencerede görüntülenir.',
      },
      {
        baslik: 'Çalışana görev atama',
        kim: 'Yönetici',
        sekme: null,
        aciklama: 'Bir veya birden fazla çalışana belirli gün ve saatler için görev atarsınız.',
        adimlar: [
          'Sağ üstteki Görev Ata butonuna tıklayın.',
          'Görevin atanacağı çalışanları seçin.',
          'Kategori, başlık ve açıklamayı girin.',
          'Tarihi ya da tarih aralığını ve saat aralıklarını (başlangıç, bitiş, mola süresi) belirleyin.',
          'Kategori izin veriyorsa adımları ve dosya eklerini ekleyin.',
          'Ön izlemede hangi günlere kaç saat yazılacağını kontrol edin ve kaydedin.',
        ],
        alanlar: [
          { ad: 'Çalışanlar', aciklama: 'Görevin atanacağı bir veya birden fazla çalışan.', zorunlu: true },
          { ad: 'Kategori', aciklama: 'Görev kategorisi (ör. Toplantı, Eğitim, Uzaktan Çalışma).', zorunlu: true },
          { ad: 'Başlık', aciklama: 'Görevin kısa adı (ör. "Entegrasyon ekibiyle teknik toplantı").', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Görevle ilgili ayrıntılar.', zorunlu: false },
          { ad: 'Tarih / Tarih aralığı', aciklama: 'Görevin yapılacağı gün veya günler.', zorunlu: true },
          { ad: 'Saat aralıkları', aciklama: 'Başlangıç ve bitiş saati; gerekiyorsa mola süresi (dakika).', zorunlu: true },
          { ad: 'Çalışma saati türü', aciklama: 'Seçilen çalışanlar için geçerli çalışma saati türü.', zorunlu: false },
          { ad: 'Adımlar', aciklama: 'Görevin alt işleri ve her adıma atanan kişiler (kategori izin veriyorsa).', zorunlu: false },
          { ad: 'Dosya', aciklama: 'Göreve eklenecek belge (kategori izin veriyorsa; kategori zorunlu kılabilir).', zorunlu: false },
        ],
        sonuc: 'Görev seçilen çalışanların takvimine ve Görevlerim sayfasına eklenir.',
        notlar: [
          'Kategori listesinde yalnızca seçilen tüm çalışanlar için ortak olan kategoriler görünür.',
          'Resmi tatil günleri kategori ayarına göre görev gününe dahil edilir ya da atlanır.',
        ],
      },
      {
        baslik: 'Atanmış görevi düzenleme',
        kim: 'Yönetici',
        sekme: 'Takvim',
        aciklama: 'Atadığınız bir görevin kategorisini, başlığını, açıklamasını, saat aralıklarını ve adımlarını değiştirirsiniz.',
        adimlar: [
          'Takvimde görev kutusuna tıklayıp detayını açın.',
          'Düzenleme butonuna tıklayın.',
          'Değiştirmek istediğiniz alanları güncelleyin.',
          'Kaydedin.',
        ],
        sonuc: 'Görev yeni bilgileriyle güncellenir; ilgili çalışanların takvimi de değişir.',
        notlar: [YETKI],
      },
      {
        baslik: 'Göreve çalışan ekleme',
        kim: 'Yönetici',
        sekme: 'Takvim',
        aciklama: 'Var olan bir göreve yeni çalışanlar eklersiniz.',
        adimlar: [
          'Görev detayını açın.',
          'Atanan çalışanlar bölümünde ekleme butonuna tıklayın.',
          'Eklenecek çalışanları seçip kaydedin.',
        ],
        sonuc: 'Seçilen çalışanlar göreve eklenir ve görev onların takviminde de görünür.',
        notlar: ['Yalnızca bu göreve eklenebilecek çalışanlar listelenir.', YETKI],
      },
      {
        baslik: 'Görev adımlarını düzenleme',
        kim: 'Yönetici',
        sekme: 'Takvim',
        aciklama: 'Bir görevin adımlarını ekler, siler veya adım sorumlularını değiştirirsiniz.',
        adimlar: [
          'Görev detayını açın.',
          'Adımlar bölümünde yeni adım ekleyin ya da mevcut adımın başlığını ve sorumlularını değiştirin.',
          'Kaydedin.',
        ],
        sonuc: 'Adım listesi güncellenir.',
        notlar: ['Adımlar yalnızca adım kullanımı açık kategorilerde görünür.'],
      },
      {
        baslik: 'Adım durumunu güncelleme',
        kim: 'Herkes',
        sekme: 'Takvim',
        aciklama: 'Bir görev adımının ilerleme durumunu değiştirirsiniz.',
        adimlar: [
          'Görev detayını açın.',
          'Adımlar bölümünde ilgili adımın durumunu seçin.',
        ],
        sonuc: 'Adımın durumu güncellenir ve detayda görünür.',
      },
      {
        baslik: 'Görevi silme',
        kim: 'Yönetici',
        sekme: 'Takvim',
        aciklama: 'Atadığınız bir görevi tamamen ya da bir çalışan için kaldırırsınız.',
        adimlar: [
          'Görev detayını açın.',
          'Silme butonuna tıklayın.',
          'Onay penceresinde işlemi onaylayın.',
        ],
        sonuc: 'Görev takvimden kaldırılır.',
        notlar: ['Silinen görev geri alınamaz.', YETKI],
      },
      {
        baslik: 'Görev taleplerini listeleme ve filtreleme',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Onayınıza gelen ve geçmişte karar verdiğiniz görev günlerini listeler, filtrelersiniz.',
        adimlar: [
          'Talepler sekmesine tıklayın.',
          'Arama kutusuna çalışan adı yazın.',
          'Departman ve Tüm kategoriler listelerinden filtre seçin.',
          'Tümü, Bekleyen, Onaylanan, Reddedilen veya İptal Edildi alt sekmelerinden birini seçin.',
          'Filtreleri sıfırlamak için Filtreleri Temizle butonuna tıklayın.',
        ],
        sonuc: 'Liste seçiminize göre daralır; üstteki sayı kartları ve alt sekmelerdeki rozetler talep sayılarını gösterir.',
        notlar: ['Talepler sekmesinin yanındaki rozet, onayınızı bekleyen talep sayısını gösterir.'],
      },
      {
        baslik: 'Görev gününü onaylama',
        kim: 'Yönetici',
        sekme: 'Talepler > Bekleyen',
        aciklama: 'Onayınızı bekleyen bir görev gününü onaylarsınız.',
        adimlar: [
          'Talepler sekmesinde Bekleyen alt sekmesini açın.',
          'İlgili satırdaki yeşil onay (tik) butonuna tıklayın.',
          'İsterseniz açıklama yazın ve onaylayın.',
        ],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Kararınızla ilgili not.', zorunlu: false }],
        sonuc:
          'Akışta başka onaylayan varsa talep ona düşer ve "Beklemede" kalır; son onaylayan sizseniz durum "Onaylandı" olur.',
      },
      {
        baslik: 'Görev gününü reddetme',
        kim: 'Yönetici',
        sekme: 'Talepler > Bekleyen',
        aciklama: 'Uygun bulmadığınız bir görev gününü reddedersiniz.',
        adimlar: [
          'Talepler sekmesinde Bekleyen alt sekmesini açın.',
          'İlgili satırdaki kırmızı ret (çarpı) butonuna tıklayın.',
          'Ret gerekçenizi yazın ve onaylayın.',
        ],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Ret gerekçesi; çalışan bu notu görür.', zorunlu: false }],
        sonuc: 'Talebin durumu "Reddedildi" olur ve akış sona erer; çalışan kaydı Kayıtlarım sekmesinde bu durumla görür.',
      },
      {
        baslik: 'Toplu onaylama ve reddetme',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Birden fazla bekleyen görev gününe tek seferde karar verirsiniz.',
        adimlar: [
          'Talepler sekmesinde Toplu İşlem butonuna tıklayın.',
          'Karar vereceğiniz talepleri işaretleyin.',
          'Onayla ya da Reddet seçeneğini seçin; gerekirse açıklama yazın.',
          'İşlemi onaylayın.',
        ],
        sonuc: 'Seçilen taleplerin her biri için karar kaydedilir; akışta sıradaki onaylayan varsa talepler ona düşer.',
      },
      {
        baslik: 'Talep listesini dışa aktarma',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Filtrelediğiniz görev taleplerini dosya olarak indirirsiniz.',
        adimlar: [
          'Talepler sekmesinde filtreleri istediğiniz gibi ayarlayın.',
          'Görev Talepleri başlığının sağındaki Dışa Aktar butonuna tıklayın.',
        ],
        sonuc: 'Listede görünen talepler dosya olarak bilgisayarınıza iner.',
      },
      {
        baslik: 'Görev raporunu dışa aktarma',
        kim: 'Yönetici',
        sekme: null,
        aciklama: 'Seçtiğiniz çalışanların belirli tarih aralığındaki görev ve izin kayıtlarını rapor olarak indirirsiniz.',
        adimlar: [
          'Sayfanın sağ üstündeki Dışa Aktar butonuna tıklayın.',
          'Çalışanları, tarih aralığını ve kategorileri seçin.',
          'Rapora dahil edilecek kayıt türlerini (ör. görev, izin) ve rapor türünü belirleyin.',
          'İndir butonuna tıklayın.',
        ],
        alanlar: [
          { ad: 'Çalışanlar', aciklama: 'Rapora dahil edilecek çalışanlar.', zorunlu: false },
          { ad: 'Başlangıç / Bitiş tarihi', aciklama: 'Raporun kapsadığı dönem.', zorunlu: false },
          { ad: 'Kayıt türleri', aciklama: 'Rapora alınacak kayıtlar (ör. görev, izin).', zorunlu: false },
          { ad: 'Kategoriler', aciklama: 'Yalnızca seçilen görev kategorileri.', zorunlu: false },
          { ad: 'Rapor türü', aciklama: 'Raporun biçimi.', zorunlu: false },
        ],
        sonuc: 'Rapor dosyası bilgisayarınıza iner.',
      },
      {
        baslik: 'Kendi görevlerinize geçiş',
        kim: 'Yönetici',
        sekme: null,
        aciklama: 'Yönetici ekranından kendi görev kayıtlarınıza hızlıca geçersiniz.',
        adimlar: ['Sağ üstteki Görevlerim butonuna tıklayın.'],
        sonuc: 'Kişisel › Görevlerim sayfası açılır.',
      },
      {
        baslik: 'Görev kategorisi oluşturma',
        kim: 'İK',
        sekme: null,
        aciklama: 'Bir birim için yeni görev kategorisi tanımlarsınız (ör. Toplantı, Eğitim, Uzaktan Çalışma).',
        adimlar: [
          'Ayarlar › Organizasyon Şeması sayfasında birimin kutusuna tıklayıp Detayları Görüntüle seçeneğini seçin; Görev Yönetimi › Kategoriler sekmesini açın (ayrıntılar için Organizasyon Birim Yönetimi – Modül Ayarları sayfasına bakın).',
          'Yeni Kategori butonuna tıklayın.',
          'Kategori adını, rengini ve açıklamasını girin.',
          'Dosya ekleme, dosya zorunluluğu, adım kullanımı, çalışanın kendisinin kayıt girebilmesi ve resmi tatillerin dahil edilmesi seçeneklerini belirleyin.',
          'Giriş türünü seçip kaydedin.',
        ],
        alanlar: [
          { ad: 'Birim', aciklama: 'Kategorinin geçerli olacağı birim.', zorunlu: true },
          { ad: 'Kategori adı', aciklama: 'Listelerde görünecek ad.', zorunlu: true },
          { ad: 'Renk', aciklama: 'Kategorinin listede ve takvimde gösterileceği renk.', zorunlu: false },
          { ad: 'Açıklama', aciklama: 'Kategorinin ne için kullanılacağı.', zorunlu: false },
          { ad: 'Dosya eklenebilir', aciklama: 'Bu kategorideki kayıtlara belge eklenip eklenemeyeceği.', zorunlu: false },
          { ad: 'Dosya zorunlu', aciklama: 'Kayıt girilirken belge eklemenin zorunlu olup olmadığı.', zorunlu: false },
          { ad: 'Adımlar kullanılsın', aciklama: 'Görevlerin alt adımlara bölünüp bölünemeyeceği.', zorunlu: false },
          { ad: 'Çalışan kayıt girebilir', aciklama: 'Çalışanların Görevlerim sayfasından bu kategoriyle kendi kaydını girip giremeyeceği.', zorunlu: false },
          { ad: 'Giriş türü', aciklama: 'Kaydın nasıl girileceği.', zorunlu: false },
          { ad: 'Resmi tatilleri dikkate al', aciklama: 'Açıkken resmi tatil günleri kayda eklenmez, yarım gün tatilde saat kısalır. Kapalıyken tatil günleri de görev günü olarak yazılır.', zorunlu: false },
        ],
        sonuc: 'Kategori birimin çalışanları için kullanılabilir hale gelir.',
        notlar: [YETKI],
      },
      {
        baslik: 'Görev kategorisini düzenleme, pasife alma ve silme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Var olan bir kategorinin ayarlarını değiştirir, geçici olarak kullanıma kapatır ya da kaldırırsınız.',
        adimlar: [
          'Ayarlar › Organizasyon Şeması sayfasında birimin kutusuna tıklayıp Detayları Görüntüle seçeneğini seçin; Görev Yönetimi › Kategoriler sekmesini açın.',
          'Düzenlemek için kategori satırındaki düzenleme butonuna tıklayın, alanları güncelleyip kaydedin.',
          'Kategoriyi geçici olarak kapatmak için pasife alın; yeniden açmak için aktife alın.',
          'Tamamen kaldırmak için silme butonuna tıklayıp onaylayın.',
        ],
        sonuc: 'Pasif kategoriler yeni kayıtlarda seçilemez; mevcut kayıtlar korunur.',
        notlar: ['Kayıtlarda kullanılmış bir kategoriyi silmek yerine pasife almanız önerilir.', YETKI],
      },
      {
        baslik: 'Görev onay akışı tanımlama',
        kim: 'İK',
        sekme: null,
        aciklama: 'Bir birimde, belirli bir kategorideki görev günlerini hangi pozisyonların hangi sırayla onaylayacağını belirlersiniz.',
        adimlar: [
          'Ayarlar › Organizasyon Şeması sayfasında birimin kutusuna tıklayıp Detayları Görüntüle seçeneğini seçin; Görev Yönetimi › Görev İş Akışı sekmesini açın (ayrıntılar için Organizasyon Birim Yönetimi – Modül Ayarları sayfasına bakın).',
          'Kategoriyi seçin.',
          'Onaylayıcı pozisyonları sırasıyla ekleyin.',
          'Gerekirse belirli bir pozisyon için birim varsayılanından farklı bir akış tanımlayın.',
          'Kaydetmeden önce ekranda gösterilen, bekleyen taleplere etkisini kontrol edin ve kaydedin.',
        ],
        alanlar: [{ ad: 'Onaylayıcı pozisyonlar', aciklama: 'Talebin sırayla düşeceği pozisyonlar.', zorunlu: true }],
        sonuc: 'Bundan sonra oluşturulan görev günleri yeni akışa göre onaylayanlara düşer.',
        notlar: ['Değişiklik, onay bekleyen talepleri de etkileyebilir; kaydetmeden önce etki özetini okuyun.', 'Kategoride bu birim için akış yoksa çalışanın eklediği kayıt onaya gitmez, doğrudan onaylanır. Yöneticinin atadığı kayıt her zaman doğrudan onaylanır.', YETKI],
      },
      {
        baslik: 'Görev akışını kopyalama',
        kim: 'İK',
        sekme: null,
        aciklama: 'Bir kategorinin onay akışını başka kategorilere veya birimlere tek seferde aktarırsınız.',
        adimlar: [
          'Ayarlar › Organizasyon Şeması sayfasında birimin kutusuna tıklayıp Detayları Görüntüle seçeneğini seçin; Görev Yönetimi › Görev İş Akışı sekmesinde Kopyala butonuna tıklayın.',
          'Kaynak kategoriyi ve hedef kategorileri seçin.',
          'Hedef birimleri seçin.',
          'Birim varsayılan akışının ve pozisyona özel akışların kopyalanıp kopyalanmayacağını belirleyin.',
          'Ön izlemeyi kontrol edip kopyalayın.',
        ],
        sonuc: 'Seçilen kategori ve birimlerde akışlar kaynak akışla aynı olur.',
        notlar: [YETKI],
      },
      {
        baslik: 'Çalışan takvim rengini belirleme',
        kim: 'Yönetici',
        sekme: 'Takvim',
        aciklama: 'Takvimde bir çalışanın görevlerinin hangi renkle gösterileceğini seçersiniz.',
        adimlar: [
          'Takvim sekmesinde çalışan listesindeki renk kutusuna tıklayın.',
          'Yeni rengi seçip kaydedin.',
          'Rengi varsayılana döndürmek için renk ayarını kaldırın.',
        ],
        alanlar: [{ ad: 'Renk', aciklama: 'Çalışanın takvimdeki rengi.', zorunlu: false }],
        sonuc: 'Çalışanın görevleri takvimde seçilen renkle görünür.',
        notlar: [YETKI],
      },
    ],

    sss: [
      {
        soru: 'Talepler sekmesinde onay butonlarını neden göremiyorum?',
        cevap:
          'Onay ve ret butonları yalnızca sırası size gelmiş "Beklemede" talepler için görünür. Onaylanmış, reddedilmiş ya da iptal edilmiş taleplerde yalnızca detay butonu bulunur.',
      },
      {
        soru: 'Bir talep neden hâlâ "Beklemede" görünüyor, ben onayladım?',
        cevap:
          'Kategori için tanımlı onay akışında sizden sonra başka onaylayan varsa talep ona geçer. Mevcut Onaylayan sütunundan talebin kimde beklediğini görebilirsiniz.',
      },
      {
        soru: 'Görev Ata penceresinde bir kategori görünmüyor, neden?',
        cevap:
          'Birden fazla çalışan seçtiyseniz yalnızca hepsinin biriminde ortak olan aktif kategoriler listelenir. Kategori pasife alınmışsa da listede yer almaz.',
      },
    ],

    ipuclari: [
      'Bekleyen talepleri hızlıca bulmak için Talepler sekmesinin yanındaki rozete bakın.',
      'Çok sayıda talep biriktiyse Toplu İşlem ile tek seferde karar verin.',
      'Kalabalık ekiplerde Çalışan Seç alanından birkaç kişi seçerek takvimi sade tutun.',
    ],
  },

  {
    id: 'gorevlerim',
    grup: 'kisisel',
    sira: 60,
    baslik: 'Görevlerim',
    menu: 'Kişisel › Görevlerim',
    href: '/my-tasks',
    kim: 'ali',
    ozet:
      'Günlük görev kayıtlarınızı girdiğiniz, size atanan görevleri ve izinlerinizi takvimde gördüğünüz, kayıtlarınızın onay durumunu takip ettiğiniz sayfadır. Tüm çalışanlar kullanır.',

    ekranlar: [
      {
        sekme: null,
        aciklama:
          'Sayfa Takvim sekmesiyle açılır. Sağ üstte Kayıt Ekle ve Dışa Aktar butonları, altında Takvim ve Kayıtlarım sekmeleri bulunur.',
      },
      {
        sekme: 'Takvim',
        aciklama:
          'Haftalık takvimde görevleriniz ve izinleriniz saat bazlı gösterilir. Üstteki İzin (mavi) ve Görev (yeşil) etiketleri renkleri açıklar. Görev kutusunda kategori, başlık ve başlangıç saati yer alır (ör. "Kullanıcı kabul senaryolarının gözden geçirilmesi, 10:00").',
      },
      {
        sekme: 'Kayıtlarım',
        aciklama:
          'Girdiğiniz ve size atanan görev günlerinin listesi: Kategori, Başlık, Tarihler, Saat, Talep Tarihi, Durum, Mevcut Onaylayan ve İşlemler sütunları.',
      },
    ],

    bolumler: [
      {
        baslik: 'Kayıt durumları',
        metin: 'Kayıtlarım listesindeki Durum sütunu şu değerleri alır:',
        maddeler: [
          'Beklemede: Kaydınız onay akışında; Mevcut Onaylayan sütunu kimin onayını beklediğini gösterir.',
          'Onaylandı: Kaydınız onaylandı.',
          'Reddedildi: Kaydınız reddedildi; gerekçeyi detayda görebilirsiniz.',
          'İptal Edildi: Bekleyen kaydınızı geri çektiniz.',
        ],
      },
      {
        baslik: 'Takvim görünümü',
        maddeler: [
          'Haftalık: Takvimi hafta hafta gösterir; ok butonlarıyla haftalar arasında geçersiniz.',
          'Saat Bazlı: İşaretliyken kayıtlar saat dilimlerine yerleşir.',
          'İzin / Görev: Takvimdeki renklerin anlamını gösterir; izinleriniz mavi, görevleriniz yeşil görünür.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Takvimi görüntüleme',
        kim: 'Çalışan',
        sekme: 'Takvim',
        aciklama: 'Görevlerinizi ve izinlerinizi haftalık takvimde görürsünüz.',
        adimlar: [
          'Kişisel › Görevlerim sayfasını açın; Takvim sekmesi açık gelir.',
          'Görünüm listesinden Haftalık seçeneğini seçin.',
          'Önceki ve sonraki haftaya geçmek için ok butonlarını kullanın.',
          'Kayıtları saat dilimlerinde görmek için Saat Bazlı kutusunu işaretli tutun.',
        ],
        sonuc: 'Seçilen haftadaki görev ve izin kayıtlarınız takvimde listelenir.',
      },
      {
        baslik: 'Görev kaydı ekleme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Gün içinde yaptığınız işi (toplantı, eğitim, ofisten veya uzaktan çalışma vb.) kayıt olarak girip onaya gönderirsiniz.',
        adimlar: [
          'Sağ üstteki Kayıt Ekle butonuna tıklayın.',
          'Kategoriyi seçin (ör. Toplantı).',
          'Başlık ve açıklamayı yazın.',
          'Tarihi ya da tarih aralığını, başlangıç ve bitiş saatlerini ve varsa mola süresini girin.',
          'Kategori izin veriyorsa adımları ve dosyayı ekleyin.',
          'Ön izlemede yazılacak gün ve saatleri kontrol edip kaydedin.',
        ],
        alanlar: [
          { ad: 'Kategori', aciklama: 'Kaydın türü; yalnızca kendi kaydınızı girmenize izin verilen kategoriler listelenir.', zorunlu: true },
          { ad: 'Başlık', aciklama: 'Yaptığınız işin kısa adı (ör. "Veri görselleştirme temel eğitimi").', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'İşle ilgili ayrıntı.', zorunlu: false },
          { ad: 'Tarih / Tarih aralığı', aciklama: 'İşi yaptığınız gün veya günler.', zorunlu: true },
          { ad: 'Saat aralıkları', aciklama: 'Başlangıç ve bitiş saati; gerekiyorsa mola süresi (dakika).', zorunlu: true },
          { ad: 'Adımlar', aciklama: 'İşin alt adımları ve sorumluları (kategori izin veriyorsa).', zorunlu: false },
          { ad: 'Dosya', aciklama: 'Kayda eklenecek belge (kategori zorunlu kılabilir).', zorunlu: false },
        ],
        sonuc:
          'Kayıt otomatik olarak onaya gönderilir; kategori için tanımlı akıştaki ilk onaylayana (genellikle yöneticiniz, ör. Parla Yılmaz) düşer ve durumu "Beklemede" olur.',
        notlar: [
          'Kategori listesinde aradığınız tür yoksa o kategoride kayıt girme izniniz kapalıdır; yöneticinizle görüşün.',
          'Resmi tatil günleri kategori ayarına göre kayda dahil edilir ya da atlanır.',
        ],
      },
      {
        baslik: 'Kayıtlarınızı listeleme',
        kim: 'Çalışan',
        sekme: 'Kayıtlarım',
        aciklama: 'Girdiğiniz ve size atanan tüm görev günlerini durumlarıyla birlikte görürsünüz.',
        adimlar: [
          'Kayıtlarım sekmesine tıklayın.',
          'Durum ve Mevcut Onaylayan sütunlarından kaydın hangi aşamada olduğunu takip edin.',
          'Diğer kayıtlar için alttaki sayfa numaralarını kullanın.',
        ],
        sonuc: 'Kayıtlarınız en yeniden eskiye doğru listelenir.',
      },
      {
        baslik: 'Kayıt detayını görüntüleme',
        kim: 'Çalışan',
        sekme: 'Kayıtlarım',
        aciklama: 'Bir kaydın açıklamasını, saatlerini, adımlarını, eklerini ve onay geçmişini incelersiniz.',
        adimlar: [
          'Kayıtlarım sekmesinde ilgili satırdaki detay (göz) butonuna tıklayın ya da takvimde kayda tıklayın.',
          'Ek dosya varsa dosya adına tıklayarak indirin.',
        ],
        sonuc: 'Kaydın ayrıntıları ve onaylayanların kararları görüntülenir.',
      },
      {
        baslik: 'Bekleyen kaydı iptal etme',
        kim: 'Çalışan',
        sekme: 'Kayıtlarım',
        aciklama: 'Henüz sonuçlanmamış bir kaydınızı onaydan geri çekersiniz.',
        adimlar: [
          'Kayıtlarım sekmesinde "Beklemede" durumundaki kaydın detayını açın.',
          'İptal butonuna tıklayın.',
          'Onay penceresinde işlemi onaylayın.',
        ],
        sonuc: 'Kaydın durumu "İptal Edildi" olur ve onaylayanın listesinden düşer.',
        notlar: ['Onaylanmış veya reddedilmiş kayıtlar iptal edilemez.'],
      },
      {
        baslik: 'Adım durumunu güncelleme',
        kim: 'Çalışan',
        sekme: 'Kayıtlarım',
        aciklama: 'Size atanan görev adımlarının ilerleme durumunu güncellersiniz.',
        adimlar: [
          'Kaydın detayını açın.',
          'Adımlar bölümünde ilgili adımın durumunu seçin.',
        ],
        sonuc: 'Adımın yeni durumu kayıtta ve yöneticinin görünümünde güncellenir.',
        notlar: ['Adımlar yalnızca adım kullanımı açık kategorilerde görünür.'],
      },
      {
        baslik: 'Kaydı düzenleme ve silme',
        kim: 'Çalışan',
        sekme: 'Kayıtlarım',
        aciklama: 'Yetkiniz açıksa kaydın bilgilerini değiştirebilir ya da kaydı kaldırabilirsiniz. Çoğu kullanıcıda bu seçenek kapalıdır; bunun yerine bekleyen kaydınızı iptal edip yeniden girersiniz.',
        adimlar: [
          'Kaydın detayını açın.',
          'Düzenleme butonuyla bilgileri güncelleyip kaydedin ya da silme butonuyla kaydı kaldırın.',
        ],
        sonuc: 'Kayıt güncellenir veya listeden kaldırılır.',
        notlar: [
          'Kişisel görünümde kayıtlar genellikle düzenlenemez ve silinemez; bekleyen kaydınızı iptal edip yeniden girmeniz gerekir. Değişiklik gerekiyorsa yöneticinizle görüşün.',
          YETKI,
        ],
      },
      {
        baslik: 'Görev kayıtlarını dışa aktarma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Belirli bir dönemdeki görev ve izin kayıtlarınızı dosya olarak indirirsiniz.',
        adimlar: [
          'Sağ üstteki Dışa Aktar butonuna tıklayın.',
          'Tarih aralığını, kategorileri ve kayıt türlerini (ör. görev, izin) seçin.',
          'İndir butonuna tıklayın.',
        ],
        alanlar: [
          { ad: 'Başlangıç / Bitiş tarihi', aciklama: 'Raporun kapsadığı dönem.', zorunlu: false },
          { ad: 'Kategoriler', aciklama: 'Yalnızca seçilen görev kategorileri.', zorunlu: false },
          { ad: 'Kayıt türleri', aciklama: 'Rapora alınacak kayıtlar.', zorunlu: false },
        ],
        sonuc: 'Kayıtlarınızı içeren dosya bilgisayarınıza iner.',
      },
      {
        baslik: 'Google Takvim ile eşitleme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'DHR’daki görev ve izin kayıtlarınızın Google Takviminizde de görünmesini sağlarsınız.',
        adimlar: [
          'Takvim bağlantısı ayarlarını açın ve Google hesabınızı bağlayın.',
          'Takvime aktarılacak kayıt türlerini, saat dilimini ve dili seçin.',
          'Takviminizde görmek istemediğiniz kişileri listeden çıkarın.',
          'Eşitlemeyi başlatın; bağlantıyı istediğiniz zaman kaldırabilirsiniz.',
        ],
        sonuc: 'Seçtiğiniz kayıtlar Google Takviminize aktarılır.',
        notlar: [YETKI],
      },
    ],

    sss: [
      {
        soru: 'Kayıt Ekle penceresinde istediğim kategoriyi bulamıyorum.',
        cevap:
          'Yalnızca çalışanların kendi kaydını girmesine izin verilen ve aktif olan kategoriler listelenir. Diğer görevler yöneticiniz tarafından atanır.',
      },
      {
        soru: 'Kaydımı yanlış girdim, nasıl düzeltirim?',
        cevap:
          'Kayıt hâlâ "Beklemede" ise detayından iptal edip doğru bilgilerle yeniden girin. Onaylanmış bir kayıt için yöneticinizle görüşün.',
      },
      {
        soru: '"Mevcut Onaylayan" sütununda neden "-" yazıyor?',
        cevap: 'Kayıt sonuçlanmış (onaylanmış, reddedilmiş ya da iptal edilmiş) olduğunda bekleyen onaylayan kalmaz ve "-" gösterilir.',
      },
    ],

    ipuclari: [
      'Kaydı girmeden önce ön izlemede günleri ve saatleri kontrol edin; tarih aralığı seçtiyseniz her gün ayrı kayıt olarak oluşur.',
      'Takvimde mavi kutular izinlerinizi, yeşil kutular görevlerinizi gösterir.',
    ],
  },
]
