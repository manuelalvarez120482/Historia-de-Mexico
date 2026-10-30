// Minijuegos adicionales: sopa de letras, crucigrama y foto-con-nombre.
// Las palabras van en MAYÚSCULAS, sin acentos, sin espacios ni Ñ.

// ---------- Datos: sopa de letras (nombres de personajes) ----------
const SOPA = {
  1: [
    { w: "DIAZ", clue: "Presidente que gobernó cerca de 30 años" },
    { w: "SIERRA", clue: "Justo ____, impulsó la Universidad Nacional en 1910" },
    { w: "LIMANTOUR", clue: "Secretario de Hacienda y líder de los científicos" },
    { w: "MAGON", clue: "Ricardo Flores ____, periodista de Regeneración" },
    { w: "MADERO", clue: "Autor del Plan de San Luis" },
    { w: "CREELMAN", clue: "Periodista estadounidense que entrevistó a Díaz en 1908" }
  ],
  2: [
    { w: "ZAPATA", clue: "Líder agrarista del Plan de Ayala" },
    { w: "VILLA", clue: "Jefe de la División del Norte" },
    { w: "CARRANZA", clue: "Primer Jefe del Ejército Constitucionalista" },
    { w: "OBREGON", clue: "Derrotó a Villa en la batalla de Celaya" },
    { w: "HUERTA", clue: "General que dio el golpe contra Madero en 1913" },
    { w: "MADERO", clue: "Presidente asesinado en febrero de 1913" },
    { w: "OROZCO", clue: "Pascual ____, se rebeló en Chihuahua en 1912" }
  ],
  3: [
    { w: "VASCONCELOS", clue: "Primer secretario de Educación Pública" },
    { w: "CALLES", clue: "Plutarco Elías ____, el Jefe Máximo" },
    { w: "CARDENAS", clue: "Presidente que expropió el petróleo en 1938" },
    { w: "RIVERA", clue: "Diego ____, muralista de la SEP" },
    { w: "LOMBARDO", clue: "Vicente ____ Toledano, fundador de la CTM" },
    { w: "OBREGON", clue: "Presidente de 1920 a 1924" },
    { w: "SIQUEIROS", clue: "David Alfaro ____, muralista" }
  ],
  4: [
    { w: "ALEMAN", clue: "Presidente de 1946 a 1952, impulsó la Ciudad Universitaria" },
    { w: "CAMACHO", clue: "Manuel Ávila ____, presidente cuando se creó el IMSS" },
    { w: "CORTINES", clue: "Adolfo Ruiz ____, presidente cuando votaron las mujeres en 1953" },
    { w: "MATEOS", clue: "Adolfo López ____, nacionalizó la industria eléctrica" }
  ],
  5: [
    { w: "ORDAZ", clue: "Gustavo Díaz ____, presidente en 1968" },
    { w: "ECHEVERRIA", clue: "Luis ____, presidente de 1970 a 1976" },
    { w: "CABANAS", clue: "Lucio ____, guerrillero del Partido de los Pobres" },
    { w: "VAZQUEZ", clue: "Genaro ____ Rojas, guerrillero guerrerense" },
    { w: "PONIATOWSKA", clue: "Autora de La noche de Tlatelolco" }
  ],
  6: [
    { w: "PORTILLO", clue: "José López ____, nacionalizó la banca en 1982" },
    { w: "MADRID", clue: "Miguel de la ____, presidente de 1982 a 1988" },
    { w: "SALINAS", clue: "Carlos ____ de Gortari, firmó el TLCAN" },
    { w: "CARDENAS", clue: "Cuauhtémoc ____, candidato del FDN en 1988" },
    { w: "COLOSIO", clue: "Candidato del PRI asesinado en 1994" },
    { w: "ZEDILLO", clue: "Presidente durante el error de diciembre" }
  ],
  7: [
    { w: "FOX", clue: "Ganó la presidencia el 2 de julio de 2000" },
    { w: "LABASTIDA", clue: "Candidato del PRI derrotado en 2000" },
    { w: "CALDERON", clue: "Presidente de 2006 a 2012" },
    { w: "OBRADOR", clue: "Andrés Manuel López ____, candidato de la izquierda en 2006" },
    { w: "ZEDILLO", clue: "Presidente saliente que reconoció el triunfo de Fox" }
  ],
  8: [
    { w: "NIETO", clue: "Enrique Peña ____, presidente de 2012 a 2018" },
    { w: "OBRADOR", clue: "Andrés Manuel López ____, ganó la elección de 2018" },
    { w: "MEADE", clue: "Candidato del PRI en 2018" },
    { w: "ANAYA", clue: "Candidato de la coalición PAN-PRD-MC en 2018" },
    { w: "GUZMAN", clue: "Joaquín \"El Chapo\" ____, escapó del Altiplano en 2015" }
  ]
};

// ---------- Datos: crucigrama ----------
const CRUCI = {
  1: [
    { w: "TUXTEPEC", clue: "Plan de 1876 que llevó a Díaz al poder" },
    { w: "FERROCARRILES", clue: "Vías que conectaron el país con inversión extranjera" },
    { w: "CIENTIFICOS", clue: "Asesores positivistas de Díaz" },
    { w: "CANANEA", clue: "Huelga minera de 1906 en Sonora" },
    { w: "REELECCION", clue: "Principio que Madero combatió en 1910" },
    { w: "POSITIVISMO", clue: "Corriente del \"orden y progreso\"" },
    { w: "HACIENDAS", clue: "Grandes propiedades que absorbieron tierras comunales" },
    { w: "RURALES", clue: "Policía que vigilaba caminos y pueblos" },
    { w: "SANLUIS", clue: "Plan de 1910 de Madero (nombre de la ciudad)" }
  ],
  2: [
    { w: "AYALA", clue: "Plan de Zapata de 1911" },
    { w: "GUADALUPE", clue: "Plan de Carranza de 1913" },
    { w: "CELAYA", clue: "Batalla de 1915 donde Obregón derrotó a Villa" },
    { w: "CONSTITUCION", clue: "Se promulgó en Querétaro en 1917" },
    { w: "QUERETARO", clue: "Ciudad sede del Congreso Constituyente" },
    { w: "CHINAMECA", clue: "Hacienda donde fue asesinado Zapata" },
    { w: "COLUMBUS", clue: "Pueblo de Nuevo México atacado por Villa en 1916" },
    { w: "CONVENCION", clue: "____ de Aguascalientes, 1914" },
    { w: "AGUAPRIETA", clue: "Plan de 1920 contra Carranza" },
    { w: "DECENA", clue: "____ Trágica, febrero de 1913" }
  ],
  3: [
    { w: "SEP", clue: "Secretaría creada en 1921" },
    { w: "CRISTERA", clue: "Guerra de 1926 a 1929" },
    { w: "EXPROPIACION", clue: "Decreto de Cárdenas sobre el petróleo en 1938" },
    { w: "PNR", clue: "Partido fundado por Calles en 1929" },
    { w: "MAXIMATO", clue: "Periodo de 1928 a 1934" },
    { w: "CTM", clue: "Confederación obrera fundada en 1936" },
    { w: "EJIDO", clue: "Tierra repartida en la reforma agraria" },
    { w: "PEMEX", clue: "Empresa creada en 1938" },
    { w: "MURALISMO", clue: "Movimiento artístico de Rivera, Orozco y Siqueiros" },
    { w: "MISIONES", clue: "____ culturales que llevaron maestros al campo" }
  ],
  4: [
    { w: "BRACERO", clue: "Programa de trabajadores temporales en Estados Unidos" },
    { w: "IMSS", clue: "Instituto de seguridad social creado en 1943" },
    { w: "DEVALUACION", clue: "Ajuste del peso en 1954" },
    { w: "ESTABILIZADOR", clue: "Desarrollo ____ (1954–1970)" },
    { w: "CFE", clue: "Comisión que quedó a cargo de la electricidad" },
    { w: "LIBROS", clue: "____ de texto gratuitos, 1959" },
    { w: "URBANIZACION", clue: "Crecimiento de las ciudades por la migración del campo" },
    { w: "VOTO", clue: "Derecho que las mujeres obtuvieron en 1953" },
    { w: "UNAM", clue: "Universidad que construyó la Ciudad Universitaria" },
    { w: "SUSTITUCION", clue: "Industrialización por ____ de importaciones" }
  ],
  5: [
    { w: "TLATELOLCO", clue: "Plaza de la masacre del 2 de octubre de 1968" },
    { w: "OLIMPIA", clue: "Batallón que participó en la represión" },
    { w: "HALCONES", clue: "Grupo que atacó la marcha de 1971" },
    { w: "DFS", clue: "Dirección Federal de Seguridad (siglas)" },
    { w: "FEMOSPP", clue: "Fiscalía especial creada en 2001 (siglas)" },
    { w: "POLITECNICO", clue: "Instituto cuyos estudiantes iniciaron las protestas" },
    { w: "GUERRILLA", clue: "Lucha armada de Lucio Cabañas" },
    { w: "OLIMPICOS", clue: "Juegos de octubre de 1968" },
    { w: "UNAM", clue: "Universidad ocupada por el ejército en 1968" },
    { w: "ZOCALO", clue: "Plaza ocupada por el ejército en julio de 1968" }
  ],
  6: [
    { w: "TLCAN", clue: "Tratado que entró en vigor en 1994 (siglas)" },
    { w: "EZLN", clue: "Ejército que se levantó en Chiapas (siglas)" },
    { w: "GATT", clue: "Acuerdo comercial al que México entró en 1986" },
    { w: "TELMEX", clue: "Empresa telefónica privatizada en 1990" },
    { w: "MORATORIA", clue: "Suspensión del pago de la deuda en 1982" },
    { w: "IFE", clue: "Instituto electoral creado en 1990 (siglas)" },
    { w: "DICIEMBRE", clue: "Error de ____, 1994" },
    { w: "SOLIDARIDAD", clue: "Programa social de Salinas" },
    { w: "CHIAPAS", clue: "Estado del levantamiento zapatista" },
    { w: "SISMO", clue: "Desastre del 19 de septiembre de 1985" }
  ],
  7: [
    { w: "ALTERNANCIA", clue: "Cambio de partido en el gobierno en el año 2000" },
    { w: "TRANSPARENCIA", clue: "Ley de 2002 sobre acceso a la información" },
    { w: "PLANTON", clue: "Protesta en Reforma tras la elección de 2006" },
    { w: "REFORMA", clue: "Avenida del plantón de 2006" },
    { w: "IFE", clue: "Instituto que organizó las elecciones hasta 2014 (siglas)" },
    { w: "PAN", clue: "Partido de Fox y Calderón (siglas)" },
    { w: "DEMOCRACIA", clue: "Sistema que consolidó la transición" },
    { w: "ELECTORAL", clue: "Reforma de 2007-2008 (tipo de reforma)" },
    { w: "NARCOTRAFICO", clue: "Problema que motivó la guerra de Calderón" }
  ],
  8: [
    { w: "PACTO", clue: "____ por México, 2012" },
    { w: "AYOTZINAPA", clue: "Escuela normal de los 43 estudiantes desaparecidos" },
    { w: "IGUALA", clue: "Ciudad de Guerrero donde ocurrieron los hechos de 2014" },
    { w: "INE", clue: "Instituto que sustituyó al IFE en 2014 (siglas)" },
    { w: "ALTIPLANO", clue: "Penal del que escapó El Chapo en 2015" },
    { w: "CASABLANCA", clue: "Casa ____, escándalo de 2014" },
    { w: "MORENA", clue: "Partido que llevó a López Obrador a la presidencia" },
    { w: "REFORMAS", clue: "____ estructurales del sexenio" },
    { w: "ENERGETICA", clue: "Reforma de 2013-2014 al sector petrolero" },
    { w: "TMEC", clue: "Tratado que sustituyó al TLCAN (siglas)" }
  ]
};

// ---------- Utilidades ----------
function gpShuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function gpRand(n) { return Math.floor(Math.random() * n); }

// Botones de minijuego que se muestran en la página del módulo
function gameButtonsHTML(m) {
  const g = getGame(m);
  const btns = [];
  if (g) {
    const title = g.type === "match" ? "Relaciona" : "Línea del tiempo";
    btns.push(`<button class="primary" onclick="go('game', ${m.id}, 'base')">Jugar: ${title}</button>`);
  }
  if (SOPA[m.id]) btns.push(`<button class="primary" onclick="go('game', ${m.id}, 'sopa')">Jugar: Sopa de letras</button>`);
  if (CRUCI[m.id]) btns.push(`<button class="primary" onclick="go('game', ${m.id}, 'cruci')">Jugar: Crucigrama</button>`);
  return `<h3>Minijuegos</h3>
    <div class="gamebtns">${btns.join("")}<span id="fotoSlot" data-m="${m.id}"></span></div>`;
}

const photoCache = new Map();
function photoExists(name) {
  const url = photoURL(name);
  if (!photoCache.has(url)) {
    photoCache.set(url, new Promise(res => {
      const im = new Image();
      im.onload = () => res(true);
      im.onerror = () => res(false);
      im.src = url;
    }));
  }
  return photoCache.get(url);
}

// El botón de foto-con-nombre aparece solo si hay al menos 2 fotos del módulo
async function addFotoButton(id) {
  const list = PEOPLE[id] || [];
  const ok = await Promise.all(list.map(p => photoExists(p.name)));
  const slot = document.getElementById("fotoSlot");
  if (slot && slot.dataset.m === String(id) && ok.filter(Boolean).length >= 2) {
    slot.innerHTML = `<button class="primary" onclick="go('game', ${id}, 'foto')">Jugar: Foto y nombre</button>`;
  }
}

// ================= SOPA DE LETRAS =================
const DIRS8 = [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]];

function buildSopa(words, size) {
  const letters = "ABCDEFGHIJLMNOPRSTUVZ";
  for (let attempt = 0; attempt < 200; attempt++) {
    const grid = Array.from({ length: size }, () => Array(size).fill(""));
    const placements = [];
    let ok = true;
    for (const w of [...words].sort((a, b) => b.length - a.length)) {
      let placed = false;
      for (let t = 0; t < 300 && !placed; t++) {
        const [dr, dc] = DIRS8[gpRand(8)];
        const r0 = gpRand(size), c0 = gpRand(size);
        const r1 = r0 + dr * (w.length - 1), c1 = c0 + dc * (w.length - 1);
        if (r1 < 0 || r1 >= size || c1 < 0 || c1 >= size) continue;
        let fits = true;
        for (let k = 0; k < w.length; k++) {
          const ch = grid[r0 + dr * k][c0 + dc * k];
          if (ch && ch !== w[k]) { fits = false; break; }
        }
        if (!fits) continue;
        for (let k = 0; k < w.length; k++) grid[r0 + dr * k][c0 + dc * k] = w[k];
        placements.push({ w, r: r0, c: c0, dr, dc });
        placed = true;
      }
      if (!placed) { ok = false; break; }
    }
    if (ok) {
      for (let r = 0; r < size; r++)
        for (let c = 0; c < size; c++)
          if (!grid[r][c]) grid[r][c] = letters[gpRand(letters.length)];
      return { grid, placements, size };
    }
  }
  return null;
}

function renderSopa(id) {
  const items = SOPA[id];
  const size = Math.min(13, Math.max(10, ...items.map(x => x.w.length)));
  const puz = buildSopa(items.map(x => x.w), size);
  window.__sopa = puz;
  const found = new Set();
  const foundCells = new Set();
  let start = null;
  let errors = 0;
  let msg = "";
  const cs = Math.max(22, Math.min(34, Math.floor((Math.min(window.innerWidth, 640) - 48) / size)));

  function draw() {
    app.innerHTML =
      `<button class="link" onclick="go('module', ${id})">← Volver</button>
      <h2>Sopa de letras</h2>
      <p class="muted">Toca la primera y la última letra de cada personaje. Pueden estar en cualquier dirección.</p>
      <div class="sgrid" style="grid-template-columns:repeat(${size}, ${cs}px); grid-auto-rows:${cs}px; font-size:${Math.round(cs * 0.55)}px">
        ${puz.grid.map((row, r) => row.map((ch, c) => {
          const k = r + "," + c;
          const cls = foundCells.has(k) ? "found" : (start && start[0] === r && start[1] === c ? "start" : "");
          return `<div class="sc ${cls}" data-r="${r}" data-c="${c}">${ch}</div>`;
        }).join("")).join("")}
      </div>
      <p>${msg}</p>
      <ul class="cluelist">
        ${items.map(it => `<li class="${found.has(it.w) ? "found" : ""}">${found.has(it.w) ? "✔ <strong>" + it.w + "</strong>" : "• " + it.clue + " <span class=\"muted\">(" + it.w.length + " letras)</span>"}</li>`).join("")}
      </ul>`;
    app.querySelectorAll(".sc").forEach(el => {
      el.onclick = () => tap(Number(el.dataset.r), Number(el.dataset.c));
    });
  }

  function tap(r, c) {
    msg = "";
    if (!start) { start = [r, c]; draw(); return; }
    if (start[0] === r && start[1] === c) { start = null; draw(); return; }

    const dr = r - start[0], dc = c - start[1];
    const n = Math.max(Math.abs(dr), Math.abs(dc));
    let hit = null;
    if (dr === 0 || dc === 0 || Math.abs(dr) === Math.abs(dc)) {
      const sr = Math.sign(dr), sc = Math.sign(dc);
      let str = "";
      const cells = [];
      for (let k = 0; k <= n; k++) {
        const rr = start[0] + sr * k, cc = start[1] + sc * k;
        str += puz.grid[rr][cc];
        cells.push(rr + "," + cc);
      }
      const rev = str.split("").reverse().join("");
      hit = items.find(it => !found.has(it.w) && (it.w === str || it.w === rev));
      if (hit) {
        found.add(hit.w);
        cells.forEach(k => foundCells.add(k));
        msg = "✔ ¡Encontraste " + hit.w + "!";
      }
    }
    if (!hit) { errors++; msg = "✘ Ahí no hay ningún personaje. Intenta de nuevo."; }
    start = null;

    if (found.size === items.length) {
      app.innerHTML =
        `<h2>¡Terminaste!</h2>
        <p>Encontraste los ${items.length} personajes. Errores: ${errors}</p>
        <button class="primary" onclick="go('game', ${id}, 'sopa')">Repetir minijuego</button>
        <button class="primary" onclick="go('module', ${id})">Volver al módulo</button>`;
      return;
    }
    draw();
  }

  draw();
}

// ================= CRUCIGRAMA =================
function buildCruci(items, maxSize) {
  let best = null;
  for (let attempt = 0; attempt < 80; attempt++) {
    const sorted = [...items].sort((a, b) => b.w.length - a.w.length);
    const first = sorted[0];
    const rest = gpShuffle(sorted.slice(1)).sort((a, b) => (b.w.length - a.w.length) + (Math.random() * 6 - 3));
    const cells = new Map(); // "r,c" -> { ch, dirs:Set }
    const placed = [];

    function put(it, r0, c0, dir) {
      const dr = dir ? 1 : 0, dc = dir ? 0 : 1;
      for (let k = 0; k < it.w.length; k++) {
        const key = (r0 + dr * k) + "," + (c0 + dc * k);
        const cell = cells.get(key) || { ch: it.w[k], dirs: new Set() };
        cell.dirs.add(dir);
        cells.set(key, cell);
      }
      placed.push({ ...it, r: r0, c: c0, dir });
    }

    function bbox(extra) {
      let r1 = Infinity, r2 = -Infinity, c1 = Infinity, c2 = -Infinity;
      for (const k of cells.keys()) {
        const [r, c] = k.split(",").map(Number);
        r1 = Math.min(r1, r); r2 = Math.max(r2, r); c1 = Math.min(c1, c); c2 = Math.max(c2, c);
      }
      if (extra) {
        r1 = Math.min(r1, extra[0]); r2 = Math.max(r2, extra[1]);
        c1 = Math.min(c1, extra[2]); c2 = Math.max(c2, extra[3]);
      }
      return { h: r2 - r1 + 1, w: c2 - c1 + 1 };
    }

    function evaluate(it, r0, c0, dir) {
      const dr = dir ? 1 : 0, dc = dir ? 0 : 1;
      const len = it.w.length;
      if (cells.has((r0 - dr) + "," + (c0 - dc))) return null;
      if (cells.has((r0 + dr * len) + "," + (c0 + dc * len))) return null;
      let cross = 0;
      for (let k = 0; k < len; k++) {
        const r = r0 + dr * k, c = c0 + dc * k;
        const ex = cells.get(r + "," + c);
        if (ex) {
          if (ex.ch !== it.w[k] || ex.dirs.has(dir)) return null;
          cross++;
        } else {
          if (cells.has((r + dc) + "," + (c + dr))) return null;
          if (cells.has((r - dc) + "," + (c - dr))) return null;
        }
      }
      if (cross === 0) return null;
      const er = r0 + dr * (len - 1), ec = c0 + dc * (len - 1);
      const b = bbox([Math.min(r0, er), Math.max(r0, er), Math.min(c0, ec), Math.max(c0, ec)]);
      if (b.h > maxSize || b.w > maxSize) return null;
      return { cross, area: b.h * b.w };
    }

    function tryPlace(it) {
      let bestC = null;
      for (let i = 0; i < it.w.length; i++) {
        for (const [key, cell] of cells) {
          if (cell.ch !== it.w[i]) continue;
          const [r, c] = key.split(",").map(Number);
          for (const dir of [0, 1]) {
            if (cell.dirs.has(dir)) continue;
            const r0 = dir ? r - i : r, c0 = dir ? c : c - i;
            const ev = evaluate(it, r0, c0, dir);
            if (!ev) continue;
            const score = ev.cross * 100 - ev.area + Math.random();
            if (!bestC || score > bestC.score) bestC = { r0, c0, dir, score };
          }
        }
      }
      if (bestC) { put(it, bestC.r0, bestC.c0, bestC.dir); return true; }
      return false;
    }

    put(first, 0, 0, 0);
    let pending = rest;
    let progress = true;
    while (progress && pending.length) {
      progress = false;
      const next = [];
      for (const it of pending) {
        if (tryPlace(it)) progress = true; else next.push(it);
      }
      pending = next;
    }

    const b = bbox();
    const cand = { placed: placed.slice(), area: b.h * b.w };
    if (!best || cand.placed.length > best.placed.length ||
        (cand.placed.length === best.placed.length && cand.area < best.area)) best = cand;
    if (best.placed.length === items.length && attempt > 20) break;
  }

  // Normalizar coordenadas y numerar
  let minR = Infinity, minC = Infinity, maxR = -Infinity, maxC = -Infinity;
  for (const p of best.placed) {
    const er = p.r + (p.dir ? p.w.length - 1 : 0), ec = p.c + (p.dir ? 0 : p.w.length - 1);
    minR = Math.min(minR, p.r); minC = Math.min(minC, p.c);
    maxR = Math.max(maxR, er); maxC = Math.max(maxC, ec);
  }
  const words = best.placed.map(p => ({ ...p, r: p.r - minR, c: p.c - minC }));
  const H = maxR - minR + 1, W = maxC - minC + 1;
  const letters = new Map();
  for (const p of words) {
    for (let k = 0; k < p.w.length; k++) {
      const key = (p.r + (p.dir ? k : 0)) + "," + (p.c + (p.dir ? 0 : k));
      letters.set(key, p.w[k]);
    }
  }
  const starts = [...new Set(words.map(p => p.r + "," + p.c))]
    .map(k => k.split(",").map(Number))
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const numOf = new Map();
  starts.forEach((s, i) => numOf.set(s[0] + "," + s[1], i + 1));
  words.forEach(p => { p.n = numOf.get(p.r + "," + p.c); });
  return { words, letters, numOf, H, W, total: items.length };
}

function renderCruci(id) {
  const puz = buildCruci(CRUCI[id], 15);
  window.__cruci = puz;
  const cs = Math.max(22, Math.min(34, Math.floor((Math.min(window.innerWidth, 640) - 40) / puz.W)));
  const across = puz.words.filter(p => !p.dir).sort((a, b) => a.n - b.n);
  const down = puz.words.filter(p => p.dir).sort((a, b) => a.n - b.n);

  // A qué palabra horizontal / vertical pertenece cada casilla
  const acrossOf = new Map(), downOf = new Map();
  for (const p of puz.words) {
    for (let k = 0; k < p.w.length; k++) {
      const key = (p.r + (p.dir ? k : 0)) + "," + (p.c + (p.dir ? 0 : k));
      (p.dir ? downOf : acrossOf).set(key, p.n + (p.dir ? "d" : "a"));
    }
  }

  let cellsHTML = "";
  for (let r = 0; r < puz.H; r++) {
    for (let c = 0; c < puz.W; c++) {
      const key = r + "," + c;
      if (puz.letters.has(key)) {
        const n = puz.numOf.get(key);
        cellsHTML += `<div class="cc">${n ? `<span class="cn">${n}</span>` : ""}<input maxlength="1" autocomplete="off" autocapitalize="characters" inputmode="text" data-r="${r}" data-c="${c}"></div>`;
      } else {
        cellsHTML += `<div class="cc blk"></div>`;
      }
    }
  }

  app.innerHTML =
    `<button class="link" onclick="go('module', ${id})">← Volver</button>
    <h2>Crucigrama</h2>
    <p class="muted">Escribe una letra en cada casilla. Sin acentos.</p>
    <div class="cx" id="cx" style="grid-template-columns:repeat(${puz.W}, ${cs}px); grid-auto-rows:${cs}px">${cellsHTML}</div>
    <p id="cmsg"></p>
    <button class="primary" id="ccheck">Comprobar</button>
    <button class="primary" id="creveal">Ver respuestas</button>
    <h3>Horizontales</h3>
    <ul class="cluelist">${across.map(p => `<li><strong>${p.n}.</strong> ${p.clue} <span class="muted">(${p.w.length})</span></li>`).join("")}</ul>
    <h3>Verticales</h3>
    <ul class="cluelist">${down.map(p => `<li><strong>${p.n}.</strong> ${p.clue} <span class="muted">(${p.w.length})</span></li>`).join("")}</ul>`;

  const root = document.getElementById("cx");
  const inputAt = (r, c) => root.querySelector(`input[data-r="${r}"][data-c="${c}"]`);

  root.addEventListener("input", e => {
    const el = e.target;
    const v = (el.value || "").toUpperCase().replace(/Ñ/g, "N").replace(/[^A-Z]/g, "");
    el.value = v.slice(-1);
    el.classList.remove("ok", "bad");
    if (!el.value) return;
    const r = Number(el.dataset.r), c = Number(el.dataset.c);
    const here = r + "," + c;
    const right = r + "," + (c + 1), below = (r + 1) + "," + c;
    if (acrossOf.get(here) && acrossOf.get(here) === acrossOf.get(right)) inputAt(r, c + 1).focus();
    else if (downOf.get(here) && downOf.get(here) === downOf.get(below)) inputAt(r + 1, c).focus();
  });

  root.addEventListener("keydown", e => {
    if (e.key !== "Backspace" || e.target.value) return;
    const r = Number(e.target.dataset.r), c = Number(e.target.dataset.c);
    const here = r + "," + c, left = r + "," + (c - 1), up = (r - 1) + "," + c;
    if (acrossOf.get(here) && acrossOf.get(here) === acrossOf.get(left)) inputAt(r, c - 1).focus();
    else if (downOf.get(here) && downOf.get(here) === downOf.get(up)) inputAt(r - 1, c).focus();
  });

  document.getElementById("ccheck").onclick = () => {
    let ok = 0, bad = 0, empty = 0;
    root.querySelectorAll("input").forEach(el => {
      const key = el.dataset.r + "," + el.dataset.c;
      el.classList.remove("ok", "bad");
      if (!el.value) { empty++; return; }
      if (el.value === puz.letters.get(key)) { ok++; el.classList.add("ok"); }
      else { bad++; el.classList.add("bad"); }
    });
    const msg = document.getElementById("cmsg");
    if (!bad && !empty) {
      app.innerHTML =
        `<h2>¡Terminaste!</h2>
        <p>Completaste el crucigrama.</p>
        <button class="primary" onclick="go('game', ${id}, 'cruci')">Repetir minijuego</button>
        <button class="primary" onclick="go('module', ${id})">Volver al módulo</button>`;
    } else {
      msg.textContent = `Correctas: ${ok}. Incorrectas (en rojo): ${bad}. Vacías: ${empty}.`;
    }
  };

  document.getElementById("creveal").onclick = () => {
    root.querySelectorAll("input").forEach(el => {
      el.value = puz.letters.get(el.dataset.r + "," + el.dataset.c);
      el.classList.remove("bad");
      el.classList.add("ok");
    });
    document.getElementById("cmsg").textContent = "Respuestas reveladas. Intenta de nuevo para practicar.";
  };
}

// ================= FOTO Y NOMBRE =================
async function renderFoto(id) {
  app.innerHTML = `<button class="link" onclick="go('module', ${id})">← Volver</button><p class="muted">Cargando fotos…</p>`;
  const list = PEOPLE[id] || [];
  const flags = await Promise.all(list.map(p => photoExists(p.name)));
  const avail = list.filter((_, i) => flags[i]);

  if (avail.length < 2) {
    app.innerHTML =
      `<button class="link" onclick="go('module', ${id})">← Volver</button>
      <h2>Foto y nombre</h2>
      <p>Este juego necesita al menos 2 fotos de personajes de este módulo en la carpeta <strong>fotos</strong>.</p>`;
    return;
  }

  const pick = gpShuffle(avail).slice(0, 5);
  const rightOrder = gpShuffle(pick.map((_, k) => k));
  const solved = new Set();
  let sel = null, errors = 0, msg = "";

  function draw() {
    app.innerHTML =
      `<button class="link" onclick="go('module', ${id})">← Volver</button>
      <h2>Foto y nombre</h2>
      <p class="muted">Toca una foto y después el nombre del personaje.</p>
      <div class="pairs">
        <div>
          ${pick.map((p, i) => `<button class="option photo ${solved.has(i) ? "done-pair" : ""} ${sel === i ? "sel" : ""}" data-l="${i}" ${solved.has(i) ? "disabled" : ""}>
            <img class="pimg" src="${photoURL(p.name)}" alt="Foto de un personaje histórico">
          </button>`).join("")}
        </div>
        <div>
          ${rightOrder.map(k => `<button class="option ${solved.has(k) ? "done-pair" : ""}" data-r="${k}" ${solved.has(k) ? "disabled" : ""}>${pick[k].name}</button>`).join("")}
        </div>
      </div>
      <p>${msg}</p>`;
    app.querySelectorAll("[data-l]").forEach(b => { b.onclick = () => { sel = Number(b.dataset.l); msg = ""; draw(); }; });
    app.querySelectorAll("[data-r]").forEach(b => { b.onclick = () => choose(Number(b.dataset.r)); });
  }

  function choose(k) {
    if (sel === null) { msg = "Primero elige una foto."; draw(); return; }
    if (sel === k) { solved.add(k); msg = "✔ Correcto. " + pick[k].fact; }
    else { errors++; msg = "✘ Ese no es. Intenta de nuevo."; }
    sel = null;
    if (solved.size === pick.length) {
      app.innerHTML =
        `<h2>¡Terminaste!</h2>
        <p>Errores: ${errors}</p>
        <button class="primary" onclick="go('game', ${id}, 'foto')">Repetir minijuego</button>
        <button class="primary" onclick="go('module', ${id})">Volver al módulo</button>`;
      return;
    }
    draw();
  }

  draw();
}
