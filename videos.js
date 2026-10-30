// Videos de YouTube por módulo (número de módulo -> lista de videos).
// Para agregar uno, escribe su título y pega el enlace de YouTube. Ejemplo:
//   1: [
//     { title: "El Porfiriato explicado", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX" }
//   ],
// Los módulos sin videos simplemente no muestran la sección.

const VIDEOS = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: []
};

function youtubeId(url) {
  const m = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function videosHTML(id) {
  const list = VIDEOS[id] || [];
  if (!list.length) return "";
  return `<h3>Videos recomendados</h3>
    <div class="videos">
      ${list.map(v => {
        const vid = youtubeId(v.url);
        const thumb = vid ? `<img src="https://img.youtube.com/vi/${vid}/hqdefault.jpg" alt="" loading="lazy" onerror="this.remove()">` : "";
        return `<a class="video" href="${v.url}" target="_blank" rel="noopener">
          <span class="thumb">${thumb}<span class="play">▶</span></span>
          <span class="vtitle">${v.title}</span>
        </a>`;
      }).join("")}
    </div>`;
}
