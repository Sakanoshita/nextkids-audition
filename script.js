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

  // ヒーロー背景動画：読み込み後にフェードイン
  const video = document.querySelector('.hero__video');
  if (video) {
    const showVideo = () => { video.style.opacity = '0.80'; };
    // 再生可能になったらフェードイン
    video.addEventListener('canplay', showVideo, { once: true });
    // 3秒後のフォールバック（動画が遅い環境・読み込み失敗時）
    setTimeout(showVideo, 3000);
  }
});
