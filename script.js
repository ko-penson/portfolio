// =============================
// ナビのリンクをクリックしたら
// なめらかにスクロールする
// =============================

// ナビのすべてのリンクを取得する
const navLinks = document.querySelectorAll('nav a');

// 各リンクにクリックイベントを追加する
navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // ページが飛ばないようにする

    // href属性（例：#about）を取得する
    const targetId = link.getAttribute('href');

    // 対応するセクションを取得する
    const targetSection = document.querySelector(targetId);

    // なめらかにスクロールする
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});