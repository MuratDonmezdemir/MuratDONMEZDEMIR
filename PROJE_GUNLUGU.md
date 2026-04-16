# 🚀 Kişisel Web Sitem - Geliştirme Günlüğü

Merhaba! Ben Murat Dönmezdemir. Bu dosyada, kişisel web sitemi geliştirirken yaptığım tüm değişiklikleri ve iyileştirmeleri sizlerle paylaşıyorum.

## 📋 Proje Özeti

Modern web teknolojileri kullanarak, profesyonel deneyimlerimi, projelerimi ve sertifikalarımı sergilemek için bu web sitesini sıfırdan geliştirdim. Hem teknik yeteneklerimi göstermek hem de benimle iletişime geçmek isteyenlere kolay bir platform sunmak istedim.

## 🎯 Yapılan Geliştirmeler

### 1. Proje Yapısı ve Backend İyileştirmeleri

#### Klasör Organizasyonu
- ✅ `data/` klasörü oluşturuldu ve tüm JSON dosyaları buraya taşındı
- ✅ Sertifika dosyaları için statik dosya sunucusu yapılandırıldı
- ✅ API endpoint'leri RESTful standartlara uygun hale getirildi

#### Server.js Güncellemeleri
```javascript
// Sertifika klasörü statik olarak sunuluyor
app.use('/sertifika', express.static(path.join(__dirname, '..', 'sertifika')));

// CRUD işlemleri için tam destek
- GET /api/posts - Tüm blog yazılarını listele
- POST /api/posts - Yeni blog ekle
- PUT /api/posts/:id - Blog güncelle
- DELETE /api/posts/:id - Blog sil
```

### 2. Frontend - Görsel İyileştirmeler

#### Animasyonlar ve Efektler
Sayfayı daha canlı ve enerjik hale getirmek için birçok animasyon ekledim:

**Hero Bölümü:**
- 🌈 5 renkli animasyonlu gradient arka plan (15 saniyede döngü)
- 🎈 Profil fotoğrafı yüzen animasyon (6 saniye)
- 💫 Başlık gradient text animasyonu
- 💓 İletişim butonu pulse animasyonu (2 saniye)

**Sertifika Kartları:**
- ✨ Hover'da parlama efekti (shimmer animation)
- 🔍 Resim zoom efekti (%110 büyüme)
- 📈 Yukarı kalkma + hafif dönme (10px + 2 derece)
- 💎 Gelişmiş gölge efektleri

**Diğer Kartlar:**
- 🎯 Blog, proje ve eğitim kartlarında hover animasyonları
- 🌟 Smooth cubic-bezier geçişleri
- 🎨 Gradient tag'ler (mavi-mor geçişli)

**Skill Bar'lar:**
- ⚡ Shimmer animasyonu (parlama efekti)
- 📊 1.5 saniyede smooth dolma

**Sosyal Medya İkonları:**
- 🎪 Bounce animasyonu (0.5 saniye)
- 🎨 Hover'da renk değişimleri

#### CSS Animasyonları
```css
@keyframes float - Yüzen animasyon
@keyframes pulse - Nabız animasyonu
@keyframes gradient - Gradient geçişi
@keyframes shimmer - Parlama efekti
@keyframes bounce - Zıplama efekti
```

### 3. Sertifika Sistemi

#### Grid Yapısı
- 📱 Mobil: 2 sütun
- 💻 Tablet: 3 sütun
- 🖥️ Masaüstü: 4 sütun
- 📄 Sayfa başına 8 sertifika görünümü

#### Özellikler
- ✅ PDF ve resim desteği
- ✅ Thumbnail önizleme
- ✅ Tıklanabilir kartlar (yeni sekmede açılır)
- ✅ Otomatik placeholder (yüklenemeyen resimler için)
- ✅ URL encoding (özel karakterler için)

#### Eklenen Sertifikalar
1. ISTQB Certified Tester
2. Full-Stack Web Developer (Udemy)
3. C# Programlama (Udemy)
4. Scrum Master
5. SQL Öğreniyorum (BTK Akademi)
6. Yapay Zeka (WiseQuarter)
7. Güvenlik Duvarına Giriş (BTK Akademi)
8. Proje Yönetimi (BTK Akademi)

### 4. Blog Yönetim Sistemi

#### Admin Paneli Özellikleri
- ✅ Kolay blog ekleme (sadece başlık, tarih, içerik)
- ✅ Blog düzenleme
- ✅ Blog silme
- ✅ Arama fonksiyonu
- ✅ Gerçek zamanlı önizleme

#### API Entegrasyonu
```javascript
POST /api/posts - Yeni blog ekle
GET /api/posts - Tüm blogları listele
PUT /api/posts/:id - Blog güncelle
DELETE /api/posts/:id - Blog sil
```

#### Form Basitleştirmesi
Önceki form alanları: Başlık, Yazar, Kategori, Tarih, İçerik
Yeni form alanları: Başlık, Tarih, İçerik (daha sade ve kullanışlı)

### 5. İletişim ve Sosyal Medya

#### Çalışan Linkler
- 📧 Email: testingdnmzdmr@gmail.com (tıklanabilir)
- 📱 Telefon: +90 554 908 3133 (tıklanabilir)
- 💼 LinkedIn: https://www.linkedin.com/in/murat-dönmezdemir/
- 🐙 GitHub: https://github.com/MuratDonmezdemir
- 🐦 Twitter: https://twitter.com/mndrs1973
- 📸 Instagram: https://instagram.com/DEVELOPER_MNDRS
- 🔗 Linktree: https://linktr.ee/Murat_Donmezdemir

#### İletişim Formu
- ✅ LocalStorage'a kayıt
- ✅ Form validasyonu
- ✅ Başarı/hata mesajları
- ✅ Otomatik temizleme

### 6. Teknik İyileştirmeler

#### Dosya Yönetimi
- ✅ Özel karakterler için URL encoding
- ✅ C# sertifikası dosya adı düzeltildi (C# → CSharp)
- ✅ Türkçe karakter desteği

#### Performans
- ✅ Lazy loading için AOS kütüphanesi
- ✅ Optimize edilmiş animasyonlar
- ✅ Responsive tasarım (mobil-first)

#### Kod Kalitesi
- ✅ Temiz ve okunabilir kod
- ✅ Yorum satırları
- ✅ Modüler yapı
- ✅ Error handling

## 🛠️ Kullanılan Teknolojiler

### Backend
- **Node.js** v14+ - JavaScript runtime
- **Express.js** v4.21.2 - Web framework
- **CORS** v2.8.5 - Cross-origin resource sharing
- **Crypto** - Benzersiz ID üretimi

### Frontend
- **HTML5** - Semantik yapı
- **TailwindCSS** - Utility-first CSS framework
- **Vanilla JavaScript** - Saf JavaScript (framework yok)
- **AOS** v2.3.1 - Scroll animasyonları
- **Feather Icons** - Minimal ikon seti

### Veri Yönetimi
- **JSON** - Dosya tabanlı veri depolama
- **LocalStorage** - Form verileri için

## 📁 Güncel Proje Yapısı

```
BenimWebSite/
├── BenimWebSite/
│   ├── data/
│   │   ├── certificates.json      # 8 sertifika
│   │   ├── educations.json        # Eğitim geçmişi
│   │   ├── posts.json            # Blog yazıları
│   │   └── projects.json         # Projeler
│   ├── images/
│   ├── yazilar/
│   ├── admin.html                # Admin paneli
│   ├── index.html                # Ana sayfa (animasyonlu)
│   ├── server.js                 # Express backend
│   ├── package.json
│   └── README.md
├── sertifika/                    # Sertifika dosyaları
│   ├── CSharp_Programlama_Sertifika_1.jpg
│   ├── Scrum_Sertifika_1.jpg
│   └── ... (8 sertifika)
└── Murat1/                       # Eski .memex klasörü
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js v14 veya üzeri
- npm veya yarn

### Kurulum Adımları

1. **Bağımlılıkları yükleyin:**
```bash
cd BenimWebSite/BenimWebSite
npm install
```

2. **Sunucuyu başlatın:**
```bash
npm start
```

3. **Tarayıcıda açın:**
```
Ana Sayfa: http://localhost:5000
Admin Paneli: http://localhost:5000/admin.html
```

## 🎨 Öne Çıkan Özellikler

### Animasyonlar
- ✨ 6 farklı CSS animasyonu
- 🎭 Smooth geçişler (cubic-bezier)
- 🌈 Gradient animasyonları
- 💫 Hover efektleri

### Responsive Tasarım
- 📱 Mobil optimizasyonu
- 💻 Tablet desteği
- 🖥️ Masaüstü görünümü
- 🎯 Breakpoint'ler: 768px, 1024px

### Kullanıcı Deneyimi
- 🎯 Kolay navigasyon
- 🔍 Arama fonksiyonları
- 📝 Basit formlar
- ⚡ Hızlı yükleme

## 🐛 Çözülen Sorunlar

### 1. Sertifika Yolu Hatası
**Sorun:** `Cannot GET /sertifika/...`
**Çözüm:** Express'te statik dosya sunucusu yapılandırıldı

### 2. C# Dosya Adı Sorunu
**Sorun:** URL'de `#` karakteri hata veriyordu
**Çözüm:** Dosya adı `CSharp` olarak değiştirildi + URL encoding eklendi

### 3. Blog API Eksikliği
**Sorun:** Admin panelinde blog ekleme çalışmıyordu
**Çözüm:** Tam CRUD API endpoint'leri eklendi

### 4. EmailJS Bağımlılığı
**Sorun:** EmailJS yapılandırması gerekliydi
**Çözüm:** LocalStorage kullanımına geçildi

## 📊 İstatistikler

- 📝 **Toplam Kod Satırı:** ~2000+
- 🎨 **CSS Animasyonları:** 6 adet
- 🎓 **Sertifikalar:** 8 adet
- 📱 **API Endpoint'leri:** 12 adet
- ⚡ **Sayfa Yükleme:** <2 saniye

## 🔄 Gelecek Planlar

- [ ] Supabase entegrasyonu (sertifikalar ve blog için)
- [ ] Markdown desteği (blog yazıları için)
- [ ] Arama motoru optimizasyonu (SEO)
- [ ] Google Analytics entegrasyonu
- [ ] Dark mode toggle
- [ ] Çoklu dil desteği (TR/EN)
- [ ] Blog kategorileri
- [ ] Yorum sistemi

## 💡 Öğrendiklerim

Bu projeyi geliştirirken:
- Modern CSS animasyonlarını öğrendim
- RESTful API tasarımını uyguladım
- Responsive tasarım prensiplerini pekiştirdim
- Express.js ile statik dosya sunucusu yapılandırmayı öğrendim
- URL encoding ve özel karakter yönetimini kavradım
- Kullanıcı deneyimi (UX) tasarımı konusunda deneyim kazandım

## 🙏 Teşekkürler

Bu projeyi geliştirirken kullandığım açık kaynak kütüphanelere ve topluluk desteğine teşekkür ederim:
- TailwindCSS ekibine
- AOS kütüphanesi geliştiricilerine
- Feather Icons tasarımcılarına
- Node.js ve Express.js topluluğuna

## 📞 İletişim

Proje hakkında sorularınız veya önerileriniz varsa benimle iletişime geçebilirsiniz:

- 📧 Email: testingdnmzdmr@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/murat-dönmezdemir/
- 🐙 GitHub: https://github.com/MuratDonmezdemir

---

**Son Güncelleme:** 2024
**Versiyon:** 2.0.0
**Durum:** ✅ Aktif Geliştirme

⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!

**Geliştirici:** Murat Dönmezdemir
**Rol:** QA Test Uzmanı & Full-Stack Developer
**Lokasyon:** Van, Türkiye
