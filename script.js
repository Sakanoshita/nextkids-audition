document.addEventListener('DOMContentLoaded', () => {
  // スムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ヒーロー背景動画：canplay でフェードイン
  const video = document.querySelector('.hero__video');
  if (video) {
    const showVideo = () => { video.style.opacity = '0.80'; };
    video.addEventListener('canplay', showVideo, { once: true });
    setTimeout(showVideo, 3000); // フォールバック
  }
});
