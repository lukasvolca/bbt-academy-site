/* ===== ESTRUTURA — A sede física ===== */

const EST_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "cream",
  "accent": "#c87a86"
}/*EDITMODE-END*/;

function EstHero() {
  const [lang] = useLang();
  return (
    <section className="block est-hero">
      <div className="container">
        <div className="est-hero-top">
          <span className="caption">{lang === 'pt' ? '— A casa' : '— The house'}</span>
          <h1 className="display-xl">
            {lang === 'pt' ? <>1.800 m²<br/><em>de dança.</em></> : <>1,800 m²<br/><em>of dance.</em></>}
          </h1>
          <div className="est-hero-meta">
            <div><span className="caption">01</span><span>Av. Paulista, 1578</span></div>
            <div><span className="caption">02</span><span>{lang === 'pt' ? '6 salas + auditório' : '6 studios + auditorium'}</span></div>
            <div><span className="caption">03</span><span>{lang === 'pt' ? 'Inaugurada em 2024' : 'Opened in 2024'}</span></div>
          </div>
        </div>
        <div className="est-hero-img ph ph-rose" data-label="ARCH · main entrance, Av. Paulista 1578 — golden hour exterior">
          <div className="ph-figure"><span>BBT · NOVA SEDE</span><span>2024</span></div>
        </div>
      </div>
    </section>
  );
}

function EstGallery() {
  const [lang] = useLang();
  const tiles = [
    { l: 'STUDIO A · 110 m²', s: lang === 'pt' ? 'Sala principal' : 'Main studio', big: true },
    { l: 'STUDIO B · 85 m²', s: lang === 'pt' ? 'Pointes e repertório' : 'Pointes & repertoire' },
    { l: 'AUDITÓRIO · 220 lugares', s: lang === 'pt' ? 'Apresentações e masterclasses' : 'Performances & masterclasses', wide: true },
    { l: 'STUDIO C · 75 m²', s: lang === 'pt' ? 'Jazz e contemporâneo' : 'Jazz & contemporary' },
    { l: 'STUDIO D · 90 m²', s: lang === 'pt' ? 'Sala dos pequenos' : 'Kids studio' },
    { l: 'STUDIO E · 60 m²', s: lang === 'pt' ? 'Tatame · judô / jiu-jitsu' : 'Tatami · judo / jiu-jitsu' },
    { l: 'STUDIO F · 70 m²', s: lang === 'pt' ? 'Música e canto' : 'Music & voice' },
    { l: 'LOUNGE · 80 m²', s: lang === 'pt' ? 'Café e espera de famílias' : 'Café & family lounge', wide: true },
  ];
  return (
    <section className="block est-gallery">
      <div className="container">
        <div className="block-head">
          <div>
            <span className="eyebrow">— {lang === 'pt' ? 'Galeria' : 'Gallery'}</span>
            <h2 className="display-md">
              {lang === 'pt' ? <>Seis salas,<br/><em>um auditório, um lounge.</em></> : <>Six studios,<br/><em>one auditorium, one lounge.</em></>}
            </h2>
          </div>
          <a href="agendar.html" className="btn btn-outline">
            {lang === 'pt' ? 'Visita guiada' : 'Guided tour'} <span className="arrow"></span>
          </a>
        </div>
        <div className="est-gal-grid">
          {tiles.map((tile, i) => (
            <div key={i} className={'est-tile ' + (tile.big ? 'big ' : '') + (tile.wide ? 'wide ' : '')}>
              <div className="ph ph-rose est-tile-img" data-label={'IMG · ' + tile.s}>
                <div className="ph-figure"><span>{String(i + 1).padStart(2, '0')}</span><span>{tile.l}</span></div>
              </div>
              <div className="est-tile-text">
                <span className="caption">{tile.l}</span>
                <h4 className="display-sm">{tile.s}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EstSpecs() {
  const [lang] = useLang();
  const items = lang === 'pt'
    ? [
        { n: '01', t: 'Piso Harlequin Activity', d: 'Quatro camadas de absorção: estrutura de madeira flexível, espuma de alta densidade, contrapiso vinílico e tablado linóleo Cascade. Reduz em até 70% o impacto nas articulações.' },
        { n: '02', t: 'Barras e espelhos', d: 'Barras Harlequin BarreFix duplas em aço cromado. Espelhos venezianos de 4,5 m, com cortina blackout para apresentação interna.' },
        { n: '03', t: 'Acústica', d: 'Tratamento acústico em todas as salas. Sala E (música) com isolamento sonoro IIC 70 e absorção NRC 0,85.' },
        { n: '04', t: 'Pianos acústicos', d: 'Três pianos Yamaha U3 afinados quinzenalmente. Pianista contratado para aulas avançadas.' },
        { n: '05', t: 'Vestiários', d: 'Vestiários separados (kids / adultos), armários individuais com cadeado eletrônico, ducha e área de aquecimento.' },
        { n: '06', t: 'Acessibilidade', d: 'Elevador para todos os andares, rampas, banheiros adaptados PCD e sinalização tátil. Selo Inclusão SP.' },
      ]
    : [
        { n: '01', t: 'Harlequin Activity floor', d: 'Four-layer shock absorption: flexible wood structure, high-density foam, vinyl underlay and Cascade linoleum. Reduces joint impact by up to 70%.' },
        { n: '02', t: 'Barres & mirrors', d: 'Harlequin BarreFix double chrome barres. 4.5 m mirrors with blackout curtain for in-house performance.' },
        { n: '03', t: 'Acoustics', d: 'Acoustic treatment in every studio. Studio E (music) with IIC 70 isolation and NRC 0.85 absorption.' },
        { n: '04', t: 'Acoustic pianos', d: 'Three Yamaha U3 pianos tuned biweekly. In-house pianist for advanced classes.' },
        { n: '05', t: 'Dressing rooms', d: 'Separate dressing rooms (kids / adults), individual lockers with electronic locks, showers and warm-up area.' },
        { n: '06', t: 'Accessibility', d: 'Elevator to every floor, ramps, accessible restrooms and tactile signage. Inclusão SP certification.' },
      ];
  return (
    <section className="block est-specs">
      <div className="container">
        <div className="block-head">
          <div>
            <span className="eyebrow">— {lang === 'pt' ? 'Diferenciais técnicos' : 'Technical specs'}</span>
            <h2 className="display-md">
              {lang === 'pt' ? <>O detalhe<br/><em>que muda tudo.</em></> : <>The detail<br/><em>that changes everything.</em></>}
            </h2>
          </div>
        </div>
        <div className="specs-grid">
          {items.map((it) => (
            <div className="spec" key={it.n}>
              <span className="caption">{it.n}</span>
              <h4 className="display-sm">{it.t}</h4>
              <p className="body">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EstLocation() {
  const [lang] = useLang();
  return (
    <section className="block est-loc">
      <div className="container">
        <div className="loc-grid">
          <div className="loc-left">
            <span className="eyebrow">— {lang === 'pt' ? 'Localização' : 'Location'}</span>
            <h2 className="display-md" style={{ marginTop: 16 }}>
              {lang === 'pt' ? <>No meio da<br/><em>cidade que dança.</em></> : <>In the heart of<br/><em>the city that dances.</em></>}
            </h2>
            <div className="loc-info">
              <div className="diff">
                <span className="caption">A</span>
                <div>
                  <h5 className="display-sm">Av. Paulista, 1578</h5>
                  <p className="body">Bela Vista · São Paulo / SP · CEP 01310-200</p>
                </div>
              </div>
              <div className="diff">
                <span className="caption">B</span>
                <div>
                  <h5 className="display-sm">{lang === 'pt' ? 'Como chegar' : 'How to get here'}</h5>
                  <p className="body">{lang === 'pt' ? 'Metrô Trianon-MASP (linha verde) · 80 m da entrada. Estacionamento parceiro Estapar (50% off).' : 'Subway Trianon-MASP (green line) · 80 m from entrance. Partner parking at Estapar (50% off).'}</p>
                </div>
              </div>
              <div className="diff">
                <span className="caption">C</span>
                <div>
                  <h5 className="display-sm">{lang === 'pt' ? 'Horário' : 'Hours'}</h5>
                  <p className="body">{lang === 'pt' ? 'Seg — Sex · 8h — 21h30  ·  Sáb · 8h — 17h  ·  Dom · fechado' : 'Mon — Fri · 8am — 9:30pm  ·  Sat · 8am — 5pm  ·  Sun · closed'}</p>
                </div>
              </div>
            </div>
            <div className="hero-ctas" style={{ marginTop: 40 }}>
              <a href="agendar.html" className="btn btn-primary">{lang === 'pt' ? 'Agendar visita' : 'Book a visit'} <span className="arrow"></span></a>
              <a href="https://maps.google.com" target="_blank" rel="noopener" className="btn btn-outline">{lang === 'pt' ? 'Abrir no Google Maps' : 'Open in Google Maps'}</a>
            </div>
          </div>
          <div className="loc-map">
            <div className="map-frame">
              <div className="map-grid"></div>
              <div className="map-streets"></div>
              <div className="map-pin">
                <div className="pin-dot"></div>
                <span>BBT · Av. Paulista, 1578</span>
              </div>
              <div className="map-label l1">Av. Paulista</div>
              <div className="map-label l2">R. Augusta</div>
              <div className="map-label l3">MASP</div>
              <div className="map-label l4">Parque Trianon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [tweaks, setTweak] = useTweaks(EST_DEFAULTS);
  React.useEffect(() => {
    document.body.setAttribute('data-palette', tweaks.palette);
    document.documentElement.style.setProperty('--accent', tweaks.accent);
  }, [tweaks.palette, tweaks.accent]);

  return (
    <PageChrome>
      <EstHero />
      <EstGallery />
      <EstSpecs />
      <EstLocation />

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
