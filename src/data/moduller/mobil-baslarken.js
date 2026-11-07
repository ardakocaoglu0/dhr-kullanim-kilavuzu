// Mobil uygulama: Başlarken grubu (kurulum, giriş, genel arayüz)

export default [
  // ───────────────────────────── KURULUM VE GİRİŞ ─────────────────────────────
  {
    id: 'mobil-kurulum-giris',
    grup: 'mobil-baslarken',
    sira: 10,
    platform: 'mobil',
    rota: '/setup',
    href: null,
    kim: 'ali',
    baslik: 'Kurulum ve Giriş',
    menu: 'Mobil › Uygulama açılışı',
    ozet:
      'Uygulamayı ilk kez açtığınızda kurumunuzun bağlantı kodunu girerek kuruma bağlanır, ardından e-posta ve şifrenizle giriş yaparsınız. Hesabınızda iki adımlı doğrulama açıksa giriş sırasında doğrulama kodu da istenir. Bu sayfa aynı zamanda şifrenizi unuttuğunuzda yapacaklarınızı ve uygulama güncelleme ekranını anlatır.',

    ekranlar: [
      { sekme: null, aciklama: 'Uygulama ilk kez açıldığında "Yeni nesil insan kaynakları yönetimine hoş geldiniz." yazan karşılama katmanı görünür. Altındaki Başlayalım butonuna dokununca Kurum Bağlantısı ekranı açılır.' },
      { sekme: 'Kurum Bağlantısı', aciklama: 'Üstte marka görseli, sağ üstte tema ve dil düğmeleri yer alır. Kartın içinde "Bağlantı kodu" alanı (sağında ".d1-hr.com" yazar), altında açıklama satırı ve Bağlan butonu bulunur.' },
      { sekme: 'Giriş Yap', aciklama: 'E-posta ve Şifre alanları, Beni hatırla anahtarı, Şifremi Unuttum bağlantısı ve Giriş Yap butonu. En altta "Bağlantı: kurum kodunuz" bilgisi ve yanında Değiştir bağlantısı görünür.' },
      { sekme: 'Giriş Yap > Hatırlanan hesap', aciklama: 'Bu cihazda daha önce giriş yaptıysanız form yerine fotoğrafınız ve adınızla "Tekrar hoş geldiniz" bloğu görünür; düğmenin adı Devam Et olur ve altında Hesabı unut bağlantısı bulunur.' },
      { sekme: 'Giriş Yap > Doğrulama', aciklama: 'İki adımlı doğrulama açık hesaplarda şifre doğrulandıktan sonra gelen ekran: Doğrulama kodu alanı, Doğrula butonu, Kurtarma kodu kullan ve Girişe dön bağlantıları.' },
      { sekme: 'Şifre Sıfırlama', aciklama: 'Giriş ekranında Şifremi Unuttum\'a dokununca açılan pencere: E-posta alanı, Bağlantı gönder ve Vazgeç butonları.' },
      { sekme: 'Uygulama Bilgileri', aciklama: 'Kurulum ve giriş ekranlarında bilgi simgesine dokununca açılan pencere; Uygulama sürümü ve Expo SDK sürümü gösterilir.' },
      { sekme: 'İki Adımlı Doğrulama', aciklama: 'Profil sekmesinden açılan ayar ekranı. Durum etiketi (Etkin / Devre Dışı), Authenticator Uygulaması ve E-posta ile Kod kartları yer alır.' },
      { sekme: 'Güncelleme gerekli', aciklama: 'Kurumunuzun desteklediği en düşük sürümün altındaki uygulamalarda açılan, Güncelle butonlu tam ekran uyarı.' },
      { sekme: 'Yeni sürüm hazır', aciklama: 'İsteğe bağlı güncellemelerde görünen uyarı; Güncelle ve Daha sonra butonları bulunur.' },
      { sekme: 'Bağlantı kurulamadı', aciklama: 'Oturumunuz açıkken sunucuya ulaşılamazsa görünen ekran; Tekrar Dene ve Çıkış Yap butonları bulunur.' },
    ],

    bolumler: [
      {
        baslik: 'Bağlantı kodu nedir?',
        metin: 'Uygulama hangi kuruma bağlanacağını bağlantı kodundan anlar.',
        maddeler: [
          'Kod, kurumunuzun DHR adresinin ilk parçasıdır. Örneğin adresiniz kurumum.d1-hr.com ise kodunuz "kurumum" olur.',
          'Kodu bilmiyorsanız İK biriminize veya sistem yöneticinize sorun.',
          'Tam web adresini yapıştırırsanız uygulama kodu kendisi ayıklar; büyük harfle yazsanız da küçük harfe çevrilir.',
          'Bağlantı kodu bir kez girildikten sonra cihazda saklanır; her açılışta yeniden girmeniz gerekmez.',
        ],
      },
      {
        baslik: 'Girişte karşılaşabileceğiniz uyarılar',
        metin: 'Giriş sırasında ekranın altında kısa uyarılar görünür:',
        maddeler: [
          '"E-posta veya şifre hatalı.": Bilgilerinizi kontrol edip yeniden deneyin.',
          '"Hesabınız geçici olarak kilitlendi." veya "Çok fazla deneme yapıldı.": Biraz bekleyip tekrar deneyin.',
          '"Sunucuya ulaşılamıyor.": İnternet bağlantınızı kontrol edin.',
          '"Bu ağdan erişim engellendi.": Bulunduğunuz ağdan girişe izin verilmiyordur; kurum yöneticinizle görüşün.',
          '"Oturumunuz sonlandı. Lütfen tekrar giriş yapın.": Oturum süreniz dolmuştur; yeniden giriş yapmanız yeterlidir.',
        ],
      },
      {
        baslik: 'Güncelleme ekranının türleri',
        metin: 'Uygulama açılırken sürümünüz kontrol edilir ve duruma göre şu ekranlardan biri görünebilir:',
        maddeler: [
          'Güncelleme gerekli: Kurumunuzda kullandığınız sürüm artık desteklenmiyor; Güncelle butonuyla mağaza sayfasına gidip güncellemeden devam edemezsiniz.',
          'Yeni sürüm hazır: Güncelleme isteğe bağlıdır; Güncelle diyebilir veya Daha sonra ile devam edebilirsiniz.',
          'Mobil uygulamamız bakımda: Bakım çalışması sürerken DHR Web ile devam et butonuyla işlemlerinizi web üzerinden yapabilirsiniz.',
          'Sürüm kontrol ediliyor / Sürüm doğrulanamadı: Bağlantı kurulunca sürüm yeniden denenir; Tekrar dene butonuyla elle de deneyebilirsiniz. Oturum bilgileriniz korunur.',
          'Güncelleme hazır: Uygulama içinden küçük iyileştirmeler indirildiğinde görünür; Şimdi yenile ile yeni sürüme geçersiniz.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Karşılama ekranından başlama',
        kim: 'Herkes',
        sekme: null,
        aciklama: 'Uygulamayı ilk kez açtığınızda ya da bu cihazda daha önce giriş yapılmamışsa karşılama katmanı görünür.',
        adimlar: [
          'Uygulamayı açın ve karşılama yazısını bekleyin.',
          'Başlayalım butonuna dokunun.',
        ],
        sonuc: 'Karşılama kapanır ve Kurum Bağlantısı ekranı (kurum daha önce seçildiyse Giriş Yap ekranı) görünür.',
        notlar: ['Bu cihazda daha önce giriş yapmış hesabınız varsa karşılama yeniden gösterilmez.'],
      },
      {
        baslik: 'Kuruma bağlanma (bağlantı kodu girme)',
        kim: 'Herkes',
        sekme: 'Kurum Bağlantısı',
        aciklama: 'Uygulamayı kurumunuza bağlarsınız. Bu adım yalnız ilk kurulumda gerekir.',
        adimlar: [
          'Kurum Bağlantısı ekranında Bağlantı kodu alanına dokunun.',
          'Kurumunuzun bağlantı kodunu yazın.',
          'Klavyedeki Git tuşuna veya Bağlan butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Bağlantı kodu', aciklama: 'Kurumunuzun DHR adresinin ilk parçası. Alanın sağında ".d1-hr.com" yazar; yalnız kodu yazmanız yeterlidir.', zorunlu: true },
        ],
        sonuc: 'Kod doğruysa Giriş Yap ekranı açılır.',
        notlar: [
          'Boş bırakırsanız "Kurumunuzun bağlantı kodunu girin." uyarısı görünür.',
          '"Bu koda ait bir kurum bulunamadı. Kodu kontrol edin." uyarısı kodun yanlış yazıldığını gösterir.',
          '"Bağlantı servisine ulaşılamadı..." uyarısı çıkarsa internet bağlantınızı kontrol edip yeniden Bağlan\'a dokunun.',
          'Size gönderilen bir bağlantı veya QR kodla uygulama açıldıysa kod alanı kendiliğinden dolar; yine de Bağlan\'a dokunmanız gerekir.',
        ],
      },
      {
        baslik: 'Kurum bağlantısını değiştirme',
        kim: 'Herkes',
        sekme: 'Giriş Yap',
        aciklama: 'Yanlış kuruma bağlandıysanız veya başka bir kuruma geçecekseniz bağlantı kodunu düzeltirsiniz.',
        adimlar: [
          'Giriş Yap ekranının en altındaki "Bağlantı: …" satırının yanındaki Değiştir bağlantısına dokunun.',
          'Kurum Bağlantısı ekranında yeni kodu yazıp Bağlan\'a dokunun.',
          'Vazgeçerseniz sol üstteki geri okuna dokunun.',
        ],
        sonuc: 'Yeni kuruma bağlanılır ve Giriş Yap ekranına geri dönülür.',
      },
      {
        baslik: 'E-posta ve şifreyle giriş yapma',
        kim: 'Herkes',
        sekme: 'Giriş Yap',
        aciklama: 'Kurumsal hesabınızla uygulamaya girersiniz.',
        adimlar: [
          'E-posta alanına kurumsal e-posta adresinizi yazın.',
          'Şifre alanına şifrenizi yazın. Göz simgesine dokunarak şifreyi gösterebilir veya gizleyebilirsiniz.',
          'Gerekirse Beni hatırla anahtarını açın veya kapatın.',
          'Giriş Yap butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'E-posta', aciklama: 'Hesabınıza kayıtlı e-posta adresi.', zorunlu: true },
          { ad: 'Şifre', aciklama: 'Hesap şifreniz.', zorunlu: true },
          { ad: 'Beni hatırla', aciklama: 'Açıkken bu cihazda sonraki girişleriniz kolaylaşır; kapatırsanız cihazda saklanan giriş bilgisi silinir.', zorunlu: false },
        ],
        sonuc: 'İki adımlı doğrulama kapalıysa uygulamaya girilir ve Ana Sayfa açılır; açıksa doğrulama adımına geçilir.',
        notlar: [
          'E-posta veya şifre boşsa "E-posta adresinizi girin." / "Şifrenizi girin." uyarısı görünür.',
          'Beni hatırla açık olsa bile şifreniz bu cihazda açık metin olarak görünmez; hatırlanan yalnızca adınız ve e-postanızdır.',
        ],
      },
      {
        baslik: 'Hatırlanan hesapla devam etme',
        kim: 'Herkes',
        sekme: 'Giriş Yap > Hatırlanan hesap',
        aciklama: 'Bu cihazda daha önce giriş yaptıysanız adınız ve fotoğrafınız hazır gelir.',
        adimlar: [
          '"Tekrar hoş geldiniz" bloğunda adınızı kontrol edin.',
          'Şifre alanına şifrenizi yazın.',
          'Devam Et butonuna dokunun.',
        ],
        sonuc: 'Giriş yapılır; hesabınızda iki adımlı doğrulama açıksa doğrulama adımı gelir.',
        notlar: ['Şifreniz yine sorulur; kimlik bloğu yalnızca girişi kolaylaştırır.'],
      },
      {
        baslik: 'Hesabı unutma (başka hesapla giriş)',
        kim: 'Herkes',
        sekme: 'Giriş Yap > Hatırlanan hesap',
        aciklama: 'Cihazda hatırlanan hesabı kaldırıp başka bir hesapla giriş yapmak istediğinizde kullanılır.',
        adimlar: [
          'Giriş ekranında Hesabı unut bağlantısına dokunun.',
          'Açılan formdan yeni e-posta ve şifrenizi girin.',
        ],
        sonuc: 'Cihazdaki hatırlanan hesap bilgisi ve otomatik giriş kaydı silinir; form boş olarak açılır.',
      },
      {
        baslik: 'İki adımlı doğrulama koduyla giriş',
        kim: 'Herkes',
        sekme: 'Giriş Yap > Doğrulama',
        aciklama: 'Hesabınızda iki adımlı doğrulama açıksa şifreden sonra bir kod girmeniz gerekir.',
        adimlar: [
          'Doğrulayıcı uygulamanızdaki (örneğin Google Authenticator) 6 haneli kodu Doğrulama kodu alanına yazın.',
          'Doğrula butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Doğrulama kodu', aciklama: '6 haneli doğrulayıcı kodu veya kurtarma kodu.', zorunlu: true },
        ],
        sonuc: 'Kod doğruysa uygulamaya girilir.',
        notlar: [
          'Kod boşsa "Doğrulama kodunu girin." uyarısı görünür; yanlış veya süresi dolmuşsa "Doğrulama kodu geçersiz ya da süresi dolmuş." yazar.',
          'Girişten vazgeçmek için Girişe dön bağlantısına dokunun.',
        ],
      },
      {
        baslik: 'Kurtarma koduyla giriş',
        kim: 'Herkes',
        sekme: 'Giriş Yap > Doğrulama',
        aciklama: 'Doğrulayıcı uygulamanıza ulaşamıyorsanız daha önce kaydettiğiniz kurtarma kodlarından birini kullanırsınız.',
        adimlar: [
          'Doğrulama ekranında Kurtarma kodu kullan bağlantısına dokunun.',
          'Kurtarma kodunu (ABCDE-FGHJK biçiminde) yazın.',
          'Doğrula butonuna dokunun.',
          'Doğrulayıcı koduna dönmek için Doğrulayıcı kodu kullan bağlantısına dokunun.',
        ],
        sonuc: 'Kod doğruysa giriş yapılır.',
        notlar: ['Her kurtarma kodu yalnızca bir kez kullanılabilir.'],
      },
      {
        baslik: 'Doğrulama kodunu e-postayla alma',
        kim: 'Herkes',
        sekme: 'Giriş Yap > Doğrulama',
        aciklama: 'E-posta ile kod yöntemini açtıysanız kodu e-posta adresinize gönderterek girebilirsiniz.',
        adimlar: [
          'Doğrulama ekranında Kodu e-posta ile gönder bağlantısına dokunun.',
          '"Doğrulama kodu e-posta adresinize gönderildi." uyarısını bekleyin.',
          'E-postanızdaki kodu Doğrulama kodu alanına yazıp Doğrula\'ya dokunun.',
        ],
        sonuc: 'Kod doğruysa giriş yapılır.',
        notlar: ['Bu bağlantı yalnız hesabınızda E-posta ile Kod yöntemi açıksa görünür.'],
      },
      {
        baslik: 'Şifremi unuttum',
        kim: 'Herkes',
        sekme: 'Şifre Sıfırlama',
        aciklama: 'Şifrenizi hatırlamıyorsanız e-postanıza yeni şifre belirleme bağlantısı gönderilmesini istersiniz.',
        adimlar: [
          'Giriş ekranında Şifremi Unuttum bağlantısına dokunun.',
          'E-posta alanına hesabınızın e-posta adresini yazın (giriş ekranında yazdıysanız hazır gelir).',
          'Bağlantı gönder butonuna dokunun.',
          'E-postanızdaki bağlantıyı telefonunuzda açıp yeni şifrenizi belirleyin.',
        ],
        alanlar: [
          { ad: 'E-posta', aciklama: 'Hesabınıza kayıtlı e-posta adresi.', zorunlu: true },
        ],
        sonuc: '"Bu adrese ait bir hesap varsa sıfırlama bağlantısı gönderildi." uyarısı görünür. Güvenlik gereği adres kayıtlı olsa da olmasa da aynı mesaj gösterilir.',
        notlar: ['Vazgeçmek için Vazgeç butonuna dokunun.'],
      },
      {
        baslik: 'Tema ve dili değiştirme (giriş öncesi)',
        kim: 'Herkes',
        sekme: 'Giriş Yap',
        aciklama: 'Giriş yapmadan önce de görünümü ve dili değiştirebilirsiniz.',
        adimlar: [
          'Marka görselinin üzerindeki tema düğmesine dokunarak açık ve koyu görünüm arasında geçin.',
          'Dil düğmesine dokunup listeden dilinizi seçin.',
        ],
        sonuc: 'Seçiminiz anında uygulanır.',
        notlar: ['Aynı ayarlara giriş yaptıktan sonra Profil sekmesindeki Tercihler bölümünden de ulaşırsınız.'],
      },
      {
        baslik: 'Uygulama sürümünü görme',
        kim: 'Herkes',
        sekme: 'Uygulama Bilgileri',
        aciklama: 'Destek ekibiyle görüşürken sürüm bilgisini paylaşmanız gerekirse kullanılır.',
        adimlar: [
          'Kurulum veya giriş ekranındaki bilgi simgesine dokunun.',
          'Uygulama sürümü ve Expo SDK sürümü satırlarını okuyun.',
          'Kapat butonuyla pencereyi kapatın.',
        ],
        sonuc: 'Sürüm bilgileri görüntülenir.',
        notlar: ['Giriş yaptıktan sonra sürümü Profil sekmesinde Hakkında bölümünde de görebilirsiniz.'],
      },
      {
        baslik: 'İki adımlı doğrulamayı etkinleştirme (doğrulayıcı uygulamasıyla)',
        kim: 'Herkes',
        sekme: 'İki Adımlı Doğrulama',
        aciklama: 'Hesabınıza ek bir güvenlik katmanı eklersiniz; girişte şifrenize ek olarak doğrulayıcı uygulamanızdan bir kod istenir.',
        adimlar: [
          'Profil sekmesinde Hesap ve Güvenlik bölümünden İki Adımlı Doğrulama satırına dokunun.',
          'Authenticator Uygulaması kartında İki Adımlı Doğrulamayı Etkinleştir butonuna dokunun.',
          '"1. Anahtarı doğrulayıcı uygulamanıza ekleyin" adımında Authenticator Uygulamasında Aç butonuna dokunun; açılmazsa Anahtarı Kopyala ile Manuel giriş anahtarını kopyalayıp uygulamaya elle ekleyin.',
          '"2. Doğrulama kodunu girin" adımında uygulamada görünen 6 haneli kodu yazın.',
          'Doğrula ve Etkinleştir butonuna dokunun.',
          'Açılan Kurtarma Kodlarınız bölümündeki kodları Kodları Kopyala ile kopyalayıp güvenli bir yerde saklayın.',
        ],
        alanlar: [
          { ad: 'Doğrulama kodu', aciklama: 'Doğrulayıcı uygulamasında görünen 6 haneli kod.', zorunlu: true },
        ],
        sonuc: '"İki adımlı doğrulama etkinleştirildi." uyarısı görünür, durum Etkin olur ve sonraki girişlerde kod istenir.',
        notlar: [
          'Kod boş bırakılırsa "Lütfen doğrulama kodunu girin." uyarısı görünür; yanlış kodda "Kod doğrulanamadı. Lütfen tekrar deneyin." yazar.',
          'Kurulumdan vazgeçmek için İptal butonuna dokunun.',
          'Kurtarma kodları doğrulayıcı uygulamanıza erişemediğinizde girişin tek yoludur.',
        ],
      },
      {
        baslik: 'E-posta ile doğrulamayı etkinleştirme',
        kim: 'Herkes',
        sekme: 'İki Adımlı Doğrulama',
        aciklama: 'Girişte hesap e-posta adresinize gönderilen tek kullanımlık kodu kullanmayı açarsınız.',
        adimlar: [
          'İki Adımlı Doğrulama ekranında E-posta ile Kod kartındaki E-posta ile Doğrulamayı Etkinleştir butonuna dokunun.',
          '"Doğrulama kodu e-posta adresinize gönderildi." uyarısını bekleyin.',
          'E-postanıza gelen 6 haneli kodu yazın; gelmediyse Kodu Tekrar Gönder\'e dokunun.',
          'Doğrula ve Etkinleştir butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Doğrulama kodu', aciklama: 'E-postayla gelen 6 haneli kod.', zorunlu: true },
        ],
        sonuc: '"E-posta ile doğrulama etkinleştirildi." uyarısı görünür; sonraki girişlerde doğrulama ekranında Kodu e-posta ile gönder bağlantısı da çıkar.',
      },
      {
        baslik: 'İki adımlı doğrulamayı kapatma',
        kim: 'Herkes',
        sekme: 'İki Adımlı Doğrulama',
        aciklama: 'Doğrulayıcı uygulaması veya e-posta ile doğrulamayı devre dışı bırakırsınız.',
        adimlar: [
          'Doğrulayıcı uygulaması için Authenticator Uygulaması kartındaki Devre Dışı Bırak butonuna dokunun.',
          'Açılan pencerede doğrulayıcı uygulamanızdaki güncel kodu yazın ve Devre Dışı Bırak butonuna dokunun.',
          'E-posta yöntemi için E-posta ile Kod kartındaki E-posta Doğrulamayı Kapat butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Doğrulama kodu', aciklama: 'Doğrulayıcı uygulamasındaki güncel 6 haneli kod (yalnız doğrulayıcı yöntemini kapatırken istenir).', zorunlu: true },
        ],
        sonuc: '"İki adımlı doğrulama devre dışı bırakıldı." veya "E-posta ile doğrulama kapatıldı." uyarısı görünür; durum Devre Dışı olur.',
        notlar: ['Güvenliğiniz için iki adımlı doğrulamayı açık tutmanız önerilir.'],
      },
      {
        baslik: 'Güncelleme gerektiğinde uygulamayı güncelleme',
        kim: 'Herkes',
        sekme: 'Güncelleme gerekli',
        aciklama: 'Sürümünüz desteklenmiyorsa uygulama bu ekranı gösterir ve güncellemeden devam etmenize izin vermez.',
        adimlar: [
          'Ekrandaki Kurulu sürüm ve Yeni sürüm bilgilerini kontrol edin.',
          'Güncelle butonuna dokunun; telefonunuzun uygulama mağazası açılır.',
          'Mağazada güncellemeyi tamamlayıp uygulamayı yeniden açın.',
        ],
        sonuc: 'Güncel sürümle uygulama normal şekilde açılır.',
        notlar: [
          'Mağaza açılmazsa "Güncelleme bağlantısı açılamadı..." uyarısı görünür; bağlantınızı kontrol edip yeniden deneyin.',
          'Güncelleme gerekli ekranında yetkiniz varsa QR ile giriş / çıkış butonu da görünür; böylece uygulamayı güncellemeden mesai girişinizi yapabilirsiniz.',
          'Ekrandaki Çıkış Yap butonuyla oturumu kapatabilirsiniz.',
          'Bağlantı kodunu yanlış girdiyseniz Kurum kodunu düzelt bağlantısına dokunun.',
        ],
      },
      {
        baslik: 'İsteğe bağlı güncellemeyi erteleme',
        kim: 'Herkes',
        sekme: 'Yeni sürüm hazır',
        aciklama: 'Yeni sürüm çıktığında ama güncelleme zorunlu olmadığında görünür.',
        adimlar: [
          'Hemen güncellemek için Güncelle butonuna dokunun.',
          'Şimdi devam etmek için Daha sonra butonuna dokunun.',
        ],
        sonuc: 'Güncelle derseniz mağaza açılır; Daha sonra derseniz uygulama mevcut sürümle devam eder.',
      },
      {
        baslik: 'Bakım sırasında web üzerinden devam etme',
        kim: 'Herkes',
        sekme: 'Güncelleme gerekli',
        aciklama: 'Mobil uygulama bakımdayken işlerinizi kurumunuzun web sayfasından sürdürebilirsiniz.',
        adimlar: [
          '"Mobil uygulamamız bakımda" ekranında DHR Web ile devam et butonuna dokunun.',
          'Açılan web sayfasında giriş yapıp işleminize devam edin.',
          'Bakım bittikten sonra Tekrar dene butonuyla uygulamaya dönün.',
        ],
        sonuc: 'Kurumun web sayfası tarayıcıda açılır.',
        notlar: ['Web sayfası açılamazsa "Kurumun web sayfası açılamadı..." uyarısı görünür.'],
      },
      {
        baslik: 'Hazır olan uygulama içi güncellemeyi uygulama',
        kim: 'Herkes',
        sekme: 'Güncelleme gerekli',
        aciklama: 'Küçük iyileştirmeler arka planda indirildiğinde yenileme önerilir.',
        adimlar: [
          '"Güncelleme hazır" ekranında Şimdi yenile butonuna dokunun.',
        ],
        sonuc: 'Uygulama yenilenir ve yeni iyileştirmelerle açılır.',
        notlar: ['Yenileme tamamlanmazsa tekrar deneyebilir veya mevcut sürümle devam edebilirsiniz.'],
      },
      {
        baslik: 'Bağlantı kesildiğinde yeniden deneme',
        kim: 'Herkes',
        sekme: 'Bağlantı kurulamadı',
        aciklama: 'Oturumunuz açıkken sunucuya ulaşılamazsa uygulama giriş ekranı yerine bu ekranı gösterir.',
        adimlar: [
          'İnternet bağlantınızı kontrol edin.',
          'Tekrar Dene butonuna dokunun.',
        ],
        sonuc: 'Bağlantı kurulursa kaldığınız yerden devam edersiniz; oturumunuz kapanmaz.',
        notlar: ['Hesabınızdan çıkmak isterseniz Çıkış Yap butonunu kullanın.'],
      },
    ],

    sss: [
      {
        soru: 'Bağlantı kodumu bilmiyorum, ne yapmalıyım?',
        cevap: 'Kod, kurumunuzun DHR web adresinin ilk parçasıdır. Web adresini biliyorsanız yazmanız yeterlidir (uygulama kodu kendisi ayıklar). Bilmiyorsanız İK biriminize sorun.',
      },
      {
        soru: 'Şifremi her seferinde yazmam gerekiyor mu?',
        cevap: 'Beni hatırla açıkken bu cihazda giriş sizin için kolaylaşır ve ekranda adınızla "Tekrar hoş geldiniz" görünür. Güvenlik için şifre her durumda ayrıca istenir; kapatmak için anahtarı kapatabilir veya Hesabı unut\'a dokunabilirsiniz.',
      },
      {
        soru: 'Doğrulama kodu istenmesinin nedeni nedir?',
        cevap: 'Hesabınızda iki adımlı doğrulama açıktır. Profil sekmesindeki İki Adımlı Doğrulama ekranından durumunu görebilir, kapatabilir veya yöntemini değiştirebilirsiniz.',
      },
      {
        soru: 'Doğrulayıcı uygulamama ulaşamıyorum, nasıl girerim?',
        cevap: 'Doğrulama ekranında Kurtarma kodu kullan\'a dokunup kurulumda kaydettiğiniz kodlardan birini girin. E-posta ile kod yöntemini açtıysanız Kodu e-posta ile gönder seçeneği de vardır.',
      },
      {
        soru: 'Uygulama neden "Güncelleme gerekli" diyor?',
        cevap: 'Kurumunuzda kullandığınız sürüm artık desteklenmiyordur. Güncelle butonuyla mağazadan güncellemeniz gerekir. Acil durumda yetkiniz varsa QR ile giriş / çıkış butonuyla mesai kaydınızı yine yapabilirsiniz.',
      },
    ],

    ipuclari: [
      'Kurum bağlantısını yalnız bir kez girersiniz; kod yanlışsa giriş ekranındaki Değiştir bağlantısıyla düzeltebilirsiniz.',
      'Şifre alanındaki göz simgesi yazdığınız şifreyi kontrol etmenizi sağlar.',
      'Kurtarma kodlarınızı telefonunuzdan ayrı, güvenli bir yerde saklayın.',
      'Aynı hesap web\'de de kullanılır; mobilde belirlediğiniz şifre web girişiniz için de geçerlidir.',
    ],
  },

  // ───────────────────────────── GENEL ARAYÜZ VE MENÜ ─────────────────────────────
  {
    id: 'mobil-genel-arayuz',
    grup: 'mobil-baslarken',
    sira: 20,
    platform: 'mobil',
    rota: '/menu',
    href: null,
    kim: 'ali',
    baslik: 'Genel Arayüz ve Gezinme',
    menu: 'Mobil › Alt sekme çubuğu',
    ozet:
      'Uygulamada ekranlar arasında alt sekme çubuğu, Modüller ekranındaki kartlar, hızlı işlemler düğmesi ve üst çubuktaki arama ile bildirim zili üzerinden gezinirsiniz. Bu sayfa gezinme düzenini, bildirimleri, bildirim ve takvim ayarlarını, sistem geri bildirimini ve dil / tema tercihlerini anlatır.',

    ekranlar: [
      { sekme: null, aciklama: 'Ekranın altında yüzen sekme çubuğu: Ana Sayfa, Modüller ve Profil (onay yetkiniz varsa ayrıca Talepler). Ortada ya da üstte İşlemler (+) düğmesi, üst çubukta arama simgesi ve bildirim zili görünür.' },
      { sekme: 'Modüller', aciklama: 'Yetkili olduğunuz modüllerin iki sütunlu kartları; her kartta modül adı, simgesi ve tek cümlelik açıklama bulunur. Kartlar Yönetim ve Kişisel bölümlerine ayrılır.' },
      { sekme: 'İşlemler', aciklama: 'Alt çubuktaki + düğmesine dokununca alttan açılan Hızlı İşlemler listesi; yeni talep açma ve QR okutma gibi sık işlemlere kısayol verir.' },
      { sekme: 'Arama', aciklama: 'Üst çubuktaki arama simgesine dokununca açılan ekran; "Çalışan veya modül ara…" kutusu, altında sonuçlar (Çalışanlar ve Modüller) listelenir.' },
      { sekme: 'Bildirim paneli', aciklama: 'Üst çubuktaki zile dokununca açılan kısa bildirim listesi; altında Tümünü gör bağlantısı bulunur.' },
      { sekme: 'Bildirimler', aciklama: 'Tüm bildirimlerin listesi; üstte Tümü ve Okunmamış süzgeçleri ile "Tümünü okundu işaretle" simgesi yer alır.' },
      { sekme: 'Bildirim Ayarları', aciklama: 'Profil sekmesinden açılan ekran: Bu cihazda bildirim al anahtarı, Bildirim İzni satırı, tüm e-posta / telefon bildirimlerini açıp kapatan anahtarlar, Modüllere göre tercihler, Sessiz saatler ve Günlük özet e-postası.' },
      { sekme: 'Takvim Entegrasyonu', aciklama: 'Profil sekmesinden açılan ekran: Google Takvim bağlantı durumu, saat dilimi, eşitleme bilgileri ve takvime aktarılacak kayıt türlerinin listesi.' },
      { sekme: 'Sistem Geri Bildirimi', aciklama: 'Profil sekmesinden açılan form: Başlık, Açıklama ve Dosya Ekle alanları ile Gönder butonu.' },
      { sekme: 'Profil > Tercihler', aciklama: 'Profil sekmesindeki Tercihler bölümü: Dil ve Tema satırları.' },
    ],

    bolumler: [
      {
        baslik: 'Alt sekme çubuğu',
        metin: 'Çubuktaki sekmeler her ekranda aynı yerde durur:',
        maddeler: [
          'Ana Sayfa: Kişisel ve (yetkiniz varsa) Yönetim panellerinin bulunduğu açılış ekranı.',
          'Talepler: Onayınızı bekleyen işlemlerin toplandığı sekme. Yalnız onay yetkisi olan kullanıcılarda görünür; yetkiniz yoksa çubukta yer almaz.',
          'Modüller: Tüm modüllerin kart listesi.',
          'Profil: Hesabınız, güvenlik, bildirim ve görünüm ayarları.',
          'İşlemler (+): Hızlı işlemler listesini açar. Yetkili olduğunuz hızlı işlem yoksa düğme görünmez.',
          'Onay yetkiniz yoksa çubukta bir kısayol daha belirir: QR okutma yetkiniz varsa o ekrana, yoksa İzinlerim ekranına götürür.',
        ],
      },
      {
        baslik: 'Modüller ekranındaki bölümler',
        metin: 'Kartlar yetkinize göre iki bölümde toplanır:',
        maddeler: [
          'Yönetim: Ekibiniz ve kurumunuz için yönetim modülleri (izin yönetimi, vardiya yönetimi gibi). Yalnız yönetici veya İK yetkisi olan kullanıcılarda görünür.',
          'Kişisel: Sizin kendi işlemleriniz (İzinlerim, Mesailerim, Vardiyalarım gibi). Bölüm başlığındaki fotoğrafınıza dokunarak bilgilerinizi açabilirsiniz.',
          'Yetkili olduğunuz modül yoksa "Görünür modül yok" mesajı çıkar.',
          'Yönetim bölümünün başlık simgesine dokunmak sizi Ana Sayfa\'nın Yönetim paneline götürür.',
        ],
      },
      {
        baslik: 'Bildirimlerin kaynağı',
        metin: 'Bildirimler izin, onay, bordro, duyuru, vardiya ve diğer modüllerden gelir.',
        maddeler: [
          'Zilin üzerindeki sayı okunmamış bildirim adedini gösterir.',
          'Bir bildirime dokunduğunuzda okundu işaretlenir ve ilgili ekran açılır; ilgili ekrana erişim yetkiniz yoksa bildirimin ayrıntı penceresi açılır.',
          'Duyurular Bildirimler\'den ayrı olarak Duyurular sayfasında yer alır.',
        ],
      },
    ],

    islemler: [
      {
        baslik: 'Alt sekmeler arasında geçiş yapma',
        kim: 'Herkes',
        sekme: null,
        aciklama: 'Ana Sayfa, Talepler, Modüller ve Profil sekmeleri arasında gezinirsiniz.',
        adimlar: [
          'Ekranın altındaki çubukta açmak istediğiniz sekmeye dokunun.',
        ],
        sonuc: 'Seçtiğiniz sekme açılır; seçili sekme vurgulu görünür.',
        notlar: ['Talepler sekmesi yalnız onay yetkisi olanlarda görünür.'],
      },
      {
        baslik: 'Modülleri kartlardan açma',
        kim: 'Herkes',
        sekme: 'Modüller',
        aciklama: 'Yetkili olduğunuz tüm modüllere buradaki kartlarla ulaşırsınız.',
        adimlar: [
          'Alt çubuktan Modüller sekmesine dokunun.',
          'Yönetim veya Kişisel bölümünde ilgili modülün kartını bulmak için ekranı yukarı kaydırın.',
          'Kartın üzerine dokunun.',
        ],
        sonuc: 'Modülün ekranı açılır; geri dönmek için sol üstteki geri okunu kullanın.',
        notlar: [
          'Kartlarda yalnız yetkili olduğunuz modüller görünür; yetkiniz değiştiğinde kartlar da kendiliğinden değişir.',
          'Bir modülü göremiyorsanız yöneticinize veya İK birimine başvurun.',
        ],
      },
      {
        baslik: 'Modül veya çalışan arama',
        kim: 'Herkes',
        sekme: 'Arama',
        aciklama: 'Aradığınız modüle ya da (yetkiniz varsa) çalışana adını yazarak hızlıca ulaşırsınız.',
        adimlar: [
          'Üst çubuktaki arama simgesine dokunun.',
          '"Çalışan veya modül ara…" (yalnız modül ararsanız "Modül ara…") kutusuna aramak istediğiniz adı yazın.',
          'Sonuç listesinden ilgili satıra dokunun.',
          'Aramayı bırakmak için İptal\'e, yazdığınızı silmek için temizle simgesine dokunun.',
        ],
        sonuc: 'Sonuç sayısı görünür ve dokunduğunuz modül veya çalışan açılır. Eşleşme yoksa "Eşleşen sonuç bulunamadı" yazar.',
        notlar: ['Çalışan sonuçları yalnız çalışan listesini görme yetkisi olan kullanıcılarda gösterilir; diğer kullanıcılar yalnız modül arayabilir.'],
      },
      {
        baslik: 'Hızlı işlem başlatma',
        kim: 'Herkes',
        sekme: 'İşlemler',
        aciklama: 'Doğru modülü bulmadan yeni talep açma veya QR okutma gibi sık işlemleri başlatırsınız.',
        adimlar: [
          'Alt çubuktaki + (İşlemler) düğmesine dokunun.',
          'Açılan listeden yapmak istediğiniz işleme dokunun.',
          'Listeyi kapatmak için Kapat butonuna dokunun.',
        ],
        sonuc: 'İlgili ekran (örneğin yeni talep formu) doğrudan açılır.',
        notlar: ['Listede yalnız yetkili olduğunuz işlemler görünür; hiç yetkili işlem yoksa + düğmesi çubukta yer almaz.'],
      },
      {
        baslik: 'Bildirimleri hızlıca görüntüleme',
        kim: 'Herkes',
        sekme: 'Bildirim paneli',
        aciklama: 'Son bildirimlerinize bulunduğunuz ekrandan ayrılmadan göz atarsınız.',
        adimlar: [
          'Üst çubuktaki zile dokunun.',
          'Listeden bildirimin üzerine dokunun.',
          'Tüm bildirimler için Tümünü gör\'e dokunun.',
        ],
        sonuc: 'Bildirimin ilgili ekranı açılır; hiç bildirim yoksa "Henüz bildiriminiz yok" yazar.',
      },
      {
        baslik: 'Bildirimleri okuma ve filtreleme',
        kim: 'Herkes',
        sekme: 'Bildirimler',
        aciklama: 'Tüm bildirimlerinizi listeler, okunmamışları ayırt etmenizi sağlar.',
        adimlar: [
          'Bildirimler ekranını (zilden Tümünü gör ile) açın.',
          'Üstteki Tümü veya Okunmamış süzgecine dokunun; Okunmamış yanında adet görünür.',
          'Bir bildirime dokunun; okundu işaretlenir ve ilgili ekran ya da ayrıntı penceresi açılır.',
          'Listeyi yenilemek için ekranı aşağı çekin; daha eskileri görmek için listenin sonuna kadar kaydırın.',
        ],
        sonuc: 'Seçtiğiniz süzgece göre bildirimler listelenir. Bildirim yoksa "Bildirim yok" veya "Okunmamış bildirim yok" yazar.',
      },
      {
        baslik: 'Tüm bildirimleri okundu işaretleme',
        kim: 'Herkes',
        sekme: 'Bildirimler',
        aciklama: 'Okunmamış bildirimlerin hepsini tek dokunuşla okundu yaparsınız.',
        adimlar: [
          'Bildirimler ekranında süzgeç şeridinin sağındaki "Tümünü okundu işaretle" simgesine dokunun.',
        ],
        sonuc: 'Okunmamış sayısı sıfırlanır ve zildeki sayı kaybolur.',
        notlar: ['Okunmamış bildirim yoksa simge bir şey yapmaz. İşlem başarısız olursa "Bildirimler okundu işaretlenemedi. Tekrar deneyin." uyarısı görünür.'],
      },
      {
        baslik: 'Telefon bildirimlerini açma veya kapatma',
        kim: 'Herkes',
        sekme: 'Bildirim Ayarları',
        aciklama: 'Duyuru, iş akışı değişikliği, hatırlatma ve onay taleplerinin bu telefona anlık bildirim olarak gelip gelmeyeceğini belirlersiniz.',
        adimlar: [
          'Profil sekmesinde Bildirimler bölümünden Bildirim Ayarları satırına dokunun.',
          'Bu cihaz bölümünde "Bu cihazda bildirim al" anahtarını açın veya kapatın.',
          'Kapatırken çıkan onay penceresinde Bildirimleri kapat butonuna dokunun.',
        ],
        sonuc: 'Ayar yalnız bu cihazı etkiler; uygulama içindeki bildirimler ve e-postalar açık kalır.',
        notlar: [
          'Telefonunuzun bildirim izni kapalıysa Bildirim İzni satırına dokunarak izin verebilir veya cihaz ayarlarını açabilirsiniz.',
          'Kayıt başarısız olursa "Bildirim ayarı kaydedilemedi..." uyarısı görünür.',
        ],
      },
      {
        baslik: 'Bildirim tercihlerini modüle göre ayarlama',
        kim: 'Herkes',
        sekme: 'Bildirim Ayarları',
        aciklama: 'Hangi olaylar için e-posta ve telefon bildirimi alacağınızı seçersiniz.',
        adimlar: [
          'Bildirim Ayarları ekranında Bildirim tercihleri bölümüne gidin.',
          'Tüm e-postalar veya Tüm telefon bildirimleri anahtarıyla hepsini birden açın / kapatın.',
          'Aramak için "Bildirim ara (ör. izin, onay, vardiya)" kutusunu kullanın.',
          'Modüllere göre listesinde bir modüle dokunarak açın; E-posta ve Bildirim sütunlarındaki anahtarlarla olayları tek tek ayarlayın.',
        ],
        sonuc: 'Her değişiklik anında kaydedilir.',
        notlar: [
          'Kapatsanız da bildirimler listede görünmeye devam eder.',
          'Güvenlik ve yasal nedenlerle kapatılamayan e-postalar "Bu e-posta kapatılamaz" olarak işaretlidir.',
          'Kayıt başarısız olursa önceki ayar geri yüklenir ve uyarı gösterilir.',
        ],
      },
      {
        baslik: 'Sessiz saatleri ve günlük özet e-postasını ayarlama',
        kim: 'Herkes',
        sekme: 'Bildirim Ayarları',
        aciklama: 'Belirli saatlerde telefon bildirimi almamayı veya e-postaları günde bir kez toplu almayı seçersiniz.',
        adimlar: [
          'Bildirim Ayarları ekranında Sessiz saatler kartını bulun.',
          'Başlangıç ve Bitiş saatlerini seçin.',
          'Günlük özet e-postası kartındaki anahtarı açın veya kapatın.',
        ],
        alanlar: [
          { ad: 'Başlangıç', aciklama: 'Sessiz saatlerin başladığı saat.', zorunlu: false },
          { ad: 'Bitiş', aciklama: 'Sessiz saatlerin bittiği saat; bildirimler bu saatte toplu gelir.', zorunlu: false },
        ],
        sonuc: 'Sessiz saatlerde telefon bildirimi gönderilmez, saat bitince toplu gelir. Günlük özet açıkken e-postalar günde bir kez tek e-postada toplanır; kilitli (güvenlik / yasal) e-postalar yine anında gelir.',
        notlar: ['Başlangıç ve bitiş saati aynı olamaz.'],
      },
      {
        baslik: 'Google Takvim\'e bağlanma',
        kim: 'Herkes',
        sekme: 'Takvim Entegrasyonu',
        aciklama: 'İzin, görev, vardiya gibi kayıtlarınızın Google Takviminize otomatik aktarılmasını sağlarsınız.',
        adimlar: [
          'Profil sekmesinde Bildirimler bölümünden Takvim Entegrasyonu satırına dokunun.',
          'Google Takvim kartında Google ile Bağlan butonuna dokunun.',
          'Açılan Google sayfasında hesabınızı seçip izni onaylayın.',
          'Uygulamaya dönün; durum Bağlı olarak görünür.',
        ],
        sonuc: 'Google hesabınızda "DHR" adlı ayrı bir takvim açılır; kayıtlarınız birkaç dakika içinde eklenir. Kendi takvimlerinize dokunulmaz.',
        notlar: [
          'Google izni verilmezse "Google izni verilmedi; bağlantı kurulmadı." uyarısı görünür.',
          'Bu ekran yalnız kurumunuzda Google Takvim entegrasyonu açıksa kullanılabilir; kapalıysa "Google Takvim entegrasyonu bu şirket için henüz açılmamış." yazar.',
          'Bağlantı koptuysa durum Yeniden bağlanmalı olur ve Yeniden Bağlan butonu görünür.',
        ],
      },
      {
        baslik: 'Takvime aktarılacak kayıtları seçme',
        kim: 'Herkes',
        sekme: 'Takvim Entegrasyonu',
        aciklama: 'Hangi kayıt türlerinin takviminize gideceğini anahtarlarla belirlersiniz.',
        adimlar: [
          'Takvim Entegrasyonu ekranında Kişisel Kayıtlarım, Son Tarihler ve Ekip Arkadaşları gruplarını inceleyin.',
          'İstediğiniz türün anahtarını açın veya kapatın (örneğin İzinlerim, Vardiyalarım, Resmi tatiller, Doğum günleri).',
          'Doğum günü ve yıldönümlerinde belirli kişileri çıkarmak için Kişileri Yönet butonuna dokunun; açılan listede kişi bazında anahtarı kapatın (Ad, pozisyon ya da birim ara kutusu ve Tümü / Çıkarılanlar süzgeçleri vardır).',
        ],
        sonuc: 'Seçimleriniz kaydedilir; kapattığınız türün kayıtları takvimden kalkar.',
        notlar: [
          'Yalnız onaylanmış kayıtlar takvime gider; iptal edilen ya da reddedilen kayıt takvimden kalkar.',
          '"Kullanıma kapalı" etiketli seçenekler şu an açılamaz.',
        ],
      },
      {
        baslik: 'Takvimi eşitleme ve saat dilimini ayarlama',
        kim: 'Herkes',
        sekme: 'Takvim Entegrasyonu',
        aciklama: 'Bağlantı kurulduktan sonra eşitlemeyi elle başlatır, saat dilimini cihazınıza göre güncellersiniz.',
        adimlar: [
          'Eşitlemeyi hemen başlatmak için Şimdi Eşitle butonuna dokunun.',
          'Son eşitleme tarihini ve Takvimdeki kayıt sayısını kartta görün.',
          'Saat dilimini güncellemek için "Cihazımın saat dilimini kullan" satırına dokunun.',
        ],
        sonuc: '"Eşitleme başlatıldı." uyarısı görünür; değişiklikler birkaç dakika içinde takviminize yansır. Saat dilimi güncellenince saatli kayıtlar yeniden yazılır.',
        notlar: ['Son eşitleme tamamlanamadıysa uyarı görünür ve bir sonraki turda yeniden denenir.'],
      },
      {
        baslik: 'Google Takvim bağlantısını kesme',
        kim: 'Herkes',
        sekme: 'Takvim Entegrasyonu',
        aciklama: 'Takvim aktarımını durdurursunuz.',
        adimlar: [
          'Takvim Entegrasyonu ekranında Bağlantıyı Kes butonuna dokunun.',
          'Onay penceresinde yeniden Bağlantıyı Kes\'e dokunun.',
        ],
        sonuc: 'Google hesabınızdaki "DHR" takvimi ve içindeki tüm kayıtlar silinir. Seçimleriniz saklanır; istediğiniz zaman yeniden bağlanabilirsiniz.',
        notlar: ['Bu işlem takvimdeki kayıtları siler; onay penceresindeki uyarıyı okuyun.'],
      },
      {
        baslik: 'Sistem geri bildirimi gönderme',
        kim: 'Herkes',
        sekme: 'Sistem Geri Bildirimi',
        aciklama: 'Uygulamayla veya DHR sistemiyle ilgili görüş, öneri ya da karşılaştığınız sorunu iletirsiniz.',
        adimlar: [
          'Profil sekmesinde Yasal ve Destek bölümünden Sistem Geri Bildirimi satırına dokunun.',
          'Başlık alanına konuyu yazın.',
          'Açıklama alanına geri bildiriminizi veya karşılaştığınız problemi yazın.',
          'Gerekirse Dosya Ekle butonuyla ekran görüntüsü veya belge ekleyin.',
          'Gönder butonuna dokunun.',
        ],
        alanlar: [
          { ad: 'Başlık', aciklama: 'Geri bildiriminizin başlığı.', zorunlu: true },
          { ad: 'Açıklama', aciklama: 'Geri bildiriminizin veya sorunun ayrıntısı.', zorunlu: true },
          { ad: 'Dosya Ekle', aciklama: 'JPG, PNG, GIF, PDF, DOC, DOCX, XLS, XLSX dosyaları; en fazla 10 dosya, toplam 50 MB.', zorunlu: false },
        ],
        sonuc: '"Geri bildiriminiz gönderildi. Teşekkür ederiz!" uyarısı görünür.',
        notlar: [
          'Başlık veya açıklama boşsa "Lütfen bir başlık girin" / "Lütfen açıklama girin" uyarısı görünür.',
          'Desteklenmeyen dosya türü, 10 dosyadan fazlası veya 50 MB\'ı aşan dosyalar için uyarı gösterilir.',
          'Vazgeçmek için İptal butonuna dokunun.',
        ],
      },
      {
        baslik: 'Dil değiştirme',
        kim: 'Herkes',
        sekme: 'Profil > Tercihler',
        aciklama: 'Uygulamanın arayüz dilini seçersiniz.',
        adimlar: [
          'Profil sekmesinde Tercihler bölümünden Dil satırına dokunun.',
          'Açılan listeden dilinizi seçin (Türkçe, İngilizce, İspanyolca, Fince, Arapça ve Amharca desteklenir).',
        ],
        sonuc: 'Uygulamanın tüm metinleri seçtiğiniz dilde görünür.',
      },
      {
        baslik: 'Tema değiştirme',
        kim: 'Herkes',
        sekme: 'Profil > Tercihler',
        aciklama: 'Uygulamanın açık veya koyu görünümünü seçersiniz.',
        adimlar: [
          'Profil sekmesinde Tercihler bölümünden Tema satırına dokunun.',
          'Sistem varsayılanı, Açık veya Koyu seçeneklerinden birini seçin.',
        ],
        sonuc: 'Görünüm anında değişir. Sistem varsayılanı telefonunuzun ayarını izler.',
      },
    ],

    sss: [
      {
        soru: 'Alt çubukta Talepler sekmesini göremiyorum, neden?',
        cevap: 'Talepler sekmesi yalnız onay yetkisi olan kullanıcılarda görünür. Çalışanlar kendi taleplerini ilgili modül ekranından (örneğin İzinlerim) takip eder.',
      },
      {
        soru: 'Aradığım modül Modüller ekranında yok.',
        cevap: 'Modüller yetkinize göre listelenir. Yetkili olmadığınız bir modül kartı görünmez; erişim için yöneticinize veya İK birimine başvurun.',
      },
      {
        soru: 'Telefonuma bildirim gelmiyor.',
        cevap: 'Önce Bildirim Ayarları\'nda "Bu cihazda bildirim al" anahtarının açık olduğunu, ardından telefonun bildirim izninin verildiğini ve sessiz saatler aralığında olmadığınızı kontrol edin.',
      },
      {
        soru: 'Bildirimleri kapatırsam bildirimleri kaçırır mıyım?',
        cevap: 'Hayır. Telefon bildirimini kapatsanız da bildirimler uygulamadaki Bildirimler listesinde görünmeye devam eder.',
      },
      {
        soru: 'Takvim eşitlemesi hemen görünmedi.',
        cevap: 'Eşitleme birkaç dakika sürebilir. Şimdi Eşitle ile elle başlatabilirsiniz. Durum Yeniden bağlanmalı ise Yeniden Bağlan butonuyla Google bağlantısını yenileyin.',
      },
    ],

    ipuclari: [
      'Sık yaptığınız işler için + (İşlemler) düğmesini kullanın; modül aramadan yeni talep açabilirsiniz.',
      'Bir modülün adını hatırlamıyorsanız üst çubuktaki arama simgesiyle adının bir kısmını yazarak bulun.',
      'Bildirim zilindeki sayı okunmamış bildirimleri gösterir; günlük kontrol için zile göz atın.',
      'Çalışma saatleri dışında rahatsız olmamak için Bildirim Ayarları\'ndan Sessiz saatleri tanımlayın.',
    ],
  },
]
