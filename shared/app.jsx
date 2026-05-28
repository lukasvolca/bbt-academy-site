/* ===== Shared components & i18n =====
   Loaded after React + Babel on every page. Exposes globals on window.
*/

// ---------- i18n ----------
const I18N = {
  pt: {
    'nav.home': 'Home',
    'nav.academy': 'A Academia',
    'nav.modalities': 'Modalidades',
    'nav.structure': 'Estrutura',
    'nav.international': 'Internacional',
    'nav.fifty': '50 Anos',
    'nav.contact': 'Contato',
    'nav.schedule': 'Agendar aula',
    'cta.schedule': 'Agendar aula',
    'cta.scheduleExp': 'Agendar aula experimental',
    'cta.scheduleNow': 'Agendar agora',
    'cta.whatsapp': 'Falar no WhatsApp',
    'cta.discover': 'Conheça a Academia',
    'cta.knowMore': 'Saiba mais',
    'cta.visitStructure': 'Conhecer estrutura',
    'common.scrollExplore': 'Role para explorar',
    'common.since': 'Desde 1975',
    'common.address': 'Av. Paulista, 1578 — Bela Vista, São Paulo',
    'common.phone': '+55 11 3287-5050',
    'common.email': 'contato@bbtartacademy.com.br',
    'footer.quickLinks': 'Navegar',
    'footer.contact': 'Contato',
    'footer.newsletter': 'Receba nossa programação',
    'footer.newsletterPh': 'seu e-mail',
    'footer.subscribe': 'Inscrever-se →',
    'footer.copy': '© 2026 BBT Art Academy — Todos os direitos reservados',
    'footer.social': 'Redes sociais',
  },
  en: {
    'nav.home': 'Home',
    'nav.academy': 'The Academy',
    'nav.modalities': 'Programs',
    'nav.structure': 'Facilities',
    'nav.international': 'International',
    'nav.fifty': '50 Years',
    'nav.contact': 'Contact',
    'nav.schedule': 'Book a class',
    'cta.schedule': 'Book a class',
    'cta.scheduleExp': 'Book a trial class',
    'cta.scheduleNow': 'Book now',
    'cta.whatsapp': 'Chat on WhatsApp',
    'cta.discover': 'About the Academy',
    'cta.knowMore': 'Learn more',
    'cta.visitStructure': 'Tour the facility',
    'common.scrollExplore': 'Scroll to explore',
    'common.since': 'Since 1975',
    'common.address': 'Av. Paulista, 1578 — Bela Vista, São Paulo',
    'common.phone': '+55 11 3287-5050',
    'common.email': 'contato@bbtartacademy.com.br',
    'footer.quickLinks': 'Navigate',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Get our schedule',
    'footer.newsletterPh': 'your email',
    'footer.subscribe': 'Subscribe →',
    'footer.copy': '© 2026 BBT Art Academy — All rights reserved',
    'footer.social': 'Social',
  },
};

function getLang() {
  return localStorage.getItem('bbt-lang') || 'pt';
}
function setLang(l) {
  localStorage.setItem('bbt-lang', l);
  window.dispatchEvent(new CustomEvent('bbt-lang-change', { detail: l }));
}
function useLang() {
  const [lang, setL] = React.useState(getLang());
  React.useEffect(() => {
    const h = (e) => setL(e.detail);
    window.addEventListener('bbt-lang-change', h);
    return () => window.removeEventListener('bbt-lang-change', h);
  }, []);
  return [lang, (l) => { setLang(l); }];
}
function t(lang, key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.pt[key] || key;
}

// ---------- Scroll Reveal ----------
function useScrollReveal() {
  React.useEffect(() => {
    const check = () => {
      const wh = window.innerHeight;
      document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
        if (el.classList.contains('in')) return;
        const r = el.getBoundingClientRect();
        if (r.top < wh - 60 && r.bottom > 0) {
          el.classList.add('in');
        }
      });
    };
    // Run once after layout settles
    requestAnimationFrame(() => requestAnimationFrame(check));
    setTimeout(check, 50);
    setTimeout(check, 250);
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { check(); ticking = false; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
}

// ---------- Header ----------
function Header({ active }) {
  const [lang, setL] = useLang();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { key: 'nav.academy', href: 'index.html#academy', n: '01' },
    { key: 'nav.modalities', href: 'modalidade.html', n: '02' },
    { key: 'nav.structure', href: 'estrutura.html', n: '03' },
    { key: 'nav.international', href: 'index.html#international', n: '04' },
    { key: 'nav.fifty', href: 'cinquenta-anos.html', n: '05' },
    { key: 'nav.contact', href: 'index.html#contact', n: '06' },
  ];

  return (
    <>
      <header className={'site-header ' + (scrolled ? 'scrolled' : '')}>
        <button className="menu-btn" onClick={() => setOpen(true)}>
          <span className="bars"></span>
          Menu
        </button>
        <a href="index.html" className="brand">
          <div>
            <div className="brand-name">BBT</div>
            <span className="brand-sub">Art Academy · 1975</span>
          </div>
        </a>
        <div className="header-right">
          <div className="lang-toggle">
            <button className={lang === 'pt' ? 'active' : ''} onClick={() => setL('pt')}>PT</button>
            <span className="sep">/</span>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setL('en')}>EN</button>
          </div>
          <a href="agendar.html" className="header-cta">{t(lang, 'cta.schedule')}</a>
        </div>
      </header>

      <div className={'nav-overlay ' + (open ? 'open' : '')}>
        <div className="nav-overlay-top">
          <a href="index.html" className="brand">
            <div className="brand-mark">B</div>
            <div>
              <div className="brand-name">BBT Art Academy</div>
              <span className="brand-sub">{t(lang, 'common.since')}</span>
            </div>
          </a>
          <button className="nav-close" onClick={() => setOpen(false)}>
            Fechar
          </button>
        </div>
        <div className="nav-list">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.key}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  <span className="num">{l.n}</span>
                  {t(lang, l.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-side">
            <div>
              <h4>{t(lang, 'footer.contact')}</h4>
              <p>{t(lang, 'common.address')}</p>
              <p style={{ marginTop: 6 }}>{t(lang, 'common.phone')}</p>
              <p>{t(lang, 'common.email')}</p>
            </div>
            <div>
              <h4>{t(lang, 'footer.social')}</h4>
              <p><a href="#">Instagram</a> &nbsp; <a href="#">YouTube</a> &nbsp; <a href="#">Facebook</a></p>
            </div>
            <a href="agendar.html" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              {t(lang, 'cta.scheduleExp')} <span className="arrow"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// ---------- Footer ----------
function Footer() {
  const [lang] = useLang();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="brand-mark">B</div>
          <h3 className="display-sm" style={{ color: 'var(--text)', marginBottom: 10 }}>
            BBT Art Academy
          </h3>
          <p>{lang === 'pt'
            ? 'Cinquenta anos formando artistas e abrindo caminhos no palco do mundo.'
            : 'Fifty years shaping artists and opening paths to the world stage.'}</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">{SocialIcons.instagram}</a>
            <a href="#" aria-label="YouTube">{SocialIcons.youtube}</a>
            <a href="#" aria-label="Facebook">{SocialIcons.facebook}</a>
            <a href="#" aria-label="TikTok">{SocialIcons.tiktok}</a>
          </div>
        </div>
        <div className="footer-col">
          <h5>{t(lang, 'footer.quickLinks')}</h5>
          <ul>
            <li><a href="index.html">{t(lang, 'nav.home')}</a></li>
            <li><a href="index.html#academy">{t(lang, 'nav.academy')}</a></li>
            <li><a href="modalidade.html">{t(lang, 'nav.modalities')}</a></li>
            <li><a href="estrutura.html">{t(lang, 'nav.structure')}</a></li>
            <li><a href="cinquenta-anos.html">{t(lang, 'nav.fifty')}</a></li>
            <li><a href="agendar.html">{t(lang, 'nav.schedule')}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>{t(lang, 'footer.contact')}</h5>
          <ul>
            <li>{t(lang, 'common.address')}</li>
            <li>{t(lang, 'common.phone')}</li>
            <li>{t(lang, 'common.email')}</li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>{t(lang, 'footer.newsletter')}</h5>
          <form className="footer-form" onSubmit={(e) => { e.preventDefault(); e.currentTarget.reset(); }}>
            <input type="text" placeholder={lang === 'pt' ? 'Seu nome' : 'Your name'} required />
            <input type="tel" placeholder={lang === 'pt' ? 'Telefone com DDD' : 'Phone'} required />
            <input type="email" placeholder={t(lang, 'footer.newsletterPh')} required />
            <button type="submit">{t(lang, 'footer.subscribe')}</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t(lang, 'footer.copy')}</span>
        <span>Bela Vista · São Paulo</span>
      </div>
    </footer>
  );
}

// ---------- WhatsApp float ----------
function WhatsAppFloat() {
  return (
    <a href="https://wa.me/551132875050" className="wa-float" target="_blank" rel="noopener" aria-label="WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 1.8 6.5L4 29l7.7-2c1.8 1 3.9 1.6 6.3 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.6 1.2 1.2-4.5-.3-.4C5.5 18.9 5 17 5 15c0-6 5-11 11-11s11 5 11 11-5 10-11 10zm5.7-7.4c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.3.2-.7.1-.3-.2-1.4-.5-2.6-1.6-.9-.8-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .2.2 2 3 4.9 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.4z"/>
      </svg>
    </a>
  );
}

// ---------- Theme toggle FAB ----------
function ThemeToggle() {
  const [palette, setPalette] = React.useState(() => document.body.getAttribute('data-palette') || 'cream');
  // sync with external changes (Tweaks panel)
  React.useEffect(() => {
    const mo = new MutationObserver(() => {
      const p = document.body.getAttribute('data-palette');
      if (p && p !== palette) setPalette(p);
    });
    mo.observe(document.body, { attributes: true, attributeFilter: ['data-palette'] });
    return () => mo.disconnect();
  }, [palette]);

  const toggle = () => {
    const next = palette === 'cream' ? 'rose' : 'cream';
    document.body.setAttribute('data-palette', next);
    const accent = next === 'cream' ? '#c87a86' : '#e8b8b8';
    document.documentElement.style.setProperty('--accent', accent);
    setPalette(next);
  };

  const label = palette === 'cream' ? 'Tema Rosê' : 'Tema Cream';
  return (
    <button className="theme-fab" onClick={toggle} aria-label={label} title={label}>
      <span className="theme-swatch" data-pal={palette}></span>
    </button>
  );
}

// ---------- Social icons (used in footer + nav) ----------
const SocialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.3v-6.6L15.7 12 10 15.3z"/>
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z"/>
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.8a4.7 4.7 0 0 1-2.9-1.6V14.7a4.3 4.3 0 1 1-4.3-4.3v2.6a1.7 1.7 0 1 0 1.7 1.7V2h2.6a4.7 4.7 0 0 0 2.9 3.8z"/>
    </svg>
  ),
};

// ---------- Sticky CTA (mobile) ----------
function StickyCta() {
  const [lang] = useLang();
  return (
    <a href="agendar.html" className="sticky-cta">{t(lang, 'cta.scheduleExp')}</a>
  );
}

// ---------- Scroll dots ----------
function ScrollDots({ sections }) {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      let best = 0;
      let bestDist = Infinity;
      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.offsetTop;
        const dist = Math.abs(top - mid);
        if (top <= mid && dist < bestDist) {
          best = i; bestDist = dist;
        }
      });
      setActive(best);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="scroll-dots" aria-hidden="true">
      {sections.map((s, i) => (
        <div key={s} className={'dot ' + (i === active ? 'active' : '')}></div>
      ))}
    </div>
  );
}

// ---------- Page chrome (Header + footer + extras) ----------
function PageChrome({ children, dots }) {
  useScrollReveal();
  // Scroll-driven opacity for elements near the footer
  React.useEffect(() => {
    const onScroll = () => {
      const wh = window.innerHeight;
      document.querySelectorAll('[data-fade-on-scroll]').forEach((el) => {
        const r = el.getBoundingClientRect();
        // start fading in when top is at 90% of viewport, fully visible at 30%
        const start = wh * 0.95;
        const end = wh * 0.30;
        const p = (start - r.top) / (start - end);
        const op = Math.max(0.08, Math.min(1, p));
        el.style.setProperty('--fade-op', op);
      });
    };
    onScroll();
    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { onScroll(); ticking = false; });
    };
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, []);

  return (
    <>
      <Header />
      {dots && <ScrollDots sections={dots} />}
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
      <ThemeToggle />
      <StickyCta />
    </>
  );
}

Object.assign(window, {
  I18N, getLang, setLang, useLang, t, useScrollReveal,
  Header, Footer, WhatsAppFloat, ThemeToggle, ScrollDots, PageChrome, StickyCta, SocialIcons,
});
