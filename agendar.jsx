/* ===== AGENDAR — Conversão ===== */

const AG_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream",
  "accent": "#c87a86"
}/*EDITMODE-END*/;

const MODALIDADES_AG = [
  { v: 'classico', pt: 'Ballet Clássico', en: 'Classical Ballet' },
  { v: 'infantil', pt: 'Ballet Infantil (4 — 9 anos)', en: 'Kids Ballet (4 — 9)' },
  { v: 'jazz', pt: 'Jazz', en: 'Jazz' },
  { v: 'contemporanea', pt: 'Dança Contemporânea', en: 'Contemporary' },
  { v: 'teatro-musical', pt: 'Teatro Musical', en: 'Musical Theatre' },
  { v: 'audiovisual', pt: 'Interpretação para Audiovisual', en: 'Screen Acting' },
  { v: 'hiphop', pt: 'Hip Hop', en: 'Hip Hop' },
  { v: 'ritmica', pt: 'Ginástica Rítmica', en: 'Rhythmic Gymnastics' },
  { v: 'judo', pt: 'Judô', en: 'Judo' },
  { v: 'jiu', pt: 'Jiu-Jitsu', en: 'Jiu-Jitsu' },
  { v: 'forro', pt: 'Forró Cabrueira', en: 'Forró' },
  { v: 'canto', pt: 'Canto Adulto', en: 'Adult Voice' },
  { v: 'indeciso', pt: 'Ainda não sei — quero orientação', en: 'Not sure yet — I need guidance' },
];

function AgendaHero() {
  const [lang] = useLang();
  return (
    <div className="ag-hero">
      <div className="ag-hero-bg ph ph-rose" data-label="HERO · arabesque silhouette en pointe"></div>
      <div className="ag-hero-vignette"></div>
      <div className="container ag-hero-content">
        <span className="caption" style={{ color: 'var(--accent)' }}>— {lang === 'pt' ? 'Aula experimental' : 'Trial class'}</span>
        <h1 className="display-xl">
          {lang === 'pt' ? <>Sua primeira aula<br/><em>começa aqui.</em></> : <>Your first class<br/><em>starts here.</em></>}
        </h1>
        <p className="lead" style={{ marginTop: 28, maxWidth: '46ch' }}>
          {lang === 'pt'
            ? '50 minutos. Sem custo. Sem compromisso. Você conhece a sala, o método, o(a) professor(a) e a turma — antes de qualquer matrícula.'
            : '50 minutes. No charge. No commitment. You meet the studio, method, teacher and class — before any enrolment.'}
        </p>
      </div>
    </div>
  );
}

function AgendaForm() {
  const [lang] = useLang();
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({
    name: '', age: '', who: 'self', mod: '', phone: '', when: 'manha',
  });
  const [touched, setTouched] = React.useState({});
  const totalSteps = 4;

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const isValid = {
    1: data.name.trim().length >= 2 && data.age.trim().length >= 1,
    2: data.mod.length > 0,
    3: data.phone.trim().length >= 8,
    4: true,
  };
  const next = () => { setTouched((t) => ({ ...t, [step]: true })); if (isValid[step]) setStep(s => Math.min(s + 1, totalSteps)); };
  const back = () => setStep(s => Math.max(s - 1, 1));

  const labels = {
    pt: {
      step: 'Etapa', of: 'de',
      s1: 'Quem vai fazer aula?',
      s2: 'Qual modalidade?',
      s3: 'Como te chamamos?',
      s4: 'Pronto. Vamos confirmar.',
      forSelf: 'Eu mesmo(a)',
      forKid: 'Meu filho(a)',
      forOther: 'Outra pessoa',
      name: 'Nome completo',
      age: 'Idade do(a) aluno(a)',
      mod: 'Modalidade de interesse',
      phone: 'Telefone com DDD',
      whenLabel: 'Quando você prefere fazer aula?',
      morning: 'Manhã (8h — 12h)',
      afternoon: 'Tarde (14h — 18h)',
      evening: 'Noite (18h — 21h)',
      saturday: 'Sábado',
      next: 'Continuar',
      back: 'Voltar',
      confirm: 'Confirmar agendamento',
      whatsapp: 'Falar direto no WhatsApp',
      review: 'Confira seus dados:',
      thanks: 'Recebemos sua solicitação!',
      thanksSub: 'Nossa equipe entra em contato em até 2 horas úteis para confirmar dia, horário e professor. Se preferir, fale com a gente agora pelo WhatsApp.',
      reset: 'Agendar outra aula',
    },
    en: {
      step: 'Step', of: 'of',
      s1: 'Who is taking the class?',
      s2: 'Which program?',
      s3: 'What\u2019s your name?',
      s4: 'All set. Let\u2019s confirm.',
      forSelf: 'Myself',
      forKid: 'My child',
      forOther: 'Someone else',
      name: 'Full name',
      age: 'Student age',
      mod: 'Program of interest',
      phone: 'Phone with country code',
      whenLabel: 'When do you prefer to come?',
      morning: 'Morning (8am — 12pm)',
      afternoon: 'Afternoon (2pm — 6pm)',
      evening: 'Evening (6pm — 9pm)',
      saturday: 'Saturday',
      next: 'Continue',
      back: 'Back',
      confirm: 'Confirm booking',
      whatsapp: 'Talk on WhatsApp instead',
      review: 'Check your info:',
      thanks: 'We received your request!',
      thanksSub: 'Our team will reach out within 2 working hours to confirm day, time and teacher. Prefer to talk now? WhatsApp is open.',
      reset: 'Book another class',
    },
  }[lang];

  const [submitted, setSubmitted] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="ag-form ag-form-done">
        <div className="done-mark">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="m7 12 3 3 7-7"/>
          </svg>
        </div>
        <h3 className="display-md">{labels.thanks}</h3>
        <p className="body">{labels.thanksSub}</p>
        <div className="hero-ctas" style={{ marginTop: 32 }}>
          <a href="https://wa.me/551132875050" className="btn btn-primary">{t(lang, 'cta.whatsapp')} <span className="arrow"></span></a>
          <button onClick={() => { setSubmitted(false); setStep(1); setData({ name: '', age: '', who: 'self', mod: '', phone: '', when: 'manha' }); }} className="btn btn-outline">{labels.reset}</button>
        </div>
      </div>
    );
  }

  const modLabel = MODALIDADES_AG.find((m) => m.v === data.mod)?.[lang];

  return (
    <form className="ag-form" onSubmit={onSubmit}>
      <div className="ag-form-head">
        <span className="caption">{labels.step} {step} {labels.of} {totalSteps}</span>
        <div className="ag-progress">
          {[1,2,3,4].map((s) => (
            <span key={s} className={'pseg ' + (s <= step ? 'on' : '')}></span>
          ))}
        </div>
      </div>

      {step === 1 && (
        <div className="ag-step">
          <h3 className="display-md">{labels.s1}</h3>
          <div className="who-grid">
            {[['self', labels.forSelf], ['kid', labels.forKid], ['other', labels.forOther]].map(([k, v]) => (
              <button type="button" key={k}
                className={'who-card ' + (data.who === k ? 'on' : '')}
                onClick={() => update('who', k)}>
                <span className="who-icon">{k === 'self' ? '◐' : k === 'kid' ? '◓' : '◑'}</span>
                <span>{v}</span>
              </button>
            ))}
          </div>
          <div className="ag-row">
            <label className="ag-field">
              <span>{labels.age}</span>
              <input type="text" inputMode="numeric" value={data.age} onChange={(e) => update('age', e.target.value)}
                placeholder={data.who === 'kid' ? '8' : '32'} />
            </label>
            <label className="ag-field">
              <span>{labels.name}</span>
              <input type="text" value={data.name} onChange={(e) => update('name', e.target.value)}
                placeholder={lang === 'pt' ? 'Como gostaria de ser chamado' : 'Your full name'} />
            </label>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="ag-step">
          <h3 className="display-md">{labels.s2}</h3>
          <div className="mod-chips">
            {MODALIDADES_AG.map((m) => (
              <button type="button" key={m.v}
                className={'mod-chip ' + (data.mod === m.v ? 'on' : '')}
                onClick={() => update('mod', m.v)}>
                {m[lang]}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="ag-step">
          <h3 className="display-md">{labels.s3}</h3>
          <p className="body" style={{ marginTop: 16, marginBottom: 32, maxWidth: '40ch' }}>
            {lang === 'pt'
              ? 'A confirmação chega por WhatsApp em até 2 horas úteis. Não fazemos ligações automáticas.'
              : 'Confirmation arrives by WhatsApp within 2 working hours. We don\u2019t make automated calls.'}
          </p>
          <label className="ag-field">
            <span>{labels.phone}</span>
            <input type="tel" value={data.phone} onChange={(e) => update('phone', e.target.value)}
              placeholder="+55 11 9 0000-0000" />
          </label>
          <div style={{ marginTop: 32 }}>
            <p className="caption" style={{ display: 'block', marginBottom: 14 }}>{labels.whenLabel}</p>
            <div className="when-grid">
              {[['manha', labels.morning], ['tarde', labels.afternoon], ['noite', labels.evening], ['sab', labels.saturday]].map(([k, v]) => (
                <button type="button" key={k}
                  className={'when-card ' + (data.when === k ? 'on' : '')}
                  onClick={() => update('when', k)}>
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="ag-step">
          <h3 className="display-md">{labels.s4}</h3>
          <p className="body" style={{ marginTop: 16, marginBottom: 32 }}>{labels.review}</p>
          <dl className="review-list">
            <div><dt>{labels.name}</dt><dd>{data.name || '—'}</dd></div>
            <div><dt>{labels.age}</dt><dd>{data.age || '—'}</dd></div>
            <div><dt>{labels.mod}</dt><dd>{modLabel || '—'}</dd></div>
            <div><dt>{labels.phone}</dt><dd>{data.phone || '—'}</dd></div>
            <div><dt>{labels.whenLabel}</dt><dd>{({ manha: labels.morning, tarde: labels.afternoon, noite: labels.evening, sab: labels.saturday })[data.when]}</dd></div>
          </dl>
        </div>
      )}

      <div className="ag-actions">
        {step > 1 ? (
          <button type="button" className="btn btn-ghost" onClick={back}>← {labels.back}</button>
        ) : <span />}

        {step < totalSteps ? (
          <button type="button" className="btn btn-primary" onClick={next} disabled={!isValid[step]}>
            {labels.next} <span className="arrow"></span>
          </button>
        ) : (
          <button type="submit" className="btn btn-primary">
            {labels.confirm} <span className="arrow"></span>
          </button>
        )}
      </div>
      {touched[step] && !isValid[step] && step < totalSteps && (
        <p className="ag-error">
          {lang === 'pt' ? 'Preenchimento obrigatório para seguir.' : 'Please fill the required fields.'}
        </p>
      )}
    </form>
  );
}

function AgendaSide() {
  const [lang] = useLang();
  const cards = lang === 'pt'
    ? [
        { q: 'Achei que minha filha era tímida demais. Em três aulas ela tirou os sapatos para entrar no estúdio sozinha.', a: 'Camila Souto', m: 'Mãe da Luísa, 6 anos' },
        { q: 'Voltei à barra aos 38. Pensei que seria humilhante. Foi exatamente o oposto.', a: 'Rafael M.', m: 'Ballet adulto iniciante' },
        { q: 'A aula experimental me deu mais clareza do que três mensagens trocadas com outras escolas.', a: 'Beatriz K.', m: 'Mãe do João, 9 anos' },
      ]
    : [
        { q: 'I thought my daughter was too shy. In three classes she took her shoes off and walked into the studio alone.', a: 'Camila Souto', m: 'Mom of Luísa, 6' },
        { q: 'I came back to the barre at 38. I thought it would be humiliating. It was the exact opposite.', a: 'Rafael M.', m: 'Adult beginner ballet' },
        { q: 'The trial class gave me more clarity than three message exchanges with other schools.', a: 'Beatriz K.', m: 'Mom of João, 9' },
      ];

  return (
    <aside className="ag-side">
      <div className="ag-side-card scarcity">
        <span className="caption" style={{ color: 'var(--accent)' }}>{lang === 'pt' ? '— Vagas limitadas' : '— Limited spots'}</span>
        <h3 className="display-sm" style={{ marginTop: 12, fontStyle: 'italic' }}>
          {lang === 'pt' ? <>14 vagas restantes<br/>para o semestre.</> : <>14 spots left<br/>for the semester.</>}
        </h3>
        <p className="body" style={{ fontSize: 13, marginTop: 12 }}>
          {lang === 'pt'
            ? 'Atualizado em tempo real. Aulas começam em 12 de fevereiro.'
            : 'Updated in real time. Classes start February 12.'}
        </p>
      </div>

      <div className="ag-side-card">
        <span className="caption" style={{ color: 'var(--accent)' }}>{lang === 'pt' ? '— Como funciona' : '— How it works'}</span>
        <ol className="how-list">
          <li><span>01</span>{lang === 'pt' ? 'Você preenche o formulário.' : 'You fill the form.'}</li>
          <li><span>02</span>{lang === 'pt' ? 'Em 2h úteis, confirmamos dia e horário.' : 'Within 2 working hours, we confirm day and time.'}</li>
          <li><span>03</span>{lang === 'pt' ? 'Chega 10 min antes. Roupa confortável, descalço.' : 'Arrive 10 min early. Comfortable clothes, barefoot.'}</li>
          <li><span>04</span>{lang === 'pt' ? 'Faça a aula. Decida depois.' : 'Take the class. Decide later.'}</li>
        </ol>
      </div>

      <div className="ag-testimonials">
        {cards.map((c, i) => (
          <blockquote className="ag-quote" key={i}>
            <p>"{c.q}"</p>
            <footer><strong>{c.a}</strong> <span>· {c.m}</span></footer>
          </blockquote>
        ))}
      </div>
    </aside>
  );
}

function App() {
  const [tweaks, setTweak] = useTweaks(AG_DEFAULTS);
  React.useEffect(() => {
    document.body.setAttribute('data-palette', tweaks.palette);
    document.documentElement.style.setProperty('--accent', tweaks.accent);
  }, [tweaks.palette, tweaks.accent]);

  return (
    <PageChrome>
      <AgendaHero />
      <section className="block ag-main">
        <div className="container">
          <div className="ag-grid">
            <AgendaForm />
            <AgendaSide />
          </div>
        </div>
      </section>

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
