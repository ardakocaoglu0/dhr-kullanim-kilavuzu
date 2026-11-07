// Sık sorulan sorular: Zimmet Yönetimi, Stok Yönetimi, Zimmetlerim, Görev Yönetimi, Görevlerim

export default {
  // ───────────────────────────── ZİMMET YÖNETİMİ ─────────────────────────────
  'zimmet-yonetimi': [
    {
      soru: 'Zimmet Yönetimi sayfasını menüde neden göremiyorum?',
      cevap:
        'Sayfa yalnız yöneticilere ve zimmet onay zincirinde yer alan kişilere açılır. Ekibiniz olduğu hâlde göremiyorsanız İK\'ya danışın.',
    },
    {
      soru: '"Bu modülde görüntüleyebileceğiniz bir sekme yok." uyarısı alıyorum, ne yapmalıyım?',
      cevap:
        'Hesabınıza sayfadaki sekmelerden hiçbiri için yetki tanımlanmamış demektir. Yetki tanımı için İK\'ya başvurun.',
    },
    {
      soru: 'Ekibimden gelen talep bana neden düşmedi?',
      cevap:
        'Talep, çalışanın birimi için tanımlı zimmet onay akışına göre ilerler. Akışta sizden önce başka bir onaylayan olabilir veya pozisyonunuz akışta yer almıyor olabilir. "Diğer Talepler" sekmesindeki "Mevcut Onaylayan" sütununa bakın.',
    },
    {
      soru: 'Taleplerim ile Diğer Talepler sekmesi arasındaki fark nedir?',
      cevap:
        'Taleplerim sekmesi onay zincirinde sizin adımınızın bulunduğu talepleri gösterir. Diğer Talepler sekmesi ise ekibinizin, onay sırası başka birinde olan veya süreci ilerlemiş taleplerini izlemeniz içindir.',
    },
    {
      soru: '"Yalnızca kendi pozisyonunuza atanmış onaylar üzerinde işlem yapabilirsiniz" uyarısı ne anlama geliyor?',
      cevap:
        'Karar vermeye çalıştığınız onay adımı sizin pozisyonunuza değil başka bir pozisyona aittir. "Mevcut Onaylayan" sütunundan talebin kimde beklediğini kontrol edin.',
    },
    {
      soru: '"Ekipman talebi onaylanamadı" veya "Ekipman talebi reddedilemedi" uyarısı aldım, ne yapmalıyım?',
      cevap:
        'Sayfayı yenileyip talebin hâlâ "Beklemede" ve sırasının sizde olduğunu kontrol edin; başka bir onaylayan karar vermiş olabilir. Sorun sürerse İK\'ya bildirin.',
    },
    {
      soru: 'Reddederken açıklama yazmak zorunlu mu?',
      cevap:
        'Ret penceresindeki açıklama alanı formda zorunlu işaretli değilse boş bırakılabilir. Yine de çalışanın yeni talebini doğru açabilmesi için gerekçe yazmanız önerilir.',
    },
    {
      soru: 'Yanlışlıkla onayladığım veya reddettiğim talebi geri alabilir miyim?',
      cevap:
        'Verilen kararı sayfadan geri alma seçeneği yoktur. Yanlış onayda talep stok birimine geçmişse stok yöneticisiyle görüşün; yanlış retten sonra çalışanın yeni talep açması gerekir.',
    },
    {
      soru: 'Talep onaylandıktan sonra ürünü kim teslim eder?',
      cevap:
        'Son onaydan sonra talep, kategorinin bağlı olduğu stok biriminin Stok Talepleri listesine düşer. Ürünü o birimin stok yöneticisi seçip çalışana teslim eder.',
    },
    {
      soru: 'Onay zincirinde kaç kişi olduğunu ve talebin hangi adımda olduğunu nasıl görürüm?',
      cevap:
        'Talebin Detaylar (göz) butonuna tıklayın. Açılan pencerede onay adımları, her adımdaki onaylayan, karar ve tarih ile "Sırası Gelmedi" adımlar listelenir.',
    },
    {
      soru: 'Havuz talebini onaylamadan önce aracın müsait olduğunu nasıl kontrol ederim?',
      cevap:
        'Satırdaki takvim simgesine (Havuz Takvimi) tıklayın. Takvimde ürünün o tarihlerde Müsait, Dolu, Onay Bekliyor veya Bakımda / Kullanım Dışı olduğu renklerle gösterilir.',
    },
    {
      soru: 'Havuz talebini onayladığımda araç kesin olarak ayrılmış olur mu?',
      cevap:
        'Hayır. Onayınız talebi bir sonraki adıma taşır; kesin ürün tahsisini ve teslimi stok yöneticisi yapar. Çalışanın seçtiği "Tercih Edilen Ürün" bağlayıcı değildir.',
    },
    {
      soru: 'Toplu İşlem butonuyla bazı talepleri neden seçemiyorum?',
      cevap:
        'Toplu işlemde yalnız sizin onayınızı bekleyen talepler seçilebilir. Onay sırası başka birinde olan veya sonuçlanmış talepler listeye alınmaz.',
    },
    {
      soru: 'Talebe bıraktığım yorumu çalışan görür mü?',
      cevap:
        'Yorum eklerken görünürlüğü siz seçersiniz: talep sahibine de gösterebilir veya yalnız yetkililere açık bırakabilirsiniz. Kendi yorumunuzu silme simgesiyle kaldırabilirsiniz.',
    },
    {
      soru: 'Onayımı bekleyen yeni bir zimmet talebi geldiğinde bildirim alır mıyım?',
      cevap:
        'Evet, "Onayımı bekleyen zimmet talepleri" bildirimi açıksa haberdar edilirsiniz. Bu bildirimi bildirim tercihlerinizden açıp kapatabilirsiniz.',
    },
    {
      soru: 'Ekip Zimmetleri sekmesinde bazı çalışanlar neden yok?',
      cevap:
        'Liste ve raporlar yalnız birim yetkiniz olan çalışanları kapsar. "Birime göre filtrele" seçimini de kontrol edin; başka birimdeki çalışanlar için İK\'ya danışın.',
    },
    {
      soru: 'Ekip Zimmetleri sekmesindeki Ticket ve Talep sayıları neyi gösterir?',
      cevap:
        'Ticket sütunu çalışanın zimmetindeki ürünler için açtığı arıza kayıtlarını, Talep sütunu ise açtığı ekipman taleplerini sayar. Ayrıntı penceresinde açık ticket ve bekleyen talep ayrıca görünür.',
    },
    {
      soru: 'Bir çalışanın üzerindeki ürünlerin seri numaralarını nasıl görürüm?',
      cevap:
        'Ekip Zimmetleri sekmesinde çalışanın satırındaki İşlemler butonuna tıklayın. Zimmetler sekmesinde ürün, seri numarası, kategori ve zimmet tarihi listelenir.',
    },
    {
      soru: 'Ekip zimmetlerini dışa aktarırken hangi rapor türlerini seçebilirim?',
      cevap:
        '"Zimmet Dökümü" her ürün için bir satır, "Özet Rapor" ise her çalışan için bir satır içerir. Raporlar yalnız birim yetkiniz olan çalışanları kapsar.',
    },
    {
      soru: '"Dışa aktarma işlemi başarısız" uyarısı alıyorum, ne yapmalıyım?',
      cevap:
        'Filtrelerinizi daraltıp (ör. daha kısa tarih aralığı) yeniden deneyin. Sorun sürerse sayfayı yenileyin; devam ederse İK\'ya bildirin.',
    },
    {
      soru: 'Yeni başlayan bir çalışan için onay beklemeden nasıl ekipman isterim?',
      cevap:
        'Ekip Zimmetleri sekmesinden çalışan adına onaysız ekipman talebi açabilirsiniz; talep doğrudan stok birimine düşer. Bu seçenek yetkinize bağlı olarak görünür.',
    },
    {
      soru: 'Onaysız ekipman talebi açarken "Lütfen miktar giriniz" veya "Lütfen kategori seçiniz" uyarısı alıyorum.',
      cevap:
        'Eklediğiniz her ekipman satırında kategori ve miktar zorunludur. Boş kalan satırları doldurun veya silin, ardından yeniden kaydedin.',
    },
    {
      soru: 'Çalışan talebini iptal ederse ne olur?',
      cevap:
        'İptal edilen talep onay listelerinizden çıkar ve üzerinde karar veremezsiniz. Geçmiş kaydı Diğer Talepler sekmesinde izlenebilir.',
    },
    {
      soru: 'Reddedilen talebin gerekçesini çalışan nerede görür?',
      cevap:
        'Çalışan Zimmetlerim › Ekipman Taleplerim sekmesinde talebin detayını açtığında ret açıklamanızı onay adımlarında görür.',
    },
    {
      soru: 'Üstteki sayaç kartları neden listeyle uyuşmuyor?',
      cevap:
        'Kartlar arama ve departman filtrelerine göre güncellenir. Sayıları tüm talepler için görmek isterseniz "Filtreleri Temizle" butonuna tıklayın.',
    },
    {
      soru: 'Zimmet Yönetimi sayfasını telefondan kullanabilir miyim?',
      cevap:
        'Sayfa telefon tarayıcısından da açılır ve onay işlemleri aynı şekilde yapılır. Geniş tablolar için yatay kaydırma gerekebilir.',
    },
  ],

  // ───────────────────────────── STOK YÖNETİMİ ─────────────────────────────
  'stok-yonetimi': [
    {
      soru: 'Stok Yönetimi sayfasını neden göremiyorum?',
      cevap:
        'Sayfa yalnız stok yöneticisi olarak tanımlı pozisyonlara açılır. Bir birimin stoğunu yönetmeniz gerekiyorsa İK\'dan pozisyonunuzun stok yöneticisi olarak eklenmesini isteyin.',
    },
    {
      soru: 'Sağ üstteki birim listesinde neden yalnız bazı birimler var?',
      cevap:
        'Listede yalnız stok yetkiniz olan birimler görünür. Başka bir birimin stoğunu da yönetmeniz gerekiyorsa İK\'ya danışın.',
    },
    {
      soru: 'Yeni ürün eklerken hangi alanlar zorunludur?',
      cevap:
        'Formda yıldızla işaretli alanlar zorunludur; genellikle kategori, marka, model, ilk durum (kondisyon), kayıt tarihi ve kaynak türüdür. Uyarı aldığınız alanı doldurup yeniden kaydedin.',
    },
    {
      soru: '"Lütfen firma adını girin" uyarısı alıyorum, neden?',
      cevap:
        'Seçtiğiniz kaynak türü için ürünün geldiği firma adı istenir. "Kaynak Firma" alanını doldurun.',
    },
    {
      soru: 'Ürünü eklerken doğrudan bir çalışana verebilir miyim?',
      cevap:
        'Evet, ürün eklerken "Atanan Çalışan" alanından kişiyi seçebilirsiniz. Bu durumda çalışan seçimi zorunlu olur; "Lütfen bir çalışan seçin" uyarısı alırsanız çalışanı seçin.',
    },
    {
      soru: '"Cihaz atanabilmesi için \'Kullanılabilir\' durumda olmalı" uyarısı alıyorum.',
      cevap:
        'Atama yalnız Kullanılabilir durumdaki ürünlerde yapılır. Ürün atanmış, bakımda veya kullanım dışıysa önce iade alın ya da bakımdan döndürün.',
    },
    {
      soru: '"Cihaz bakıma alınabilmesi için Kullanılabilir, Kullanım Dışı veya Atanmış olmalı" uyarısı ne demek?',
      cevap:
        'Ürün şu anda teslim veya iade bekliyor gibi bir ara durumdadır. Önce o işlemi tamamlayın, ardından bakıma alın.',
    },
    {
      soru: '"Cihaz zaten tamir sürecinde" uyarısı alıyorum, ne yapmalıyım?',
      cevap:
        'Ürün için açık bir bakım kaydı vardır. Yeni bir tamir başlatmadan önce mevcut bakımı Malzeme İşlemleri menüsünden sonuçlandırın.',
    },
    {
      soru: '"Kişisel cihazda bu işlem yapılamaz" uyarısının anlamı nedir?',
      cevap:
        'Kişisel cihaz olarak kaydedilen ürünler şirket stoğunun parçası değildir; havuza eklenemez, havuzdan teslim edilemez ve bazı malzeme işlemleri uygulanamaz.',
    },
    {
      soru: 'Kişisel cihazın kaydını kapatırsam ne olur?',
      cevap:
        'Cihaz çalışanın üzerinden düşer, şirket stoğuna girmez ve kayıt bir daha açılamaz. İşlemi onaylamadan önce bilgileri kontrol edin.',
    },
    {
      soru: 'Ürün durumlarındaki "Teslim Bekleniyor", "İade Bekleniyor" ve "Tamir Sonrası Teslim Bekleniyor" ne anlama gelir?',
      cevap:
        'Bunlar ara durumlardır: ürün çalışana verilmek, çalışandan geri alınmak veya tamirden sonra yeniden verilmek üzere bekliyordur. İşlem tamamlanınca ürün Atanmış veya Kullanılabilir olur.',
    },
    {
      soru: 'Kategoriyi silmeye çalışınca "Bu kategoriye bağlı aktif ürünler bulunmaktadır" uyarısı alıyorum.',
      cevap:
        'İçinde ürün olan kategori silinmez. Önce ürünleri başka kategoriye taşıyın veya silin, ardından kategoriyi silin.',
    },
    {
      soru: 'Bir kategoriyi havuza (ortak kullanıma) nasıl açarım?',
      cevap:
        'Kategoriler alt sekmesinde kategoriyi düzenleyin, havuz seçeneğini açın ve havuz erişimi alanından talep edebilecek birim veya çalışanları seçin. Kaydedince Havuz sütununda "Açık" görünür.',
    },
    {
      soru: 'Çalışanlar havuz kategorisini neden göremiyor?',
      cevap:
        'Havuzdan yalnız havuz erişimi verilen birim ve çalışanlar talep açabilir. Kategorinin havuz erişimi ayarını kontrol edin.',
    },
    {
      soru: 'Hatırlatma alanı kaydederken "Hatırlatma için en az bir alıcı seçin" uyarısı alıyorum.',
      cevap:
        'Her hatırlatma alanı için en az bir alıcı gerekir: Zimmetli çalışan, Zimmetli çalışanın yöneticisi, Stok sorumluları veya ek alıcılardan birini seçin.',
    },
    {
      soru: '"Aynı adda birden fazla hatırlatıcı alan olamaz" uyarısı neden çıkıyor?',
      cevap:
        'Aynı kategoride iki hatırlatma alanına aynı adı verdiniz. Alanlardan birinin adını değiştirin (ör. "Sigorta Bitişi" ve "Kasko Bitişi").',
    },
    {
      soru: 'Hatırlatmalar kime ve nasıl gönderilir?',
      cevap:
        'Ürüne girilen tarih yaklaştığında, alanda seçtiğiniz kişilere duyuru ve e-posta gönderilir. Uyarı zamanını tarihten önce, tam o gün veya sonra olarak gün sayısıyla belirlersiniz.',
    },
    {
      soru: 'Stok talebini üstlenmek ile teslim etmek arasındaki fark nedir?',
      cevap:
        'Üstlenmek (atama) talebi kendinize veya bir stok yöneticisine verir ve "Bana Atananlar" listesine taşır. Teslim ise stoktan ürün seçip çalışana zimmetlemektir.',
    },
    {
      soru: '"Kendinize transfer edemezsiniz" uyarısı alıyorum.',
      cevap:
        'Yöneticiye aktarma işleminde kendi pozisyonunuzu hedef seçtiniz. Talebi başka bir stok yöneticisine aktarın veya üzerinizde tutup işleme alın.',
    },
    {
      soru: '"Hedef pozisyon bu birim için stok yöneticisi değil" uyarısı ne anlama geliyor?',
      cevap:
        'Talebi aktarmak istediğiniz kişi seçilen birimde stok yöneticisi olarak tanımlı değildir. Listeden o birimin stok yöneticilerinden birini seçin.',
    },
    {
      soru: '"Ticket zaten bu birime atanmış" uyarısı alıyorum.',
      cevap:
        'Ticketı zaten bulunduğu birime aktarmaya çalışıyorsunuz. Farklı bir hedef birim seçin.',
    },
    {
      soru: 'Talebi tamamlarken "Talebi tamamlamak için tüm ürünlerin Atandı durumunda olması gerekir" uyarısı alıyorum.',
      cevap:
        'Talep için teslim ettiğiniz ürünlerden en az biri hâlâ teslim bekliyor. Çalışan teslimi onaylayınca veya teslim durumu güncellenince talebi tamamlayabilirsiniz.',
    },
    {
      soru: 'Talebi tamamladıktan sonra aynı talebe ürün ekleyebilir miyim?',
      cevap:
        'Hayır. Tamamlanan talep özelinde çalışana daha fazla ürün tanımlanamaz; ek ihtiyaç için yeni talep açılması gerekir.',
    },
    {
      soru: 'Teslim ettiğim ürünleri olan bir talebi reddedersem ne olur?',
      cevap:
        '"Teslim Bekleniyor" durumundaki ürünlerin teslimi iptal edilir; çalışana atanmış ürünler değişmez. Ret gerekçesini yazmanız istenir.',
    },
    {
      soru: 'Stok talebini reddederken "Lütfen reddetme sebebini girin" uyarısı alıyorum.',
      cevap:
        'Stok talebi reddedilirken gerekçe zorunludur. Açıklama alanına ret sebebini yazıp yeniden onaylayın.',
    },
    {
      soru: 'Talebi başka bir stok birimine aktarınca ne olur?',
      cevap:
        'Talep seçtiğiniz birimin Stok Talepleri listesine geçer ve sizin listenizde "Stoka Transfer Edildi" olarak kalır. Bu işlem yetkinize bağlı olarak görünür.',
    },
    {
      soru: 'Çalışandan ek bilgi istemem gerekirse ne yapmalıyım?',
      cevap:
        'Talebi "Talep Edenden Bekleniyor" durumuna alıp açıklamaya sorunuzu yazın veya talebin Mesajlar bölümünden çalışana yazın. Çalışan yanıtını aynı yerden verir.',
    },
    {
      soru: 'Ticket ile stok talebi arasındaki fark nedir?',
      cevap:
        'Stok talebi yeni bir ürün ihtiyacı içindir ve onay zincirinden gelir. Ticket ise çalışanın zimmetindeki bir ürünle ilgili arıza veya sorun kaydıdır.',
    },
    {
      soru: 'Ticket sonuçlarında hangi durumlar görünür?',
      cevap:
        'Ticket "Ürün Tamir Edildi", "Yeni Ürün Verildi", "Stok Bekleniyor", "Stokta Yok" veya "Reddedildi" gibi sonuçlarla kapanabilir. Çalışan sonucu Ticketlarım sekmesinde görür.',
    },
    {
      soru: 'Satın alma kaydındaki "Girilen" sütunu neden artmıyor?',
      cevap:
        'Gelen ürünleri stoka eklemek tek başına yetmez; ürünleri satın alma kaydının İşlemler sütunundan kayda bağlamanız gerekir. Bağladıkça sayı artar (ör. 1/2).',
    },
    {
      soru: 'Satın alma durumları nelerdir?',
      cevap:
        'Bir satın alma kaydı Beklemede, Sipariş Edildi, Alındı veya İptal Edildi durumlarından birinde olabilir. Durumu kaydın İşlemler sütunundan güncellersiniz.',
    },
    {
      soru: 'Rapor alarmı kaydederken "En az bir pozisyon seçmelisiniz" uyarısı alıyorum.',
      cevap:
        'Raporu alacak en az bir alıcı seçilmelidir. Alıcılar alanından kişi veya pozisyon ekleyip yeniden kaydedin.',
    },
    {
      soru: 'Rapor alarmının e-postasını beklemeden almak istiyorum.',
      cevap:
        'Alarm satırındaki hemen gönder butonuna tıklayın. "Rapor e-postası başarıyla gönderildi" mesajı çıkarsa e-posta alıcılara iletilmiştir.',
    },
    {
      soru: 'Envanter paketi ne işe yarar?',
      cevap:
        'Bir rol için sık verilen ekipman setini (ör. Bilgisayar × 1, Telefon × 1) tek tanımda toplar. İşe giriş gibi durumlarda aynı ekipmanları tek tek seçmeden talep açmayı kolaylaştırır.',
    },
    {
      soru: 'Yeni stok talebi veya mesaj geldiğinde bildirim alır mıyım?',
      cevap:
        '"Onayımı bekleyen stok talepleri" ve "Stok talebinde yeni mesaj" bildirimleri açıksa haberdar edilirsiniz. Bu seçenekleri bildirim tercihlerinizden yönetebilirsiniz.',
    },
  ],

  // ───────────────────────────── ZİMMETLERİM ─────────────────────────────
  zimmetlerim: [
    {
      soru: 'Üzerimde olduğunu bildiğim bir ürün Zimmetler listesinde neden yok?',
      cevap:
        'Ürün size atanmış ama henüz teslim alınmamış olabilir; Teslim/İade sekmesinde "Teslim Bekliyor" olarak görünür. Orada da yoksa stok yöneticisiyle görüşün.',
    },
    {
      soru: 'Ekipman talebinde hangi alanlar zorunludur?',
      cevap:
        'Kategori ve açıklama doldurulmalıdır; miktar girerseniz en az 1 olmalıdır. "Lütfen bir kategori seçin" veya "Lütfen bir açıklama girin" uyarısı alırsanız ilgili alanı doldurun.',
    },
    {
      soru: '"Miktar en az 1 olmalıdır" uyarısı alıyorum.',
      cevap: 'Miktar alanına 0 veya negatif bir değer girdiniz. En az 1 yazın ya da alanı boş bırakın.',
    },
    {
      soru: 'Ekipman Talep Et penceresinde istediğim kategori neden yok?',
      cevap:
        'Yalnız talep açmanıza izin verilen kategoriler listelenir. İhtiyacınız olan kategori görünmüyorsa yöneticinize danışın.',
    },
    {
      soru: 'Havuzdan talep ederken hangi alanlar zorunludur?',
      cevap:
        'Kategori, kullanım aralığı (başlangıç ve bitiş tarih/saati) ve kullanım amacı zorunludur. "Ek Sürücü Var mı?" seçeneğini işaretlediyseniz ek sürücüyü de seçmeniz gerekir.',
    },
    {
      soru: '"Havuza açık kategori bulunmuyor" yazıyor, neden?',
      cevap:
        'Size açık bir ortak kullanım kategorisi tanımlanmamıştır. Şirket aracı gibi bir ürünü kullanmanız gerekiyorsa yöneticinize danışın.',
    },
    {
      soru: '"Bitiş tarihi başlangıçtan sonra olmalıdır" uyarısı alıyorum.',
      cevap: 'Kullanım aralığında bitiş tarih/saatini başlangıçtan sonraya ayarlayın ve yeniden gönderin.',
    },
    {
      soru: '"Bu araç seçtiğiniz tarih aralığında başka bir talebe verilmiş" uyarısı aldım.',
      cevap:
        'Tercih ettiğiniz ürün o tarihlerde dolu. Takvimden müsait günleri seçin, başka bir ürünü tercih edin veya Tercih Edilen Ürün alanını boş bırakın.',
    },
    {
      soru: '"Bu kategoride talep açma yetkiniz yok" uyarısı ne anlama geliyor?',
      cevap:
        'Seçtiğiniz havuz kategorisinde erişiminiz bulunmuyor. Erişim için yöneticinize veya stok yöneticisine danışın.',
    },
    {
      soru: 'Seçtiğim "Tercih Edilen Ürün" kesin olarak bana mı verilir?',
      cevap:
        'Hayır, tercih bağlayıcı değildir. Kesin ürünü stok yöneticisi müsaitliğe göre belirler.',
    },
    {
      soru: 'Talebimin onaylandığını veya reddedildiğini nasıl öğrenirim?',
      cevap:
        '"Zimmet talebim onaylandı", "Zimmet talebim reddedildi" ve "Zimmetim teslim edildi" bildirimleri açıksa haberdar edilirsiniz. Ekipman Taleplerim sekmesindeki Durum sütunundan da takip edebilirsiniz.',
    },
    {
      soru: 'Talebim reddedildi, gerekçesini nerede görürüm?',
      cevap:
        'Ekipman Taleplerim sekmesinde talebin Detayları Görüntüle butonuna tıklayın. Onay adımlarında reddeden kişinin açıklaması görünür.',
    },
    {
      soru: 'Reddedilen talebimi yeniden onaya gönderebilir miyim?',
      cevap: 'Hayır. Reddedilen talep yeniden açılamaz; gerekçeye göre düzenleyerek yeni bir talep oluşturun.',
    },
    {
      soru: 'Onay geçmişinde "Sırası Gelmedi" yazan adım ne anlama gelir?',
      cevap: 'O onaylayana henüz sıra gelmemiştir; önceki adım sonuçlanınca talep ona düşer.',
    },
    {
      soru: 'Talebimi neden iptal edemiyorum?',
      cevap:
        'Onay almış veya stok biriminde işleme alınmış talepler iptal edilemeyebilir. Bu durumda stok yöneticisine Mesajlar bölümünden yazın.',
    },
    {
      soru: 'Ticket açarken "Seçilen ürün zimmetinizde değil" uyarısı alıyorum.',
      cevap:
        'Ticket yalnız üzerinizdeki ürünler için açılır. Ürün henüz teslim alınmamışsa önce Teslim/İade sekmesinden teslimi tamamlayın.',
    },
    {
      soru: 'Ticket açıklaması ne kadar uzun olabilir?',
      cevap:
        'Açıklama en çok 500 karakter olabilir ve boş bırakılamaz. Sorunu kısa ve net yazın; gerekirse ek bilgiyi sonradan yorum veya mesajla iletin.',
    },
    {
      soru: 'Ticketımın sonucunu nerede görürüm?',
      cevap:
        'Ticketlarım sekmesindeki Durum ve Onay Adımı sütunlarına bakın. Ticket "Ürün Tamir Edildi", "Yeni Ürün Verildi", "Stok Bekleniyor" veya "Reddedildi" gibi bir sonuçla kapanır.',
    },
    {
      soru: 'Stok yöneticisi bana mesaj yazdığında nasıl haberim olur?',
      cevap:
        '"Zimmet talebinde yeni mesaj" bildirimi açıksa haberdar edilirsiniz. Ayrıca ilgili satırdaki Mesajlar butonunda okunmamış mesaj sayısı görünür.',
    },
    {
      soru: 'İşten ayrılırken zimmetlerimi nasıl iade ederim?',
      cevap:
        'İade işlemini stok yöneticisi yapar; ürünleri teslim etmek için yöneticiniz veya stok yöneticisiyle görüşün. İade tamamlanınca Teslim/İade sekmesinde "İade Edildi" kaydı oluşur.',
    },
    {
      soru: 'Zimmet tutanağı veya listemi dosya olarak alabilir miyim?',
      cevap:
        'Sağ üstteki "Dışa Aktar" butonuyla zimmetlerinizi, taleplerinizi veya ticketlarınızı dosya olarak indirebilirsiniz. Resmî tutanak için İK\'ya danışın.',
    },
  ],

  // ───────────────────────────── GÖREV YÖNETİMİ ─────────────────────────────
  'gorev-yonetimi': [
    {
      soru: 'Görev Yönetimi sayfasını neden göremiyorum?',
      cevap: 'Sayfa yöneticilere ve yetkili İK kullanıcılarına açılır. Ekibiniz olduğu hâlde göremiyorsanız İK\'ya danışın.',
    },
    {
      soru: 'Çalışan Seç listesinde bazı çalışanlar neden yok?',
      cevap: 'Yalnız yönetiminizdeki birimlerin çalışanları listelenir. Başka birimdeki bir çalışan için o birimin yöneticisine veya İK\'ya başvurun.',
    },
    {
      soru: '"Önce bir çalışan seçin" uyarısı alıyorum.',
      cevap: 'Takvimde görev görmek veya görev atamak için önce Çalışan Seç alanından en az bir çalışan seçin.',
    },
    {
      soru: 'Atadığım görev neden onaya gitmedi?',
      cevap:
        'Yönetici ataması onay akışına girmez; kayıt doğrudan "Onaylandı" olarak açılır. Onay akışı yalnız çalışanların kendi girdiği kayıtlar için çalışır.',
    },
    {
      soru: 'Atanmış bir görevi düzenlediğimde tekrar onaya gider mi?',
      cevap: 'Hayır. Yönetimde yapılan düzenleme onaya gitmez, doğrudan işlenir ve çalışanın takvimi güncellenir.',
    },
    {
      soru: 'Görev atarken hangi alanlar zorunludur?',
      cevap:
        'En az bir çalışan, kategori, başlık ve en az bir gün ile o günün başlangıç ve bitiş saati zorunludur. Kategori dosyayı zorunlu kılıyorsa dosya da eklenmelidir.',
    },
    {
      soru: '"En az bir gün seçin; tüm günlerin saatleri geçerli olmalı" uyarısı alıyorum.',
      cevap:
        'Seçtiğiniz günlerden birinde başlangıç veya bitiş saati eksik ya da hatalı. Her günün saatlerini kontrol edip düzeltin.',
    },
    {
      soru: '"Başlangıç ve bitiş saati aynı olamaz" uyarısı ne anlama geliyor?',
      cevap: 'Bir günün başlangıç ve bitiş saatini aynı girdiniz. Bitiş saatini başlangıçtan farklı bir saate ayarlayın.',
    },
    {
      soru: '"Seçilen günlerin saatleri çakışıyor" uyarısı alıyorum.',
      cevap: 'Aynı gün için girdiğiniz saat aralıkları birbirinin üzerine biniyor. Aralıkları çakışmayacak şekilde düzenleyin.',
    },
    {
      soru: '"Mola süresi gün süresinden kısa olmalı" uyarısı neden çıkıyor?',
      cevap: 'Girdiğiniz mola süresi (dakika) o günün toplam süresine eşit veya ondan uzun. Mola süresini kısaltın veya saat aralığını genişletin.',
    },
    {
      soru: 'Görevi en fazla kaç günlük bir aralık için atayabilirim?',
      cevap: 'Tarih aralığı en çok 366 gün olabilir. Daha uzun dönemler için görevi birkaç parçada atayın.',
    },
    {
      soru: '"Seçilen aralıkta çalışma günü yok" uyarısı alıyorum.',
      cevap:
        'Otomatik giriş şekilli kategorilerde günler seçilen çalışma saati türünden gelir. Seçtiğiniz aralık yalnız tatil veya hafta sonu günlerinden oluşuyorsa farklı bir aralık seçin.',
    },
    {
      soru: '"Seçilen çalışma saati türü bu çalışan(lar) için uygun değil" uyarısı ne demek?',
      cevap: 'Seçtiğiniz çalışma saati türü, seçilen çalışanlardan biri veya birkaçı için tanımlı değil. Başka bir tür seçin ya da çalışanları ayrı ayrı atayın.',
    },
    {
      soru: '"Seçilen kategori bu çalışanlar için uygun değil" uyarısı alıyorum.',
      cevap:
        'Kategori, seçtiğiniz çalışanların hepsinin biriminde tanımlı değil. Çalışanları birimlerine göre ayırarak atayın veya ortak bir kategori seçin.',
    },
    {
      soru: '"Bu kategoride dosya zorunlu" uyarısı alıyorum.',
      cevap: 'Seçtiğiniz kategoride belge eklemek zorunludur. Ekler alanından dosya yükleyip yeniden kaydedin.',
    },
    {
      soru: '"Bu kategoride dosya eklenemez" veya "Bu kategoride adım eklenemez" uyarısı aldım.',
      cevap: 'Kategori ayarlarında dosya ekleme veya adım kullanımı kapalıdır. Eki ya da adımları kaldırın veya bu özellikleri açık olan bir kategori seçin.',
    },
    {
      soru: '"Adım sorumlusu görevin çalışanlarından biri olmalı" uyarısı ne anlama geliyor?',
      cevap: 'Adıma yalnız göreve atanmış çalışanlardan sorumlu seçilebilir. Kişiyi önce göreve ekleyin veya adım sorumlusunu değiştirin.',
    },
    {
      soru: 'Adım sorumlusu seçmek zorunlu mu?',
      cevap:
        'Hayır. Sorumlu boş kalabilir; bu durumda adımın durumunu görevdeki her kişi değiştirebilir. Adım durumu herkes için tektir ve "Yapılmadı" ile başlar.',
    },
    {
      soru: 'Resmi tatil günleri göreve dahil edilir mi?',
      cevap:
        'Kategoride "Resmi tatilleri dikkate al" açıksa tatil günleri kayda eklenmez, yarım gün tatilde saat kısalır. Kapalıysa tatil günleri de görev günü olarak yazılır.',
    },
    {
      soru: '"Onay sırası sizde değil" uyarısı alıyorum.',
      cevap: 'Talep akışta başka bir onaylayanda bekliyor. Mevcut Onaylayan sütunundan kimde olduğunu görebilirsiniz.',
    },
    {
      soru: '"Talep onay beklemiyor" uyarısı ne demek?',
      cevap: 'Talep siz karar vermeden önce sonuçlanmış veya çalışan tarafından iptal edilmiş. Sayfayı yenileyerek güncel durumu görün.',
    },
    {
      soru: 'Reddederken gerekçe yazmak zorunlu mu?',
      cevap: 'Evet, görev talebini reddederken gerekçe istenir; "Red gerekçesi zorunlu" uyarısı alırsanız açıklama alanını doldurun. Çalışan gerekçeyi kaydın detayında görür.',
    },
    {
      soru: '"Talep onay beklerken bu işlem yapılamaz" uyarısı neden çıkıyor?',
      cevap: 'Onay bekleyen bir talep üzerinde düzenleme gibi bir işlem denediniz. Önce talebe karar verin veya çalışanın iptal etmesini bekleyin.',
    },
    {
      soru: '"Şu çalışanlara yetkiniz olmadığı için görev günü başlığı ve tarihi değiştirilemez" uyarısı alıyorum.',
      cevap: 'Görevde yönetiminiz dışındaki çalışanlar da var. Bu kişiler için başlık ve tarih değişikliğini onların yöneticisi ya da İK yapabilir.',
    },
    {
      soru: 'Onay zincirinde kaçıncı adımda olduğumu nasıl anlarım?',
      cevap: 'Talebin detayında onay adımı "Adım 1/2 · Pozisyon" biçiminde gösterilir; kaçıncı adımda olduğunuzu ve toplam adım sayısını görürsünüz.',
    },
    {
      soru: 'Onayımı bekleyen görev talebi geldiğinde bildirim alır mıyım?',
      cevap: '"Onayımı bekleyen görev talepleri" bildirimi açıksa haberdar edilirsiniz. Talepler sekmesinin yanındaki rozet de bekleyen sayıyı gösterir.',
    },
    {
      soru: 'Göreve eklenen bir çalışanı nasıl çıkarırım?',
      cevap: 'Görev detayında atanan çalışanlar bölümünden kişiyi çıkarın ve onay penceresini onaylayın. Görev o kişinin takviminden kalkar.',
    },
    {
      soru: 'Görev raporunda hangi kayıtlar yer alır?',
      cevap: 'Seçtiğiniz çalışanların belirtilen tarih aralığındaki görev kayıtları ve isterseniz izin kayıtları rapora alınır; kategoriye göre de daraltabilirsiniz.',
    },
    {
      soru: 'Yeni oluşturduğum kategori neden üst birimin kategorilerini gizledi?',
      cevap:
        'Bir birimin ilk kendi kategorisi kaydedilince o birim ve alt birimleri üst birimin kategorilerini artık görmez, yalnız kendi listesini görür. Eski kayıtlar kategorisini adıyla korur.',
    },
    {
      soru: '"Bu birimde aynı adlı bir kategori var" uyarısı alıyorum.',
      cevap: 'Aynı birimde aynı adla ikinci bir kategori oluşturulamaz. Farklı bir ad verin veya mevcut kategoriyi düzenleyin.',
    },
    {
      soru: 'Kullanılmış bir kategoriyi silmeye çalıştığımda ne olur?',
      cevap: 'Kayıtlarda kullanılmış kategori silinmez, pasife alınır. Pasif kategori yeni kayıtlarda seçilemez; mevcut kayıtlar korunur.',
    },
    {
      soru: 'Kategorideki "Giriş Şekli" Otomatik ve Manuel arasındaki fark nedir?',
      cevap:
        'Otomatikte tarih aralığı ve çalışma saati türü seçilir; günler ve saatler türden gelir, çalışma günü olmayan günler eklenmez. Manuelde günler takvimden tek tek seçilir.',
    },
  ],

  // ───────────────────────────── GÖREVLERİM ─────────────────────────────
  gorevlerim: [
    {
      soru: 'Kayıt Ekle butonunu neden göremiyorum?',
      cevap:
        'Kendi kaydınızı girmenize izin verilen bir kategori yoksa kayıt ekleyemezsiniz. Görevleriniz bu durumda yöneticiniz tarafından atanır; ihtiyacınız varsa yöneticinizle görüşün.',
    },
    {
      soru: '"Bu kategoride çalışan kayıt oluşturamaz; kayıt yalnız yönetici tarafından atanır" uyarısı alıyorum.',
      cevap: 'Seçtiğiniz kategori yalnız yönetici atamasına açıktır. Başka bir kategori seçin veya kaydı yöneticinizden atamasını isteyin.',
    },
    {
      soru: 'Kayıt eklerken hangi alanlar zorunludur?',
      cevap: 'Kategori, başlık, tarih ile başlangıç ve bitiş saati zorunludur. Kategori dosyayı zorunlu kılıyorsa belge de eklemeniz gerekir.',
    },
    {
      soru: '"Bitiş saati başlangıç saatinden önce olamaz" uyarısı alıyorum.',
      cevap: 'Bitiş saatini başlangıç saatinden sonraya ayarlayın. Gece yarısını geçen çalışmalar için yöneticinize danışın.',
    },
    {
      soru: '"Başlangıç ve bitiş saati aynı olamaz" veya "süre 24 saati aşamaz" uyarısı ne demek?',
      cevap: 'Bir günün süresi sıfır olamaz ve 24 saati geçemez. Başlangıç ve bitiş saatlerini düzeltip yeniden deneyin.',
    },
    {
      soru: '"Seçilen günlerin saatleri çakışıyor" uyarısı alıyorum.',
      cevap: 'Aynı gün için girdiğiniz saat aralıkları üst üste biniyor. Aralıkları çakışmayacak şekilde düzenleyin.',
    },
    {
      soru: '"Mola süresi geçersiz" uyarısı neden çıkıyor?',
      cevap: 'Mola süresi dakika olarak girilmeli ve o günün toplam süresinden kısa olmalıdır. Değeri düzeltin veya alanı boş bırakın.',
    },
    {
      soru: '"Bu kategoride dosya zorunlu" uyarısı aldım, ne yapmalıyım?',
      cevap: 'Seçtiğiniz kategoride belge eklemeden kayıt gönderilemez. Ekler alanından "Dosya Yükle" ile belgenizi ekleyin.',
    },
    {
      soru: 'Tarih aralığı seçtiğimde kaç kayıt oluşur?',
      cevap: 'Aralıktaki her gün ayrı bir görev günü olarak oluşur ve her biri ayrı onaylanır. Kaydetmeden önce ön izlemede günleri kontrol edin.',
    },
    {
      soru: 'Hafta sonu veya resmi tatil günleri kaydıma eklenir mi?',
      cevap:
        'Kategori ayarına bağlıdır: "Resmi tatilleri dikkate al" açıksa tatil günleri eklenmez, kapalıysa eklenir. Otomatik giriş şekilli kategorilerde çalışma günü olmayan günler eklenmez. Ön izlemede kontrol edin.',
    },
    {
      soru: 'Kaydım kime onaya gider?',
      cevap:
        'Kategori için tanımlı onay akışındaki ilk kişiye, genellikle yöneticinize gider. Kayıtlarım sekmesindeki Mevcut Onaylayan sütunu kaydın kimde beklediğini gösterir.',
    },
    {
      soru: 'Yöneticimin atadığı görev neden onay beklemeden "Onaylandı" görünüyor?',
      cevap: 'Yönetici atamaları onay akışına girmez; kayıt doğrudan "Onaylandı" olarak açılır.',
    },
    {
      soru: 'Kaydım onaylandığında veya reddedildiğinde haberim olur mu?',
      cevap:
        '"Görev talebim onaylandı" ve "Görev talebim reddedildi" bildirimleri açıksa haberdar edilirsiniz. Durumu Kayıtlarım sekmesinden de takip edebilirsiniz.',
    },
    {
      soru: 'Reddedilen kaydımın gerekçesini nerede görürüm?',
      cevap: 'Kayıtlarım sekmesinde kaydın detay (göz) butonuna tıklayın; reddeden kişinin açıklaması onay geçmişinde görünür.',
    },
    {
      soru: 'Reddedilen kaydımı düzeltip yeniden gönderebilir miyim?',
      cevap: 'Reddedilen kayıt yeniden onaya açılmaz. Gerekçeye göre düzelterek Kayıt Ekle ile yeni bir kayıt girin.',
    },
    {
      soru: 'Kaydımı neden düzenleyemiyor veya silemiyorum?',
      cevap:
        'Kişisel görünümde kayıtlar düzenlenmez ve silinmez. Bekleyen kaydınızı iptal edip yeniden girin; onaylanmış kayıtta değişiklik için yöneticinizle görüşün.',
    },
    {
      soru: '"Talep iptal edilemedi" uyarısı alıyorum.',
      cevap: 'Kayıt bu arada onaylanmış veya reddedilmiş olabilir; yalnız "Beklemede" kayıtlar iptal edilir. Sayfayı yenileyip durumu kontrol edin.',
    },
    {
      soru: 'Adım durumunu neden değiştiremiyorum?',
      cevap:
        'Adıma sorumlu atanmışsa durumu yalnız sorumlular değiştirir; sorumlu boşsa görevdeki herkes değiştirebilir. Adımlar yalnız adım kullanımı açık kategorilerde görünür.',
    },
    {
      soru: 'Adım durumları nelerdir?',
      cevap: 'Adımlar "Yapılmadı" ile başlar, üzerinde çalışılırken "Yapılıyor", bitince "Yapıldı" olur. Tamamlanan adımlar ilerleme sayısında (ör. 2/3 yapıldı) görünür.',
    },
    {
      soru: 'Takvimde izinlerim de görünüyor mu?',
      cevap: 'Evet. Takvimde izinleriniz mavi, görevleriniz yeşil kutularla gösterilir; üstteki İzin ve Görev etiketleri renkleri açıklar.',
    },
    {
      soru: 'Takvimi aylık veya günlük görünümde görebilir miyim?',
      cevap: 'Evet. Takvimin görünüm listesinden aylık, haftalık veya günlük görünüme geçebilirsiniz.',
    },
    {
      soru: 'Dışa aktarmada hangi rapor türleri var?',
      cevap:
        '"Özet Tablo" toplam saat ve kayıt sayılarını, "Etkinlik Listesi" tüm kayıtların ayrıntılı listesini verir. Filtre seçmezseniz tüm verileriniz Excel olarak indirilir.',
    },
  ],
}
