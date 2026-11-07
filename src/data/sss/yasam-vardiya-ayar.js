// Sık sorulan sorular — İşe Giriş / Çıkış, Vardiya Yönetimi, Vardiyalarım, Ayarlar
export default {
  'ise-giris-cikis': [
    {
      soru: 'İşe giriş sürecini nasıl başlatırım?',
      cevap: 'İşe Giriş > Süreçler sekmesinde sağ üstteki "Yeni Çalışan Ekle" butonuna tıklayın. Çalışanı ve şablonu seçip işe giriş tarihini girerek kaydedin; süreç önce onay akışına girer.',
    },
    {
      soru: 'İşten çıkış sürecini nereden başlatırım?',
      cevap: 'İşten Çıkış > Süreçler sekmesindeki "Çalışanı İşten Çıkar" butonunu kullanın. İşten çıkış süreci yalnızca bu butonla başlatılır.',
    },
    {
      soru: '"Bu çalışanın aynı türde açık bir süreci zaten var." uyarısı alıyorum, ne yapmalıyım?',
      cevap: 'Çalışan için yürüyen bir işe giriş ya da işten çıkış süreci var. Devam Eden Süreçler veya Onay Bekleyen sekmesinde mevcut süreci bulun; gerekiyorsa önce onu iptal edin ya da tamamlanmasını bekleyin.',
    },
    {
      soru: '"Çalışanın açık bir işten çıkış süreci var; önce süreci iptal edin ya da tamamlanmasını bekleyin." uyarısı ne anlama geliyor?',
      cevap: 'Aynı çalışan için ikinci bir çıkış süreci açılamaz. İşten Çıkış > Süreçler altında mevcut süreci bulup iptal edin veya kesinleşmesini bekleyin.',
    },
    {
      soru: 'Şablon listesinde hiç şablon çıkmıyor, neden?',
      cevap: 'Çalışanın biriminde (veya üst biriminde) tanımlı etkin bir işe giriş şablonu olmayabilir ya da çalışana pozisyon seçilmemiş olabilir. Şablon seçmeden de madde ekleyebilirsiniz; kalıcı çözüm için Ayarlar ekranından birime şablon tanımlayın.',
    },
    {
      soru: '"Seçilen şablon bu çalışanın birimine uygulanamaz." uyarısı alıyorum.',
      cevap: 'Seçtiğiniz şablon başka bir birim için tanımlanmış. Çalışanın birimine veya üst birimine ait bir şablon seçin.',
    },
    {
      soru: 'Süreç neden "Onay Bekliyor" durumunda kalıyor?',
      cevap: 'Onay zincirindeki kişi henüz karar vermemiştir. Onay Bekleyen sekmesindeki "Mevcut Onaylayan" sütunu sürecin kimde beklediğini gösterir.',
    },
    {
      soru: '"Bu onay adımı sizin pozisyonunuza ait değil." uyarısını neden alıyorum?',
      cevap: 'Süreç şu an başka bir onaylayanın sırasında. Yalnızca "Mevcut Onaylayan" sütununda pozisyonunuz görünen süreçlere karar verebilirsiniz.',
    },
    {
      soru: 'Süreci reddederken "Ret gerekçesi zorunludur." uyarısı çıkıyor.',
      cevap: 'Ret işleminde açıklama alanına neden reddettiğinizi yazmanız gerekir. Gerekçeyi yazıp yeniden onaylayın.',
    },
    {
      soru: '"Bu işlem yalnız devam eden süreçte yapılabilir; süreç iş akışı onayı bekliyor." ne demek?',
      cevap: 'Madde onaylama, görev işaretleme gibi işlemler süreç onaylanıp "Devam Ediyor" durumuna geçtikten sonra yapılabilir. Önce onay akışının tamamlanmasını bekleyin.',
    },
    {
      soru: '"Süreç kapanmış; bu işlem yapılamaz." uyarısı alıyorum.',
      cevap: 'Süreç tamamlanmış, kesinleşmiş ya da iptal edilmiş. Kapanan süreçte değişiklik yapılamaz; gerekiyorsa yeni bir süreç başlatın.',
    },
    {
      soru: 'Çalışan form bağlantısını almadı, "Çalışanın e-posta adresi yok; bağlantı gönderilemedi." uyarısı çıkıyor.',
      cevap: 'Çalışanın kaydında e-posta adresi tanımlı değil. Çalışanın bilgilerine e-posta adresini ekleyin, ardından süreç detayından bağlantıyı yeniden gönderin.',
    },
    {
      soru: '"Çalışanın dolduracağı form maddesi yok; bağlantı gönderilmedi." uyarısını neden alıyorum?',
      cevap: 'Süreçte sorumlusu çalışan olan bir madde bulunmadığı için bağlantıya gerek yoktur. Çalışandan bilgi istemek istiyorsanız sürece çalışan sorumluluğunda madde ekleyin.',
    },
    {
      soru: 'Form bağlantısı kaç gün geçerli?',
      cevap: 'Geçerlilik süresi birim için Ayarlar ekranındaki "Form bağlantısı geçerlilik süresi" alanında belirlenir. Süresi dolan bağlantıyı süreç detayından yenileyebilirsiniz.',
    },
    {
      soru: 'Çalışan süreci DHR\'da ne zaman görmeye başlar?',
      cevap: 'İşe giriş kartı, birim ayarlarında belirtilen gün kadar işe giriş tarihinden önce çalışanın Kontrol Panelim ekranında açılır. İşten çıkış kartı ise süreç yürüdüğü sürece görünür.',
    },
    {
      soru: 'Zorunlu bir maddeyi neden "Uygulanmaz" olarak işaretleyemiyorum?',
      cevap: 'Zorunlu (bloklayan) maddeler ve zorunlu görevler "Uygulanmaz" yapılamaz. Bu maddenin tamamlanması gerekir; gerçekten gereksizse şablondaki zorunluluk ayarını İK ile değerlendirin.',
    },
    {
      soru: 'Onayladığım maddeyi neden değiştiremiyorum ya da silemiyorum?',
      cevap: 'Onaylanmış madde değiştirilemez ve silinemez. Önce maddenin kararını geri alın (yeniden açın), ardından düzenleyin.',
    },
    {
      soru: '"Aynı bilgi formda iki kez istenemez." uyarısı alıyorum.',
      cevap: 'Eklemeye çalıştığınız madde, süreçte zaten bulunan bir bilgiyi istiyor. Mevcut maddeyi kullanın ya da farklı bir bilgi seçin.',
    },
    {
      soru: 'Maddeye hangi dosya türlerini ve ne büyüklükte dosya ekleyebilirim?',
      cevap: 'pdf, doc, docx, xls, xlsx, jpg, jpeg, png, gif ve txt dosyaları eklenebilir. Tek dosya en çok 50 MB olabilir.',
    },
    {
      soru: 'Zorunlu bir görevi neden silemiyorum?',
      cevap: 'Zorunlu görevler silinemez. Tiklenmiş (tamamlandı işaretlenmiş) bir görevi silmek için de önce tikini geri almanız gerekir.',
    },
    {
      soru: 'Süreç neden "Gecikmiş" kartında görünüyor?',
      cevap: 'Hedef tarihi geçtiği hâlde süreç bitmemiş. İşten çıkışta çıkış tarihi geçip açık bölüm kalırsa da süreç gecikmiş sayılır. Eksik adımları tamamlayın ya da hedef tarihi güncelleyin.',
    },
    {
      soru: 'Çıkış tarihi gelmeden işten çıkışı kesinleştirebilir miyim?',
      cevap: 'Normalde çıkış, çıkış tarihi gelmeden kesinleşmez; bölümler erken biterse çalışan çıkış tarihinde pasife geçer. Hemen kesinleştirme seçeneği yalnızca yetkili kullanıcılara görünür.',
    },
    {
      soru: '"Süreç henüz kapatılamaz; bekleyen engeller var." uyarısında hangi engelleri kontrol etmeliyim?',
      cevap: 'Süreç detayındaki kontrol listesine bakın: onaylanmamış zorunlu madde, tiklenmemiş zorunlu görev, SGK bildirgesi, zimmet, bordro, kapanmamış izin ya da kıdem/ihbar kararı gibi eksikler orada listelenir.',
    },
    {
      soru: '"Kapanmamış izin talepleri var" engeli nasıl kalkar?',
      cevap: 'Çalışanın bekleyen izin talepleri ile çıkış tarihini kapsayan veya sonrasında başlayan onaylı izinleri sonuçlandırılmalıdır. Bu kural birim ayarlarında kapalıysa bu talepler otomatik iptal edilir.',
    },
    {
      soru: '"Çalışanın pozisyonu onay akışlarında onaylayan; akışlar düzenlenmeli" engeli ne anlama geliyor?',
      cevap: 'Ayrılan çalışanın pozisyonu bazı onay akışlarında onaylayıcı olarak tanımlı. Ayarlar ekranında bu akışlara yeni onaylayıcı pozisyon belirleyin; aksi hâlde talepler boşta kalır.',
    },
    {
      soru: 'Çıkış tarihini değiştirirken "Çıkış kaydında kıdem / ihbar hesabı var; tarihi değiştirmeden önce hesabı geri alın." uyarısı alıyorum.',
      cevap: 'Kıdem veya ihbar tazminatı kararı verilmişse önce bu kararı geri almanız gerekir. Tarihi değiştirdikten sonra tazminat kararını yeniden verin.',
    },
    {
      soru: 'Çıkış kaydındaki çalışanı değiştirebilir miyim?',
      cevap: 'Hayır, çıkış kaydının çalışanı değiştirilemez. Yanlış kişi seçildiyse süreci iptal edip doğru çalışan için yeniden başlatın.',
    },
    {
      soru: 'SGK adımında "Dışarıda bildirildi" seçeneğini neden göremiyorum?',
      cevap: 'Bu seçenek yalnızca birim ayarlarında "Dışarıda verilen bildirge kabul edilsin" açıksa ve SGK bildirgesi zorunlu tutulmuşsa görünür. Ayarı açmak için İK veya sistem yöneticinize başvurun.',
    },
    {
      soru: 'SGK belge numarasında sınır var mı?',
      cevap: 'Belge numarası zorunludur ve en fazla 50 karakter olabilir.',
    },
    {
      soru: 'Süreci iptal ederken "Süreç iptal edilemiyor: otomatik iade alınan zimmet başka bir çalışana ya da bakıma geçmiş." uyarısı alıyorum.',
      cevap: 'Çıkışta otomatik iade alınan zimmet sonradan başka birine verildiği ya da bakıma gönderildiği için çalışana geri yüklenemiyor. Zimmet durumunu Stok Yönetimi tarafında düzenledikten sonra yeniden deneyin.',
    },
    {
      soru: 'Süreç raporunu neden alamıyorum?',
      cevap: '"Rapor yalnız tamamlanmış işten çıkış sürecinde alınabilir." uyarısı alıyorsanız süreç henüz kesinleşmemiştir. Rapor seçeneği ayrıca yetkinize bağlıdır.',
    },
    {
      soru: 'Birim ayarlarında yaptığım değişiklik yürüyen süreçlere uygulanır mı?',
      cevap: 'Hayır. Kurallar süreç açılırken sürece kopyalanır; değişiklik yalnızca yeni açılan süreçleri etkiler.',
    },
    {
      soru: 'Birim kuralları neden "miras alıyor" olarak görünüyor?',
      cevap: 'Birimin kendi kuralı yoksa üst biriminin kurallarını kullanır. Kaydettiğinizde birime özel kural oluşur; "Kuralı Kaldır (mirasa dön)" ile tekrar üst birim kurallarına dönebilirsiniz.',
    },
    {
      soru: 'Toplu işe giriş yüklediğim Excel\'de bazı satırlar oluşturulmadı, neden?',
      cevap: 'Ön izleme ekranında hatalı işaretlenen satırlar oluşturulmaz. Uyarıları düzeltip yalnızca bu satırlar için dosyayı yeniden yükleyin.',
    },
    {
      soru: 'Talepleri nasıl dışa aktarırım?',
      cevap: 'Talepler sekmesinde süzgeçleri uygulayıp "Dışa Aktar" butonuna tıklayın. Biçim, durum, çalışan ve tarih aralığını seçerek dosyayı indirin.',
    },
    {
      soru: 'Çıkış anketi çalışana ne zaman gider?',
      cevap: 'Birimde çıkış anketi açıksa, süreç yürümeye başladığında çalışana bir kez gönderilir. Anket ayarlarda belirtilen gün sayısı kadar açık kalır ve sonuçlar süreç sahibine gider.',
    },
    {
      soru: 'Deneme süresi değerlendirme anketi kime gider?',
      cevap: 'Anketi kimin dolduracağı ve sonuçların kime gideceği, birimin Deneme Süresi Bildirimleri ayarlarında belirlenir. Ayrıntı için İK\'ya danışın.',
    },
    {
      soru: 'Çalışan olarak bana ait süreci neden göremiyorum?',
      cevap: '"Bu süreç artık görüntülenemiyor." yazıyorsa süreç kapanmış ya da iptal edilmiş olabilir. İşe giriş kartı da işe giriş tarihinden belirli gün önce açılır; emin değilseniz yöneticinize danışın.',
    },
    {
      soru: 'İşten çıkışta çalışan olarak benden ne bekleniyor?',
      cevap: 'Size atanmış madde yoksa İK; zimmet teslimi ve SGK işlemlerini tamamlayınca süreç kapanır. Size ait maddeler varsa süreç kartından doldurmanız gerekir.',
    },
  ],

  'vardiya-yonetimi': [
    {
      soru: 'Vardiya planlamaya nereden başlamalıyım?',
      cevap: 'Önce Tanımlar sekmesinde vardiya şablonlarını, gerekiyorsa rotasyon desenlerini, ardından çalışan kurallarını oluşturun. Son olarak Planlama sekmesinde Yeniden Üret ile planı oluşturun.',
    },
    {
      soru: 'Planlama ekranında "Vardiya şablonu yok" uyarısı görüyorum.',
      cevap: 'Seçili birim için tanımlı vardiya şablonu bulunmuyor. Tanımlar > Vardiya Şablonları sekmesinden Yeni Vardiya Şablonu ekleyin.',
    },
    {
      soru: '"Bu çalışanın biriminde kullanılabilir vardiya şablonu yok." uyarısı ne anlama geliyor?',
      cevap: 'Çalışanın birimi veya üst birimi için geçerli bir şablon tanımlı değil ya da şablonun geçerlilik tarihi dolmuş. Şablonun sahip birimini ve geçerlilik tarihlerini kontrol edin.',
    },
    {
      soru: 'Uyarıya rağmen vardiya atayabilir miyim?',
      cevap: 'Uyarı seviyesindeki kurallarda "Uyarılarla devam edilsin mi?" penceresi çıkar; "Yine de Uygula" ile devam edebilirsiniz. Kurallara aykırı (engelleyici) durumlarda atama yapılamaz.',
    },
    {
      soru: 'Hücredeki kırmızı kural ihlali işaretinin nedenini nasıl görürüm?',
      cevap: 'İşaretli hücrenin üzerine gelin ya da hücreye tıklayın. Bekleyen izinle çakışma, dinlenme süresi, haftalık çalışma süresi gibi nedenler orada yazar.',
    },
    {
      soru: 'Planı yeniden üretirken "Şu çalışanlara yetkiniz olmadığı için vardiya planı yeniden üretilemez" uyarısı alıyorum.',
      cevap: 'Görüntülenen aralıkta birim yetkiniz olmayan çalışanlar var. Birimi veya pozisyonu daraltarak yeniden deneyin ya da yetki için sistem yöneticinize başvurun.',
    },
    {
      soru: 'Yeniden Üret elle yaptığım değişiklikleri siler mi?',
      cevap: 'Elle yapılan değişiklikler etkilenebilir. Korumak istediğiniz günleri önce kilitleyin; kilitli vardiyalar yeniden üretmeden etkilenmez.',
    },
    {
      soru: 'Planı yayınlamazsam çalışanlar vardiyalarını görür mü?',
      cevap: 'Plan yayınlandıktan sonra çalışanların Vardiyalarım sayfasında görünür. Yayınlama butonu yetkinize bağlıdır.',
    },
    {
      soru: 'Haftayı kopyalarken "Kaynak ve hedef haftayı seçin." uyarısı çıkıyor.',
      cevap: 'Kopyalamak için hem kaynak hem hedef haftanın seçili olması gerekir. Hedef haftayı seçip önizlemeyi kontrol ettikten sonra onaylayın.',
    },
    {
      soru: 'Toplu atamada "Çakışanları atla" seçeneği ne işe yarar?',
      cevap: 'İşaretlerseniz, çalışanın zaten vardiyası olan ya da çakışma oluşan günler atlanır ve yalnızca uygun atamalar yapılır.',
    },
    {
      soru: 'İki çalışanın vardiyasını değiştirirken "Görünen aralıkta uygun vardiya yok." uyarısı alıyorum.',
      cevap: 'Ekranda görünen tarih aralığında yer değiştirilebilecek bir vardiya bulunamadı. Tarih aralığını değiştirip yeniden deneyin.',
    },
    {
      soru: 'Vardiyayı iptal ederken "Bir iptal gerekçesi seçin." uyarısı alıyorum.',
      cevap: 'Günlük vardiya iptalinde gerekçe seçmek zorunludur. Gerekçeyi seçip isterseniz açıklama yazarak onaylayın.',
    },
    {
      soru: 'Talebi onaylarken "Kurallara aykırı: bu talep onaylanamaz." yazıyor, ne yapmalıyım?',
      cevap: 'Talep uygulanırsa çakışma, dinlenme süresi veya kilitli vardiya gibi engelleyici bir kural ihlali oluşuyor. Talebi reddedin ya da planı düzenleyip talep ayrıntısındaki Uygunluk Kontrolünü yeniden inceleyin.',
    },
    {
      soru: '"Uyarılar var; talep onaylanabilir." ne anlama geliyor?',
      cevap: 'Talep bazı kurallar için uyarı veriyor ama engelleyici değil. Uyarıları inceleyip uygun görürseniz onaylayabilirsiniz; kontrol onay anında yeniden yapılır.',
    },
    {
      soru: 'Talebi reddederken "Red gerekçesi zorunludur." uyarısı alıyorum.',
      cevap: 'Ret işleminde gerekçe yazmanız gerekir. Gerekçe çalışana da gösterilir.',
    },
    {
      soru: '"Bu talep için vardiya onay akışı tanımlanmamış." uyarısı neden çıkıyor?',
      cevap: 'Çalışanın birimi veya pozisyonu için vardiya onay akışı tanımlı değil. Akışın tanımlanması için sistem yöneticinize başvurun.',
    },
    {
      soru: 'Bekleyen Talepler listesinde onay butonlarını neden göremiyorum?',
      cevap: 'Talep şu an başka bir onaylayanın adımında olabilir. Ekip Talepleri sekmesindeki "Mevcut Onaylayan" sütunundan talebin kimde beklediğini görebilirsiniz.',
    },
    {
      soru: 'Talebi onayladığımda çalışana bildirim gider mi?',
      cevap: 'Evet, çalışanın bildirim tercihlerine göre talebin onaylandığı ya da reddedildiği bildirilir. Çalışan sonucu Vardiyalarım › Taleplerim sekmesinde de görür.',
    },
    {
      soru: 'Birden çok talebi tek seferde nasıl onaylarım?',
      cevap: 'Onayımı Bekleyenler sekmesinde Toplu İşlem butonuna tıklayın, talepleri seçin ve Onayla ya da Reddet seçeneğini kullanın.',
    },
    {
      soru: 'Çalışan vardiyaya gelmezse haberim olur mu?',
      cevap: 'Bildirim tercihlerinizde "Ekibimden biri vardiyaya gelmedi" açıksa bildirim alırsınız. Gelmeyen günler Bakiyeler sekmesinde "Gelmedi" sütununda da görünür.',
    },
    {
      soru: 'Giriş / çıkış kayıtlarını elle girmem gerekir mi?',
      cevap: 'Giriş ve çıkışlar normalde PDKS veya QR ile otomatik kaydedilir. Elle giriş yalnızca kart okutulamaması gibi istisnai durumlar içindir.',
    },
    {
      soru: 'Elle girdiğim giriş / çıkış saatleri nereye yansır?',
      cevap: 'Geç kalma ve fazla mesai dakikaları yeniden hesaplanır; sonuç Ekip Listesi ve Bakiyeler sekmelerine yansır.',
    },
    {
      soru: 'Bakiyelerdeki "Fark" sütunu neyi gösterir?',
      cevap: 'Planlanan süre ile gerçekte çalışılan süre arasındaki farkı saat:dakika olarak gösterir.',
    },
    {
      soru: 'Bakiyeleri dışa aktarırken CSV ile Excel arasındaki fark nedir?',
      cevap: 'CSV biçimi yalnızca tek görünümü içerir. Excel ise tüm görünümleri ayrı sayfalarda dışa aktarır.',
    },
    {
      soru: 'Yasal Uyum sekmesinde Taramayı Çalıştır dedim ama liste hemen değişmedi.',
      cevap: 'Tarama arka planda çalışır; bitince liste kendiliğinden tazelenir. Biraz bekleyip sayfayı yenileyebilirsiniz.',
    },
    {
      soru: 'Uyum kaydını "Gördüm" olarak işaretlersem ne olur?',
      cevap: 'Kayıt kapatılır ve bu ihlal için yeniden bildirim gönderilmez. Kayıt "Görüldü" durumuna geçer ve açık kayıtlar listesinden düşer.',
    },
    {
      soru: 'Vardiya şablonunu düzenlediğimde geçmiş vardiyalar değişir mi?',
      cevap: 'Hayır. Şablonun yeni bir sürümü oluşur; değişikliğin ileri tarihli planlı vardiyalara uygulanıp uygulanmayacağını kaydetmeden önce seçersiniz.',
    },
    {
      soru: 'Kullanılan bir vardiya şablonunu silebilir miyim?',
      cevap: 'Kullanılmış şablonlar silinmez, kullanımdan kaldırılır; geçmiş vardiyalar korunur. Hiç kullanılmamış şablonlar tamamen silinebilir.',
    },
    {
      soru: 'Vardiya şablonu kodunda sınır var mı?',
      cevap: 'Kod en fazla 32 karakter olabilir. Rotasyon deseni adı en fazla 128, kodu en fazla 32 karakterdir.',
    },
    {
      soru: 'Çalışan kuralı oluştururken "Yürürlük bitişi başlangıçtan önce olamaz." uyarısı alıyorum.',
      cevap: 'Bitiş tarihi başlangıç tarihinden önce seçilmiş. Bitişi başlangıçtan sonraya alın ya da süresiz geçerli olması için boş bırakın.',
    },
    {
      soru: 'Çalışan kuralında "En az bir çalışma günü seçin." uyarısı çıkıyor.',
      cevap: 'Sabit şablon kuralında çalışanın hangi günlerde çalışacağını işaretlemeniz gerekir. En az bir gün seçip yeniden kaydedin.',
    },
    {
      soru: 'Aktif kuralı olan bir çalışana yeni kural eklersem ne olur?',
      cevap: 'Yeni kural başladığında çalışanın mevcut aktif kuralları sona erer. Etkisi kural sihirbazında kaydetmeden önce gösterilir.',
    },
    {
      soru: 'Kullanılan bir rotasyon desenini neden silemiyorum?',
      cevap: 'Desen bir veya daha fazla çalışan kuralında kullanılıyor. Önce ilgili çalışan kurallarını başka bir desene ya da şablona geçirin.',
    },
    {
      soru: 'Planı nasıl yazdırırım veya PDF olarak kaydederim?',
      cevap: 'Planlama sekmesinde ilgili haftayı açıp Yazdır butonuna tıklayın. Tarayıcının yazdırma penceresinden yazıcıyı ya da PDF olarak kaydetmeyi seçin.',
    },
    {
      soru: 'Vardiya Yönetimi sayfasını veya bazı sekmeleri neden göremiyorum?',
      cevap: 'Sayfa ve sekmeler yetkinize bağlı olarak görünür. Ayrıca yalnız birim yetkiniz olan çalışanları görebilirsiniz; ihtiyacınız varsa sistem yöneticinize başvurun.',
    },
  ],

  'vardiyalarim': [
    {
      soru: 'Vardiyamı nasıl bırakırım?',
      cevap: 'Yaklaşan sekmesinde ilgili vardiyanın satırında Değişiklik Talebi butonuna tıklayın, talep türü olarak Bırakma\'yı seçip gönderin. Yönetici onaylayınca vardiya açık vardiyaya döner.',
    },
    {
      soru: 'Vardiyamı bir iş arkadaşıma nasıl devrederim?',
      cevap: 'Değişiklik Talebi penceresinde Devretme\'yi seçip iş arkadaşınızı belirleyin. Talep önce iş arkadaşınızın onayına, kabul ederse yöneticinize gider.',
    },
    {
      soru: 'İş arkadaşımı devretme veya takas listesinde neden göremiyorum?',
      cevap: 'Listede yalnızca o vardiyayı alabilecek uygun iş arkadaşları ve vardiyalar gösterilir. İş arkadaşınızın o gün başka vardiyası, izni ya da kural engeli olabilir; emin değilseniz yöneticinize danışın.',
    },
    {
      soru: '"Yalnız kendi vardiyanız için değişim talebi açabilirsiniz." uyarısı alıyorum.',
      cevap: 'Değişiklik talebi yalnızca size atanmış vardiyalar için açılabilir. Başka birinin vardiyasıyla ilgili isteğinizi yöneticinize iletin.',
    },
    {
      soru: '"Bu talep için vardiya onay akışı tanımlanmamış. Lütfen yöneticinize başvurun." uyarısı ne anlama geliyor?',
      cevap: 'Biriminiz için vardiya talebi onay akışı henüz tanımlanmamış. Talebiniz gönderilemez; durumu yöneticinize iletin.',
    },
    {
      soru: '"Talep sahibinin bir pozisyonu olmalıdır." uyarısı alıyorum.',
      cevap: 'Kaydınızda tanımlı bir pozisyon bulunmuyor, bu yüzden talep onay akışına giremez. İK veya yöneticinize başvurun.',
    },
    {
      soru: 'Talebimi nasıl iptal ederim?',
      cevap: 'Taleplerim > Gönderdiklerim sekmesinde "Beklemede" durumundaki talebi bulun ve Talebi İptal Et butonuna tıklayın.',
    },
    {
      soru: '"Sonuçlanmış talep iptal edilemez." uyarısını neden alıyorum?',
      cevap: 'Talebiniz uygulanmış ya da reddedilmiş. Sonuçlanan talep geri çekilemez; yeni bir değişiklik gerekiyorsa yeni talep oluşturun veya yöneticinize danışın.',
    },
    {
      soru: 'Gelen talebi reddederken "Lütfen bir ret notu girin" uyarısı çıkıyor.',
      cevap: 'İş arkadaşınızdan gelen talebi reddederken ret sebebi yazmanız gerekir. Not en fazla 2048 karakter olabilir.',
    },
    {
      soru: '"Bu talebin karşı tarafı değilsiniz." uyarısı ne anlama geliyor?',
      cevap: 'Kabul veya ret yalnızca talebin gönderildiği iş arkadaşı tarafından yapılabilir. Talep size gönderilmemişse işlem yapamazsınız.',
    },
    {
      soru: 'İş arkadaşım talebimi kabul etti, vardiyam neden hâlâ değişmedi?',
      cevap: 'Kabulden sonra talep yöneticinizin onayına geçer ve "Beklemede" görünür. Yönetici onaylayınca durum "Uygulandı" olur ve takviminiz güncellenir.',
    },
    {
      soru: 'Talebim kimde bekliyor, nasıl öğrenirim?',
      cevap: 'Gönderdiklerim listesindeki "Şu An Bekleyen" sütununa bakın. Ayrıntılar için Detaylar butonuyla onay adımlarını görebilirsiniz.',
    },
    {
      soru: 'Talebim hakkında bildirim alır mıyım?',
      cevap: 'Bildirim tercihlerinize göre talebinizin onaylandığı, reddedildiği, iş arkadaşınızın yanıt verdiği ya da talebin süresinin dolduğu size bildirilir.',
    },
    {
      soru: 'Açık Vardiyalar sekmesinde "Şu an talip olabileceğiniz açık vardiya yok." yazıyor.',
      cevap: 'Şu anda size uygun boş vardiya bulunmuyor. Yeni açık vardiya yayınlandığında bildirim almak için "Açık vardiya duyuruları" bildirimini açık tutun.',
    },
    {
      soru: 'Açık vardiyaya talip oldum, vardiya hemen bana mı geçer?',
      cevap: 'Hayır, talebiniz yöneticinizin onayına düşer ve Gönderdiklerim listesinde "Beklemede" görünür. Onaylanınca vardiya takviminize eklenir.',
    },
    {
      soru: 'Giriş veya çıkış yapamıyorum, "Giriş yapılamadı" uyarısı alıyorum.',
      cevap: 'Giriş/çıkış butonu yetkinize ve o güne ait vardiyanızın olmasına bağlıdır. Sorun sürerse yöneticinize bildirin; yöneticiniz saatlerinizi Ekip Listesi üzerinden elle girebilir.',
    },
    {
      soru: 'Giriş yapmayı unuttum, ne yapmalıyım?',
      cevap: 'Yöneticinize bildirin. Yöneticiniz giriş ve çıkış saatlerinizi açıklamayla birlikte elle kaydedebilir.',
    },
    {
      soru: 'Vardiyama gelmediğimde ne olur?',
      cevap: 'Planlı vardiyanıza gelmediğiniz tespit edilirse size ve bildirim tercihine göre yöneticinize bildirim gider. Durum vardiya bakiyelerinize de yansır.',
    },
    {
      soru: 'Yeni vardiya atandığında haberim olur mu?',
      cevap: 'Evet, bildirim tercihlerinize göre "Yeni vardiya atamanız var" bildirimi alırsınız. Ayrıca yaklaşan vardiyalar için hatırlatma bildirimi açılabilir.',
    },
    {
      soru: 'Tercihlerimdeki not alanında sınır var mı?',
      cevap: 'Not en fazla 1024 karakter olabilir. Talep notları ise en fazla 2048 karakterdir.',
    },
    {
      soru: 'Geçmiş tarihli bir vardiya için talep açabilir miyim?',
      cevap: 'Değişiklik Talebi butonu Yaklaşan sekmesindeki vardiyalarda bulunur; başlamış vardiyalar için talep onaylanamaz. Geçmiş bir günle ilgili düzeltme için yöneticinize başvurun.',
    },
    {
      soru: 'Takvimde bazı günlerde "Talep: onay sürüyor" yazıyor.',
      cevap: 'O vardiya için gönderdiğiniz bir talep henüz sonuçlanmamış. Sonuç Taleplerim sekmesinde görünür.',
    },
    {
      soru: 'Vardiyalarımı telefondan görebilir miyim?',
      cevap: 'Takvime Ekle butonuyla vardiyanızı telefonunuzun takvimine ekleyebilirsiniz. Böylece vardiyanız kişisel takviminizde etkinlik olarak görünür.',
    },
  ],

  'ayarlar': [
    {
      soru: 'Yeni birim nasıl eklerim?',
      cevap: 'Organizasyon Şeması sekmesinde sağ üstteki "Birim Ekle" butonuna tıklayın. Birim adını ve bağlı olacağı üst birimi seçip kaydedin.',
    },
    {
      soru: '"Üst birimde düzenleme yetkiniz yok; bu birimin altına birim ekleyemezsiniz." uyarısı alıyorum.',
      cevap: 'Alt birim eklemek için üst birimde düzenleme yetkiniz olmalıdır. Yetki için sistem yöneticinize başvurun.',
    },
    {
      soru: '"Bu birimde düzenleme yetkiniz yok." uyarısı ne anlama geliyor?',
      cevap: 'Bu birimi yalnızca görüntüleyebiliyorsunuz. Değişiklik yapmak için Birim Yetenekleri sekmesinde pozisyonunuza bu birimde "Düzenleme" yetkisi verilmesi gerekir.',
    },
    {
      soru: 'Birimi silerken "Alt birimleri olan birim silinemez." uyarısı alıyorum.',
      cevap: 'Önce bu birime bağlı alt birimleri silin veya başka bir üst birime taşıyın, ardından birimi silin.',
    },
    {
      soru: '"Pozisyonları olan birim silinemez. Önce pozisyonları silin." uyarısında ne yapmalıyım?',
      cevap: 'Birimdeki pozisyonları Pozisyonlar sekmesinden silin; dolu pozisyonlarda önce çalışanları başka pozisyona taşıyın.',
    },
    {
      soru: 'Pozisyonu silerken "Bu pozisyona bağlı çalışan bulunduğu için silinemez." uyarısı alıyorum.',
      cevap: 'Pozisyonda çalışan var. Önce çalışanı başka bir pozisyona taşıyın, ardından pozisyonu silin.',
    },
    {
      soru: '"Bu pozisyon bir veya daha fazla onay iş akışında onaylayıcı olarak görevli." uyarısı ne demek?',
      cevap: 'Pozisyonu boşaltmadan önce bu pozisyonun onaylayıcı olduğu akışlara yeni onaylayıcı belirlemeniz gerekir. Açılan etki penceresinde her akış için yerine geçecek pozisyonu seçip planı uygulayın.',
    },
    {
      soru: '"Bir pozisyon kendi doğrudan yöneticisi olamaz." uyarısı alıyorum.',
      cevap: 'Doğrudan Yönetici alanında pozisyonun kendisi seçilmiş. Başka bir yönetici pozisyonu seçin.',
    },
    {
      soru: '"Bu yönetici ataması bir döngü oluşturur" uyarısı ne anlama geliyor?',
      cevap: 'Seçtiğiniz yönetici, zincirde bu pozisyona bağlı kalıyor ve kendi üzerine kapanan bir döngü oluşuyor. Zincirin dışında kalan bir yönetici pozisyonu seçin.',
    },
    {
      soru: 'Pozisyonda müşteri adı için sınır var mı?',
      cevap: 'Müşteri adı en fazla 200 karakter olabilir.',
    },
    {
      soru: 'Çalışanı yeni pozisyona yerleştirirken tarih çakışması uyarısı çıkıyor.',
      cevap: 'Çalışanın aynı tarihlerde başka bir pozisyonu var. Sistem çakışmanın nasıl çözüleceğini (ör. önceki pozisyonu bitirme) sorar; uygun seçeneği seçip kaydedin.',
    },
    {
      soru: 'Boş pozisyonları nasıl görürüm?',
      cevap: 'Pozisyonlar sekmesinde "Sadece Boşlar" seçeneğine tıklayın. Birim bazında doluluk oranları için İstatistikler sekmesini kullanabilirsiniz.',
    },
    {
      soru: 'Onay akışını nasıl tanımlarım?',
      cevap: 'Birimin detayını açıp onay akışları bölümüne geçin, modülü seçin ve onay adımlarını sırayla ekleyin. Her adım için onaylayıcı pozisyonu seçip kaydedin.',
    },
    {
      soru: 'Pozisyona özel onay akışı ile birim akışı aynı anda varsa hangisi geçerli olur?',
      cevap: 'Pozisyona özel akış, birim akışından önceliklidir. Pozisyona özel akış silinirse birim akışı geçerli olur.',
    },
    {
      soru: '"Onay akışı boşaltılamaz: devralınacak bir üst birim akışı yok." uyarısı alıyorum.',
      cevap: 'Akıştaki tüm adımları kaldırırsanız talepler hiçbir onaylayıcıya düşmez. En az bir onaylayıcı bırakın ya da önce üst birime akış tanımlayın.',
    },
    {
      soru: 'Onay akışında boş bir pozisyon seçersem ne olur?',
      cevap: 'Sistem uyarı verir. Boş pozisyona düşen talepler, pozisyona biri atanana veya akış güncellenene kadar bekler.',
    },
    {
      soru: 'Rol ile kullanıcı yeteneği arasındaki fark nedir?',
      cevap: 'Rol, birden çok yetenekten oluşan pakettir ve pozisyona ya da kullanıcıya verilir. Kullanıcı yeteneği ise rolü değiştirmeden yalnızca o kişiye eklenen ek izindir.',
    },
    {
      soru: '"Sahip olmadığınız yetkileri veremezsiniz" uyarısı alıyorum.',
      cevap: 'Bir role veya kullanıcıya yalnızca kendinizde bulunan yetkileri verebilirsiniz. Uyarıda listelenen yetkileri çıkarın ya da işlemi bu yetkilere sahip bir yöneticiye yaptırın.',
    },
    {
      soru: '"Sahip olmadığınız yetkileri içeren bir rolü atayamazsınız" uyarısının nedeni nedir?',
      cevap: 'Atamak istediğiniz rol sizde olmayan yetkiler içeriyor. Bu rolü ancak bu yetkilere sahip bir yönetici atayabilir.',
    },
    {
      soru: '"Sistem yöneticisi rolünü yalnız sistem yöneticisi değiştirebilir." uyarısı alıyorum.',
      cevap: 'Sistem yöneticisi rolü korumalıdır. Bu rolle ilgili değişiklikleri sistem yöneticinize yaptırın.',
    },
    {
      soru: '"Bu yetki bir role verilemez." ne demek?',
      cevap: 'Bazı yetkiler role eklenemeyecek şekilde ayrılmıştır. Bu yetkiyi listeden çıkarıp kaydedin; ihtiyaç varsa sistem yöneticinize danışın.',
    },
    {
      soru: 'Rol değişikliğinin etkisini kaydetmeden nasıl görürüm?',
      cevap: 'Rol veya kullanıcı rolü değişikliği ekranında önizleme seçeneğini kullanın. Eklenecek ve kaldırılacak yetkileri görür, isterseniz sistemi o rolün gözünden gezersiniz; kalıcı değişiklik yapılmaz.',
    },
    {
      soru: 'Kullanıcısı olan bir rolü silebilir miyim?',
      cevap: 'Önce rolü kullanan kullanıcıları başka bir role taşımanız gerekir. Ardından rolü silebilirsiniz.',
    },
    {
      soru: 'Birim Yetenekleri tablosunda yaptığım değişiklik neden uygulanmadı?',
      cevap: 'Tablodaki değişiklikler "Kaydet" butonuna basılana kadar uygulanmaz. Vazgeçmek isterseniz "Değişiklikleri Geri Al" butonunu kullanın.',
    },
    {
      soru: 'Detaylara Erişim kutusunu neden işaretleyemiyorum?',
      cevap: 'Detaylara Erişim ve Düzenleme, Görüntüleme işaretlenmeden seçilemez. Önce Görüntüleme kutusunu işaretleyin.',
    },
    {
      soru: '"Bu birim için yetkiniz yok." uyarısı alıyorum.',
      cevap: 'Pozisyonunuzun bu birimde yetkisi bulunmuyor. Birim Yetenekleri sekmesinde gerekli seviyenin verilmesi için sistem yöneticinize başvurun.',
    },
    {
      soru: '"Şirket geneli kayıtları değiştirmek için tüm kök birimlerde düzenleme yetkisi gerekir." uyarısı ne demek?',
      cevap: 'Şirket genelini etkileyen ayarları değiştirmek için en üst seviyedeki tüm birimlerde Düzenleme yetkiniz olmalıdır. Yetkiniz yoksa işlemi sistem yöneticinize yaptırın.',
    },
    {
      soru: 'Çalışana kullanıcı hesabını nasıl açarım?',
      cevap: 'Yeni çalışan eklemek kullanıcı hesabı açmaz. Hesap, Çalışan Yönetimi listesinde (Tablo görünümü) Hesap sütununda "Hesabı Yok" yazan çalışanın satırındaki "Kullanıcı Oluştur" butonuyla açılır. E-posta adresini girin; şifreyi boş bırakırsanız çalışana e-postayla hesap kurulum bağlantısı gider ve çalışan kendi şifresini belirler.',
    },
    {
      soru: 'Kullanıcı e-posta onay bağlantısını almadı, ne yapmalıyım?',
      cevap: 'Email Onayı sütununda onaylanmamış görünen kullanıcının satırındaki işlemlerden onay e-postasını yeniden gönderin. Gelen kutusu yanında gereksiz e-posta klasörünü de kontrol etmesini isteyin.',
    },
    {
      soru: 'Ayrılan bir çalışanın kullanıcı hesabını silmeli miyim?',
      cevap: 'Genellikle gerekmez: işten çıkış kesinleşince çalışan pasife geçer ve DHR erişimi, işten çıkış sürecinde gösterilen tarihten sonra kendiliğinden kapanır. Kullanıcı Yönetimi\'ndeki silme işlemi geri alınamayabilir; yalnız gerçekten gerekiyorsa kullanın, emin değilseniz İK\'ya danışın.',
    },
    {
      soru: 'Bir çalışanın kaydını kimin görüntülediğini nasıl öğrenirim?',
      cevap: 'Denetim kaydında çalışanı ve tarih aralığını seçin. Kayda erişen kullanıcılar ve tarihleri listelenir; bu ekran yetkinize bağlıdır.',
    },
    {
      soru: 'Denetim kayıtlarını dışa aktarabilir miyim?',
      cevap: 'Evet. Denetim kaydı ekranında filtreleri uyguladıktan sonra dışa aktarma butonuna tıklayıp dosya biçimini seçin.',
    },
    {
      soru: 'Doğum günü tebrik e-postasının nasıl görüneceğini kaydetmeden görebilir miyim?',
      cevap: 'Evet, bildirim ayarlarında "Önizleme" butonuyla e-postanın görünümünü kontrol edebilirsiniz.',
    },
    {
      soru: 'Deneme süresi hatırlatma günlerini boş bırakırsam ne olur?',
      cevap: 'Boş bırakıp kaydederseniz üst birimin değeri, o da yoksa 45 gün kullanılır. Bu değer mevcut çalışanların günlerini değiştirmez; yalnızca yeni çalışan ve pozisyon eklerken kullanılır.',
    },
    {
      soru: 'Deneme süresi değerlendirme anketini açarken hangi alanlar zorunlu?',
      cevap: 'En az bir soru, anketi dolduracak en az bir kişi, sonuçları alacak en az bir kişi ve doldurma süresi girilmelidir. Anket sonuçları seçilen kişilere CSV dosyası olarak e-postayla gönderilir.',
    },
    {
      soru: 'Birim ayarı neden üst birimden geliyor görünüyor?',
      cevap: 'Birimin kendi ayarı yoksa üst birimin ayarı uygulanır. Yeni değer girip kaydederseniz birime özel olur; ayarı silerek tekrar üst birim değerine dönebilirsiniz.',
    },
    {
      soru: 'Şirket alanını silersem girilmiş değerler ne olur?',
      cevap: 'Silinen alan ve bölümdeki bilgiler artık gösterilmez. Silmeden önce içeriği kontrol edin; emin değilseniz İK\'ya danışın.',
    },
  ],
}
