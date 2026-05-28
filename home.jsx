/* ===== HOME — BBT Art Academy ===== */
/* Follows the wireframe blocos from the PDF */

// Tweaks defaults (palette + accent + hero variations)
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream",
  "accent": "#c87a86",
  "heroVariant": "centered",
  "showMarquee": true
}/*EDITMODE-END*/;

function applyPalette(palette, accent) {
  document.body.setAttribute('data-palette', palette);
  if (accent) document.documentElement.style.setProperty('--accent', accent);
  // store globally so other pages can read
  localStorage.setItem('bbt-palette', palette);
  localStorage.setItem('bbt-accent', accent);
}

// ----------------- BLOCKS -----------------

function Hero({ variant }) {
  const [lang] = useLang();
  const TXT = {
    pt: {
      eyebrow: '— Desde 1975',
      headline: { l1: '50 anos formando', l2: 'talentos', l3: 'no ballet.' },
      sub: 'Excelência, tradição e formação artística com reconhecimento internacional.',
      cta1: 'Agendar aula experimental',
      cta2: 'Conheça a Academia',
      meta1: 'Av. Paulista, São Paulo',
      meta2: '12 modalidades',
      meta3: 'Reconhecimento internacional',
    },
    en: {
      eyebrow: '— Since 1975',
      headline: { l1: '50 years shaping', l2: 'talent', l3: 'in ballet.' },
      sub: 'Excellence, tradition and artistic training with international recognition.',
      cta1: 'Book a trial class',
      cta2: 'About the Academy',
      meta1: 'Av. Paulista, São Paulo',
      meta2: '12 programs',
      meta3: 'International recognition',
    },
  }[lang];

  return (
    <section className={'hero hero-' + variant} id="hero">
      <div className="hero-bg ph ph-rose" data-label="HERO · ballet en pointe — cinematic still">
        <div className="hero-figure">
          <div className="hero-figure-inner">
            {/* Decorative composition only — no figurative SVG */}
            <div className="silhouette s1"></div>
            <div className="silhouette s2"></div>
          </div>
        </div>
      </div>
      <div className="hero-vignette"></div>      <div className="hero-content container">
        <div className="hero-eyebrow reveal">
          <span className="dot"></span>
          {TXT.eyebrow}
        </div>
        <h1 className="hero-title reveal">
          <span className="line">{TXT.headline.l1}</span>
          <span className="line">{TXT.headline.l2}</span>
          <span className="line accent">{TXT.headline.l3}</span>
        </h1>
        <p className="hero-sub reveal">{TXT.sub}</p>
        <div className="hero-ctas reveal">
          <a href="agendar.html" className="btn btn-primary">{TXT.cta1} <span className="arrow"></span></a>
          <a href="#academy" className="btn btn-ghost">{TXT.cta2}</a>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const [lang] = useLang();
  const items = [
    { name: 'Prix de Lausanne',  cat: { pt: 'Concurso internacional · Suíça',  en: 'International competition · Switzerland' }, meta: { pt: 'Finalistas · 2019 / 2022 / 2024', en: 'Finalists · 2019 / 2022 / 2024' } },
    { name: 'Youth America Grand Prix', cat: { pt: 'Concurso internacional · EUA', en: 'International competition · USA' }, meta: { pt: 'Top 12 · Nova York', en: 'Top 12 · New York' } },
    { name: 'Festival de Joinville', cat: { pt: 'Festival nacional · Brasil', en: 'National festival · Brazil' }, meta: { pt: 'Medalhas de ouro', en: 'Gold awards' } },
    { name: 'Royal Academy of Dance', cat: { pt: 'Certificação metodológica · Reino Unido', en: 'Method certification · UK' }, meta: { pt: 'Currículo certificado', en: 'Certified syllabus' } },
    { name: 'Bolshoi Ballet School', cat: { pt: 'Programa de intercâmbio · Rússia', en: 'Exchange program · Russia' }, meta: { pt: 'Mestre convidado anual', en: 'Annual guest master' } },
    { name: 'NYC Dance Project', cat: { pt: 'Reconhecimento editorial · EUA', en: 'Editorial feature · USA' }, meta: { pt: 'Editorial 2023', en: '2023 feature' } },
  ];
  return (
    <section className="block proof" id="proof">
      <div className="container">
        <div className="block-head reveal">
          <span className="eyebrow">— {lang === 'pt' ? 'Reconhecimento' : 'Recognition'}</span>
          <h2 className="display-md">
            {lang === 'pt'
              ? <>Palco internacional,<br/><em>raízes brasileiras.</em></>
              : <>An international stage,<br/><em>rooted in Brazil.</em></>}
          </h2>
        </div>
        <div className="proof-grid reveal-stagger">
          {items.map((it, i) => (
            <div className="proof-card" key={it.name}>
              <span className="caption">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="display-sm">{it.name}</h4>
              <p className="proof-cat">{it.cat[lang]}</p>
              <p className="body">{it.meta[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Modalities() {
  const [lang] = useLang();
  const list = [
    { id: 'classico', name: 'Ballet Clássico', en: 'Classical Ballet', tag: lang === 'pt' ? 'Método russo · vagas para todas as idades' : 'Russian method · all ages', n: '01', big: true },
    { id: 'infantil',  name: 'Ballet Infantil',   en: 'Children\u2019s Ballet', tag: lang === 'pt' ? '4 — 9 anos · iniciação artística' : 'Ages 4 — 9 · early training', n: '02' },
    { id: 'jazz',      name: 'Jazz',              en: 'Jazz', tag: lang === 'pt' ? 'Kids / Teens / Adulto' : 'Kids / Teens / Adults', n: '03' },
    { id: 'contemporanea', name: 'Dança Contemporânea', en: 'Contemporary', tag: lang === 'pt' ? 'Pesquisa corporal e identidade' : 'Body research & identity', n: '04' },
    { id: 'teatro-musical', name: 'Teatro Musical', en: 'Musical Theatre', tag: lang === 'pt' ? 'Canto + dança + interpretação' : 'Singing + dance + acting', n: '05' },
    { id: 'audiovisual', name: 'Interpretação para Audiovisual', en: 'Acting for Screen', tag: lang === 'pt' ? 'TV · cinema · streaming · novela vertical' : 'TV · film · streaming · vertical drama', n: '06', big: true },
    { id: 'hiphop',    name: 'Hip Hop',           en: 'Hip Hop', tag: lang === 'pt' ? 'Toninho Fontes · cultura urbana' : 'Toninho Fontes · urban culture', n: '07' },
    { id: 'ritmica',   name: 'Ginástica Rítmica', en: 'Rhythmic Gymnastics', tag: 'CET Gym · ' + (lang === 'pt' ? 'alto rendimento' : 'competitive'), n: '08' },
    { id: 'judo',      name: 'Judô',              en: 'Judo', tag: 'Maicon França', n: '09' },
    { id: 'jiu',       name: 'Jiu-Jitsu',         en: 'Jiu-Jitsu', tag: lang === 'pt' ? 'Linhagem Carlson Gracie' : 'Carlson Gracie lineage', n: '10' },
    { id: 'forro',     name: 'Forró Cabrueira',   en: 'Forró Cabrueira', tag: lang === 'pt' ? 'Dança social brasileira' : 'Brazilian social dance', n: '11' },
    { id: 'canto',     name: 'Canto Adulto',      en: 'Adult Voice', tag: lang === 'pt' ? 'Técnica vocal e expressão' : 'Vocal technique', n: '12' },
  ];
  return (
    <section className="block modalities" id="modalities">
      <div className="container">
        <div className="block-head reveal">
          <div>
            <span className="eyebrow">— {lang === 'pt' ? 'Modalidades' : 'Programs'}</span>
            <h2 className="display-md">
              {lang === 'pt'
                ? <>Doze caminhos<br/><em>para um mesmo palco.</em></>
                : <>Twelve paths<br/><em>to the same stage.</em></>}
            </h2>
          </div>
          <a href="modalidade.html" className="btn btn-outline">
            {lang === 'pt' ? 'Ver todas as modalidades' : 'See all programs'} <span className="arrow"></span>
          </a>
        </div>

        <div className="mod-grid reveal-stagger">
          {list.map((m) => (
            <a key={m.id} href={'modalidade.html#' + m.id} className={'mod-card ' + (m.big ? 'big' : '')}>
              <div className="mod-img ph ph-rose" data-label={'IMG · ' + m.name.toLowerCase()}>
                <div className="ph-figure">
                  <span>{m.n}</span>
                  <span>BBT/{m.id}</span>
                </div>
              </div>
              <div className="mod-meta">
                <div>
                  <span className="caption">{m.n} · {lang === 'pt' ? m.name : m.en}</span>
                  <h3 className="display-sm">{lang === 'pt' ? m.name : m.en}</h3>
                  <p className="body">{m.tag}</p>
                </div>
                <span className="mod-btn">
                  {lang === 'pt' ? 'Saiba mais' : 'Learn more'}
                  <span className="arrow"></span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewVenue() {
  const [lang] = useLang();
  const diffs = lang === 'pt'
    ? [
        { n: '01', t: 'Salas amplas', d: 'Pé-direito alto, barras profissionais e ventilação cruzada.' },
        { n: '02', t: 'Piso profissional', d: 'Tablado de balé com camadas de absorção, instalado pela Harlequin Floors.' },
        { n: '03', t: 'Localização premium', d: 'Av. Paulista, 1578 — esquina com a Rua Augusta, em frente ao MASP.' },
        { n: '04', t: 'Apoio à família', d: 'Sala de espera, café e vestiários renovados.' },
      ]
    : [
        { n: '01', t: 'Spacious studios', d: 'High ceilings, professional barres and cross ventilation.' },
        { n: '02', t: 'Sprung dance floor', d: 'Multilayer shock-absorbent flooring by Harlequin Floors.' },
        { n: '03', t: 'Premium location', d: 'Av. Paulista, 1578 — corner of Rua Augusta, facing MASP.' },
        { n: '04', t: 'Family lounge', d: 'Waiting area, café and refurbished dressing rooms.' },
      ];

  return (
    <section className="block venue" id="venue">
      <div className="container">
        <div className="venue-grid">
          <div className="venue-img-wrap reveal">
            <div className="venue-img ph" data-label="ARCH · main studio — natural light, sprung floor">
              <div className="ph-figure"><span>NOVA SEDE 2024</span><span>BBT · STUDIO A</span></div>
            </div>
            <div className="venue-img-2 ph" data-label="ARCH · facade detail">
              <div className="ph-figure"><span>FAÇADE</span><span>—</span></div>
            </div>
          </div>
          <div className="venue-text reveal">
            <span className="eyebrow">— {lang === 'pt' ? 'Nova sede' : 'New venue'}</span>
            <h2 className="display-md">
              {lang === 'pt'
                ? <>Uma estrutura<br/><em>à altura da nossa história.</em></>
                : <>A space<br/><em>worthy of our history.</em></>}
            </h2>
            <p className="lead">
              {lang === 'pt'
                ? 'Em 2024, a BBT abriu as portas de sua nova sede na Av. Paulista — 1.800 m² desenhados ao redor da dança, com seis salas, auditório, café e um lounge para familiares.'
                : 'In 2024, BBT opened its new home on Av. Paulista — 1,800 m² designed around dance, with six studios, an auditorium, café and a family lounge.'}
            </p>

            <div className="diff-list">
              {diffs.map((d) => (
                <div className="diff" key={d.n}>
                  <span className="caption">{d.n}</span>
                  <div>
                    <h5 className="display-sm">{d.t}</h5>
                    <p className="body">{d.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="estrutura.html" className="btn btn-outline">{t(lang, 'cta.visitStructure')} <span className="arrow"></span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Academy() {
  const [lang] = useLang();
  return (
    <section className="block academy" id="academy">
      <div className="container">
        <div className="academy-grid">
          <div className="academy-left reveal">
            <span className="eyebrow">— {lang === 'pt' ? 'A Academia' : 'The Academy'}</span>
            <h2 className="display-lg">
              {lang === 'pt'
                ? <>A formação <em>não</em> começa<br/>na barra.</>
                : <>Training does <em>not</em><br/>begin at the barre.</>}
            </h2>
          </div>
          <div className="academy-right reveal">
            <p className="lead">
              {lang === 'pt'
                ? 'Começa na escolha de uma metodologia — no caso do ballet —, segue na presença diária do corpo docente e termina (ou recomeça) no palco. Em meio século, formamos primeiros bailarinos para o Bolshoi, o Stuttgart e o Royal Ballet, mas o que nos move é a primeira aula da criança de quatro anos.'
                : 'It begins with method — Vaganova for ballet —, continues with the daily presence of our faculty, and ends (or starts again) on stage. In half a century we have placed principal dancers at the Bolshoi, Stuttgart and Royal Ballet, but what moves us is the first lesson of a four-year-old.'}
            </p>
            <div className="academy-stats">
              <div><span className="display-lg">50</span><span className="caption">{lang === 'pt' ? 'anos' : 'years'}</span></div>
              <div><span className="display-lg">12</span><span className="caption">{lang === 'pt' ? 'modalidades' : 'programs'}</span></div>
              <div><span className="display-lg">2.4k</span><span className="caption">{lang === 'pt' ? 'alunos formados' : 'graduates'}</span></div>
              <div><span className="display-lg">38</span><span className="caption">{lang === 'pt' ? 'professores' : 'faculty'}</span></div>
            </div>
            <a href="cinquenta-anos.html" className="btn btn-ghost">{lang === 'pt' ? 'A história em 50 anos' : 'The story in 50 years'} <span className="arrow"></span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoBlock() {
  const [lang] = useLang();
  const [playing, setPlaying] = React.useState(false);
  return (
    <section className="block video" id="international">
      <div className="container">
        <div className="block-head center reveal">
          <span className="eyebrow">— {lang === 'pt' ? 'Vídeo institucional' : 'Institutional film'}</span>
          <h2 className="display-md" style={{ textAlign: 'center' }}>
            {lang === 'pt'
              ? <>Cinco minutos<br/><em>dentro da academia.</em></>
              : <>Five minutes<br/><em>inside the academy.</em></>}
          </h2>
        </div>
        <div className={'video-frame reveal ' + (playing ? 'playing' : '')} onClick={() => setPlaying(true)}>
          <div className="ph ph-rose video-poster" data-label="VIDEO · institutional film, 4K — fade-in from auditorium">
            <div className="ph-figure"><span>POSTER · 4K</span><span>00 : 05 : 12</span></div>
          </div>
          {!playing && (
            <button className="video-play" aria-label="Play">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
              <span>{lang === 'pt' ? 'Assistir' : 'Watch'}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [lang] = useLang();
  const items = lang === 'pt'
    ? [
        { q: 'A BBT me deu o palco antes do palco — disciplina, escuta e arte. Hoje sou primeira bailarina e ainda volto para uma aula com Mestra Helena nas férias.', a: 'Mariana Avelar', m: 'Primeira bailarina · Stuttgart Ballet · turma 2008' },
        { q: 'Inscrevi minha filha aos 4 e em três anos ela é outra criança. O cuidado das professoras com cada gesto é raro.', a: 'Camila Souto', m: 'Mãe da Luísa, ballet infantil' },
        { q: 'A formação em interpretação para audiovisual mudou minha agência. Os alunos chegam prontos para set.', a: 'Thais Laila', m: 'Diretora · Rainha Cinema Digital' },
        { q: 'É a escola mais séria que conheci no Brasil. Método, palco, festival, intercâmbio — tudo dentro da mesma casa.', a: 'Pedro Akamine', m: 'Coreógrafo · Royal Opera House (convidado)' },
      ]
    : [
        { q: 'BBT gave me the stage before the stage — discipline, listening, art. I am principal now and still come back for a class with Mestra Helena every summer.', a: 'Mariana Avelar', m: 'Principal · Stuttgart Ballet · class of 2008' },
        { q: 'I enrolled my daughter at 4 and three years later she is another child. The care of every teacher with each gesture is rare.', a: 'Camila Souto', m: 'Mother of Luísa, kids ballet' },
        { q: 'The screen-acting program changed my agency. Students arrive ready for set.', a: 'Thais Laila', m: 'Director · Rainha Cinema Digital' },
        { q: 'The most serious school I have known in Brazil. Method, stage, festivals, exchange — all under the same roof.', a: 'Pedro Akamine', m: 'Choreographer · Royal Opera House (guest)' },
      ];
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const next = React.useCallback(() => setIdx((i) => (i + 1) % items.length), [items.length]);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="block testimonials" id="testimonials" data-fade-on-scroll>
      <div className="container">
        <div className="block-head reveal">
          <span className="eyebrow">— {lang === 'pt' ? 'Depoimentos' : 'Voices'}</span>
          <h2 className="display-md">
            {lang === 'pt'
              ? <>Quem passou pela BBT,<br/><em>não passou só.</em></>
              : <>Those who came through BBT<br/><em>never came alone.</em></>}
          </h2>
        </div>
        <div className="testi-card reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onClick={() => setPaused((p) => !p)}>
          <div className="testi-quote-mark">"</div>
          <div className="testi-track">
            {items.map((it, i) => (
              <blockquote key={i} className={'testi-slide ' + (i === idx ? 'active' : i < idx ? 'past' : 'future')}>
                <p className="display-sm">{it.q}</p>
                <footer>
                  <strong>{it.a}</strong>
                  <span>{it.m}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="testi-nav">
            <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">← </button>
            <span className="caption">{String(idx + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
            <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">→</button>
          </div>
          <div className="testi-dots">
            {items.map((_, i) => (
              <button key={i} className={'tdot ' + (i === idx ? 'on' : '')} onClick={(e) => { e.stopPropagation(); setIdx(i); }} aria-label={'Go to ' + (i + 1)}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const [lang] = useLang();
  return (
    <section className="block final-cta" id="contact" data-fade-on-scroll>
      <div className="container">
        <div className="final-cta-inner reveal">
          <span className="eyebrow">— {lang === 'pt' ? 'Comece' : 'Begin'}</span>
          <h2 className="display-xl">
            {lang === 'pt'
              ? <>Agende uma<br/><em>aula experimental.</em></>
              : <>Book a <em>trial</em><br/><em>class.</em></>}
          </h2>
          <p className="lead" style={{ margin: '24px auto 36px', textAlign: 'center' }}>
            {lang === 'pt'
              ? 'Sem compromisso. Em 50 minutos, você conhece a sala, o método e o(a) professor(a). Vagas limitadas para o semestre.'
              : 'No commitment. In 50 minutes, you meet the studio, the method and the teacher. Limited spots this term.'}
          </p>
          <div className="final-cta-btns">
            <a href="agendar.html" className="btn btn-primary">{t(lang, 'cta.scheduleNow')} <span className="arrow"></span></a>
            <a href="https://wa.me/551132875050" className="btn btn-outline">{t(lang, 'cta.whatsapp')}</a>
          </div>
          <div className="final-cta-meta">
            <span>{t(lang, 'common.address')}</span>
            <span className="dot-sep">·</span>
            <span>{t(lang, 'common.phone')}</span>
            <span className="dot-sep">·</span>
            <span>{lang === 'pt' ? 'Atendimento Seg—Sab, 8h—21h' : 'Mon—Sat, 8am—9pm'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const [lang] = useLang();
  const logos = [
    'Prix de Lausanne',
    'Royal Academy of Dance',
    'Bolshoi Ballet School',
    'Youth America Grand Prix',
    'Festival de Joinville',
    'Vaganova Ballet Academy',
    'Stuttgart Ballet',
    'NYC Dance Project',
  ];
  const loop = [...logos, ...logos];
  return (
    <div className="marquee festivals-marquee">
      <div className="marquee-eyebrow">
        <span className="caption">{lang === 'pt' ? '— Festivais & instituições parceiras' : '— Partner festivals & institutions'}</span>
      </div>
      <div className="marquee-track">
        {loop.map((w, i) => (
          <span className="marquee-item festival-logo" key={i}>
            <span className="festival-mark" aria-hidden="true"></span>
            <span className="festival-name">{w}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ----------------- APP -----------------

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    applyPalette(tweaks.palette, tweaks.accent);
  }, [tweaks.palette, tweaks.accent]);

  return (
    <PageChrome dots={['hero', 'proof', 'modalities', 'venue', 'academy', 'international', 'testimonials', 'contact']}>
      <Hero variant={tweaks.heroVariant} />
      {tweaks.showMarquee && <Marquee />}
      <SocialProof />
      <Modalities />
      <NewVenue />
      <Academy />
      <VideoBlock />
      <Testimonials />
      <FinalCta />

      <TweaksPanel>
        <TweakSection label="Paleta" />
        <TweakRadio label="Tema" value={tweaks.palette}
          options={['rose', 'gold', 'cream', 'cream-gold']}
          onChange={(v) => setTweak('palette', v)} />
        <TweakColor label="Cor de acento" value={tweaks.accent}
          options={['#e8b8b8', '#d4b896', '#c47a6a', '#b86a58']}
          onChange={(v) => setTweak('accent', v)} />
        <TweakSection label="Hero" />
        <TweakRadio label="Variação" value={tweaks.heroVariant}
          options={['centered', 'split', 'editorial']}
          onChange={(v) => setTweak('heroVariant', v)} />
        <TweakToggle label="Marquee de modalidades" value={tweaks.showMarquee}
          onChange={(v) => setTweak('showMarquee', v)} />
      </TweaksPanel>
    </PageChrome>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
