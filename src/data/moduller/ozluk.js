// Özlük İşlemleri ve Çalışan Dışa Aktarma: Yönetim › Çalışan Yönetimi
const YETKI = 'Bu işlem yetkinize bağlı olarak görünür.'

export default [
  // ───────────────────────────── ÖZLÜK İŞLEMLERİ ─────────────────────────────
  {
    id: 'ozluk-islemleri',
    grup: 'yonetim',
    sira: 13,
    baslik: 'Özlük İşlemleri',
    menu: 'Yönetim › Çalışan Yönetimi › İşlemler › Özlük İşlemleri',
    href: '/personnel-operations',
    kim: 'parla',
    ozet:
      'Çalışanların özlük bilgilerini seçtiğiniz alan ve filtrelerle Excel\'e aktarır; birim değişikliği yapılan çalışanların eski birimden kalan özlük bilgilerini yeni birimin alanlarına taşırsınız. İK ve yetkili yöneticiler kullanır.',

    ekranlar: [
      { sekme: null, aciklama: 'Özlük İşlemleri sayfası: üstte sayfa başlığı ve açıklaması, altında Çalışan Özlük Bilgileri ve Özlük Aktarımı sekmeleri. Yalnız yetkiniz olan sekmeler görünür.' },
      { sekme: 'Çalışan Özlük Bilgileri', aciklama: 'Dışa aktarma ekranı: sağ üstte Filtreler, Önizleme ve Dışa Aktar butonları; altında Çalışan Seçimi kutusu ve Temel Bilgi Alanları, Özel Alanlar ve Organizasyon Bilgileri sekmeleri.' },
      { sekme: 'Özlük Aktarımı > Aktarım', aciklama: 'Eski birimden kalan dolu özlük bilgisi olan çalışanların listesi: Çalışan, Şu Anki Departman, Bekleyen Alan ve Durum sütunları; sağ üstte arama kutusu, Tümünü Geri Al ve Tümünü Kaydet butonları.' },
      { sekme: 'Özlük Aktarımı > Geçmiş', aciklama: 'Aktarım Geçmişi: Tarih, Kaynak, Hedef, Aktarılan Değer ve Eşleşme sütunları; Tüm Kayıtlar / Çalışan Bazlı görünüm seçimi ve Çalışana göre filtrele kutusu.' },
    ],

    bolumler: [
      {
        baslik: 'Sayfaya nasıl ulaşılır',
        metin: 'Yönetim › Çalışan Yönetimi sayfasında sağ üstteki İşlemler menüsünü açın ve Özlük İşlemleri seçeneğine tıklayın.',
        maddeler: [
          'Çalışan Özlük Bilgileri sekmesi çalışan dışa aktarma yetkisi olanlara görünür.',
          'Özlük Aktarımı sekmesi çalışan düzenleme yetkisi olanlara görünür.',
          'Eski Çalışan Dışa Aktarma adresi de bu sayfanın Çalışan Özlük Bilgileri sekmesini açar.',
        ],
      },
      {
        baslik: 'Özlük aktarımı neden gerekir?',
        metin: 'Her birimin kendine ait özlük alanları (ör. Ehliyet Sınıfı, Askerlik Durumu, Diploma) olabilir. Çalışan başka birime geçtiğinde eski birimin alanlarındaki bilgiler yeni birimde görünmez; bu bilgiler "eski birimden kalan" olarak bekler.',
        maddeler: [
          'Sistem her eski alan için yeni birimde uygun bir hedef alan önerir.',
          'Denklik koduna göre eşleşti: iki alan aynı denklik kodunu taşıyor; en güvenilir eşleşmedir.',
          'Ada göre eşleşti: denklik kodu yok ama alan adları aynı; kontrol etmeniz önerilir.',
          'Elle seçildi: hedef alanı siz seçtiniz.',
          'Otomatik eşleşme yok: ne kod ne ad eşleşti; hedefi elle seçebilir ya da alanı atlayabilirsiniz.',
        ],
      },
      {
        baslik: 'Aktarım durumları',
        metin: 'Aktarım listesinde her çalışanın satırında bir durum etiketi görünür.',
        maddeler: [
          'Hazır: bu çalışan için henüz bir değişiklik yapılmadı.',
          'Kaydedilmedi: eşleştirmede değişiklik yaptınız ama henüz kaydetmediniz.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Çalışan özlük bilgilerini Excel\'e aktarma',
        kim: 'İK',
        sekme: 'Çalışan Özlük Bilgileri',
        aciklama: 'Detay erişiminiz olan çalışanların seçtiğiniz bilgilerini tek bir Excel dosyasında indirin. Alan seçimi, filtreler ve önizleme adımlarının tamamı Çalışan Dışa Aktarma sayfasında ayrıntılı anlatılmıştır.',
        adimlar: [
          'Çalışan Özlük Bilgileri sekmesini açın.',
          'Temel Bilgi Alanları ve Özel Alanlar sekmelerinde dosyaya girecek alanları işaretleyin.',
          'Gerekirse Çalışan Seçimi kutusundan çalışanları seçin; boş bırakırsanız tüm çalışanlar aktarılır.',
          'İsterseniz Organizasyon Bilgileri sekmesinden filtre ekleyin.',
          'Dışa Aktar butonuna tıklayın.',
        ],
        sonuc: '"Dışa aktarım hazırlanıyor" penceresi açılır; dosya hazır olunca bilgisayarınıza iner ve "Veriler başarıyla dışa aktarıldı" mesajı görünür.',
        notlar: [
          'Özel alanlar çalışanların kendi birimlerinden gelir; aynı denklik koduna sahip alanlar tek sütunda birleşir ve sütun başlığı denklik kodu olur.',
          'Hazırlık sürerken sayfadan ayrılmayın.',
          'Ayrıntılı anlatım için Çalışan Dışa Aktarma sayfasına bakın.',
          YETKI,
        ],
      },
      {
        baslik: 'Aktarım bekleyen çalışanları listeleme ve arama',
        kim: 'İK',
        sekme: 'Özlük Aktarımı > Aktarım',
        aciklama: 'Birim değişikliği sonrası eski birimden kalan dolu özlük bilgisi olan çalışanları görün.',
        adimlar: [
          'Özlük Aktarımı sekmesini açın; Aktarım alt sekmesi açılır.',
          'Listede Çalışan, Şu Anki Departman, Bekleyen Alan (aktarılmayı bekleyen alan sayısı) ve Durum sütunlarını inceleyin.',
          'Belirli bir kişiyi bulmak için sağ üstteki "Çalışan adı veya numarası" kutusuna yazın.',
          'Liste sayfa başına 20 kayıt gösterir; alttaki sayfa numaralarıyla ilerleyin.',
        ],
        sonuc: 'Eski birimden bilgisi kalan tüm çalışanlar listelenir. Kimse yoksa "Eski birimden kalan özlük bilgisi olan çalışan yok." yazar.',
        notlar: [YETKI],
      },
      {
        baslik: 'Bir çalışanın özlük alanlarını eşleştirme',
        kim: 'İK',
        sekme: 'Özlük Aktarımı > Aktarım',
        aciklama: 'Eski birimden kalan her alan için yeni birimde hangi alana aktarılacağını belirleyin.',
        adimlar: [
          'Listede çalışanın satırının başındaki genişletme okuna tıklayın; "Özlük bilgileri inceleniyor..." yazısından sonra alanlar açılır.',
          'Üstteki özet kutusunda kaç alanın eski birimden kaldığını ve kaçının denklik kodu ya da ad ile eşleştiğini görün.',
          'Her satırın solunda eski alanın adı, denklik kodu, birimi, türü ve mevcut değerleri yer alır.',
          'Sağdaki "Hedef alan seçin" kutusundan yeni birimdeki alanı seçin veya önerilen alanı kontrol edin.',
          'Hedefin altında "Aktarılacak değer" bilgisini kontrol edin.',
          'Bir alanı taşımak istemiyorsanız hedef seçimini temizleyin; alan "Aktarılmayacak" olarak işaretlenir.',
        ],
        alanlar: [
          { ad: 'Hedef alan', aciklama: 'Yeni birimdeki özlük alanı. Başka bir satırda seçilmiş veya türü uygun olmayan alanlar seçilemez.', zorunlu: false },
          { ad: 'Değer seçin', aciklama: 'Eski değer yeni alanın seçenekleri arasında yoksa ya da türe dönüştürülemiyorsa yeni değeri buradan seçer veya girersiniz.', zorunlu: false },
        ],
        sonuc: 'Çalışanın satırındaki durum "Kaydedilmedi" olur; değişiklik henüz kaydedilmemiştir.',
        notlar: [
          'Eski ve yeni alanın türü farklıysa mor renkli "Tür dönüşümü" etiketi görünür (ör. Metin → Tekli seçim).',
          'Hedef alan tek değer tutuyor ve eski alanda birden çok kayıt varsa yalnız ilk kayıt aktarılır.',
          'Yeni birimde hiç özlük alanı tanımlı değilse bu değerler aktarılamaz ve olduğu gibi kalır.',
          YETKI,
        ],
      },
      {
        baslik: 'Eşleşmeyen değeri düzeltme',
        kim: 'İK',
        sekme: 'Özlük Aktarımı > Aktarım',
        aciklama: 'Eski değer yeni alana doğrudan aktarılamıyorsa yeni değeri elle belirleyin.',
        adimlar: [
          'Sarı uyarı kutusunu bulun: "… yeni alanın seçenekleri arasında bulunamadı" veya "… yeni alanın türüne dönüştürülemedi".',
          'Uyarının altındaki kutudan uygun seçeneği seçin, tarihi veya sayıyı girin (onay kutusu alanlarında Evet / Hayır).',
          'Bu alanı hiç taşımak istemiyorsanız "Bu alanı aktarma" bağlantısına tıklayın.',
        ],
        sonuc: 'Değer belirlenince uyarı bilgi kutusuna döner ve aktarım uygulanabilir hale gelir.',
        notlar: ['Değeri eksik alan varken aktarım uygulanamaz; "… için değer gerekiyor" uyarısı görünür.', YETKI],
      },
      {
        baslik: 'Tek çalışan için özlük aktarımını uygulama',
        kim: 'İK',
        sekme: 'Özlük Aktarımı > Aktarım',
        aciklama: 'Eşleştirmesini tamamladığınız çalışanın bilgilerini yeni alanlara yazın.',
        adimlar: [
          'Çalışanın genişletilmiş satırında eşleştirmeleri kontrol edin.',
          'Alttaki Özlük Aktarımını Uygula butonuna tıklayın.',
          '"Özlük aktarımını uygulamak istediğinize emin misiniz?" penceresinde açıklamayı okuyun.',
          'Penceredeki Özlük Aktarımını Uygula butonuyla onaylayın (vazgeçmek için İptal).',
        ],
        sonuc: '"Özlük aktarımı tamamlandı: N alan aktarıldı." mesajı görünür. Seçilen değerler yeni alanlara yazılır, eski alanlardaki değerler boşaltılır; çalışan listeden düşer ve işlem Geçmiş sekmesine eklenir.',
        notlar: [
          'Eski değer silinmez, boşaltılır; kimin ne zaman değiştirdiği alan geçmişinde görünür.',
          'Onay akışı yoktur; işlem onaylandığı anda uygulanır.',
          YETKI,
        ],
      },
      {
        baslik: 'Birden fazla çalışan için toplu kaydetme',
        kim: 'İK',
        sekme: 'Özlük Aktarımı > Aktarım',
        aciklama: 'Birkaç çalışanın eşleştirmesini yaptıktan sonra hepsini tek seferde uygulayın.',
        adimlar: [
          'Sırayla çalışanların satırlarını açıp eşleştirmeleri yapın; her birinin durumu "Kaydedilmedi" olur.',
          'Sağ üstteki Tümünü Kaydet (N) butonuna tıklayın; parantez içindeki sayı bekleyen çalışan sayısıdır.',
          'İşlem bitene kadar bekleyin.',
        ],
        sonuc: '"N çalışan için aktarım uygulandı" mesajı görünür ve liste yenilenir. Hata olan çalışanlar için "N çalışan için aktarım başarısız" uyarısı çıkar; bu çalışanlar listede kalır.',
        notlar: [YETKI],
      },
      {
        baslik: 'Yapılan eşleştirmeleri geri alma',
        kim: 'İK',
        sekme: 'Özlük Aktarımı > Aktarım',
        aciklama: 'Kaydetmediğiniz eşleştirme değişikliklerini sistemin önerisine döndürün.',
        adimlar: [
          'Tüm çalışanlar için: sağ üstteki Tümünü Geri Al butonuna tıklayın.',
          'Tek çalışan için: çalışanın genişletilmiş satırının altındaki Tümünü Geri Al butonuna tıklayın.',
        ],
        sonuc: 'Kaydedilmemiş değişiklikler silinir, durum yeniden "Hazır" olur.',
        notlar: ['Uygulanmış bir aktarım bu butonla geri alınmaz.'],
      },
      {
        baslik: 'Aktarım geçmişini inceleme',
        kim: 'İK',
        sekme: 'Özlük Aktarımı > Geçmiş',
        aciklama: 'Geçmiş özlük aktarımlarında hangi alanın hangi alana, hangi değerle ve hangi eşleşmeyle aktarıldığını görün.',
        adimlar: [
          'Özlük Aktarımı sekmesinde Geçmiş alt sekmesine tıklayın.',
          'Tüm Kayıtlar görünümünde her satırda Çalışan, Tarih, Kaynak (eski alan ve birimi), Hedef (yeni alan ve birimi), Aktarılan Değer (eski → yeni) ve Eşleşme bilgilerini inceleyin.',
          'Çalışan Bazlı görünüme geçerek her çalışan için Kayıt Sayısı ve Son İşlem tarihini görün; satırı genişleterek ayrıntıya inin.',
          'Tek bir kişiye odaklanmak için "Çalışana göre filtrele" kutusundan çalışanı seçin.',
        ],
        sonuc: 'Seçtiğiniz görünüme göre geçmiş listelenir. Kayıt yoksa "Özlük aktarım geçmişi yok." yazar.',
        notlar: ['Yeni bir aktarım uyguladığınızda geçmiş kendiliğinden yenilenir.', YETKI],
      },
    ],

    sss: [
      { soru: 'Özlük İşlemleri sayfasına nasıl ulaşırım?', cevap: 'Yönetim › Çalışan Yönetimi sayfasında sağ üstteki İşlemler menüsünü açıp Özlük İşlemleri seçeneğine tıklayın.' },
      { soru: 'Menüde Özlük İşlemleri seçeneğini göremiyorum, neden?', cevap: 'Sayfa yalnız çalışan dışa aktarma veya çalışan düzenleme yetkisi olan kullanıcılara açılır. Yetki için sistem yöneticinize başvurun.' },
      { soru: 'Sayfayı açabiliyorum ama Özlük Aktarımı sekmesi yok, neden?', cevap: 'Özlük Aktarımı sekmesi çalışan düzenleme yetkisi gerektirir. Yalnız dışa aktarma yetkiniz varsa sadece Çalışan Özlük Bilgileri sekmesini görürsünüz.' },
      { soru: 'Özlük aktarımı ne zaman gerekir?', cevap: 'Bir çalışan farklı özlük alanları kullanan başka bir birime geçtiğinde, eski birimin alanlarındaki dolu bilgiler yeni birimde görünmez. Bu bilgileri yeni birimin alanlarına taşımak için özlük aktarımı yaparsınız.' },
      { soru: 'Aktarım listesi boş, ne anlama geliyor?', cevap: '"Eski birimden kalan özlük bilgisi olan çalışan yok." yazıyorsa yetkiniz olan çalışanlar arasında aktarılmayı bekleyen bilgi yoktur.' },
      { soru: '"Liste yüklenemedi." uyarısı alıyorum, ne yapmalıyım?', cevap: 'Sayfayı yenileyin. Sorun sürerse internet bağlantınızı kontrol edin ve sistem yöneticinize bildirin.' },
      { soru: 'Sistem hedef alanı nasıl öneriyor?', cevap: 'Önce denklik koduna bakar; iki alan aynı kodu taşıyorsa eşleştirir. Kod yoksa alan adları aynı olanları eşleştirir. Hiçbiri tutmazsa hedefi siz seçersiniz.' },
      { soru: '"Ada göre eşleşti" yazan alanlara güvenebilir miyim?', cevap: 'Genellikle doğrudur ama yalnız adlar aynı olduğu için eşleştirilmiştir. Uygulamadan önce hedef alanı ve aktarılacak değeri kontrol etmeniz önerilir.' },
      { soru: 'Hedef alan listesinde bazı seçenekler soluk ve seçilemiyor, neden?', cevap: 'O alan başka bir satırda zaten hedef olarak seçilmiştir ya da türü eski alanla uyumlu değildir. Bir hedef alana yalnız bir eski alan aktarılabilir.' },
      { soru: '"… yeni alanın seçenekleri arasında bulunamadı" uyarısı alıyorum, ne yapmalıyım?', cevap: 'Eski değer yeni alanın seçenek listesinde yok. Uyarının altındaki kutudan uygun seçeneği seçin ya da "Bu alanı aktarma" bağlantısıyla alanı atlayın.' },
      { soru: '"… yeni alanın türüne dönüştürülemedi" uyarısı ne demek?', cevap: 'Eski değer yeni alanın türüne (ör. tarih veya sayı) çevrilemedi. Doğru değeri elle girin ya da bu alanın aktarımını iptal edin.' },
      { soru: '"… için değer gerekiyor" uyarısı nedeniyle uygulayamıyorum, ne yapmalıyım?', cevap: 'Adı geçen alanda değeri belirlenmemiş bir kayıt vardır. O alanda bir değer seçin veya "Bu alanı aktarma" ile alanı atlayın; ardından Özlük Aktarımını Uygula butonu açılır.' },
      { soru: '"Yeni birimde özlük alanı tanımlı değil" uyarısı çıkıyor, ne yapmalıyım?', cevap: 'Çalışanın yeni biriminde hiç özlük alanı yoktur, bu yüzden değerler aktarılamaz ve olduğu gibi kalır. Önce yeni birim için özlük alanlarını tanımlatın, sonra aktarımı yapın.' },
      { soru: '"Hedef alan tek değer tutuyor; yalnızca ilk kayıt aktarılacak." ne demek?', cevap: 'Eski alanda birden çok kayıt var ama yeni alan tek değer saklıyor. Bu durumda yalnız ilk kayıt aktarılır; diğerleri taşınmaz.' },
      { soru: 'Aktarım yapınca eski bilgiler silinir mi?', cevap: 'Eski alanlardaki değerler silinmez, boşaltılır. Kimin ne zaman değiştirdiği alan geçmişinde görünür; yapılan aktarım Geçmiş sekmesinde de listelenir.' },
      { soru: 'Uyguladığım bir aktarımı geri alabilir miyim?', cevap: 'Tümünü Geri Al yalnız kaydedilmemiş değişiklikleri geri alır. Uygulanmış bir aktarımı düzeltmek için çalışanın kartında ilgili özlük alanını elle güncelleyin; eski değeri Geçmiş sekmesinden görebilirsiniz.' },
      { soru: 'Özlük aktarımı onaya gider mi?', cevap: 'Hayır. Onay penceresinde onayladığınız anda aktarım uygulanır; ayrıca bir onay akışı yoktur.' },
      { soru: 'Birden çok çalışanı aynı anda nasıl aktarırım?', cevap: 'Her çalışanın satırını açıp eşleştirmeleri yapın, ardından sağ üstteki Tümünü Kaydet (N) butonuna tıklayın. Sonuçta kaç çalışanın başarılı, kaçının başarısız olduğu bildirilir.' },
      { soru: '"N çalışan için aktarım başarısız" uyarısı aldım, ne yapmalıyım?', cevap: 'Başarısız çalışanlar listede kalır. Satırlarını açıp eksik değer uyarılarını giderin ve aktarımı tek tek uygulayın.' },
      { soru: 'Eşleştirmeyi yarıda bırakırsam ne olur?', cevap: 'Kaydedilmemiş değişiklikler sayfadan ayrıldığınızda korunmaz. Bilgiler eski birimden kalan olarak beklemeye devam eder; daha sonra yeniden eşleştirebilirsiniz.' },
      { soru: 'Geçmiş sekmesinde belirli bir çalışanın aktarımlarını nasıl bulurum?', cevap: '"Çalışana göre filtrele" kutusundan çalışanı seçin ya da Çalışan Bazlı görünüme geçip ilgili satırı genişletin.' },
      { soru: 'Çalışan Özlük Bilgileri sekmesi ile Çalışan Dışa Aktarma aynı mı?', cevap: 'Evet. Çalışan Dışa Aktarma adresi bu sekmeyi açar. Alan, filtre ve önizleme ayrıntıları için Çalışan Dışa Aktarma sayfasına bakın.' },
      { soru: 'Özlük aktarımını mobil uygulamadan yapabilir miyim?', cevap: 'Özlük aktarımı geniş tablo ve eşleştirme ekranı gerektirdiği için bilgisayardan, web tarayıcısıyla yapılması önerilir.' },
    ],

    ipuclari: [
      'Birim değişikliği yaptıktan hemen sonra Özlük Aktarımı sekmesini kontrol edin; bekleyen bilgileri uzun süre bırakmayın.',
      'Birimler arasında aynı anlama gelen alanlara aynı denklik kodunu verirseniz eşleştirme otomatik ve güvenilir olur.',
      '"Ada göre eşleşti" ve mor "Tür dönüşümü" etiketli satırları uygulamadan önce mutlaka gözden geçirin.',
      'Çok sayıda çalışan varsa önce birkaçını eşleştirip Tümünü Kaydet ile uygulayın, sonra devam edin.',
    ],
  },

  // ───────────────────────────── ÇALIŞAN DIŞA AKTARMA ─────────────────────────────
  {
    id: 'calisan-disa-aktarma',
    grup: 'yonetim',
    sira: 14,
    baslik: 'Çalışan Dışa Aktarma',
    menu: 'Yönetim › Çalışan Yönetimi › Dışa Aktar',
    href: '/employee-export',
    kim: 'parla',
    ozet:
      'Yetkiniz olan çalışanların temel bilgilerini, şirkete özel alanlarını, organizasyon ve izin bilgilerini seçtiğiniz filtrelerle süzüp Excel dosyası olarak indirirsiniz. İK ve yetkili yöneticiler kullanır.',

    ekranlar: [
      { sekme: null, aciklama: 'Çalışan Özlük Bilgileri ekranı: başlık ve açıklama, sağ üstte Filtreler (aktif filtre sayısıyla), Önizleme ve Dışa Aktar butonları; altında Çalışan Seçimi kutusu ve dört sekme.' },
      { sekme: 'Temel Bilgi Alanları', aciklama: 'Çalışan No, Ad, Soyad, E-posta, Telefon, Cinsiyet, Doğum Tarihi, Organizasyon Birimi, Pozisyon gibi temel alanların listesi; her alanın yanında seçim kutusu ve filtre ayarı.' },
      { sekme: 'Özel Alanlar', aciklama: 'Şirketinize ve birimlere özel tanımlanmış özlük alanları; alan türü (Metin, Tarih, Seçim, Dosya vb.) ve filtre ayarıyla birlikte.' },
      { sekme: 'Organizasyon Bilgileri', aciklama: 'Organizasyon Filtreleri: Organizasyon Birimi, Birim Pozisyonu, Rol, İş Seviyesi, İstihdam Türü, Çalışma Modeli, Müşteri ve Çalışma Saati Türü seçimleri.' },
    ],

    bolumler: [
      {
        baslik: 'Sayfaya nasıl ulaşılır',
        metin: 'Yönetim › Çalışan Yönetimi sayfasında sağ üstteki İşlemler menüsünden Özlük İşlemleri\'ni seçin; açılan sayfadaki Çalışan Özlük Bilgileri sekmesi dışa aktarma ekranıdır.',
        maddeler: [
          'Sayfayı görmek için çalışan dışa aktarma ve çalışan yönetimini görüntüleme yetkilerinin ikisi de gerekir.',
          'Yalnız detay erişiminiz olan çalışanlar listelenir ve dosyaya alınır.',
        ],
      },
      {
        baslik: 'Alan filtre türleri',
        metin: 'Temel ve özel alanlarda her alana ayrı filtre koyabilirsiniz. Alanın türüne göre şu seçenekler çıkar:',
        maddeler: [
          'Hepsi: filtre yok, tüm çalışanlar.',
          'Veri Var / Veri Yok: alanı dolu ya da boş olan çalışanlar.',
          'Tam Değerler: seçim türündeki alanlarda seçtiğiniz seçeneklere sahip olanlar.',
          'Eşittir: metin alanlarında girilen değerin içinde geçtiği kayıtlar (büyük/küçük harf duyarsız); tarih alanlarında seçilen tarihe eşit kayıtlar.',
          'Aralık, Büyüktür, Küçüktür: tarih ve sayı alanlarında değer aralığı.',
          'Ay: tarih alanlarında seçilen aylara düşen kayıtlar (ör. doğum günü Mart olanlar).',
        ],
      },
      {
        baslik: 'Filtreler nasıl birleşir',
        metin: 'Alan filtreleri, organizasyon filtreleri ve izin filtreleri birlikte uygulanır.',
        maddeler: [
          'Organizasyon filtrelerinde seçilen kriterlerden en az biri eşleşirse çalışan dahil edilir.',
          'İzin filtrelerinde yalnız onaylanmış izinler dikkate alınır.',
          'Çalışan Seçimi boşsa filtrelere uyan tüm çalışanlar aktarılır.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Dosyaya girecek temel alanları seçme',
        kim: 'İK',
        sekme: 'Temel Bilgi Alanları',
        aciklama: 'Excel dosyasında hangi temel bilgilerin sütun olarak yer alacağını belirleyin.',
        adimlar: [
          'Temel Bilgi Alanları sekmesine tıklayın.',
          'Dosyada görmek istediğiniz alanların yanındaki kutuyu işaretleyin (ör. Çalışan No, Ad, Soyad, E-posta, Telefon, Doğum Tarihi, Organizasyon Birimi, Pozisyon).',
          'Hepsini birden seçmek veya kaldırmak için sekme adının yanındaki kutuyu kullanın.',
        ],
        sonuc: 'Seçilen alanlar önizlemede ve Excel dosyasında sütun olarak yer alır.',
        notlar: ['En az bir alan seçilmeden Önizleme ve Dışa Aktar butonları etkin olmaz.'],
      },
      {
        baslik: 'Özel alanları seçme',
        kim: 'İK',
        sekme: 'Özel Alanlar',
        aciklama: 'Şirketinize veya birimlere özel tanımlı özlük alanlarını (ör. Kan Grubu, Ehliyet Sınıfı) dosyaya ekleyin.',
        adimlar: [
          'Özel Alanlar sekmesine tıklayın.',
          'Her alanın Alan Türü bilgisini (Metin, Metin Alanı, Seçim, Çoklu Seçim, Tarih, Sayı, Onay Kutusu, Dosya) kontrol edin.',
          'Dosyaya eklemek istediğiniz alanları işaretleyin; tümü için sekme adının yanındaki kutuyu kullanın.',
        ],
        sonuc: 'Seçilen özel alanlar dosyada sütun olur.',
        notlar: [
          'Özel alanlar her çalışanın kendi biriminden gelir. Farklı birimlerde aynı denklik koduna sahip alanlar tek sütunda birleşir ve sütun başlığı denklik kodu olur.',
        ],
      },
      {
        baslik: 'Alan bazında filtre koyma',
        kim: 'İK',
        sekme: 'Temel Bilgi Alanları',
        aciklama: 'Belirli bir alanın değerine göre çalışanları süzün (ör. telefonu boş olanlar, Mart ayında doğanlar).',
        adimlar: [
          'Temel Bilgi Alanları veya Özel Alanlar sekmesinde filtrelemek istediğiniz alanın filtre ayarını açın; Filtre Ayarları penceresi açılır.',
          'Filtre Türü seçin: Hepsi, Veri Var, Veri Yok, Tam Değerler, Eşittir, Aralık, Büyüktür, Küçüktür veya Ay.',
          'Gerekiyorsa Filtre Değerleri bölümünde değeri girin ya da seçin (ör. "Değer seç...", "Ay seçin...").',
          'Pencereyi kaydedip kapatın.',
        ],
        alanlar: [
          { ad: 'Filtre Türü', aciklama: 'Alanın türüne göre sunulan filtre seçeneği.', zorunlu: true },
          { ad: 'Filtre Değerleri', aciklama: 'Tam Değerler, Eşittir, Aralık, Büyüktür, Küçüktür ve Ay türlerinde girilecek değer(ler).', zorunlu: true },
        ],
        sonuc: 'Alanın yanında renkli filtre etiketi görünür; Filtreler butonundaki sayı bir artar.',
        notlar: [
          'Değer gerektiren filtrede değer girmezseniz "Filtre değerleri gerekli" uyarısı çıkar.',
          'Tarih aralığı filtresinde iki tarihi de seçmeniz gerekir ("Tarih aralığı seçiniz").',
        ],
      },
      {
        baslik: 'Organizasyon bilgilerine göre filtreleme',
        kim: 'İK',
        sekme: 'Organizasyon Bilgileri',
        aciklama: 'Çalışanları birim, pozisyon, rol ve çalışma koşullarına göre süzün.',
        adimlar: [
          'Organizasyon Bilgileri sekmesine tıklayın.',
          'İstediğiniz kriterlerde seçim yapın; her kutuda birden çok değer seçebilirsiniz.',
          'Organizasyon sütunlarının dosyaya eklenmesi için sekme adının yanındaki kutuyu işaretleyin.',
        ],
        alanlar: [
          { ad: 'Organizasyon Birimi', aciklama: 'Ör. Kurumsal Çözümler.', zorunlu: false },
          { ad: 'Birim Pozisyonu', aciklama: 'Birimdeki pozisyon unvanı.', zorunlu: false },
          { ad: 'Rol', aciklama: 'Kullanıcı rolü.', zorunlu: false },
          { ad: 'İş Seviyesi', aciklama: 'Pozisyonun iş seviyesi.', zorunlu: false },
          { ad: 'İstihdam Türü', aciklama: 'Tam Zamanlı, Yarı Zamanlı, Sözleşmeli, Stajyer.', zorunlu: false },
          { ad: 'Çalışma Modeli', aciklama: 'Ör. ofisten, uzaktan, hibrit.', zorunlu: false },
          { ad: 'Müşteri', aciklama: 'Çalışanın bağlı olduğu müşteri.', zorunlu: false },
          { ad: 'Çalışma Saati Türü', aciklama: 'Tanımlı çalışma saati şablonu.', zorunlu: false },
        ],
        sonuc: 'Seçilen kriterlerden en az birine uyan çalışanlar dışa aktarılır.',
      },
      {
        baslik: 'Belirli çalışanları seçme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Tüm liste yerine yalnız istediğiniz kişileri dışa aktarın.',
        adimlar: [
          'Çalışan Seçimi kutusuna tıklayın; Çalışan Seç penceresi açılır.',
          'Ad veya numarayla arayıp çalışanları işaretleyin.',
          'Seçimi onaylayın.',
        ],
        sonuc: 'Yalnız seçilen çalışanlar aktarılır. Kutu boşsa "Tüm N çalışan dışa aktarılacak" yazar.',
      },
      {
        baslik: 'Aktif filtreleri görüntüleme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Uyguladığınız tüm filtreleri tek pencerede görün.',
        adimlar: [
          'Sağ üstteki Filtreler butonuna tıklayın (butondaki sayı aktif filtre adedini gösterir).',
          'Aktif Filtreler penceresinde alan, organizasyon ve izin filtrelerini türü ve değerleriyle inceleyin.',
          'Kapat butonuyla pencereyi kapatın.',
        ],
        sonuc: 'Filtre yoksa "Aktif filtre yok" yazar.',
      },
      {
        baslik: 'Verileri önizleme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Dosyayı indirmeden önce hangi çalışanların ve hangi sütunların aktarılacağını tablo halinde görün.',
        adimlar: [
          'Sağ üstteki Önizleme butonuna tıklayın.',
          'Veri Önizlemesi penceresinde çalışan sayısını ve sütunları kontrol edin.',
          'Alttaki sayfa numaralarıyla gezinin; sayfa başına 10, 20, 50 veya 100 kayıt seçebilirsiniz.',
          'Uygunsa penceredeki Dışa Aktar butonuyla dosyayı indirin.',
        ],
        sonuc: 'Filtrelere uyan veri tabloda görünür. Uyan kayıt yoksa "Önizlenecek veri yok" yazar.',
      },
      {
        baslik: 'Excel dosyasını indirme',
        kim: 'İK',
        sekme: null,
        aciklama: 'Seçtiğiniz alanlar ve filtrelerle çalışan listesini Excel dosyası olarak indirin.',
        adimlar: [
          'Alanları seçip filtreleri ayarlayın.',
          'Sağ üstteki Dışa Aktar butonuna tıklayın.',
          '"Dışa aktarım hazırlanıyor" penceresi kapanana kadar sayfada bekleyin.',
        ],
        sonuc: 'Excel dosyası bilgisayarınıza iner ve "Veriler başarıyla dışa aktarıldı" mesajı görünür. Dosyada çalışan verilerinin yanında genellikle bir Notlar sayfası da bulunur.',
        notlar: [
          'Çalışan ve alan sayısına göre hazırlık biraz sürebilir; bu sırada sayfadan ayrılmayın.',
          'Yetkiniz dışında kalan çalışanlar dosyaya alınmaz; "N çalışan yetkiniz dışında olduğu için rapora alınmadı" bilgisi görünür.',
          YETKI,
        ],
      },
    ],

    sss: [
      { soru: 'Çalışan listesini Excel\'e nasıl aktarırım?', cevap: 'Alanları Temel Bilgi Alanları ve Özel Alanlar sekmelerinden seçin, gerekirse filtre ekleyin ve sağ üstteki Dışa Aktar butonuna tıklayın.' },
      { soru: 'Dışa aktarma seçeneğini göremiyorum, neden?', cevap: 'Bu sayfa çalışan dışa aktarma ve çalışan yönetimini görüntüleme yetkilerinin ikisini birden gerektirir. Yetki için sistem yöneticinize başvurun.' },
      { soru: 'Dışa Aktar ve Önizleme butonları pasif, neden?', cevap: 'Hiç alan seçilmemiştir. Temel Bilgi Alanları veya Özel Alanlar sekmesinden en az bir alanı işaretleyin.' },
      { soru: 'Çalışan seçmezsem ne olur?', cevap: 'Çalışan Seçimi boş bırakılırsa filtrelere uyan ve detay erişiminiz olan tüm çalışanlar dışa aktarılır.' },
      { soru: 'Bazı çalışanlar dosyada yok, neden?', cevap: 'Yalnız detay erişiminiz olan çalışanlar aktarılır. Yetkiniz dışındakiler için "… yetkiniz dışında olduğu için rapora alınmadı" bilgisi görünür. Ayrıca uyguladığınız filtreleri Filtreler butonundan kontrol edin.' },
      { soru: '"Filtrelere uygun çalışan bulunamadı" uyarısı alıyorum, ne yapmalıyım?', cevap: 'Filtreler birbirini çok daraltıyor olabilir. Filtreler butonuyla aktif filtreleri açıp gereksiz olanları Hepsi / Filtre Yok olarak değiştirin.' },
      { soru: '"Filtre değerleri gerekli" uyarısı ne demek?', cevap: 'Tam Değerler, Eşittir, Aralık gibi değer isteyen bir filtre türü seçtiniz ama değer girmediniz. Değeri girin ya da filtre türünü Hepsi yapın.' },
      { soru: '"Tarih aralığı seçiniz" uyarısı alıyorum.', cevap: 'Tarih Aralığı filtresinde başlangıç ve bitiş tarihinin ikisini de seçmeniz gerekir.' },
      { soru: 'Bekleyen izinler de filtreye dahil mi?', cevap: 'Hayır. İzin filtrelerinde yalnız onaylanmış izinler dikkate alınır.' },
      { soru: 'Organizasyon filtresinde birden çok kriter seçersem nasıl çalışır?', cevap: 'Seçilen kriterlerden en az biri eşleşen çalışan listeye dahil edilir.' },
      { soru: 'Belirli bir ayda doğanları nasıl bulurum?', cevap: 'Temel Bilgi Alanları sekmesinde Doğum Tarihi alanının filtre ayarını açın, Filtre Türü olarak Ay seçin ve ilgili ayları işaretleyin.' },
      { soru: 'Telefonu veya e-postası boş olanları nasıl bulurum?', cevap: 'İlgili alanın filtre ayarında Veri Yok seçin. Dolu olanlar için Veri Var seçebilirsiniz.' },
      { soru: 'Farklı birimlerdeki benzer özel alanlar neden tek sütunda?', cevap: 'Aynı denklik koduna sahip alanlar tek sütunda birleşir ve sütun başlığı denklik kodu olur. Böylece farklı birimlerin aynı bilgisi yan yana görünür.' },
      { soru: 'Dosya indirmesi uzun sürüyor, ne yapmalıyım?', cevap: 'Çalışan ve alan sayısı fazlaysa hazırlık sürebilir. "Dışa aktarım hazırlanıyor" penceresi kapanana kadar sayfadan ayrılmayın.' },
      { soru: '"Dışa aktarma hatası" mesajı aldım, ne yapmalıyım?', cevap: 'Sayfayı yenileyip tekrar deneyin. Sorun sürerse seçtiğiniz alan veya çalışan sayısını azaltın ve sistem yöneticinize bildirin.' },
      { soru: '"Filtre ve alan seçenekleri yüklenemedi." uyarısı çıkıyor.', cevap: 'Sayfa açılırken seçenekler getirilemedi. Sayfayı yenileyin; sorun sürerse sistem yöneticinize bildirin.' },
      { soru: 'Hangi dosya biçiminde iner?', cevap: 'Dosya Excel biçiminde iner. Çalışan verilerinin yanında genellikle bir Notlar sayfası da yer alır.' },
      { soru: 'Bir çalışanın tüm kişisel verilerini tek dosyada nasıl alırım?', cevap: 'Bu sayfa çoklu liste içindir. Tek kişinin tüm kişisel verileri için çalışanın kartında Çalışan İşlemleri menüsündeki kişisel veri dışa aktarma seçeneğini kullanın; ayrıntılar Çalışan Yönetimi sayfasındadır.' },
      { soru: 'Seçimlerim bir sonraki girişte hatırlanır mı?', cevap: 'Genellikle hayır; her dışa aktarmada alanları ve filtreleri yeniden seçmeniz gerekir.' },
      { soru: 'Dışa aktarmayı mobilden yapabilir miyim?', cevap: 'Sayfa geniş tablo ve çok sekmeli filtre içerdiği için bilgisayardan, web tarayıcısıyla kullanılması önerilir.' },
    ],

    ipuclari: [
      'İndirmeden önce Önizleme ile çalışan sayısını ve sütunları kontrol edin.',
      'Sık kullandığınız rapor için seçtiğiniz alanları ve filtreleri not edin; böylece aynı raporu hızlıca yeniden hazırlarsınız.',
      'Büyük listelerde önce birim veya pozisyon filtresiyle daraltın; dosya daha hızlı hazırlanır.',
    ],
  },
]
