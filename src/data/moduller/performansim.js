// Performansım (çalışan tarafı) — Kişisel › Performansım
export default [
  {
    id: 'performansim',
    grup: 'kisisel',
    sira: 100,
    baslik: 'Performansım',
    menu: 'Kişisel › Performansım',
    href: '/my-performances',
    kim: 'ali',
    ozet:
      'Size atanan hedefleri takip ettiğiniz, ilerleme girdiğiniz, değerlendirmelerinizi doldurup sonuçlarını gördüğünüz kişisel performans sayfasıdır. ' +
      'Ara dönem görüşmeleri, itirazlar, rozetler, yetkinlik açığı, kariyer beyanı ve gelişim planınız da bu sayfanın sekmelerinde yer alır.',

    ekranlar: [
      { sekme: null, aciklama: 'Sayfa açıldığında Hedeflerim sekmesi görünür. Üstte tüm sekmeler, sağ üstte dönem seçimi bulunur; sığmayan sekmelere sağdaki üç nokta ile ulaşılır.' },
      { sekme: 'Hedeflerim', aciklama: 'Size atanan her hedef bir kart olarak listelenir: tür (OKR / KPI), ağırlık, dönem kodu, açıklama, hedef tamamlanma tarihi, atayan, son check-in ve ilerleme çubuğu. OKR hedeflerinde anahtar sonuç tablosu; kartın altında Detaylar, Check-in ve Değişiklik Talebi butonları yer alır.' },
      { sekme: 'Değerlendirmem', aciklama: 'Aktif Performans Değerlendirmem tablosu: Dönem, Şablon, Başlangıç, Durum, İlerleme (kaç değerlendiricinin tamamladığı), Genel Skor ve İşlem sütunları.' },
      { sekme: 'Ara Dönem Görüşmelerim', aciklama: 'Yöneticinizle yaptığınız ara dönem görüşmeleri: Dönem, Görüşme Tarihi, Yönetici, Açık Aksiyon ve İşlemler sütunları. Sağ üstte Hedeflerime Git butonu bulunur.' },
      { sekme: 'Yönetici Değerlendirmelerim', aciklama: 'Yöneticisi Olduğum Çalışanların Değerlendirmeleri: yönetici olarak puanlamanız gereken değerlendirmeler burada listelenir. Bekleyen yoksa "Şu an skorlamanız gereken bir değerlendirme yok." yazar.' },
      { sekme: 'Atanan Değerlendirmeler', aciklama: 'Bana Atanan Değerlendirmeler: size değerlendirici (ör. çalışma arkadaşı, 360 derece) olarak atanmış değerlendirmeler. Bekleyen yoksa "Şu an size atanmış bekleyen değerlendirme yok." yazar.' },
      { sekme: 'Rozetlerim', aciklama: 'Aldığınız takdirler rozet kartları olarak görünür: rozet adı, kazandırdığı puan, takdir mesajı, gönderen kişi ve tarih. Üstte Toplam Puan gösterilir.' },
      { sekme: 'Yetkinlik Açığım', aciklama: 'Toplam Yetkinlik, Karşıladığım, Gelişmem Gerekenler ve Değerlendirme Bekleyen özet kutuları; beklenen ve gerçek seviyeyi karşılaştıran grafik ile Yetkinlik / Beklenen Seviye / Gerçek Seviye / Açık tablosu.' },
      { sekme: 'İtirazlarım', aciklama: 'Performans İtirazlarım: değerlendirme seçimi, Yeni İtiraz Et butonu ve Dönem, Skor, İtiraz Tarihi, Durum, Çözüm Tarihi, Aksiyon sütunlarından oluşan itiraz listesi.' },
      { sekme: 'Kariyer Beyanım', aciklama: 'Kariyer ve Mobilite Beyanım formu: Kariyer Hedefim, Hedeflediğim Rol / Alan, Yer Değişikliği Tercihi, Hazır Olma Süresi (ay) ve Gelişmek İstediğim Alanlar alanları ile Kaydet butonu.' },
      { sekme: 'Gelişim Aksiyonlarım', aciklama: 'Aksiyonlarım listesi: size açılan gelişim aksiyonları (ör. PIP), durumu, sorumlusu, hedef tarihi ve ilerleme yüzdesi; her satırda Detaylar butonu.' },
    ],

    bolumler: [
      {
        baslik: 'Hedef türleri',
        metin: 'Hedefler iki biçimde gelir:',
        maddeler: [
          'OKR: Bir amaç ve ona bağlı ölçülebilir anahtar sonuçlardan oluşur. Hedefin ilerlemesi, anahtar sonuçların ağırlıklı ilerlemesinden hesaplanır.',
          'KPI: Tek bir sayısal göstergeye dayalı hedeftir. Üst hedefe bağlıysa kartta "Üst Hedefe Ağırlıklı Katkı" bilgisi görünür.',
          'Ağırlık (%): Hedefin dönem toplam skorundaki payıdır.',
        ],
      },
      {
        baslik: 'Anahtar sonuç durumları',
        maddeler: [
          'Yolunda: İlerleme beklenen düzeyde.',
          'Riskli: İlerleme beklenenin biraz gerisinde; dikkat gerektirir.',
          'Geride: İlerleme belirgin şekilde geride.',
          'Son Güncelleme sütunu, değerin son ne zaman girildiğini; "Güncellenmedi" ise henüz yeni değer girilmediğini gösterir.',
        ],
      },
      {
        baslik: 'Değerlendirme süreci',
        metin: 'Bir dönem değerlendirmesi genellikle şu aşamalardan geçer; Değerlendirmem sekmesindeki Durum sütunu hangi aşamada olduğunuzu gösterir:',
        maddeler: [
          'Öz Değerlendirme: Kendi puanlarınızı ve yorumlarınızı girersiniz (durum «Öz-değerlendirme Sürüyor»).',
          'Yönetici Değerlendirmesi: Yöneticiniz ve varsa akran/ast/İK değerlendiricileri puanlar («Yönetici Değerlendirmesi Sürüyor», «Akran Değerlendirmesi Sürüyor»).',
          'İtiraz: Genel skor oluşur, sonuç size açılır ve durum «İtiraz Penceresi Açık» olur; «Değerlendirmeni İncele» kutusunda belirtilen tarihe kadar «Onayla» veya «İtiraz Et» seçersiniz.',
          'Onay: Onayladığınızda değerlendirme performans onay akışına girer («Onay Bekliyor»).',
          'Tamamlandı: Onay akışı bitince «Onaylandı», kalibrasyon yapıldıysa «Kalibre Edildi», dönem kapanınca «Kapandı» görünür.',
        ],
      },
      {
        baslik: 'İtiraz durumları',
        maddeler: [
          'Gönderildi: İtirazınız iletildi, henüz incelemeye alınmadı.',
          'İncelemede: Onay akışındaki yetkililer itirazınızı inceliyor.',
          'Kabul Edildi: İtiraz yerinde bulundu; ilgili puanlar düzeltilir ve genel skor yeniden hesaplanır.',
          'Reddedildi: İtiraz değerlendirildi ve skor değişmedi.',
          'Karar verildiğinde Çözüm Tarihi ve Çözüm Açıklaması sütunları dolar.',
        ],
      },
    ],

    islemler: [
      // ---------- Hedeflerim ----------
      {
        baslik: 'Hedeflerimi dönem bazında görüntüleme',
        kim: 'Çalışan',
        sekme: 'Hedeflerim',
        aciklama: 'Size atanan hedefleri, ağırlıklarını, ilerlemelerini ve anahtar sonuçlarını tek ekranda görürsünüz.',
        adimlar: [
          'Kişisel › Performansım sayfasını açın; Hedeflerim sekmesi açık gelir.',
          'Sağ üstteki "Dönem seçin" kutusundan görmek istediğiniz performans dönemini seçin.',
          'Her hedef kartında tür, ağırlık, açıklama, hedef tamamlanma tarihi, atayan ve son check-in tarihini inceleyin.',
          'OKR hedeflerinde altta açılan tabloda anahtar sonuçların başlangıç, güncel, hedef değerlerini ve durumlarını görün.',
        ],
        sonuc: 'Seçilen döneme ait hedefleriniz ve güncel ilerleme yüzdeleri listelenir.',
      },
      {
        baslik: 'Hedef detayını görüntüleme',
        kim: 'Çalışan',
        sekme: 'Hedeflerim',
        aciklama: 'Hedefin tüm bilgilerini, varsa üst hedef bağlantısını, kilometre taşlarını ve onay geçmişini görürsünüz.',
        adimlar: [
          'Hedeflerim sekmesinde ilgili hedef kartını bulun.',
          'Kartın altındaki Detaylar butonuna tıklayın.',
          'Açılan pencerede hedefin açıklamasını, anahtar sonuçlarını, üst hedefini ve geçmiş hareketlerini inceleyin.',
        ],
        sonuc: 'Hedefin ayrıntıları salt okunur olarak gösterilir.',
      },
      {
        baslik: 'Hedefe check-in yapma (ilerleme bildirme)',
        kim: 'Çalışan',
        sekme: 'Hedeflerim',
        aciklama: 'Belirli aralıklarla hedefinizdeki ilerlemeyi yüzde olarak bildirir, açıklama ve kanıt eklersiniz. Check-in sayısı butonun üzerinde parantez içinde görünür.',
        adimlar: [
          'Hedeflerim sekmesinde ilgili hedef kartını bulun.',
          'Kartın altındaki "Check-in (n)" butonuna tıklayın; önceki check-in kayıtları listelenir.',
          'Yeni check-in eklemek için formu doldurun: tarih, ilerleme yüzdesi ve yorumunuz.',
          'Varsa kanıt bilgisini (doküman adı, bağlantı vb.) ekleyin.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Check-in Tarihi', aciklama: 'İlerlemenin bildirildiği tarih.', zorunlu: true },
          { ad: 'İlerleme (%)', aciklama: 'Hedefin o tarihteki tamamlanma yüzdesi.', zorunlu: false },
          { ad: 'Çalışan Yorumu', aciklama: 'Yaptıklarınız, karşılaştığınız engeller.', zorunlu: false },
          { ad: 'Kanıt', aciklama: 'İlerlemeyi destekleyen doküman veya bağlantı bilgisi.', zorunlu: false },
          { ad: 'Yönetici Yorumu', aciklama: 'Yöneticinizin check-in hakkındaki notu; yönetici tarafından doldurulur.', zorunlu: false },
        ],
        sonuc: 'Check-in kaydedilir, kartta "Son Check-in" tarihi ve check-in sayısı güncellenir; yöneticiniz kaydı görebilir.',
      },
      {
        baslik: 'Hedef ilerlemesini güncelleme',
        kim: 'Çalışan',
        sekme: 'Hedeflerim',
        aciklama: 'Anahtar sonucu olmayan (ör. KPI) hedeflerde genel ilerleme yüzdesini doğrudan güncellersiniz. Bağlı üst hedefin ilerlemesi de yeniden hesaplanabilir.',
        adimlar: [
          'Hedeflerim sekmesinde ilgili hedefi bulun.',
          'Detaylar veya Check-in penceresinden ilerleme alanına yeni yüzdeyi girin.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Genel İlerleme (%)', aciklama: 'Hedefin güncel tamamlanma yüzdesi.', zorunlu: true },
        ],
        sonuc: 'Karttaki ilerleme çubuğu ve varsa "Üst Hedefe Ağırlıklı Katkı" değeri güncellenir.',
        notlar: ['Bu işlem yetkinize ve hedefin ayarlarına bağlı olarak görünür.'],
      },
      {
        baslik: 'Anahtar sonuç güncel değerini girme',
        kim: 'Çalışan',
        sekme: 'Hedeflerim',
        aciklama: 'OKR hedeflerinde her anahtar sonucun gerçekleşen (güncel) değerini girersiniz; ilerleme ve ağırlıklı katkı otomatik hesaplanır.',
        adimlar: [
          'Hedeflerim sekmesinde OKR hedefinin anahtar sonuç tablosunu bulun.',
          'Güncellemek istediğiniz anahtar sonucun satırında güncel değeri düzenleyin (Detaylar penceresinden de yapılabilir).',
          'Yeni değeri girip kaydedin.',
        ],
        alanlar: [
          { ad: 'Güncel', aciklama: 'Anahtar sonucun bugünkü gerçekleşen değeri (Birim sütunundaki birimle, ör. 7 rapor).', zorunlu: true },
        ],
        sonuc: 'İlerleme, Ağırlıklı Katkı ve Son Güncelleme sütunları yenilenir; hedefin toplam ilerlemesi yeniden hesaplanır.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },
      {
        baslik: 'Kilometre taşını tamamlandı olarak işaretleme',
        kim: 'Çalışan',
        sekme: 'Hedeflerim',
        aciklama: 'Kilometre taşı tanımlanmış hedeflerde, tamamladığınız aşamayı işaretler, isterseniz kanıt eklersiniz.',
        adimlar: [
          'Hedef kartında Detaylar butonuna tıklayın.',
          'Kilometre taşları listesinde ilgili aşamanın onay kutusunu işaretleyin.',
          'Varsa kanıt dosyasını ekleyip kaydedin.',
        ],
        sonuc: 'Kilometre taşı tamamlandı olarak görünür; işareti kaldırarak geri alabilirsiniz.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },
      {
        baslik: 'Hedef değişiklik talebi (revizyon) oluşturma',
        kim: 'Çalışan',
        sekme: 'Hedeflerim',
        aciklama: 'Hedefin hedef değeri, tarihi, ağırlığı veya anahtar sonuçları gibi bilgilerinde değişiklik gerekiyorsa ya da hedefin iptalini istiyorsanız yöneticinize gerekçeli talep gönderirsiniz.',
        adimlar: [
          'Hedeflerim sekmesinde ilgili hedef kartını bulun.',
          'Kartın altındaki Değişiklik Talebi butonuna tıklayın.',
          'Açılan formda değiştirmek istediğiniz alanı seçin ve yeni değeri yazın (birden fazla alan ekleyebilirsiniz) ya da hedefin iptalini işaretleyin.',
          'Gerekçe alanına değişikliğin nedenini yazın.',
          'Talebi gönderin.',
        ],
        alanlar: [
          { ad: 'Değişecek Alan', aciklama: 'Hedef değeri, bitiş tarihi, ağırlık, açıklama veya bir anahtar sonuç gibi değiştirilmek istenen bilgi.', zorunlu: false },
          { ad: 'Yeni Değer', aciklama: 'Seçilen alan için önerdiğiniz yeni değer.', zorunlu: false },
          { ad: 'Hedefi iptal et', aciklama: 'Hedefin tamamen kaldırılmasını istiyorsanız işaretleyin.', zorunlu: false },
          { ad: 'Gerekçe', aciklama: 'Değişikliğin nedeni (ör. "Müşteri proje kapsamını daralttı").', zorunlu: true },
        ],
        sonuc: 'Talep biriminizin performans onay akışındaki ilk onaylayana düşer ve «Onay bekliyor» durumunda görünür. Onaylanırsa hedef yeni değerlerle güncellenir; reddedilirse hedef olduğu gibi kalır. Değiştirebileceğiniz alanlar biriminizin kurallarına göre sınırlanabilir.',
        notlar: ['Ara Dönem Görüşmelerim sekmesindeki bilgi kutusu da hedef değişiklikleri için bu yolu önerir.'],
      },
      {
        baslik: 'Değişiklik taleplerimi izleme ve iptal etme',
        kim: 'Çalışan',
        sekme: 'Hedeflerim',
        aciklama: 'Gönderdiğiniz hedef değişiklik taleplerinin durumunu görür, henüz karara bağlanmamış bir talebi geri çekersiniz.',
        adimlar: [
          'Hedeflerim sekmesinde ilgili hedefin Değişiklik Talebi veya Detaylar penceresini açın.',
          'Önceki talepleriniz ve durumları (Onay bekliyor, Onaylandı, Reddedildi, İptal edildi) listelenir.',
          'Bekleyen bir talebi geri çekmek için talebin yanındaki iptal butonuna tıklayıp onaylayın.',
        ],
        sonuc: 'İptal edilen talep yöneticinin onay listesinden kalkar; hedefte değişiklik yapılmaz.',
        notlar: ['Yalnız karara bağlanmamış talepler iptal edilebilir.'],
      },

      // ---------- Değerlendirmem ----------
      {
        baslik: 'Aktif değerlendirmemi görüntüleme',
        kim: 'Çalışan',
        sekme: 'Değerlendirmem',
        aciklama: 'Dönemin performans değerlendirmesinin hangi aşamada olduğunu, kaç değerlendiricinin tamamladığını ve genel skorunuzu görürsünüz.',
        adimlar: [
          'Değerlendirmem sekmesini açın.',
          'Aktif Performans Değerlendirmem tablosunda Dönem, Şablon, Durum, İlerleme ve Genel Skor bilgilerini inceleyin.',
          'Ayrıntı için İşlem sütunundaki göz simgesine tıklayın.',
        ],
        sonuc: 'Değerlendirme detayı açılır: kriter bazında puanlar, KPI skorları ve skorun nasıl hesaplandığı (ağırlıklı dağılım) gösterilir.',
        notlar: ['Genel skor, tüm değerlendiriciler tamamlayana kadar "—" olarak görünür.'],
      },
      {
        baslik: 'Öz değerlendirme doldurma ve gönderme',
        kim: 'Çalışan',
        sekme: 'Değerlendirmem',
        aciklama: 'Değerlendirme şablonundaki her kriter için kendinize puan verir ve yorum yazarsınız.',
        adimlar: [
          'Değerlendirmem sekmesinde aktif değerlendirmenin İşlem sütunundaki butona tıklayın.',
          'Her kriter için puanınızı seçin.',
          'Gerekli gördüğünüz kriterlere açıklama yazın (ör. dönem içindeki somut katkılarınız).',
          'İsterseniz taslak olarak kaydedip daha sonra devam edin.',
          'Tüm kriterleri doldurduğunuzda gönderin.',
        ],
        alanlar: [
          { ad: 'Puan', aciklama: 'Her kriter için şablondaki ölçeğe göre puanınız (ör. 1–5).', zorunlu: true },
          { ad: 'Yorum', aciklama: 'Puanınızı destekleyen açıklama.', zorunlu: false },
        ],
        sonuc: 'Öz değerlendirmeniz kaydedilir ve değerlendirme yöneticinize / diğer değerlendiricilere geçer. Durum "Yönetici Değerlendirmesi Sürüyor" gibi bir sonraki aşamaya ilerler; gönderildikten sonra puanlar değiştirilemez.',
      },
      {
        baslik: 'Değerlendirme sonucunu görüntüleme ve onaylama',
        kim: 'Çalışan',
        sekme: 'Değerlendirmem',
        aciklama: 'Değerlendirme tamamlandığında sonucunuzu ve skor kırılımını görür, sonucu gördüğünüzü onaylarsınız.',
        adimlar: [
          'Değerlendirmem sekmesinde değerlendirmenin göz simgesine tıklayın.',
          'Genel skorunuzu, kriter puanlarını ve yönetici yorumlarını inceleyin; «Değerlendirmeni İncele» kutusunda son tarihi, kategori etkisini ve değerlendirici kıyaslamasını görün.',
          'Sonucu kabul ediyorsanız «Onayla» butonuna tıklayın.',
          'Kabul etmiyorsanız aynı kutudaki «İtiraz Et» butonuyla gerekçenizi (en az 10 karakter) yazıp gönderin; itirazı İtirazlarım sekmesinden de açabilirsiniz.',
        ],
        sonuc: 'Onayladığınızda «Değerlendirmeni onayladın. Onay akışı başlatıldı.» mesajı çıkar ve değerlendirme «Onay Bekliyor» durumunda performans onay akışına girer. Süre dolduğunda kutuda «İtiraz süresi doldu» yazar.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },

      // ---------- Ara Dönem Görüşmelerim ----------
      {
        baslik: 'Ara dönem görüşmelerimi görüntüleme',
        kim: 'Çalışan',
        sekme: 'Ara Dönem Görüşmelerim',
        aciklama: 'Yöneticinizin sizinle yaptığı ara dönem görüşmesinin notlarını, geri bildirimleri ve kararlaştırılan aksiyonları görürsünüz.',
        adimlar: [
          'Ara Dönem Görüşmelerim sekmesini açın.',
          'Listede Dönem, Görüşme Tarihi, Yönetici ve Açık Aksiyon (ör. 1 / 3) bilgilerini inceleyin.',
          'Ayrıntı için İşlemler sütunundaki göz simgesine tıklayın.',
          'Açılan pencerede ilerleme notu, geri bildirim, engeller, destek ihtiyaçları, hedef revizyon notu ve aksiyon maddelerini okuyun.',
        ],
        sonuc: 'Görüşmenin ayrıntıları görüntülenir. Açık Aksiyon sütunu tamamlanmamış aksiyon sayısını gösterir.',
        notlar: ['Görüşme kaydını yöneticiniz oluşturur; siz görüntülersiniz.'],
      },
      {
        baslik: 'Ara dönem görüşmesine çalışan yorumu ekleme',
        kim: 'Çalışan',
        sekme: 'Ara Dönem Görüşmelerim',
        aciklama: 'Görüşme kaydına kendi görüşlerinizi ekler, size atanan aksiyon maddelerini tamamlandı olarak işaretlersiniz.',
        adimlar: [
          'Ara Dönem Görüşmelerim sekmesinde ilgili görüşmenin göz simgesine tıklayın.',
          'Çalışan yorumu alanına görüşlerinizi yazın.',
          'Tamamladığınız aksiyon maddelerini işaretleyin.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'Çalışan Yorumu', aciklama: 'Görüşmeyle ilgili sizin notlarınız.', zorunlu: false },
          { ad: 'Aksiyon Maddeleri', aciklama: 'Açıklama, son tarih, sorumlu ve tamamlandı bilgisi.', zorunlu: false },
        ],
        sonuc: 'Yorumunuz görüşme kaydına eklenir, Açık Aksiyon sayısı güncellenir.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },
      {
        baslik: 'Görüşmeden hedeflere geçiş',
        kim: 'Çalışan',
        sekme: 'Ara Dönem Görüşmelerim',
        aciklama: 'Görüşmede hedef değişikliği konuşulduysa hızlıca hedeflerinize dönüp değişiklik talebi açarsınız.',
        adimlar: [
          'Ara Dönem Görüşmelerim sekmesinde sağ üstteki Hedeflerime Git butonuna tıklayın.',
          'Hedeflerim sekmesinde ilgili hedefin Değişiklik Talebi butonunu kullanın.',
        ],
        sonuc: 'Hedeflerim sekmesine geçilir.',
      },

      // ---------- Yönetici Değerlendirmelerim ----------
      {
        baslik: 'Ekibimin değerlendirmelerini puanlama',
        kim: 'Yönetici',
        sekme: 'Yönetici Değerlendirmelerim',
        aciklama: 'Yöneticisi olduğunuz çalışanların değerlendirmelerinde yönetici puanlarını girersiniz. Sekme yalnız bekleyen değerlendirme olduğunda dolu görünür.',
        adimlar: [
          'Yönetici Değerlendirmelerim sekmesini açın; skorlamanız gereken değerlendirmeler listelenir.',
          'İlgili çalışanın değerlendirmesini açın.',
          'Çalışanın öz değerlendirmesini inceleyin, her kriter için puan ve yorum girin.',
          'Gerekirse KPI skorlarını gerekçe yazarak düzeltin.',
          'Taslak olarak kaydedin veya tamamlayıp gönderin.',
        ],
        alanlar: [
          { ad: 'Puan', aciklama: 'Her kriter için yönetici puanı.', zorunlu: true },
          { ad: 'Yorum', aciklama: 'Puanın gerekçesi, geri bildirim.', zorunlu: false },
          { ad: 'KPI Düzeltme Puanı', aciklama: 'Otomatik hesaplanan KPI skorunu değiştirmek istediğinizde yeni puan.', zorunlu: false },
          { ad: 'Düzeltme Gerekçesi', aciklama: 'KPI puanını neden değiştirdiğiniz.', zorunlu: false },
        ],
        sonuc: 'Gönderilen değerlendirme bir sonraki aşamaya (onay / sonuç) geçer; genel skor hesaplanır ve çalışan sonucu Değerlendirmem sekmesinde görür.',
        notlar: ['Yönetici olmayan çalışanlarda bu sekmede "Şu an skorlamanız gereken bir değerlendirme yok." yazar.'],
      },

      // ---------- Atanan Değerlendirmeler ----------
      {
        baslik: 'Bana atanan (360 derece) değerlendirmeyi doldurma',
        kim: 'Çalışan',
        sekme: 'Atanan Değerlendirmeler',
        aciklama: 'Bir çalışma arkadaşınız için değerlendirici olarak atandıysanız onun değerlendirmesini bu sekmeden puanlarsınız.',
        adimlar: [
          'Atanan Değerlendirmeler sekmesini açın; bekleyen değerlendirmeler listelenir.',
          'Değerlendireceğiniz kişinin satırını açın.',
          'Her kriter için puan verin ve kısa yorum yazın.',
          'İsterseniz taslak olarak kaydedin; hazır olduğunuzda gönderin.',
        ],
        alanlar: [
          { ad: 'Puan', aciklama: 'Her kriter için puanınız.', zorunlu: true },
          { ad: 'Yorum', aciklama: 'Gözlemleriniz ve örnekler.', zorunlu: false },
        ],
        sonuc: 'Değerlendirmeniz kaydedilir, kayıt listeden kalkar. Değerlendirilen kişinin İlerleme sütunundaki tamamlanan değerlendirici sayısı artar.',
        notlar: ['Bekleyen değerlendirme yoksa "Şu an size atanmış bekleyen değerlendirme yok." yazar.'],
      },

      // ---------- Rozetlerim ----------
      {
        baslik: 'Rozetlerimi ve takdir puanımı görüntüleme',
        kim: 'Çalışan',
        sekme: 'Rozetlerim',
        aciklama: 'Size gönderilen takdirleri (ör. Takım Oyuncusu, Müşteri Kahramanı) ve toplam takdir puanınızı görürsünüz.',
        adimlar: [
          'Rozetlerim sekmesini açın.',
          'Üstteki Toplam Puan kutusunda biriken puanınızı görün.',
          'Rozet kartlarında rozet adı, puan, takdir mesajı, gönderen ve tarihi okuyun.',
        ],
        sonuc: 'Aldığınız tüm onaylı takdirler listelenir.',
      },
      {
        baslik: 'Çalışma arkadaşına takdir (rozet) gönderme',
        kim: 'Çalışan',
        sekme: 'Rozetlerim',
        aciklama: 'Bir çalışma arkadaşınızın katkısını rozet ve mesajla takdir edersiniz.',
        adimlar: [
          'Takdir gönderme butonuna tıklayın.',
          'Takdir edeceğiniz çalışanı seçin.',
          'Rozet türünü seçin (ör. Takım Oyuncusu).',
          'Takdir mesajınızı yazın; isterseniz isimsiz gönderimi işaretleyin.',
          'Gönderin.',
        ],
        alanlar: [
          { ad: 'Çalışan', aciklama: 'Takdir edilecek kişi.', zorunlu: true },
          { ad: 'Rozet Türü', aciklama: 'Şirketinizde tanımlı takdir türlerinden biri; her türün puanı farklıdır.', zorunlu: true },
          { ad: 'Mesaj', aciklama: 'Takdirin nedeni (ör. "Sunumdaki net anlatımın için teşekkürler").', zorunlu: true },
          { ad: 'İsimsiz gönder', aciklama: 'İşaretlenirse adınız gösterilmez.', zorunlu: false },
        ],
        sonuc: 'Takdir, biriminizin kuralına göre doğrudan yayınlanır ya da «Takdir onayı gerekli» açıksa kuralda seçilen onaylayana düşer ve «Onay Bekliyor» durumunda bekler; bu sürede akışta, rozetlerde ve puan toplamında görünmez. Onaylandığında alıcının Rozetlerim sekmesinde görünür ve puanı eklenir.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },

      // ---------- Yetkinlik Açığım ----------
      {
        baslik: 'Yetkinlik açığımı görüntüleme',
        kim: 'Çalışan',
        sekme: 'Yetkinlik Açığım',
        aciklama: 'Pozisyonunuz için beklenen yetkinlik seviyeleri ile değerlendirilen gerçek seviyelerinizi karşılaştırırsınız.',
        adimlar: [
          'Yetkinlik Açığım sekmesini açın.',
          'İsterseniz "Dönem seçin (opsiyonel)" kutusundan bir dönem seçin.',
          'Özet kutularında Toplam Yetkinlik, Karşıladığım, Gelişmem Gerekenler ve Değerlendirme Bekleyen sayılarını görün.',
          'Grafikte ve tabloda her yetkinliğin Beklenen Seviye, Gerçek Seviye ve Açık değerlerini inceleyin.',
        ],
        sonuc: 'Açık bulunan yetkinlikler belirginleşir. Henüz değerlendirilmemiş yetkinliklerde "Değerlendirme bekleniyor" yazar.',
      },
      {
        baslik: 'Yetkinlik öz değerlendirmesi yapma',
        kim: 'Çalışan',
        sekme: 'Yetkinlik Açığım',
        aciklama: 'Dönem için her yetkinlikte kendi seviyenizi işaretler, yorum eklersiniz.',
        adimlar: [
          'Yetkinlik değerlendirme formunu açın ve dönemi seçin.',
          'Her yetkinlik için gerçek seviyenizi seçin, gerekirse yorum yazın.',
          'Genel yorum ekleyin.',
          'Taslak olarak kaydedin veya gönderin.',
        ],
        alanlar: [
          { ad: 'Dönem', aciklama: 'Değerlendirmenin ait olduğu performans dönemi.', zorunlu: true },
          { ad: 'Gerçek Seviye', aciklama: 'Her yetkinlik için 1–5 arası seviye.', zorunlu: false },
          { ad: 'Yorum', aciklama: 'Yetkinlik bazında açıklama.', zorunlu: false },
          { ad: 'Genel Yorum', aciklama: 'Tüm değerlendirme için genel not.', zorunlu: false },
        ],
        sonuc: 'Gönderilen seviyeler Gerçek Seviye sütununa yansır ve açık hesaplanır.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },
      {
        baslik: 'Gelişim önerilerini görme',
        kim: 'Çalışan',
        sekme: 'Yetkinlik Açığım',
        aciklama: 'Açığı bulunan yetkinlikler için sistemin önerdiği eğitimleri görürsünüz.',
        adimlar: [
          'Yetkinlik Açığım sekmesinde Gelişim Önerilerimi Gör butonuna tıklayın.',
          'Eğitimlerim sayfasının öneriler sekmesi açılır; açığınıza uygun eğitimler burada listelenir.',
        ],
        sonuc: 'Yetkinlik açığınıza uygun eğitim önerileri gösterilir.',
      },

      // ---------- İtirazlarım ----------
      {
        baslik: 'Değerlendirme sonucuna itiraz etme',
        kim: 'Çalışan',
        sekme: 'İtirazlarım',
        aciklama: 'İtiraz penceresi açık olan bir değerlendirmenin sonucuna gerekçeli itiraz gönderirsiniz.',
        adimlar: [
          'İtirazlarım sekmesini açın.',
          '"Bir değerlendirme seçin" kutusundan itiraz etmek istediğiniz değerlendirmeyi seçin.',
          'Yeni İtiraz Et butonuna tıklayın.',
          'İtiraz gerekçenizi ayrıntılı yazın (hangi kriter, neden).',
          'Gönderin.',
        ],
        alanlar: [
          { ad: 'Değerlendirme', aciklama: 'İtiraz edilen dönem değerlendirmesi.', zorunlu: true },
          { ad: 'İtiraz Gerekçesi', aciklama: 'Sonuca neden katılmadığınızın açıklaması.', zorunlu: true },
        ],
        sonuc: 'İtiraz, değerlendirmenizin onay akışındaki yetkililere iletilir ve listede «Gönderildi» durumunda görünür; incelemeye alındığında «İncelemede» olur. Karar verildiğinde durum «Kabul Edildi» veya «Reddedildi» olur, Çözüm Tarihi ve Çözüm Açıklaması dolar.',
        notlar: [
          'Yalnız durumu "İtiraz Penceresi Açık" olan değerlendirmelere, pencere süresi içinde itiraz edilebilir.',
          'İtirazın hangi puanları kapsayabileceği şirket ayarlarına göre sınırlanabilir.',
        ],
      },
      {
        baslik: 'İtirazlarımı izleme',
        kim: 'Çalışan',
        sekme: 'İtirazlarım',
        aciklama: 'Açtığınız itirazların durumunu ve kararını görürsünüz.',
        adimlar: [
          'İtirazlarım sekmesini açın.',
          'Tabloda Dönem, Skor, İtiraz Tarihi, Durum ve Çözüm Tarihi sütunlarını inceleyin.',
          'Ayrıntı ve karar notu için Aksiyon sütunundaki butona tıklayın.',
        ],
        sonuc: 'İtirazın ayrıntıları ve verilen karar gösterilir.',
        notlar: ['Henüz itiraz açmadıysanız "Henüz itiraz açmadın." yazar.'],
      },

      // ---------- Kariyer Beyanım ----------
      {
        baslik: 'Kariyer ve mobilite beyanı doldurma',
        kim: 'Çalışan',
        sekme: 'Kariyer Beyanım',
        aciklama: 'Kariyer hedefinizi, ilgilendiğiniz rolleri ve yer değişikliği tercihinizi paylaşırsınız. Bu beyan puanlama değildir; yedekleme ve kariyer planlamasında bağlam olarak kullanılır.',
        adimlar: [
          'Kariyer Beyanım sekmesini açın; beyan, üstte yazan dönem için doldurulur.',
          'Kariyer Hedefim alanına uzun vadeli hedefinizi yazın.',
          'Hedeflediğim Rol / Alan, Yer Değişikliği Tercihi ve Hazır Olma Süresi (ay) alanlarını doldurun.',
          'Gelişmek İstediğim Alanlar kutusuna gelişim isteklerinizi yazın.',
          'Kaydet butonuna tıklayın.',
        ],
        alanlar: [
          { ad: 'Kariyer Hedefim', aciklama: 'En fazla 4000 karakter.', zorunlu: false },
          { ad: 'Hedeflediğim Rol / Alan', aciklama: 'İlgilendiğiniz pozisyon veya alan (ör. Kıdemli İş Analisti).', zorunlu: false },
          { ad: 'Yer Değişikliği Tercihi', aciklama: 'Ör. "Yer değişikliği düşünmüyorum", "Aynı lokasyonda farklı rol".', zorunlu: true },
          { ad: 'Hazır Olma Süresi', aciklama: 'Yeni role kaç ay içinde hazır olacağınız.', zorunlu: false },
          { ad: 'Gelişmek İstediğim Alanlar', aciklama: 'En fazla 4000 karakter.', zorunlu: false },
        ],
        sonuc: 'Beyan kaydedilir, "Son güncelleme" tarihi yenilenir. Yöneticiniz ve İK yetenek planlamasında bu bilgiyi görebilir; potansiyel skorunuzu etkilemez.',
        notlar: ['Beyanı dönem içinde istediğiniz kadar güncelleyebilirsiniz.'],
      },

      // ---------- Gelişim Aksiyonlarım ----------
      {
        baslik: 'Gelişim aksiyonlarımı görüntüleme',
        kim: 'Çalışan',
        sekme: 'Gelişim Aksiyonlarım',
        aciklama: 'Sizin için açılan gelişim aksiyonlarını (gelişim planı, PIP, mentorluk vb.) ve adımlarını görürsünüz.',
        adimlar: [
          'Gelişim Aksiyonlarım sekmesini açın.',
          'Aksiyonlarım listesinde aksiyon adı, türü, durumu (ör. Yürütülüyor), sorumlu, hedef tarih ve ilerleme yüzdesini görün.',
          'Ayrıntı için Detaylar butonuna tıklayın.',
        ],
        sonuc: 'Aksiyonun adımları, hedefleri ve geçmiş ilerleme kayıtları gösterilir.',
      },
      {
        baslik: 'Gelişim aksiyonuna ilerleme girme',
        kim: 'Çalışan',
        sekme: 'Gelişim Aksiyonlarım',
        aciklama: 'Aksiyondaki ilerlemenizi yüzde, not ve kanıtla bildirirsiniz.',
        adimlar: [
          'Gelişim Aksiyonlarım sekmesinde ilgili aksiyonun Detaylar butonuna tıklayın.',
          'İlerleme ekleme bölümünde yüzdeyi girin.',
          'Not ve varsa kanıt bilgisini yazın.',
          'Kaydedin.',
        ],
        alanlar: [
          { ad: 'İlerleme (%)', aciklama: 'Aksiyonun güncel tamamlanma yüzdesi.', zorunlu: false },
          { ad: 'Not', aciklama: 'Yaptığınız çalışmalar.', zorunlu: false },
          { ad: 'Kanıt', aciklama: 'Destekleyici doküman veya bağlantı bilgisi.', zorunlu: false },
        ],
        sonuc: 'İlerleme kaydedilir, listedeki yüzde güncellenir; aksiyonun sorumlusu kaydı görür.',
      },
      {
        baslik: 'Performans geliştirme planına (PIP) check-in yapma',
        kim: 'Çalışan',
        sekme: 'Gelişim Aksiyonlarım',
        aciklama: 'PIP türündeki aksiyonlarda düzenli ilerleme görüşmesi kaydına kendi notunuzu eklersiniz.',
        adimlar: [
          'PIP etiketli aksiyonun Detaylar butonuna tıklayın.',
          'Check-in bölümünde tarih ve ilerleme yüzdesini girin.',
          'Çalışan notunuzu yazın ve kaydedin.',
        ],
        alanlar: [
          { ad: 'Check-in Tarihi', aciklama: 'Görüşme / bildirim tarihi.', zorunlu: true },
          { ad: 'İlerleme (%)', aciklama: 'Plandaki ilerlemeniz.', zorunlu: false },
          { ad: 'Çalışan Notu', aciklama: 'Kendi değerlendirmeniz.', zorunlu: false },
        ],
        sonuc: 'Check-in plana eklenir; yöneticiniz kendi notunu ekleyebilir ve planın uzatılmasına ya da kapatılmasına karar verir.',
        notlar: ['Bu işlem yetkinize bağlı olarak görünür.'],
      },

    ],

    sss: [
      {
        soru: 'Hedefimin hedef değerini veya tarihini kendim değiştirebilir miyim?',
        cevap: 'Hayır. Hedef kartındaki Değişiklik Talebi butonuyla gerekçeli talep gönderirsiniz; değişiklik yöneticiniz onayladığında uygulanır.',
      },
      {
        soru: 'Check-in ile anahtar sonuç güncellemesi arasındaki fark nedir?',
        cevap: 'Anahtar sonuç güncellemesi, ölçülen değeri (ör. otomatiğe taşınan rapor sayısı) girer ve ilerlemeyi hesaplatır. Check-in ise dönemsel ilerleme bildiriminizdir; yorum ve kanıt içerir, yöneticinizle iletişim kaydı olarak tutulur.',
      },
      {
        soru: 'Öz değerlendirmemi gönderdikten sonra düzeltebilir miyim?',
        cevap: 'Gönderilen öz değerlendirme değiştirilemez. Göndermeden önce taslak olarak kaydedip daha sonra devam edebilirsiniz.',
      },
      {
        soru: 'Yeni İtiraz Et butonu neden pasif?',
        cevap: 'İtiraz yalnız durumu "İtiraz Penceresi Açık" olan değerlendirmelere ve pencere süresi içinde açılabilir. Önce "Bir değerlendirme seçin" kutusundan değerlendirmeyi seçmeniz gerekir.',
      },
      {
        soru: 'Kariyer beyanım performans skorumu etkiler mi?',
        cevap: 'Hayır. Beyan puanlama değildir; yalnız yedekleme ve kariyer planlamasında bağlam olarak kullanılır.',
      },
      {
        soru: 'Yönetici Değerlendirmelerim sekmesi neden boş?',
        cevap: 'Bu sekme yalnız ekibinizde puanlamanız gereken bir değerlendirme olduğunda dolar. Yönetici değilseniz veya bekleyen değerlendirme yoksa boş görünür.',
      },
    ],

    ipuclari: [
      'Check-in\'leri düzenli yapın; "Son Check-in" tarihi yöneticinizin ilerlemenizi takip ettiği ilk bilgidir.',
      'Riskli veya Geride görünen anahtar sonuçlar için check-in yorumunda engelleri açıkça yazın.',
      'Öz değerlendirmede puanlarınızı somut örneklerle destekleyin; itiraz sürecinde de bu açıklamalar dikkate alınır.',
      'Sığmayan sekmelere sekme çubuğunun sağındaki üç nokta ile ulaşabilirsiniz.',
    ],
  },
]
