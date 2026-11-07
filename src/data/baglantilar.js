// Modüller arası veri akışı: { 'sayfa-id': [{ hedef, aciklama }] }
// Entegrasyon incelemesinden üretildi (scripts/baglanti_birlestir.mjs) + elle eklenenler.
export default {
  "izinlerim": [
    {
      "hedef": "izin-yonetimi",
      "aciklama": "İzin talepleriniz onay için yöneticinizin İzin Yönetimi ekranına düşer; İK'nın yaptığı bakiye düzeltmeleri de onayınız için İzinlerim › Değişiklik Onayları sekmesine gelir."
    },
    {
      "hedef": "gorevlerim",
      "aciklama": "İzin kayıtlarınız Görevlerim takviminde mavi kutular olarak görünür."
    },
    {
      "hedef": "kontrol-panelim",
      "aciklama": "İzin taleplerinizin durumu ve Mevcut Onaylayan bilgisi Kontrol Panelim’deki Talep Merkezi kartında da görünür."
    },
    {
      "hedef": "ek-mesailerim",
      "aciklama": "İzinli olduğunuz saatlere ek mesai girilemez; onaylı ya da bekleyen ek mesainizin olduğu saatlerde de izin kullanılamaz."
    },
    {
      "hedef": "vardiyalarim",
      "aciklama": "İzinleriniz vardiya takviminizde vardiyalarınız ve resmi tatillerle birlikte görünür."
    },
    {
      "hedef": "bordrom",
      "aciklama": "Ücretsiz izin günleriniz bordronuzda eksik gün olarak yer alır ve biriminizin ayarına göre ücretinizden düşülür."
    }
  ],
  "izin-yonetimi": [
    {
      "hedef": "izinlerim",
      "aciklama": "Çalışanların İzinlerim'den gönderdiği talepler burada onaylanır veya reddedilir; çalışan onayı gereken bakiye değişiklikleri çalışanın İzinlerim › Değişiklik Onayları sekmesine gider."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "İzin taleplerinin onaylayıcıları birim modül ayarlarındaki İzin İş Akışı sekmesinden belirlenir."
    },
    {
      "hedef": "birim-yonetimi-genel",
      "aciklama": "İzin kararlarında çalışan ve onaylayıcılar dışında bilgilendirilecek kişiler İş Akışı Bildirimleri sekmesinden seçilir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Onayınızı bekleyen izin talepleri Onay Merkezi’nde de listelenir ve oradan sonuçlandırılabilir."
    },
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "Çıkış sürecindeki çalışanın kapanmamış izin talepleri, birim kuralı açıksa çıkışın kesinleşmesini engeller; süreç ekranındaki İzne Git düğmesi buraya getirir."
    },
    {
      "hedef": "calisan-yonetimi",
      "aciklama": "Birim değişikliğinde izin bakiyeleri transfer penceresinden ya da Bakiye Aktarımı ekranından yeni birimin izin türlerine aktarılır."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Onaylanan izinler, iznin düştüğü ayın bordro puantajına “Kayıttan geldi” olarak gelir; ücretsiz izin günleri eksik gün olarak SGK neden koduyla işlenir."
    },
    {
      "hedef": "vardiya-yonetimi",
      "aciklama": "Onaylı izin günlerine vardiya atanamaz ve plan üretilirken bu günler atlanır; onay bekleyen izin planda kural ihlali olarak görünür."
    },
    {
      "hedef": "mesai-takibi",
      "aciklama": "Onaylı izinli günler Günlük Mesailer ve Mesai Takvimi’nde “İzinli” durumuyla gösterilir."
    },
    {
      "hedef": "ek-mesai-yonetimi",
      "aciklama": "İzin karşılıklı onaylanan ek mesailerin izin hakkı bakiyeye kendiliğinden yazılır; izin ile ek mesai aynı saatlerde çakışamaz."
    },
    {
      "hedef": "gorev-yonetimi",
      "aciklama": "Çalışanların izinleri görev takviminde görev kayıtlarıyla birlikte gösterilir ve görev raporlarına alınabilir."
    }
  ],
  "ek-mesailerim": [
    {
      "hedef": "ek-mesai-yonetimi",
      "aciklama": "Gönderdiğiniz ek mesai talepleri yöneticinizin Ek Mesai Yönetimi ekranında onaylanır veya reddedilir; sonucu Onay Geçmişi sekmesinden izlersiniz."
    },
    {
      "hedef": "izinlerim",
      "aciklama": "İzin karşılıklı ek mesainiz onaylanınca izin bakiyenize gün eklenir; izinli olduğunuz saatlere ek mesai giremezsiniz."
    },
    {
      "hedef": "bordrom",
      "aciklama": "Ücret karşılıklı onaylanan ek mesainiz ilgili ayın bordrosunda ek mesai kalemiyle ödenir."
    }
  ],
  "ek-mesai-yonetimi": [
    {
      "hedef": "ek-mesailerim",
      "aciklama": "Çalışanların Ek Mesailerim'den gönderdiği talepler burada onaylanır; yönetici çalışan adına da ek mesai girebilir, kayıt çalışanın Ek Mesailerim sayfasında görünür."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Ek mesai taleplerinin onaylayıcıları ve sınırları birim modül ayarlarındaki Ek Mesai Yönetimi sekmesinden belirlenir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Onayınızı bekleyen ek mesai talepleri Onay Merkezi’nde de listelenir ve oradan sonuçlandırılabilir."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Onaylı, ücret karşılıklı ek mesailer “Ek Mesaileri Bordroya Dahil Et” açıksa ait olduğu ayın puantajına kendiliğinden gelir; o aya giremeyenler sonraki ayın puantajına taşınır."
    },
    {
      "hedef": "izin-yonetimi",
      "aciklama": "İzin karşılıklı ek mesai onaylandığında türde seçili izin türüne izin hakkı yazılır; kayıt silinirken bu hak geri alınabilir."
    }
  ],
  "mesailerim": [
    {
      "hedef": "mesai-takibi",
      "aciklama": "Mesai düzeltme ve ev konumu değişim talepleriniz yöneticinizin Mesai Takibi ekranındaki Düzeltme Talepleri ve Ev Konumları sekmelerine düşer; giriş/çıkış kayıtlarınız Günlük Mesailer listesinde görünür."
    }
  ],
  "mesai-takibi": [
    {
      "hedef": "mesailerim",
      "aciklama": "Çalışanların Mesailerim'den gönderdiği düzeltme ve ev konumu değişim talepleri burada onaylanır; onaylanan düzeltme çalışanın mesai geçmişine işlenir."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Mesai düzeltme taleplerinin onaylayıcıları birim modül ayarlarındaki Mesai Düzeltme sekmesinden belirlenir; akış yoksa talep açılamaz."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Onayınızı bekleyen mesai düzeltme talepleri Onay Merkezi’nde de listelenir ve oradan sonuçlandırılabilir."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Birimde “QR Mesai Kayıtlarını Puantaja Dahil Et” açıksa giriş-çıkış kayıtları puantaj kontrol listesinde gösterilir ve kayıtsız günler eksik günle karşılaştırılır; eksik gün kendiliğinden yazılmaz."
    },
    {
      "hedef": "vardiya-yonetimi",
      "aciklama": "Giriş-çıkış kayıtları çalışanın vardiyasına eşlenir; geç kalma ve fazla mesai dakikaları bu kayıtlardan hesaplanır."
    },
    {
      "hedef": "izin-yonetimi",
      "aciklama": "Onaylı izinli günler mesai kayıtlarında “İzinli” olarak görünür."
    }
  ],
  "zimmetlerim": [
    {
      "hedef": "zimmet-yonetimi",
      "aciklama": "Ekipman ve havuz talepleriniz önce yöneticinizin Zimmet Yönetimi ekranında \"Ekipman Onayı\" adımından geçer; onay tamamlanınca stok birimine iletilir."
    },
    {
      "hedef": "stok-yonetimi",
      "aciklama": "Onaylanan talebinizin ürünü stok yöneticisi tarafından teslim edilir ve Teslim/İade sekmesine \"Teslim Bekliyor\" olarak düşer; açtığınız ticketlar ve mesajlarınız Stok Yönetimi ekranına gider."
    },
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "Teslim alma onayınız işe giriş sürecinizdeki zimmet bölümünü ilerletir; işten ayrılırken iade edilecek zimmetleriniz süreç kartınızda da görünür."
    }
  ],
  "zimmet-yonetimi": [
    {
      "hedef": "zimmetlerim",
      "aciklama": "Çalışanların Zimmetlerim'den açtığı ekipman ve havuz talepleri burada onaylanır; Ekip Zimmetleri sekmesinde ekip üyelerinin zimmet, talep ve ticket sayıları görünür."
    },
    {
      "hedef": "stok-yonetimi",
      "aciklama": "Son onaydan sonra zimmet ve havuz talepleri kategorinin bağlı olduğu stok biriminin Stok Talepleri listesine düşer; teslim tamamlanınca Genel Durum \"Tamamlandı\" olur."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Ekipman taleplerinin onaylayıcıları birim modül ayarlarındaki Stok Yönetimi › Zimmet İş Akışı sekmesinden belirlenir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Onayınızı bekleyen zimmet talepleri Onay Merkezi’nde de listelenir ve oradan sonuçlandırılabilir."
    }
  ],
  "stok-yonetimi": [
    {
      "hedef": "zimmetlerim",
      "aciklama": "Zimmetlenen ürün çalışanın Zimmetlerim › Teslim/İade sekmesine düşer, çalışan teslim aldığını onaylar; çalışanların açtığı ticketlar Stok Ticket'ları sekmesine gelir."
    },
    {
      "hedef": "zimmet-yonetimi",
      "aciklama": "Stok Talepleri'ne gelen talepler önce Zimmet Yönetimi'nde onaylanmıştır; teslim ettiğinizde talep Zimmet Yönetimi'nde \"Tamamlandı\" görünür."
    },
    {
      "hedef": "butce-planlama",
      "aciklama": "Envanter paketleri, ömrü dolan zimmetler ve havuz stok seviyesi, Bütçe Planlama › Ekipman & Zimmet sekmesinde ekipman ihtiyacının otomatik üretilmesinde kullanılır."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Stok onay akışı ve stok yöneticileri birim modül ayarlarındaki Stok Yönetimi sekmesinden belirlenir."
    },
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "İşten çıkış sürecindeki çalışanın zimmetleri iade için bekler; buradan yapılan her iade süreçteki Zimmetler bölümünü günceller. İşe girişte açılan zimmet talebi teslim edilince Zimmet Teslimi bölümü tamamlanır."
    },
    {
      "hedef": "calisan-yonetimi",
      "aciklama": "Envanter paketleri yeni çalışan penceresinin Ekipman sekmesinde seçilir ve zimmet talebine dönüşür."
    }
  ],
  "dokumanlarim": [
    {
      "hedef": "dokuman-yonetimi",
      "aciklama": "Belge talepleriniz ve yönetime gönderdiğiniz belgeler Doküman Yönetimi ekranına düşer; yönetimin sizden istediği veya size gönderdiği belgeler de Dokümanlarım'da onayınızı bekler."
    },
    {
      "hedef": "bilgilerimi-duzenle",
      "aciklama": "Bilgilerimi Düzenle formunda onay bekleyen ya da reddedilen belge alanlarının yeniden yüklemesi Dokümanlarım'daki talep üzerinden yapılır."
    },
    {
      "hedef": "calisani-duzenle",
      "aciklama": "İK'nın çalışan kartından istediği belgeler Dokümanlarım › Yönetim Doküman Talepleri sekmesine gelir; yüklediğinizde kartınızdaki alan güncellenir."
    },
    {
      "hedef": "kontrol-panelim",
      "aciklama": "Doküman taleplerinizin durumu Kontrol Panelim’deki Doküman Durumu kartında da görünür."
    },
    {
      "hedef": "birim-yonetimi-genel",
      "aciklama": "Talep ve gönderim pencerelerinde çıkan ek kişiler biriminizin Ek Kişiler ayarından gelir."
    },
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "İşe giriş formunda yükleyip onaylatılan belgeler burada da listelenir."
    }
  ],
  "dokuman-yonetimi": [
    {
      "hedef": "dokumanlarim",
      "aciklama": "Yönetimin istediği ve gönderdiği belgeler çalışanın Dokümanlarım sayfasına düşer; çalışanın talepleri ve gönderdiği belgeler burada hazırlanır veya onaylanır."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Doküman taleplerinin onay akışı ve talep kategorileri birim modül ayarlarındaki Doküman Yönetimi sekmesinden belirlenir."
    },
    {
      "hedef": "birim-yonetimi-genel",
      "aciklama": "Doküman talebi ve gönderiminde listeye eklenecek kişiler birim genel ayarlarındaki Ek Kişiler sekmesinden belirlenir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Doküman talepleri Onay Merkezi’nde görüntülenir; karar bu sayfadan verilir."
    }
  ],
  "gorevlerim": [
    {
      "hedef": "gorev-yonetimi",
      "aciklama": "Girdiğiniz görev kayıtları onay için yöneticinizin Görev Yönetimi › Talepler sekmesine düşer; size atanan görevler takviminizde görünür."
    },
    {
      "hedef": "izinlerim",
      "aciklama": "Görevlerim takviminde görevlerinizin yanında izinleriniz de (mavi) görünür; dışa aktarma ve Google Takvim eşitlemesine izin kayıtları da eklenebilir."
    }
  ],
  "gorev-yonetimi": [
    {
      "hedef": "gorevlerim",
      "aciklama": "Atadığınız görevler çalışanların Görevlerim takvimine eklenir; çalışanların kendi girdiği görev günleri burada onaylanır veya reddedilir."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Görev kayıtlarının onay akışı kategori bazında birim modül ayarlarındaki Görev Yönetimi sekmesinden belirlenir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Onayınızı bekleyen görev talepleri Onay Merkezi’nde de listelenir ve oradan sonuçlandırılabilir."
    },
    {
      "hedef": "izin-yonetimi",
      "aciklama": "Görev takvimi ve görev raporları çalışanların izin kayıtlarını da gösterir."
    },
    {
      "hedef": "birim-yonetimi-genel",
      "aciklama": "Kategoride “Resmi tatilleri dikkate al” açıksa birimin resmi tatil günleri görev kayıtlarına eklenmez."
    }
  ],
  "vardiyalarim": [
    {
      "hedef": "vardiya-yonetimi",
      "aciklama": "Yayınlanan vardiya planınız burada görünür; bırakma, devretme, takas ve açık vardiyaya talip olma talepleriniz yöneticinizin Vardiya Yönetimi ekranında onaylanır."
    },
    {
      "hedef": "kontrol-panelim",
      "aciklama": "Bugünkü ve sıradaki vardiyanız Kontrol Panelim’deki Vardiyam kartında görünür."
    },
    {
      "hedef": "izinlerim",
      "aciklama": "Tercihleriniz izin talebinin yerine geçmez; kesin olarak çalışmayacağınız günler için İzinlerim’den izin talep edin."
    }
  ],
  "vardiya-yonetimi": [
    {
      "hedef": "vardiyalarim",
      "aciklama": "Yayınlanan plan çalışanların Vardiyalarım sayfasına yansır; çalışanların değişiklik talepleri ve açık vardiya başvuruları onayınıza düşer, tercihleri planlamada \"Uygun değil\" olarak görünür."
    },
    {
      "hedef": "servis-yonetimi",
      "aciklama": "Vardiya atamaları servis eşleştirmesinde kullanılır; vardiyası olmayan çalışan servise atanamaz."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Vardiya taleplerinin onay akışı ve planlama kuralları birim modül ayarlarındaki Vardiya sekmesinden belirlenir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Onayınızı bekleyen vardiya talepleri Onay Merkezi’nde de listelenir ve oradan sonuçlandırılabilir."
    },
    {
      "hedef": "izin-yonetimi",
      "aciklama": "Planlama izinleri dikkate alır: onaylı izin günlerine vardiya yazılmaz, izin iptal edilince plan yeniden hesaplanır."
    },
    {
      "hedef": "mesai-takibi",
      "aciklama": "Vardiyalardaki giriş-çıkış, geç kalma ve fazla mesai bilgileri birimin geçerli devam kaydından (QR vb.) alınır."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Vardiyaya eşlenen giriş-çıkış kaydını bordro da kullanır; geç kalma toleransı vardiya ve puantajda ortaktır."
    },
    {
      "hedef": "birim-yonetimi-genel",
      "aciklama": "Birimin resmi tatilleri ve arifeleri planda işaretlenir; ayara göre tatil saatine denk gelen vardiyalar üretilmez."
    }
  ],
  "masraflarim": [
    {
      "hedef": "masraf-yonetimi",
      "aciklama": "Masraf talepleriniz ve onaya gönderdiğiniz masraf raporları yöneticinizin Masraf Yönetimi ekranına düşer; geri ödeme yapılınca durum \"Ödendi\" olur."
    },
    {
      "hedef": "kontrol-panelim",
      "aciklama": "Masraf taleplerinizin durumu Kontrol Panelim’deki Son Masraf Talepleri ve Talep Merkezi kartlarında da görünür."
    },
    {
      "hedef": "bordrom",
      "aciklama": "Biriminizde geri ödeme “Bordro ile” yapılıyorsa onaylanan masrafınız bordronuza kazanç olarak eklenir."
    },
    {
      "hedef": "seyahatlerim",
      "aciklama": "Bir masrafı onaylı seyahatinize bağladığınızda Seyahatlerim’de o seyahatin masrafları arasında görünür."
    }
  ],
  "masraf-yonetimi": [
    {
      "hedef": "masraflarim",
      "aciklama": "Çalışanların Masraflarım'dan gönderdiği masraflar burada onaylanır ve ödendi olarak işaretlenir; sonuç çalışanın Masraflarım sayfasındaki durum sütununda görünür."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Masraf taleplerinin onaylayıcıları, masraf türleri ve geri ödeme yolu birim modül ayarlarındaki Masraf Yönetimi sekmesinden belirlenir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Onayınızı bekleyen masraf talepleri Onay Merkezi’nde ve Masraf Talep Onayları kartında da görünür."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Geri ödeme yolu “Bordro ile” olan onaylı masraflar çalışanın bordrosuna kazanç olarak eklenir ve dönem tamamlanınca kendiliğinden Ödendi olur."
    },
    {
      "hedef": "seyahat-yonetimi",
      "aciklama": "Seyahate bağlanan masraflar Seyahat Yönetimi › Seyahat Giderleri sekmesinde seyahat bazında özetlenir."
    },
    {
      "hedef": "butce-planlama",
      "aciklama": "Onaylanıp henüz ödenmemiş masraflar bütçede taahhüt olarak görünür, ödenince gerçekleşene geçer; bütçe kontrolü onayı engelleyebilir."
    },
    {
      "hedef": "calisani-goruntule",
      "aciklama": "Çalışan kartının Masraflar sekmesinden çalışanın masrafları izlenir ve onun adına masraf kaydı eklenir; bordroya giren masraflar Bordro Bilgileri › Masraf’ta görünür."
    }
  ],
  "seyahatlerim": [
    {
      "hedef": "seyahat-yonetimi",
      "aciklama": "Seyahat talepleriniz yöneticinizin Seyahat Yönetimi ekranında onaylanır veya reddedilir; yönetici sizin adınıza da talep açabilir."
    },
    {
      "hedef": "bordrom",
      "aciklama": "Seyahat talebinde avans istediyseniz, son onaydan sonra bu avans iş avansı olarak Bordrom › Avanslarım’da görünür; dönüşte avansı buradan mahsuplaşmayla kapatırsınız."
    },
    {
      "hedef": "masraflarim",
      "aciklama": "Seyahat sırasında kendi cebinizden yaptığınız harcamaları Masraflarım’da onaylı seyahatinizi seçerek girersiniz."
    }
  ],
  "seyahat-yonetimi": [
    {
      "hedef": "seyahatlerim",
      "aciklama": "Çalışanların Seyahatlerim'den gönderdiği talepler burada onaylanır; yöneticinin çalışan adına açtığı seyahatler çalışanın Seyahatlerim sayfasında görünür."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Seyahat taleplerinin onaylayıcıları ve seyahat türü kuralları birim modül ayarlarındaki Seyahat Yönetimi sekmesinden belirlenir; akış yoksa talep açılamaz."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Onayınızı bekleyen seyahat talepleri Onay Merkezi’nde de listelenir ve oradan sonuçlandırılabilir."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Avanslı seyahat son onayı aldığında aynı tutarda bir iş avansı açılır; bu avansın onayı, ödemesi ve mahsuplaşmayla kapanışı Bordro Yönetimi › Avans Yönetimi’nde yapılır."
    },
    {
      "hedef": "masraf-yonetimi",
      "aciklama": "Seyahate bağlanan masrafların onayı ve geri ödemesi Masraf Yönetimi’nde yürür; Seyahat Giderleri sekmesi yalnız seyahat bazında özet gösterir."
    },
    {
      "hedef": "butce-planlama",
      "aciklama": "Onaylanmış ama ödenmemiş seyahat tutarları bütçede taahhüt olarak görünür; bütçe kontrolü “Engelle” ise aşıma yol açan onay reddedilir."
    },
    {
      "hedef": "calisani-goruntule",
      "aciklama": "Bir çalışanın tüm seyahat talepleri çalışan kartındaki Seyahatler sekmesinde de listelenir."
    }
  ],
  "bordrom": [
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Bordrolarınız dönem tamamlanınca Bordrom'da görünür; itirazlarınız, avans ve mahsuplaşma talepleriniz Bordro Yönetimi ekranında yanıtlanır, gönderilen mektuplar Mektuplarım sekmesine düşer."
    },
    {
      "hedef": "seyahatlerim",
      "aciklama": "Seyahat talebinizde istediğiniz avans, seyahat onaylanınca Avanslarım’da iş avansı olarak açılır."
    },
    {
      "hedef": "masraflarim",
      "aciklama": "Bordro ile geri ödenen masraflarınız bordronuzda kazanç olarak yer alır."
    },
    {
      "hedef": "bilgilerim",
      "aciklama": "Maaşınızın yattığı banka hesabı Bilgilerim’deki IBAN değişikliği süreciyle İK tarafından güncellenir."
    },
    {
      "hedef": "izinlerim",
      "aciklama": "Ücretsiz izinleriniz bordroda eksik gün olarak yer alır."
    },
    {
      "hedef": "ek-mesailerim",
      "aciklama": "Ücret karşılıklı onaylanan ek mesaileriniz bordroda ek mesai kalemiyle görünür."
    }
  ],
  "bordro-yonetimi": [
    {
      "hedef": "bordrom",
      "aciklama": "Tamamlanan dönemin bordroları ve gönderilen mektuplar çalışanın Bordrom sayfasına düşer; çalışanların itiraz, avans ve mahsuplaşma talepleri burada sonuçlandırılır."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Bordro tamamlama, banka ödeme ve avans onay akışları birim modül ayarlarındaki Bordro Yönetimi sekmesinden belirlenir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Bordro Onayı, Puantaj Onayı, Avans ve Banka Ödemesi talepleri Onay Merkezi’nde de listelenir; bordro onayları bu sayfaya yönlendirir."
    },
    {
      "hedef": "seyahat-yonetimi",
      "aciklama": "Seyahat talebinde girilen avans, seyahatin son onayıyla iş avansı olarak Avans Yönetimi’ne düşer; ödenince seyahat kaydında “Ödendi” görünür."
    },
    {
      "hedef": "masraf-yonetimi",
      "aciklama": "“Bordro ile” ödenecek onaylı masraflar bordroya kazanç olarak girer; dönem tamamlanınca Masraf Yönetimi’nde kendiliğinden Ödendi olur."
    },
    {
      "hedef": "calisani-goruntule",
      "aciklama": "Çalışanın maaş tipi, sabit ödemeleri ve ücret geçmişi çalışan kartının Bordro Bilgileri sekmesinden gelir; burada yapılan zam bordroya geçerlilik ayından itibaren yansır."
    },
    {
      "hedef": "calisan-yonetimi",
      "aciklama": "Banka ödeme dosyası çalışanın geçerli banka hesabını kullanır; IBAN değişiklikleri çalışan kartında girilir, onay ayarı açıksa onaylanana kadar eski hesap kullanılır."
    },
    {
      "hedef": "butce-planlama",
      "aciklama": "Hesaplanan bordrolar bütçenin gerçekleşen tarafına kendiliğinden yansır; bordrosu hesaplanmamış aylar bütçede “Gerçekleşmedi” görünür."
    },
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "Buradan gönderilen SGK işe giriş / işten çıkış bildirgesi süreçteki SGK bölümünü kendiliğinden tamamlar; süreçte Ödenecek denen kıdem ve ihbar tutarları bordroya yansır."
    },
    {
      "hedef": "izin-yonetimi",
      "aciklama": "Puantajdaki İzinler bölümü onaylı izin kayıtlarından gelir; ücretsiz izinler eksik gün olarak izin türündeki SGK nedeniyle işlenir."
    },
    {
      "hedef": "ek-mesai-yonetimi",
      "aciklama": "Puantajdaki Ek Mesai bölümü onaylı, ücret karşılıklı ek mesai taleplerinden gelir; puantaj kaydından sonra onaylananlar için puantajı sıfırlayıp yeniden kaydedin."
    },
    {
      "hedef": "mesai-takibi",
      "aciklama": "Mesai kayıtları dahil edilmişse puantaj kontrol listesi kayıtsız günlerle eksik günü karşılaştırır ve uyuşmazlığı gösterir."
    },
    {
      "hedef": "vardiya-yonetimi",
      "aciklama": "Geç kalma toleransı ve geçerli devam kaydı vardiya ile puantajda ortak kullanılır."
    }
  ],
  "performansim": [
    {
      "hedef": "performans-yonetimi",
      "aciklama": "Hedefleriniz, değerlendirmeleriniz, PIP ve gelişim aksiyonlarınız Performans Yönetimi'nde oluşturulur; hedef değişikliği talepleriniz ve itirazlarınız oraya düşer."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Gönderdiğiniz hedef değişiklik talepleri, takdirler ve onayladığınız değerlendirme, onaylayanın Kontrol Paneli › Onay Merkezi’ne düşer; karar verilince size bildirim gelir."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Biriminizin performans kuralları; takdirin onaya gidip gitmeyeceğini, hedefte hangi alanları değiştirebileceğinizi ve önerilen eğitimleri otomatik atayıp atayamayacağınızı belirler."
    },
    {
      "hedef": "bilgilerim",
      "aciklama": "Kesinleşen performans puanınız, hedefleriniz, yetkinlik sonuçlarınız, gelişim planınız ve takdirleriniz Bilgilerim sayfasının Performans sekmesinde de özet olarak görünür."
    }
  ],
  "performans-yonetimi": [
    {
      "hedef": "performansim",
      "aciklama": "Başlatılan değerlendirmeler, atanan hedefler, eğitimler ve PIP çalışanın Performansım sayfasına düşer; çalışanın revizyon talepleri, itirazları ve takdirleri burada onaylanır."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Değerlendirme, yetenek aksiyonu ve hedef revizyonu onay akışı ile takdir onayı kuralı birim modül ayarlarındaki Performans Yönetimi sekmesinden belirlenir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Performans, Yetenek Aksiyonu, Hedef Revizyonu ve Takdir Onayı talepleri Onay Merkezi’nde de listelenir."
    },
    {
      "hedef": "anketler",
      "aciklama": "Anketler sayfasında oluşturulan anket, Bağlılık Anketi sekmesinden bir birime bağlanır; tamamlanan yanıtların ortalaması birimin bağlılık skoruna ve 12 aylık trendine yazılır."
    },
    {
      "hedef": "calisani-goruntule",
      "aciklama": "Kesinleşen skorlar, kalibrasyon düzeltmeleri, itirazlar, hedefler, yetkinlik değerlendirmeleri, eğitimler, PIP, yetenek aksiyonları ve takdirler çalışan kartının Performans sekmesinde dönemlere göre görünür."
    },
    {
      "hedef": "butce-planlama",
      "aciklama": "Oluşan performans skorları Bütçe Planlama’daki Ücret Simülasyonu’nda Merit Matrisi ile zam oranına çevrilir; skoru olmayan çalışan matrisin varsayılan skoruna göre yerleşir."
    }
  ],
  "bilgilerim": [
    {
      "hedef": "bilgilerimi-duzenle",
      "aciklama": "Düzenlemenize açık alanları Bilgilerim sayfasındaki Çalışan İşlemleri menüsünden \"Bilgilerimi Düzenle\" ile değiştirirsiniz."
    },
    {
      "hedef": "calisan-yonetimi",
      "aciklama": "Banka hesabı (IBAN) değişikliğinizi İK Çalışan Yönetimi'nde girer ve başka bir yetkili onaylar; size verilen uyarılar da Bilgilerim › Çalışan Uyarıları sekmesinde görünür."
    },
    {
      "hedef": "bordrom",
      "aciklama": "Onaylanan banka hesabınız maaş ve avans ödemelerinde kullanılır."
    },
    {
      "hedef": "performansim",
      "aciklama": "Performans sekmesindeki karne, hedef, yetkinlik, gelişim ve takdir bilgileri Performansım sayfasında yaptığınız işlemlerden ve sonuçlanan değerlendirmelerden gelir; işlem yapmak için Performansım’ı kullanın."
    }
  ],
  "bilgilerimi-duzenle": [
    {
      "hedef": "bilgilerim",
      "aciklama": "Kaydettiğiniz değişiklikler Bilgilerim sayfasında görünür; onaya gönderdiğiniz belgelerin durumunu Bilgilerim › Doküman Talepleri sekmesinden izlersiniz."
    },
    {
      "hedef": "dokumanlarim",
      "aciklama": "Belge alanına yüklediğiniz dosya onaya gider; onay bekleyen, reddedilen veya yönetimin istediği belgeleri bu formdan değil, Dokümanlarım'daki talep üzerinden gönderirsiniz."
    },
    {
      "hedef": "calisani-duzenle",
      "aciklama": "Size kapalı (gri) alanları ve organizasyon bilgilerinizi İK, Çalışanı Düzenle ekranından değiştirir."
    }
  ],
  "calisani-duzenle": [
    {
      "hedef": "bilgilerimi-duzenle",
      "aciklama": "Çalışanın kendi düzenleyebildiği alanlar Bilgilerimi Düzenle formunda açık olur; diğer alanlar yalnız bu ekrandan değiştirilir."
    },
    {
      "hedef": "dokumanlarim",
      "aciklama": "Belge alanında \"Çalışandan talep edilecek\" seçeneğiyle istenen belge, çalışanın doküman taleplerine düşer."
    }
  ],
  "calisan-yonetimi": [
    {
      "hedef": "bilgilerim",
      "aciklama": "İK'nın girip onayladığı banka hesabı ve verilen uyarılar çalışanın Bilgilerim sayfasında görünür; \"değiştirilebilir\" yapılan alanları çalışan kendisi güncelleyebilir."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Birim değişikliğinde onay zinciri değişen bekleyen talepler, isterseniz yeni pozisyonun onay akışına göre yeniden onaya gönderilir."
    },
    {
      "hedef": "ayarlar",
      "aciklama": "Çalışanın boşalan pozisyonu onaylayıcıysa transfer sırasında etkilenen akışlar için yeni onaylayıcı seçilir."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Çalışan kartında girilen ve onaylanan IBAN, banka ödeme dosyasında maaş ve avans ödemelerinde kullanılır; bekleyen IBAN’lar Raporlar › Banka Hesabı Onayları’nda da onaylanabilir."
    },
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "Yeni çalışan kaydedilince işe giriş süreci birimin varsayılan formu ve görev listesiyle aynı işlemde açılır; sürecin onayı ve takibi İşe Giriş / Çıkış sayfasında yapılır."
    },
    {
      "hedef": "isten-cikarma-yonetimi",
      "aciklama": "İşten Çıkarma İşlemleri butonu hem yeni işten çıkış başlatmayı hem İşten Çıkarılan Çalışanlar listesini açar."
    },
    {
      "hedef": "stok-yonetimi",
      "aciklama": "Yeni çalışan penceresinin Ekipman sekmesinde seçilen envanter paketi kayıtla birlikte zimmet talebi olarak açılır."
    },
    {
      "hedef": "sisteme-giris",
      "aciklama": "Satırdaki Kullanıcı Oluştur ile şifre boş bırakılırsa çalışana hesap kurulum bağlantısı gider; çalışan ilk girişini bu bağlantıyla yapar."
    },
    {
      "hedef": "birim-yonetimi-genel",
      "aciklama": "Yeni çalışana önerilen sicil numarası, birimin Çalışan Numarası sekmesindeki kurala göre oluşur."
    },
    {
      "hedef": "ozluk-islemleri",
      "aciklama": "Birim değişikliğinde aktarılmayan özlük bilgileri sonradan Özlük İşlemleri › Özlük Aktarımı'ndan yeni birimin alanlarına taşınır."
    },
    {
      "hedef": "izin-yonetimi",
      "aciklama": "Birim değişikliğinde eski birimden kalan izin bakiyeleri transfer penceresinde ya da sonradan İzin Yönetimi › Bakiye Aktarımı'ndan aktarılır."
    },
    {
      "hedef": "calisan-disa-aktarma",
      "aciklama": "Çalışan listesini seçtiğiniz alan ve filtrelerle Excel'e aktarmak için Çalışan Dışa Aktarma ekranını kullanın."
    }
  ],
  "calisan-geri-bildirimi": [
    {
      "hedef": "birim-yonetimi-genel",
      "aciklama": "Gönderdiğiniz geri bildirimler biriminiz için Ek Kişiler sekmesinde tanımlanan alıcı pozisyonlara ulaşır."
    }
  ],
  "birim-yonetimi-genel": [
    {
      "hedef": "calisan-geri-bildirimi",
      "aciklama": "Ek Kişiler sekmesinde seçilen geri bildirim alıcıları, çalışanların Çalışan Geri Bildirimi'nden gönderdiklerini Gelen Geri Bildirimler sekmesinde görür."
    },
    {
      "hedef": "izin-yonetimi",
      "aciklama": "İş Akışı Bildirimleri sekmesinde seçilen kişiler, izin talebi onaylandığında veya reddedildiğinde bildirim ve e-posta alır."
    },
    {
      "hedef": "dokumanlarim",
      "aciklama": "Ek Kişiler sekmesindeki Doküman Talebi ve Doküman Gönderme listeleri, çalışanın talep ve gönderim pencerelerinde seçebileceği kişileri belirler."
    },
    {
      "hedef": "ayarlar",
      "aciklama": "Birim detay sayfasına Ayarlar › Organizasyon Şeması’ndan ulaşılır; pozisyonlar ve roller buradaki tanımlarla birlikte çalışır."
    },
    {
      "hedef": "dokuman-yonetimi",
      "aciklama": "Ek Kişiler › Doküman Talebi ve Doküman Gönderme listelerine eklenen pozisyonlar doküman süreçlerinde alıcı olarak seçilebilir."
    },
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "İşten çıkış sebepleri Çalışanı İşten Çıkar penceresinde ve toplu işten çıkışta listelenir; deneme süresi günleri İşe Giriş › Deneme Süresi ekranında izlenir."
    },
    {
      "hedef": "calisan-yonetimi",
      "aciklama": "Çalışan numarası kuralı, yeni çalışan eklerken önerilen sicil numarasını belirler."
    },
    {
      "hedef": "isten-cikarma-yonetimi",
      "aciklama": "Tanımlanan sebep ve SGK kodu, İşten Çıkarılan Çalışanlar listesinin Sebep ve Kod sütunlarında görünür."
    },
    {
      "hedef": "vardiya-yonetimi",
      "aciklama": "Tatiller ve arifeler vardiya planında işaretlenir; “Tatillerde vardiya üret” ayarına göre tatil saatlerine vardiya üretilmez."
    },
    {
      "hedef": "gorev-yonetimi",
      "aciklama": "“Resmi tatilleri dikkate al” açık kategorilerde tatil günleri görev kayıtlarına eklenmez."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Profiller, birim modül ayarlarında tanımlanan izin türlerinin kimlere uygulanacağını belirler."
    }
  ],
  "kontrol-panelim": [
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Talep Merkezi kartında izlediğiniz izin, doküman ve masraf talepleri, yöneticinizin Kontrol Paneli'ndeki Onay Merkezi'ne düşer."
    },
    {
      "hedef": "izinlerim",
      "aciklama": "İzin Durumu kartı ve Talep Merkezi’ndeki izin talepleri İzinlerim sayfasındaki kayıtlardır."
    },
    {
      "hedef": "masraflarim",
      "aciklama": "Son Masraf Talepleri ve Talep Merkezi’ndeki masraflar Masraflarım sayfasındaki kayıtlardır."
    },
    {
      "hedef": "dokumanlarim",
      "aciklama": "Doküman Durumu kartı Dokümanlarım sayfasındaki talep ve belgeleri özetler."
    },
    {
      "hedef": "vardiyalarim",
      "aciklama": "Vardiyam kartı Vardiyalarım sayfasındaki planı gösterir."
    },
    {
      "hedef": "duyurular",
      "aciklama": "Duyurular kartında size gönderilen duyurular görünür; önemli duyurular girişte zorunlu açılır."
    },
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "İşe Giriş Sürecim / İşten Çıkış Sürecim kartı, İK'nın başlattığı süreçte sizden beklenen maddeleri, zimmetleri, anketi ve erişim bitiş tarihini gösterir."
    }
  ],
  "kontrol-paneli": [
    {
      "hedef": "kontrol-panelim",
      "aciklama": "Onay Merkezi'nde karar verdiğiniz talepler çalışanın Kontrol Panelim › Talep Merkezi kartında güncellenir."
    },
    {
      "hedef": "izin-yonetimi",
      "aciklama": "Onay Merkezi’ndeki izin talepleri İzin Yönetimi’ndeki onay akışıyla aynıdır; “Tümünü Görüntüle” sizi bu sayfaya götürür."
    },
    {
      "hedef": "ek-mesai-yonetimi",
      "aciklama": "Onay Merkezi’ndeki ek mesai talepleri buradan da sonuçlandırılabilir."
    },
    {
      "hedef": "mesai-takibi",
      "aciklama": "Mesai Düzeltme talepleri Mesai Takibi’ndeki düzeltme talepleri listesiyle aynıdır."
    },
    {
      "hedef": "masraf-yonetimi",
      "aciklama": "Masraf talepleri ve Masraf Talep Onayları kartı Masraf Yönetimi’ne yönlendirir."
    },
    {
      "hedef": "seyahat-yonetimi",
      "aciklama": "Seyahat talepleri Seyahat Yönetimi’ndeki onay akışıyla aynıdır."
    },
    {
      "hedef": "zimmet-yonetimi",
      "aciklama": "Zimmet talepleri Zimmet Yönetimi’ndeki onay adımıyla aynıdır."
    },
    {
      "hedef": "dokuman-yonetimi",
      "aciklama": "Doküman talepleri burada yalnız görüntülenir; karar Doküman Yönetimi’nden verilir."
    },
    {
      "hedef": "gorev-yonetimi",
      "aciklama": "Görev talepleri Görev Yönetimi › Talepler listesiyle aynıdır."
    },
    {
      "hedef": "vardiya-yonetimi",
      "aciklama": "Vardiya talepleri Vardiya Yönetimi › Talepler listesiyle aynıdır."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Bordro Onayı ve Puantaj Onayı satırları Bordro Yönetimi’ne yönlendirir; avans ve banka ödemesi burada da sonuçlandırılabilir."
    },
    {
      "hedef": "performans-yonetimi",
      "aciklama": "Performans, Yetenek Aksiyonu, Hedef Revizyonu ve Takdir Onayı talepleri Performans Yönetimi’ndeki onaylarla aynıdır."
    },
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "İşe Giriş ve İşten Çıkış satırları İşe Giriş / Çıkış süreçlerinin onay adımlarıdır."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Hangi talebin size düşeceği birim modül ayarlarındaki onay akışlarına göre belirlenir."
    },
    {
      "hedef": "duyurular",
      "aciklama": "Okunmamış Duyurular kartındaki duyurular Duyurular sayfasında oluşturulur ve yönetilir."
    },
    {
      "hedef": "ayarlar",
      "aciklama": "Onay Merkezi’nde hangi talep türlerini göreceğiniz pozisyonunuzun onay akışlarında yer almasına ve rol yetkilerinize bağlıdır."
    },
    {
      "hedef": "genel-arayuz",
      "aciklama": "Onay sırası size gelen talepler için üst çubuktaki zil simgesine bildirim düşer."
    }
  ],
  "servis-yonetimi": [
    {
      "hedef": "vardiya-yonetimi",
      "aciklama": "Servis ataması çalışanın o tarihteki vardiya kaydına bağlıdır; seferler hizmet verdikleri vardiya şablonlarıyla eşleştirilir; atamalar Atamalar sekmesinde izlenir."
    }
  ],
  "butce-planlama": [
    {
      "hedef": "stok-yonetimi",
      "aciklama": "Ekipman & Zimmet sekmesindeki \"Otomatik Üret\", zimmet paketleri, ömrü dolan zimmetler ve havuz stok seviyesinden ekipman satırları oluşturur."
    },
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Bütçe onay zinciri birim modül ayarlarındaki Bütçe Yönetimi › Bütçe Onay Akışı sekmesinden belirlenir."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Bütçe–Gerçekleşen karşılaştırmasında bordro kaynaklı gerçekleşen, hesaplanan bordrolardan kendiliğinden okunur ve elle düzeltilemez."
    },
    {
      "hedef": "masraf-yonetimi",
      "aciklama": "Onaylı ama ödenmemiş masraflar taahhüt olarak sayılır; ödendiğinde taahhütten düşüp gerçekleşene geçer."
    },
    {
      "hedef": "seyahat-yonetimi",
      "aciklama": "Onaylı ama ödenmemiş seyahat tutarları taahhüt olarak sayılır; taahhüt kontrolü seyahat onayını uyarabilir veya engelleyebilir."
    },
    {
      "hedef": "performans-yonetimi",
      "aciklama": "Ücret Simülasyonu’ndaki «Merit matrisinden dağıt» adımı, çalışanın Performans Yönetimi’nde oluşan skorunu ve band konumunu kullanarak zam oranını belirler."
    }
  ],
  "ayarlar": [
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "Onay akışları birim bazında Organizasyon Birim Yönetimi – Modül Ayarları sayfasındaki modül sekmelerinden tanımlanır; burada yalnız genel çerçeve anlatılır."
    },
    {
      "hedef": "birim-yonetimi-genel",
      "aciklama": "Birimin pozisyonları, rolleri ve bildirim ayarları birim detay sayfasının Genel Ayarlar sekmelerinde yönetilir."
    },
    {
      "hedef": "calisan-yonetimi",
      "aciklama": "Onaylayıcı bir pozisyon birim değişikliğiyle boşalırken etkilenen onay akışları için yeni onaylayıcı seçmeniz istenir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Tanımladığınız akışlara göre onaylayıcılara düşen talepler Kontrol Paneli’ndeki Onay Merkezi’nde listelenir."
    },
    {
      "hedef": "calisani-goruntule",
      "aciklama": "Onaylayıcı bir çalışan işten çıkarılırken onaylayıcı olduğu akışlar için yeni onaylayıcı seçmeniz istenir."
    }
  ],
  "birim-yonetimi-moduller": [
    {
      "hedef": "izin-yonetimi",
      "aciklama": "İzin İş Akışı sekmesinde tanımlanan sıra, izin taleplerinin kime düşeceğini belirler; akış yoksa çalışan izin talebi açamaz."
    },
    {
      "hedef": "ek-mesai-yonetimi",
      "aciklama": "Ek Mesai İş Akışı ve Ek Mesai Sınırları, ek mesai taleplerinin onaylayıcısını ve sınır kontrollerini belirler."
    },
    {
      "hedef": "mesai-takibi",
      "aciklama": "Mesai Düzeltme sekmesindeki onay akışı, çıkışı eksik günler için açılan düzeltme taleplerinin onaylayıcısını belirler."
    },
    {
      "hedef": "seyahat-yonetimi",
      "aciklama": "Seyahat İş Akışı ve Seyahat Türleri (avans izni, en fazla süre) seyahat taleplerinin onayını ve kurallarını belirler."
    },
    {
      "hedef": "masraf-yonetimi",
      "aciklama": "Masraf İş Akışı, masraf türleri ve geri ödeme yolu, masraf taleplerinin onayını ve nasıl ödeneceğini belirler."
    },
    {
      "hedef": "zimmet-yonetimi",
      "aciklama": "Zimmet İş Akışı, ekipman taleplerini hangi yöneticilerin sırayla onaylayacağını belirler."
    },
    {
      "hedef": "stok-yonetimi",
      "aciklama": "Stok İş Akışı ve Stok Yöneticileri, onaylanan taleplerin hangi stok yöneticilerine düşeceğini belirler."
    },
    {
      "hedef": "dokuman-yonetimi",
      "aciklama": "Doküman İş Akışı ve talep kategorileri doküman taleplerinin onayını belirler; akış yoksa dokümanlar otomatik onaylanır."
    },
    {
      "hedef": "gorev-yonetimi",
      "aciklama": "Görev İş Akışı kategori bazında tanımlanır; kategoride akış yoksa çalışanın kaydı doğrudan onaylanır."
    },
    {
      "hedef": "vardiya-yonetimi",
      "aciklama": "Vardiya onay akışı ve planlama kuralları vardiya değişim taleplerini yönetir; hiçbir seviyede akış yoksa vardiya değişim talebi açılamaz."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Bordro tamamlama, banka ödeme ve avans onay akışları ile bordro ayarları Bordro Yönetimi’ndeki onay ve hesaplama adımlarını belirler."
    },
    {
      "hedef": "performans-yonetimi",
      "aciklama": "Performans onay akışı değerlendirme, yetenek aksiyonu ve hedef revizyonu onaylarını; Genel Kurallar ise takdir onayını belirler."
    },
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "İşe giriş ve işten çıkış iş akışları süreçlerin onay adımlarını belirler; akış yoksa onay adımı atlanır."
    },
    {
      "hedef": "butce-planlama",
      "aciklama": "Bütçe Onay Akışı bütçeleri onaylayacak pozisyonları belirler; tanım yoksa bütçe gönderildiği anda onaylanıp kilitlenir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Burada tanımlanan akışlara göre onay sırası gelen talepler onaylayıcının Onay Merkezi’nde görünür."
    },
    {
      "hedef": "ayarlar",
      "aciklama": "Onaylayıcı pozisyonlar ve kullanıcı yetkileri Ayarlar sayfasındaki organizasyon şeması ve yetki ekranlarından yönetilir."
    },
    {
      "hedef": "calisan-yonetimi",
      "aciklama": "Birim değişikliğinde çalışanın bekleyen talepleri için yeni pozisyonun onay akışı geçerli olur; boşalan onaylayıcı pozisyonun akışları yeniden düzenlenir."
    },
    {
      "hedef": "performansim",
      "aciklama": "Takdir onayı, revize edilebilen hedef alanları ve gelişim alanından öğrenme ataması kuralları çalışanın Performansım sayfasında neyi yapabileceğini belirler."
    },
    {
      "hedef": "birim-yonetimi-genel",
      "aciklama": "İzin türleri ve resmi tatiller birimin profilleri üzerinden belirli çalışan gruplarına bağlanır."
    }
  ],
  "ise-giris-cikis": [
    {
      "hedef": "birim-yonetimi-moduller",
      "aciklama": "İşe giriş ve işten çıkış süreçlerinin onay akışları birim modül ayarlarındaki İşe Giriş / Çıkış sekmesinden belirlenir."
    },
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Onayınızı bekleyen işe giriş ve işten çıkış süreçleri Onay Merkezi’nde de listelenir."
    },
    {
      "hedef": "calisani-goruntule",
      "aciklama": "Onaylayıcı olan bir çalışan çıkarılırken onay akışları düzenlenmeden işten çıkış kesinleşmez."
    },
    {
      "hedef": "calisan-yonetimi",
      "aciklama": "İşe Giriş sekmesindeki Yeni Çalışan Ekle, Çalışan Yönetimi'ndeki yeni çalışan penceresini açar; çalışan, pozisyon, zimmet talebi ve işe giriş süreci aynı kayıtta oluşur. Kullanıcı hesabı ayrıca Çalışan Yönetimi listesinden açılır."
    },
    {
      "hedef": "isten-cikarma-yonetimi",
      "aciklama": "Kesinleşen çıkışlar İşten Çıkarılan Çalışanlar listesine düşer; işten ayrılma belgesi bu listenin Detaylar penceresinden indirilir."
    },
    {
      "hedef": "stok-yonetimi",
      "aciklama": "İşe girişte seçilen envanter paketi zimmet talebi olarak açılır ve teslim edilene kadar Zimmet Teslimi bölümü bekler. Çıkışta zimmet iadesi Stok Yönetimi'nde teslim alınarak kaydedilir ve Zimmetler bölümü kendiliğinden güncellenir."
    },
    {
      "hedef": "zimmetlerim",
      "aciklama": "Yeni çalışan, kendisine atanan zimmetlerin teslim alma onayını Zimmetlerim'den verir; işten ayrılan çalışan iade edeceği ürünleri orada görür."
    },
    {
      "hedef": "izin-yonetimi",
      "aciklama": "Çıkış sürecinde bekleyen ve çıkıştan sonraki izin talepleri birim kuralına göre ya kapatılmayı bekler ya da otomatik iptal edilir; çıkış sürecindeki çalışana yeni izin hakkı verilmez."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "İşe girişte SGK işe giriş bildirgesi ve sabit ödemeler, çıkışta SGK işten çıkış bildirgesi, kıdem/ihbar tutarları ve son bordro Bordro Yönetimi ile bağlantılıdır. Kalan izin ücreti bordroya kendiliğinden yansımaz, elle girilir."
    },
    {
      "hedef": "birim-yonetimi-genel",
      "aciklama": "Çalışanı İşten Çıkar penceresindeki sebep listesi Veri Girişi › İşten Çıkış Sebepleri'nden, yeni çalışana önerilen numara Çalışan Numarası kuralından, deneme süresi günleri ve anketi Deneme Süresi Bildirimleri'nden gelir."
    },
    {
      "hedef": "kontrol-panelim",
      "aciklama": "Çalışan, işe giriş veya işten çıkış sürecini Kontrol Panelim'deki süreç kartından izler ve kendisinden istenen maddeleri doldurur."
    },
    {
      "hedef": "dokumanlarim",
      "aciklama": "İşe giriş formunda yüklenip onaylanan belgeler çalışanın Dokümanlarım sayfasında da yer alır ve süreç bitince orada kalır."
    },
    {
      "hedef": "anketler",
      "aciklama": "Çıkış anketi ve deneme süresi değerlendirme anketleri çalışana Anketler sayfasından da gelir; deneme süresi anket sonuçları Sistem Anketleri'nde görünür."
    },
    {
      "hedef": "sisteme-giris",
      "aciklama": "Yeni çalışan hesabını, kullanıcı hesabı açıldığında gelen kurulum bağlantısıyla etkinleştirir; ayrılan çalışanın erişimi süreçte gösterilen tarihten sonra kapanır."
    }
  ],
  "calisani-goruntule": [
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "Çalışanı sonlandırınca işten çıkış süreci başlar; çalışan onaylayıcıysa süreçte onay akışlarını düzenlemeniz istenir."
    },
    {
      "hedef": "ayarlar",
      "aciklama": "Çalışanın pozisyonu onay akışlarında onaylayıcıysa boşalan adımlar için yeni onaylayıcı seçilir."
    },
    {
      "hedef": "bordro-yonetimi",
      "aciklama": "Bordro Bilgileri sekmesindeki sabit ödemeler ve zamlar bordroya geçerlilik ayından itibaren yansır; toplu zam Bordro Yönetimi › Ücret & Zam’dan yapılır."
    },
    {
      "hedef": "masraf-yonetimi",
      "aciklama": "Masraflar sekmesi ve Bordro Bilgileri › Masraf alt sekmesi, çalışanın Masraf Yönetimi’ndeki kayıtlarını ve bordroya giren masraflarını gösterir."
    },
    {
      "hedef": "seyahat-yonetimi",
      "aciklama": "Seyahatler sekmesi çalışanın seyahat taleplerini listeler; onay işlemleri Seyahat Yönetimi’nde yapılır."
    },
    {
      "hedef": "performans-yonetimi",
      "aciklama": "Performans sekmesindeki karne, kalibrasyon düzeltmesi, itiraz, PIP ve yetenek aksiyonu bilgileri Performans Yönetimi’nde yürütülen süreçlerden gelir; PIP ve aksiyon işlemleri orada yapılır."
    },
    {
      "hedef": "isten-cikarma-yonetimi",
      "aciklama": "Çıkışı kesinleşen çalışan İşten Çıkarılan Çalışanlar listesinde görünür; Çalışanı Geri Al ile yeniden işe alınınca listede Tekrar İşe Alındı Evet olur."
    }
  ],
  "duyurular": [
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Gönderilen duyurular yöneticilerin Kontrol Paneli’ndeki Okunmamış Duyurular kartında görünür."
    },
    {
      "hedef": "kontrol-panelim",
      "aciklama": "Gönderilen duyurular çalışanların Kontrol Panelim’deki Duyurular kartına ve bildirimlerine düşer."
    },
    {
      "hedef": "genel-arayuz",
      "aciklama": "Yeni duyurular üst çubuktaki megafon simgesinde ve bildirimlerde okunmamış olarak görünür."
    }
  ],
  "genel-arayuz": [
    {
      "hedef": "kontrol-paneli",
      "aciklama": "Onay sırası size gelen talepler için bildirim alırsınız; talepleri Onay Merkezi’nden sonuçlandırabilirsiniz."
    },
    {
      "hedef": "duyurular",
      "aciklama": "Megafon simgesi Duyurular sayfasındaki size gelen duyuruları açar."
    }
  ],
  "anketler": [
    {
      "hedef": "performans-yonetimi",
      "aciklama": "Bir anket Performans Yönetimi › Dönem Yönetimi › Bağlılık Anketi’nden birime bağlandığında sayısal yanıtların ortalaması o birimin bağlılık skoruna ve trendine yazılır."
    },
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "Deneme süresi değerlendirme anketleri ve çıkış anketi işe giriş / çıkış sürecinden otomatik oluşur; deneme süresi yanıtları İşe Giriş › Deneme Süresi ekranında da izlenir."
    }
  ],
  "isten-cikarma-yonetimi": [
    {
      "hedef": "ise-giris-cikis",
      "aciklama": "Listeye yalnız işten çıkış süreci kesinleşen çalışanlar düşer; kesinleşmemiş çıkışların düzenlenmesi veya iptali İşe Giriş / Çıkış sayfasındaki süreçten yapılır."
    },
    {
      "hedef": "calisani-goruntule",
      "aciklama": "Görüntüle ile açılan kartta Çalışanı Geri Al seçeneğiyle çalışan yeniden işe alınır ya da yanlış girilen çıkış geri alınır."
    },
    {
      "hedef": "birim-yonetimi-genel",
      "aciklama": "Sebep ve Kod sütunları, birimin Veri Girişi › İşten Çıkış Sebepleri tanımından gelir."
    }
  ],
  "ozluk-islemleri": [
    {
      "hedef": "calisan-yonetimi",
      "aciklama": "Aktarım listesine, Çalışan Yönetimi'nden birim değişikliği yapılan ve eski birimden özlük bilgisi kalan çalışanlar düşer."
    },
    {
      "hedef": "calisan-disa-aktarma",
      "aciklama": "Çalışan Özlük Bilgileri sekmesindeki alan seçimi ve filtreler Çalışan Dışa Aktarma sayfasında ayrıntılı anlatılır."
    }
  ],
  "sisteme-giris": [
    {
      "hedef": "calisan-yonetimi",
      "aciklama": "Hesap kurulum e-postası, İK Çalışan Yönetimi'nde Kullanıcı Oluştur ile hesabınızı açtığında gönderilir."
    }
  ],
  "calisan-disa-aktarma": [
    {
      "hedef": "ozluk-islemleri",
      "aciklama": "Çalışan Dışa Aktarma, Özlük İşlemleri sayfasındaki Çalışan Özlük Bilgileri sekmesine açılır; iki sayfa aynı ekranı kullanır."
    },
    {
      "hedef": "calisan-yonetimi",
      "aciklama": "Dışa aktarılan liste, Çalışan Yönetimi'nde detayına erişebildiğiniz çalışanlardan oluşur."
    }
  ]
}
