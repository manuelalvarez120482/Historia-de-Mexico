const KEY = "historia-mx-progreso";
const app = document.getElementById("app");

// ---------- Almacenamiento ----------
function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || { modules: {} };
  } catch (e) {
    return { modules: {} };
  }
}

function save(p) {
  localStorage.setItem(KEY, JSON.stringify(p));
}

function modState(id) {
  return load().modules[id] || { status: "none", best: 0, date: null, attempts: [] };
}

function saveAttempt(id, score, total, passed) {
  const p = load();
  const s = p.modules[id] || { status: "none", best: 0, date: null, attempts: [] };
  const pct = Math.round((score / total) * 100);
  const now = new Date().toISOString();

  s.attempts.push({ date: now, score, total, pct });
  s.best = Math.max(s.best, pct);
  s.date = now;
  if (s.status !== "approved") s.status = passed ? "approved" : "progress";

  p.modules[id] = s;
  save(p);
}

// ---------- Navegación ----------
function go(view, arg) {
  if (view === "home") renderHome();
  else if (view === "module") renderModule(arg);
  else if (view === "game") renderGame(arg);
  else if (view === "quiz") renderQuiz(arg);
  else if (view === "progress") renderProgress();
  window.scrollTo(0, 0);
}

document.querySelectorAll("nav button").forEach(b => {
  b.onclick = () => go(b.dataset.view);
});

function statusLabel(s) {
  if (s === "approved") return "✔ Aprobado";
  if (s === "progress") return "En curso";
  return "Sin iniciar";
}

// ---------- Inicio ----------
function renderHome() {
  const approved = MODULES.filter(m => modState(m.id).status === "approved").length;
  const pct = (approved / MODULES.length) * 100;

  app.innerHTML =
    `<div class="card">
      <h2>Avance general</h2>
      <div class="bar"><span style="width:${pct}%"></span></div>
      <p>${approved} de ${MODULES.length} módulos aprobados</p>
    </div>` +
    MODULES.map(m => {
      const s = modState(m.id);
      return `<button class="card module" onclick="go('module', ${m.id})">
        <div>
          <strong>${m.title}</strong>
          <small>${m.period}</small>
        </div>
        <span class="badge ${s.status}">${statusLabel(s.status)}</span>
      </button>`;
    }).join("");
}

// ---------- Módulo ----------
function renderModule(id) {
  const m = MODULES.find(x => x.id === id);
  const s = modState(id);

  app.innerHTML =
    `<button class="link" onclick="go('home')">← Volver</button>
    <h2>${m.title}</h2>
    <p class="muted">${m.period}</p>
    ${m.lesson.map(t => `<p>${t}</p>`).join("")}
    ${m.game
      ? `<button class="primary" onclick="go('game', ${m.id})">Jugar minijuego</button>`
      : `<p class="muted">Minijuego: próximamente</p>`}
    ${m.quiz.length
      ? `<button class="primary" onclick="go('quiz', ${m.id})">Hacer prueba (${m.quiz.length} preguntas)</button>`
      : `<p class="muted">Prueba: próximamente</p>`}
    ${s.attempts.length
      ? `<p class="muted">Intentos: ${s.attempts.length}. Mejor resultado: ${s.best}%</p>`
      : ""}`;
}

// ---------- Minijuego: línea del tiempo ----------
function renderGame(id) {
  const m = MODULES.find(x => x.id === id);
  const ev = m.game.events;
  const correct = [...ev].sort((a, b) => a.year - b.year);
  const pool = [...ev].sort(() => Math.random() - 0.5);
  const done = [];
  let errors = 0;
  let msg = "";

  function draw() {
    const left = pool.filter(e => !done.includes(e));
    app.innerHTML =
      `<button class="link" onclick="go('module', ${id})">← Volver</button>
      <h2>Minijuego</h2>
      <p class="muted">Toca los eventos del más antiguo al más reciente.</p>
      <div class="card">
        ${done.length
          ? done.map(e => `<p class="done">${e.year} · ${e.text}</p>`).join("")
          : `<p class="muted">Aún no has ordenado ningún evento.</p>`}
      </div>
      ${left.map(e => `<button class="card event" data-i="${ev.indexOf(e)}">${e.text}</button>`).join("")}
      <p>${msg}</p>`;

    app.querySelectorAll(".event").forEach(b => {
      b.onclick = () => pick(Number(b.dataset.i));
    });
  }

  function pick(i) {
    const e = ev[i];
    if (e === correct[done.length]) {
      done.push(e);
      msg = "✔ Correcto.";
    } else {
      errors++;
      msg = "✘ Ese no es el siguiente evento. Intenta de nuevo.";
    }

    if (done.length === correct.length) {
      app.innerHTML =
        `<h2>¡Terminaste!</h2>
        <p>Errores: ${errors}</p>
        <button class="primary" onclick="go('module', ${id})">Volver al módulo</button>`;
      return;
    }
    draw();
  }

  draw();
}

// ---------- Prueba ----------
function renderQuiz(id) {
  const m = MODULES.find(x => x.id === id);
  const qs = m.quiz;
  let i = 0;
  let score = 0;

  function question() {
    const Q = qs[i];
    app.innerHTML =
      `<button class="link" onclick="go('module', ${id})">← Salir de la prueba</button>
      <div class="bar"><span style="width:${(i / qs.length) * 100}%"></span></div>
      <p class="muted">Pregunta ${i + 1} de ${qs.length}</p>
      <h2>${Q.q}</h2>
      ${Q.options.map((o, k) => `<button class="option" data-k="${k}">${o}</button>`).join("")}
      <div id="exp"></div>`;

    app.querySelectorAll(".option").forEach(b => {
      b.onclick = () => answer(Number(b.dataset.k));
    });
  }

  function answer(k) {
    const Q = qs[i];
    const ok = k === Q.answer;
    if (ok) score++;

    app.querySelectorAll(".option").forEach((b, j) => {
      b.disabled = true;
      if (j === Q.answer) b.classList.add("ok");
      else if (j === k) b.classList.add("bad");
    });

    document.getElementById("exp").innerHTML =
      `<p class="explain">${ok ? "✔ Correcto. " : "✘ Incorrecto. "}${Q.explain}</p>
      <button class="primary" id="next">${i < qs.length - 1 ? "Siguiente" : "Ver resultado"}</button>`;

    document.getElementById("next").onclick = () => {
      i++;
      if (i < qs.length) question();
      else finish();
    };
  }

  function finish() {
    const need = Math.ceil(qs.length * 0.7);
    const passed = score >= need;
    saveAttempt(id, score, qs.length, passed);

    app.innerHTML =
      `<h2>Resultado</h2>
      <p class="big">${score} de ${qs.length}</p>
      <p>${passed
        ? "✔ ¡Aprobaste este módulo!"
        : `Necesitas al menos ${need} aciertos para aprobar. Puedes repetir la prueba.`}</p>
      <button class="primary" onclick="go('module', ${id})">Volver al módulo</button>`;
  }

  question();
}

// ---------- Avance general ----------
function renderProgress() {
  const mods = MODULES.map(m => ({ m, s: modState(m.id) }));
  const approved = mods.filter(x => x.s.status === "approved").length;
  const all = mods.flatMap(x => x.s.attempts.map(a => a.pct));
  const avg = all.length
    ? Math.round(all.reduce((a, b) => a + b, 0) / all.length) + "%"
    : "—";

  app.innerHTML =
    `<h2>Avance general</h2>
    <div class="card">
      <p>Módulos aprobados: <strong>${approved} de ${MODULES.length}</strong></p>
      <p>Promedio de aciertos: <strong>${avg}</strong></p>
    </div>
    <h3>Por módulo</h3>
    ${mods.map(({ m, s }) =>
      `<div class="card">
        <strong>${m.title}</strong>
        <p class="muted">${s.date
          ? "Última prueba: " + new Date(s.date).toLocaleDateString("es-MX")
          : "Sin pruebas"}</p>
      </div>`).join("")}
    <button class="danger" onclick="resetProgress()">Reiniciar progreso</button>`;
}

function resetProgress() {
  if (confirm("¿Seguro que quieres borrar todo el avance?")) {
    localStorage.removeItem(KEY);
    go("progress");
  }
}

// ---------- Inicio de la app ----------
go("home");
