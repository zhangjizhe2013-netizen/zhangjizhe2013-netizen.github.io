(() => {
  const root = document.documentElement;
  const body = document.body;
  const languageButtons = document.querySelectorAll('[data-lang]');
  const translatable = document.querySelectorAll('[data-en][data-zh]');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  const setLanguage = (language) => {
    const lang = language === 'zh' ? 'zh' : 'en';
    root.lang = lang === 'zh' ? 'zh-CN' : 'en';
    translatable.forEach((element) => {
      element.textContent = element.dataset[lang];
    });
    languageButtons.forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.title = lang === 'zh'
      ? '张继哲 | 个人学术主页'
      : 'Ji-Zhe Zhang | Academic Homepage';
    localStorage.setItem('preferred-language', lang);
  };

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  const storedLanguage = localStorage.getItem('preferred-language');
  const browserLanguage = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  setLanguage(storedLanguage || browserLanguage);

  const closeMenu = () => {
    body.classList.remove('nav-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  };

  menuButton?.addEventListener('click', () => {
    const open = body.classList.toggle('nav-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
      });
    }, { rootMargin: '-25% 0px -58% 0px', threshold: [0.01, 0.2, 0.5] });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
})();
