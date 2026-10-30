// Imágenes de cada módulo, tomadas de Wikimedia Commons.
// "file" es el nombre exacto del archivo en commons.wikimedia.org.
// La imagen se carga directo desde Commons; el crédito enlaza a la página del archivo.

const IMAGES = {
  1: {
    file: "Palacio de Bellas Artes, Mexico City, MX.jpg",
    alt: "Palacio de Bellas Artes, Ciudad de México",
    caption: "Palacio de Bellas Artes. Su construcción comenzó en 1904, durante el Porfiriato, y terminó hasta 1934."
  },
  2: {
    file: "Monumento a la Revolución CDMX.jpg",
    alt: "Monumento a la Revolución, Ciudad de México",
    caption: "Monumento a la Revolución, en la Ciudad de México. Su estructura se aprovechó de un edificio legislativo inconcluso del Porfiriato."
  },
  3: {
    file: "Diego Rivera Murals - Secretaria de Educacion Publica (SEP).jpg",
    alt: "Murales de Diego Rivera en la Secretaría de Educación Pública",
    caption: "Murales de Diego Rivera en la SEP, parte del proyecto cultural y educativo de los años veinte."
  },
  4: {
    file: "Biblioteca central de la UNAM.jpg",
    alt: "Biblioteca Central de la UNAM, Ciudad Universitaria",
    caption: "Biblioteca Central de la UNAM, símbolo de la Ciudad Universitaria construida en los años cincuenta."
  },
  5: {
    file: "Plaza de las Tres Culturas en Tlatelolco.jpg",
    alt: "Plaza de las Tres Culturas, Tlatelolco",
    caption: "Plaza de las Tres Culturas, en Tlatelolco, donde ocurrió la represión del 2 de octubre de 1968."
  },
  6: {
    file: "Torre Latinoamericana, ciudad de México.jpg",
    alt: "Torre Latinoamericana, Ciudad de México",
    caption: "Torre Latinoamericana. Resistió el sismo del 19 de septiembre de 1985 que devastó zonas de la capital."
  },
  7: {
    file: "LegPalaceDF.JPG",
    alt: "Palacio Legislativo de San Lázaro",
    caption: "Palacio Legislativo de San Lázaro, sede de la Cámara de Diputados, donde se negociaron las reformas de la transición."
  },
  8: {
    file: "Torre pemex.jpg",
    alt: "Torre de Pemex, Ciudad de México",
    caption: "Torre de Pemex. La reforma energética de 2013-2014 abrió el sector petrolero a la inversión privada."
  }
};

function imageHTML(id) {
  const im = IMAGES[id];
  if (!im) return "";
  const name = im.file.replace(/ /g, "_");
  const src = "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(name) + "?width=900";
  const page = "https://commons.wikimedia.org/wiki/File:" + encodeURIComponent(name);
  return `<figure class="fig">
    <img src="${src}" alt="${im.alt}" loading="lazy" onerror="this.closest('figure').style.display='none'">
    <figcaption>${im.caption}
      <a href="${page}" target="_blank" rel="noopener">Foto: Wikimedia Commons</a>
    </figcaption>
  </figure>`;
}
