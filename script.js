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

  // ヒーロー背景動画：SP/PC切り替え＋読み込み後にフェードイン
  const video = document.querySelector('.hero__video');
  if (video) {
    // 画面幅でSP/PCの動画を選択
    const src = window.innerWidth >= 768
      ? 'images/next%20kids_pc.mp4'
      : 'images/next%20kids_sp.mp4';

    const source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    video.appendChild(source);
    video.load();

    // 再生可能になったらフェードイン
    const showVideo = () => { video.style.opacity = '0.80'; };
    video.addEventListener('canplay', showVideo, { once: true });
    // 3秒後のフォールバック（動画が遅い環境・読み込み失敗時）
    setTimeout(showVideo, 3000);
  }
});
