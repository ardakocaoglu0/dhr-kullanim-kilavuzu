// Sık sorulan sorular: DHR Mobil — Başlarken ve Kişisel (1): giriş, arayüz, ana sayfa, profil, izin, mesai, vardiya, ek mesai
export default {
  'mobil-kurulum-giris': [
    {
      soru: `"Bu koda ait bir kurum bulunamadı. Kodu kontrol edin." uyarısını neden alıyorum?`,
      cevap: `Yazdığınız bağlantı kodu hiçbir kurumla eşleşmedi. Kod, kurumunuzun DHR web adresinin ilk parçasıdır; yazım hatası olmadığından emin olup tekrar Bağlan'a dokunun. Emin değilseniz İK biriminize sorun.`,
    },
    {
      soru: `"Bağlantı servisine ulaşılamadı" uyarısı ne demek?`,
      cevap: `Telefonunuz kurum bağlantısını doğrulayan servise ulaşamıyor demektir. İnternet bağlantınızı (Wi-Fi veya mobil veri) kontrol edip tekrar deneyin.`,
    },
    {
      soru: `Bağlan'a dokununca kod boş bırakılırsa ne olur?`,
      cevap: `"Kurumunuzun bağlantı kodunu girin." uyarısı çıkar ve devam edilemez. Kodu yazdıktan sonra tekrar Bağlan'a dokunun.`,
    },
    {
      soru: `"E-posta veya şifre hatalı" uyarısını neden alıyorum?`,
      cevap: `Girdiğiniz e-posta ya da şifre kayıtlarla eşleşmiyor. Şifreyi göster simgesiyle yazdığınızı kontrol edin; hatırlamıyorsanız Şifremi Unuttum'a dokunun.`,
    },
    {
      soru: `"Hesabınız geçici olarak kilitlendi" veya "Çok fazla deneme yapıldı" uyarısı çıktı, ne yapmalıyım?`,
      cevap: `Çok sayıda hatalı denemeden sonra güvenlik için giriş geçici olarak durdurulur. Biraz bekleyip tekrar deneyin; şifrenizi hatırlamıyorsanız beklerken Şifremi Unuttum ile yeni şifre belirleyebilirsiniz.`,
    },
    {
      soru: `"Bu ağdan erişim engellendi" uyarısı ne anlama geliyor?`,
      cevap: `Kurumunuz bu internet ağından girişe izin vermiyor demektir. Başka bir ağa (örneğin mobil veri) geçmeyi deneyin; sorun sürerse kurum yöneticinizle iletişime geçin.`,
    },
    {
      soru: `"Doğrulama kodu geçersiz ya da süresi dolmuş" uyarısını neden alıyorum?`,
      cevap: `Kodlar kısa süre geçerlidir. Doğrulayıcı uygulamanızdaki güncel 6 haneli kodu girin ya da Kodu e-posta ile gönder ile yeni kod isteyin. Kurtarma kodu giriyorsanız her kodun yalnız bir kez kullanılabildiğini unutmayın.`,
    },
    {
      soru: `Şifremi unuttum, yeni şifreyi nasıl belirlerim?`,
      cevap: `Giriş ekranında Şifremi Unuttum'a dokunup e-posta adresinizi yazın ve Bağlantı gönder'e dokunun. Gelen e-postadaki bağlantıyı telefonunuzda açarak yeni şifrenizi belirlersiniz. Adrese ait bir hesap varsa bağlantı gönderilir; mesaj her durumda aynı çıkar.`,
    },
    {
      soru: `"Oturumunuz sonlandı. Lütfen tekrar giriş yapın." mesajını neden görüyorum?`,
      cevap: `Oturumunuz kapanmıştır; örneğin şifrenizi başka bir cihazdan değiştirdiyseniz tüm cihazlardaki oturumlar kapanır. E-posta ve şifrenizle yeniden giriş yapmanız yeterlidir.`,
    },
    {
      soru: `"Bağlantı kurulamadı" ekranı çıktı, oturumum kapandı mı?`,
      cevap: `Hayır. Sunucuya ulaşılamadığında oturumunuz açık kalmaya devam eder. İnternet bağlantınızı kontrol edip Tekrar Dene'ye dokunmanız yeterlidir.`,
    },
    {
      soru: `"Sürüm doğrulanamadı" ekranında oturum bilgilerim kaybolur mu?`,
      cevap: `Hayır. Sürüm hizmetine o an erişilemiyorsa oturum bilgileriniz korunur; bağlantı sağlandığında sürüm yeniden kontrol edilir. Tekrar dene ile kendiniz de başlatabilirsiniz.`,
    },
    {
      soru: `"Yeni sürüm hazır" dediğinde güncellemeyi hemen yapmak zorunda mıyım?`,
      cevap: `Hayır. Bu ekranda Daha sonra'ya dokunup devam edebilirsiniz. Zorunlu olan, başlığı "Güncelleme gerekli" olan ekrandır; onda Güncelle ile mağazadan güncellemeniz gerekir.`,
    },
  ],

  'mobil-genel-arayuz': [
    {
      soru: `"Telefonun bildirim izni kapalı" uyarısını neden alıyorum?`,
      cevap: `Bildirim Ayarları'ndaki anahtarı açmak yetmez; telefonun kendi ayarlarında da DHR için bildirim izni verilmelidir. Uyarıdaki yönlendirmeyle cihaz ayarlarını açıp izni verin. Profil sekmesindeki Bildirimler satırında durum "İzin Verilmedi" olarak görünür.`,
    },
    {
      soru: `Bu cihazda bildirim al anahtarını kapatırsam başka neler kapanır?`,
      cevap: `Yalnız bu telefondaki anlık bildirimler kapanır. Uygulama içindeki Bildirimler listesi ve e-postalar açık kalır. Kapatmadan önce duyurular, iş akışı değişiklikleri, hatırlatmalar ve varsa onay talepleri için bir onay penceresi gösterilir.`,
    },
    {
      soru: `Sessiz saatler ne işe yarar, o saatlerdeki bildirimler kaybolur mu?`,
      cevap: `Sessiz saatler aralığında telefona bildirim gönderilmez; saat bitince bildirimler toplu olarak gelir. Başlangıç ve bitiş saati aynı seçilemez.`,
    },
    {
      soru: `Bazı e-posta bildirimlerini neden kapatamıyorum?`,
      cevap: `Güvenlik gibi zorunlu bildirimlerin satırında "Bu e-posta kapatılamaz" yazar. Diğer bildirimleri modüllere göre açıp kapatabilirsiniz.`,
    },
    {
      soru: `Bildirim ayarını değiştirdim ama "Değişiklik kaydedilemedi, önceki ayar geri yüklendi" dedi.`,
      cevap: `Değişiklik sunucuya iletilemedi, bu yüzden ayar eski haline döndü. İnternet bağlantınızı kontrol edip değişikliği yeniden yapın.`,
    },
    {
      soru: `Bildirime dokununca "Kayıt açılamadı" uyarısı çıkıyor.`,
      cevap: `İlgili kayıt silinmiş olabilir ya da onu görüntüleme yetkiniz yoktur. Bildirim listede kalır; ayrıntı için ilgili modülden kaydı kontrol edin veya yöneticinize sorun.`,
    },
    {
      soru: `Okunmamış bildirimleri nasıl ayırırım?`,
      cevap: `Bildirimler ekranında Okunmamış filtresini seçebilir, bir bildirime dokunarak okundu işaretleyebilir ya da Tümünü okundu işaretle ile hepsini topluca kapatabilirsiniz.`,
    },
    {
      soru: `Takvim Entegrasyonu'nda "henüz açılmamış" uyarısı görüyorum.`,
      cevap: `Google Takvim entegrasyonu kurumunuz için açılmamıştır. Açılması için sistem yöneticinize başvurun.`,
    },
    {
      soru: `Google ile Bağlan'a dokundum ama bağlantı kurulmadı.`,
      cevap: `Google'daki izin ekranında izin verilmediyse "Google izni verilmedi; bağlantı kurulmadı." çıkar. Bağlantı isteğinin süresi dolduysa da tekrar denemeniz gerekir. Google Takvim'e Bağlan'a yeniden dokunup izni onaylayın.`,
    },
    {
      soru: `Takvimime hangi DHR kayıtları gidiyor?`,
      cevap: `Siz seçersiniz: izinler, görevler ve etkinlikler, vardiyalar, seyahatler, resmî tatiller, son tarihler, doğum günleri gibi gruplar ayrı ayrı açılıp kapatılabilir. Kişisel kayıtlardan yalnız onaylanmış olanlar gider; iptal edilen veya reddedilen kayıt takvimden kalkar.`,
    },
    {
      soru: `Google Takvim bağlantısını kesersem ne olur?`,
      cevap: `Google hesabınızdaki "DHR" adlı takvim ve içindeki tüm kayıtlar silinir; kendi takvimlerinize dokunulmaz. Seçimleriniz saklanır, istediğiniz zaman yeniden bağlanabilirsiniz.`,
    },
    {
      soru: `Takvimde bazı seçenekler neden "Kullanıma kapalı" yazıyor?`,
      cevap: `Etiketi taşıyan seçenek (örneğin Ekibimin izinleri) şu an kullanıma açık değildir ve açılamaz.`,
    },
    {
      soru: `"Mobil uygulamamız bakımda" ekranı çıktı, işlerimi yapamaz mıyım?`,
      cevap: `Bakım süresince DHR Web ile devam et butonuyla kurumunuzun web sayfasını açıp işlemlerinize oradan devam edebilirsiniz. Sayfa açılmazsa bağlantınızı kontrol edip tekrar deneyin.`,
    },
  ],

  'mobil-ana-sayfa': [
    {
      soru: `Ana Sayfa'da Yönetim / Kişisel anahtarı neden yok?`,
      cevap: `Anahtar yalnız hem yönetim panelini hem kişisel paneli görme yetkiniz varsa çıkar. Yalnız birine yetkiliyseniz doğrudan o panel açılır.`,
    },
    {
      soru: `Ana Sayfa'da kart yerine yalnız kısayollar görüyorum.`,
      cevap: `Yönetim ve kişisel panellerin ikisini de görme yetkiniz yoksa Ana Sayfa'da yalnız açabildiğiniz modüllerin kısayolları listelenir. Panel yetkisi için İK birimine başvurun.`,
    },
    {
      soru: `Talep Merkezi'nde "Henüz talebiniz yok." yazıyor.`,
      cevap: `Henüz izin, doküman veya masraf talebi oluşturmamışsınız demektir. Talep açtığınızda burada Beklemede, Onaylandı gibi durumlarıyla ve Mevcut Onaylayan bilgisiyle görünür.`,
    },
    {
      soru: `Vardiyam kartı neden görünmüyor?`,
      cevap: `Kart, kişisel panelde Vardiyalarım yetkiniz olduğunda gösterilir. Yetkiniz varsa bugünkü vardiya "Bugün" başlığıyla yazar.`,
    },
    {
      soru: `Duyurular kartındaki "Okunmadı", "Önemli duyuru" ve "Okuma onayı" ne demek?`,
      cevap: `Okunmadı, henüz açmadığınız duyuruyu gösterir. Önemli duyuru işaretli olanlar öne çıkarılmıştır. Okuma onayı olan duyuruyu okuduğunuzu onaylamanız beklenir.`,
    },
    {
      soru: `Şu Anda İzinde Olan Ekip Arkadaşlarım kartı boş görünüyor.`,
      cevap: `"Bu dönemde izinde olan ekip arkadaşın yok." yazıyorsa kartın gösterdiği dönemde ekibinizde izinli kimse yok demektir. İzinli olanlar için dönüş tarihi ve izin başlangıcı gösterilir.`,
    },
    {
      soru: `Yaklaşan İzinler kartında neden bir şey yok?`,
      cevap: `Kart önümüzdeki günlerdeki izinlerinizi listeler; "Yaklaşan izin yok." yazıyorsa o aralıkta onaylı veya planlı bir izniniz görünmüyordur.`,
    },
    {
      soru: `İzin, Doküman ve Masraf kartlarındaki sayılar neyi gösteriyor?`,
      cevap: `İzin ve doküman kartlarında Onaylanan ve Bekleyen kayıt sayılarınız, masraf kartında son masraf talepleriniz yer alır. Her kart ilgili modül için yetkiniz varsa görünür.`,
    },
    {
      soru: `Yaklaşan doğum günü ve iş yıldönümü kartları neden boş?`,
      cevap: `Yaklaşan dönemde kimsenin doğum günü ya da iş yıldönümü yoksa "Yaklaşan doğum günü yok." veya "Yaklaşan iş yıldönümü yok." yazar. Günü gelenlerde "Bugün" etiketi çıkar.`,
    },
    {
      soru: `Ruh hali kartında fikrimi değiştirebilir miyim?`,
      cevap: `Evet. Yanıtlamak isteğe bağlıdır ve aynı gün içinde başka bir emoji seçerek yanıtınızı değiştirebilirsiniz. Her gün yanıtladıkça gün seriniz uzar.`,
    },
    {
      soru: `Ruh hali geçmişimde tarih aralığını neden seçemiyorum?`,
      cevap: `Geçmiş Yanıtlarım'da Son 7 gün, Son 30 gün veya Özel aralık seçilir. Özel aralık en fazla 366 gün olabilir; daha uzun bir aralık seçerseniz uyarı alırsınız.`,
    },
    {
      soru: `"Kontrol Paneli verileri yüklenemedi" uyarısı çıktı.`,
      cevap: `Veriler sunucudan alınamamıştır. İnternet bağlantınızı kontrol edip ekranı aşağı çekerek yenileyin.`,
    },
  ],

  'mobil-profilim': [
    {
      soru: `Profil fotoğrafımı neden değiştiremiyorum?`,
      cevap: `Fotoğraf değiştirme Bilgilerim yetkisine bağlıdır. Yetkiniz yoksa fotoğrafa dokunmak bir işlem başlatmaz; İK birimine başvurun.`,
    },
    {
      soru: `"Fotoğraf kitaplığı izni gerekli" uyarısını neden alıyorum?`,
      cevap: `Galeriden seç dediğinizde telefon, fotoğraflarınıza erişim izni ister. İzni vermediyseniz fotoğraf seçilemez; telefonun ayarlarından DHR için fotoğraf iznini açın.`,
    },
    {
      soru: `"Yalnız JPEG, PNG veya WebP görseller kullanılabilir" uyarısı ne demek?`,
      cevap: `Profil fotoğrafı olarak yalnız bu üç biçimdeki görseller kabul edilir. Fotoğrafınız farklı biçimdeyse (örneğin PDF) bu üç biçimden birine çevirip yeniden seçin.`,
    },
    {
      soru: `"Görsel en fazla 50 MB olabilir" uyarısı çıktı.`,
      cevap: `Seçtiğiniz görsel izin verilen boyutu aşıyor. Daha küçük bir görsel seçin veya fotoğrafı küçülterek yeniden deneyin.`,
    },
    {
      soru: `Fotoğrafı yükledim ama "Fotoğraf yüklenemedi" dedi.`,
      cevap: `Yükleme sırasında bağlantı ya da sunucu sorunu olmuştur. İnternetinizi kontrol edip aynı fotoğrafı tekrar seçin; mevcut fotoğrafınız değişmeden kalır.`,
    },
    {
      soru: `Şifre değiştirirken "Şifre en az 1 küçük harf, 1 büyük harf, 1 rakam ve 1 özel karakter içermelidir" uyarısı alıyorum.`,
      cevap: `Yeni şifre en az 8 karakter olmalı; büyük harf, küçük harf, rakam ve @$!%*?& özel karakterlerinden en az biri içermelidir. Ekrandaki Şifre Gereksinimleri listesine göre kontrol edin.`,
    },
    {
      soru: `"Yeni şifre mevcut şifre ile aynı olamaz" ve "Şifreler eşleşmiyor" uyarıları ne demek?`,
      cevap: `Birincisi, yeni şifrenin eskisinden farklı olması gerektiğini belirtir. İkincisi, Yeni Şifre ile Yeni şifre (tekrar) alanlarının aynı yazılmadığını gösterir.`,
    },
    {
      soru: `"Şifre değiştirilemedi" uyarısı çıktı, ne yapmalıyım?`,
      cevap: `Mevcut şifrenizi yanlış yazmış olabilirsiniz ya da bağlantı sorunu yaşanmıştır. Mevcut şifreyi dikkatle girip yeniden deneyin.`,
    },
    {
      soru: `İki Adımlı Doğrulama'yı etkinleştirirken "Kod doğrulanamadı" uyarısı alıyorum.`,
      cevap: `Girdiğiniz 6 haneli kod geçersiz ya da süresi dolmuştur. Doğrulayıcı uygulamanızdaki güncel kodu girip Doğrula ve Etkinleştir'e dokunun.`,
    },
    {
      soru: `Kurtarma kodlarını neden kaydetmeliyim?`,
      cevap: `Doğrulayıcı uygulamanıza erişimi kaybederseniz her kodu bir kez kullanarak giriş yapabilirsiniz. Kodları Kopyala ile alıp güvenli bir yere saklayın.`,
    },
    {
      soru: `Authenticator Uygulamasında Aç butonu çalışmadı.`,
      cevap: `"Authenticator uygulaması açılamadı." çıkarsa Anahtarı Kopyala ile Manuel giriş anahtarını alın ve doğrulayıcı uygulamanıza elle ekleyin.`,
    },
    {
      soru: `E-posta ile doğrulama kodu gelmedi.`,
      cevap: `Kod E-posta ile Kod yönteminde hesabınızın e-posta adresine gönderilir. Gelmediyse Kodu Tekrar Gönder'e dokunun. "Doğrulama kodu gönderilemedi" uyarısı çıkıyorsa bağlantınızı kontrol edip yeniden deneyin.`,
    },
    {
      soru: `Profil sekmesinde Bildirimler satırı "İzin Verilmedi" gösteriyor.`,
      cevap: `Telefonun bildirim izni DHR için kapalı demektir. Telefon ayarlarından izni verdikten sonra bildirimleri alabilirsiniz.`,
    },
    {
      soru: `Çıkış Yap'a dokunursam ne olur?`,
      cevap: `Önce "Oturumu kapatmak istediğinize emin misiniz?" diye sorulur. Onaylarsanız oturum kapanır ve giriş ekranına dönersiniz.`,
    },
  ],

  'mobil-izinlerim': [
    {
      soru: `"Yetersiz izin bakiyesi" uyarısı alıyorum, ne yapabilirim?`,
      cevap: `Uyarıda kalan bakiyeniz ile talep ettiğiniz gün sayısı yazar. Bu izin türünde negatif bakiyeye izin verilmiyorsa talebi kalan bakiyenizi aşmayacak şekilde kısaltın. Bakiyenizi İzin Bakiyesi kartında görebilirsiniz.`,
    },
    {
      soru: `Bazı izin türlerinde "izin verilen maksimum negatif bakiye" uyarısı neden çıkıyor?`,
      cevap: `O izin türünde bakiye belli bir sınıra kadar eksiye düşebilir. Uyarıda kalan bakiyeniz, talep ettiğiniz gün ve izin verilen en fazla eksi bakiye yazar; talebinizi bu sınırın içinde tutun.`,
    },
    {
      soru: `"Bu izin türü yalnızca … tarihleri arasında kullanılabilir" uyarısı ne demek?`,
      cevap: `Doğum günü izni gibi türler yalnız belirli bir tarih penceresinde alınabilir. Uyarıda yazan aralıkta (doğum gününüzden önceki ve sonraki çalışma günleri arasında) bir tarih seçin.`,
    },
    {
      soru: `"İzin talep süresi en az / en fazla … gün olmalı" uyarısını neden alıyorum?`,
      cevap: `Seçtiğiniz izin türünün alt ve üst gün sınırı vardır. Uyarıdaki sayıya uyacak şekilde tarih aralığını kısaltın veya uzatın.`,
    },
    {
      soru: `"Seçilen günlerin tamamı resmî tatil" uyarısı çıktı.`,
      cevap: `Resmî tatil günleri izinden düşülmez. Seçtiğiniz günlerin hepsi tatil olduğu için düşülecek gün kalmamıştır; çalışma günlerini de kapsayan bir aralık seçin.`,
    },
    {
      soru: `İzin süresinde hafta sonu veya mola saatleri sayılıyor mu?`,
      cevap: `Hayır. Önizlemede çalışma günü dışındaki günler, resmî tatiller ve mola saatleri hesaba dahil edilmez. Göndermeden önce Günlük Detaylar bölümünden hesabı inceleyebilirsiniz.`,
    },
    {
      soru: `Aynı tarihlerde zaten izin veya bekleyen talep olduğu uyarısı ne anlama geliyor?`,
      cevap: `Seçtiğiniz tarihlerde aynı izin türünde onaylı ya da bekleyen bir talebiniz var. Tarihleri değiştirin; yanlışlık olduğunu düşünüyorsanız yöneticinize bildirin.`,
    },
    {
      soru: `"Bu saatlerde izin kullanılamaz" uyarısı neden çıkıyor?`,
      cevap: `Seçtiğiniz tarihlerde onaylı veya onay bekleyen bir ek mesainiz var. Ek mesai saatlerine izin kullanılamaz; tarih veya saatleri değiştirin.`,
    },
    {
      soru: `"Dosya yüklemek zorunludur" uyarısını neden alıyorum?`,
      cevap: `Seçtiğiniz izin türü belge istiyor. Dosya Yükle ile belgeyi ekleyin. En fazla izin verilen sayıda dosya yüklenebilir ve dosya başına sınır 50 MB'dir.`,
    },
    {
      soru: `"Lütfen bir açıklama belirtin" uyarısı çıkıyor.`,
      cevap: `Bu izin türünde açıklama alanı zorunludur. Talebinizin gerekçesini kısaca yazıp Gönder'e dokunun.`,
    },
    {
      soru: `Vekil Çalışan alanını doldurmak zorunda mıyım?`,
      cevap: `Hayır, alan isteğe bağlıdır. Yalnız kendinizi vekil seçemezsiniz.`,
    },
    {
      soru: `Tahmini Bakiye'de seçebileceğim tarih sınırlı mı?`,
      cevap: `Evet. Bugünden en fazla 1 yıl öncesi veya sonrası seçilebilir; aksi halde tarih uyarısı çıkar. Sonuç yaklaşıktır ve bugünkü kurallara göre hesaplanır.`,
    },
    {
      soru: `İzin Çıktısı aldım, sonra ne yapmalıyım?`,
      cevap: `Çıktıdaki belgeyi imzalayıp İK yöneticinize göndermeniz gerekir. Bu uyarı Dışa Aktar menüsünden İzin Çıktısı seçtiğinizde Devam Et'ten önce gösterilir.`,
    },
    {
      soru: `İzin listemde "Henüz izin talebiniz yok" yazıyor.`,
      cevap: `Henüz izin talebi oluşturmadınız ya da seçtiğiniz durum filtresinde talep yok demektir. "Bu durumda izin talebi yok" yazıyorsa filtreyi Tüm İzin Talepleri'ne çevirin.`,
    },
  ],

  'mobil-mesailerim': [
    {
      soru: `QR okutma ekranında "Kamera erişimi reddedildi" uyarısı çıkıyor.`,
      cevap: `Kamera izni verilmemiş. Kameraya izin ver'e dokunun; telefon yeniden izin istemiyorsa cihaz ayarlarından DHR için kamera iznini açın. Kamera yalnız kodu okuturken kullanılır.`,
    },
    {
      soru: `"Konum izni reddedildi" veya "Konum izni gerekli" uyarısı alıyorum.`,
      cevap: `QR ile giriş ve çıkışı doğrulamak için işlem sırasında konumunuza erişilir. Konuma izin ver'e dokunun; izin kapalıysa Uygulama ayarlarını aç'la cihaz ayarlarından konum iznini verin.`,
    },
    {
      soru: `"Konum bilgisi alınamadı" ve "süre aşıldı" uyarıları ne anlama geliyor?`,
      cevap: `Telefonun konum servisi kapalı olabilir ya da konum zamanında alınamamıştır. Konum servisinin açık olduğundan emin olun, açık bir alana geçip Tekrar dene'ye dokunun.`,
    },
    {
      soru: `"QR koda çok uzaktasınız" uyarısını neden alıyorum?`,
      cevap: `Konumunuz, QR kodun bulunduğu yerden izin verilen mesafenin dışında kalıyor. Uyarıda yaklaşık uzaklığınız ve izin verilen mesafe metre olarak yazar; koda yaklaşıp tekrar okutun.`,
    },
    {
      soru: `"QR kodun süresi doldu" uyarısı çıktı.`,
      cevap: `Ekranda gösterilen kod belli aralıklarla yenilenir. Eski bir görüntüyü değil, ekrandaki güncel kodu okutun.`,
    },
    {
      soru: `"Bu QR diğer yön için" veya "Bu QR yalnız giriş için" uyarısı ne demek?`,
      cevap: `Giriş yapmak isterken çıkış kodunu (ya da tersini) okutmuşsunuz. Ekrandaki düğmeye uygun yönün QR kodunu okutun.`,
    },
    {
      soru: `"Bu kod geçerli bir puantaj QR'ı değil" veya "Bu QR farklı bir sunucuya ait" uyarısı çıkıyor.`,
      cevap: `Okuttuğunuz kod mesai için üretilmiş bir QR değildir ya da başka bir kuruma aittir. Kurumunuzun mesai QR kodunu okutun.`,
    },
    {
      soru: `"Bu QR pasife alınmış" veya "Bu QR'ın süresi dolmuş" uyarısı ne demek?`,
      cevap: `Okuttuğunuz sabit QR artık kullanımda değildir. Güncel kod için İK birimine veya yöneticinize başvurun.`,
    },
    {
      soru: `QR okutunca neden "Giriş mi, Çıkış mı?" diye soruyor?`,
      cevap: `Bu soru, hem giriş hem çıkış için kullanılabilen sabit QR kodlarda çıkar; uygulama o anki duruma göre önerdiği seçeneği işaretli getirir. Doğru olanı seçip Onayla'ya dokunun. Yalnız giriş ya da yalnız çıkış için tanımlı kodlarda bu soru sorulmaz, kayıt doğrudan yapılır.`,
    },
    {
      soru: `"Bugün zaten giriş yaptınız" ve "Önce giriş yapmalısınız" uyarıları ne demek?`,
      cevap: `Birincisinde bugünkü girişiniz zaten kayıtlıdır, tekrar giriş yapılamaz. İkincisinde çıkış yapabilmek için önce giriş kaydınızın olması gerekir.`,
    },
    {
      soru: `İnternetim yokken QR okutursam ne olur?`,
      cevap: `"İnternet bağlantısı yok. Bağlantı gelince tekrar okutun." uyarısı çıkar ve kayıt oluşmaz. Bağlantı geldikten sonra kodu yeniden okutun.`,
    },
    {
      soru: `"Bugün henüz giriş yapmadınız" uyarısı neden görünüyor?`,
      cevap: `Bugünkü Mesaim'de giriş kaydınız yoktur. Giriş QR kodunu okutarak kaydınızı oluşturun.`,
    },
    {
      soru: `Uzaktan girişte "Ev konumunuz tanımlı değil" uyarısı alıyorum.`,
      cevap: `Uzaktan giriş için önce Ev Adresim ekranından ev konumunuzu tanımlamanız gerekir. Konumu onayladıktan sonra değiştirmek için talep oluşturursunuz.`,
    },
    {
      soru: `"Ev konumunuzdan uzaktasınız" uyarısı girişimi engeller mi?`,
      cevap: `Hayır, kaydınız yine oluşturulur. Ancak tolerans mesafesi aşıldığı için yöneticinize uzak olarak görünür.`,
    },
    {
      soru: `Düzeltme Talebi neden açılamıyor?`,
      cevap: `Bu gün için düzeltme talebi açılamıyorsa gün tamamlanmamış sayılmıyordur; ya da o gün için zaten bekleyen bir talebiniz vardır. Onay akışı tanımlı değilse de talep gönderilemez, bu durumda İK birimine bildirin.`,
    },
    {
      soru: `Ev konumu değişiklik talebim onaylanana kadar hangi konum geçerli?`,
      cevap: `Talebiniz onaylanana kadar mevcut ev konumunuz geçerli kalır. Talep için değişiklik gerekçesi yazmanız zorunludur.`,
    },
  ],

  'mobil-vardiyalarim': [
    {
      soru: `Yer Değiştir, Devret ve Bırak arasındaki fark nedir?`,
      cevap: `Yer Değiştir'de vardiyanızı bir iş arkadaşınızın vardiyasıyla değiştirirsiniz. Devret'te iş arkadaşınız vardiyanızı devralır. Bırak'ta vardiyanızı bırakırsınız; onaylanırsa açık vardiya olur.`,
    },
    {
      soru: `Vardiya değişim talebinde bazı hücreler neden gri?`,
      cevap: `Renkli hücreler kurallara uyar; gri hücreler uymaz. Nedenini görmek için gri hücreye dokunun. Seçili hücre kurallara uyuyorsa "Kurallara uyar" mesajı çıkar.`,
    },
    {
      soru: `"Biriminizde bu tarihler için iş arkadaşı bulunamadı" uyarısı ne demek?`,
      cevap: `Seçtiğiniz tarihler için değişim yapabileceğiniz bir iş arkadaşı görünmüyor. Başka bir vardiya veya tarih seçerek deneyin.`,
    },
    {
      soru: `Talebimin durumu "İş Arkadaşı Kabul Etti" olarak göründü, bitti mi?`,
      cevap: `Hayır. Önce iş arkadaşınız kabul eder, ardından biriminizin vardiya onay akışındaki onaylayanlar karar verir. Süreç tamamlandığında durum Uygulandı olur.`,
    },
    {
      soru: `Talebim neden "Süresi Doldu" oldu?`,
      cevap: `Talep sonuçlanmadan vardiya başlarsa talep vardiya başlangıcında düşer. Bu yüzden talebi vardiyadan yeterince önce açmak gerekir.`,
    },
    {
      soru: `Gönderdiğim talebi iptal edebilir miyim?`,
      cevap: `Talep ayrıntısından Talebi İptal Et ile iptal edebilirsiniz. Sonuçlanmış bir talep ise iptal edilemez.`,
    },
    {
      soru: `Bana gelen talebi reddederken neden gerekçe soruyor?`,
      cevap: `Reddetmek için ret gerekçesi yazmak zorunludur ("Lütfen ret gerekçesi girin."). Gerekçe en çok 1024 karakter olabilir. Kabul Et'te ise yalnız onay istenir.`,
    },
    {
      soru: `"Vardiya onay akışı tanımlanmamış" uyarısı çıktı.`,
      cevap: `Bu talep için vardiya onay akışı tanımlı değildir; talep gönderilemez. Yöneticinize veya İK birimine bildirin.`,
    },
    {
      soru: `Başkasının vardiyası için talep açabilir miyim?`,
      cevap: `Hayır. Yalnız kendinize atanmış vardiya için değişim talebi açabilirsiniz.`,
    },
    {
      soru: `Açık Vardiyalar'da bazı vardiyalar neden "Uygun değil"?`,
      cevap: `Vardiya sizin için kurallara uymuyor demektir; eksik olan şart "Eksik" bölümünde gösterilir. Uygun olanlara Talip Ol'la başvurursunuz; talep biriminizin onay akışından geçer ve onaylanınca vardiya size atanır.`,
    },
    {
      soru: `Açık Vardiyalar listem boş.`,
      cevap: `"Şu anda açık vardiya yok." yazıyorsa duyurulmuş açık vardiya bulunmuyordur. Bir iş arkadaşınız vardiyasını bıraktığında burada görünür.`,
    },
    {
      soru: `Bugün kartında "Bugün vardiyanız yok" yazıyor.`,
      cevap: `Bugüne planlanmış vardiyanız yoktur. Karttaki Sıradaki satırında bir sonraki vardiyanızın tarihi, şablonu ve saati görünür; Yaklaşan sekmesi önümüzdeki 30 günü listeler.`,
    },
    {
      soru: `Vardiyamı telefon takvimime nasıl eklerim?`,
      cevap: `Sıradaki vardiya kartındaki Takvime Ekle ile vardiyanızı takvim dosyası olarak alabilirsiniz. Dosya hazırlanamazsa "Takvim dosyası indirilemedi" uyarısı çıkar; tekrar deneyin.`,
    },
    {
      soru: `Vardiya saatleri neden benim saatimden farklı görünüyor?`,
      cevap: `Saatler, vardiyanın bağlı olduğu konumun saat dilimine göre gösterilir; ekranda "… saatiyle" notu yazar. Kayıtlar çalışanın konumunun saatiyle tutulur.`,
    },
  ],

  'mobil-ek-mesailerim': [
    {
      soru: `"Seçilen ek mesai türü bu çalışanın biriminde tanımlı değil" uyarısı ne demek?`,
      cevap: `Seçtiğiniz ek mesai türü biriminizde kullanıma açık değildir. Listedeki başka bir tür seçin; ihtiyacınız olan tür yoksa İK birimine bildirin.`,
    },
    {
      soru: `"Biriminiz için ek mesai onay akışı tanımlı değil" uyarısını neden alıyorum?`,
      cevap: `Biriminizde ek mesai onay akışı henüz tanımlanmamıştır; bu yüzden talep gönderilemez. İK ile iletişime geçin.`,
    },
    {
      soru: `"Mevcut bir ek mesai kaydıyla çakışıyor" uyarısı çıktı.`,
      cevap: `Seçtiğiniz saat aralığı, daha önce girdiğiniz onaylı ya da bekleyen bir ek mesaiyle çakışıyor. Uyarıda tarih, saat ve kaydın türü yazar; saatleri buna göre değiştirin.`,
    },
    {
      soru: `"İzinle çakışıyor" uyarısı ne anlama geliyor?`,
      cevap: `O saatlerde onaylı veya bekleyen bir izniniz var. İzinli saatlere ek mesai girilemez; ek mesaiyi izin dışındaki saatlere alın.`,
    },
    {
      soru: `"Günlük ek mesai sınırı aşılıyor" uyarısı neden çıkıyor?`,
      cevap: `O gün için girdiğiniz toplam ek mesai, izin verilen günlük sınırı aşıyor. Uyarıda toplam saat ve sınır yazar; süreyi sınırın altına indirin.`,
    },
    {
      soru: `"Yıllık ek mesai sınırı aşılıyor" uyarısı çıkarsa ne yapmalıyım?`,
      cevap: `O yıl için toplam ek mesainiz yıllık sınıra ulaşmıştır. Kalan süreyi formun en üstündeki "Bu yıl kullanılan ek mesai" kutusunda görebilirsiniz; talebi kalan süre içinde tutun.`,
    },
    {
      soru: `"Bu tarihte zaten ek mesai girişi bulunmaktadır" uyarısı engel mi?`,
      cevap: `Bu, o güne daha önce girdiğiniz bir kayıt olduğunu bildiren bir uyarıdır. Yeni saat aralığınız mevcut kayıtla çakışmıyorsa girişi yapabilirsiniz.`,
    },
    {
      soru: `"Başlangıç ve bitiş saati aynı olamaz" uyarısı alıyorum.`,
      cevap: `Başlangıç ile bitiş saati farklı olmalıdır. Mesai gece yarısını geçiyorsa bitişi ertesi günün saatine göre seçin; önizlemede "gece yarısını geçip ertesi güne uzuyor" notu görünür.`,
    },
    {
      soru: `Birden fazla günü tek seferde girebilir miyim?`,
      cevap: `Evet. Tarihleri Seç ile takvimden birden fazla gün seçersiniz; her gün için saat aralığını ve molayı girersiniz. Tüm günlerin saatleri geçerli olmalı ve birbiriyle çakışmamalıdır.`,
    },
    {
      soru: `Çalışma Saati Tipi neyi belirliyor?`,
      cevap: `Seçilen tür yalnız varsayılan molayı belirler. Mola, gün satırında değiştirilebilir veya Molayı kaldır ile silinebilir.`,
    },
    {
      soru: `Kayıt sırasında "… kuralı aşılıyor" uyarısı çıkarsa ne demek?`,
      cevap: `Girdiğiniz saatler, çalışma süresi mevzuatına yönelik bir kuralı aşıyor: günlük en fazla çalışma süresi, günlük en az dinlenme, gece çalışması üst sınırı, ardışık çalışma günü veya haftalık dinlenme. Uyarı hangi kuralın, hangi günde aşıldığını ve sınır değerini söyler. Kayıt gönderilmediyse saatleri buna göre düzeltip yeniden deneyin; emin değilseniz yöneticinize danışın.`,
    },
    {
      soru: `"Açıklama zorunludur" uyarısı çıktı.`,
      cevap: `Ek mesai girişinde açıklama alanı boş bırakılamaz. Gerekçeyi yazıp Kaydet'e dokunun.`,
    },
    {
      soru: `Ek Mesai Çizelgesi ile Onay Geçmişi sekmeleri arasındaki fark nedir?`,
      cevap: `Ek Mesai Çizelgesi'nde yeni giriş yapar, mevcut girişlerinizi görür ve düzenlersiniz. Onay Geçmişi'nde geçmişe ait talep ve onay durumlarını incelersiniz.`,
    },
    {
      soru: `Ek mesai listem boş görünüyor.`,
      cevap: `"Ek mesai girişi yok" yazıyorsa henüz giriş yapılmamıştır. "Bu durumda ek mesai talebi yok" yazıyorsa seçili durum filtresinde kayıt yoktur; filtreyi değiştirin.`,
    },
  ],
}
