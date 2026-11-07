// Doküman modülü: Yönetim › Doküman Yönetimi ve Kişisel › Dokümanlarım
const YETKI = 'Bu işlem yetkinize bağlı olarak görünür.'

export default [
  {
    id: 'dokuman-yonetimi',
    grup: 'yonetim',
    sira: 20,
    baslik: 'Doküman Yönetimi',
    menu: 'Yönetim › Doküman Yönetimi',
    href: '/documents-management',
    kim: 'parla',
    ozet:
      'Yöneticilerin ve İK’nın ekibindeki çalışanlardan belge istediği, çalışanların belge taleplerini onaylayıp reddettiği, çalışanlara belge gönderdiği ve şirket genelindeki dosyaları yönettiği sayfadır. Ekibin özlük dosyalarındaki eksikleri de buradan takip edersiniz.',

    ekranlar: [
      {
        sekme: null,
        aciklama:
          'Sayfa açıldığında Talepler sekmesi görünür. Üstte Toplu İşlem, Doküman Gönder, Talep Oluştur ve Dışa Aktar butonları; altında Toplam Çalışan Talepleri, Bekleyen Çalışan Talepleri, Onaylanan Çalışan Talepleri, Toplam Yönetim Talepleri, Yönetim Tarafından Gönderilen ve Çalışan Tarafından Gönderilen sayı kartları yer alır.',
      },
      {
        sekme: 'Talepler > Yönetim Doküman Talepleri',
        aciklama:
          'Yönetimin çalışanlardan istediği belgeler (ör. Diploma, Askerlik Belgesi, Sağlık Raporu). Sütunlar: Çalışan Alanı, Çalışan, Talep Tarihi, Durum, Mevcut Onaylayan, Açıklama, İşlemler.',
      },
      {
        sekme: 'Talepler > Çalışan Doküman Talepleri',
        aciklama:
          'Çalışanların yönetimden istediği belgeler (ör. Görev belgesi, Vize yazısı, Ücret bordrosu). Sütunlar: Doküman Adı, Kategori, Çalışan, Talep Tarihi, Durum, Talep Edilenler, Mevcut Onaylayan, Açıklama, İşlemler.',
      },
      {
        sekme: 'Talepler > Yönetim Tarafından Gönderilen',
        aciklama:
          'Yönetimin çalışanlara gönderdiği belgeler (ör. Uzaktan Çalışma Politikası 2026). Sütunlar: Doküman Adı, Çalışan, Oluşturulma Tarihi, Durum, Açıklama, İşlemler.',
      },
      {
        sekme: 'Talepler > Çalışan Tarafından Gönderilen',
        aciklama:
          'Çalışanların kendiliğinden yönetime ilettiği belgeler (ör. Güncel Nüfus Kayıt Örneği). Sütunlar: Doküman Adı, Çalışan, Oluşturulma Tarihi, Durum, Gönderilen Kişiler, Mevcut Onaylayan, Açıklama, İşlemler.',
      },
      {
        sekme: 'Ekip Dosyaları',
        aciklama:
          'Ekibinizdeki her çalışanın dosya durumunu özetler. Sütunlar: Çalışan, Birim, Pozisyon, Alan Dosyaları, Eksik Dosyalar, Diğer Doküman, Talep Sayısı, İşlemler. Üstte Toplu İşlemler butonu, arama kutusu ve “Birime göre filtrele” seçimi bulunur.',
      },
      {
        sekme: 'Şirket Dosyaları',
        aciklama:
          'Şirket veya birim geneline açık dosyalar (ör. Personel El Kitabı, İş Sağlığı ve Güvenliği Politikası). Sütunlar: Doküman Adı, Birim, Yükleyen, Yüklenme Tarihi, İşlemler. Üstte arama kutusu, “Birime göre filtrele” ve Yeni Dosya butonu vardır.',
      },
    ],

    bolumler: [
      {
        baslik: 'Dört talep türü',
        metin: 'Talepler sekmesindeki dört alt sekme, belgenin kimden kime gittiğine göre ayrılır:',
        maddeler: [
          'Yönetim Doküman Talepleri: Yönetim çalışandan belge ister, çalışan yükler, yönetim kontrol eder.',
          'Çalışan Doküman Talepleri: Çalışan yönetimden belge ister (ör. Çalışma belgesi), yönetim belgeyi hazırlayıp yükler.',
          'Yönetim Tarafından Gönderilen: Yönetim çalışana belge gönderir (ör. zimmet tutanağı, politika), çalışan okuyup onaylar.',
          'Çalışan Tarafından Gönderilen: Çalışan kendiliğinden yönetime belge iletir (ör. eğitim katılım belgesi), yönetim onaylar.',
        ],
      },
      {
        baslik: 'Durumlar',
        metin: 'Listelerde görülen durumlar:',
        maddeler: [
          'Çalışan Beklemesinde: Belge istendi, çalışanın yüklemesi bekleniyor.',
          'Yönetim Beklemesinde: Çalışan belgeyi yükledi, yönetimin kontrolü bekleniyor.',
          'Yönetim Tarafından Bekleniyor: Çalışanın istediği belgeyi yönetimin hazırlaması bekleniyor.',
          'Onaylandı / Reddedildi: Talep sonuçlandı.',
          'Yönetim Tarafından Gönderilen / Gönderiliyor: Yönetimin gönderdiği belge çalışanın onayını bekliyor.',
          'Çalışan Tarafından Gönderiliyor: Çalışanın gönderdiği belge yönetimin onayını bekliyor.',
          'Çalışan Tarafından Onaylandı / Yönetim Tarafından Onaylandı: Belge karşı tarafça onaylandı.',
        ],
      },
      {
        baslik: 'Belge kategorileri',
        metin:
          'Çalışanların talep ettiği belgeler kategoriyle gelir; örneğin “Çalışma ve Görev Belgeleri › Görev belgesi”, “Vize Belgeleri › Vize yazısı”, “Ücret ve Gelir Belgeleri › Ücret bordrosu” veya “Diğer”.',
      },
    ],

    islemler: [
      {
        baslik: 'Talep özetini ve listeleri görüntüleme',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Sayı kartlarından genel durumu görür, alt sekmelerden ilgili talep listesini açarsınız.',
        adimlar: [
          'Yönetim › Doküman Yönetimi sayfasını açın.',
          'Üstteki kartlarda toplam, bekleyen ve onaylanan talep sayılarını inceleyin.',
          'Listelemek istediğiniz talep türünün alt sekmesine tıklayın (sekme yanındaki kırmızı rakam bekleyen kayıt sayısıdır).',
          'Sütun başlıklarındaki oklarla sıralayın, Durum sütunundaki süzgeç simgesiyle duruma göre filtreleyin.',
        ],
        sonuc: 'Seçtiğiniz talep türüne ait kayıtlar sayfalı liste olarak gösterilir.',
      },
      {
        baslik: 'Çalışandan belge isteme (Talep Oluştur)',
        kim: 'Yönetici',
        sekme: 'Talepler > Yönetim Doküman Talepleri',
        aciklama: 'Bir çalışandan özlük dosyası için belge (ör. Diploma, Sağlık Raporu) yüklemesini istersiniz.',
        adimlar: [
          'Talepler sekmesinde sağ üstteki Talep Oluştur butonuna tıklayın.',
          'Belge istenecek çalışanı seçin.',
          'İstenen belgeyi (çalışan alanını) seçin.',
          'Çalışana iletilecek açıklamayı yazın; gerekirse örnek dosya ekleyin.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Çalışan', aciklama: 'Belge istenecek kişi.', zorunlu: true },
          { ad: 'Çalışan Alanı', aciklama: 'İstenen belge türü (ör. Askerlik Belgesi, İkametgah Belgesi).', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Ör. “Periyodik sağlık muayenesi kapsamında işe uygunluk raporunuzu yüklemeniz gerekmektedir.”', zorunlu: false },
          { ad: 'Dosya', aciklama: 'İsteğe bağlı ek dosya.', zorunlu: false },
        ],
        sonuc: 'Talep çalışanın Dokümanlarım sayfasına “Çalışan Beklemesinde” durumuyla düşer.',
        notlar: ['Aynı çalışan için aynı belgede bekleyen bir talep varsa sistem sizi uyarır; mükerrer talep oluşmaz.'],
      },
      {
        baslik: 'Çalışanın yüklediği belgeyi onaylama veya reddetme',
        kim: 'Yönetici',
        sekme: 'Talepler > Yönetim Doküman Talepleri',
        aciklama: 'Çalışanın istenen belge için yüklediği dosyayı kontrol edip sonuçlandırırsınız.',
        adimlar: [
          'Durumu “Yönetim Beklemesinde” olan satırı bulun.',
          'İncele butonuyla yüklenen belgeyi açıp kontrol edin.',
          'Uygunsa Onayla, uygun değilse Reddet butonuna tıklayın.',
          'Reddederken çalışana nedeni açıklama olarak yazın (ör. “Yüklenen belge 6 aydan eski tarihli; lütfen yeni tarihli belgeyi yükleyiniz.”).',
        ],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Çalışana gösterilecek not; retlerde nedeni yazın.', zorunlu: false }],
        sonuc:
          'Onaylanan belge çalışanın özlük dosyasına işlenir ve durum “Onaylandı” olur. Reddedilen talep “Reddedildi” durumuna geçer; çalışan belgeyi yeniden yükleyebilir. Birden fazla onaylayan tanımlıysa talep sıradaki onaylayana (Mevcut Onaylayan) geçer.',
      },
      {
        baslik: 'Bekleyen belge talepleri için hatırlatma gönderme',
        kim: 'Yönetici',
        sekme: 'Talepler > Yönetim Doküman Talepleri',
        aciklama: 'Belgesini henüz yüklemeyen çalışanlara hatırlatma iletirsiniz.',
        adimlar: [
          '“Çalışan Beklemesinde” durumundaki talepleri seçin.',
          'Hatırlatma işlemini başlatın (Toplu İşlem menüsü veya satır işlemleri üzerinden).',
          'Onaylayın.',
        ],
        sonuc: 'Seçilen çalışanlara belge yüklemeleri için bildirim gider; talep durumu değişmez.',
        notlar: [YETKI],
      },
      {
        baslik: 'Yönetim belge talebini silme',
        kim: 'Yönetici',
        sekme: 'Talepler > Yönetim Doküman Talepleri',
        aciklama: 'Yanlış veya artık gerekmeyen belge talebini kaldırırsınız.',
        adimlar: ['Talebin satırını bulun.', 'Satırdaki silme butonuna tıklayın.', 'Onay penceresinde silmeyi onaylayın.'],
        sonuc: 'Talep listeden ve çalışanın Dokümanlarım sayfasından kaldırılır.',
        notlar: [YETKI],
      },
      {
        baslik: 'Çalışanın istediği belgeyi hazırlayıp onaylama',
        kim: 'Yönetici',
        sekme: 'Talepler > Çalışan Doküman Talepleri',
        aciklama: 'Çalışanın talep ettiği belgeyi (ör. Çalışma belgesi, Maaş yazısı) yükleyerek talebi onaylarsınız.',
        adimlar: [
          'Durumu “Yönetim Tarafından Bekleniyor” olan satırı bulun.',
          'Detaylar (göz) butonuyla talebin açıklamasını okuyun.',
          'Satırdaki yükleme butonuna (Onayla) tıklayın.',
          'Hazırladığınız belge dosyasını ekleyin ve çalışana not yazın.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Dosya', aciklama: 'Çalışana iletilecek hazır belge.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Ör. “Çalışma belgeniz ıslak imzalı olarak hazırlanmış ve sisteme yüklenmiştir.”', zorunlu: false },
        ],
        sonuc: 'Talep “Onaylandı” olur; belge çalışanın Dokümanlarım › Çalışan Doküman Talepleri sekmesinden indirilebilir.',
      },
      {
        baslik: 'Belgeyi şablondan oluşturma',
        kim: 'Yönetici',
        sekme: 'Talepler > Çalışan Doküman Talepleri',
        aciklama: 'Biriminiz için tanımlı hazır şablonlardan (ör. çalışma belgesi şablonu) birini seçerek belgeyi hızlıca hazırlarsınız.',
        adimlar: [
          'Belge yükleme penceresinde şablon seçeneğini açın.',
          'Birime tanımlı şablonlardan uygun olanı seçin.',
          'Oluşan belgeyi kontrol edip talebe ekleyin.',
        ],
        sonuc: 'Şablondan üretilen belge talebe eklenir ve çalışana iletilir.',
        notlar: [YETKI, 'Şablonlar birim bazında tanımlanır; şablon ekleme, düzenleme ve silme yetkili kullanıcılar tarafından yapılır.'],
      },
      {
        baslik: 'Çalışanın belge talebini reddetme',
        kim: 'Yönetici',
        sekme: 'Talepler > Çalışan Doküman Talepleri',
        aciklama: 'Kurumca düzenlenmeyen veya uygun olmayan belge taleplerini gerekçesiyle reddedersiniz.',
        adimlar: [
          '“Yönetim Tarafından Bekleniyor” durumundaki satırda Reddet (kırmızı çarpı) butonuna tıklayın.',
          'Ret nedenini yazın (ör. “SGK hizmet dökümü e-Devlet üzerinden barkodlu olarak alınabildiğinden kurum tarafından ayrıca düzenlenmemektedir.”).',
          'Varsa ret seçeneğini belirleyin ve onaylayın.',
        ],
        alanlar: [{ ad: 'Açıklama', aciklama: 'Çalışana gösterilecek ret nedeni.', zorunlu: true }],
        sonuc: 'Talep “Reddedildi” olur; çalışan nedeni Dokümanlarım sayfasında görür.',
      },
      {
        baslik: 'Çalışana belge gönderme (Doküman Gönder)',
        kim: 'Yönetici',
        sekme: 'Talepler > Yönetim Tarafından Gönderilen',
        aciklama: 'Çalışana okuması ve onaylaması için belge (ör. zimmet tutanağı, gizlilik sözleşmesi) gönderirsiniz.',
        adimlar: [
          'Talepler sekmesinde Doküman Gönder butonuna tıklayın.',
          'Belgenin gideceği çalışanı seçin.',
          'Doküman adını ve açıklamayı yazın.',
          'Dosyayı ekleyin ve gönderin.',
        ],
        alanlar: [
          { ad: 'Doküman Adı', aciklama: 'Ör. “Gizlilik Sözleşmesi – Kamu ERP Projesi”.', zorunlu: true },
          { ad: 'Çalışan', aciklama: 'Belgeyi alacak kişi.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Ör. “Proje kapsamında imzalanması gereken gizlilik sözleşmesi ektedir; inceleyip onaylamanı rica ederim.”', zorunlu: false },
          { ad: 'Dosya', aciklama: 'Gönderilecek belge.', zorunlu: true },
        ],
        sonuc: 'Belge çalışanın Dokümanlarım › Yönetim Tarafından Gönderilen sekmesine düşer; çalışan onaylayınca durum “Çalışan Tarafından Onaylandı” olur.',
      },
      {
        baslik: 'Çalışanın gönderdiği belgeyi onaylama veya reddetme',
        kim: 'Yönetici',
        sekme: 'Talepler > Çalışan Tarafından Gönderilen',
        aciklama: 'Çalışanın kendiliğinden ilettiği belgeyi (ör. Güncel Nüfus Kayıt Örneği) kontrol edip sonuçlandırırsınız.',
        adimlar: [
          'Durumu “Çalışan Tarafından Gönderiliyor” olan satırı bulun.',
          'İncele butonuyla belgeyi açın.',
          'Onayla veya Reddet butonuna tıklayın, gerekirse açıklama yazın.',
        ],
        sonuc:
          'Onaylanan belge “Yönetim Tarafından Onaylandı” olur ve özlük dosyasına eklenir. Birden fazla kişiye gönderildiyse talep Mevcut Onaylayan sütunundaki kişiden sıradakine geçer.',
      },
      {
        baslik: 'Belgeyi inceleme ve indirme',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Herhangi bir talepteki dosyayı görüntüler veya bilgisayarınıza indirirsiniz.',
        adimlar: ['İlgili satırı bulun.', 'İncele (turuncu belge simgesi) butonuna tıklayın.', 'Açılan önizlemede belgeyi görüntüleyin ya da indirin.'],
        sonuc: 'Belge açılır veya indirilir.',
      },
      {
        baslik: 'Talep detaylarını görüntüleme',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Talebin açıklamalarını, onay geçmişini ve ekli dosyalarını tek pencerede görürsünüz.',
        adimlar: ['İlgili satırdaki Detaylar (göz) butonuna tıklayın.', 'Açılan pencerede bilgileri inceleyin.'],
        sonuc: 'Talebin tüm ayrıntıları gösterilir.',
      },
      {
        baslik: 'Toplu İşlem',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Birden fazla talebi tek seferde işlemek (ör. çok sayıda çalışandan aynı belgeyi istemek, hatırlatma göndermek) için kullanılır.',
        adimlar: [
          'Talepler sekmesinde Toplu İşlem butonuna tıklayın.',
          'Yapmak istediğiniz işlemi seçin.',
          'Çalışanları ve gerekli bilgileri belirleyin.',
          'Onaylayın.',
        ],
        sonuc: 'Seçilen işlem tüm kayıtlara birlikte uygulanır.',
        notlar: [YETKI],
      },
      {
        baslik: 'Talep listelerini dışa aktarma',
        kim: 'Yönetici',
        sekme: 'Talepler',
        aciklama: 'Dört talep listesinden herhangi birini dosya olarak indirirsiniz.',
        adimlar: [
          'Talepler sekmesinde Dışa Aktar butonuna tıklayın.',
          'Liste türünü, dosya biçimini, tarih aralığını, durumları ve gerekirse çalışanları seçin.',
          'Dışa aktarmayı başlatın.',
        ],
        alanlar: [
          { ad: 'Biçim', aciklama: 'İndirilecek dosya türü.', zorunlu: true },
          { ad: 'Başlangıç / Bitiş Tarihi', aciklama: 'Hangi dönemdeki taleplerin alınacağı.', zorunlu: false },
          { ad: 'Durumlar', aciklama: 'Yalnız belirli durumdaki talepleri almak için.', zorunlu: false },
          { ad: 'Çalışanlar', aciklama: 'Yalnız seçilen kişilerin taleplerini almak için.', zorunlu: false },
        ],
        sonuc: 'Liste seçilen biçimde indirilir.',
      },
      {
        baslik: 'Ekip dosyalarını görüntüleme ve filtreleme',
        kim: 'Yönetici',
        sekme: 'Ekip Dosyaları',
        aciklama: 'Ekibinizde kimin hangi belgesinin eksik olduğunu bir bakışta görürsünüz.',
        adimlar: [
          'Ekip Dosyaları sekmesini açın.',
          'Arama kutusuna çalışan adı veya numarası yazın ya da “Birime göre filtrele” ile birim seçin.',
          'Alan Dosyaları, Eksik Dosyalar, Diğer Doküman ve Talep Sayısı sütunlarını inceleyin.',
        ],
        sonuc: 'Filtreye uyan çalışanlar listelenir; altta “Toplam N çalışan” bilgisi görünür.',
      },
      {
        baslik: 'Çalışanın dosyalarını inceleme',
        kim: 'Yönetici',
        sekme: 'Ekip Dosyaları',
        aciklama: 'Bir çalışanın özlük belgelerini, diğer dokümanlarını ve tüm taleplerini ayrıntılı görürsünüz.',
        adimlar: [
          'Çalışanın satırındaki göz butonuna tıklayın.',
          'Açılan görünümde alan dosyalarını, eksik belgeleri ve talep geçmişini inceleyin.',
          'Belgeleri açıp indirebilir, eksik belge için yeni talep oluşturabilirsiniz.',
          'Gerekirse çalışanın taleplerini dışa aktarın.',
        ],
        sonuc: 'Çalışanın tüm belge durumu tek ekranda gösterilir.',
      },
      {
        baslik: 'Ekip dosyalarında toplu işlemler',
        kim: 'Yönetici',
        sekme: 'Ekip Dosyaları',
        aciklama: 'Birden çok çalışan için eksik belge talebi oluşturma, dosya durum raporu alma ve dosyaları toplu indirme işlemleri.',
        adimlar: [
          'Ekip Dosyaları sekmesinde Toplu İşlemler butonuna tıklayın.',
          'İşlem türünü seçin: eksik belgeler için talep oluşturma, dosya durum analizi veya toplu indirme.',
          'Çalışanları, belge alanlarını ve gerekirse “yalnız eksikler” seçeneğini belirleyin.',
          'Dosya biçimini seçip işlemi başlatın.',
        ],
        sonuc: 'Talepler seçilen çalışanlara gönderilir ya da hazırlanan rapor/dosya paketi indirilir.',
        notlar: ['Büyük ekiplerde dosya hazırlığı biraz sürebilir; işlem arka planda tamamlanır.', YETKI],
      },
      {
        baslik: 'Şirket dosyası yükleme (Yeni Dosya)',
        kim: 'Yönetici',
        sekme: 'Şirket Dosyaları',
        aciklama: 'Yönetmelik, politika, el kitabı gibi belgeleri bir birime açık şekilde paylaşırsınız.',
        adimlar: [
          'Şirket Dosyaları sekmesinde Yeni Dosya butonuna tıklayın.',
          'Doküman adını yazın ve birimi seçin.',
          'Dosyayı ekleyin.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Doküman Adı', aciklama: 'Ör. “Uzaktan Çalışma Yönetmeliği”.', zorunlu: true },
          { ad: 'Birim', aciklama: 'Dosyayı görecek birim.', zorunlu: true },
          { ad: 'Dosya', aciklama: 'Yüklenecek belge.', zorunlu: true },
        ],
        sonuc: 'Dosya listeye eklenir; Yükleyen ve Yüklenme Tarihi otomatik dolar. Seçilen birimin çalışanları dosyaya erişebilir.',
      },
      {
        baslik: 'Şirket dosyasını görüntüleme, düzenleme ve silme',
        kim: 'Yönetici',
        sekme: 'Şirket Dosyaları',
        aciklama: 'Yüklü şirket dosyalarını açar, adını veya birimini değiştirir ya da kaldırırsınız.',
        adimlar: [
          'Arama kutusu veya “Birime göre filtrele” ile dosyayı bulun.',
          'Görüntülemek için turuncu belge simgesine tıklayın.',
          'Ad veya birimi değiştirmek için mavi kalem butonuna tıklayıp kaydedin.',
          'Kaldırmak için kırmızı çöp kutusu butonuna tıklayıp onaylayın.',
        ],
        sonuc: 'Dosya açılır, güncellenir ya da listeden kaldırılır.',
      },
      {
        baslik: 'Belge bildirimleri için ek alıcı tanımlama',
        kim: 'İK',
        sekme: null,
        aciklama: 'Bir birimin belge talepleri ve gönderimlerinde varsayılan onaylayanlara ek olarak bilgilendirilecek pozisyonları belirlersiniz.',
        adimlar: [
          'Ayarlar › Organizasyon Şeması’nda birimi açıp Detayları Görüntüle’ye tıklayın ve Ek Kişiler sekmesini açın (ayrıntı: Organizasyon Birim Yönetimi – Genel Ayarlar sayfası).',
          'Liste türünü seçin (yönetim talepleri, çalışan talepleri veya gönderilen belgeler).',
          'Eklenecek pozisyonları seçin, gereksizleri kaldırın.',
          'İsterseniz bir listedeki alıcıları diğer listelere kopyalayın.',
          'Kaydedin.',
        ],
        sonuc: 'Seçilen pozisyonlar ilgili belge işlemlerinde alıcı olarak görünür.',
        notlar: [YETKI],
      },
      {
        baslik: 'Belge onay akışını düzenleme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Bir birimin veya pozisyonun belge taleplerini hangi pozisyonun onaylayacağını belirlersiniz.',
        adimlar: [
          'Ayarlar › Organizasyon Şeması’nda birimi açıp Detayları Görüntüle’ye tıklayın ve Doküman Yönetimi › İş Akışı sekmesini açın (ayrıntı: Organizasyon Birim Yönetimi – Modül Ayarları sayfası).',
          'Birim akışı için “Doküman Onay İş Akışı” kartında Pozisyon Ekle’yi, pozisyona özel akış için alttaki “Pozisyon Özel Doküman Onay İş Akışları” tablosunu kullanın.',
          'Onaylayacak pozisyonu ekleyin; gerekirse adımları düzenleyin ya da silin.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Birim / Pozisyon', aciklama: 'Akışın uygulanacağı birim ya da pozisyon.', zorunlu: true },
          { ad: 'Onaylayan Pozisyon', aciklama: 'Talebi onaylayacak pozisyon.', zorunlu: true },
        ],
        sonuc: 'Yeni talepler bu sıraya göre onaylayanlara düşer; Mevcut Onaylayan sütunu bu akışa göre dolar.',
        notlar: [YETKI, 'Hiçbir seviyede doküman onay akışı tanımlı değilse dokümanlar ek onay adımı olmadan otomatik onaylanır.'],
      },
    ],

    sss: [
      {
        soru: 'Mevcut Onaylayan sütununda “-” görünüyor, neden?',
        cevap: 'Talep ya çalışanın işlem yapmasını bekliyordur ya da sonuçlanmıştır; o anda onay bekleyen bir yönetici yoktur.',
      },
      {
        soru: 'Eksik Dosyalar sütunu neyi gösterir?',
        cevap: 'Çalışanın özlük dosyasında tanımlı olup henüz yüklenmemiş belgeleri gösterir. “Yok” yazıyorsa eksik belge bulunmaz.',
      },
      {
        soru: 'Reddettiğim belgeyi çalışan yeniden gönderebilir mi?',
        cevap: 'Evet. Çalışan Dokümanlarım sayfasında “Dokümanı Yeniden Yükle” ile yeni dosyayı iletir; talep tekrar onayınıza düşer.',
      },
    ],
    ipuclari: [
      'Sekme adlarının yanındaki kırmızı rakamlar sizden işlem bekleyen kayıt sayısını gösterir; önce bunlara bakın.',
      'Ret açıklamalarını çalışanın ne yapması gerektiğini anlayacağı şekilde yazın.',
      'Eksik belgeleri tek tek istemek yerine Ekip Dosyaları › Toplu İşlemler ile toplu talep oluşturun.',
    ],
  },

  {
    id: 'dokumanlarim',
    grup: 'kisisel',
    sira: 20,
    baslik: 'Dokümanlarım',
    menu: 'Kişisel › Dokümanlarım',
    href: '/my-documents',
    kim: 'ali',
    ozet:
      'Yönetimin sizden istediği belgeleri yüklediğiniz, ihtiyaç duyduğunuz belgeleri (çalışma belgesi, maaş yazısı vb.) talep ettiğiniz, size gönderilen belgeleri görüntüleyip onayladığınız ve yönetime belge ilettiğiniz kişisel sayfadır.',

    ekranlar: [
      {
        sekme: null,
        aciklama:
          'Sayfa açıldığında üstte Doküman Gönder, Yeni Talep ve Dışa Aktar butonları; altında Toplam Çalışan Talepleri, Bekleyen Çalışan Talepleri, Onaylanan Çalışan Talepleri, Yönetim Talepleri, Yönetim Tarafından Gönderilen ve Çalışan Tarafından Gönderilen sayı kartları görünür.',
      },
      {
        sekme: 'Yönetim Doküman Talepleri',
        aciklama:
          'Yönetimin sizden istediği belgeler. Sütunlar: Çalışan Alanı, Onaylayan, Talep Tarihi, Durum, Açıklama, İşlemler.',
      },
      {
        sekme: 'Çalışan Doküman Talepleri',
        aciklama:
          'Sizin yönetimden istediğiniz belgeler. Sütunlar: Doküman Adı, Kategori, Talep Edilenler, Talep Tarihi, Durum, Açıklama, İşlemler.',
      },
      {
        sekme: 'Yönetim Tarafından Gönderilen',
        aciklama:
          'Yönetimin size gönderdiği belgeler (ör. Zimmet Tutanağı, İSG Temel Eğitim Sertifikası). Sütunlar: Doküman Adı, Çalışan, Oluşturulma Tarihi, Durum, Açıklama, İşlemler.',
      },
      {
        sekme: 'Çalışan Tarafından Gönderilen',
        aciklama:
          'Sizin yönetime ilettiğiniz belgeler. Sütunlar: Doküman Adı, Gönderilen Kişiler, Oluşturulma Tarihi, Durum, Açıklama, İşlemler.',
      },
    ],

    bolumler: [
      {
        baslik: 'Durumlar',
        metin: 'Listelerde görülen durumlar:',
        maddeler: [
          'Çalışan Beklemesinde: Belgeyi sizin yüklemeniz bekleniyor.',
          'Yönetim Beklemesinde: Yüklediğiniz belge yöneticinizin kontrolünde.',
          'Yönetim Tarafından Bekleniyor: İstediğiniz belge yönetim tarafından hazırlanıyor.',
          'Onaylandı / Reddedildi: Talep sonuçlandı; ret nedeni Açıklama sütunundadır.',
          'Yönetim Tarafından Gönderiliyor: Size gönderilen belge onayınızı bekliyor.',
          'Çalışan Tarafından Gönderiliyor: İlettiğiniz belge yönetimin onayını bekliyor.',
          'Çalışan Tarafından Onaylandı: Size gönderilen belgeyi onayladınız.',
        ],
      },
      {
        baslik: 'İşe giriş belgeleri',
        metin: 'İşe giriş sürecinde formdan yüklediğiniz ve İK’nın onayladığı belgeler Dokümanlarım’da da yer alır; süreç bittikten sonra burada kalır.',
        maddeler: [],
      },
    ],

    islemler: [
      {
        baslik: 'Belge özetini ve listeleri görüntüleme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Kartlardan genel durumu görür, sekmelerden ilgili belge listesini açarsınız.',
        adimlar: [
          'Kişisel › Dokümanlarım sayfasını açın.',
          'Kartlarda bekleyen ve onaylanan talep sayılarını inceleyin.',
          'İlgili sekmeye tıklayın (sekme yanındaki kırmızı rakam sizden işlem bekleyen kayıt sayısıdır).',
          'Sütun başlıklarındaki oklarla sıralayın, Durum süzgeciyle filtreleyin.',
        ],
        sonuc: 'Seçtiğiniz türdeki belgeler listelenir.',
      },
      {
        baslik: 'İstenen belgeyi yükleme (Doküman Yükle)',
        kim: 'Çalışan',
        sekme: 'Yönetim Doküman Talepleri',
        aciklama: 'Yönetimin sizden istediği belgeyi (ör. Askerlik Belgesi, Sağlık Raporu) yüklersiniz.',
        adimlar: [
          'Durumu “Çalışan Beklemesinde” olan satırı bulun ve Açıklama’da ne istendiğini okuyun.',
          'Satırdaki Doküman Yükle (yükleme simgesi) butonuna tıklayın.',
          'Belge dosyasını seçin, isterseniz not ekleyin.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Dosya', aciklama: 'İstenen belgenin okunaklı kopyası.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Yöneticinize iletmek istediğiniz not.', zorunlu: false },
        ],
        sonuc: 'Durum “Yönetim Beklemesinde” olur; belge Onaylayan sütunundaki yöneticinin onayına düşer.',
      },
      {
        baslik: 'Reddedilen belgeyi yeniden yükleme',
        kim: 'Çalışan',
        sekme: 'Yönetim Doküman Talepleri',
        aciklama: 'Reddedilen belgenin düzeltilmiş halini tekrar gönderirsiniz.',
        adimlar: [
          'Durumu “Reddedildi” olan satırda Açıklama’daki ret nedenini okuyun.',
          'Dokümanı Yeniden Yükle butonuna tıklayın.',
          'Yeni dosyayı seçip kaydedin.',
        ],
        sonuc: 'Talep yeniden “Yönetim Beklemesinde” durumuna geçer ve yöneticinizin onayına düşer.',
      },
      {
        baslik: 'Belge talep etme (Yeni Talep)',
        kim: 'Çalışan',
        sekme: 'Çalışan Doküman Talepleri',
        aciklama: 'Yönetimden çalışma belgesi, maaş yazısı, vize yazısı gibi bir belge istersiniz.',
        adimlar: [
          'Sağ üstteki Yeni Talep butonuna tıklayın.',
          'Belge kategorisini ve doküman adını seçin (ör. “Ücret ve Gelir Belgeleri › Maaş yazısı”).',
          'Talebin iletileceği kişileri (Talep Edilenler) seçin.',
          'Belgeyi ne için istediğinizi açıklamaya yazın.',
          'Gönderin.',
        ],
        alanlar: [
          { ad: 'Doküman Adı / Kategori', aciklama: 'İstenen belge türü; listede yoksa “Diğer” seçilip ad yazılır.', zorunlu: true },
          { ad: 'Talep Edilenler', aciklama: 'Belgeyi hazırlayacak yönetici veya İK pozisyonları.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Ör. “Aralık ayındaki Almanya seyahatim için konsolosluğa sunulacak işveren yazısını talep ediyorum.”', zorunlu: false },
        ],
        sonuc: 'Talep “Yönetim Tarafından Bekleniyor” durumuyla seçtiğiniz kişilerin Doküman Yönetimi sayfasına düşer.',
      },
      {
        baslik: 'Belge talebini düzenleme veya geri çekme',
        kim: 'Çalışan',
        sekme: 'Çalışan Doküman Talepleri',
        aciklama: 'Henüz sonuçlanmamış belge talebinizi değiştirir ya da iptal edersiniz.',
        adimlar: [
          '“Yönetim Tarafından Bekleniyor” durumundaki talebi bulun.',
          'Düzenlemek için talebi açıp bilgileri güncelleyin ve kaydedin.',
          'Geri çekmek için satırdaki kırmızı çöp kutusu butonuna tıklayıp onaylayın.',
        ],
        sonuc: 'Talep güncellenir ya da iptal edilerek listeden kaldırılır.',
        notlar: ['Onaylanan veya reddedilen talepler değiştirilemez.'],
      },
      {
        baslik: 'Hazırlanan belgeyi görüntüleme ve indirme',
        kim: 'Çalışan',
        sekme: 'Çalışan Doküman Talepleri',
        aciklama: 'Onaylanan talebinize yüklenen belgeyi açar veya indirirsiniz.',
        adimlar: [
          'Durumu “Onaylandı” olan satırı bulun.',
          'İncele (turuncu belge simgesi) butonuna tıklayın.',
          'Belgeyi görüntüleyin veya indirin.',
        ],
        sonuc: 'Belge açılır veya bilgisayarınıza indirilir.',
      },
      {
        baslik: 'Gönderilen belgeyi görüntüleme ve onaylama',
        kim: 'Çalışan',
        sekme: 'Yönetim Tarafından Gönderilen',
        aciklama: 'Yönetimin size gönderdiği belgeyi (ör. Zimmet Tutanağı, Gizlilik ve Bilgi Güvenliği Sözleşmesi) okuyup onaylarsınız.',
        adimlar: [
          'Durumu “Yönetim Tarafından Gönderiliyor” olan satırı bulun.',
          'İncele butonuyla belgeyi açıp okuyun; isterseniz indirin.',
          'Onaylama işlemini yapın ve gerekirse not yazın (ör. “Belgeyi okudum, içeriğini onaylıyorum.”).',
        ],
        sonuc: 'Durum “Çalışan Tarafından Onaylandı” olur; yönetim onayınızı Doküman Yönetimi sayfasında görür.',
      },
      {
        baslik: 'Yönetime belge gönderme (Doküman Gönder)',
        kim: 'Çalışan',
        sekme: 'Çalışan Tarafından Gönderilen',
        aciklama: 'Kendiliğinden yönetime belge iletirsiniz (ör. eğitim katılım belgesi, güncel nüfus kayıt örneği).',
        adimlar: [
          'Sağ üstteki Doküman Gönder butonuna tıklayın.',
          'Doküman adını yazın.',
          'Belgenin gideceği kişileri seçin.',
          'Açıklama yazın ve dosyayı ekleyin.',
          'Gönderin.',
        ],
        alanlar: [
          { ad: 'Doküman Adı', aciklama: 'Ör. “Proje Yönetimi Sertifikası (PMP) Yenileme”.', zorunlu: true },
          { ad: 'Gönderilen Kişiler', aciklama: 'Belgeyi alacak yönetici veya İK pozisyonları.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Ör. “Medeni durum değişikliğim nedeniyle güncel nüfus kayıt örneğimi iletiyorum.”', zorunlu: false },
          { ad: 'Dosya', aciklama: 'Gönderilecek belge.', zorunlu: true },
        ],
        sonuc: 'Belge “Çalışan Tarafından Gönderiliyor” durumuyla seçtiğiniz kişilerin onayına düşer; onaylanınca özlük dosyanıza eklenir.',
      },
      {
        baslik: 'Talep detaylarını görüntüleme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Bir kaydın açıklamalarını, onay geçmişini ve ekli dosyalarını görürsünüz.',
        adimlar: ['İlgili satırdaki Detaylar (göz) butonuna tıklayın.', 'Açılan pencerede bilgileri inceleyin.'],
        sonuc: 'Kaydın tüm ayrıntıları gösterilir.',
      },
      {
        baslik: 'Belgelerimi dışa aktarma',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Sekmelerdeki kayıtlarınızı dosya olarak indirirsiniz.',
        adimlar: [
          'Sağ üstteki Dışa Aktar butonuna tıklayın.',
          'Liste türünü, dosya biçimini, tarih aralığını ve durumları seçin.',
          'Dışa aktarmayı başlatın.',
        ],
        alanlar: [
          { ad: 'Biçim', aciklama: 'İndirilecek dosya türü.', zorunlu: true },
          { ad: 'Başlangıç / Bitiş Tarihi', aciklama: 'Hangi dönemdeki kayıtların alınacağı.', zorunlu: false },
          { ad: 'Durumlar', aciklama: 'Yalnız belirli durumdaki kayıtları almak için.', zorunlu: false },
        ],
        sonuc: 'Liste seçilen biçimde indirilir.',
      },
      {
        baslik: 'Güvenli belgeleri görüntüleme',
        kim: 'Çalışan',
        sekme: null,
        aciklama: 'Size şifreli olarak iletilen resmi yazıları (güvenli belgeler) açar, belgenin şifresini görür ve teslim aldığınızı onaylarsınız.',
        adimlar: [
          'Size iletilen güvenli belgeler listesini açın.',
          'Belgeyi seçip PDF olarak görüntüleyin veya indirin.',
          'Belge şifreli ise şifre görüntüleme seçeneğiyle açma şifresini alın.',
          'Belgeyi okuduktan sonra teslim aldığınızı onaylayın.',
        ],
        sonuc: 'Belge teslim alındı olarak işaretlenir; gönderen taraf onayınızı görür.',
        notlar: [YETKI, 'Belge şifresini başkalarıyla paylaşmayın.'],
      },
    ],

    sss: [
      {
        soru: 'Yüklediğim belge neden reddedildi?',
        cevap: 'Ret nedeni satırdaki Açıklama sütununda yazar. Nedeni giderip “Dokümanı Yeniden Yükle” ile tekrar gönderebilirsiniz.',
      },
      {
        soru: 'İstediğim belge hazırlandı mı, nasıl anlarım?',
        cevap: 'Çalışan Doküman Talepleri sekmesinde durum “Onaylandı” olduğunda belge yüklenmiştir; İncele butonuyla açabilirsiniz.',
      },
      {
        soru: 'Belge talebimi kime göndermeliyim?',
        cevap: 'Talep Edilenler listesinde size açık yönetici ve İK pozisyonları görünür; belgeyi hazırlayacak kişiyi seçin.',
      },
    ],
    ipuclari: [
      'Sekme yanındaki kırmızı rakam sizden işlem bekleyen kayıt sayısını gösterir.',
      'Yüklediğiniz belgelerin okunaklı ve güncel tarihli olmasına dikkat edin; eski tarihli belgeler reddedilebilir.',
      'Talep açıklamasına belgeyi nerede kullanacağınızı yazmak hazırlığı hızlandırır.',
    ],
  },
]
