// İşe Giriş / Çıkış modülü — kılavuz içeriği
const YETKI = 'Bu işlem yetkinize bağlı olarak görünür.'

export default [
  {
    id: 'ise-giris-cikis',
    grup: 'yonetim',
    sira: 140,
    baslik: 'İşe Giriş / Çıkış',
    menu: 'Yönetim › İşe Giriş / Çıkış',
    href: '/lifecycle',
    kim: 'parla',
    ozet:
      'Yeni çalışanların işe giriş, ayrılan çalışanların işten çıkış süreçlerini tek ekrandan yönettiğiniz sayfadır. ' +
      'Yöneticiler ve İK; süreç başlatır, onaylar, görevleri takip eder, deneme süresini izler ve çıkışı kesinleştirir.',

    ekranlar: [
      {
        sekme: null,
        aciklama:
          'Sayfa İşe Giriş > Süreçler > Devam Eden Süreçler görünümüyle açılır. Üstte Devam Eden, Tamamlanmaya Hazır, ' +
          'İncelemenizi Bekleyen ve Gecikmiş sayı kartları; altta Çalışan, Departman, İşe Giriş Tarihi, Neyi Bekliyor, ' +
          'İlerleme (ör. 3/5 bölüm), Durum ve İşlemler sütunlarından oluşan liste bulunur.',
      },
      {
        sekme: 'İşe Giriş > Süreçler > Onay Bekleyen',
        aciklama:
          'Başlatılmış ama henüz onaylanmamış işe giriş süreçleri. "Mevcut Onaylayan" sütunu sürecin şu an kimin onayında olduğunu gösterir; ' +
          'satırdaki onay, ret, görüntüleme ve iptal butonlarıyla işlem yapılır.',
      },
      {
        sekme: 'İşe Giriş > Süreçler > Tamamlanan',
        aciklama: 'Tüm bölümleri bitmiş ve tamamlanmış işe giriş süreçleri; "Tamamlandı · tarih" bilgisiyle listelenir.',
      },
      {
        sekme: 'İşe Giriş > Talepler',
        aciklama:
          'İşe alım talepleri listesi. Çalışan, Departman, Mevcut Onaylayan, Talep Tarihi, İşe Giriş Tarihi, Talep Durumu ve İşlemler sütunları yer alır. ' +
          'Üstte arama, Departman filtresi, Toplu İşlem, Filtreleri Temizle ve Dışa Aktar butonları bulunur.',
      },
      {
        sekme: 'İşe Giriş > Talepler > Bekleyen Talepler',
        aciklama: 'Onayınızı bekleyen işe alım talepleri. Satırdaki yeşil onay ve kırmızı ret butonlarıyla karar verirsiniz.',
      },
      {
        sekme: 'İşe Giriş > Deneme Süresi',
        aciklama:
          'Deneme Süresi Takibi ekranı. Devam Eden, Tamamlanan ve Tümü sekmeleri; Çalışan, Departman, İşe Giriş Tarihi, ' +
          'Değerlendirmeler (ör. "30. gün · 02.12.2026 · Bekliyor"), Sonraki Değerlendirme ve İşlemler sütunları vardır.',
      },
      {
        sekme: 'İşten Çıkış',
        aciklama:
          'İşten Çıkış > Süreçler görünümü. Üstte Devam Eden, Kesinleşmeye Hazır, İncelemenizi Bekleyen ve Gecikmiş kartları; ' +
          'listede Çalışan, Departman, Çıkış Tarihi, Neyi Bekliyor (ör. "Kesinleşmeye hazır"), İlerleme, Durum ve İşlemler sütunları bulunur. ' +
          'Sağ üstte "Çalışanı İşten Çıkar" butonu yer alır.',
      },
      {
        sekme: 'İşten Çıkış > Süreçler > Onay Bekleyen',
        aciklama: 'Onay sürecindeki işten çıkışlar; "Mevcut Onaylayan" sütunu talebin kimde beklediğini gösterir.',
      },
      {
        sekme: 'İşten Çıkış > Süreçler > Kesinleşen',
        aciklama: 'Kesinleştirilmiş, yani çalışanın ayrılışı tamamlanmış işten çıkış süreçleri.',
      },
      {
        sekme: 'İşten Çıkış > Talepler',
        aciklama:
          'İşten çıkış talepleri. Çalışan, Departman, Mevcut Onaylayan, Talep Tarihi, Çıkış Tarihi, Talep Durumu ve İşlemler sütunları vardır.',
      },
      {
        sekme: 'İşten Çıkış > Talepler > Bekleyen Talepler',
        aciklama: 'Onayınızı bekleyen işten çıkış talepleri.',
      },
    ],

    bolumler: [
      {
        baslik: 'Sayfanın yapısı',
        metin: 'Sayfa iki ana sekmeden oluşur; her biri kendi alt sekmelerine ayrılır.',
        maddeler: [
          'İşe Giriş: Süreçler (Devam Eden Süreçler, Onay Bekleyen, Tamamlanan, İptal / Reddedilen), Talepler (Tüm, Bekleyen, Onaylanan, Reddedilen Talepler) ve Deneme Süresi (Devam Eden, Tamamlanan, Tümü).',
          'İşten Çıkış: Süreçler (Devam Eden Süreçler, Onay Bekleyen, Kesinleşen, İptal / Reddedilen) ve Talepler (Tüm, Bekleyen, Onaylanan, Reddedilen Talepler).',
          'Sekme adlarının yanındaki kırmızı rozet, o sekmedeki kayıt sayısını gösterir.',
        ],
      },
      {
        baslik: 'Sayı kartları',
        metin: 'Süreçler sekmesinin üstündeki kartlar hızlı durum özeti verir; karta tıklayarak listeyi o duruma göre süzebilirsiniz.',
        maddeler: [
          'Devam Eden: Hâlâ açık olan süreçler.',
          'Tamamlanmaya Hazır (işe girişte) / Kesinleşmeye Hazır (çıkışta): Zorunlu tüm adımları bitmiş, son onayınızı bekleyen süreçler.',
          'İncelemenizi Bekleyen: Çalışanın doldurduğu ve sizin kontrol etmeniz gereken maddeler bulunan süreçler.',
          'Gecikmiş: Hedef tarihi geçtiği hâlde bitmemiş süreçler.',
        ],
      },
      {
        baslik: 'Süreç ve talep durumları',
        maddeler: [
          'Onay Bekliyor: Süreç başlatıldı, onay zincirindeki kişinin kararı bekleniyor.',
          'Devam Ediyor: Onaylandı; çalışan ve sorumlular maddeleri/görevleri dolduruyor.',
          'Tamamlandı (işe giriş) / Kesinleşti (işten çıkış): Tüm adımlar bitti ve süreç kapatıldı.',
          'İptal / Reddedildi: Süreç iptal edildi ya da onay aşamasında reddedildi.',
        ],
      },
      {
        baslik: '"Neyi Bekliyor" sütunu',
        metin:
          'Her süreçte sırada hangi adımın olduğunu ve kimin işlem yapması gerektiğini gösterir. Örnek: "Zorunlu madde onaylanmadı · Çalışan". ' +
          'Yanındaki "+1" gibi ifade, bekleyen başka adımlar olduğunu belirtir.',
      },
      {
        baslik: 'Süreç maddeleri ve görevler',
        metin: 'Bir süreç, şablondan ya da elle eklenen maddelerden ve görevlerden oluşur.',
        maddeler: [
          'Madde: Çalışandan istenen bilgi ya da belge (ör. kimlik fotokopisi, banka bilgisi, diploma), bilgilendirme metni veya zimmet teslimi.',
          'Sorumlu: Maddeyi kimin dolduracağı (çalışan, yönetici, İK vb.).',
          'Zorunlu (bloklayan) madde: Bitmeden süreç tamamlanamaz.',
          'Görev: Bölüm başlığı altında, bir pozisyona atanan iş (ör. bilgisayar hazırlığı, e-posta hesabı açılması).',
        ],
      },
    ],

    islemler: [
      // ---------- Genel görüntüleme ve filtreleme ----------
      {
        baslik: 'Süreçleri listeleme ve filtreleme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'İşe giriş ve işten çıkış süreçlerini durumlarına göre görüntüler, arar ve süzersiniz.',
        adimlar: [
          'Üstten İşe Giriş veya İşten Çıkış sekmesini, ardından Süreçler sekmesini açın.',
          'Durum sekmelerinden birini seçin: Devam Eden Süreçler, Onay Bekleyen, Tamamlanan/Kesinleşen veya İptal / Reddedilen.',
          'Arama kutusuna çalışan adı veya numarası yazın; gerekirse Departman listesinden birim seçin.',
          'İsterseniz üstteki sayı kartlarından birine tıklayarak listeyi o duruma göre daraltın.',
          'Tarih sütununun başlığına tıklayarak sıralamayı değiştirin; tüm süzgeçleri kaldırmak için "Filtreleri Temizle"ye tıklayın.',
        ],
        sonuc: 'Liste seçtiğiniz kriterlere göre güncellenir; sayfa altından sayfalar arasında geçiş yapabilirsiniz.',
      },
      {
        baslik: 'Süreç detayını görüntüleme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Bir sürecin tüm bölümlerini, maddelerini, görevlerini ve onay geçmişini tek pencerede görürsünüz.',
        adimlar: [
          'Listede ilgili çalışanın satırını bulun.',
          'İşlemler sütunundaki göz simgesine (Detaylar) tıklayın.',
          'Açılan pencerede bölümleri, madde durumlarını, görevleri ve onay adımlarını inceleyin.',
        ],
        sonuc: 'Detay penceresinden madde onaylama, görev ekleme, tarih değiştirme gibi diğer işlemlere geçebilirsiniz.',
      },
      {
        baslik: 'Çalışanın geçmiş süreçlerini görüntüleme',
        kim: 'Yönetici',
        sekme: null,
        aciklama: 'Çalışan adına tıklayarak o kişiye ait önceki ve açık işe giriş/çıkış süreçlerini görürsünüz.',
        adimlar: ['Listede çalışanın adına tıklayın.', 'Açılan ekranda kişinin süreç geçmişini inceleyin.'],
        notlar: [YETKI],
      },

      // ---------- İşe giriş süreci ----------
      {
        baslik: 'Yeni çalışan ekleme (işe giriş süreci başlatma)',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'İşe başlayacak yeni bir çalışanın kaydını oluşturur ve işe giriş sürecini aynı işlemde başlatırsınız. Süreç, seçtiğiniz Çalışan Formu şablonundaki maddeler ve işe giriş görev listesiyle oluşur.',
        adimlar: [
          'İşe Giriş > Süreçler sekmesinde sağ üstteki "Yeni Çalışan Ekle" butonuna tıklayın. Çalışan Yönetimi\'ndeki yeni çalışan penceresinin aynısı açılır ve yeni bir çalışan kaydı oluşturulur (var olan çalışan seçilmez).',
          'Temel Bilgiler, Organizasyon, Bordro Bilgileri ve Ekipman sekmelerini doldurun.',
          'Gereklilikler sekmesinde Çalışan Formu şablonunu ve işe giriş görev listesini seçin; liste, çalışanın birimine uygun şablonları gösterir.',
          'İşe giriş tarihini, hedef bitiş tarihini ve çalışanın formu doldurması için tanınan gün sayısını girin.',
          'Gerekirse şablondaki maddeleri ve görevleri düzenleyin, yeni madde ekleyin veya çıkarın; çalışana form bağlantısı gitsin istiyorsanız "Form bağlantısını çalışanın e-postasına gönder" seçeneğini işaretleyin.',
          'Kaydedin. Çalışan, pozisyon ataması, zimmet talebi ve işe giriş süreci aynı işlemde oluşur.',
        ],
        alanlar: [
          { ad: 'Çalışan', aciklama: 'Yeni çalışanın bilgileri (Temel Bilgiler, Organizasyon, Bordro Bilgileri, Ekipman sekmeleri).', zorunlu: true },
          { ad: 'Şablon', aciklama: 'Gereklilikler sekmesinde seçilen, maddeleri ve görevleri hazır getiren Çalışan Formu şablonu ve işe giriş görev listesi.', zorunlu: false },
          { ad: 'İşe Giriş Tarihi', aciklama: 'Çalışanın işe başlayacağı gün.', zorunlu: true },
          { ad: 'Hedef Tarih', aciklama: 'Sürecin en geç bitmesi gereken gün; geçerse süreç "Gecikmiş" sayılır.', zorunlu: false },
          { ad: 'Doldurma Süresi (gün)', aciklama: 'Çalışanın kendisine gönderilen formu doldurması için verilen süre.', zorunlu: false },
          { ad: 'Maddeler', aciklama: 'Başlık, açıklama, sorumlu, zorunlu olup olmadığı, varsa ek dosya.', zorunlu: false },
          { ad: 'Görevler', aciklama: 'Bölüm başlığı, görev adı, sorumlu pozisyon, not, zorunluluk.', zorunlu: false },
        ],
        sonuc:
          'Birimde (veya üst biriminde) işe giriş iş akışı tanımlıysa süreç "Onay Bekliyor" durumuyla Onay Bekleyen sekmesine düşer ve onay zincirindeki ilk kişiye (genellikle birim yöneticisi veya İK) iletilir; ' +
          'akış tanımlı değilse onay adımı atlanır ve süreç doğrudan "Devam Ediyor" olur. ' +
          'Onaylandığında "Devam Ediyor" durumuna geçer ve çalışana form bağlantısı gönderilir.',
        notlar: [
          'Zaten kayıtlı bir çalışan için işe giriş süreci, çalışan kartının İşe Giriş / Çıkış sekmesindeki "İşe Giriş Süreci Başlat" düğmesiyle açılır.',
        ],
      },
      {
        baslik: 'Süreci onaylama veya reddetme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler > Onay Bekleyen',
        aciklama: 'Onayınıza düşen işe giriş veya işten çıkış sürecine karar verirsiniz.',
        adimlar: [
          'Onay Bekleyen sekmesini açın; "Mevcut Onaylayan" sütununda adınızın olduğu satırı bulun.',
          'Onaylamak için yeşil onay butonuna, reddetmek için kırmızı çarpı butonuna tıklayın.',
          'Açılan pencereye isterseniz açıklama yazın ve onaylayın.',
        ],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Kararınızın gerekçesi; özellikle ret durumunda yazmanız önerilir.', zorunlu: false }],
        sonuc:
          'Onayda süreç zincirdeki bir sonraki onaylayana geçer; son onaydan sonra "Devam Ediyor" durumuna gelir. ' +
          'Reddedilirse süreç "İptal / Reddedilen" sekmesine taşınır ve başlatan kişiye bildirilir.',
      },
      {
        baslik: 'Çalışanın doldurduğu maddeyi inceleme (onay / ret)',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Çalışanın yüklediği belge veya girdiği bilgiyi kontrol edip kabul ya da geri çevirirsiniz.',
        adimlar: [
          '"İncelemenizi Bekleyen" kartına tıklayın veya ilgili sürecin detayını açın.',
          'İncelenecek maddeyi açın; yüklenen belgeyi görüntüleyin veya indirin.',
          'Uygunsa onaylayın; uygun değilse reddedin ve ret nedenini yazın.',
        ],
        alanlar: [{ ad: 'Ret Nedeni', aciklama: 'Çalışanın neyi düzeltmesi gerektiği.', zorunlu: false }],
        sonuc: 'Onaylanan madde tamamlanmış sayılır ve ilerleme çubuğu artar. Reddedilen madde çalışana yeniden doldurulmak üzere geri döner.',
      },
      {
        baslik: 'Maddeyi sorumlu adına doldurma',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Sorumlusu siz olan ya da çalışan yerine girmeniz gereken bir maddeye bilgi girer veya belge yüklersiniz.',
        adimlar: ['Sürecin detayını açın.', 'İlgili maddeyi seçin.', 'Bilgiyi yazın ya da belgeyi yükleyin ve kaydedin.'],
        sonuc: 'Madde doldurulmuş olarak işaretlenir.',
      },
      {
        baslik: 'Maddeyi "Uygulanamaz" olarak işaretleme ve yeniden açma',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Bu çalışan için gerekmeyen bir maddeyi süreç dışında bırakır; yanlışlıkla kapattığınız ya da tekrar istemeniz gereken maddeyi yeniden açarsınız.',
        adimlar: [
          'Sürecin detayını açın.',
          'Maddenin yanındaki seçeneklerden "uygulanamaz" işaretini seçin.',
          'Geri almak veya maddeyi yeniden istemek için aynı yerden yeniden açın.',
        ],
        sonuc: 'Uygulanamaz maddeler ilerleme hesabında tamamlanmış sayılır; yeniden açılan madde tekrar doldurulmayı bekler.',
      },
      {
        baslik: 'Sürece madde veya şablon ekleme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Başlamış bir sürece sonradan yeni madde ya da başka bir şablonun maddelerini eklersiniz.',
        adimlar: [
          'Sürecin detayını açın.',
          'Madde ekleme alanına geçin.',
          'Bir şablon seçin ya da maddeyi elle tanımlayın (başlık, açıklama, sorumlu, zorunluluk, ek dosya).',
          'Kaydedin.',
        ],
        sonuc: 'Yeni maddeler sürece eklenir; çalışana ait olanlar çalışanın formunda görünür.',
      },
      {
        baslik: 'Sürece görev ekleme, görev durumunu güncelleme ve görev silme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Süreçle ilgili işleri (ör. bilgisayar hazırlığı, kart basımı, hesap kapatma) ilgili pozisyona görev olarak atarsınız.',
        adimlar: [
          'Sürecin detayını açın ve görevler bölümüne gelin.',
          'Yeni görev için bölüm başlığını, görev adını ve sorumlu pozisyonu girin; bitmeden süreç kapanmasın istiyorsanız zorunlu işaretleyin.',
          'Var olan bir görevin durumunu (bekliyor, devam ediyor, tamamlandı gibi) değiştirin.',
          'Gerekmeyen görevi silin.',
        ],
        alanlar: [
          { ad: 'Bölüm Başlığı', aciklama: 'Görevin gruplanacağı başlık (ör. Bilgi İşlem).', zorunlu: false },
          { ad: 'Görev', aciklama: 'Yapılacak işin adı.', zorunlu: true },
          { ad: 'Sorumlu Pozisyon', aciklama: 'Görevi yapacak pozisyon.', zorunlu: false },
          { ad: 'Zorunlu', aciklama: 'Tamamlanmadan sürecin kapanmasını engeller.', zorunlu: false },
        ],
        sonuc: 'Görev sorumlu pozisyondaki kişilere görünür; tamamlandıkça süreç ilerlemesi güncellenir.',
      },
      {
        baslik: 'Hedef tarihi değiştirme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Sürecin en geç bitmesi gereken tarihi ileri veya geri alırsınız.',
        adimlar: ['Sürecin detayını açın.', 'Hedef tarih alanını düzenleyin.', 'Kaydedin.'],
        sonuc: 'Yeni tarih geçmediyse süreç "Gecikmiş" kartından çıkar.',
      },
      {
        baslik: 'Çalışana form bağlantısını yeniden gönderme / yenileme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Çalışan, kendi maddelerini doldurması için gönderilen bağlantıyı almadıysa veya süresi dolduysa bağlantıyı yeniden iletir ya da yenilersiniz.',
        adimlar: [
          'Sürecin detayını açın.',
          'Form bağlantısı bölümünde bağlantıyı görüntüleyin veya kopyalayın.',
          'Bağlantıyı yeniden göndermeyi ya da yeni bağlantı oluşturmayı seçin.',
        ],
        sonuc: 'Çalışana yeni bağlantı iletilir; yenilenen bağlantıda eskisi geçersiz olur.',
        notlar: ['Bağlantının geçerlilik süresi Ayarlar ekranında belirlenir.'],
      },
      {
        baslik: 'Süreç raporu alma',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Bir sürecin maddelerini, görevlerini ve onay geçmişini içeren raporu indirirsiniz.',
        adimlar: ['Sürecin detayını açın.', 'Rapor seçeneğini kullanın; isterseniz rapora girecek bölümleri seçin.', 'Dosyayı indirin.'],
        sonuc: 'Süreç özeti dosya olarak bilgisayarınıza iner.',
        notlar: [YETKI],
      },
      {
        baslik: 'İşe giriş sürecini tamamlama',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Tüm zorunlu maddeleri ve görevleri bitmiş süreci kapatırsınız.',
        adimlar: [
          '"Tamamlanmaya Hazır" kartına tıklayın veya sürecin detayını açın.',
          'Sistemin gösterdiği kontrol listesinde eksik kalan zorunlu adım olmadığını görün (SGK işe giriş, zimmet teslimi, bordro başlangıcı gibi).',
          'Süreci tamamlayın.',
        ],
        sonuc: 'Süreç "Tamamlandı" durumuyla Tamamlanan sekmesine taşınır ve çalışan aktif çalışanlar arasına alınır.',
        notlar: ['Hangi adımların zorunlu olduğu, birim için Ayarlar ekranında belirlenir.'],
      },
      {
        baslik: 'İşe giriş bölümlerini yürütme (zimmet teslimi, SGK işe giriş, bordro başlangıcı)',
        kim: 'İK',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Birimde zorunlu tutulan işe giriş bölümlerini süreç detayından tamamlarsınız.',
        adimlar: [
          'Sürecin detayını açın.',
          'Zimmet Teslimi: "Zimmet Ata" ile birimin envanter paketini seçin. Paket kategorileri zimmet talebi olarak açılır; zimmet teslim edilene kadar bölüm bekler, son teslimden sonra kendiliğinden tamamlanır.',
          'SGK İşe Giriş: "SGK İşe Giriş Bildir" düğmesiyle bildirgeyi süreçten gönderin ya da Bordro Yönetimi › SGK Bildirgeleri › Bekleyen İşe Giriş ekranından bildirin. Başarılı bildirge gelince bölüm kendiliğinden tamamlanır.',
          'Bordro Başlangıcı: Sabit ödeme kalemlerini girip "Bordro Başlangıcını Tamamla" butonuna tıklayın.',
        ],
        sonuc: 'Tamamlanan bölümler kontrol listesinde işaretlenir; tüm zorunlu bölümler bitince süreç "Tamamlanmaya Hazır" olur.',
        notlar: [
          'Birim kurallarında zorunlu tutulmayan bölümler baştan tamamlanmış gelir.',
          'İşten çıkış sürecinde SGK işten çıkış bildirgesi de süreç detayındaki "SGK\'ya Bildir" düğmesiyle gönderilir.',
          YETKI,
        ],
      },
      {
        baslik: 'SGK işe giriş / çıkış bildirimini dışarıda yapıldı olarak işaretleme',
        kim: 'İK',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'SGK bildirgesi DHR dışında verildiyse, belge numarasını girerek bu adımı tamamlanmış sayarsınız.',
        adimlar: ['Sürecin detayını açın.', 'SGK adımında dışarıda yapıldı seçeneğini seçin.', 'Bildirge belge numarasını yazın ve kaydedin.'],
        alanlar: [{ ad: 'Belge No', aciklama: 'SGK bildirgesinin numarası.', zorunlu: false }],
        sonuc: 'SGK adımı tamamlanmış olarak işaretlenir.',
        notlar: ['Bu seçenek yalnızca birim ayarlarında dışarıdan SGK bildirimine izin verildiyse görünür.', YETKI],
      },
      {
        baslik: 'SGK işe giriş / çıkış bildirgesini sorgulama ve indirme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Çalışanın SGK işe giriş veya işten çıkış bildirgesini sorgular, belgeyi indirirsiniz.',
        adimlar: [
          'Sürecin detayını açın ve SGK bölümüne gelin.',
          'Bildirge sorgulamayı başlatın; gerekiyorsa tarih belirtin.',
          'Sonuçta bildirge görünüyorsa belgeyi indirin.',
        ],
        sonuc: 'Bildirge bilgisi süreçte görünür ve belge olarak indirilebilir.',
        notlar: [YETKI],
      },
      {
        baslik: 'Süreci iptal etme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Süreçler',
        aciklama: 'Artık devam etmeyecek bir işe giriş veya işten çıkış sürecini durdurursunuz.',
        adimlar: [
          'Listede ilgili satırı bulun.',
          'İşlemler sütunundaki kırmızı yasak simgesine (Süreci İptal Et) tıklayın.',
          'İptal nedenini yazın ve onaylayın.',
        ],
        alanlar: [{ ad: 'İptal Nedeni', aciklama: 'Sürecin neden durdurulduğu.', zorunlu: false }],
        sonuc: 'Süreç "İptal / Reddedilen" sekmesine taşınır.',
      },

      // ---------- Talepler ----------
      {
        baslik: 'İşe alım taleplerini görüntüleme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Talepler',
        aciklama: 'Pozisyon bazında açılmış işe giriş taleplerini ve onay durumlarını izlersiniz.',
        adimlar: [
          'İşe Giriş > Talepler sekmesini açın.',
          'Tüm Talepler, Bekleyen Talepler, Onaylanan Talepler veya Reddedilen Talepler sekmesini seçin.',
          'Arama kutusu ve Departman filtresiyle listeyi daraltın.',
          'Ayrıntı için satırdaki göz simgesine tıklayın.',
        ],
        sonuc: 'Talebin kimde beklediğini "Mevcut Onaylayan" sütununda, son durumunu "Talep Durumu" sütununda görürsünüz.',
      },
      {
        baslik: 'İşe alım / işten çıkış talebini onaylama veya reddetme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Talepler > Bekleyen Talepler',
        aciklama: 'Onayınıza düşen talebe satır üzerinden karar verirsiniz.',
        adimlar: [
          'Bekleyen Talepler sekmesini açın.',
          'İlgili satırda yeşil onay veya kırmızı ret butonuna tıklayın.',
          'Açıklama yazıp işlemi onaylayın.',
        ],
        sonuc: 'Onaylanan talep bir sonraki onaylayana geçer, son onayda "Onaylanan Talepler" sekmesine taşınır. Reddedilen talep "Reddedilen Talepler" sekmesine düşer.',
      },
      {
        baslik: 'Talepleri dışa aktarma',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Talepler',
        aciklama: 'Ekrandaki talep listesini Excel veya benzeri bir dosyaya aktarırsınız.',
        adimlar: [
          'Talepler sekmesinde istediğiniz süzgeçleri uygulayın.',
          'Sağ üstteki "Dışa Aktar" butonuna tıklayın.',
          'Dosya biçimini, durumları, çalışanları ve tarih aralığını seçin.',
          'İndirme işlemini başlatın.',
        ],
        alanlar: [
          { ad: 'Biçim', aciklama: 'İndirilecek dosya türü.', zorunlu: false },
          { ad: 'Durum', aciklama: 'Hangi talep/onay durumlarının dahil edileceği.', zorunlu: false },
          { ad: 'Çalışanlar', aciklama: 'Belirli kişilerle sınırlamak için.', zorunlu: false },
          { ad: 'Başlangıç / Bitiş Tarihi', aciklama: 'Talep tarih aralığı.', zorunlu: false },
        ],
        sonuc: 'Seçtiğiniz kayıtlar dosya olarak bilgisayarınıza iner.',
      },
      {
        baslik: 'Toplu işe giriş (Excel ile)',
        kim: 'İK',
        sekme: null,
        aciklama: 'Birden fazla çalışanın işe giriş sürecini tek seferde, Excel dosyasıyla başlatırsınız.',
        adimlar: [
          'Çalışan Yönetimi sayfasında Yeni Çalışan Ekle penceresini açın ve pencerenin üstündeki "Toplu İşe Giriş" butonuna tıklayın (bu buton İşe Giriş / Çıkış sayfasından açılan pencerede görünmez).',
          'Birimi seçip taslağı (.xlsx) indirin.',
          'Taslağı çalışan bilgileriyle doldurup yükleyin (en fazla 500 satır, 5 MB).',
          'Kontrol adımında satırları ve hata uyarılarını kontrol edin, hatalı satırları düzeltin.',
          'Uygunsa Başlat deyin.',
        ],
        sonuc: 'Her geçerli satır için bir işe giriş süreci oluşur ve onay akışına girer; hatalı satırlar ön izlemede işaretlenir, oluşturulmaz.',
        notlar: ['Talepler sekmesindeki "Toplu İşlem" butonu yalnız bekleyen talepleri topluca onaylamak veya reddetmek içindir.'],
      },
      {
        baslik: 'Toplu işten çıkış (Excel ile veya doğrudan)',
        kim: 'İK',
        sekme: 'İşten Çıkış',
        aciklama: 'Birden fazla çalışanın çıkışını tek seferde başlatırsınız.',
        adimlar: [
          'İşten Çıkış sekmesinde "Çalışanı İşten Çıkar" butonuna tıklayın ve açılan pencerenin başlığındaki "Toplu İşten Çıkış" butonuna tıklayın.',
          'Yöntemi seçin: "DHR ile" (çalışanları ekrandan seçip tarih, sebep ve diğer bilgileri ekranda girme) veya "Excel ile" (taslağı indirip doldurup yükleme; en fazla 500 satır, 5 MB).',
          'Ön izlemede satırları kontrol edin; gerekirse kişi bazında tarih ve sebebi değiştirin.',
          'İşlemi başlatın.',
        ],
        sonuc: 'Her çalışan için işten çıkış süreci açılır ve onay akışına düşer.',
        notlar: [
          'Seçilen çalışanların birimlerinde ortak tanımlı çıkış nedenleri listelenir.',
          'Kıdem ve ihbar tazminatı bu işlemde uygulanmaz; her çalışanın işten çıkış sürecindeki bölümlerden yürütülür.',
          'Talepler sekmesindeki "Toplu İşlem" butonu yalnız bekleyen talepleri topluca onaylamak veya reddetmek içindir.',
        ],
      },

      // ---------- Deneme süresi ----------
      {
        baslik: 'Deneme süresini takip etme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Deneme Süresi',
        aciklama: 'Yeni çalışanların deneme süresi değerlendirmelerinin tarihlerini ve durumlarını izlersiniz.',
        adimlar: [
          'İşe Giriş > Deneme Süresi sekmesini açın.',
          'Devam Eden, Tamamlanan veya Tümü sekmesini seçin.',
          'Arama kutusu ve Departman filtresiyle listeyi daraltın.',
          'Değerlendirmeler sütununda her değerlendirmenin gününü, tarihini ve durumunu (ör. "30. gün · 02.12.2026 · Bekliyor") görün.',
        ],
        sonuc: '"Sonraki Değerlendirme" sütunu sıradaki değerlendirmenin ne zaman yapılacağını gösterir.',
      },
      {
        baslik: 'Deneme süresi değerlendirme sonuçlarını görüntüleme',
        kim: 'Yönetici',
        sekme: 'İşe Giriş > Deneme Süresi',
        aciklama: 'Yapılmış bir deneme süresi değerlendirme anketinin cevaplarını incelersiniz.',
        adimlar: [
          'Deneme Süresi listesinde çalışanın satırını bulun.',
          'İşlemler sütunundaki göz simgesine tıklayın.',
          'İlgili değerlendirmeyi seçip sonuçları görüntüleyin.',
        ],
        sonuc: 'Anket cevapları ekranda görünür. Anketi henüz yapılmamış değerlendirmelerde "Anket yok" yazar.',
      },

      // ---------- İşten çıkış ----------
      {
        baslik: 'Çalışanı işten çıkarma (işten çıkış süreci başlatma)',
        kim: 'Yönetici',
        sekme: 'İşten Çıkış',
        aciklama: 'Ayrılacak bir çalışan için işten çıkış talebi ve sürecini başlatırsınız.',
        adimlar: [
          'İşten Çıkış > Süreçler sekmesinde sağ üstteki "Çalışanı İşten Çıkar" butonuna tıklayın. Aynı pencere Çalışan Yönetimi\'ndeki "İşten Çıkarma İşlemleri" › "Çalışanı İşten Çıkar" seçeneğinden ve çalışan kartındaki Çalışan İşlemleri › "Çalışanı Sonlandır" seçeneğinden de açılır.',
          'Pencere dört adımdan oluşur: Çıkış bilgisi, Süreç, Tazminat, Özet ve onay. Adımlar arasında "Devam Et" ve "Geri" butonlarıyla geçin.',
          'Çıkış bilgisi: Çalışan Seç alanından çalışanı seçin; İşten Çıkarma Tarihi ve İşten Çıkarma Sebebi alanlarını doldurun, kullanılmamış izin ön izlemesini kontrol edin. Tekrar İşe Alınabilir seçeneğini işaretleyin ve varsa Açıklamalar alanına not yazın.',
          'Süreç: Çıkış görev şablonunu seçin; gerekirse görevleri düzenleyin. Seçim yapmazsanız birimin varsayılan işten çıkış görev listesi uygulanır.',
          'Tazminat: Kıdem ve ihbar tazminatı için Ödenecek / Uygulanacak, Ödenmeyecek (gerekçe yazılarak) veya "Sonra karar ver" seçeneğini seçin; sonraya bırakılan karar süreçteki bölümde verilir.',
          'Özet ve onay: Onaylayınca ne olacağını (görevler, onay akışları, tazminat, kesinleşme tarihi) kontrol edin ve İşten Çıkar butonuyla onaylayın.',
        ],
        alanlar: [
          { ad: 'Çalışan', aciklama: 'İşten ayrılacak kişi.', zorunlu: true },
          { ad: 'İşten Çıkarma Tarihi', aciklama: 'Çalışanın son iş günü.', zorunlu: true },
          { ad: 'İşten Çıkarma Sebebi', aciklama: 'Birim için tanımlı nedenlerden biri; SGK çıkış koduyla eşleşir.', zorunlu: true },
          { ad: 'Tekrar İşe Alınabilir', aciklama: 'Çalışanın ileride tekrar işe alınıp alınamayacağı.', zorunlu: false },
          { ad: 'Açıklamalar', aciklama: 'Çıkışla ilgili not.', zorunlu: false },
          { ad: 'Çıkış Görevleri', aciklama: 'Şablondan gelen veya elle eklenen görevler (zimmet iadesi, hesap kapatma vb.).', zorunlu: false },
        ],
        sonuc:
          'Birimde (veya üst biriminde) işten çıkış iş akışı tanımlıysa talep "Onay Bekliyor" durumuyla Onay Bekleyen sekmesine düşer ve onay zincirindeki ilk kişiye iletilir; akış tanımlı değilse onay adımı atlanır. ' +
          'Onaylanınca süreç "Devam Ediyor" durumuna geçer; tüm adımlar bitince "Kesinleşmeye Hazır" olur.',
      },
      {
        baslik: 'İşten çıkış kaydını düzenleme veya silme',
        kim: 'İK',
        sekme: 'İşten Çıkış',
        aciklama: 'Henüz kesinleşmemiş bir çıkış kaydının tarihini, nedenini veya açıklamasını düzeltir; hatalı kaydı kaldırırsınız.',
        adimlar: ['Sürecin detayını açın.', 'Çıkış bilgilerini düzenleyin veya kaydı silmeyi seçin.', 'İşlemi onaylayın.'],
        sonuc: 'Kayıt güncellenir ya da kaldırılır.',
        notlar: [YETKI],
      },
      {
        baslik: 'Çıkış tarihini değiştirme',
        kim: 'Yönetici',
        sekme: 'İşten Çıkış',
        aciklama: 'Devam eden bir çıkış sürecinin çıkış tarihini güncellersiniz.',
        adimlar: ['Sürecin detayını açın.', 'Çıkış tarihi alanını düzenleyin.', 'Kaydedin.'],
        sonuc: 'Yeni tarih listede ve kesinleşme bilgisinde görünür; çıkıştaki izin hakları ve tazminat hesapları yeni tarihe göre yenilenir.',
      },
      {
        baslik: 'Çıkıştaki izin haklarını ve kapanmamış izinleri kontrol etme',
        kim: 'İK',
        sekme: 'İşten Çıkış',
        aciklama:
          'Süreç detayındaki İzinler bölümü, süreç başladığı gündeki kalan izin bakiyelerini ve "İşten çıkarken mevcut izin hakları" tablosunu ' +
          '(Bugün, Çıkışa kadar hak, Planlanan izin, Çıkışta) gün olarak gösterir. Bu değerler çalışan ayrılana kadar değişebilir.',
        adimlar: [
          'Sürecin detayını açın.',
          'İzinler bölümünde kalan bakiyeleri ve "İşten çıkarken mevcut izin hakları" tablosunu inceleyin.',
          'Birimde "İzinlerin sonlanması zorunlu" kuralı açıksa, bekleyen izin taleplerini ve çıkış tarihini kapsayan ya da sonrasında başlayan onaylı izinleri sonuçlandırın; "İzne Git" düğmesiyle ilgili izne geçebilirsiniz.',
        ],
        sonuc:
          'Kural açıksa bu izinler sonuçlandırılmadan çıkış kesinleşmez. Kural kapalıysa bu talepler süreç tarafından iptal edilir; çalışana ve onaylayana bildirim gider.',
        notlar: [
          'Kalan izin ücreti bilgi amaçlıdır ve bordroya kendiliğinden yansımaz. Ödenecekse Bordro Yönetimi\'nde ödeme kalemi olarak elle girilmelidir.',
        ],
      },
      {
        baslik: 'Kıdem tazminatı kararını verme',
        kim: 'İK',
        sekme: 'İşten Çıkış',
        aciklama: 'Çıkış sürecinde kıdem tazminatının ödenip ödenmeyeceğini belirler, hesaplamayı bordroya yönlendirirsiniz.',
        adimlar: [
          'Sürecin detayını açın ve kıdem tazminatı adımına gelin.',
          'Kararı seçin (ödenecek / ödenmeyecek vb.); gerekiyorsa tavan uygulamasını işaretleyin.',
          'Ödenmeyecekse feragat nedenini yazın.',
          'Kaydedin ve adımı tamamlayın.',
        ],
        alanlar: [
          { ad: 'Karar', aciklama: 'Kıdem tazminatının durumu.', zorunlu: true },
          { ad: 'Tavan Uygula', aciklama: 'Yasal kıdem tazminatı tavanının uygulanıp uygulanmayacağı.', zorunlu: false },
          { ad: 'Feragat Nedeni', aciklama: 'Tazminat ödenmeyecekse gerekçe.', zorunlu: false },
        ],
        sonuc: 'Tutar hesaplanarak çalışanın son bordrosuna yansıtılır; adım tamamlandı olarak işaretlenir.',
        notlar: ['Hesaplama ayrıntıları Bordro Yönetimi sayfasında görüntülenir.'],
      },
      {
        baslik: 'İhbar tazminatı kararını verme',
        kim: 'İK',
        sekme: 'İşten Çıkış',
        aciklama: 'İhbar süresine uyulmadığında ödenecek ihbar tazminatını ve kimin ödeyeceğini belirlersiniz.',
        adimlar: [
          'Sürecin detayını açın ve ihbar tazminatı adımına gelin.',
          'Kararı ve yönünü seçin (işverenin çalışana ya da çalışanın işverene ödemesi).',
          'Gerekirse ihbar gün sayısını elle değiştirin; ödenmeyecekse feragat nedenini yazın.',
          'Kaydedin ve adımı tamamlayın.',
        ],
        alanlar: [
          { ad: 'Karar', aciklama: 'İhbar tazminatının uygulanıp uygulanmayacağı.', zorunlu: true },
          { ad: 'Yön', aciklama: 'Tazminatı kimin ödeyeceği.', zorunlu: true },
          { ad: 'İhbar Gün Sayısı', aciklama: 'Kıdeme göre hesaplanan süreyi değiştirmek için.', zorunlu: false },
          { ad: 'Feragat Nedeni', aciklama: 'Tazminattan vazgeçiliyorsa gerekçe.', zorunlu: false },
        ],
        sonuc: 'İhbar tutarı son bordroya yansıtılır; adım tamamlandı olarak işaretlenir.',
      },
      {
        baslik: 'Son bordro adımını tamamlama',
        kim: 'İK',
        sekme: 'İşten Çıkış',
        aciklama: 'Çalışanın son bordrosu hazırlandığında süreçteki bordro adımını kapatırsınız.',
        adimlar: ['Sürecin detayını açın.', 'Bordro adımında tamamlandı seçeneğini kullanın.'],
        sonuc: 'Bordro adımı tamamlanır; süreç kesinleşmeye bir adım yaklaşır.',
      },
      {
        baslik: 'Zimmet iadesini kontrol etme',
        kim: 'Yönetici',
        sekme: 'İşten Çıkış',
        aciklama: 'Çalışanın üzerindeki zimmetleri süreç içinde görür, iadelerin teslim alınıp alınmadığını takip edersiniz.',
        adimlar: [
          'Sürecin detayını açın ve Zimmetler bölümüne gelin; süreç başladığında çalışanın üzerindeki zimmetler buraya kaydedilir.',
          'Birimde "Zimmet iadesi zorunlu" kuralı açıksa zimmetler "İade Bekleniyor" durumuna çekilir. İadeyi Stok Yönetimi sayfasında ürünün Malzeme İşlemleri › İade işlemiyle teslim alarak kaydedin.',
          'Her teslim alımdan sonra bölüm kendiliğinden kontrol edilir; kalan zimmetleri bölümden izleyin.',
        ],
        sonuc: 'Son zimmet teslim alınınca Zimmetler bölümü kendiliğinden tamamlanır; kısmi iade bölümü tamamlamaz.',
        notlar: [
          'Kural kapalıysa zimmetler süreç tarafından otomatik iade alınır; süreç iptal edilirse çalışana geri yüklenir.',
        ],
      },
      {
        baslik: 'İşten çıkışı kesinleştirme',
        kim: 'Yönetici',
        sekme: 'İşten Çıkış',
        aciklama: 'Tüm zorunlu adımları biten çıkış sürecini kapatır, çalışanın ayrılışını kesinleştirirsiniz.',
        adimlar: [
          '"Kesinleşmeye Hazır" kartına tıklayın veya sürecin detayını açın.',
          'Kontrol listesinde eksik zorunlu adım (SGK çıkışı, zimmet iadesi, bordro, izinlerin sonlanması, kıdem/ihbar) kalmadığını görün.',
          'Bekleyen iş kalmadığında çıkış, çıkış tarihinde kendiliğinden kesinleşir ve çalışan o gün pasife geçer; ayrıca bir işlem yapmanız gerekmez. Bugün kesinleştirmek için süreç detayındaki "Bugün Kesinleştir" düğmesini kullanın; bu durumda çalışan hemen pasife geçer.',
        ],
        sonuc:
          'Süreç "Kesinleşen" sekmesine taşınır; çalışanın durumu "İşten Çıkarıldı" olur ve İşten Çıkarılan Çalışanlar listesine düşer. ' +
          'Çalışanın DHR erişimi, Kontrol Panelim\'deki İşten Çıkış Sürecim kartında yazan tarihten sonra kapanır (çıkış anketi açıksa anketin son gününe kadar sürer).',
        notlar: [
          'Hemen kesinleştirme seçeneği yetkinize bağlı olarak görünür.',
          'Çıkış, çıkış tarihi gelmeden kendiliğinden kesinleşmez. Çıkış tarihi geçtiği hâlde zorunlu bölüm açıksa süreç "Gecikmiş" olur.',
        ],
      },
      {
        baslik: 'İşten ayrılma belgesi alma',
        kim: 'İK',
        sekme: null,
        aciklama: 'Ayrılan çalışan için işten ayrılma belgesini indirirsiniz. Belge bu sayfada değil, İşten Çıkarılan Çalışanlar listesinden alınır.',
        adimlar: [
          'Çalışan Yönetimi sayfasında "İşten Çıkarma İşlemleri" butonuna tıklayın ve "İşten Çıkarılan Çalışanlar Listesi" seçeneğini seçin.',
          'Çalışanın satırındaki Detaylar butonuna tıklayın.',
          'Pencerenin altındaki "İşten Ayrılma Belgesi" butonuyla belgeyi indirin.',
        ],
        sonuc: 'Belge bilgisayarınıza iner.',
        notlar: [
          'Kesinleşen sekmesinde sürecin detayındaki "Raporu Görüntüle" ile işten çıkış raporunu (çıkış bilgileri, iş akışı, zimmetler, izinler, bordro ve SGK kayıtları) alabilirsiniz.',
          'Ayrıntı için İşten Çıkarılan Çalışanlar sayfasına bakın.',
          YETKI,
        ],
      },
      {
        baslik: 'Ayrılan çalışanı yeniden işe alma',
        kim: 'İK',
        sekme: null,
        aciklama: '"Yeniden işe alınabilir" olarak işaretlenmiş eski bir çalışanı tekrar aktif hâle getirirsiniz. Yeniden işe alma bu sayfadan değil, çalışan kartından yapılır.',
        adimlar: [
          'Çalışanın kartını açın (İşten Çıkarılan Çalışanlar listesinde Görüntüle butonuyla).',
          'Çalışan İşlemleri menüsünden "Çalışanı Geri Al" seçeneğine tıklayın.',
          'Çalışanı Pozisyona Ata penceresinde "Yeniden işe al (yeni çalışma dönemi)" seçeneğini seçip Departman, Pozisyon ve Başlangıç Tarihi girin.',
          'Gerekirse ardından kartın İşe Giriş / Çıkış sekmesindeki "İşe Giriş Süreci Başlat" düğmesiyle yeni bir işe giriş süreci açın.',
        ],
        sonuc: 'Çalışan kaydı yeniden etkinleşir; eski çalışma dönemi Önceki Hizmet Dönemleri kartına eklenir.',
        notlar: ['Ayrıntı için Çalışanı Görüntüle sayfasına bakın.', YETKI],
      },
      {
        baslik: 'Çalışan devir oranı (turnover) raporu',
        kim: 'İK',
        sekme: 'İşten Çıkış',
        aciklama: 'Seçtiğiniz dönem ve birim için işten ayrılma oranlarını görür, raporu dışa aktarırsınız.',
        adimlar: [
          'Rapor alanını açın.',
          'Başlangıç ve bitiş tarihini, isterseniz birimi seçin.',
          'Hesaba katmak istemediğiniz çıkış nedenlerini hariç tutun.',
          'Raporu görüntüleyin veya dışa aktarın.',
        ],
        alanlar: [
          { ad: 'Başlangıç Tarihi', aciklama: 'Rapor döneminin başı.', zorunlu: true },
          { ad: 'Bitiş Tarihi', aciklama: 'Rapor döneminin sonu.', zorunlu: true },
          { ad: 'Birim', aciklama: 'Belirli bir birimle sınırlamak için.', zorunlu: false },
          { ad: 'Hariç Tutulan Nedenler', aciklama: 'Orana dahil edilmeyecek çıkış nedenleri.', zorunlu: false },
        ],
        sonuc: 'Aylık ve dönemlik devir oranları listelenir; dışa aktarılırsa dosya olarak iner.',
        notlar: [YETKI],
      },

      // ---------- Ayarlar ----------
      {
        baslik: 'Süreç şablonlarını yönetme (işe giriş / işten çıkış)',
        kim: 'İK',
        sekme: null,
        aciklama: 'Süreç başlatırken kullanılacak hazır madde ve görev listelerini oluşturur, düzenler, silersiniz.',
        adimlar: [
          'Sağ üstteki "Ayarlar" butonuna tıklayıp birimi seçin. Organizasyon Birim Yönetimi\'nin İşe Giriş / Çıkış sekmesi açılır; Şablonlar bölümüne geçin (ayrıntı için Organizasyon Birim Yönetimi – Modül Ayarları sayfasına bakın).',
          'Yeni şablon ekleyin veya var olanı düzenleyin.',
          'Şablon adını, açıklamasını, türünü (Çalışan Formu, İşe Giriş Görevleri, İşten Çıkış Görevleri) ve hangi birim için geçerli olduğunu girin.',
          'Maddeleri ekleyin: başlık, açıklama, sorumlu, zorunlu/bilgilendirme amaçlı, gerekirse ek dosya (ör. personel el kitabı) yükleyin; çalışan bilgi alanına bağlayın.',
          'Görevleri ekleyin: bölüm başlığı, görev adı, sorumlu pozisyon, not, çalışana bağlantı gönderilsin mi.',
          'Varsayılan ve etkin olup olmadığını işaretleyip kaydedin. Gereksiz şablonu silebilirsiniz.',
        ],
        alanlar: [
          { ad: 'Şablon Adı', aciklama: 'Listede görünecek ad.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Şablonun amacı.', zorunlu: false },
          { ad: 'Tür', aciklama: 'Çalışan Formu, İşe Giriş Görevleri veya İşten Çıkış Görevleri.', zorunlu: true },
          { ad: 'Birim', aciklama: 'Şablonun geçerli olduğu birim; alt birimlere de uygulanır.', zorunlu: false },
          { ad: 'Varsayılan', aciklama: 'Süreç başlatılırken otomatik seçilsin mi.', zorunlu: false },
          { ad: 'Etkin', aciklama: 'Kullanıma açık mı.', zorunlu: false },
          { ad: 'Doldurma Süresi (gün)', aciklama: 'Çalışana form için tanınan süre.', zorunlu: false },
        ],
        sonuc: 'Şablon, ilgili birimde yeni süreç başlatırken seçilebilir hâle gelir.',
      },
      {
        baslik: 'Birim süreç ayarlarını belirleme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Her birim için, bir sürecin tamamlanabilmesi/kesinleşebilmesi için hangi adımların şart olduğunu ve form bağlantısı ile çıkış anketi kurallarını belirlersiniz.',
        adimlar: [
          '"Ayarlar" butonuna tıklayın ve birim seçin; Organizasyon Birim Yönetimi\'nin İşe Giriş / Çıkış sekmesinde Birim Kuralları bölümüne geçin.',
          'İşe giriş için zorunluluk kurallarını işaretleyin: SGK işe giriş bildirgesi zorunlu, Zimmet teslimi zorunlu, Bordro başlangıcı zorunlu.',
          'İşten çıkış için zorunluluk kurallarını işaretleyin: SGK işten çıkış bildirgesi zorunlu, Zimmet iadesi zorunlu, Bordro süreci zorunlu, İzinlerin sonlanması zorunlu, Kıdem tazminatı kararı zorunlu, İhbar tazminatı kararı zorunlu. Hiçbir kural varsayılan olarak açık değildir; kapalı kuralın bölümü kendiliğinden tamamlanır.',
          'Form bağlantısının kaç gün geçerli olacağını ve çalışan kartının işe girişten kaç gün önce görüneceğini girin.',
          'Çıkış anketini açın; geçerlilik gününü ve soruları (soru tipi, seçenekler, zorunluluk) tanımlayın.',
          'Dışarıda verilen SGK bildirimine izin verilip verilmeyeceğini seçip kaydedin.',
        ],
        sonuc: 'Ayarlar o birim ve ayarı olmayan alt birimleri için geçerli olur. Üst birimden gelen ayarlar "devralındı" olarak gösterilir; isterseniz birime özel ayarı silip üst birim ayarına dönebilirsiniz.',
        notlar: [YETKI],
      },
      {
        baslik: 'Çıkış nedeni tanımlama',
        kim: 'İK',
        sekme: null,
        aciklama: 'İşten çıkışta seçilecek nedenleri birim bazında tanımlar, düzenler ve silersiniz.',
        adimlar: [
          'Çıkış nedenleri bu sayfada değil, Organizasyon Birim Yönetimi sayfasında tanımlanır: birimi seçip Veri Girişi › İşten Çıkış Sebepleri sekmesini açın (ayrıntı için Organizasyon Birim Yönetimi – Genel Ayarlar sayfasına bakın).',
          '"Yeni Sebep Ekle" butonuna tıklayın.',
          'SGK Ayrılış Kodu, Sebep ve Açıklama alanlarını doldurup kaydedin.',
          'Var olan nedeni düzenleyin veya kullanılmayanı silin.',
        ],
        alanlar: [
          { ad: 'SGK Ayrılış Kodu', aciklama: 'SGK işten çıkış kodu (ör. 04 – işveren tarafından haklı neden olmadan fesih). Türkiye dışındaki birimlerde boş bırakılabilir.', zorunlu: false },
          { ad: 'Sebep', aciklama: 'Listede görünecek neden adı (en çok 150 karakter).', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Ek bilgi.', zorunlu: false },
        ],
        sonuc: 'Neden, o birimdeki çalışanlar için işten çıkış formunda listelenir; alt birimler üst birimdeki nedenleri de görür.',
      },

      // ---------- CV analizi ----------
      {
        baslik: 'CV yükleme ve analiz etme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Aday özgeçmişlerini yükler, yapay zekâ desteğiyle özetletir ve aradığınız niteliklere göre adayları sıralatırsınız.',
        adimlar: [
          'CV analizi alanını açın.',
          'Bir veya birden fazla CV dosyası yükleyin.',
          'Yüklenen CV\'lerin analiz edilmesini başlatın.',
          'Aradığınız pozisyon veya nitelikleri yazarak arama yapın.',
          'Sonuçlarda aday değerlendirmelerini ve öne çıkan bilgileri inceleyin; aday detayına girin.',
        ],
        sonuc: 'Adaylar uygunluklarına göre listelenir; her aday için özet ve değerlendirme görüntülenir.',
        notlar: [YETKI],
      },
      {
        baslik: 'Yüklenen CV\'leri görüntüleme, indirme ve silme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Daha önce yüklenen özgeçmişleri listeler, indirir veya kaldırırsınız.',
        adimlar: ['CV analizi alanında yüklenen belgeler listesini açın.', 'Belgeyi indirmek veya silmek için satırdaki seçenekleri kullanın.'],
        sonuc: 'Silinen CV listeden ve aramalardan kaldırılır.',
        notlar: [YETKI],
      },

      // ---------- Çalışan tarafı ----------
      {
        baslik: 'Kendi işe giriş / çıkış görevlerimi doldurma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Hakkınızda başlatılan işe giriş veya işten çıkış sürecinde sizden istenen bilgi ve belgeleri doldurursunuz.',
        adimlar: [
          'Size e-postayla gelen form bağlantısını açın ya da DHR\'a girdiğinizde ana sayfadaki süreç kartına tıklayın.',
          'Listelenen maddeleri sırayla açın; bilgilendirme belgelerini okuyun veya indirin.',
          'İstenen bilgileri girin, belgeleri (ör. DÖKÜMAN.pdf) yükleyin.',
          'Tüm maddeleri doldurduktan sonra formu gönderin.',
        ],
        sonuc: 'Gönderdiğiniz maddeler yöneticinizin veya İK\'nın incelemesine düşer ("İncelemenizi Bekleyen"). Reddedilen madde düzeltmeniz için size geri gelir.',
        notlar: [
          'Form bağlantısının belirli bir geçerlilik süresi vardır; süresi dolarsa yöneticinizden yeniden göndermesini isteyin.',
          'Geçmiş süreçlerinizi ve doldurduğunuz belgeleri daha sonra görüntüleyebilirsiniz.',
        ],
      },
      {
        baslik: 'Çıkış anketini doldurma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Birimde çıkış anketi açıksa, işten ayrılırken size gönderilen anketi yanıtlarsınız.',
        adimlar: ['Size gelen anket bağlantısını açın.', 'Soruları yanıtlayın.', 'Anketi gönderin.'],
        sonuc: 'Yanıtlarınız İK tarafından görüntülenir.',
        notlar: ['Anket, ayarlarda belirtilen gün sayısı kadar açık kalır.'],
      },
    ],

    sss: [
      {
        soru: 'Yeni çalışan eklediğim hâlde neden "Devam Eden Süreçler"de göremiyorum?',
        cevap: 'Süreç önce onay akışına girer. "Onay Bekleyen" sekmesine bakın; "Mevcut Onaylayan" sütunu kimin onayında olduğunu gösterir.',
      },
      {
        soru: '"Tamamla" veya "Kesinleştir" seçeneği neden aktif değil?',
        cevap: 'Birim ayarlarında zorunlu tutulan adımlardan (SGK, zimmet, bordro, izinlerin sonlanması, kıdem/ihbar) veya zorunlu maddelerden biri tamamlanmamış olabilir. Süreç detayındaki kontrol listesine bakın.',
      },
      {
        soru: 'Çalışan form bağlantısını açamıyor, ne yapmalıyım?',
        cevap: 'Bağlantının süresi dolmuş olabilir. Süreç detayından bağlantıyı yeniden gönderin veya yenileyin.',
      },
      {
        soru: 'Çıkış formunda istediğim neden listede yok.',
        cevap: 'Çıkış nedenleri birim bazında tanımlanır. Organizasyon Birim Yönetimi sayfasında çalışanın birimini (veya üst birimini) seçip Veri Girişi › İşten Çıkış Sebepleri sekmesinden yeni neden ekleyin.',
      },
      {
        soru: 'Deneme süresi listesinde "Anket yok" ne demek?',
        cevap: 'O değerlendirme günü için henüz anket doldurulmadığını veya anket tanımlanmadığını gösterir.',
      },
    ],

    ipuclari: [
      'Sık kullandığınız madde ve görevleri şablona çevirin; her yeni çalışanda tek tek eklemekle uğraşmazsınız.',
      '"Gecikmiş" kartını düzenli kontrol edin; hedef tarihi geçmiş süreçler burada toplanır.',
      'Birden fazla kişinin girişini aynı anda yapacaksanız Çalışan Yönetimi\'ndeki "Toplu İşe Giriş"i, çıkışını yapacaksanız "Çalışanı İşten Çıkar" penceresindeki "Toplu İşten Çıkış"ı kullanın.',
      'Kıdem ve ihbar tazminatı kararlarını çıkış tarihi kesinleştikten sonra verin; tarih değişirse hesaplar yeniden yapılır.',
    ],
  },
]
