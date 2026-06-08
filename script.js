// 都市切り替え（SCHEDULE・EVENT INFO 連動）
function citySwitch(city) {
  // 全セクションの city-content を表示切り替え
  document.querySelectorAll('.city-content').forEach(el => {
    el.classList.toggle('city-content--hidden', el.dataset.city !== city);
  });
  // 全タブボタンのアクティブ状態を更新
  document.querySelectorAll('.city-tab').forEach(btn => {
    btn.classList.toggle('city-tab--active', btn.dataset.city === city);
  });
}

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

  // ヒーロー背景動画：poster が即時表示されるため opacity 制御は不要
});
