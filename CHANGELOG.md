# 📝 Değişiklik Günlüğü - Kişisel Web Sitesi

**Proje Sahibi**: Murat Dönmezdemir  
**Son Güncelleme**: 2024  
**Versiyon**: 2.0.0

---

## 🎯 Proje Hakkında

Merhaba! Ben Murat Dönmezdemir. Bu proje, profesyonel kariyerimi, projelerimi ve yeteneklerimi sergilemek için geliştirdiğim kişisel web sitem. Sıfırdan kodladığım bu platformda, modern web teknolojilerini kullanarak hem teknik becerilerimi göstermek hem de benimle iletişime geçmek isteyenlere kolay bir deneyim sunmak istedim.

---

## 🚀 Yapılan Geliştirmeler

### 1. Proje Altyapısı ve Mimari

#### Backend Geliştirmeleri
- ✅ **Express.js** ile RESTful API mimarisi kuruldu
- ✅ **CORS** desteği eklendi - Cross-origin isteklere izin veriliyor
- ✅ JSON tabanlı veri yönetimi sistemi oluşturuldu
- ✅ Statik dosya sunumu optimize edildi
- ✅ Sertifika klasörü için özel route tanımlandı
- ✅ Hata yönetimi ve loglama mekanizmaları eklendi

#### Veri Yapısı
```
data/
├── certificates.json  # Sertifika bilgileri
├── educations.json    # Eğitim geçmişi
├── posts.json        # Blog yazıları
└── projects.json     # Proje portföyü
```

### 2. Frontend Tasarım ve Kullanıcı Deneyimi

#### Görsel Geliştirmeler
- 🎨 **Animasyonlu Gradient Arka Plan**: Hero bölümünde 5 renkli gradient animasyonu
- 🎈 **Floating Animasyonlar**: Profil fotoğrafı yukarı-aşağı yüzüyor
- 💫 **Gradient Text**: Tüm başlıklarda renkli, animasyonlu yazılar
- ✨ **Shimmer Efektleri**: Skill bar'larda parlama animasyonu
- 🎪 **Bounce Animasyonlar**: Sosyal medya ikonlarında zıplama efekti
- 🔍 **Zoom Efektleri**: Sertifika kartlarında hover zoom

#### İnteraktif Özellikler
- 📱 **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu
- 🎯 **Hover Efektleri**: Kartlarda yukarı kalkma ve hafif dönme
- 💎 **Gelişmiş Gölgeler**: Derinlik hissi veren shadow efektleri
- 🌈 **Gradient Tag'ler**: Proje etiketlerinde renkli geçişler

### 3. Sertifika Yönetim Sistemi

#### Özellikler
- 📄 **8'li Grid Yapısı**: Sayfa başına 8 sertifika (2x4 mobil, 4x2 masaüstü)
- 🖼️ **Thumbnail Önizleme**: Her sertifikanın küçük resim önizlemesi
- 🔗 **Tıklanabilir Kartlar**: Karta tıklayınca tam boyutta açılıyor
- ⚡ **Hızlı Yükleme**: Optimize edilmiş görsel boyutları
- 🎨 **Hover Animasyonları**: Parlama ve zoom efektleri

#### Teknik Detaylar
- URL encoding ile özel karakter desteği
- Fallback placeholder görseller
- Lazy loading hazırlığı
- Error handling mekanizması

### 4. Blog Yönetim Sistemi

#### Admin Paneli Özellikleri
- ✍️ **Kolay Ekleme**: Sadece başlık, tarih ve içerik
- 🔄 **CRUD İşlemleri**: Tam Create, Read, Update, Delete desteği
- 🔍 **Arama Fonksiyonu**: Blog başlığı ve içeriğinde arama
- 📝 **Otomatik Özet**: İlk 150 karakter otomatik özet olarak kaydediliyor
- 💾 **API Entegrasyonu**: Backend ile tam senkronizasyon

#### Kullanıcı Deneyimi
- 📖 **Dinamik Yükleme**: Blog yazıları API'den anlık yükleniyor
- 🎨 **Modern Kartlar**: Hover efektleri ve animasyonlar
- 📅 **Tarih Formatı**: Türkçe tarih gösterimi
- 🔗 **Detay Sayfası**: Her blog için ayrı sayfa

### 5. İletişim ve Sosyal Medya

#### İletişim Formu
- 📧 **LocalStorage Entegrasyonu**: Form verileri güvenli şekilde saklanıyor
- ✅ **Form Validasyonu**: Zorunlu alan kontrolleri
- 💬 **Başarı Mesajları**: Kullanıcı dostu geri bildirimler
- 🎨 **Modern Tasarım**: Temiz ve profesyonel görünüm

#### Sosyal Medya Linkleri
- 🔗 **Aktif Linkler**: GitHub, LinkedIn, Twitter, Instagram, Linktree
- 📱 **Tıklanabilir İletişim**: Email ve telefon linkleri
- 🎪 **Animasyonlu İkonlar**: Hover'da bounce efekti
- 🎨 **Renkli Hover**: Her platform için özel renk

### 6. Performans ve Optimizasyon

#### Teknik İyileştirmeler
- ⚡ **Hızlı Yükleme**: Optimize edilmiş asset'ler
- 🎯 **Lazy Loading**: Görsel yükleme optimizasyonu
- 📦 **Minified CSS**: TailwindCSS CDN kullanımı
- 🔄 **Smooth Animations**: AOS kütüphanesi entegrasyonu
- 🎨 **Icon System**: Feather Icons ile hafif ikonlar

#### SEO ve Erişilebilirlik
- 📱 **Mobile-First**: Mobil öncelikli tasarım
- ♿ **Accessibility**: ARIA etiketleri ve semantic HTML
- 🔍 **SEO Friendly**: Meta tag'ler ve yapılandırılmış veri
- 🌐 **Cross-Browser**: Tüm modern tarayıcılarda uyumlu

---

## 🛠️ Kullanılan Teknolojiler

### Backend Stack
```javascript
- Node.js v14+          // JavaScript runtime
- Express.js v4.21      // Web framework
- CORS v2.8             // Cross-origin resource sharing
- File System (fs)      // Dosya işlemleri
- Path                  // Yol yönetimi
- Crypto                // UUID üretimi
```

### Frontend Stack
```html
- HTML5                 // Yapı
- TailwindCSS v3        // Utility-first CSS framework
- Vanilla JavaScript    // İnteraktif özellikler
- AOS v2.3              // Scroll animasyonları
- Feather Icons         // SVG icon seti
```

### Veri Yönetimi
```json
- JSON Files            // Veri depolama
- LocalStorage          // Form verileri
- RESTful API           // Backend iletişimi
```

---

## 📂 Proje Yapısı

```
BenimWebSite/
│
├── BenimWebSite/              # Ana proje klasörü
│   ├── data/                  # JSON veri dosyaları
│   │   ├── certificates.json  # 8 sertifika bilgisi
│   │   ├── educations.json    # Eğitim geçmişi
│   │   ├── posts.json         # Blog yazıları
│   │   └── projects.json      # Proje portföyü
│   │
│   ├── images/                # Görseller
│   │   └── images/           # Profil ve arka plan
│   │
│   ├── yazilar/              # Blog içerikleri
│   │   └── *.md              # Markdown formatında
│   │
│   ├── admin.html            # Yönetim paneli
│   ├── blog-post.html        # Blog detay sayfası
│   ├── index.html            # Ana sayfa
│   ├── server.js             # Express.js backend
│   ├── package.json          # Node.js bağımlılıkları
│   └── README.md             # Proje dokümantasyonu
│
├── sertifika/                # Sertifika görselleri (8 adet)
├── Murat1/                   # Yedek dosyalar
└── README.md                 # Ana README
```

---

## 🎨 Tasarım Felsefesi

### Renk Paleti
- **Primary**: Mavi tonları (#667eea, #4facfe)
- **Secondary**: Mor tonları (#764ba2, #f093fb)
- **Accent**: Cyan (#00f2fe)
- **Neutral**: Gri tonları (#f3f4f6, #1f2937)

### Animasyon Prensipleri
- **Smooth Transitions**: 0.3s ease-in-out
- **Hover Effects**: Yukarı kalkma + hafif dönme
- **Gradient Animations**: 15s infinite loop
- **Bounce Effects**: 0.5s spring animation

### Responsive Breakpoints
- **Mobile**: < 768px (2 sütun)
- **Tablet**: 768px - 1024px (3 sütun)
- **Desktop**: > 1024px (4 sütun)

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
```bash
Node.js v14+
npm v6+
Modern web tarayıcı
```

### Kurulum Adımları
```bash
# 1. Proje klasörüne gidin
cd BenimWebSite/BenimWebSite

# 2. Bağımlılıkları yükleyin
npm install

# 3. Sunucuyu başlatın
npm start

# 4. Tarayıcıda açın
http://localhost:5000
```

### Alternatif Başlatma
```bash
# Python ile
python run.py

# Veya doğrudan Node ile
node server.js
```

---

## 📊 API Endpoint'leri

### Blog Yazıları
```javascript
GET    /api/posts           // Tüm yazıları listele
GET    /api/posts/:id       // Tek yazı getir
POST   /api/posts           // Yeni yazı ekle
PUT    /api/posts/:id       // Yazı güncelle
DELETE /api/posts/:id       // Yazı sil
```

### Sertifikalar
```javascript
GET    /api/certificates    // Tüm sertifikaları listele
POST   /api/certificates    // Yeni sertifika ekle
DELETE /api/certificates/:id // Sertifika sil
```

### Projeler
```javascript
GET    /api/projects        // Tüm projeleri listele
POST   /api/projects        // Yeni proje ekle
DELETE /api/projects/:id    // Proje sil
```

### Eğitimler
```javascript
GET    /api/educations      // Tüm eğitimleri listele
POST   /api/educations      // Yeni eğitim ekle
DELETE /api/educations/:id  // Eğitim sil
```

---

## 🐛 Çözülen Sorunlar

### 1. Sertifika Yükleme Hatası
**Sorun**: `#` karakteri URL'de sorun yaratıyordu  
**Çözüm**: 
- URL encoding eklendi (`encodeURI()`)
- C# sertifikası `CSharp` olarak yeniden adlandırıldı
- Fallback placeholder görseller eklendi

### 2. Data Klasörü Eksikliği
**Sorun**: JSON dosyaları yanlış konumdaydı  
**Çözüm**: 
- `data/` klasörü oluşturuldu
- Tüm JSON dosyaları taşındı
- Server.js yolu güncellendi

### 3. Blog API Entegrasyonu
**Sorun**: Admin panelinde blog ekleme çalışmıyordu  
**Çözüm**: 
- API endpoint'leri eklendi
- CRUD işlemleri tamamlandı
- Form basitleştirildi (sadece başlık, tarih, içerik)

### 4. Statik Dosya Sunumu
**Sorun**: Sertifika görselleri yüklenemiyordu  
**Çözüm**: 
- Express static middleware güncellendi
- Üst dizin erişimi eklendi
- Path.join ile güvenli yol oluşturuldu

---

## 🎯 Gelecek Planları

### Kısa Vadeli (1-2 Ay)
- [ ] Blog yazıları için Markdown editör
- [ ] Sertifika yükleme sistemi (file upload)
- [ ] Proje detay sayfaları
- [ ] İletişim formu email entegrasyonu
- [ ] Dark/Light mode toggle

### Orta Vadeli (3-6 Ay)
- [ ] Veritabanı entegrasyonu (MongoDB/PostgreSQL)
- [ ] Kullanıcı yorum sistemi
- [ ] Blog kategorileri ve etiketler
- [ ] Arama fonksiyonu (global)
- [ ] RSS feed

### Uzun Vadeli (6+ Ay)
- [ ] Çoklu dil desteği (EN/TR)
- [ ] PWA (Progressive Web App) dönüşümü
- [ ] Analytics entegrasyonu
- [ ] Newsletter sistemi
- [ ] Sosyal medya paylaşım butonları

---

## 📞 İletişim

**Murat Dönmezdemir**  
QA Test Uzmanı & Full-Stack Developer

- 📧 Email: testingdnmzdmr@gmail.com
- 📱 Telefon: +90 554 908 3133
- 💼 LinkedIn: [linkedin.com/in/murat-dönmezdemir](https://www.linkedin.com/in/murat-dönmezdemir/)
- 🐙 GitHub: [github.com/MuratDonmezdemir](https://github.com/MuratDonmezdemir)
- 🐦 Twitter: [@mndrs1973](https://twitter.com/mndrs1973)
- 📸 Instagram: [@DEVELOPER_MNDRS](https://instagram.com/DEVELOPER_MNDRS)
- 🔗 Linktree: [linktr.ee/Murat_Donmezdemir](https://linktr.ee/Murat_Donmezdemir)

---

## 🙏 Teşekkürler

Bu projeyi geliştirirken kullandığım açık kaynak kütüphanelere ve topluluk desteğine teşekkür ederim:

- **TailwindCSS** - Utility-first CSS framework
- **AOS** - Scroll animasyon kütüphanesi
- **Feather Icons** - Minimal SVG icon seti
- **Express.js** - Node.js web framework
- **Stack Overflow** - Sorun çözümlerinde yardımcı olan topluluk

---

## 📄 Lisans

Bu proje kişisel kullanım için geliştirilmiştir. Kaynak kodları eğitim amaçlı kullanılabilir.

---

## 📝 Notlar

- Proje aktif olarak geliştirilmeye devam ediyor
- Önerileriniz ve geri bildirimleriniz için benimle iletişime geçebilirsiniz
- Hata bildirimleri için GitHub Issues kullanabilirsiniz
- Katkıda bulunmak isterseniz Pull Request açabilirsiniz

---

**Son Güncelleme**: 2024  
**Geliştirici**: Murat Dönmezdemir  
**Versiyon**: 2.0.0 - Animasyonlu ve Enerjik Tasarım

---

⭐ Projeyi beğendiyseniz GitHub'da yıldız vermeyi unutmayın!

🚀 **Canlı Demo**: http://localhost:5000  
🛠️ **Admin Paneli**: http://localhost:5000/admin.html
