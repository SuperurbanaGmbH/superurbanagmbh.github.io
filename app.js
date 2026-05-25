const i18n = {
  de: {
    'nav.projects':       'Umbauten',
    'nav.contact':        'Kontakt',
    'hero.title':         'Energieeffizienz<br>für die Stadt.',
    'hero.lede':          'Superurbana GmbH verbindet exzellentes architektonisches Design mit wirksamer Gebäudetechnik — für bezahlbare, klimaneutrale Gesamtkonzepte.',
    'stats.founded':      'Gegründet',
    'stats.years':        'Jahre aktiv',
    'stats.clients':      'Kunden',
    'stats.countries':    'Länder',
    'section.services':   'Leistungen',
    'service.title':      'Umbauten',
    'service.desc':       'Energieeffiziente Gebäudesanierungen in der Schweiz',
    'section.about':      'Über uns',
    'about.p1':           'Superurbana GmbH wurde 2016 gegründet, um modernste urbane Energiesimulation in die Praxis zu bringen — als eines der ersten Unternehmen weltweit, das die City Energy Analyst (CEA)-Plattform kommerziell eingesetzt hat.',
    'about.p2':           'Schön, komfortabel und effizient zu bauen muss kein Widerspruch zur Wirtschaftlichkeit sein. Mit unserem Projektmanagement-Know-how und einem starken Netzwerk an Lieferanten und Partnern begleiten wir Sanierungsprojekte von der Konzeption bis zur Umsetzung.',
    'about.p3':           'Von 2023 bis 2025 realisierte Superurbana Energieprojekte in der Schweiz und schult Unternehmen in ganz Europa und dem Nahen Osten in datengetriebener Energieanalyse.',
    'section.contact':    'Kontakt',
    'contact.email.key':  'E-Mail',
    'contact.addr.key':   'Adresse',
    'contact.addr.val':   'Ennetbaden, AG, Schweiz',
    'footer.copy':        '© 2016 – 2026 Superurbana GmbH',
    'footer.loc':         'Ennetbaden, AG, Schweiz',
    'skip':               'Zum Inhalt',
    'menu.open':          'Menü',
    'menu.close':         'Schließen',
    'theme.label':        'Theme',
    'lang.label':         'Sprache',
    'theme.light':        'HELL',
    'theme.dark':         'DUNKEL',
    'umbauten.eyebrow':   'Start',
    'umbauten.title':     'Umbauten',
    'umbauten.lede':      'Wir verstehen Energieeffizienz und Klimaneutralität als Aufgabe, bei der exzellentes architektonisches Design und wirksame Gebäudetechnik zu einem bezahlbaren Gesamtkonzept verschmelzen.',
    'umbauten.body':      'Schön, komfortabel und effizient zu bauen muss kein Widerspruch zur Wirtschaftlichkeit sein. Mit unserer Projektmanagement-Kompetenz und unserem starken Netzwerk an Lieferanten und Partnern begleiten wir Sanierungsprojekte von der ersten Idee bis zur schlüsselfertigen Umsetzung.',
    'nidau.label':        'Projekt · Nidau, BE',
    'nidau.title':        'Nidau',
    'nidau.desc':         'Energetische Sanierung der Gewerbeüberbauung an der Zihlstrasse. Kombination aus Hüllenoptimierung und moderner Haustechnik für einen wirtschaftlichen Gesamtansatz.',
    'ennetbaden.label':   'Projekt · Ennetbaden, AG',
    'ennetbaden.title':   'Ennetbaden',
    'ennetbaden.desc':    'Wohngebäudesanierung in Ennetbaden mit Fokus auf Wärmeschutz und erneuerbare Energieversorgung. Umsetzung unter laufendem Betrieb, termingerecht und im Budget.',
    'back':               '← Zurück zur Startseite',
  },
  en: {
    'nav.projects':       'Projects',
    'nav.contact':        'Contact',
    'hero.title':         'Energy Efficiency<br>for the City.',
    'hero.lede':          'Superurbana GmbH combines excellent architectural design with effective building technology — for affordable, climate-neutral concepts.',
    'stats.founded':      'Founded',
    'stats.years':        'Years Active',
    'stats.clients':      'Clients',
    'stats.countries':    'Countries',
    'section.services':   'Services',
    'service.title':      'Renovations',
    'service.desc':       'Energy-efficient building retrofits in Switzerland',
    'section.about':      'About',
    'about.p1':           'Superurbana GmbH was founded in 2016 to bring cutting-edge urban energy simulation into private practice — as one of the first companies in the world to deploy the City Energy Analyst (CEA) platform commercially.',
    'about.p2':           'Beautiful, comfortable, and efficient construction need not contradict economic viability. With our project management expertise and a strong network of suppliers and partners, we guide renovation projects from concept to completion.',
    'about.p3':           'From 2023 to 2025, Superurbana delivered energy projects across Switzerland and trained companies throughout Europe and the Middle East in data-driven energy analysis.',
    'section.contact':    'Contact',
    'contact.email.key':  'Email',
    'contact.addr.key':   'Address',
    'contact.addr.val':   'Ennetbaden, AG, Switzerland',
    'footer.copy':        '© 2016 – 2026 Superurbana GmbH',
    'footer.loc':         'Ennetbaden, AG, Switzerland',
    'skip':               'Skip to content',
    'menu.open':          'Menu',
    'menu.close':         'Close',
    'theme.label':        'Theme',
    'lang.label':         'Language',
    'theme.light':        'LIGHT',
    'theme.dark':         'DARK',
    'umbauten.eyebrow':   'Home',
    'umbauten.title':     'Renovations',
    'umbauten.lede':      'We see energy efficiency and climate neutrality as a challenge where excellent architectural design and effective building technology merge into an affordable overall concept.',
    'umbauten.body':      'Beautiful, comfortable and efficient construction need not contradict economic viability. With our project management expertise and a strong network of suppliers and partners, we guide renovation projects from the first idea to turnkey delivery.',
    'nidau.label':        'Project · Nidau, BE',
    'nidau.title':        'Nidau',
    'nidau.desc':         'Energy retrofit of the commercial development on Zihlstrasse. A combination of envelope optimisation and modern building services for a cost-effective overall approach.',
    'ennetbaden.label':   'Project · Ennetbaden, AG',
    'ennetbaden.title':   'Ennetbaden',
    'ennetbaden.desc':    'Residential building renovation in Ennetbaden focused on thermal insulation and renewable energy supply. Delivered on time and on budget while the building remained occupied.',
    'back':               '← Back to Home',
  }
};

let currentLang = 'de';
let currentTheme = 'light';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = i18n[lang]?.[key];
    if (val !== undefined) el.innerHTML = val;
  });

  // Update lang toggle opts
  document.querySelectorAll('[data-lang-opt]').forEach(el => {
    el.classList.toggle('active', el.dataset.langOpt === lang);
  });
}

function toggleLang() {
  applyLang(currentLang === 'de' ? 'en' : 'de');
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  document.documentElement.dataset.theme = theme;

  document.querySelectorAll('[data-theme-opt]').forEach(el => {
    el.classList.toggle('active', el.dataset.themeOpt === theme);
  });
}

function toggleTheme() {
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function toggleMobileMenu() {
  const overlay = document.getElementById('mobile-overlay');
  const btn = document.getElementById('mobile-menu-btn');
  if (!overlay) return;
  const isOpen = overlay.classList.toggle('open');
  btn.setAttribute('data-i18n', isOpen ? 'menu.close' : 'menu.open');
  btn.textContent = i18n[currentLang]?.[isOpen ? 'menu.close' : 'menu.open'] || (isOpen ? 'Schließen' : 'Menü');
}

// Close mobile menu on nav link click
document.addEventListener('click', e => {
  const overlay = document.getElementById('mobile-overlay');
  if (overlay && overlay.classList.contains('open') && e.target.matches('a')) {
    overlay.classList.remove('open');
  }
});

// Init on load
(function () {
  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  const savedLang = localStorage.getItem('lang') ||
    (navigator.language && navigator.language.toLowerCase().startsWith('de') ? 'de' : 'de');
  applyLang(savedLang);
})();
