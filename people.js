// Personajes clave de cada módulo.
// name: nombre; years: fechas; role: cargo o papel; fact: dato histórico.
// Si existe fotos/<nombre-sin-acentos>.jpg, se muestra la foto.

const PEOPLE = {
  1: [
    { name: "Porfirio Díaz", years: "1830 – 1915", role: "Presidente de México",
      fact: "En 1908 dijo al periodista Creelman que no se postularía en 1910, pero se postuló otra vez. Renunció en 1911 tras los Tratados de Ciudad Juárez y se embarcó en Veracruz." },
    { name: "Francisco I. Madero", years: "1873 – 1913", role: "Líder antirreeleccionista y presidente, 1911–1913",
      fact: "Proclamó el Plan de San Luis (5 de octubre de 1910). Fue asesinado junto con Pino Suárez tras la Decena Trágica." },
    { name: "Ricardo Flores Magón", years: "1873 – 1922", role: "Periodista y opositor al régimen",
      fact: "Su periódico Regeneración se dirigía a los iletrados, a los más pobres y a los más explotados." },
    { name: "Pascual Orozco", years: "1882 – 1915", role: "Líder de los levantamientos iniciales",
      fact: "Se levantó contra Madero en marzo de 1912 con el Plan de la Empacadora. Fue vencido en tres meses y después apoyó a Huerta." },
    { name: "Francisco Villa", years: "1878 – 1923", role: "Líder de los levantamientos iniciales",
      fact: "Su ejército fue el más poderoso de los revolucionarios y el brazo armado más leal a Madero. Fue asesinado en una emboscada en 1923." },
    { name: "Emiliano Zapata", years: "1879 – 1919", role: "Líder agrarista",
      fact: "Desconoció los acuerdos de Ciudad Juárez y exigió la devolución de las tierras. Firmó el Plan de Ayala a fines de noviembre de 1911." },
    { name: "Bernardo Reyes", years: "1850 – 1913", role: "General y político",
      fact: "Sus seguidores (reyistas) se movilizaron en 1910. Murió en la Decena Trágica cuando intentó tomar Palacio Nacional." }
  ],
  2: [
    { name: "Victoriano Huerta", years: "1850 – 1916", role: "General y presidente de facto",
      fact: "Disolvió las cámaras y gobernó como dictador. Renunció el 15 de julio de 1914. Estados Unidos no reconoció su gobierno." },
    { name: "Venustiano Carranza", years: "1859 – 1920", role: "Primer Jefe del movimiento constitucionalista",
      fact: "Gobernador de Coahuila, se levantó contra Huerta. Fue electo presidente en 1917 y fue asesinado en mayo de 1920 rumbo a Veracruz." },
    { name: "Álvaro Obregón", years: "1880 – 1928", role: "General del ejército del Noroeste",
      fact: "Llegó primero a la Ciudad de México en 1914 y derrotó a Villa en cuatro batallas decisivas." },
    { name: "Francisco Villa", years: "1878 – 1923", role: "Jefe de la División del Norte",
      fact: "Se reunió con Zapata en Xochimilco el 4 de diciembre de 1914. Fue derrotado por Obregón y asesinado en 1923." },
    { name: "Emiliano Zapata", years: "1879 – 1919", role: "Jefe del Ejército Libertador del Sur",
      fact: "Asistió a la Convención de Aguascalientes con voz, pero sin voto. Fue asesinado a traición por René Guajardo en 1919." },
    { name: "Eulalio Gutiérrez", years: "1881 – 1939", role: "Presidente interino de la Convención",
      fact: "Su gobierno se mostró incapaz de hacer una política revolucionaria, y él y sus allegados se pasaron al bando de Obregón." }
  ],
  3: [
    { name: "Álvaro Obregón", years: "1880 – 1928", role: "Presidente, 1920–1924",
      fact: "Tuvo apoyo campesino y repartió más de 1 170 000 hectáreas. Fue asesinado en 1928 después de ganar la reelección." },
    { name: "José Vasconcelos", years: "1882 – 1959", role: "Primer secretario de Educación Pública",
      fact: "Fundó bibliotecas, editó clásicos y reunió a los muralistas. En 1929 fue candidato opositor a la presidencia." },
    { name: "Plutarco Elías Calles", years: "1877 – 1945", role: "Presidente, 1924–1928, y Jefe Máximo",
      fact: "Creó el Banco de México (1925), enfrentó la Guerra Cristera y dominó el Maximato." },
    { name: "Diego Rivera", years: "1886 – 1957", role: "Muralista",
      fact: "Pintó «Día de muertos» y «Quema de los Judas» en la SEP, y murales en Chapingo y en Palacio Nacional." },
    { name: "David Alfaro Siqueiros", years: "1896 – 1974", role: "Muralista",
      fact: "Autor de «Retrato actual de México», un fresco en Santa Bárbara, California." },
    { name: "Emilio Portes Gil", years: "1890 – 1978", role: "Presidente provisional, 1928–1930",
      fact: "Ocupó la presidencia tras el asesinato de Obregón, terminó la Guerra Cristera y concedió la autonomía a la Universidad." },
    { name: "Pascual Ortiz Rubio", years: "1877 – 1963", role: "Presidente, 1930–1932",
      fact: "Fue el primer candidato del PNR. Renunció el 2 de septiembre de 1932 porque no pudo quitarse la tutela de Calles." }
  ],
  4: [
    { name: "Lázaro Cárdenas", years: "1895 – 1970", role: "Presidente, 1934–1940",
      fact: "Decretó la expropiación petrolera el 18 de marzo de 1938 y transformó el PNR en PRM." },
    { name: "Plutarco Elías Calles", years: "1877 – 1945", role: "Jefe Máximo",
      fact: "Al inicio del sexenio de Cárdenas convivieron intereses callistas y cardenistas, hasta que Calles fue expulsado del juego político." },
    { name: "Manuel Pérez Treviño", years: "1890 – 1945", role: "Presidente del PNR y candidato favorecido por Calles",
      fact: "Calles lo prefería, pero la presión de las filas intermedias del partido llevó a la nominación de Cárdenas." },
    { name: "Adalberto Tejeda", years: "1883 – 1960", role: "Candidato presidencial en 1934",
      fact: "Fue uno de los tres candidatos del sexenio 1934–1940." },
    { name: "León Trotsky", years: "1879 – 1940", role: "Revolucionario ruso",
      fact: "Cárdenas le dio asilo político en México." }
  ],
  5: [
    { name: "Manuel Ávila Camacho", years: "1897 – 1955", role: "Presidente, 1940–1946",
      fact: "Impulsó la Unidad Nacional, firmó el pacto obrero-industrial, creó el IMSS (1943) y mandó el Escuadrón 201 a la guerra." },
    { name: "Miguel Alemán Valdés", years: "1900 – 1983", role: "Presidente, 1946–1952",
      fact: "Fue el primer presidente civil. Su gobierno se asocia con corrupción, charrismo sindical y apoyo a la inversión extranjera." },
    { name: "Adolfo Ruiz Cortines", years: "1889 – 1973", role: "Presidente, 1952–1958",
      fact: "En 1953 se reconoció el voto de la mujer. Fue un gobierno de austeridad y «moralidad»." },
    { name: "Adolfo López Mateos", years: "1909 – 1969", role: "Presidente, 1958–1964",
      fact: "Nacionalizó la industria eléctrica, creó el ISSSTE y los libros de texto gratuitos, y enfrentó a ferrocarrileros y maestros." },
    { name: "Vicente Lombardo Toledano", years: "1894 – 1968", role: "Líder político y sindical",
      fact: "Creó el Partido Popular en 1948, que en 1960 se convirtió en Partido Popular Socialista." },
    { name: "Fidel Velázquez", years: "1900 – 1997", role: "Líder de la CTM",
      fact: "Dirigió la Confederación de Trabajadores de México durante unos 60 años." },
    { name: "Rubén Jaramillo", years: "1900 – 1962", role: "Líder campesino de Morelos",
      fact: "Excombatiente zapatista, fue asesinado en 1962. Es un símbolo de la lucha campesina." },
    { name: "Demetrio Vallejo", years: "1910 – 1985", role: "Líder ferrocarrilero",
      fact: "Encabezó el movimiento ferrocarrilero que comenzó en 1958." },
    { name: "Othón Salazar", years: "1920 – 2008", role: "Líder magisterial",
      fact: "Encabezó el movimiento de los maestros que comenzó en 1958." }
  ],
  6: [
    { name: "Gustavo Díaz Ordaz", years: "1911 – 1979", role: "Presidente, 1964–1970",
      fact: "Su gobierno fue autoritario. Enfrentó el movimiento de los médicos (1964–1965) y el estudiantil de 1968." },
    { name: "Luis Echeverría", years: "1922 – 2022", role: "Presidente, 1970–1976",
      fact: "Aplicó el «desarrollo compartido» para corregir los errores del desarrollo estabilizador." },
    { name: "José López Portillo", years: "1920 – 2004", role: "Presidente, 1976–1982",
      fact: "Usó el petróleo como aval de préstamos y, ya en crisis, expropió los bancos privados en 1982." },
    { name: "Lucio Cabañas", years: "1938 – 1974", role: "Maestro rural y guerrillero",
      fact: "Dirigió un movimiento guerrillero en Guerrero." },
    { name: "Genaro Vázquez Rojas", years: "1931 – 1972", role: "Maestro y guerrillero",
      fact: "Encabezó un movimiento guerrillero en Guerrero." }
  ],
  7: [
    { name: "Miguel de la Madrid", years: "1934 – 2012", role: "Presidente, 1982–1988",
      fact: "Inició el modelo neoliberal: privatizó cerca de 500 empresas y dio poder a los tecnócratas." },
    { name: "Carlos Salinas de Gortari", years: "nacido en 1948", role: "Presidente, 1988–1994",
      fact: "Privatizó la banca y unas 300 empresas, reformó los artículos 27 y 28 y firmó el TLC, que entró en vigor el 1 de enero de 1994." },
    { name: "Cuauhtémoc Cárdenas", years: "nacido en 1934", role: "Candidato del Frente Democrático Nacional en 1988",
      fact: "Rompió con el PRI para defender el nacionalismo revolucionario. Tras la elección de 1988 surgió el PRD." },
    { name: "Manuel Clouthier", years: "1934 – 1989", role: "Candidato del PAN en 1988",
      fact: "Compitió en la elección de 1988 contra Salinas y Cárdenas." },
    { name: "Carlos Slim", years: "nacido en 1940", role: "Empresario",
      fact: "Fue declarado el hombre más rico del mundo en 2007. Su fortuna se asocia con la privatización de Telmex." }
  ],
  8: [
    { name: "Ernesto Zedillo", years: "nacido en 1951", role: "Presidente, 1994–2000",
      fact: "Enfrentó el «error de diciembre», rescató a los bancos con el Fobaproa y creó Progresa." },
    { name: "Vicente Fox", years: "nacido en 1942", role: "Presidente, 2000–2006",
      fact: "Continuó el modelo neoliberal y creó Oportunidades. Hubo estabilidad sin crecimiento." },
    { name: "Felipe Calderón", years: "nacido en 1962", role: "Presidente, 2006–2012",
      fact: "Ganó una elección muy cerrada en 2006 e inició la guerra contra el narco con el ejército." },
    { name: "Andrés Manuel López Obrador", years: "nacido en 1953", role: "Candidato del PRD en 2006",
      fact: "Pidió «voto por voto, casilla por casilla» y se declaró «Presidente Legítimo de México»." }
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
const PHOTO_V = 13;
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
    openModal(`<img class="modal-img" src="${img.src}" alt="${img.alt}"><div class="modal-cap">${cap}</div>`);
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
