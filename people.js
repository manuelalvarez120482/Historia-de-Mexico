// Personajes clave de cada módulo (sin fotografías).
// name: nombre; years: fechas; role: cargo o papel; fact: dato histórico.

const PEOPLE = {
  1: [
    { name: "Porfirio Díaz", years: "1830 – 1915", role: "Presidente de México",
      fact: "Gobernó cerca de 30 años (1876–1880 y 1884–1911). Renunció en 1911 y murió en el exilio, en París." },
    { name: "Justo Sierra", years: "1848 – 1912", role: "Ministro de Instrucción Pública",
      fact: "Impulsó la fundación de la Universidad Nacional en 1910, antecedente de la UNAM." },
    { name: "José Yves Limantour", years: "1854 – 1935", role: "Secretario de Hacienda",
      fact: "Ordenó las finanzas del régimen y fue la figura más influyente del grupo de los científicos." },
    { name: "Ricardo Flores Magón", years: "1873 – 1922", role: "Periodista y líder del Partido Liberal Mexicano",
      fact: "Desde el exilio publicó el periódico Regeneración. Murió preso en Estados Unidos." },
    { name: "Francisco I. Madero", years: "1873 – 1913", role: "Líder antirreeleccionista",
      fact: "Autor de La sucesión presidencial en 1910 y del Plan de San Luis, que inició la Revolución." }
  ],
  2: [
    { name: "Francisco I. Madero", years: "1873 – 1913", role: "Presidente de México, 1911–1913",
      fact: "Fue asesinado el 22 de febrero de 1913, tras la Decena Trágica, junto con el vicepresidente Pino Suárez." },
    { name: "Emiliano Zapata", years: "1879 – 1919", role: "Líder agrarista de Morelos",
      fact: "Proclamó el Plan de Ayala (1911) y encabezó el Ejército Libertador del Sur. Fue asesinado en Chinameca." },
    { name: "Francisco Villa", years: "1878 – 1923", role: "Jefe de la División del Norte",
      fact: "La toma de Zacatecas (1914) fue decisiva contra Huerta. Murió asesinado en Parral, Chihuahua." },
    { name: "Venustiano Carranza", years: "1859 – 1920", role: "Primer Jefe del Ejército Constitucionalista",
      fact: "Promulgó la Constitución de 1917. Murió en Tlaxcalantongo, Puebla, en 1920." },
    { name: "Álvaro Obregón", years: "1880 – 1928", role: "General sonorense",
      fact: "Derrotó a Villa en la batalla de Celaya (1915). Fue asesinado en 1928, después de ser reelecto." },
    { name: "Victoriano Huerta", years: "1850 – 1916", role: "General y presidente de facto",
      fact: "Encabezó el golpe contra Madero en 1913 y gobernó como dictador hasta julio de 1914." }
  ],
  3: [
    { name: "Álvaro Obregón", years: "1880 – 1928", role: "Presidente, 1920–1924",
      fact: "Pacificó el país con acuerdos entre militares, obreros y campesinos, y apoyó el proyecto educativo de Vasconcelos." },
    { name: "José Vasconcelos", years: "1882 – 1959", role: "Primer secretario de Educación Pública",
      fact: "Impulsó las misiones culturales, las bibliotecas y el muralismo en edificios públicos." },
    { name: "Plutarco Elías Calles", years: "1877 – 1945", role: "Presidente, 1924–1928, y Jefe Máximo",
      fact: "Fundó el PNR en 1929. Su gobierno enfrentó la Guerra Cristera." },
    { name: "Lázaro Cárdenas", years: "1895 – 1970", role: "Presidente, 1934–1940",
      fact: "Decretó la expropiación petrolera el 18 de marzo de 1938 y repartió cerca de 18 millones de hectáreas." },
    { name: "Diego Rivera", years: "1886 – 1957", role: "Muralista",
      fact: "Pintó los murales de la SEP, con escenas del trabajo, el campo y la historia de México." },
    { name: "Vicente Lombardo Toledano", years: "1894 – 1968", role: "Líder obrero",
      fact: "Fundó la Confederación de Trabajadores de México (CTM) en 1936." }
  ],
  4: [
    { name: "Manuel Ávila Camacho", years: "1897 – 1955", role: "Presidente, 1940–1946",
      fact: "Durante su gobierno se creó el IMSS (1943) y México participó en la Segunda Guerra Mundial." },
    { name: "Miguel Alemán Valdés", years: "1900 – 1983", role: "Presidente, 1946–1952",
      fact: "Impulsó la industrialización y la construcción de la Ciudad Universitaria." },
    { name: "Adolfo Ruiz Cortines", years: "1889 – 1973", role: "Presidente, 1952–1958",
      fact: "En 1953 se reconoció el voto de las mujeres en elecciones federales. En 1954 se devaluó el peso." },
    { name: "Adolfo López Mateos", years: "1909 – 1969", role: "Presidente, 1958–1964",
      fact: "Nacionalizó la industria eléctrica (1960) y se entregaron los primeros libros de texto gratuitos (1959)." }
  ],
  5: [
    { name: "Gustavo Díaz Ordaz", years: "1911 – 1979", role: "Presidente, 1964–1970",
      fact: "Gobernaba durante el movimiento estudiantil de 1968 y la represión del 2 de octubre en Tlatelolco." },
    { name: "Luis Echeverría", years: "1922 – 2022", role: "Secretario de Gobernación y presidente, 1970–1976",
      fact: "Su gobierno coincidió con el Halconazo de 1971 y con la guerra sucia." },
    { name: "Lucio Cabañas", years: "1938 – 1974", role: "Maestro rural y guerrillero",
      fact: "Dirigió el Partido de los Pobres en Guerrero. Murió en combate en diciembre de 1974." },
    { name: "Genaro Vázquez Rojas", years: "1931 – 1972", role: "Maestro y guerrillero",
      fact: "Encabezó un movimiento armado en Guerrero. Murió en 1972, en un accidente automovilístico." },
    { name: "Elena Poniatowska", years: "nacida en 1932", role: "Escritora y periodista",
      fact: "Su libro La noche de Tlatelolco (1971) reunió testimonios sobre el 2 de octubre de 1968." }
  ],
  6: [
    { name: "José López Portillo", years: "1920 – 2004", role: "Presidente, 1976–1982",
      fact: "Nacionalizó la banca el 1 de septiembre de 1982, en plena crisis de la deuda." },
    { name: "Miguel de la Madrid", years: "1934 – 2012", role: "Presidente, 1982–1988",
      fact: "Aplicó programas de ajuste económico y llevó a México al GATT en 1986." },
    { name: "Carlos Salinas de Gortari", years: "nacido en 1948", role: "Presidente, 1988–1994",
      fact: "Firmó el TLCAN, que entró en vigor en 1994, y reformó el artículo 27 en 1992." },
    { name: "Cuauhtémoc Cárdenas", years: "nacido en 1934", role: "Candidato del Frente Democrático Nacional en 1988",
      fact: "En 1997 ganó la jefatura de gobierno del Distrito Federal, la primera elegida por voto." },
    { name: "Luis Donaldo Colosio", years: "1950 – 1994", role: "Candidato presidencial del PRI",
      fact: "Fue asesinado en Tijuana el 23 de marzo de 1994, durante la campaña." },
    { name: "Ernesto Zedillo", years: "nacido en 1951", role: "Presidente, 1994–2000",
      fact: "Enfrentó la crisis del error de diciembre y reconoció el triunfo de Fox en el año 2000." }
  ],
  7: [
    { name: "Vicente Fox", years: "nacido en 1942", role: "Presidente, 2000–2006",
      fact: "Su triunfo del 2 de julio de 2000 terminó 71 años de gobiernos del PRI." },
    { name: "Francisco Labastida", years: "nacido en 1942", role: "Candidato del PRI en 2000",
      fact: "Perdió la elección presidencial de 2000 frente a Vicente Fox." },
    { name: "Felipe Calderón", years: "nacido en 1962", role: "Presidente, 2006–2012",
      fact: "Inició la estrategia militar contra el narcotráfico al comenzar su gobierno." },
    { name: "Andrés Manuel López Obrador", years: "nacido en 1953", role: "Candidato de la coalición encabezada por el PRD en 2006",
      fact: "Impugnó el resultado de la elección de 2006 y encabezó un plantón en Paseo de la Reforma." }
  ],
  8: [
    { name: "Enrique Peña Nieto", years: "nacido en 1966", role: "Presidente, 2012–2018",
      fact: "Impulsó las reformas del Pacto por México. Su gobierno enfrentó el caso Ayotzinapa en 2014." },
    { name: "Andrés Manuel López Obrador", years: "nacido en 1953", role: "Ganador de la elección de 2018",
      fact: "Ganó con más del 50 % de los votos como candidato de la coalición encabezada por Morena." },
    { name: "José Antonio Meade", years: "nacido en 1969", role: "Candidato del PRI en 2018",
      fact: "Había sido secretario de Hacienda y de Relaciones Exteriores." },
    { name: "Ricardo Anaya", years: "nacido en 1979", role: "Candidato de la coalición PAN-PRD-MC en 2018",
      fact: "Había presidido el PAN antes de competir por la presidencia." }
  ]
};

function initials(name) {
  const parts = name.replace(/[.,]/g, "").split(" ").filter(w => w.length > 2 && w[0] === w[0].toUpperCase());
  const first = parts[0] ? parts[0][0] : name[0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return first + last;
}

// Nombre de archivo de la foto: minúsculas, sin acentos, con guiones. Ej.: "Álvaro Obregón" -> fotos/alvaro-obregon.jpg
function photoSlug(name) {
  return name.normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// Círculo con las iniciales; si existe la foto en la carpeta fotos/, se muestra encima.
const PHOTO_V = 12;
function photoURL(name) { return "fotos/" + photoSlug(name) + ".jpg?v=" + PHOTO_V; }

function monoHTML(name, extra) {
  return `<span class="mono ${extra || ""}">${initials(name)}<img src="${photoURL(name)}" alt="" onerror="this.remove()"></span>`;
}

function peopleHTML(id) {
  const list = PEOPLE[id];
  if (!list) return "";
  return `<h3>Personajes clave</h3>
    <p class="muted">Toca una tarjeta para verla en grande y leer su dato histórico.</p>
    <div class="people">
      ${list.map((p, i) => `<button class="persona" data-m="${id}" data-i="${i}">
        ${monoHTML(p.name)}
        <span class="pname">${p.name}</span>
        <span class="pyears">${p.years}</span>
      </button>`).join("")}
    </div>`;
}

// ---------- Ventana ampliada (fotos y personajes) ----------
function openModal(html) {
  const box = document.getElementById("modal");
  box.querySelector(".modal-body").innerHTML = html;
  box.classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

document.addEventListener("click", e => {
  const modal = document.getElementById("modal");

  if (modal.classList.contains("open")) {
    if (e.target === modal || e.target.closest(".modal-close")) closeModal();
    return;
  }

  const img = e.target.closest(".fig img");
  if (img) {
    const cap = img.closest(".fig").querySelector("figcaption").innerHTML;
    const big = img.src.replace("width=900", "width=1600");
    openModal(`<img class="modal-img" src="${big}" alt="${img.alt}"><div class="modal-cap">${cap}</div>`);
    return;
  }

  const card = e.target.closest(".persona");
  if (card) {
    const p = PEOPLE[card.dataset.m][Number(card.dataset.i)];
    openModal(`<div class="modal-card">
      ${monoHTML(p.name, "big-mono")}
      <h2>${p.name}</h2>
      <p class="muted">${p.years}</p>
      <p><strong>${p.role}</strong></p>
      <p>${p.fact}</p>
    </div>`);
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
