document.addEventListener("DOMContentLoaded", async () => {
  const API_URL = "http://localhost:5000/api";
  // 1. URL'den blog yazısının kimliğini (ID) al
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  const postContentElement = document.getElementById("blog-post-content");
  const postTitleElement = document.getElementById("blog-post-title");

  if (!postId || !postContentElement || !postTitleElement) {
    if (postContentElement) {
      postContentElement.innerHTML =
        '<p class="text-red-500 text-center">Yazı bulunamadı veya sayfa yapısı bozuk. Lütfen ana sayfaya dönüp tekrar deneyin.</p>';
    }
    document.title = "Yazı Bulunamadı";
    console.error("Gerekli öğeler (ID, başlık veya içerik alanı) bulunamadı.");
    return;
  }

  try {
    // 2. API'den ilgili yazının verisini çek
    const response = await fetch(`${API_URL}/posts/${postId}`);
    if (!response.ok) throw new Error(`'${postId}' ID'li yazı bulunamadı.`);
    const post = await response.json();
    if (!post) throw new Error(`'${postId}' ID'li yazı bulunamadı.`);

    // 3. Sayfa başlığını ve diğer meta bilgileri güncelle
    document.title = post.title;
    postTitleElement.textContent = post.title;

    const markdownResponse = await fetch(`yazilar/ai-tabanli-test.md`); // Örnek dosya, bu kısım dinamik hale getirilebilir.
    if (!markdownResponse.ok)
      throw new Error(`Markdown dosyası (${post.markdownFile}) bulunamadı.`);
    const markdownText = await markdownResponse.text();

    // 6. Markdown'ı HTML'e çevir ve sayfaya yerleştir (marked.js kütüphanesi gerekli)
    if (window.marked) {
      postContentElement.innerHTML = marked.parse(markdownText);
    } else {
      throw new Error("marked.js kütüphanesi yüklenemedi.");
    }
  } catch (error) {
    console.error("Blog yazısı yüklenirken hata oluştu:", error);
    postTitleElement.textContent = "Hata";
    postContentElement.innerHTML = `<p class="text-red-500 text-center"><strong>Hata:</strong> ${error.message}</p>`;
  }
});
