/* ===== 50 ANOS — Landing manifesto ===== */

const ANOS_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "gold",
  "accent": "#d4b896"
}/*EDITMODE-END*/;

function Manifesto() {
  const [lang] = useLang();
  const [playing, setPlaying] = React.useState(false);
  return (
    <section className="block anos-manifesto">
      <div className="anos-mani-bg ph ph-rose" data-label="VIDEO POSTER · 1975 first studio · sepia"></div>
      <div className="anos-mani-vignette"></div>
      <div className="container anos-mani-content">
        <span className="caption">— 1975 · 2025</span>
        <h1 className="display-xl">
          {lang === 'pt'
            ? <>Cinquenta<br/><em>anos.</em></>
            : <>Fifty<br/><em>years.</em></>}
        </h1>
        <p className="lead" style={{ marginTop: 32, maxWidth: '52ch' }}>
          {lang === 'pt'
            ? 'Em 1975, Mestra Beatriz Tavares abriu uma sala única na Bela Vista e ensinou a primeira aula a sete meninas. Cinquenta anos depois, são 2.400 ex-alunos em palcos de quatro continentes. Esta é a casa que não saiu do lugar — e levou São Paulo ao mundo.'
            : 'In 1975, Mestra Beatriz Tavares opened a single room in Bela Vista and taught the first class to seven girls. Fifty years later, 2,400 alumni stand on stages across four continents. This is the house that never left — and took São Paulo to the world.'}
        </p>
        <div className="hero-ctas" style={{ marginTop: 40 }}>
          <button onClick={() => setPlaying(true)} className="btn btn-primary">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              {lang === 'pt' ? 'Assistir manifesto · 4 min' : 'Watch manifesto · 4 min'}
            </span>
            <span className="arrow"></span>
          </button>
          <a href="agendar.html" className="btn btn-outline">
            {lang === 'pt' ? 'Faça parte dessa história' : 'Be part of this story'}
          </a>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const [lang] = useLang();
  const events = lang === 'pt'
    ? [
        { y: '1975', t: 'A primeira sala', d: 'Mestra Beatriz Tavares aluga 60 m² na Rua Bela Cintra. Sete alunas, um pianista, dois espelhos.' },
        { y: '1982', t: 'Primeiro espetáculo', d: 'O Lago dos Cisnes adaptado, no Teatro João Caetano. 460 pessoas na plateia.' },
        { y: '1990', t: 'Adoção do método Vaganova', d: 'Convênio com Vaganova Ballet Academy. Helena Caldeira começa a dar aulas.' },
        { y: '1998', t: 'Primeira aprovação no Royal', d: 'Júlia Pacheco, 16 anos, entra para o Royal Ballet School (Londres).' },
        { y: '2005', t: 'Expansão multidisciplinar', d: 'Jazz, contemporâneo e teatro musical entram para o currículo.' },
        { y: '2012', t: 'Prix de Lausanne', d: 'Pedro Akamine, primeiro brasileiro da BBT a chegar à final.' },
        { y: '2018', t: 'Programa de intercâmbio', d: 'Convênio com Bolshoi traz Yuri Kovalenko três meses por ano.' },
        { y: '2024', t: 'Nova sede na Paulista', d: '1.800 m² desenhados por Triptyque Architecture. Inauguração com Mariana Avelar.' },
        { y: '2025', t: '50 anos', d: 'Cinco décadas, 2.400 alunos formados, 38 professores ativos. A história continua.' },
      ]
    : [
        { y: '1975', t: 'The first room', d: 'Mestra Beatriz Tavares rents 60 m² on Rua Bela Cintra. Seven students, one pianist, two mirrors.' },
        { y: '1982', t: 'First show', d: 'Adapted Swan Lake at Teatro João Caetano. 460 people in the audience.' },
        { y: '1990', t: 'Vaganova method adopted', d: 'Partnership with Vaganova Ballet Academy. Helena Caldeira starts teaching.' },
        { y: '1998', t: 'First Royal Ballet acceptance', d: 'Júlia Pacheco, 16, enters the Royal Ballet School (London).' },
        { y: '2005', t: 'Multidisciplinary expansion', d: 'Jazz, contemporary and musical theatre join the curriculum.' },
        { y: '2012', t: 'Prix de Lausanne', d: 'Pedro Akamine, BBT\u2019s first Brazilian to reach the final.' },
        { y: '2018', t: 'Exchange program', d: 'Bolshoi partnership brings Yuri Kovalenko three months per year.' },
        { y: '2024', t: 'New venue on Paulista', d: '1,800 m² designed by Triptyque Architecture. Opening with Mariana Avelar.' },
        { y: '2025', t: '50 years', d: 'Five decades, 2,400 alumni, 38 active teachers. The story continues.' },
      ];

  return (
    <section className="block anos-timeline">
      <div className="container">
        <div className="block-head">
          <div>
            <span className="eyebrow">— {lang === 'pt' ? 'Linha do tempo' : 'Timeline'}</span>
            <h2 className="display-md">
              {lang === 'pt' ? <>Nove momentos<br/><em>que nos fizeram quem somos.</em></> : <>Nine moments<br/><em>that made us.</em></>}
            </h2>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-line"></div>
          {events.map((e, i) => (
            <div className={'time-row ' + (i % 2 ? 'right' : 'left')} key={e.y}>
              <div className="time-card">
                <span className="time-year">{e.y}</span>
                <h4 className="display-sm">{e.t}</h4>
                <p className="body">{e.d}</p>
              </div>
              <div className="time-dot"></div>
              <div className="time-img ph ph-rose" data-label={'ARCHIVE · ' + e.y}>
                <div className="ph-figure"><span>{e.y}</span><span>—</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Alumni() {
  const [lang] = useLang();
  const list = [
    { name: 'Mariana Avelar', where: 'Stuttgart Ballet', role: lang === 'pt' ? 'Primeira bailarina' : 'Principal', year: '2008' },
    { name: 'Pedro Akamine', where: 'Royal Opera House', role: lang === 'pt' ? 'Coreógrafo' : 'Choreographer', year: '2012' },
    { name: 'Júlia Pacheco', where: 'Birmingham Royal Ballet', role: 'Soloist', year: '2001' },
    { name: 'Luca Rinaldi', where: 'Compañía Nacional de Danza', role: lang === 'pt' ? 'Solista' : 'Soloist', year: '2015' },
    { name: 'Sofia Khalil', where: 'Netflix · "Carmen"', role: lang === 'pt' ? 'Atriz protagonista' : 'Lead actress', year: '2019' },
    { name: 'Beatriz Holanda', where: 'Companhia de Dança SP', role: lang === 'pt' ? 'Bailarina' : 'Dancer', year: '2011' },
    { name: 'Renato Sá', where: 'West Side Story · BR Tour', role: lang === 'pt' ? 'Riff' : 'Riff', year: '2014' },
    { name: 'Ana Lúcia Vieira', where: 'Cirque du Soleil', role: lang === 'pt' ? 'Performer' : 'Performer', year: '2017' },
  ];
  return (
    <section className="block anos-alumni">
      <div className="container">
        <div className="block-head">
          <div>
            <span className="eyebrow">— {lang === 'pt' ? 'Ex-alunos' : 'Alumni'}</span>
            <h2 className="display-md">
              {lang === 'pt' ? <>Onde estão<br/><em>quem passou por aqui.</em></> : <>Where they are<br/><em>now.</em></>}
            </h2>
          </div>
          <p className="body" style={{ maxWidth: '36ch' }}>
            {lang === 'pt'
              ? 'Oito dos 2.400 caminhos. Cada nome é uma história que começou na barra desta casa.'
              : 'Eight of 2,400 paths. Each name a story that began at the barre of this house.'}
          </p>
        </div>
        <div className="alumni-grid">
          {list.map((a, i) => (
            <div className="alum" key={a.name}>
              <div className="alum-img ph ph-rose" data-label={'PORTRAIT · ' + a.name.toLowerCase()}>
                <div className="ph-figure"><span>{String(i + 1).padStart(2, '0')}</span><span>{a.year}</span></div>
              </div>
              <div className="alum-text">
                <span className="caption">{lang === 'pt' ? 'Turma de ' + a.year : 'Class of ' + a.year}</span>
                <h4 className="display-sm">{a.name}</h4>
                <p className="body">{a.role} <br/><em style={{ color: 'var(--accent)' }}>{a.where}</em></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Moments() {
  const [lang] = useLang();
  const moments = lang === 'pt'
    ? [
        { c: 'A foto', t: '1975', d: 'Mestra Beatriz e as sete primeiras alunas. Polaroid sépia, hoje na recepção.' },
        { c: 'O telegrama', t: '1998', d: 'Western Union do Royal Ballet School aceitando Júlia Pacheco. Emoldurado na sala da diretora.' },
        { c: 'O sapatilha', t: '2008', d: 'A primeira sapatilha de pointe da Mariana, doada por ela mesma à academia.' },
        { c: 'A coreografia', t: '2012', d: 'Manuscrito original do solo de Pedro Akamine para o Prix de Lausanne.' },
      ]
    : [
        { c: 'The photo', t: '1975', d: 'Mestra Beatriz and the first seven students. Sepia polaroid, today at reception.' },
        { c: 'The telegram', t: '1998', d: 'Western Union from Royal Ballet School accepting Júlia Pacheco. Framed in the director\u2019s office.' },
        { c: 'The pointe shoe', t: '2008', d: 'Mariana\u2019s first pointe shoe, donated by her to the academy.' },
        { c: 'The choreography', t: '2012', d: 'Original manuscript of Pedro Akamine\u2019s Prix de Lausanne solo.' },
      ];
  return (
    <section className="block anos-moments">
      <div className="container">
        <div className="block-head center">
          <span className="eyebrow">— {lang === 'pt' ? 'Momentos' : 'Moments'}</span>
          <h2 className="display-md" style={{ textAlign: 'center' }}>
            {lang === 'pt' ? <>Quatro objetos<br/><em>que contam tudo.</em></> : <>Four objects<br/><em>that tell everything.</em></>}
          </h2>
        </div>
        <div className="moments-grid">
          {moments.map((m, i) => (
            <article className="moment" key={i}>
              <span className="moment-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="moment-img ph ph-rose" data-label={'ARCHIVE · ' + m.c.toLowerCase()}>
                <div className="ph-figure"><span>{m.t}</span><span>BBT/ARCHIVE</span></div>
              </div>
              <span className="caption" style={{ color: 'var(--accent)', marginTop: 18, display: 'block' }}>{m.c} · {m.t}</span>
              <p className="display-sm" style={{ fontStyle: 'italic', marginTop: 10 }}>{m.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmotionalCta() {
  const [lang] = useLang();
  return (
    <section className="block anos-cta">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="eyebrow">— {lang === 'pt' ? 'Capítulo 51' : 'Chapter 51'}</span>
        <h2 className="display-xl" style={{ margin: '24px auto 32px' }}>
          {lang === 'pt'
            ? <>Faça parte<br/><em>dessa história.</em></>
            : <>Be part of<br/><em>this story.</em></>}
        </h2>
        <p className="lead" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
          {lang === 'pt'
            ? 'A próxima Mariana, o próximo Pedro, a próxima Júlia já está em algum lugar de São Paulo, pensando em fazer aula. Pode ser você. Pode ser seu filho. A primeira é por nossa conta.'
            : 'The next Mariana, the next Pedro, the next Júlia is somewhere in São Paulo, thinking about a first class. It could be you. It could be your child. The first one is on us.'}
        </p>
        <div className="hero-ctas" style={{ justifyContent: 'center' }}>
          <a href="agendar.html" className="btn btn-primary">{lang === 'pt' ? 'Agendar a primeira aula' : 'Book the first class'} <span className="arrow"></span></a>
          <a href="https://wa.me/551132875050" className="btn btn-outline">{t(lang, 'cta.whatsapp')}</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [tweaks, setTweak] = useTweaks(ANOS_DEFAULTS);
  React.useEffect(() => {
    document.body.setAttribute('data-palette', tweaks.palette);
    document.documentElement.style.setProperty('--accent', tweaks.accent);
  }, [tweaks.palette, tweaks.accent]);

  return (
    <PageChrome>
      <Manifesto />
      <Timeline />
      <Alumni />
      <Moments />
      <EmotionalCta />

      <TweaksPanel>
        <TweakSection label="Paleta" />
        <TweakRadio label="Tema" value={tweaks.palette} options={['rose', 'gold', 'cream', 'cream-gold']} onChange={(v) => setTweak('palette', v)} />
        <TweakColor label="Acento" value={tweaks.accent}
          options={['#e8b8b8', '#d4b896', '#c47a6a', '#b86a58']}
          onChange={(v) => setTweak('accent', v)} />
      </TweaksPanel>
    </PageChrome>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
