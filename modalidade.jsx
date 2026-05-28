/* ===== MODALIDADE — Hub + Template Premium ===== */

const MOD_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream",
  "accent": "#c87a86"
}/*EDITMODE-END*/;

// ----- DATA -----
const MODS = [
  {
    id: 'classico', cat: 'danca', age: 'all', goal: 'pro',
    name: { pt: 'Ballet Clássico', en: 'Classical Ballet' },
    tagline: { pt: 'Disciplina, técnica e poesia em estado puro.', en: 'Discipline, technique and poetry in pure form.' },
    eyebrow: { pt: 'Método Vaganova · desde 1975', en: 'Vaganova method · since 1975' },
    proposta: {
      pt: 'A coluna vertebral da BBT. O ballet clássico estrutura o corpo, a escuta e a presença — fundamentos de toda dança e de toda interpretação. Nossa formação segue o método Vaganova, o mesmo da Bolshoi e do Vaganova Ballet Academy, em sete graus progressivos.',
      en: 'The backbone of BBT. Classical ballet structures the body, the listening and the presence — foundations of all dance and acting. Our training follows the Vaganova method, the same as the Bolshoi and Vaganova Ballet Academy, in seven progressive grades.',
    },
    forWhom: {
      pt: ['Crianças a partir de 4 anos (Baby Ballet)', 'Iniciantes adultos sem experiência prévia', 'Praticantes intermediários e avançados', 'Vocacionados em formação profissional'],
      en: ['Children from age 4 (Baby Ballet)', 'Adult beginners with no experience', 'Intermediate and advanced students', 'Future professionals'],
    },
    skills: {
      pt: [
        { t: 'Postura e alinhamento', d: 'Trabalho diário de eixo, en dehors e colocação.' },
        { t: 'Musicalidade', d: 'Escuta rítmica e fraseado, com pianista ao vivo.' },
        { t: 'Vocabulário clássico', d: 'Battement, adage, pirouette, allegro, pointe.' },
        { t: 'Repertório', d: 'Trechos de O Lago, Giselle, Dom Quixote, Coppélia.' },
      ],
      en: [
        { t: 'Posture and alignment', d: 'Daily work on axis, turnout and placement.' },
        { t: 'Musicality', d: 'Rhythm and phrasing, with live pianist.' },
        { t: 'Classical vocabulary', d: 'Battement, adage, pirouette, allegro, pointe.' },
        { t: 'Repertoire', d: 'Excerpts of Swan Lake, Giselle, Don Q., Coppélia.' },
      ],
    },
    experience: {
      pt: [
        { n: '01', t: 'Aulas regulares', d: '2 a 5 vezes por semana, 60 a 90 minutos.' },
        { n: '02', t: 'Barra · centro · diagonal', d: 'Estrutura clássica em três tempos.' },
        { n: '03', t: 'Avaliação semestral', d: 'Apresentação interna e devolutiva escrita.' },
        { n: '04', t: 'Espetáculo de fim de ano', d: 'Teatro alugado para alunos e famílias.' },
      ],
      en: [
        { n: '01', t: 'Regular classes', d: '2 to 5 times per week, 60 to 90 minutes.' },
        { n: '02', t: 'Barre · centre · diagonals', d: 'Classical three-part structure.' },
        { n: '03', t: 'Semester assessment', d: 'Open class and written feedback.' },
        { n: '04', t: 'Year-end performance', d: 'Theatre rental for students and families.' },
      ],
    },
    teachers: [
      { name: 'Helena Caldeira', role: { pt: 'Diretora artística · Vaganova grau VII', en: 'Artistic director · Vaganova grade VII' }, bio: { pt: 'Ex-primeira bailarina do São Paulo Companhia de Dança. 32 anos na BBT.', en: 'Former principal at São Paulo Cia. de Dança. 32 years at BBT.' } },
      { name: 'Yuri Kovalenko', role: { pt: 'Professor convidado · Bolshoi', en: 'Guest faculty · Bolshoi' }, bio: { pt: 'Ex-solista do Bolshoi Ballet, vem três meses por ano para masterclasses.', en: 'Former Bolshoi soloist, joins us three months a year for masterclasses.' } },
      { name: 'Luísa Bertacchi', role: { pt: 'Pointes e repertório', en: 'Pointes & repertoire' }, bio: { pt: 'Royal Academy of Dance, certificação Advanced 2. Especialista em iniciantes adultos.', en: 'Royal Academy of Dance Advanced 2 certified. Specialist in adult beginners.' } },
    ],
    results: [
      { n: '03', label: { pt: 'Prix de Lausanne finalistas', en: 'Prix de Lausanne finalists' } },
      { n: '12', label: { pt: 'Ouros no Festival de Joinville', en: 'Gold awards · Joinville Festival' } },
      { n: '08', label: { pt: 'Alunos em companhias internacionais', en: 'Students in international companies' } },
      { n: '50', label: { pt: 'Anos de método contínuo', en: 'Years of unbroken method' } },
    ],
  },
  // Reduced data for other tabs (template extensible)
  { id: 'audiovisual', cat: 'audiovisual', age: 'teens', goal: 'pro',
    name: { pt: 'Interpretação para Audiovisual', en: 'Acting for Screen' },
    tagline: { pt: 'Atuar para TV, cinema e streaming com prática real de mercado.', en: 'Acting for TV, film and streaming with real industry practice.' },
    eyebrow: { pt: 'Parceria Rainha Cinema · Profa. Thais Laila', en: 'Rainha Cinema partnership · Thais Laila' },
  },
  { id: 'jazz', cat: 'danca', age: 'all', goal: 'recreativo', name: { pt: 'Jazz', en: 'Jazz' }, tagline: { pt: 'Técnica e expressão para todas as idades.', en: 'Technique and expression for all ages.' }, eyebrow: { pt: 'Profa. MaVi Vieira', en: 'Teacher: MaVi Vieira' } },
  { id: 'contemporanea', cat: 'danca', age: 'all', goal: 'formacao', name: { pt: 'Dança Contemporânea', en: 'Contemporary' }, tagline: { pt: 'Movimento com identidade.', en: 'Movement with identity.' }, eyebrow: { pt: 'Pesquisa corporal', en: 'Body research' } },
  { id: 'teatro-musical', cat: 'teatro', age: 'kids', goal: 'formacao', name: { pt: 'Teatro Musical', en: 'Musical Theatre' }, tagline: { pt: 'Cantar, dançar e interpretar desde cedo.', en: 'Sing, dance, act from early on.' }, eyebrow: { pt: 'Kids · Teens', en: 'Kids · Teens' } },
  { id: 'hiphop', cat: 'danca', age: 'teens', goal: 'recreativo', name: { pt: 'Hip Hop', en: 'Hip Hop' }, tagline: { pt: 'Identidade, atitude e expressão.', en: 'Identity, attitude, expression.' }, eyebrow: { pt: 'Prof. Toninho Fontes', en: 'Teacher: Toninho Fontes' } },
  { id: 'ritmica', cat: 'esporte', age: 'kids', goal: 'pro', name: { pt: 'Ginástica Rítmica', en: 'Rhythmic Gymnastics' }, tagline: { pt: 'Arte, disciplina e alto rendimento.', en: 'Art, discipline, high performance.' }, eyebrow: { pt: 'Parceria CET Gym', en: 'CET Gym partnership' } },
  { id: 'judo', cat: 'esporte', age: 'all', goal: 'formacao', name: { pt: 'Judô', en: 'Judo' }, tagline: { pt: 'Formação de caráter através do esporte.', en: 'Building character through sport.' }, eyebrow: { pt: 'Prof. Maicon França', en: 'Teacher: Maicon França' } },
  { id: 'jiu', cat: 'esporte', age: 'all', goal: 'formacao', name: { pt: 'Jiu-Jitsu', en: 'Jiu-Jitsu' }, tagline: { pt: 'Estratégia, disciplina e alta performance.', en: 'Strategy, discipline, performance.' }, eyebrow: { pt: 'Linhagem Carlson Gracie', en: 'Carlson Gracie lineage' } },
  { id: 'forro', cat: 'danca', age: 'adultos', goal: 'recreativo', name: { pt: 'Forró Cabrueira', en: 'Forró Cabrueira' }, tagline: { pt: 'Dança, conexão e cultura brasileira.', en: 'Dance, connection, Brazilian culture.' }, eyebrow: { pt: 'Social e inclusivo', en: 'Social and inclusive' } },
  { id: 'canto', cat: 'musica', age: 'adultos', goal: 'formacao', name: { pt: 'Canto Adulto', en: 'Adult Voice' }, tagline: { pt: 'Descubra sua voz.', en: 'Find your voice.' }, eyebrow: { pt: 'Técnica e expressão', en: 'Technique & expression' } },
  { id: 'jazz-musical', cat: 'teatro', age: 'all', goal: 'formacao', name: { pt: 'Jazz Musical', en: 'Musical Jazz' }, tagline: { pt: 'A energia da Broadway em cena.', en: 'Broadway energy on stage.' }, eyebrow: { pt: 'Canto + dança + teatro', en: 'Singing + dance + theatre' } },
];

const CATS = {
  pt: { danca: 'Dança', teatro: 'Teatro & Musical', audiovisual: 'Audiovisual', esporte: 'Esporte', musica: 'Música' },
  en: { danca: 'Dance', teatro: 'Theatre & Musical', audiovisual: 'Screen Acting', esporte: 'Sport', musica: 'Music' },
};
const AGES = {
  pt: { all: 'Todas idades', kids: 'Kids (4-11)', teens: 'Teens (12-17)', adultos: 'Adultos' },
  en: { all: 'All ages', kids: 'Kids (4-11)', teens: 'Teens (12-17)', adultos: 'Adults' },
};
const GOALS = {
  pt: { recreativo: 'Recreativo', formacao: 'Formação', pro: 'Profissional' },
  en: { recreativo: 'Recreational', formacao: 'Training', pro: 'Professional' },
};

// ----- HUB -----
function ModHub({ active, setActive }) {
  const [lang] = useLang();
  const [filterCat, setFilterCat] = React.useState('all');
  const [filterAge, setFilterAge] = React.useState('all');
  const [filterGoal, setFilterGoal] = React.useState('all');

  const filtered = MODS.filter((m) =>
    (filterCat === 'all' || m.cat === filterCat) &&
    (filterAge === 'all' || m.age === filterAge || m.age === 'all') &&
    (filterGoal === 'all' || m.goal === filterGoal)
  );

  return (
    <section className="block mod-hub" id="hub">
      <div className="container">
        <div className="hub-head">
          <div>
            <span className="eyebrow">— {lang === 'pt' ? 'Modalidades' : 'Programs'}</span>
            <h1 className="display-lg">
              {lang === 'pt' ? <>Doze caminhos<br/><em>para um mesmo palco.</em></> : <>Twelve paths<br/><em>to the same stage.</em></>}
            </h1>
          </div>
          <p className="lead">
            {lang === 'pt'
              ? 'Da iniciação artística aos quatro anos à formação profissional. Da dança ao audiovisual, do esporte à música. Filtre pelo que importa para você.'
              : 'From age-four artistic initiation to professional training. From dance to screen acting, from sport to voice. Filter by what matters to you.'}
          </p>
        </div>

        <div className="hub-filters">
          <FilterRow label={lang === 'pt' ? 'Categoria' : 'Category'} value={filterCat} setValue={setFilterCat}
            options={[['all', lang === 'pt' ? 'Todas' : 'All'], ...Object.entries(CATS[lang])]} />
          <FilterRow label={lang === 'pt' ? 'Idade' : 'Age'} value={filterAge} setValue={setFilterAge}
            options={[['all', lang === 'pt' ? 'Todas' : 'All'], ...Object.entries(AGES[lang])]} />
          <FilterRow label={lang === 'pt' ? 'Objetivo' : 'Goal'} value={filterGoal} setValue={setFilterGoal}
            options={[['all', lang === 'pt' ? 'Todos' : 'All'], ...Object.entries(GOALS[lang])]} />
        </div>

        <div className="hub-grid">
          {filtered.map((m, i) => (
            <button key={m.id} className={'hub-card ' + (active === m.id ? 'is-active' : '')}
              onClick={() => { setActive(m.id); document.getElementById('template').scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
              <div className="hub-card-img ph ph-rose" data-label={'IMG · ' + m.name[lang].toLowerCase()}>
                <div className="ph-figure"><span>{String(i + 1).padStart(2, '0')}</span><span>BBT/{m.id}</span></div>
              </div>
              <div className="hub-card-text">
                <span className="caption">{CATS[lang][m.cat]} · {AGES[lang][m.age]}</span>
                <h3 className="display-sm">{m.name[lang]}</h3>
                <p className="body">{m.tagline[lang]}</p>
              </div>
              <span className="hub-card-arrow">→</span>
            </button>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="lead" style={{ textAlign: 'center', padding: '60px 0' }}>
            {lang === 'pt' ? 'Nenhuma modalidade combina esses filtros. Tente outros recortes.' : 'No programs match these filters. Try other combinations.'}
          </p>
        )}
      </div>
    </section>
  );
}

function FilterRow({ label, value, setValue, options }) {
  return (
    <div className="filter-row">
      <span className="filter-label">{label}</span>
      <div className="filter-chips">
        {options.map(([k, v]) => (
          <button key={k} className={'chip ' + (value === k ? 'on' : '')} onClick={() => setValue(k)}>{v}</button>
        ))}
      </div>
    </div>
  );
}

// ----- TEMPLATE -----
function ModTemplate({ id }) {
  const [lang] = useLang();
  const mod = MODS.find((m) => m.id === id) || MODS[0];

  if (!mod.proposta) {
    return (
      <section className="block mod-template" id="template">
        <div className="container">
          <div className="template-hero">
            <span className="caption" style={{ color: 'var(--accent)' }}>{mod.eyebrow[lang]}</span>
            <h2 className="display-xl"><em>{mod.name[lang]}</em></h2>
            <p className="lead">{mod.tagline[lang]}</p>
            <p className="body" style={{ marginTop: 20, maxWidth: '50ch' }}>
              {lang === 'pt'
                ? 'Página completa em produção. Por enquanto, clique abaixo para falar com nossa equipe e conhecer a turma.'
                : 'Full page in progress. For now, click below to talk to our team and visit a class.'}
            </p>
            <div className="hero-ctas" style={{ marginTop: 32 }}>
              <a href="agendar.html" className="btn btn-primary">{t(lang, 'cta.scheduleExp')} <span className="arrow"></span></a>
              <a href="https://wa.me/551132875050" className="btn btn-outline">{t(lang, 'cta.whatsapp')}</a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="block mod-template" id="template">
      {/* HERO */}
      <div className="template-hero-wrap">
        <div className="template-hero-bg ph ph-rose" data-label={'HERO · ' + mod.name[lang].toLowerCase()}></div>
        <div className="template-hero-vignette"></div>
        <div className="container template-hero-content">
          <span className="caption" style={{ color: 'var(--accent)' }}>{mod.eyebrow[lang]}</span>
          <h2 className="display-xl"><em>{mod.name[lang]}</em></h2>
          <p className="lead" style={{ marginTop: 24, maxWidth: '40ch' }}>{mod.tagline[lang]}</p>
          <div className="hero-ctas" style={{ marginTop: 36 }}>
            <a href="agendar.html" className="btn btn-primary">{t(lang, 'cta.scheduleExp')} <span className="arrow"></span></a>
            <a href="https://wa.me/551132875050" className="btn btn-outline">{t(lang, 'cta.whatsapp')}</a>
          </div>
        </div>
      </div>

      {/* BLOCO 1 — PROPOSTA */}
      <div className="container template-section">
        <div className="ts-grid">
          <div>
            <span className="caption">{lang === 'pt' ? '01 — A proposta' : '01 — The proposal'}</span>
          </div>
          <div>
            <h3 className="display-md" style={{ marginBottom: 32 }}>
              {lang === 'pt' ? <>O que é,<br/><em>e o que não é.</em></> : <>What it is,<br/><em>and what it is not.</em></>}
            </h3>
            <p className="lead">{mod.proposta[lang]}</p>
          </div>
        </div>
      </div>

      {/* BLOCO 2 — PARA QUEM É */}
      <div className="container template-section">
        <div className="ts-grid">
          <div>
            <span className="caption">{lang === 'pt' ? '02 — Para quem é' : '02 — Who it is for'}</span>
          </div>
          <div>
            <h3 className="display-md" style={{ marginBottom: 32 }}>
              {lang === 'pt' ? <>Da primeira aula<br/><em>ao palco europeu.</em></> : <>From first lesson<br/><em>to European stage.</em></>}
            </h3>
            <ul className="for-list">
              {mod.forWhom[lang].map((w, i) => (
                <li key={i}><span>{String(i + 1).padStart(2, '0')}</span>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BLOCO 3 — DESENVOLVIMENTO */}
      <div className="container template-section">
        <div className="ts-grid">
          <div>
            <span className="caption">{lang === 'pt' ? '03 — Desenvolvimento' : '03 — Skills built'}</span>
            <h3 className="display-md" style={{ marginTop: 24 }}>
              {lang === 'pt' ? <>Quatro frentes<br/><em>de formação.</em></> : <>Four areas<br/><em>of training.</em></>}
            </h3>
          </div>
          <div className="skill-grid">
            {mod.skills[lang].map((s, i) => (
              <div key={i} className="skill">
                <span className="caption">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="display-sm">{s.t}</h4>
                <p className="body">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BLOCO 4 — EXPERIÊNCIA */}
      <div className="container template-section">
        <div className="ts-grid">
          <div>
            <span className="caption">{lang === 'pt' ? '04 — A experiência' : '04 — The experience'}</span>
            <h3 className="display-md" style={{ marginTop: 24 }}>
              {lang === 'pt' ? <>Uma aula,<br/><em>quatro tempos.</em></> : <>One class,<br/><em>four movements.</em></>}
            </h3>
            <div className="exp-img ph" data-label="IMG · interior aula barra" style={{ height: 320, marginTop: 36 }}>
              <div className="ph-figure"><span>STUDIO A · 09:30</span><span>—</span></div>
            </div>
          </div>
          <div>
            <div className="diff-list">
              {mod.experience[lang].map((e) => (
                <div className="diff" key={e.n}>
                  <span className="caption">{e.n}</span>
                  <div>
                    <h5 className="display-sm">{e.t}</h5>
                    <p className="body">{e.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BLOCO 5 — PROFESSORES */}
      <div className="container template-section">
        <div className="block-head">
          <div>
            <span className="caption">{lang === 'pt' ? '05 — Corpo docente' : '05 — Faculty'}</span>
            <h3 className="display-md" style={{ marginTop: 24 }}>
              {lang === 'pt' ? <>Quem ensina<br/><em>na barra.</em></> : <>Who teaches<br/><em>at the barre.</em></>}
            </h3>
          </div>
        </div>
        <div className="teachers-grid">
          {mod.teachers.map((tc, i) => (
            <article key={i} className="teacher">
              <div className="teacher-img ph" data-label={'PORTRAIT · ' + tc.name.toLowerCase()}>
                <div className="ph-figure"><span>{String(i + 1).padStart(2, '0')}</span><span>—</span></div>
              </div>
              <div className="teacher-text">
                <h4 className="display-sm">{tc.name}</h4>
                <span className="caption">{tc.role[lang]}</span>
                <p className="body" style={{ marginTop: 14 }}>{tc.bio[lang]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* BLOCO 6 — PROVA SOCIAL */}
      <div className="container template-section">
        <div className="block-head">
          <div>
            <span className="caption">{lang === 'pt' ? '06 — Resultados' : '06 — Results'}</span>
            <h3 className="display-md" style={{ marginTop: 24 }}>
              {lang === 'pt' ? <>Cinquenta anos,<br/><em>números reais.</em></> : <>Fifty years,<br/><em>real numbers.</em></>}
            </h3>
          </div>
        </div>
        <div className="results-grid">
          {mod.results.map((r) => (
            <div key={r.n} className="result">
              <span className="display-lg">{r.n}</span>
              <p className="caption">{r.label[lang]}</p>
            </div>
          ))}
        </div>
        <div className="results-images">
          <div className="ph ph-rose" data-label="IMG · Joinville Festival 2024" style={{ height: 280 }}>
            <div className="ph-figure"><span>JOINVILLE · 2024</span><span>—</span></div>
          </div>
          <div className="ph ph-rose" data-label="IMG · master class Yuri Kovalenko" style={{ height: 280 }}>
            <div className="ph-figure"><span>MASTERCLASS</span><span>BOLSHOI</span></div>
          </div>
          <div className="ph ph-rose" data-label="IMG · espetáculo fim de ano Teatro Cetip" style={{ height: 280 }}>
            <div className="ph-figure"><span>TEATRO CETIP</span><span>2024</span></div>
          </div>
        </div>
      </div>

      {/* BLOCO 7 — CTA */}
      <div className="final-cta-inline">
        <div className="container">
          <h3 className="display-lg" style={{ textAlign: 'center' }}>
            {lang === 'pt' ? <>Pegue a barra.<br/><em>A primeira aula é por nossa conta.</em></> : <>Take the barre.<br/><em>The first class is on us.</em></>}
          </h3>
          <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: 40 }}>
            <a href="agendar.html" className="btn btn-primary">{t(lang, 'cta.scheduleNow')} <span className="arrow"></span></a>
            <a href="https://wa.me/551132875050" className="btn btn-outline">{t(lang, 'cta.whatsapp')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----- APP -----
function App() {
  const [tweaks, setTweak] = useTweaks(MOD_DEFAULTS);
  const [active, setActive] = React.useState(() => {
    const hash = window.location.hash.replace('#', '');
    return MODS.find((m) => m.id === hash)?.id || 'classico';
  });

  React.useEffect(() => {
    document.body.setAttribute('data-palette', tweaks.palette);
    document.documentElement.style.setProperty('--accent', tweaks.accent);
  }, [tweaks.palette, tweaks.accent]);

  return (
    <PageChrome>
      <ModHub active={active} setActive={setActive} />
      <ModTemplate id={active} />

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
