// Zimmet ve Stok modülü: Zimmet Yönetimi (yönetici), Stok Yönetimi (stok yöneticisi), Zimmetlerim (çalışan)

const YETKI = 'Bu işlem yetkinize bağlı olarak görünür.'

export default [
  // ───────────────────────────── ZİMMET YÖNETİMİ ─────────────────────────────
  {
    id: 'zimmet-yonetimi',
    grup: 'yonetim',
    sira: 50,
    baslik: 'Zimmet Yönetimi',
    menu: 'Yönetim › Zimmet Yönetimi',
    href: '/inventory-management',
    kim: 'parla',
    ozet:
      'Ekibinizin ekipman (zimmet) ve havuz (ortak kullanım) taleplerini onayladığınız, reddettiğiniz ve ekip üyelerinin üzerindeki zimmetleri izlediğiniz yönetici sayfasıdır. Yöneticiler ve onay zincirinde yer alan kişiler kullanır.',

    ekranlar: [
      {
        sekme: null,
        aciklama:
          'Sayfa "Taleplerim" sekmesiyle açılır. Üstte Toplam İstekler, Onaylanan İstekler, Bekleyen Onaylar ve Reddedilen İstekler kartları; altında onayınıza gelen tüm zimmet ve havuz talepleri (Tür, Çalışan, Departman, Ürün Kategorisi, Miktar, Açıklama, Talep Tarihi, Genel Durum, İşlemler) listelenir.',
      },
      {
        sekme: 'Taleplerim > Bekleyen Talepler',
        aciklama:
          'Yalnız sizin onayınızı bekleyen talepler. Her satırda Onayla (yeşil onay işareti), Reddet (kırmızı çarpı) ve Detaylar (göz) butonları; havuz taleplerinde ayrıca Havuz Takvimi (takvim simgesi) bulunur.',
      },
      {
        sekme: 'Diğer Talepler',
        aciklama:
          'Ekibinizdeki diğer çalışanların, onay sırası başka birinde olan veya süreci ilerlemiş talepleri. Çalışan adı veya numarasıyla arama ve departman filtresi vardır; "Mevcut Onaylayan" sütunu talebin şu an kimde beklediğini gösterir.',
      },
      {
        sekme: 'Diğer Talepler > Bekleyen Talepler',
        aciklama: 'Diğer taleplerden henüz sonuçlanmamış (Beklemede) olanlar.',
      },
      {
        sekme: 'Ekip Zimmetleri',
        aciklama:
          'Ekibinizdeki her çalışanın üzerindeki zimmetlerin kategori bazlı özeti: Çalışan, Birim, Zimmetler (ör. "1 Bilgisayar, 1 Ofis Ekipmanı, +1 kategori"), Toplam, Ticket ve Talep sayıları. Birime göre filtrelenebilir ve dışa aktarılabilir.',
      },
    ],

    bolumler: [
      {
        baslik: 'Talep türleri',
        metin: 'Listede "Tür" sütunu talebin hangi türde olduğunu gösterir.',
        maddeler: [
          'Zimmet: Çalışanın kalıcı olarak kullanacağı bir ekipman talebi (ör. bilgisayar, telefon, ofis ekipmanı). Miktar bilgisi vardır.',
          'Havuz: Ortak kullanılan bir ürünün (ör. şirket aracı) belirli tarih ve saatler arasında rezerve edilmesi talebi. Miktar yerine tarih aralığı vardır.',
        ],
      },
      {
        baslik: 'Durumlar',
        metin: '"Genel Durum" talebin tüm süreçteki durumunu, "Onay Durumu" ise sizin adımınızdaki kararı gösterir.',
        maddeler: [
          'Beklemede: Talep onay zincirinde veya stok biriminde işlem bekliyor.',
          'Onaylandı: Onay adımı tamamlandı; talep stok birimine iletildi.',
          'Reddedildi: Talep onay adımında veya stok biriminde reddedildi.',
          'Tamamlandı: Ekipman çalışana teslim edildi ve talep kapandı.',
        ],
      },
      {
        baslik: 'Talebin yolculuğu',
        metin: 'Bir zimmet veya havuz talebi sırasıyla şu adımlardan geçer:',
        maddeler: [
          'Ekipman Onayı: Çalışanın biriminde tanımlı onay zincirindeki yöneticiler sırayla onaylar.',
          'Stok Talebi: Son onaydan sonra talep, kategorinin bağlı olduğu stok birimine düşer (Stok Yönetimi › Stok Talepleri).',
          'Teslim: Stok yöneticisi uygun ürünü seçip teslim eder; ürün çalışanın Zimmetlerim › Teslim/İade sekmesine "Teslim Bekliyor" olarak düşer. Çalışan teslim aldığını onaylayınca ürün Zimmetler listesine geçer ve talep "Tamamlandı" olur.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Onayınızı bekleyen talepleri görüntüleme',
        kim: 'Yönetici',
        sekme: 'Taleplerim',
        aciklama: 'Size onay için gelen zimmet ve havuz taleplerini tek listede görürsünüz.',
        adimlar: [
          'Menüden Yönetim › Zimmet Yönetimi sayfasını açın.',
          '"Taleplerim" sekmesinde üstteki kartlardan toplam, onaylanan, bekleyen ve reddedilen talep sayılarını görün.',
          'Tüm Talepler, Bekleyen Talepler, Onaylanan Talepler veya Reddedilen Talepler alt sekmelerinden birine tıklayın.',
          'Sayfa altındaki sayfa numaralarıyla listede ilerleyin.',
        ],
        sonuc: 'Seçtiğiniz duruma göre talepler listelenir; "Mevcut Onaylayan" sütunu talebin şu an kimde beklediğini gösterir.',
      },
      {
        baslik: 'Talepleri arama ve filtreleme',
        kim: 'Yönetici',
        sekme: 'Taleplerim',
        aciklama: 'Uzun listede aradığınız talebi hızlıca bulmanızı sağlar.',
        adimlar: [
          '"Çalışan adı veya numarası" kutusuna aramak istediğiniz kişiyi yazın.',
          '"Departmana Göre Filtrele" açılır listesinden bir departman seçin.',
          'Tür, Departman, Ürün Kategorisi ve Genel Durum sütun başlıklarındaki süzgeç simgesiyle listeyi daraltın.',
          'Talep Tarihi başlığındaki oklarla tarihe göre sıralayın.',
          'Tüm seçimleri sıfırlamak için "Filtreleri Temizle" butonuna tıklayın.',
        ],
        sonuc: 'Liste ve üstteki sayaçlar seçtiğiniz filtrelere göre güncellenir.',
      },
      {
        baslik: 'Zimmet talebini onaylama',
        kim: 'Yönetici',
        sekme: 'Taleplerim > Bekleyen Talepler',
        aciklama: 'Ekibinizden gelen bir ekipman talebini uygun bulduğunuzda onaylarsınız.',
        adimlar: [
          '"Bekleyen Talepler" alt sekmesini açın.',
          'Talebin açıklamasını okumak için gerekirse Detaylar (göz) butonuna tıklayın.',
          'Satırdaki yeşil onay işaretine (Onayla) tıklayın.',
          'Açılan pencerede isterseniz bir açıklama yazın ve onaylayın.',
        ],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Onay notunuz; talep sahibi ve sonraki onaylayanlar görür.', zorunlu: false }],
        sonuc:
          'Onay zincirinde sizden sonra bir yönetici varsa talep ona düşer ve "Beklemede" kalır. Son onaylayan sizseniz talep "Stok Talebi" adımına geçer ve stok biriminin Stok Talepleri listesine düşer.',
      },
      {
        baslik: 'Zimmet talebini reddetme',
        kim: 'Yönetici',
        sekme: 'Taleplerim > Bekleyen Talepler',
        aciklama: 'Uygun bulmadığınız talebi gerekçesiyle reddedersiniz.',
        adimlar: [
          '"Bekleyen Talepler" alt sekmesinde ilgili satırı bulun.',
          'Kırmızı çarpı (Reddet) butonuna tıklayın.',
          'Açılan pencereye ret gerekçesini yazın.',
          'İşlemi onaylayın.',
        ],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Ret gerekçesi; çalışan talebinin detayında görür.', zorunlu: false }],
        sonuc: 'Talebin Genel Durumu ve Onay Durumu "Reddedildi" olur; süreç sona erer ve çalışan bilgilendirilir.',
        notlar: ['Reddedilen talep yeniden onaya açılamaz; çalışanın yeni bir talep oluşturması gerekir.'],
      },
      {
        baslik: 'Havuz (ortak kullanım) talebini onaylama veya reddetme',
        kim: 'Yönetici',
        sekme: 'Taleplerim > Bekleyen Talepler',
        aciklama:
          'Türü "Havuz" olan talepler, şirket aracı gibi ortak ürünlerin belirli tarih aralığında kullanımı içindir. Onaydan önce ürünün o tarihlerde müsait olup olmadığına bakabilirsiniz.',
        adimlar: [
          'Türü "Havuz" olan satırı bulun.',
          'Satırdaki takvim simgesine (Havuz Takvimi) tıklayarak ürünün o tarihlerdeki doluluğunu kontrol edin.',
          'Uygunsa yeşil onay işaretine (Onayla), değilse kırmızı çarpıya (Reddet) tıklayın.',
          'Açıklama yazıp işlemi onaylayın.',
        ],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Onay veya ret notu.', zorunlu: false }],
        sonuc:
          'Onaylanan havuz talebi sıradaki onaylayana, son onaydan sonra da stok biriminin Stok Talepleri listesine (Havuz türüyle) düşer. Reddedilen talep "Reddedildi" durumuna geçer.',
      },
      {
        baslik: 'Toplu onay veya ret',
        kim: 'Yönetici',
        sekme: 'Taleplerim',
        aciklama: 'Birden fazla bekleyen talebi tek seferde onaylar veya reddedersiniz.',
        adimlar: [
          'Sağ üstteki "Toplu İşlem" butonuna tıklayın.',
          'Listede işlem yapmak istediğiniz talepleri işaretleyin.',
          'Onaylama veya reddetme seçeneğini belirleyin, gerekirse açıklama yazın.',
          'İşlemi onaylayın.',
        ],
        sonuc: 'Seçilen taleplerin her biri tek tek onaylanmış veya reddedilmiş gibi bir sonraki adıma geçer.',
        notlar: ['Yalnız sizin onayınızı bekleyen talepler toplu işleme alınabilir.'],
      },
      {
        baslik: 'Talep detayını ve onay geçmişini görüntüleme',
        kim: 'Yönetici',
        sekme: 'Taleplerim',
        aciklama: 'Talebin tüm bilgilerini, onay adımlarını ve kimin ne zaman karar verdiğini görürsünüz.',
        adimlar: [
          'İlgili satırdaki Detaylar (göz) butonuna tıklayın.',
          'Açılan pencerede talep bilgilerini, onay adımlarını ve açıklamaları inceleyin.',
          'Talep stok birimine geçtiyse stok adımındaki durumu da aynı pencerede görün.',
        ],
        sonuc: 'Talep üzerinde değişiklik yapılmaz; yalnız bilgi görüntülenir.',
      },
      {
        baslik: 'Talebe yorum ekleme ve silme',
        kim: 'Yönetici',
        sekme: 'Taleplerim',
        aciklama: 'Talep detayında çalışana veya diğer yetkililere not bırakırsınız.',
        adimlar: [
          'Talebin Detaylar (göz) butonuna tıklayın.',
          'Yorum alanına notunuzu yazın.',
          'Yorumun kimlere görüneceğini seçin.',
          'Gönderin. Kendi yorumunuzu yanındaki silme simgesiyle kaldırabilirsiniz.',
        ],
        alanlar: [
          { ad: 'Yorum', aciklama: 'Notunuz.', zorunlu: true },
          { ad: 'Görünürlük', aciklama: 'Yorumun talep sahibine de mi, yalnız yetkililere mi görüneceği.', zorunlu: false },
        ],
        sonuc: 'Yorum talep geçmişine eklenir.',
        notlar: [YETKI],
      },
      {
        baslik: 'Onay listesini dışa aktarma',
        kim: 'Yönetici',
        sekme: 'Taleplerim',
        aciklama: 'Onay kuyruğunuzdaki talepleri dosya olarak indirirsiniz.',
        adimlar: [
          'Sağ üstteki "Dışa Aktar" butonuna tıklayın.',
          'Genel durum, onay durumu, çalışan ve tarih aralığı seçimlerini yapın.',
          'Dosya biçimini seçin ve indirin.',
        ],
        alanlar: [
          { ad: 'Genel Durum', aciklama: 'Dosyaya alınacak talep durumları.', zorunlu: false },
          { ad: 'Onay Durumu', aciklama: 'Sizin adımınızdaki karar durumları.', zorunlu: false },
          { ad: 'Çalışanlar', aciklama: 'Yalnız belirli çalışanların talepleri.', zorunlu: false },
          { ad: 'Başlangıç / Bitiş Tarihi', aciklama: 'Talep tarihi aralığı.', zorunlu: false },
          { ad: 'Dosya Biçimi', aciklama: 'Excel veya PDF gibi.', zorunlu: false },
        ],
        sonuc: 'Seçimlerinize uyan talepler dosya olarak bilgisayarınıza iner.',
      },
      {
        baslik: 'Ekibin diğer taleplerini izleme',
        kim: 'Yönetici',
        sekme: 'Diğer Talepler',
        aciklama: 'Onay sırası sizde olmayan veya süreci ilerlemiş ekip taleplerini takip edersiniz.',
        adimlar: [
          '"Diğer Talepler" sekmesine geçin.',
          '"Çalışan adı veya numarası" kutusuyla ve "Departmana Göre Filtrele" listesiyle arama yapın.',
          'Tüm, Bekleyen, Onaylanan veya Reddedilen alt sekmelerinden birini seçin.',
          '"Mevcut Onaylayan" sütunundan talebin kimde beklediğini görün; ayrıntı için Detaylar butonunu kullanın.',
        ],
        sonuc: 'Talepler yalnız görüntülenir; onay sırası sizde değilse karar butonları çıkmaz.',
        notlar: ['Bu sekmede de "Toplu İşlem" butonu bulunur; yalnız onay sırası size gelmiş talepler için çalışır.'],
      },
      {
        baslik: 'Ekip zimmetlerini görüntüleme',
        kim: 'Yönetici',
        sekme: 'Ekip Zimmetleri',
        aciklama: 'Ekibinizde kimin üzerinde hangi kategoriden kaç ekipman olduğunu, açık ticket ve talep sayılarını görürsünüz.',
        adimlar: [
          '"Ekip Zimmetleri" sekmesine geçin.',
          '"Birime göre filtrele" listesinden bir birim seçin.',
          'Bir çalışanın zimmet listesini, ticketlarını ve taleplerini görmek için satırın İşlemler sütunundaki butona tıklayın.',
        ],
        sonuc: 'Çalışanın üzerindeki ürünler (marka, model, seri numarası, atanma tarihi) listelenir.',
      },
      {
        baslik: 'Ekip zimmetlerini dışa aktarma',
        kim: 'Yönetici',
        sekme: 'Ekip Zimmetleri',
        aciklama: 'Ekip zimmet özetini dosya olarak alırsınız.',
        adimlar: ['"Ekip Zimmetleri" sekmesinde gerekirse birim filtresini seçin.', '"Dışa Aktar" butonuna tıklayın.', 'Dosya biçimini seçip indirin.'],
        sonuc: 'Listelenen çalışanların zimmet özetleri dosyaya aktarılır.',
      },
      {
        baslik: 'Çalışan adına onaysız ekipman talebi oluşturma',
        kim: 'Yönetici',
        sekme: 'Ekip Zimmetleri',
        aciklama:
          'Yeni başlayan bir çalışan veya acil bir ihtiyaç için, onay zincirine girmeden doğrudan stok birimine düşen ekipman talebi açarsınız.',
        adimlar: [
          'Talep açmak istediğiniz çalışanı seçin.',
          'İstenen her ekipman için kategori, miktar ve açıklama girin; birden fazla satır ekleyebilirsiniz.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Çalışan', aciklama: 'Ekipmanın verileceği kişi.', zorunlu: true },
          { ad: 'Ürün Kategorisi', aciklama: 'Ör. Bilgisayar, Telefon, Ofis Ekipmanı.', zorunlu: true },
          { ad: 'Miktar', aciklama: 'Kaç adet istendiği.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'İhtiyacın kısa açıklaması.', zorunlu: false },
        ],
        sonuc: 'Talepler onay adımı olmadan doğrudan stok biriminin Stok Talepleri listesine düşer.',
        notlar: [YETKI],
      },
    ],

    sss: [
      {
        soru: 'Onayladığım talep neden hâlâ "Beklemede" görünüyor?',
        cevap:
          'Genel Durum tüm süreci gösterir. Sizin onayınızdan sonra talep ya sıradaki yöneticide ya da stok biriminde bekler. "Onay Durumu" sütununda sizin kararınız "Onaylandı" olarak görünür; ürün teslim edilince Genel Durum "Tamamlandı" olur.',
      },
      {
        soru: 'Havuz talebinde miktar neden "-" görünüyor?',
        cevap: 'Havuz talepleri tek bir ortak ürünün belirli tarihlerde kullanımı içindir; miktar yerine tarih aralığı esas alınır.',
      },
      {
        soru: 'Bir talebi neden onaylayamıyorum?',
        cevap: 'Onay sırası henüz size gelmemiş veya başka bir yöneticiye geçmiş olabilir. "Mevcut Onaylayan" sütununa bakın.',
      },
    ],

    ipuclari: [
      'Sayfa başlığının yanındaki bilgi (i) simgesi sayfanın kısa açıklamasını gösterir.',
      'Havuz taleplerini onaylamadan önce takvim simgesiyle çakışma olup olmadığını kontrol edin.',
      'Ret gerekçesini açık yazın; çalışan yeni talebini buna göre düzenleyebilir.',
    ],
  },

  // ───────────────────────────── STOK YÖNETİMİ ─────────────────────────────
  {
    id: 'stok-yonetimi',
    grup: 'yonetim',
    sira: 60,
    baslik: 'Stok Yönetimi',
    menu: 'Yönetim › Stok Yönetimi',
    href: '/stock-management',
    kim: 'parla',
    ozet:
      'Birimin ekipman stokunu (ürünler, kategoriler, envanter paketleri, havuz ürünleri, satın almalar) yönettiğiniz; onaylanmış zimmet ve havuz taleplerini teslim ettiğiniz, arıza ticketlarını çözdüğünüz ve stok raporlarını aldığınız sayfadır. Stok yöneticileri ve stok yöneticileri kullanır.',

    ekranlar: [
      {
        sekme: null,
        aciklama:
          'Sayfa "Ürün Yönetimi › Ürünler" ile açılır. Sağ üstte stok birimi seçimi (ör. Kurumsal Çözümler); üstte Toplam Ürün, Bekleyen Satın Almalar, Bekleyen Stok Talepleri ve Devam Eden Tamirler kartları; altta Kategori, Havuz, Marka, Model, Seri Numarası, Atanan, Mevcut Durum, Durum ve İşlemler sütunlu ürün listesi yer alır.',
      },
      {
        sekme: 'Ürün Yönetimi > Kategoriler',
        aciklama: 'Ürün kategorileri: Kategori, Havuz (Açık/Kapalı), Toplam Stok, Mevcut Ürünler ve İşlemler. Sağ üstte "Kategori Ekle" butonu.',
      },
      {
        sekme: 'Ürün Yönetimi > Envanter Paketleri',
        aciklama: 'Hazır ekipman setleri: Paket Adı ve Kategoriler (ör. "İş Analisti Başlangıç Paketi: Ofis Ekipmanı × 2, Telefon × 1, Bilgisayar × 1"). "Paket Ekle" butonu.',
      },
      {
        sekme: 'Ürün Yönetimi > Havuz Takvimi',
        aciklama:
          'Havuz ürünlerinin gün/hafta/ay görünümünde doluluk takvimi. Kategori, Ürün, Departman ve Durum filtreleri; Önceki, Sonraki, Bugün düğmeleri. Renkler: Müsait, Dolu, Onay Bekliyor, Bakımda / Kullanım Dışı.',
      },
      {
        sekme: 'Ürün Yönetimi > Stok Satın Alma',
        aciklama: 'Satın alma kayıtları: Kategori, Miktar, Girilen (ör. 0/2), Organizasyonel Birim, Durum (ör. Sipariş Edildi, Alındı), Oluşturulma Tarihi. "Satın Alma Ekle" butonu.',
      },
      {
        sekme: 'Stok Talepleri',
        aciklama:
          'Onay zincirini tamamlayıp stok birimine düşen zimmet ve havuz talepleri. Toplam Stok Talepleri ve Bekleyen Stok Talepleri kartları; Tümü / Zimmet / Havuz seçicisi; Tür, Adım, Kategori, Çalışan, Organizasyonel Birim, Atanan, Açıklama, Talep Durumu, Durum, Talep Tarihi sütunları.',
      },
      {
        sekme: 'Stok Talepleri > Bana Atananlar',
        aciklama: 'Yalnız size atanmış (üstlendiğiniz) stok talepleri.',
      },
      {
        sekme: "Stok Ticket'ları",
        aciklama:
          'Çalışanların zimmetlerindeki ürünler için açtığı arıza/sorun ticketları: Adım, Ürün (kategori ve seri numarasıyla), Çalışan, Organizasyonel Birim, Atanan, Ticket Açıklaması, Ticket Durumu, Durum, Oluşturulma Tarihi.',
      },
      {
        sekme: "Stok Ticket'ları > Bana Atananlar",
        aciklama: 'Yalnız size atanmış ticketlar.',
      },
      {
        sekme: 'Stok Raporları',
        aciklama:
          'Toplam Ürün, Kullanılabilir, Atanmış ve Bakımda sayaçları ile "Rapor Alarm Yapılandırması" bölümü (belirli aralıklarla e-posta ile stok raporu). "Yeni Alarm Ekle" butonu.',
      },
    ],

    bolumler: [
      {
        baslik: 'Ürün durumları',
        metin: 'Ürün listesinde "Durum" ürünün nerede olduğunu, "Mevcut Durum" (kondisyon) fiziksel halini gösterir.',
        maddeler: [
          'Kullanılabilir: Stokta, atanmaya hazır.',
          'Atanmış: Bir çalışanın zimmetinde.',
          'Bakımda: Tamirde veya serviste.',
          'Kondisyon örnekleri: Yeni, kullanılmış vb. Ürün eklerken ilk kondisyon, iade ve teslimde güncel kondisyon girilir.',
        ],
      },
      {
        baslik: 'Stok talebi ve ticket durumları',
        metin: '"Talep Durumu"/"Ticket Durumu" çalışanın talebinin genel durumunu, "Durum" ise stok birimindeki işlem adımını gösterir.',
        maddeler: [
          'Beklemede: Henüz kimse üstlenmedi veya karar verilmedi.',
          'Atanmış: Bir stok yöneticisi talebi üstlendi.',
          'İşleniyor: Talep veya ticket üzerinde çalışılıyor.',
          'Teslim Aşamasında: Ürün hazırlandı, teslim bekleniyor.',
          'Onaylandı / Reddedildi / Tamamlandı: Sonuçlanmış kayıtlar.',
        ],
      },
      {
        baslik: 'Havuz (ortak kullanım)',
        metin:
          'Havuzu açık kategorilerdeki ürünler (ör. Şirket Aracı) kişiye kalıcı zimmetlenmez; çalışanlar belirli tarih ve saatler için rezerve eder. Ürün listesinde bu ürünler "Havuz" etiketiyle görünür.',
      },
    ],

    islemler: [
      // — Genel —
      {
        baslik: 'Stok birimini seçme',
        kim: 'Yönetici',
        sekme: null,
        aciklama: 'Birden fazla stok biriminde yetkiniz varsa hangi birimin stoğunu yöneteceğinizi seçersiniz.',
        adimlar: ['Sağ üstteki birim açılır listesine tıklayın.', 'Yönetmek istediğiniz birimi seçin.'],
        sonuc: 'Tüm sekmeler (ürünler, kategoriler, talepler, ticketlar, raporlar) seçilen birime göre yenilenir.',
        notlar: ['Listede yalnız düzenleme yetkiniz olan birimler görünür.'],
      },
      // — Ürünler —
      {
        baslik: 'Ürünleri listeleme, arama ve filtreleme',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Birimdeki tüm ürünleri görür, aradığınızı bulursunuz.',
        adimlar: [
          '"Ürün Yönetimi" sekmesinde "Ürünler" alt sekmesini açın.',
          '"Marka, model, seri no ve..." kutusuna arama yapın.',
          'Kategori, Durum, Kondisyon ve Atanan açılır listelerinden seçim yapın.',
          'Sütun başlıklarındaki oklarla sıralayın; Havuz sütunundaki süzgeçle yalnız havuz ürünlerini gösterin.',
          'Seçimleri sıfırlamak için "Filtreleri Temizle" butonuna tıklayın.',
        ],
        sonuc: 'Liste filtrelere göre daralır.',
      },
      {
        baslik: 'Yeni ürün ekleme',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Stoka tek bir ürün (ör. bir dizüstü bilgisayar) kaydedersiniz.',
        adimlar: [
          'Sağdaki "Ürün Ekle" butonuna tıklayın.',
          'Kategori, marka, model ve seri numarasını girin.',
          'Maliyet, para birimi, kayıt tarihi, kondisyon ve durum bilgilerini doldurun.',
          'Ürün ortak kullanıma açılacaksa havuz seçeneğini işaretleyin.',
          'İsterseniz ürün görselleri yükleyin ve kategoriye tanımlı hatırlatma alanlarını (ör. garanti bitiş tarihi) doldurun.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Kategori', aciklama: 'Ürünün ait olduğu kategori.', zorunlu: true },
          { ad: 'Marka', aciklama: 'Ör. Dell, Apple, Logitech.', zorunlu: true },
          { ad: 'Model', aciklama: 'Ör. Latitude 5440.', zorunlu: true },
          { ad: 'Seri Numarası', aciklama: 'Ürünün benzersiz seri numarası (araçlarda plaka kullanılabilir).', zorunlu: false },
          { ad: 'Maliyet ve Para Birimi', aciklama: 'Alış bedeli.', zorunlu: false },
          { ad: 'Organizasyonel Birim', aciklama: 'Ürünün bağlı olduğu stok birimi.', zorunlu: false },
          { ad: 'Kayıt Tarihi', aciklama: 'Ürünün stoka girdiği tarih.', zorunlu: false },
          { ad: 'İlk Kondisyon / Mevcut Kondisyon', aciklama: 'Ürünün fiziksel durumu (ör. Yeni).', zorunlu: false },
          { ad: 'Durum', aciklama: 'Ör. Kullanılabilir.', zorunlu: false },
          { ad: 'Havuz Ürünü', aciklama: 'Ürün ortak kullanıma açık mı.', zorunlu: false },
          { ad: 'Kaynak Türü ve Kaynak Firma', aciklama: 'Ürünün nereden geldiği ve tedarikçi firma adı.', zorunlu: false },
          { ad: 'Atanan Çalışan', aciklama: 'Ürün eklenirken doğrudan bir çalışana verilecekse.', zorunlu: false },
          { ad: 'Açıklama', aciklama: 'Ek bilgi.', zorunlu: false },
          { ad: 'Görseller', aciklama: 'Ürün fotoğrafları.', zorunlu: false },
          { ad: 'Hatırlatma alanları', aciklama: 'Kategoride tanımlı tarihli alanlar (ör. garanti bitişi).', zorunlu: false },
        ],
        sonuc: 'Ürün listeye eklenir ve Toplam Ürün sayısı artar.',
        notlar: ['Zorunlu alanlar formda yıldızla gösterilir; formdaki işaretler esastır.'],
      },
      {
        baslik: 'Toplu ürün girişi',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Aynı anda çok sayıda ürünü stoka kaydedersiniz.',
        adimlar: [
          '"Toplu Giriş" butonuna tıklayın.',
          'Açılan pencerede ürün satırlarını doldurun veya şablon dosyası kullanın.',
          'Bilgileri kontrol edip kaydedin.',
        ],
        sonuc: 'Girilen tüm ürünler tek seferde listeye eklenir.',
      },
      {
        baslik: 'Ürün detayını, geçmişini ve görsellerini görüntüleme',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Ürünün tüm bilgilerini, kimlere zimmetlendiğini, bakım kayıtlarını ve fotoğraflarını görürsünüz.',
        adimlar: [
          'Satırdaki Görüntüle (göz) butonuna tıklayın.',
          'Ürün bilgilerini, görselleri ve hatırlatma alanlarını inceleyin.',
          'Geçmiş bölümünde ürünün atanma, iade, tamir gibi tüm hareketlerini görün.',
        ],
        sonuc: 'Bilgiler yalnız görüntülenir.',
      },
      {
        baslik: 'Ürün düzenleme ve görsel silme',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Ürün bilgilerini günceller, görsel ekler veya kaldırırsınız.',
        adimlar: [
          'Ürünün detayını açın ve düzenleme seçeneğine tıklayın.',
          'Değiştirmek istediğiniz alanları güncelleyin.',
          'Yeni görsel ekleyin veya istemediğiniz görselin silme simgesine tıklayın.',
          'Kaydedin.',
        ],
        sonuc: 'Ürün bilgileri güncellenir.',
      },
      {
        baslik: 'Ürün silme',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Yanlış girilmiş veya stoktan tamamen çıkan bir ürünü kaldırırsınız.',
        adimlar: ['Ürünün detayını açın.', 'Silme seçeneğine tıklayın.', 'Uyarıyı onaylayın.'],
        sonuc: 'Ürün listeden kaldırılır.',
        notlar: ['Bir çalışana atanmış ürünü silmeden önce iade alın.', YETKI],
      },
      {
        baslik: 'Ürünü çalışana zimmetleme (atama)',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Talep beklemeden stoktaki bir ürünü doğrudan bir çalışana verirsiniz.',
        adimlar: [
          'Kullanılabilir durumdaki ürünün satırında "Malzeme İşlemleri" (şimşek simgesi) butonuna tıklayın.',
          'Atama işlemini seçin.',
          'Çalışanı, atanma tarihini ve ürünün teslim kondisyonunu girin.',
          'Gerekirse açıklama yazıp kaydedin.',
        ],
        alanlar: [
          { ad: 'Çalışan', aciklama: 'Ürünün verileceği kişi.', zorunlu: true },
          { ad: 'Atanma Tarihi', aciklama: 'Teslim tarihi.', zorunlu: true },
          { ad: 'Kondisyon', aciklama: 'Teslim anındaki fiziksel durum.', zorunlu: false },
          { ad: 'Açıklama', aciklama: 'Not.', zorunlu: false },
        ],
        sonuc:
          'Ürün "Atanmış" olur ve "Atanan" sütununda çalışan görünür. Çalışanın Zimmetlerim › Teslim/İade sekmesinde kayıt "Teslim Bekliyor" olarak görünür; teslim alınınca Zimmetler listesine geçer.',
      },
      {
        baslik: 'Zimmeti iade alma',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Çalışandan geri alınan ürünü stoka döndürürsünüz (ör. işten ayrılma, cihaz yenileme).',
        adimlar: [
          'Atanmış ürünün satırında "Malzeme İşlemleri" butonuna tıklayın.',
          'İade işlemini seçin.',
          'İade tarihini, ürünün iade kondisyonunu ve ürünün yeni durumunu (ör. Kullanılabilir, Bakımda) seçin.',
          'Tamir gerekiyorsa tamir açıklamasını ve iade nedenini yazın.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'İade Tarihi', aciklama: 'Ürünün geri alındığı tarih.', zorunlu: true },
          { ad: 'İade Kondisyonu', aciklama: 'Geri alındığındaki fiziksel durum.', zorunlu: false },
          { ad: 'Ürün Durumu', aciklama: 'İadeden sonra ürünün durumu.', zorunlu: false },
          { ad: 'Tamir Açıklaması', aciklama: 'Ürün tamire gidecekse yapılacak iş.', zorunlu: false },
          { ad: 'Neden', aciklama: 'İade gerekçesi.', zorunlu: false },
        ],
        sonuc: 'Ürün çalışanın zimmetinden çıkar; çalışanın Teslim/İade sekmesinde "İade Edildi" kaydı oluşur.',
        notlar: [
          'Çalışanın işten çıkış süreci açıksa ve birimde "Zimmet iadesi zorunlu" kuralı açıksa ürünleri "İade Bekleniyor" olarak görürsünüz. Buradan yaptığınız her iade, İşe Giriş / Çıkış sürecindeki Zimmetler bölümünü kendiliğinden günceller; son ürün teslim alınınca bölüm tamamlanır.',
          'Kural kapalıysa ürünler süreç tarafından otomatik iade alınır; süreç iptal edilirse çalışana geri yüklenir.',
        ],
      },
      {
        baslik: 'Zimmeti değiştirme (yeni ürünle takas)',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Çalışandaki ürünü geri alıp yerine başka bir ürün verirsiniz; iki işlem tek adımda yapılır.',
        adimlar: [
          'Atanmış ürünün "Malzeme İşlemleri" menüsünden değiştirme işlemini seçin.',
          'Yerine verilecek ürünü seçin.',
          'Eski ürün için iade tarihi, kondisyon ve durum; yeni ürün için atanma tarihi ve kondisyon girin.',
          'Nedeni yazıp kaydedin.',
        ],
        sonuc: 'Eski ürün stoka (veya bakıma) döner, yeni ürün çalışana atanır.',
        notlar: [YETKI],
      },
      {
        baslik: 'Teslimi iptal etme ve atamayı kaldırma',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Henüz teslim alınmamış bir atamayı geri alır veya ürünü çalışandan ayırırsınız.',
        adimlar: [
          'İlgili ürünün "Malzeme İşlemleri" menüsünü açın.',
          'Teslimi iptal veya atamayı kaldırma seçeneğini seçin.',
          'Tarih ve neden yazıp onaylayın.',
        ],
        sonuc: 'Ürün yeniden "Kullanılabilir" duruma döner ve çalışanın listesinden çıkar.',
        notlar: [YETKI],
      },
      {
        baslik: 'Ürünü bakıma alma ve diğer malzeme işlemleri',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Ürünün durumunu (bakıma gönderme, bakımdan dönme gibi) adım adım işlersiniz.',
        adimlar: [
          'Satırdaki "Malzeme İşlemleri" (şimşek) butonuna tıklayın.',
          'Uygulanacak işlemi seçin.',
          'İstenen tarih, kondisyon ve açıklama bilgilerini girip kaydedin.',
        ],
        sonuc: 'Ürünün durumu güncellenir; bakım kayıtları ürün geçmişinde ve "Devam Eden Tamirler" kartında görünür.',
      },
      {
        baslik: 'Ürün listesini dışa aktarma',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Ürünler',
        aciklama: 'Stok listesini dosya olarak alırsınız.',
        adimlar: ['Gerekirse durum, kondisyon, kategori veya atanan filtrelerini seçin.', '"Dışa Aktar" butonuna tıklayın.', 'Dosya biçimini seçip indirin.'],
        sonuc: 'Filtrelere uyan ürünler dosyaya aktarılır.',
      },
      // — Kategoriler —
      {
        baslik: 'Kategori ekleme',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Kategoriler',
        aciklama: 'Ürünleri gruplamak için yeni kategori (ör. Bilgisayar, Telefon, Şirket Aracı) oluşturursunuz.',
        adimlar: [
          '"Kategoriler" alt sekmesinde "Kategori Ekle" butonuna tıklayın.',
          'Kategori adını yazın.',
          'Uyarı sürelerini (ay) girin.',
          'Ortak kullanım için havuzu açın ve havuza kimlerin erişebileceğini seçin.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Kategori Adı', aciklama: 'Ör. Ofis Ekipmanı.', zorunlu: true },
          { ad: 'Organizasyonel Birim', aciklama: 'Kategorinin bağlı olduğu stok birimi.', zorunlu: false },
          { ad: 'Zimmet uyarı süresi (ay)', aciklama: 'Ürün bu süre boyunca aynı kişide kalırsa uyarı verilir.', zorunlu: false },
          { ad: 'Boşta kalma uyarı süresi (ay)', aciklama: 'Ürün bu süre boyunca stokta atanmadan kalırsa uyarı verilir.', zorunlu: false },
          { ad: 'Planlanan stok süresi (ay)', aciklama: 'Ürünün stokta kalması planlanan süre.', zorunlu: false },
          { ad: 'Havuz', aciklama: 'Kategorideki ürünler ortak kullanıma (rezervasyona) açık mı.', zorunlu: false },
          { ad: 'Havuz erişimi', aciklama: 'Havuzdan talep edebilecek birimler veya çalışanlar.', zorunlu: false },
        ],
        sonuc: 'Kategori listeye eklenir; Havuz sütununda "Açık" veya "Kapalı" görünür.',
      },
      {
        baslik: 'Kategori düzenleme ve silme',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Kategoriler',
        aciklama: 'Kategori adını, uyarı sürelerini ve havuz ayarlarını değiştirir veya kategoriyi kaldırırsınız.',
        adimlar: ['Kategorinin İşlemler sütunundaki düzenleme butonuna tıklayın.', 'Bilgileri güncelleyip kaydedin.', 'Silmek için silme butonuna tıklayıp onaylayın.'],
        sonuc: 'Kategori güncellenir veya listeden kaldırılır.',
        notlar: ['İçinde ürün bulunan kategoriyi silmeden önce ürünleri başka kategoriye taşıyın.'],
      },
      {
        baslik: 'Kategoriye hatırlatma alanı tanımlama',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Kategoriler',
        aciklama:
          'Kategorideki ürünler için tarihli takip alanları (ör. garanti bitişi, sigorta yenileme, muayene tarihi) ve bu tarihlerden ne kadar önce kime hatırlatma gideceğini belirlersiniz.',
        adimlar: [
          'Kategorinin İşlemler sütunundan hatırlatma alanları bölümünü açın.',
          'Yeni alan ekleyip adını yazın.',
          'Hatırlatmanın kaç gün önce gönderileceğini ve alıcıları seçin.',
          'Kaydedin. Var olan alanları aynı yerden düzenleyebilir veya silebilirsiniz.',
        ],
        alanlar: [
          { ad: 'Alan Adı', aciklama: 'Ör. Garanti Bitiş Tarihi.', zorunlu: true },
          { ad: 'Hatırlatma zamanları', aciklama: 'Tarihten kaç gün önce bildirim gideceği (birden fazla olabilir).', zorunlu: false },
          { ad: 'Kime gönderilecek', aciklama: 'Ör. zimmet sahibi, stok yöneticisi.', zorunlu: false },
          { ad: 'Ek alıcılar', aciklama: 'Bildirimi ayrıca alacak çalışanlar.', zorunlu: false },
        ],
        sonuc: 'Alan, bu kategoride ürün eklerken/düzenlerken formda çıkar; girilen tarihlere göre hatırlatmalar otomatik gönderilir.',
        notlar: [YETKI],
      },
      // — Envanter paketleri —
      {
        baslik: 'Envanter paketi oluşturma',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Envanter Paketleri',
        aciklama: 'Bir rol için sık verilen ekipman setini (ör. "İş Analisti Başlangıç Paketi") tanımlarsınız.',
        adimlar: [
          '"Envanter Paketleri" alt sekmesinde "Paket Ekle" butonuna tıklayın.',
          'Paket adını yazın.',
          'Pakete kategori ekleyip her biri için adet girin (ör. Bilgisayar × 1, Telefon × 1).',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Paket Adı', aciklama: 'Ör. İş Analisti Başlangıç Paketi.', zorunlu: true },
          { ad: 'Organizasyonel Birim', aciklama: 'Paketin ait olduğu birim.', zorunlu: false },
          { ad: 'Kategori ve Adet', aciklama: 'Paketteki her kategori ve miktarı.', zorunlu: true },
        ],
        sonuc: 'Paket listede "Kategoriler" sütunuyla görünür.',
        notlar: ['Yeni çalışan eklerken veya işe giriş sürecinde "Zimmet Ata" ile seçilen paketin kategorileri zimmet talebi olarak açılır.'],
      },
      {
        baslik: 'Envanter paketini düzenleme ve silme',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Envanter Paketleri',
        aciklama: 'Paketin içeriğini günceller veya paketi kaldırırsınız.',
        adimlar: ['Paketin İşlemler sütunundaki düzenleme butonuna tıklayın.', 'Kategori ve adetleri güncelleyip kaydedin.', 'Silmek için silme butonunu kullanıp onaylayın.'],
        sonuc: 'Paket güncellenir veya kaldırılır.',
      },
      // — Havuz takvimi —
      {
        baslik: 'Havuz takvimini görüntüleme',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Havuz Takvimi',
        aciklama: 'Ortak kullanım ürünlerinin hangi gün kimde olduğunu, onay bekleyen rezervasyonları ve bakımdaki ürünleri görürsünüz.',
        adimlar: [
          '"Havuz Takvimi" alt sekmesini açın.',
          'Kategori, Ürün, Departman ve Durum filtrelerini seçin.',
          'Gün, Hafta veya Ay görünümünü seçin.',
          'Önceki, Sonraki ve Bugün düğmeleriyle dönemler arasında geçin; bir hücreye tıklayarak rezervasyon ayrıntısını görün.',
        ],
        sonuc: 'Takvimde her ürün için Müsait, Dolu, Onay Bekliyor veya Bakımda / Kullanım Dışı durumları renkli gösterilir.',
      },
      // — Stok satın alma —
      {
        baslik: 'Stok satın alma kaydı oluşturma',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Stok Satın Alma',
        aciklama: 'Stok azaldığında bir kategori için satın alma kaydı açarsınız.',
        adimlar: ['"Satın Alma Ekle" butonuna tıklayın.', 'Kategoriyi ve miktarı seçin.', 'Birimi kontrol edip kaydedin.'],
        alanlar: [
          { ad: 'Kategori', aciklama: 'Satın alınacak ürün kategorisi.', zorunlu: true },
          { ad: 'Miktar', aciklama: 'Alınacak adet.', zorunlu: true },
          { ad: 'Organizasyonel Birim', aciklama: 'Ürünlerin gireceği stok birimi.', zorunlu: false },
        ],
        sonuc: 'Kayıt listeye eklenir; "Bekleyen Satın Almalar" kartı güncellenir. "Girilen" sütunu 0/miktar olarak başlar.',
      },
      {
        baslik: 'Satın alma durumunu güncelleme',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Stok Satın Alma',
        aciklama: 'Satın almanın hangi aşamada olduğunu (ör. Sipariş Edildi, Alındı) işaretlersiniz.',
        adimlar: ['Kaydın İşlemler sütunundaki durum güncelleme butonuna tıklayın.', 'Yeni durumu ve tarihini seçin.', 'Açıklama yazıp kaydedin.'],
        alanlar: [
          { ad: 'Durum', aciklama: 'Ör. Sipariş Edildi, Alındı.', zorunlu: true },
          { ad: 'Durum Tarihi', aciklama: 'Durumun gerçekleştiği tarih.', zorunlu: false },
          { ad: 'Açıklama', aciklama: 'Ör. sipariş numarası, tedarikçi notu.', zorunlu: false },
        ],
        sonuc: 'Kaydın "Durum" sütunu güncellenir.',
      },
      {
        baslik: 'Satın alınan ürünleri kayda bağlama',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Stok Satın Alma',
        aciklama: 'Gelen ürünleri stoka ekledikten sonra ilgili satın alma kaydıyla eşleştirirsiniz.',
        adimlar: [
          'Satın alma kaydının İşlemler sütunundan ürün ekleme seçeneğini açın.',
          'Listeden satın almaya uygun ürünü seçin.',
          'Gerekirse açıklama yazıp kaydedin; kayda bağlı ürünleri aynı yerden görüntüleyin.',
        ],
        sonuc: '"Girilen" sütunu artar (ör. 1/2 → 2/2).',
      },
      {
        baslik: 'Satın alma kaydını silme',
        kim: 'Yönetici',
        sekme: 'Ürün Yönetimi > Stok Satın Alma',
        aciklama: 'Yanlış veya vazgeçilen satın alma kaydını kaldırırsınız.',
        adimlar: ['Kaydın silme butonuna tıklayın.', 'Uyarıyı onaylayın.'],
        sonuc: 'Kayıt listeden kaldırılır.',
      },
      // — Stok talepleri —
      {
        baslik: 'Stok taleplerini görüntüleme ve filtreleme',
        kim: 'Yönetici',
        sekme: 'Stok Talepleri',
        aciklama: 'Onaydan geçip stok birimine düşen zimmet ve havuz taleplerini izlersiniz.',
        adimlar: [
          '"Stok Talepleri" sekmesini açın; üstteki kartlardan toplam ve bekleyen talep sayısını görün.',
          '"Tümü" veya "Bana Atananlar" alt sekmesini seçin.',
          'Tümü / Zimmet / Havuz seçicisiyle türe göre süzün.',
          'Bir talebin ayrıntısı için Görüntüle (göz) butonuna tıklayın.',
        ],
        sonuc: 'Talep ayrıntısında çalışanın açıklaması, onay geçmişi ve stok adımındaki işlemler görünür.',
      },
      {
        baslik: 'Stok talebini üstlenme veya bir sorumluya atama',
        kim: 'Yönetici',
        sekme: 'Stok Talepleri',
        aciklama: 'Bekleyen bir talebi kendinize veya birimdeki başka bir stok yöneticisine atarsınız.',
        adimlar: [
          'Bekleyen talebin satırındaki kişi simgeli (ata) butona tıklayın.',
          'Talebi kendinize alın veya listeden bir stok yöneticisi seçin.',
          'Onaylayın.',
        ],
        sonuc: 'Talebin "Atanan" sütununda seçilen kişi görünür, "Durum" atanmış olur ve talep o kişinin "Bana Atananlar" listesine düşer.',
      },
      {
        baslik: 'Stok talebini işleme alma, beklemeye alma veya talep sahibinden bilgi isteme',
        kim: 'Yönetici',
        sekme: 'Stok Talepleri > Bana Atananlar',
        aciklama: 'Üstlendiğiniz talebin ara durumunu güncellersiniz.',
        adimlar: [
          'Talebin Görüntüle (göz) butonuna tıklayın.',
          'İşleme al, beklemeye al veya talep sahibinden bilgi bekleniyor seçeneklerinden birini seçin.',
          'Beklemeye alırken veya bilgi isterken açıklama yazın.',
          'Kaydedin.',
        ],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Ör. "Ürün tedarik bekleniyor", "Tercih ettiğiniz renk/model nedir?"', zorunlu: false }],
        sonuc: 'Talebin "Durum" sütunu güncellenir; çalışan kendi Ekipman Taleplerim listesinde güncel durumu görür.',
      },
      {
        baslik: 'Stok talebini başka birime veya yöneticiye aktarma',
        kim: 'Yönetici',
        sekme: 'Stok Talepleri > Bana Atananlar',
        aciklama: 'Talep sizin biriminizden karşılanamıyorsa başka bir stok birimine veya belirli bir yöneticiye yönlendirirsiniz.',
        adimlar: [
          'Talebin ayrıntısını açın.',
          'Başka stok birimine aktar veya yöneticiye aktar seçeneğini seçin.',
          'Hedef birimi ya da pozisyonu seçin ve açıklama yazın.',
          'Onaylayın.',
        ],
        alanlar: [
          { ad: 'Hedef Birim / Yönetici', aciklama: 'Talebin aktarılacağı stok birimi veya pozisyon.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Aktarma gerekçesi.', zorunlu: false },
        ],
        sonuc: 'Talep seçilen birimin veya yöneticinin listesine geçer; sizin listenizde aktarıldı olarak kalır.',
        notlar: [YETKI],
      },
      {
        baslik: 'Stok talebini reddetme veya iptal etme',
        kim: 'Yönetici',
        sekme: 'Stok Talepleri > Bana Atananlar',
        aciklama: 'Karşılanamayacak bir talebi gerekçesiyle reddeder ya da geçersiz hale gelen talebi iptal edersiniz.',
        adimlar: ['Talebin ayrıntısını açın.', 'Reddet veya iptal seçeneğine tıklayın.', 'Açıklama yazıp onaylayın.'],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Ret veya iptal gerekçesi.', zorunlu: false }],
        sonuc: 'Talebin "Talep Durumu" Reddedildi olur; çalışan Ekipman Taleplerim sekmesinde sonucu görür.',
      },
      {
        baslik: 'Talep edilen ürünü teslim etme',
        kim: 'Yönetici',
        sekme: 'Stok Talepleri > Bana Atananlar',
        aciklama: 'Stoktan uygun ürünü seçip talep sahibine zimmetlersiniz.',
        adimlar: [
          'Talebin ayrıntısını açın; gerekirse önce teslim aşamasına alın.',
          'Teslim seçeneğine tıklayın.',
          'Talep edilen kategoride kullanılabilir ürünlerden birini seçin.',
          'Teslim tarihini ve ürünün kondisyonunu girin, açıklama ekleyin.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Ürün', aciklama: 'Teslim edilecek ürün (yalnız uygun ve kullanılabilir olanlar listelenir).', zorunlu: true },
          { ad: 'Teslim Tarihi', aciklama: 'Ürünün verildiği tarih.', zorunlu: true },
          { ad: 'Kondisyon', aciklama: 'Teslim anındaki fiziksel durum.', zorunlu: false },
          { ad: 'Açıklama', aciklama: 'Not.', zorunlu: false },
        ],
        sonuc:
          'Ürün çalışana atanır ve çalışanın Zimmetlerim sayfasına (önce Teslim/İade sekmesinde "Teslim Bekliyor") düşer. Talep tamamlandığında Zimmet Yönetimi\'nde Genel Durum "Tamamlandı" olur.',
      },
      {
        baslik: 'Havuz talebini teslim etme',
        kim: 'Yönetici',
        sekme: 'Stok Talepleri',
        aciklama: 'Onaylanmış rezervasyon için ortak ürünü (ör. şirket aracı) talep eden kişiye verirsiniz.',
        adimlar: [
          'Tür seçicisinde "Havuz"u seçin.',
          'Satırdaki takvim simgesiyle ürünün o tarihlerde müsait olduğunu kontrol edin.',
          'Talebi üstlenin, ardından teslim seçeneğiyle ürünü, tarihi ve kondisyonu girin.',
          'Kaydedin.',
        ],
        sonuc: 'Ürün rezervasyon süresince talep sahibine verilir ve takvimde "Dolu" görünür.',
        notlar: ['Havuz taleplerinde de işleme alma, beklemeye alma, aktarma, reddetme ve iptal seçenekleri zimmet talepleriyle aynı şekilde çalışır.'],
      },
      {
        baslik: 'Talep sahibiyle mesajlaşma',
        kim: 'Yönetici',
        sekme: 'Stok Talepleri',
        aciklama: 'Talep hakkında çalışanla sayfadan ayrılmadan yazışırsınız.',
        adimlar: [
          'Talebin ayrıntısında "Mesajlar" bölümünü açın.',
          'Mesajınızı yazıp gönderin.',
          'Okunmamış mesaj sayısı ilgili satırda gösterilir; mesajları açtığınızda okundu olarak işaretlenir.',
        ],
        sonuc: 'Mesaj çalışanın Ekipman Taleplerim sekmesindeki "Mesajlar" bölümüne düşer.',
      },
      // — Stok ticketları —
      {
        baslik: "Stok ticket'larını görüntüleme",
        kim: 'Yönetici',
        sekme: "Stok Ticket'ları",
        aciklama: 'Çalışanların zimmetlerindeki ürünler için açtığı arıza ve sorun kayıtlarını izlersiniz.',
        adimlar: [
          '"Stok Ticket\'ları" sekmesini açın.',
          '"Tümü" veya "Bana Atananlar" alt sekmesini seçin.',
          'Ticketın ayrıntısı ve geçmişi için Görüntüle (göz) butonuna tıklayın.',
        ],
        sonuc: 'Ticketın ürünü, açıklaması, onay adımları ve yapılan işlemler görünür.',
      },
      {
        baslik: 'Ticketı üstlenme, işleme alma, beklemeye alma',
        kim: 'Yönetici',
        sekme: "Stok Ticket'ları",
        aciklama: 'Ticketı kendinize veya bir stok yöneticisine atar ve ara durumunu güncellersiniz.',
        adimlar: [
          'Ticketın satırındaki atama butonuna tıklayıp sorumlu kişiyi seçin.',
          'Ayrıntıdan işleme al, beklemeye al veya talep sahibinden bilgi bekleniyor seçeneğini seçin.',
          'Açıklama yazıp kaydedin.',
        ],
        sonuc: 'Ticket "Bana Atananlar" listesine düşer; çalışan kendi Ticketlarım sekmesinde durumu (ör. İşleniyor) görür.',
      },
      {
        baslik: 'Arızalı ürünü tamire alma',
        kim: 'Yönetici',
        sekme: "Stok Ticket'ları > Bana Atananlar",
        aciklama: 'Sorunlu ürünü servis veya bakım için teslim alırsınız.',
        adimlar: [
          'Ticketın ayrıntısını açın.',
          'Tamire alma seçeneğini seçin.',
          'Ürünün çalışandan geri alınıp alınmayacağını belirleyin ve açıklama yazın.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Ürün iade durumu', aciklama: 'Tamir süresince ürünün çalışandan geri alınıp alınmayacağı.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Ör. "Klavye değişimi için yetkili servise gönderildi."', zorunlu: false },
        ],
        sonuc:
          'Ürün bakım sürecine girer; "Devam Eden Tamirler" kartına eklenir. Ürün geri alındıysa çalışanın Teslim/İade sekmesinde iade kaydı oluşur (ör. "Arıza nedeniyle onarıma alındı").',
      },
      {
        baslik: 'Ticket için yeni ürün teslim etme',
        kim: 'Yönetici',
        sekme: "Stok Ticket'ları > Bana Atananlar",
        aciklama: 'Arızalı ürünün yerine çalışana başka bir ürün verirsiniz.',
        adimlar: ['Ticketın ayrıntısını açın.', 'Teslim seçeneğine tıklayın.', 'Yeni ürünü, teslim tarihini ve kondisyonu seçin.', 'Açıklama yazıp kaydedin.'],
        alanlar: [
          { ad: 'Ürün', aciklama: 'Yerine verilecek ürün.', zorunlu: true },
          { ad: 'Teslim Tarihi', aciklama: 'Verildiği tarih.', zorunlu: true },
          { ad: 'Kondisyon', aciklama: 'Teslim anındaki durum.', zorunlu: false },
        ],
        sonuc: 'Yeni ürün çalışanın zimmetine eklenir.',
      },
      {
        baslik: 'Ticketı aktarma, reddetme, iptal etme veya tamamlama',
        kim: 'Yönetici',
        sekme: "Stok Ticket'ları > Bana Atananlar",
        aciklama: 'Ticketı başka birime/yöneticiye yönlendirir ya da sonuçlandırırsınız.',
        adimlar: [
          'Ticketın ayrıntısını açın.',
          'Başka stok birimine aktar, yöneticiye aktar, reddet, iptal veya tamamla seçeneklerinden birini seçin.',
          'Gerekli hedefi seçip açıklama yazın.',
          'Onaylayın.',
        ],
        alanlar: [
          { ad: 'Hedef Birim / Yönetici', aciklama: 'Yalnız aktarma işlemlerinde.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Gerekçe veya çözüm notu.', zorunlu: false },
        ],
        sonuc: 'Tamamlanan ticket kapanır, reddedilen ticket "Reddedildi" olur; çalışan sonucu Ticketlarım sekmesinde görür.',
        notlar: [YETKI],
      },
      {
        baslik: 'Ticket sahibiyle mesajlaşma',
        kim: 'Yönetici',
        sekme: "Stok Ticket'ları",
        aciklama: 'Arıza hakkında çalışana soru sorar veya bilgi verirsiniz.',
        adimlar: ['Ticketın ayrıntısında "Mesajlar" bölümünü açın.', 'Mesajınızı yazıp gönderin.', 'Kendi mesajınızı düzenleyebilir veya silebilirsiniz.'],
        sonuc: 'Mesaj çalışanın Ticketlarım sekmesindeki "Mesajlar" bölümüne düşer.',
      },
      // — Raporlar —
      {
        baslik: 'Stok raporunu görüntüleme',
        kim: 'Yönetici',
        sekme: 'Stok Raporları',
        aciklama: 'Birimin stok özetini (toplam, kullanılabilir, atanmış, bakımdaki ürün sayıları) görürsünüz.',
        adimlar: ['"Stok Raporları" sekmesini açın.', 'Sağ üstten raporunu görmek istediğiniz birimi seçin.'],
        sonuc: 'Toplam Ürün, Kullanılabilir, Atanmış ve Bakımda sayaçları güncellenir.',
      },
      {
        baslik: 'Rapor alarmı oluşturma',
        kim: 'Yönetici',
        sekme: 'Stok Raporları',
        aciklama: 'Stok durumu raporunun belirli aralıklarla seçtiğiniz kişilere e-posta ile gönderilmesini sağlarsınız.',
        adimlar: [
          '"Rapor Alarm Yapılandırması" bölümünde "Yeni Alarm Ekle" butonuna tıklayın.',
          'Gönderim sıklığını ve rapor türünü seçin.',
          'Rapora dahil edilecek kondisyon ve durumları seçin.',
          'Raporu alacak çalışanları ekleyin, açıklama yazın.',
          'Alarmı etkin bırakıp kaydedin.',
        ],
        alanlar: [
          { ad: 'Etkin', aciklama: 'Alarm açık mı.', zorunlu: false },
          { ad: 'Periyot', aciklama: 'Raporun ne sıklıkla gönderileceği.', zorunlu: true },
          { ad: 'Rapor Türü', aciklama: 'Gönderilecek raporun içeriği.', zorunlu: true },
          { ad: 'Kondisyon / Durum filtreleri', aciklama: 'Rapora girecek ürünler.', zorunlu: false },
          { ad: 'Alıcılar', aciklama: 'E-postayı alacak çalışanlar.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Alarmın amacı.', zorunlu: false },
        ],
        sonuc: 'Alarm listeye eklenir; seçilen sıklıkta alıcılara stok raporu e-postası gider.',
        notlar: ['Birden fazla alarm oluşturabilirsiniz.'],
      },
      {
        baslik: 'Rapor alarmını hemen gönderme, düzenleme veya silme',
        kim: 'Yönetici',
        sekme: 'Stok Raporları',
        aciklama: 'Var olan alarmı beklemeden çalıştırır, ayarlarını değiştirir veya kaldırırsınız.',
        adimlar: [
          'Alarm satırındaki hemen gönder butonuyla raporu şimdi gönderin.',
          'Düzenleme butonuyla periyot, filtre ve alıcıları güncelleyin.',
          'Silme butonuyla alarmı kaldırın.',
        ],
        sonuc: 'Rapor anında gönderilir, alarm güncellenir veya silinir.',
      },
      // — Yetki —
      {
        baslik: 'Stok yöneticilerini belirleme',
        kim: 'Yönetici',
        sekme: null,
        aciklama: 'Birimin stoğunu kimlerin yöneteceğini (stok taleplerini ve ticketları kimlerin üstlenebileceğini) pozisyon bazında belirlersiniz.',
        adimlar: [
          'Stok yöneticisi ayarlarını açın.',
          'Birim için stok yöneticisi olacak pozisyonları ekleyin.',
          'Artık görev almayacak pozisyonları listeden çıkarın.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Birim', aciklama: 'Stok birimi.', zorunlu: true },
          { ad: 'Pozisyon', aciklama: 'Stok yöneticisi olacak pozisyon; pozisyondaki kişi değişirse yetki yeni kişiye geçer.', zorunlu: true },
        ],
        sonuc: 'Eklenen pozisyonlar stok taleplerini ve ticketları görebilir, üstlenebilir ve kendilerine atanan işleri yürütebilir.',
        notlar: [YETKI],
      },
    ],

    sss: [
      {
        soru: 'Onaylanan bir zimmet talebi neden Stok Talepleri listesinde görünmüyor?',
        cevap:
          'Talep, kategorinin bağlı olduğu stok birimine düşer. Sağ üstten doğru birimi seçtiğinizden emin olun; talep başka birime aktarılmış da olabilir.',
      },
      {
        soru: 'Ürün teslim ederken istediğim ürün listede yok, neden?',
        cevap: 'Teslimde yalnız talep edilen kategoride ve "Kullanılabilir" durumdaki ürünler listelenir. Ürün atanmış veya bakımda olabilir.',
      },
      {
        soru: 'Havuz ürünü ile normal ürün arasındaki fark nedir?',
        cevap: 'Normal ürün bir çalışana kalıcı zimmetlenir. Havuz ürünü (ör. şirket aracı) belirli tarih aralıkları için rezerve edilir ve süresi bitince stoka döner.',
      },
    ],

    ipuclari: [
      'Sekme başlıklarının yanındaki bilgi (i) simgesi o bölümün kısa açıklamasını gösterir.',
      'Yeni gelen ürünleri önce stoka ekleyip ardından ilgili satın alma kaydına bağlayın; "Girilen" sütunu takibi kolaylaştırır.',
      'Garanti ve sigorta gibi tarihleri hatırlatma alanı olarak tanımlarsanız bitiş tarihinden önce otomatik e-posta alırsınız.',
      'Yoğun dönemlerde "Bana Atananlar" alt sekmesiyle yalnız kendi işlerinize odaklanın.',
    ],
  },

  // ───────────────────────────── ZİMMETLERİM ─────────────────────────────
  {
    id: 'zimmetlerim',
    grup: 'kisisel',
    sira: 50,
    baslik: 'Zimmetlerim',
    menu: 'Kişisel › Zimmetlerim',
    href: '/my-inventories',
    kim: 'ali',
    ozet:
      'Üzerinizdeki ekipmanları gördüğünüz, yeni ekipman veya ortak kullanım ürünü (ör. şirket aracı) talep ettiğiniz, arızalı ürünler için ticket açtığınız ve teslim/iade kayıtlarınızı izlediğiniz kişisel sayfadır. Tüm çalışanlar kullanır.',

    ekranlar: [
      {
        sekme: null,
        aciklama:
          'Sayfa "Zimmetler" sekmesiyle açılır. Sağ üstte Ekipman Talep Et, Havuzdan Talep Et, Ticket Aç ve Dışa Aktar butonları; altında Toplam Zimmet, Bekleyen Ekipman Talepleri, Bekleyen Ticketlar ve Bekleyen Teslim/İade kartları; listede Ürün Adı, Seri Numarası, Atanma Tarihi ve İşlemler (Detayları Görüntüle, Sorun Belirt) yer alır.',
      },
      {
        sekme: 'Ekipman Taleplerim',
        aciklama:
          'Açtığınız zimmet ve havuz talepleri: Tür, Kategori, Miktar (havuzda tarih aralığı), Açıklama, Durum, Onay Adımı (ör. Ekipman Onayı, Stok Talebi), Talep Tarihi. Tümü / Zimmet / Havuz seçicisi bulunur.',
      },
      {
        sekme: 'Ticketlarım',
        aciklama: 'Zimmetinizdeki ürünler için açtığınız sorun kayıtları: Ürün Adı, Açıklama, Durum, Onay Adımı (ör. İşleniyor), Oluşturulma Tarihi.',
      },
      {
        sekme: 'Teslim/İade',
        aciklama:
          'Size teslim edilmeyi bekleyen ve sizden iade alınan ürünler: Ürün Adı, Durum (ör. Teslim Bekliyor, İade Edildi), Atanma Tarihi, İade Tarihi, Açıklama. Bekleyen teslim varsa üstte "Bekleyen Teslim/İade İşlemi" uyarısı çıkar.',
      },
    ],

    bolumler: [
      {
        baslik: 'Onay adımları',
        metin: '"Onay Adımı" sütunu talebinizin şu an hangi aşamada olduğunu gösterir.',
        maddeler: [
          'Ekipman Onayı: Talebiniz yöneticinizin (veya onay zincirindeki yöneticilerin) onayını bekliyor.',
          'Stok Talebi: Onaylar tamamlandı; talep stok birimine iletildi, ürün hazırlanıyor.',
          'İşleniyor: Ticketınız stok yöneticisi tarafından inceleniyor.',
          'Onaylandı / Reddedildi: Süreç sonuçlandı.',
        ],
      },
      {
        baslik: 'Teslim/İade durumları',
        maddeler: [
          'Teslim Bekliyor: Ürün size atandı, teslim almanız bekleniyor. Teslim için yöneticinizle veya stok yöneticisiyle koordine olun.',
          'İade Edildi: Ürün sizden geri alındı (ör. arıza nedeniyle onarıma alındı, cihaz yenilendi).',
          'İade Bekliyor: Ürünün sizden geri alınması bekleniyor (ör. işten ayrılış veya ürün değişimi); ürünü yöneticinize ya da stok yöneticisine teslim edin.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Zimmetlerimi görüntüleme',
        kim: 'Çalışan',
        sekme: 'Zimmetler',
        aciklama: 'Üzerinize kayıtlı tüm ekipmanları ve atanma tarihlerini görürsünüz.',
        adimlar: [
          'Menüden Kişisel › Zimmetlerim sayfasını açın.',
          '"Zimmetler" sekmesinde ürün adı, kategori ve seri numaralarını inceleyin.',
          'Ürün Adı veya Atanma Tarihi başlığındaki oklarla sıralayın.',
          'Bir ürünün tüm bilgileri için Detayları Görüntüle (göz) butonuna tıklayın.',
        ],
        sonuc: 'Ürünün marka, model, seri numarası, kondisyonu ve atanma bilgileri görünür.',
      },
      {
        baslik: 'Yeni ekipman talep etme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'İşiniz için ihtiyaç duyduğunuz bir ekipmanı (ör. bilgisayar, monitör, telefon) talep edersiniz.',
        adimlar: [
          'Sağ üstteki "Ekipman Talep Et" butonuna tıklayın.',
          'Ürün kategorisini seçin.',
          'Miktarı girin.',
          'İhtiyacınızı açıklama alanına yazın (ör. "Süreç diyagramları için ikinci harici monitör").',
          'Gönderin.',
        ],
        alanlar: [
          { ad: 'Ürün Kategorisi', aciklama: 'Talep edebileceğiniz kategoriler listelenir.', zorunlu: true },
          { ad: 'Miktar', aciklama: 'Kaç adet istediğiniz.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Talebin gerekçesi.', zorunlu: false },
        ],
        sonuc:
          'Talep "Beklemede" durumunda ve "Ekipman Onayı" adımında yöneticinize düşer. Onaylar tamamlanınca "Stok Talebi" adımına geçer; ürün teslim edildiğinde Zimmetler listenize eklenir.',
      },
      {
        baslik: 'Havuzdan ürün talep etme (rezervasyon)',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Şirket aracı gibi ortak kullanılan bir ürünü belirli tarih ve saatler için rezerve edersiniz.',
        adimlar: [
          'Sağ üstteki "Havuzdan Talep Et" butonuna tıklayın.',
          'Kategoriyi seçin; takvimden ürünlerin müsait olduğu günlere bakın.',
          'İsterseniz tercih ettiğiniz ürünü seçin.',
          'Başlangıç ve bitiş tarih/saatini, kullanım amacını ve gidilecek yeri girin.',
          'Ek sürücü olacaksa işaretleyip kişiyi seçin, açıklama yazın.',
          'Gönderin.',
        ],
        alanlar: [
          { ad: 'Kategori', aciklama: 'Ortak kullanıma açık kategoriler (ör. Şirket Aracı).', zorunlu: true },
          { ad: 'Tercih Edilen Ürün', aciklama: 'Belirli bir ürün istiyorsanız (ör. Renault Megane 34 KCZ 101).', zorunlu: false },
          { ad: 'Başlangıç Tarihi', aciklama: 'Kullanımın başlayacağı tarih ve saat.', zorunlu: true },
          { ad: 'Bitiş Tarihi', aciklama: 'Ürünün iade edileceği tarih ve saat.', zorunlu: true },
          { ad: 'Amaç', aciklama: 'Ör. Müşteri ziyareti, Eğitim, Saha çalışması.', zorunlu: false },
          { ad: 'Gidilecek Yer', aciklama: 'Ör. Gebze, Bursa.', zorunlu: false },
          { ad: 'Ek Sürücü', aciklama: 'Araç için ikinci bir sürücü olacaksa çalışanı seçin.', zorunlu: false },
          { ad: 'Açıklama', aciklama: 'Ek bilgi.', zorunlu: false },
        ],
        sonuc:
          'Talep Ekipman Taleplerim listesinde "Havuz" türüyle ve "Ekipman Onayı" adımında görünür; yöneticinize düşer. Onaylandıktan sonra stok birimi ürünü teslim eder; takvimde ilgili tarihler "Dolu" olur.',
        notlar: ['Yalnız havuz erişiminiz olan kategoriler listelenir.'],
      },
      {
        baslik: 'Ticket açma (arıza veya sorun bildirme)',
        kim: 'Çalışan',
        sekme: 'Zimmetler',
        aciklama: 'Zimmetinizdeki bir ürünle ilgili arıza veya sorunu stok birimine bildirirsiniz.',
        adimlar: [
          'Sağ üstteki "Ticket Aç" butonuna veya ilgili ürünün satırındaki "Sorun Belirt" (uyarı üçgeni) butonuna tıklayın.',
          'Sorunlu ürünü seçin (satırdan açtıysanız otomatik seçilir).',
          'Sorunu ayrıntılı açıklayın (ör. "Ekranın sağ kenarında dikey bir çizgi oluştu").',
          'Gönderin.',
        ],
        alanlar: [
          { ad: 'Ürün', aciklama: 'Zimmetinizdeki ürünlerden biri.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Sorunun tarifi.', zorunlu: true },
        ],
        sonuc:
          'Ticket "Beklemede" durumuyla Ticketlarım sekmesine eklenir ve stok biriminin Stok Ticket\'ları listesine düşer. Stok yöneticisi tamire alabilir, yeni ürün verebilir veya reddedebilir.',
      },
      {
        baslik: 'Ekipman taleplerimi izleme',
        kim: 'Çalışan',
        sekme: 'Ekipman Taleplerim',
        aciklama: 'Açtığınız taleplerin hangi adımda olduğunu takip edersiniz.',
        adimlar: [
          '"Ekipman Taleplerim" sekmesini açın.',
          'Tümü / Zimmet / Havuz seçicisiyle türe göre süzün.',
          '"Durum" ve "Onay Adımı" sütunlarına bakın.',
          'Ayrıntı ve onay geçmişi için Detayları Görüntüle butonuna tıklayın.',
        ],
        sonuc: 'Talebin kimde beklediği, kimin ne zaman onayladığı veya reddettiği görünür.',
      },
      {
        baslik: 'Talebi düzenleme, iptal etme veya silme',
        kim: 'Çalışan',
        sekme: 'Ekipman Taleplerim',
        aciklama: 'Henüz sonuçlanmamış talebinizi değiştirir veya geri çekersiniz.',
        adimlar: [
          'Talebin İşlemler sütunundaki ilgili butona tıklayın.',
          'Düzenlemek için kategori, miktar veya açıklamayı değiştirip kaydedin.',
          'Vazgeçtiyseniz iptal (veya sil) seçeneğini seçip onaylayın.',
        ],
        sonuc: 'Düzenlenen talep aynı adımdan devam eder; iptal edilen talep onay listelerinden çıkar.',
        notlar: ['Onay almış veya stok biriminde işleme alınmış talepler değiştirilemeyebilir.', YETKI],
      },
      {
        baslik: 'Talebe yorum ekleme',
        kim: 'Çalışan',
        sekme: 'Ekipman Taleplerim',
        aciklama: 'Talebinize sonradan ek bilgi eklersiniz.',
        adimlar: ['Talebin Detayları Görüntüle butonuna tıklayın.', 'Yorum alanına notunuzu yazın.', 'Gönderin; kendi yorumunuzu silme simgesiyle kaldırabilirsiniz.'],
        alanlar: [{ ad: 'Yorum', aciklama: 'Eklemek istediğiniz bilgi.', zorunlu: true }],
        sonuc: 'Yorum, talebi değerlendiren yöneticiler ve stok yöneticileri tarafından görülür.',
      },
      {
        baslik: 'Stok yöneticisiyle mesajlaşma',
        kim: 'Çalışan',
        sekme: 'Ekipman Taleplerim',
        aciklama: 'Talebiniz veya ticketınız hakkında stok yöneticisiyle yazışırsınız.',
        adimlar: [
          'Ekipman Taleplerim veya Ticketlarım sekmesinde ilgili satırdaki "Mesajlar" butonuna tıklayın.',
          'Gelen mesajları okuyun; okunmamış mesaj sayısı butonda gösterilir.',
          'Yanıtınızı yazıp gönderin.',
        ],
        sonuc: 'Mesaj stok yöneticisinin ilgili talep veya ticket kaydına düşer.',
      },
      {
        baslik: 'Ticketlarımı izleme ve iptal etme',
        kim: 'Çalışan',
        sekme: 'Ticketlarım',
        aciklama: 'Açtığınız arıza kayıtlarının durumunu takip eder, gerekirse geri çekersiniz.',
        adimlar: [
          '"Ticketlarım" sekmesini açın.',
          '"Durum" ve "Onay Adımı" sütunlarına bakın (ör. İşleniyor, Onaylandı, Reddedildi).',
          'Ayrıntı için Detayları Görüntüle butonuna tıklayın; gerekirse yorum ekleyin.',
          'Sorun kendiliğinden çözüldüyse iptal seçeneğiyle ticketı geri çekin.',
        ],
        sonuc: 'İptal edilen ticket stok biriminin listesinden çıkar.',
        notlar: ['İşleme alınmış ticketlar iptal edilemeyebilir.'],
      },
      {
        baslik: 'Teslim ve iade kayıtlarını görüntüleme',
        kim: 'Çalışan',
        sekme: 'Teslim/İade',
        aciklama: 'Size teslim edilmeyi bekleyen ve sizden geri alınan ürünleri görürsünüz.',
        adimlar: [
          '"Teslim/İade" sekmesini açın (bekleyen işlem varsa sekme adının yanında sayı görünür).',
          'Durum, Atanma Tarihi, İade Tarihi ve Açıklama sütunlarını inceleyin.',
          '"Teslim Bekliyor" durumundaki ürün için yöneticinizle veya stok yöneticisiyle teslim zamanını kararlaştırın.',
        ],
        sonuc: '"Teslim Bekliyor" satırlarında teslim onayı verebilirsiniz; diğer kayıtlar yalnız görüntülenir.',
      },
      {
        baslik: 'Ürünü teslim aldığını onaylama',
        kim: 'Çalışan',
        sekme: 'Teslim/İade',
        aciklama: 'Size atanan ürünü fiziksel olarak teslim aldığınızda kaydı onaylarsınız.',
        adimlar: [
          '"Teslim/İade" sekmesinde "Teslim Bekliyor" durumundaki satırı bulun.',
          'Teslim aldım/onay butonuna tıklayın.',
          'Ürünün teslim anındaki kondisyonunu seçip onaylayın.',
        ],
        alanlar: [{ ad: 'Kondisyon', aciklama: 'Ürünü hangi durumda teslim aldığınız.', zorunlu: false }],
        sonuc: 'Ürün "Zimmetler" listenize geçer; Bekleyen Teslim/İade sayısı azalır.',
        notlar: [YETKI],
      },
      {
        baslik: 'Zimmet listesini dışa aktarma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Zimmetlerinizi, taleplerinizi veya ticketlarınızı dosya olarak alırsınız.',
        adimlar: [
          'Dışa aktarmak istediğiniz sekmeyi açın.',
          'Sağ üstteki "Dışa Aktar" butonuna tıklayın.',
          'Dosya biçimini, durumları ve tarih aralığını seçin; isterseniz teslim/iade kayıtlarını da ekleyin.',
          'İndirin.',
        ],
        alanlar: [
          { ad: 'Dosya Biçimi', aciklama: 'Excel veya PDF gibi.', zorunlu: true },
          { ad: 'Durumlar', aciklama: 'Dosyaya alınacak kayıt durumları.', zorunlu: false },
          { ad: 'Başlangıç / Bitiş Tarihi', aciklama: 'Tarih aralığı.', zorunlu: false },
          { ad: 'Teslim/İade dahil', aciklama: 'Teslim ve iade kayıtlarının da eklenmesi.', zorunlu: false },
        ],
        sonuc: 'Seçimlerinize uyan kayıtlar dosya olarak bilgisayarınıza iner.',
      },
    ],

    sss: [
      {
        soru: 'Talebim hangi aşamada, kimde bekliyor?',
        cevap:
          'Ekipman Taleplerim sekmesindeki "Onay Adımı" sütununa bakın. "Ekipman Onayı" yöneticinizde, "Stok Talebi" stok biriminde beklediğini gösterir. Ayrıntı için talebin detayını açın.',
      },
      {
        soru: 'Arızalı ürünümü teslim etmem gerekir mi?',
        cevap:
          'Stok yöneticisi ticketı inceledikten sonra ürünü tamire alabilir. Bu durumda ürün sizden geri alınır ve Teslim/İade sekmesinde "İade Edildi" kaydı oluşur; yerine yeni ürün verilebilir.',
      },
      {
        soru: 'Havuzdan talep ettiğim araç hangi tarihlerde müsait?',
        cevap: '"Havuzdan Talep Et" penceresindeki takvim ürünlerin müsait ve dolu olduğu günleri gösterir; çakışmayan tarih seçin.',
      },
    ],

    ipuclari: [
      'Ticket açarken sorunu ne zaman ve nasıl yaşadığınızı yazın; çözüm süresi kısalır.',
      'Üstteki kartlar bekleyen talep, ticket ve teslim sayılarını tek bakışta gösterir.',
      'Sayfa başlığının yanındaki bilgi (i) simgesi sayfanın kısa açıklamasını gösterir.',
    ],
  },
]
