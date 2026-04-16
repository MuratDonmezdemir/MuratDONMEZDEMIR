const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;
const crypto = require("crypto");
const path = require("path");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Statik dosyalar
app.use(express.static(__dirname));
app.use('/sertifika', express.static(path.join(__dirname, '..', 'sertifika')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer yapılandırması
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, 'uploads')),
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
    cb(null, Date.now() + '_' + safeName);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|pdf|doc|docx|txt|webp/;
    const ext = path.extname(file.originalname).toLowerCase().replace('.', '');
    allowed.test(ext) ? cb(null, true) : cb(new Error('Desteklenmeyen dosya türü'));
  }
});

// Dosya yükleme endpoint'i
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Dosya yüklenemedi.' });
  res.json({ url: '/uploads/' + req.file.filename, filename: req.file.filename });
});

// Dosya silme endpoint'i
app.delete('/api/upload/:filename', async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'uploads', req.params.filename);
    await fs.unlink(filePath);
    res.json({ message: 'Dosya silindi.' });
  } catch {
    res.status(404).json({ message: 'Dosya bulunamadı.' });
  }
});

// --- Helper Fonksiyon: JSON dosyasını okur ---
const readData = async (fileName) => {
  const filePath = path.join(__dirname, "data", fileName);
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
};

// --- Helper Fonksiyon: JSON dosyasına yazar ---
const writeData = async (fileName, data) => {
  const filePath = path.join(__dirname, "data", fileName);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
};

// --- API Endpoint'leri ---

// Şifre kontrolü için basit bir endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Gerçek bir projede bu bilgiler veritabanında hash'lenerek saklanmalıdır.
  // Kullanıcı adı büyük/küçük harf duyarsız hale getirildi.
  const isUsernameCorrect =
    typeof username === "string" &&
    username.trim().toLowerCase() === "arzumende";

  if (isUsernameCorrect && password === "737660") {
    res.status(200).json({ message: "Giriş başarılı" });
  } else {
    res.status(401).json({ message: "Hatalı kullanıcı adı veya şifre" });
  }
});

// Tüm veri türleri için GET (veriyi listeleme) ve POST (yeni veri ekleme) endpoint'leri
const endpoints = ["projects", "certificates", "educations", "posts"];

endpoints.forEach((endpoint) => {
  const fileName = `${endpoint}.json`;

  // Veriyi getir
  app.get(`/api/${endpoint}`, async (req, res) => {
    res.json(await readData(fileName));
  });

  // Yeni veri ekle
  app.post(`/api/${endpoint}`, async (req, res) => {
    try {
      const currentData = await readData(fileName);
      const newData = req.body;
      // ID'si olmayan yeni kayıtlar için benzersiz ID oluştur
      if (!newData.id) {
        newData.id = crypto.randomUUID();
      }
      currentData.unshift(newData); // Yeni veriyi başa ekle
      await writeData(fileName, currentData);
      res.status(201).json(newData);
    } catch (error) {
      console.error(`POST /api/${endpoint} Error:`, error);
      res.status(500).json({ message: "Veri eklenirken hata oluştu." });
    }
  });

  // Veriyi sil
  app.delete(`/api/${endpoint}/:id`, async (req, res) => {
    try {
      let currentData = await readData(fileName);
      const dataToKeep = currentData.filter(
        (item) => item.id !== req.params.id
      );

      if (dataToKeep.length === currentData.length) {
        return res.status(404).json({ message: "Silinecek veri bulunamadı." });
      }

      await writeData(fileName, dataToKeep);
      res.status(200).json({ message: "Veri başarıyla silindi." });
    } catch (error) {
      console.error(`DELETE /api/${endpoint}/:id Error:`, error);
      res.status(500).json({ message: "Veri silinirken hata oluştu." });
    }
  });

  // Veriyi güncelle (YENİ)
  app.put(`/api/${endpoint}/:id`, async (req, res) => {
    try {
      let currentData = await readData(fileName);
      const index = currentData.findIndex((item) => item.id === req.params.id);

      if (index === -1) {
        return res
          .status(404)
          .json({ message: "Güncellenecek veri bulunamadı." });
      }

      // Gelen yeni veriyi mevcut verinin üzerine yaz ama ID'yi koru
      const updatedItem = { ...req.body, id: req.params.id };
      currentData[index] = updatedItem;

      await writeData(fileName, currentData);
      res.status(200).json(updatedItem);
    } catch (error) {
      console.error(`PUT /api/${endpoint}/:id Error:`, error);
      res.status(500).json({ message: "Veri güncellenirken hata oluştu." });
    }
  });
});

// Tek bir blog yazısını getirmek için endpoint (YENİ)
app.get("/api/posts/:id", async (req, res) => {
  try {
    const posts = await readData("posts.json");
    const post = posts.find((p) => p.id === req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Yazı bulunamadı." });
    }
  } catch (error) {
    res.status(500).json({ message: "Yazı getirilirken bir hata oluştu." });
  }
});

app.listen(5000, () => {
  console.log("Sunucu http://localhost:5000 adresinde çalışıyor...");
});
