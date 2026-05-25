function toggleTheme() {
  const html = document.documentElement;
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
  html.dataset.theme = next;
  localStorage.setItem('theme', next);
  document.querySelectorAll('[data-theme-opt]').forEach(el => {
    el.classList.toggle('active', el.dataset.themeOpt === next);
  });
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const btn = document.getElementById('menu-btn');
  const isOpen = sidebar.classList.toggle('open');
  btn.textContent = isOpen ? 'Schließen' : 'Menü';
}

document.addEventListener('click', e => {
  const sidebar = document.getElementById('sidebar');
  const btn = document.getElementById('menu-btn');
  if (sidebar && sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) && e.target !== btn) {
    sidebar.classList.remove('open');
    btn.textContent = 'Menü';
  }
});

(function () {
  const saved = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.querySelectorAll('[data-theme-opt]').forEach(el => {
    el.classList.toggle('active', el.dataset.themeOpt === saved);
  });
})();
