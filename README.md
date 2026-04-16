# 👨‍💻 Murat Dönmezdemir - Kişisel Web Sitesi

Merhaba! Ben Murat Dönmezdemir. QA Test Uzmanı ve Full-Stack Developer olarak çalışıyorum. Bu proje, profesyonel deneyimlerimi, projelerimi ve sertifikalarımı sergilemek için geliştirdiğim kişisel web sitem.

## 🎯 Proje Hakkında

Bu web sitesini sıfırdan kendim geliştirdim. Amacım, hem teknik yeteneklerimi göstermek hem de benimle iletişime geçmek isteyenlere kolay bir platform sunmak. Modern web teknolojileri kullanarak, responsive ve kullanıcı dostu bir deneyim oluşturmaya çalıştım.

### ✨ Özellikler

- **Dinamik İçerik Yönetimi**: Blog yazıları, projeler, sertifikalar ve eğitim bilgileri API üzerinden dinamik olarak yükleniyor
- **Admin Paneli**: İçerikleri kolayca yönetebileceğim modern bir admin arayüzü (Supabase entegreli)
- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **İletişim Formu**: Ziyaretçilerin benimle kolayca iletişime geçebilmesi için
- **Smooth Animasyonlar**: AOS kütüphanesi ile akıcı sayfa geçişleri
- **Modern UI**: TailwindCSS ile temiz ve profesyonel tasarım

## 🛠️ Kullanılan Teknolojiler

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Supabase** - Backend as a Service (Admin paneli için)

### Frontend
- **HTML5** - Yapı
- **TailwindCSS** - Styling framework
- **Vanilla JavaScript** - İnteraktif özellikler
- **AOS** - Scroll animasyonları
- **Feather Icons** - İkon seti

### Veri Yönetimi
- **JSON** - Veri depolama
- **LocalStorage** - Form verileri için

## 🚀 Kurulum

Projeyi kendi bilgisayarınızda çalıştırmak oldukça basit:

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone https://github.com/MuratDonmezdemir/BenimWebSite.git
cd BenimWebSite/BenimWebSite
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Sunucuyu başlatın**
```bash
npm start
```

4. **Tarayıcınızda açın**
```
http://localhost:5000
```

### Alternatif: Python ile Çalıştırma
```bash
python run.py
```

## 📁 Proje Yapısı

```
BenimWebSite/
│
├── data/                      # JSON veri dosyaları
│   ├── certificates.json      # Sertifika bilgileri
│   ├── educations.json        # Eğitim geçmişi
│   ├── posts.json            # Blog yazıları
│   └── projects.json         # Projeler
│
├── images/                    # Görseller
│   └── images/               # Sertifika ve profil fotoğrafları
│
├── yazilar/                  # Blog içerikleri
│   └── ai-tabanli-test.md   # Markdown formatında yazılar
│
├── admin.html                # Admin paneli
├── blog-post.html           # Blog detay sayfası
├── index.html               # Ana sayfa
├── server.js                # Express.js backend
├── package.json             # Node.js bağımlılıkları
├── run.py                   # Python başlatıcı
└── README.md                # Bu dosya
```

## 🎨 Sayfalar

### Ana Sayfa (index.html)
- **Hero Section**: Kısa tanıtım ve CTA butonları
- **Hakkımda**: Detaylı profesyonel özgeçmiş
- **Eğitim**: Akademik ve profesyonel eğitimler
- **Projeler**: Geliştirdiğim projeler
- **Blog**: Teknik yazılarım
- **Sertifikalar**: Aldığım sertifikalar
- **İletişim**: İletişim formu ve sosyal medya linkleri

### Admin Paneli (admin.html)
- Eğitim, sertifika ve blog içeriklerini yönetme
- Modern dark/light tema desteği
- Supabase ile gerçek zamanlı veri senkronizasyonu

## 🔌 API Endpoint'leri

Backend, RESTful API prensiplerine uygun şekilde tasarlandı:

### Projeler
- `GET /api/projects` - Tüm projeleri listele
- `POST /api/projects` - Yeni proje ekle
- `DELETE /api/projects/:id` - Proje sil

### Sertifikalar
- `GET /api/certificates` - Tüm sertifikaları listele
- `POST /api/certificates` - Yeni sertifika ekle
- `DELETE /api/certificates/:id` - Sertifika sil

### Eğitimler
- `GET /api/educations` - Tüm eğitimleri listele
- `POST /api/educations` - Yeni eğitim ekle
- `DELETE /api/educations/:id` - Eğitim sil

### Blog Yazıları
- `GET /api/posts` - Tüm blog yazılarını listele
- `POST /api/posts` - Yeni yazı ekle
- `DELETE /api/posts/:id` - Yazı sil

## 🌐 Sosyal Medya

Benimle iletişime geçmek isterseniz:

- 💼 [LinkedIn](https://www.linkedin.com/in/murat-dönmezdemir/)
- 🐙 [GitHub](https://github.com/MuratDonmezdemir)
- 🐦 [Twitter](https://twitter.com/mndrs1973)
- 📸 [Instagram](https://instagram.com/DEVELOPER_MNDRS)
- 🔗 [Linktree](https://linktr.ee/Murat_Donmezdemir)
- 📧 [Email](mailto:testingdnmzdmr@gmail.com)
- 📱 Telefon: +90 554 908 3133

## 💡 Özelleştirme

Projeyi kendi ihtiyaçlarınıza göre özelleştirmek isterseniz:

1. **JSON dosyalarını düzenleyin**: `data/` klasöründeki dosyalarda kendi bilgilerinizi ekleyin
2. **Görselleri değiştirin**: `images/` klasörüne kendi fotoğraflarınızı ekleyin
3. **Renkleri özelleştirin**: TailwindCSS sınıflarını değiştirerek tema renklerini ayarlayın
4. **Admin panelini yapılandırın**: `admin.html` içindeki Supabase bilgilerini güncelleyin

## 🐛 Bilinen Sorunlar ve Çözümler

### Port 5000 Kullanımda Hatası
Eğer `EADDRINUSE` hatası alırsanız:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID_NUMARASI> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

### Node Modules Hatası
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🔄 Güncellemeler

Proje aktif olarak geliştirilmeye devam ediyor. Son güncellemeler için `CHANGELOG.md` dosyasına göz atabilirsiniz.

## 📝 Lisans

Bu proje kişisel kullanım için geliştirilmiştir. Kaynak kodları eğitim amaçlı kullanılabilir.

## 🙏 Teşekkürler

Bu projeyi geliştirirken kullandığım açık kaynak kütüphanelere ve topluluk desteğine teşekkür ederim.

---

**Not**: Bu web sitesi sürekli geliştirilmektedir. Önerileriniz ve geri bildirimleriniz için benimle iletişime geçebilirsiniz!

**Geliştirici**: Murat Dönmezdemir  
**Son Güncelleme**: 2024  
**Versiyon**: 1.0.0

---

⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!
